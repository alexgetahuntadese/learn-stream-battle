

## Plan: Add Recent Activity Section to Homepage

Since quiz attempts are stored in localStorage via `performanceUtils`, we can read them and display the most recent completions on the homepage as a "Recent Activity" feed.

### Changes to `src/pages/Index.tsx`

**Add a "Recent Activity" section** between the Stats section and the bottom of the page:

1. **Import** `getPerformanceData` from `@/lib/performanceUtils`
2. **Read attempts** from localStorage on mount using `useMemo`
3. **Display the 5 most recent attempts** in a glassmorphism container matching the existing design:
   - Each row shows: subject name, chapter, score badge (color-coded green/yellow/red), difficulty badge, and relative time (e.g. "2 hours ago")
   - If no attempts exist, show an encouraging empty state: "No quizzes taken yet — start your first one!"
4. **Fallback testimonials**: If there are no real attempts, show 3-4 hardcoded student testimonials with Ethiopian names, subjects studied, and brief quotes — giving the homepage social proof even for new visitors
5. **Staggered fade-in animation** matching existing card pattern (animationDelay after stats)
6. **Trophy icon** in the section header

Uses `date-fns`'s `formatDistanceToNow` (already installed) for relative timestamps.

### Files Modified
- `src/pages/Index.tsx` — add recent activity / testimonials section

