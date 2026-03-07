

## Plan: Remove Grades 1–10 (Keep 11–12 Only)

**1. `src/pages/GradesPage.tsx`** (line 11)
- Change `Array.from({ length: 12 }, (_, i) => i + 1)` to `[11, 12]`

**2. `src/pages/GradeSelection.tsx`** (lines 9–18)
- Remove all grade entries except 11 and 12 from the `grades` array

