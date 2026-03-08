

## Fix: Grade 11 Geography chapters not loading

### Issue Found
The `ChaptersPage.tsx` has no handler for Grade 11 Geography. When you navigate to Grade 11 → Geography, the `getChaptersForSubject()` function falls through all conditionals and returns no chapters, causing the empty page with "NaN%" progress.

### Changes Required

**`src/pages/ChaptersPage.tsx`** — Two additions:

1. **Add import** for `grade11GeographyQuestions` from `@/data/grade11GeographyQuestions`

2. **Add handler block** (before the Grade 12 Geography block, around line 360):
   ```
   if (decodedSubject === 'Geography' && grade === '11') {
     return Object.keys(grade11GeographyQuestions).map(...)
   }
   ```
   Following the exact same pattern as the Grade 12 Geography handler.

3. **Add description helper** `getGrade11GeographyChapterDescription()` with descriptions for all 8 chapters:
   - Chapter 1: Formation of the Continents
   - Chapter 2: Climate Classification and Climate Regions
   - Chapter 3: Natural Resources and Conflicts
   - Chapter 4: Global Population Dynamics
   - Chapter 5: Geography and Economic Development
   - Chapter 6: Major Global Environmental Changes
   - Chapter 7: Geographic Issues and Public Concerns
   - Chapter 8: Geo-spatial Information and Data Processing

