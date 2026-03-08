

## Plan: Fix Grade 10 Questions Not Displaying

### Root Cause
`src/pages/QuizPage.tsx` has its own `getQuestionsForSubject` function (line 37) that handles question routing per grade. For Grade 10 (lines 50-59), it only supports Biology and returns empty for all other subjects — including Mathematics and Physics which have 210 and 180 questions respectively sitting unused in their data files.

### Fix: Edit `src/pages/QuizPage.tsx`

**1. Add imports** for the Grade 10 question data:
```typescript
import { grade10MathematicsQuestions } from "@/data/grade10MathematicsQuestions";
import { grade10PhysicsQuestions } from "@/data/grade10PhysicsQuestions";
```

**2. Expand the Grade 10 block** (lines 50-59) to handle Mathematics and Physics the same way Grade 12 subjects are handled — look up the chapter key in the questions object, filter by difficulty, and return normalized questions:

- **Mathematics**: Look up `grade10MathematicsQuestions[chapter]`, filter by difficulty, map to standard Question format
- **Physics**: Look up `grade10PhysicsQuestions[chapter]`, filter by difficulty, map to standard Question format
- Keep existing Biology handler
- Remove the catch-all "not yet available" return so future subjects can be added incrementally

### No other files need changes
The data files and `quizUtils.ts` are already correct. Only the QuizPage routing logic needs updating.

