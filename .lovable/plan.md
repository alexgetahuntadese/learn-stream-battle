

## Plan: Add Shooting Star Animation

### 1. `src/index.css` — Add shooting star keyframes

Add a `@keyframes shooting-star` animation that moves a small bright element diagonally across the screen with a fading trail effect, using `translateX` + `translateY` from top-right to bottom-left.

### 2. `src/pages/GradesPage.tsx` — Add shooting star elements

- Create a `generateShootingStars(count)` utility (3-5 stars) with randomized start positions, delays (staggered 4-8s apart), and durations.
- Use `useMemo` to persist them.
- Render as thin, elongated elements with a white gradient trail, using `animation-iteration-count: infinite` with long random delays so they fire occasionally.

### 3. `src/pages/SubjectsPage.tsx` and `src/pages/ChaptersPage.tsx`

- Add the same shooting star elements for consistency across all dark-themed pages.

