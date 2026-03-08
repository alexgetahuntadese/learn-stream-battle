

## Plan: Add 300 Quiz Questions for Grade 11 Amharic

### 1. Create `src/data/grade11AmharicQuestions.ts`
New file with 300 questions (10 Easy + 10 Medium + 10 Hard per unit × 10 units). Structure mirrors `grade11HistoryQuestions.ts` — keyed by unit name, each question has: id, question, options (4), correct, explanation, difficulty, chapter, subject.

**Units and question topics:**
- Unit 1: ቋንቋና ህብረተሰብ — language functions, dialects, sociolinguistics
- Unit 2: ቅርሶቻችን — Ethiopian heritage, tangible/intangible heritage
- Unit 3: ወግ — oral traditions, proverbs, folk tales
- Unit 4: ልቦለድ — novel elements, Ethiopian novelists, literary analysis
- Unit 5: የቋንቋ ስዛ — grammar, syntax, morphology
- Unit 6: ግጥም — poetic forms, literary devices, Ethiopian poets
- Unit 7: አርበኝነት — patriotic literature, historical figures
- Unit 8: ትውፊት — traditions, customs, cultural practices
- Unit 9: ስኬት — motivational literature, achievement themes
- Unit 10: ኪነጥበብ — art forms, theater, music, visual arts

### 2. Update `src/lib/quizUtils.ts`
- Add import: `import { grade11AmharicQuestions } from "@/data/grade11AmharicQuestions"`
- Add `"Amharic": grade11AmharicQuestions` to `questionSets["11"]` (line 58)

### 3. Update `src/pages/ChaptersPage.tsx` (lines 389-413)
Replace the hardcoded `questionsCount: 0` Amharic handler with one that reads actual question counts from the imported data, similar to the Geography/History handlers — computing easy/medium/hard breakdowns dynamically.

