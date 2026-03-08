

# Fix UI and Font Color Consistency Across All Pages

## Problem
Several pages use inconsistent background gradients, font colors, and button styles compared to the premium dark theme established on the Homepage, Grades, Subjects, and Chapters pages.

## Inconsistencies Found

| Page | Current Background | Should Be |
|------|-------------------|-----------|
| ProfilePage | `from-slate-900 via-purple-800 to-indigo-700` | `from-slate-950 via-indigo-950 to-slate-900` |
| PerformancePage | `from-slate-900 via-purple-800 to-indigo-700` | `from-slate-950 via-indigo-950 to-slate-900` |
| QuizPage | Plain `bg-slate-900` (no gradient, no stars) | `from-slate-950 via-indigo-950 to-slate-900` |
| CareerSimulatorPage | `from-slate-900 via-purple-900 to-indigo-900` | `from-slate-950 via-indigo-950 to-slate-900` |

Additional issues:
- **ProfilePage**: Uses `text-purple-200`, `text-gray-300`, `text-gray-400` instead of `text-white/50`, `text-white/70` etc. Card backgrounds use `bg-white/10` instead of `bg-white/[0.04]`.
- **PerformancePage**: Same mismatched card and text colors (`bg-white/10`, `text-gray-300`).
- **QuizPage**: No gradient background, no decorative elements. Buttons use `bg-blue-600` instead of gradient style.
- **CareerSimulatorPage**: Close but not exact match. Uses `text-purple-200`, `text-purple-100`.
- **QuestionExplanation**: Uses `bg-slate-700`, `border-slate-600`, `bg-slate-800` -- old style.

## Changes

**1. ProfilePage** -- Update background gradient, card styles, and text colors to match the glassmorphism dark theme.

**2. PerformancePage** -- Same treatment: update background, card backgrounds to `bg-white/[0.04]` with `border-white/[0.08]`, text colors to `text-white/50` and `text-white/70`.

**3. QuizPage** -- Update all state views (loading, error, quiz, etc.) to use the consistent gradient background. Update button colors to use violet/fuchsia gradient style.

**4. CareerSimulatorPage** -- Align background gradient and text color tokens.

**5. QuestionExplanation** -- Update from slate-based colors to glassmorphism style (`bg-white/[0.04]`, `border-white/[0.08]`).

**6. Results component** -- Already mostly correct but will normalize any remaining gray text colors.

All changes are purely cosmetic CSS class updates -- no logic or structural changes.

