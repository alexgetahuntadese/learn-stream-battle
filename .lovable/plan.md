

## Plan: Add Grade 11 English (New Curriculum — 10 Units, 300 Questions)

Note: The user listed 10 units (not 7 as initially stated). All 10 will be added.

### Changes

**1. Update `src/data/grade11Subjects.ts`** — Replace the 6 old English chapters with the 10 new units:
- Unit 1: Environmental Hazards
- Unit 2: Civilization
- Unit 3: Causes of Road Traffic Accidents
- Unit 4: People and Natural Resources
- Unit 5: Irrigation
- Unit 6: Global Warming
- Unit 7: Patriotism
- Unit 8: Efficiency of Health Services
- Unit 9: Indigenous Conflict Resolution
- Unit 10: Artificial Intelligence

**2. Create `src/data/grade11EnglishQuestions.ts`** — 300 questions total (10 units × 3 difficulties × 10 questions). Each question has 4 options, correct answer, explanation, and difficulty. Questions will cover reading comprehension, vocabulary, grammar, and critical thinking within each unit's thematic context.

**3. Update `src/pages/ChaptersPage.tsx`** — Import `grade11EnglishQuestions`, add handler for `decodedSubject === 'English' && grade === '11'`, and add `getGrade11EnglishChapterDescription()` helper. Same pattern as Chemistry/Economics handlers.

**4. Update `src/lib/quizUtils.ts`** — Import `grade11EnglishQuestions` and add `"English": grade11EnglishQuestions` to the `"11"` key in `questionSets`.

