

## Plan: Add Grade 10 English Starter Quiz Questions

### What
Create **300 quiz questions** for Grade 10 English covering all 10 units (30 per unit: 10 Easy, 10 Medium, 10 Hard).

### Units (from `grade10Subjects.ts`)
1. Population Growth
2. Travel Behaviors
3. Punctuality
4. Tourist Attractions
5. Honey Processing
6. Migration
7. Branding Ethiopia and National Identity
8. The Healing Power of Plants
9. Multilingualism
10. Digital Vs Satellite Television

### Changes

**1. Create `src/data/grade10EnglishQuestions.ts`**
- Same structure as `grade10ChemistryQuestions.ts`: interface + exported object keyed by unit name
- Questions focus on reading comprehension, vocabulary, grammar, and writing skills related to each unit's theme
- 10 Easy / 10 Medium / 10 Hard per unit

**2. Update `src/pages/QuizPage.tsx`**
- Import `grade10EnglishQuestions`
- Add `'english': grade10EnglishQuestions` to the `grade10DataMap`

**3. Update `src/pages/ChaptersPage.tsx`**
- Import `grade10EnglishQuestions`
- Add English to the Grade 10 dynamic question count logic

**4. Update `src/lib/quizUtils.ts`**
- Add `"English": grade10EnglishQuestions` to `questionSets["10"]`

