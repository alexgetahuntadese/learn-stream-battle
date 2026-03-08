

## Plan: Add Grade 11 Geography with Updated Chapters and Quiz Questions

### 1. Update `src/data/grade11Subjects.ts` — Fix Geography chapters
Replace the current 6 placeholder chapters with the correct 8 New Curriculum chapters:
- Chapter 1: Formation of the Continents
- Chapter 2: Climate Classification and Climate Regions of Our World
- Chapter 3: Natural Resources and Conflicts Over Resources
- Chapter 4: Global Population Dynamics and Challenges
- Chapter 5: Geography and Economic Development
- Chapter 6: Major Global Environmental Changes
- Chapter 7: Geographic Issues and Public Concerns
- Chapter 8: Geo-spatial Information and Data Processing

### 2. Create `src/data/grade11GeographyQuestions.ts`
Create a new question bank following the same structure as `grade12GeographyQuestions.ts`:
- Interface: `GeographyQuestion` with id, question, options, correct, explanation, difficulty
- 8 units, each with 10 Easy + 10 Medium + 10 Hard questions (240 total)
- Questions based on the detailed chapter descriptions provided

### 3. Update `src/lib/quizUtils.ts` — Register the new question set
- Import `grade11GeographyQuestions`
- Add `"Geography": grade11GeographyQuestions` to the `"11"` entry in `questionSets`

