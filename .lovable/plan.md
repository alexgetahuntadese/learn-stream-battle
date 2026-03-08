

## Plan: Add Grade 10 Physics Quiz Questions

### What
Create `src/data/grade10PhysicsQuestions.ts` with 30 questions per unit (10 Easy + 10 Medium + 10 Hard) across 6 units = **180 questions total**, and wire it into the quiz system.

### Files

**1. Create `src/data/grade10PhysicsQuestions.ts`**
- Same interface pattern as `MathematicsQuestion`
- Export `grade10PhysicsQuestions` as `{ [chapter: string]: PhysicsQuestion[] }`
- Keys match chapter names from `grade10Subjects.ts` exactly:
  - Unit 1: Vector Quantities — resultant vectors, components, direction, magnitude
  - Unit 2: Uniformly Accelerated Motion — kinematics equations, free fall, displacement-time graphs
  - Unit 3: Elasticity and Static Equilibrium of Rigid Body — Hooke's law, stress/strain, torque, center of mass
  - Unit 4: Static and Current Electricity — Coulomb's law, Ohm's law, circuits, resistance
  - Unit 5: Magnetism — magnetic fields, electromagnets, magnetic force, Earth's magnetism
  - Unit 6: Electromagnetic Waves and Geometrical Optics — EM spectrum, reflection, refraction, Snell's law, lenses

**2. Edit `src/lib/quizUtils.ts`**
- Import `grade10PhysicsQuestions`
- Add `"Physics": grade10PhysicsQuestions` to the `"10"` key in `questionSets`

