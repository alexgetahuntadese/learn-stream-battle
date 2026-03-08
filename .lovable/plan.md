

## Plan: Add Grade 9 and Grade 10

### Overview
Add Grade 9 and Grade 10 to the existing grade selection system. Currently the app only supports Grades 11 and 12. This involves updating the grade selection page, subjects page, and creating placeholder question data for the new grades.

### Changes Required

**1. Update `src/pages/GradesPage.tsx`**
- Add Grade 9 and Grade 10 entries to the `gradeData` array with appropriate icons, colors, and subject counts
- Grade 9: ~10 subjects, Grade 10: ~11 subjects

**2. Update `src/pages/SubjectsPage.tsx`**
- Add Grade 9 and Grade 10 subject configurations in `getSubjectsForGrade()`
- Grade 9 subjects: Mathematics, Physics, Chemistry, Biology, English, Geography, History, Civic Education, Amharic
- Grade 10 subjects: Mathematics, Physics, Chemistry, Biology, English, Geography, History, Civic Education, Amharic, Economics

**3. Update `src/pages/ChaptersPage.tsx`**
- Add chapter data generation for Grade 9 and Grade 10 subjects with Ethiopian curriculum chapter names
- Since no real question data exists yet, chapters will show with generic placeholder structure

**4. Update `src/pages/QuizPage.tsx`**
- Add Grade 9 and Grade 10 question loading logic
- Initially return empty arrays (no questions yet) with a message indicating content is coming soon

**5. Create placeholder data files**
- `src/data/grade9Subjects.ts` — subject definitions with real Ethiopian curriculum chapter names
- `src/data/grade10Subjects.ts` — subject definitions with real Ethiopian curriculum chapter names

**6. Update `src/pages/GradeSelection.tsx`**
- Add Grade 9 and Grade 10 to the `grades` array

### Notes
- No real quiz questions will be added for Grades 9-10 in this iteration — the structure will be in place for future content
- The routing already uses dynamic `:grade` params, so no route changes needed in `App.tsx`

