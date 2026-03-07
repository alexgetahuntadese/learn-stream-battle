

## Problem

The Grade 11 Chemistry chapters page is empty (as shown in the screenshot) because `ChaptersPage.tsx` has no handler for `decodedSubject === 'Chemistry' && grade === '11'`. The `getChaptersForSubject()` function falls through to the empty array fallback. The "NaN%" progress is a consequence of having zero chapters.

## Plan

**1. Add Grade 11 Chemistry handler in `ChaptersPage.tsx`**

Add a new block in `getChaptersForSubject()` (after the Grade 11 Mathematics block, around line 104) to handle Grade 11 Chemistry. The `grade11Chemistry` data uses a flat array per chapter (same structure as Biology), so the handler follows the same pattern:

```ts
if (decodedSubject === 'Chemistry' && grade === '11') {
  return Object.keys(grade11Chemistry).map((chapterName, index) => {
    const questions = grade11Chemistry[chapterName];
    // filter by difficulty, build chapter object
  });
}
```

- Import `grade11Chemistry` from `@/data/grade11Chemistry` (add to imports at top)
- Add a `getGrade11ChemistryChapterDescription()` helper with descriptions for all 6 units

**2. Fix NaN% progress**

The overall progress calculation likely divides by `chapters.length` which is 0. Add a guard to show 0% when no chapters exist.

