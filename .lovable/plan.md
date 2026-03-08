

## Plan: Add Grade 10 Mathematics Quiz Questions

### What
Create a new file `src/data/grade10MathematicsQuestions.ts` with 10 questions per difficulty level (Easy, Medium, Hard) for each of the 7 Grade 10 Mathematics units, and wire it into the quiz system.

### Files to Create/Edit

**1. Create `src/data/grade10MathematicsQuestions.ts`**
- Export interface `MathematicsQuestion` (same pattern as grade11)
- Export `grade10MathematicsQuestions` as `{ [chapter: string]: MathematicsQuestion[] }`
- Keys must match chapter names from `grade10Subjects.ts` exactly
- 7 units × 30 questions each (10 Easy + 10 Medium + 10 Hard) = **210 questions total**

Units and topic coverage:
- **Unit 1: Relations and Functions** — ordered pairs, domain/range, function notation, vertical line test, composition, inverse
- **Unit 2: Polynomial Functions** — degree, zeros, factoring, remainder/factor theorems, graphing
- **Unit 3: Exponential and Logarithmic Functions** — laws of exponents, exponential growth/decay, log properties, solving equations
- **Unit 4: Trigonometric Functions** — unit circle, sin/cos/tan values, identities, graphs, solving trig equations
- **Unit 5: Circles** — equation of circle, tangent lines, arc length, sector area, chords
- **Unit 6: Solid Figures** — surface area, volume of prisms/cylinders/cones/spheres, cross-sections
- **Unit 7: Coordinate Geometry** — distance, midpoint, slope, equation of line, parallel/perpendicular lines

**2. Edit `src/lib/quizUtils.ts`**
- Import `grade10MathematicsQuestions`
- Add `"10"` key to `questionSets` with `"Mathematics": grade10MathematicsQuestions`

### Question Format (matches existing pattern)
```typescript
{
  id: string,           // e.g. 'math10_rel_e1'
  question: string,
  options: string[],     // 4 options
  correct: string,       // matches one option exactly
  explanation: string,
  difficulty: 'Easy' | 'Medium' | 'Hard'
}
```

