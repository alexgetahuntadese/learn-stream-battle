

## Plan: Add Grade 11 History with Updated Chapters and Quiz Questions

### 1. Update `src/data/grade11Subjects.ts` — Fix History chapters
Replace the 6 placeholder chapters (lines 139-146) with the correct 9 New Curriculum units:
- Unit 1: History, Historiography, And Human Evolution
- Unit 2: Major Spots Of Ancient World Civilizations Up To C.500 A.D
- Unit 3: Peoples, States, And Historical Processes In Ethiopia And The Horn To The End Of The 13th Century
- Unit 4: The Middle Ages And Early Modern World, C. 500 AD-1789
- Unit 5: Peoples And States Of Africa To 1500
- Unit 6: Africa And The Outside World: 1500-1880
- Unit 7: States, Principalities, Population Movements, And Interactions In Ethiopia
- Unit 8: Political, Social, And Economic Processes In Ethiopia, Mid 16th To Mid-19th Century
- Unit 9: The Age Of Revolutions, 1789 To 1815

### 2. Create `src/data/grade11HistoryQuestions.ts`
New question bank following the same `HistoryQuestion` interface from `grade12HistoryQuestions.ts`:
- 9 units × 30 questions each (10 Easy, 10 Medium, 10 Hard) = 270 total questions
- Each question: id, question, 4 options, correct answer, explanation, difficulty
- Export `grade11HistoryQuestions` object keyed by unit name and a `getGrade11HistoryQuestions()` helper

### 3. Update `src/lib/quizUtils.ts`
- Import `grade11HistoryQuestions`
- Add `"History": grade11HistoryQuestions` to the Grade 11 entry in `questionSets`

### 4. Update `src/pages/ChaptersPage.tsx`
- Import `grade11HistoryQuestions`
- Add handler for `decodedSubject === 'History' && grade === '11'`
- Add `getGrade11HistoryChapterDescription()` helper with descriptions for all 9 units

