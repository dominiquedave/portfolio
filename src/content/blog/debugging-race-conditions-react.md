---
title: "Debugging Race Conditions in React: A Real-World Case Study"
date: "2025-11-20"
tags: ["React", "TypeScript", "Debugging", "Performance"]
excerpt: "How I tracked down and fixed a subtle race condition that was causing intermittent data inconsistencies in a production React application."
---

Race conditions are among the trickiest bugs to diagnose. They don't always manifest, making them hard to reproduce, and when they do appear, the symptoms can be misleading. Here's how I recently solved one in a production React application.

## The Problem

A client reported that their dashboard occasionally showed stale data after switching between tabs. The issue was intermittent—sometimes the data was correct, sometimes it wasn't. Classic race condition territory.

## Investigation

The component in question looked something like this:

```typescript
function Dashboard({ tabId }: { tabId: string }) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDashboardData(tabId).then((result) => {
      setData(result);
      setLoading(false);
    });
  }, [tabId]);

  if (loading) return <Spinner />;
  return <DashboardContent data={data} />;
}
```

Can you spot the issue? If the user switches tabs quickly, multiple fetch requests fire. The problem is that responses can arrive out of order—the response for Tab A might arrive *after* the response for Tab B, even though Tab B was requested later.

## The Solution

The fix involves tracking whether the effect is still "current" when the response arrives:

```typescript
function Dashboard({ tabId }: { tabId: string }) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    fetchDashboardData(tabId).then((result) => {
      if (!cancelled) {
        setData(result);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [tabId]);

  if (loading) return <Spinner />;
  return <DashboardContent data={data} />;
}
```

The cleanup function sets `cancelled = true` when the effect re-runs (due to `tabId` changing) or when the component unmounts. The stale response is simply ignored.

## Using AbortController for Better Cleanup

An even better approach uses `AbortController` to actually cancel the in-flight request:

```typescript
useEffect(() => {
  const controller = new AbortController();

  setLoading(true);
  fetchDashboardData(tabId, { signal: controller.signal })
    .then((result) => {
      setData(result);
      setLoading(false);
    })
    .catch((err) => {
      if (err.name !== 'AbortError') {
        setError(err);
        setLoading(false);
      }
    });

  return () => controller.abort();
}, [tabId]);
```

This approach is more efficient because it actually cancels the network request rather than just ignoring the response.

## Key Takeaways

1. **Always consider cleanup** - Any async operation in a `useEffect` should have corresponding cleanup logic.

2. **Test with artificial delays** - During development, add artificial delays to async operations to make race conditions more apparent.

3. **Use React Query or SWR** - Libraries like React Query handle these edge cases automatically, which is why I often recommend them for data fetching.

4. **Consider the user experience** - Even with proper cleanup, rapid tab switching might benefit from debouncing to reduce unnecessary requests.

Race conditions are subtle, but with systematic debugging and proper cleanup patterns, they're entirely preventable.
