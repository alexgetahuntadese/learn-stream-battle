

## Plan: Update Grade 11 Chemistry to New Curriculum (6 Units)

### What changes

**1. Update `src/data/grade11Subjects.ts`** — Replace the 7 old chemistry chapters with the 6 new units:
- Unit 1: Atomic Structure And Periodic Properties Of The Elements
- Unit 2: Chemical Bonding
- Unit 3: Physical State Of Matter
- Unit 4: Chemical Kinetics
- Unit 5: Chemical Equilibrium
- Unit 6: Some Important Oxygen-containing Organic Compounds

**2. Update `src/data/grade11Chemistry.ts`** — Replace existing chapter keys and add 10 questions per difficulty (Easy, Medium, Hard) for each of the 6 units = **180 total questions**. Each question includes 4 options, correct answer, and explanation. Existing questions from "Atomic Structure" and "Chemical Bonding" will be kept and expanded; 4 new units get fresh questions.

**3. Update `src/lib/quizUtils.ts`** — No changes needed; it already uses dynamic keys from the data files.

### Scope
- ~180 new/updated chemistry questions across 6 units × 3 difficulties × 10 questions
- Chapter naming updated from "Chapter X" to "Unit X" format throughout

