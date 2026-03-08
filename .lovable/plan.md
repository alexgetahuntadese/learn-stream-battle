

## Plan: Add Grade 11 Amharic Subject (Chapters Only, No Questions)

### 1. Update `src/data/grade11Subjects.ts`
Add a new Amharic subject entry to the `grade11Subjects` array under the `'Languages'` category with 10 chapters:

- ምዕራፍ አንድ: ቋንቋና ህብረተሰብ (Language and Society)
- ምዕራፍ ሁለት: ቅርሶቻችን (Our Heritage)
- ምዕራፍ ሦስት: ወግ (Traditional Literature)
- ምዕራፍ አራት: ልቦለድ (Novel)
- ምዕራፍ አምስት: የቋንቋ ስዛ (Linguistic Relevance)
- ምዕራፍ ስድስት: ግጥም (Poetry)
- ምዕራፍ ሰባት: አርበኝነት (Patriotism)
- ምዕራፍ ስምንት: ትውፊት (Tradition and Lifestyle)
- ምዕራፍ ዘጠኝ: ስኬት (Success)
- ምዕራፍ አስር: ኪነጥበብ (Art)

Icon: `"Type"` (for language/text). ID: `"amharic"`.

### 2. Update `src/pages/ChaptersPage.tsx`
Add a handler for `decodedSubject === 'Amharic' && grade === '11'` that renders the 10 chapters with descriptions derived from the unit topics. Since there are no questions, the chapter cards will show 0 questions available.

No question files or quiz utility changes needed — questions are explicitly excluded.

