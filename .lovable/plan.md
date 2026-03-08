

## Plan: Add Quiz Questions for Grade 11 Amharic (10 Units × 30 Questions)

### 1. Create `src/data/grade11AmharicQuestions.ts`
New question bank with 300 total questions (10 per difficulty × 3 difficulties × 10 units):

- **Unit 1**: ቋንቋና ህብረተሰብ (Language and Society) — questions on language functions, dialects, sociolinguistics
- **Unit 2**: ቅርሶቻችን (Our Heritage) — questions on Ethiopian cultural heritage, preservation, tangible/intangible heritage
- **Unit 3**: ወግ (Traditional Literature) — questions on Ethiopian oral traditions, proverbs, folk tales
- **Unit 4**: ልቦለድ (Novel) — questions on novel elements, Ethiopian novelists, literary analysis
- **Unit 5**: የቋንቋ ስዛ (Linguistic Relevance) — questions on grammar, syntax, language structure
- **Unit 6**: ግጥም (Poetry) — questions on poetic forms, Ethiopian poetry, literary devices
- **Unit 7**: አርበኝነት (Patriotism) — questions on Ethiopian patriotic literature, historical figures
- **Unit 8**: ትውፊት (Tradition and Lifestyle) — questions on Ethiopian traditions, customs, cultural practices
- **Unit 9**: ስኬት (Success) — questions on motivational literature, achievement themes
- **Unit 10**: ኪነጥበብ (Art) — questions on Ethiopian art forms, theater, music, visual arts

Each question: id, question, 4 options, correct answer, explanation, difficulty (Easy/Medium/Hard). Same interface as `HistoryQuestion`.

### 2. Update `src/lib/quizUtils.ts`
- Import `grade11AmharicQuestions`
- Add `"Amharic": grade11AmharicQuestions` to the Grade 11 entry in `questionSets`

### 3. Update `src/pages/ChaptersPage.tsx`
- Update the existing Amharic handler to pull question counts from the actual data instead of hardcoded 0

