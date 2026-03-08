

## Plan: Fix Grade 11 Physics

The Grade 11 Physics data file currently has only **6 questions** (1 per difficulty across 2 chapters). It needs **180 questions** (10 Easy + 10 Medium + 10 Hard per chapter × 6 chapters) and a proper ChaptersPage handler.

### Changes

**1. Rewrite `src/data/grade11Physics.ts`**
Expand from 6 to 180 questions across all 6 chapters defined in `grade11Subjects.ts`:
- Chapter 1: Mechanics (Newton's laws, kinematics, momentum, work/energy)
- Chapter 2: Waves and Sound (wave properties, sound, Doppler effect)
- Chapter 3: Heat and Thermodynamics (temperature, heat transfer, gas laws, entropy)
- Chapter 4: Electricity and Magnetism (circuits, Ohm's law, magnetic fields, electromagnetic induction)
- Chapter 5: Optics (reflection, refraction, lenses, mirrors, wave optics)
- Chapter 6: Modern Physics (photoelectric effect, atomic models, nuclear physics, relativity)

Each chapter: 10 Easy, 10 Medium, 10 Hard. Same interface already defined in the file.

**2. Add Grade 11 Physics handler in `src/pages/ChaptersPage.tsx`**
- Import `grade11Physics` (already imported? — no, it's not imported, only grade12 is)
- Add `import { grade11Physics } from '@/data/grade11Physics'`
- Add a handler block for `decodedSubject === 'Physics' && grade === '11'` that reads from `grade11Physics`, computing question counts and difficulty breakdowns dynamically (same pattern as Grade 12 Physics handler)

**3. Verify `src/lib/quizUtils.ts`** — already has `"Physics": grade11Physics` registered. No change needed.

**4. Verify `src/pages/QuizPage.tsx`** — already imports `getGrade11PhysicsQuestions` and handles Grade 11 Physics. No change needed.

