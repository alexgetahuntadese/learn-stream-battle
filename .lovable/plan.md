

## Grade 11 English Is Not Implemented Yet

The previous attempts to add Grade 11 English were all interrupted before any files were saved. The data file `src/data/grade11EnglishQuestions.ts` does not exist, and no references to it exist anywhere in the codebase.

**Before testing can happen, the feature must be built first.** Here is the implementation plan:

### Changes (4 files)

**1. Create `src/data/grade11EnglishQuestions.ts`**
- 300 questions: 10 units × 3 difficulties × 10 questions each
- Units: Environmental Hazards, Civilization, Causes of Road Traffic Accidents, People and Natural Resources, Irrigation, Global Warming, Patriotism, Efficiency of Health Services, Indigenous Conflict Resolution, Artificial Intelligence
- Each question: question text, 4 options, correct answer, explanation, difficulty

**2. Update `src/data/grade11Subjects.ts`**
- Replace the 6 placeholder English chapters with the 10 new curriculum units

**3. Update `src/pages/ChaptersPage.tsx`**
- Import `grade11EnglishQuestions`
- Add handler for `decodedSubject === 'English' && grade === '11'`
- Add `getGrade11EnglishChapterDescription()` helper

**4. Update `src/lib/quizUtils.ts`**
- Import and register `grade11EnglishQuestions` under grade 11 in `questionSets`

