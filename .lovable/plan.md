

## Plan: Add Grade 11 Civic Education Curriculum

Civics already appears on the subjects page for both grades, but Grade 11 has no data file, no chapter definitions in `grade11Subjects.ts`, and no handler in `ChaptersPage.tsx`. This plan adds the full Grade 11 Civic Education curriculum based on the Ethiopian New Curriculum.

### Changes

**1. Update `src/data/grade11Subjects.ts`**
Add a new "Civics" subject entry under `'Social Sciences'` category with these chapters (based on the Ethiopian Grade 11 Civic and Ethical Education curriculum):
- Unit 1: Building a Democratic System
- Unit 2: Democratic Rights of Citizens
- Unit 3: Nations, Nationalities and Peoples of Ethiopia
- Unit 4: Constitutionalism and the Ethiopian Constitution
- Unit 5: Ethics and Ethical Conduct
- Unit 6: Patriotism and National Identity
- Unit 7: Gender Equality and Development
- Unit 8: Conflict Resolution and Peace Building
- Unit 9: Good Governance
- Unit 10: Economic Rights and Financial Literacy
- Unit 11: Environmental Ethics and Sustainable Development

Icon: `"Scale"` (for justice/civics). ID: `"civics"`.

**2. Create `src/data/grade11CivicsQuestions.ts`**
New question bank with 330 questions (10 Easy + 10 Medium + 10 Hard per unit × 11 units). Same interface as `grade12CivicsQuestions.ts`. Topics cover Ethiopian democracy, constitutional rights, ethics, patriotism, gender equality, conflict resolution, governance, and environmental ethics.

**3. Update `src/lib/quizUtils.ts`**
- Import `grade11CivicsQuestions`
- Add `"Civics": grade11CivicsQuestions` to `questionSets["11"]`

**4. Update `src/pages/ChaptersPage.tsx`**
Add a handler block for `decodedSubject === 'Civic Education' && grade === '11'` that reads from `grade11CivicsQuestions`, computing question counts and difficulty breakdowns dynamically (same pattern as the Grade 12 Civics handler).

**5. Update `src/pages/SubjectsPage.tsx`**
Update the Civic Education entry in `baseSubjects` to show 11 chapters (it already does — no change needed there).

**6. Update `src/pages/QuizPage.tsx`**
Add a case for Grade 11 Civics in the question-loading switch so quizzes actually work.

