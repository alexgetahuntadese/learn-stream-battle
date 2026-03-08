

## Plan: Update Grade 9 Subjects to New Curriculum

**File: `src/data/grade9Subjects.ts`** — Update all existing subjects and add 3 new subjects (Economics, IT, HPE) based on kehulum.com new curriculum data.

### Updates to Existing Subjects

**Mathematics** (8 → 9 units):
1. Unit 1: Further on Sets
2. Unit 2: The Number System
3. Unit 3: Solving Equations
4. Unit 4: Solving Inequalities
5. Unit 5: Introduction to Trigonometry
6. Unit 6: Regular Polygons
7. Unit 7: Congruency and Similarity
8. Unit 8: Vectors in Two Dimensions
9. Unit 9: Statistics and Probability

**Physics** (8 → 7 units):
1. Unit 1: Physics and Human Society
2. Unit 2: Physical Quantities
3. Unit 3: Motion in a Straight Line
4. Unit 4: Force, Work, Energy, and Power
5. Unit 5: Simple Machines
6. Unit 6: Mechanical Oscillation and Sound Wave
7. Unit 7: Temperature and Thermometer

**Chemistry** (6 → 5 units):
1. Unit 1: Chemistry And Its Importance
2. Unit 2: Measurements And Scientific Methods
3. Unit 3: Structure Of The Atom
4. Unit 4: Periodic Classification Of Elements
5. Unit 5: Chemical Bonding

**Biology** (6 units, updated names):
1. Unit 1: Introduction to Biology
2. Unit 2: Characteristics and Classification of Organisms
3. Unit 3: Cells
4. Unit 4: Reproduction
5. Unit 5: Human Health, Nutrition, and Disease
6. Unit 6: Ecology

**English** (8 → 10 units):
1. Unit 1: Living in Urban Areas
2. Unit 2: Study Skills
3. Unit 3: Traffic Accident
4. Unit 4: National Parks
5. Unit 5: Horticulture
6. Unit 6: Poverty in Ethiopia
7. Unit 7: Community Services
8. Unit 8: Communicable Diseases
9. Unit 9: Fairness and Equity
10. Unit 10: The Internet

**Geography** (6 → 8 units):
1. Unit 1: Geological History And Topography Of Ethiopia
2. Unit 2: Climate Of Ethiopia
3. Unit 3: Natural Resource Base Of Ethiopia
4. Unit 4: Population And Demographic Characteristics Of Ethiopia
5. Unit 5: Major Economic And Cultural Activities In Ethiopia
6. Unit 6: Human – Natural Environment Interactions In Ethiopia
7. Unit 7: Contemporary Geographic Issues And Public Concerns In Ethiopia
8. Unit 8: Geographic Inquiry Skills And Techniques

**History** (7 → 9 units):
1. Unit 1: The Discipline of History and Human Evolution
2. Unit 2: Ancient World Civilizations up to c. 500 AD
3. Unit 3: Peoples and States in Ethiopia and the Horn to the End of 13th Century
4. Unit 4: The Middle Ages and Early Modern World, C. 500 to 1750s
5. Unit 5: Peoples and States of Africa to 1500
6. Unit 6: Africa and the Outside World 1500-1880s
7. Unit 7: States, Principalities, Population Movements & Interactions in Ethiopia 13th to Mid-16th C.
8. Unit 8: Political, Social, and Economic Processes in Ethiopia Mid-16th to Mid-19th C.
9. Unit 9: The Age of Revolutions 1750s to 1815

**Civic Education** (7 → 8 units):
1. Unit 1: Ethical Values
2. Unit 2: The Culture Of Using Digital Technology
3. Unit 3: Constitution And Constitutionalism
4. Unit 4: Understanding Indigenous Knowledge
5. Unit 5: Multiculturalism In Ethiopia
6. Unit 6: National Unity Through Diversity
7. Unit 7: Problem-Solving Skills
8. Unit 8: Ethiopia's Foreign Relations In East Africa

**Amharic** (6 → 9 units):
1. ምዕራፍ 1: ቋንቋ
2. ምዕራፍ 2: ግብር
3. ምዕራፍ 3: ማዕድን ማውጣት
4. ምዕራፍ 4: ልቦለድ
5. ምዕራፍ 5: ቃላዊ ስነፅሑፍ
6. ምዕራፍ 6: ግጥም
7. ምዕራፍ 7: ኮቪድ -19 (ኮሮና)
8. ምዕራፍ 8: ተውኔት
9. ምዕራፍ 9: ማህበራዊ መገናኛ ብዙኃን እና ተግባቦት

### New Subjects to Add

**Economics** (8 units, category: 'Social Sciences'):
1. Unit 1: Introducing Economics
2. Unit 2: The Basic Economic Problems and Economic Systems
3. Unit 3: Economic Resources and Markets
4. Unit 4: Introduction to Demand and Supply
5. Unit 5: Introduction to Production and Cost
6. Unit 6: Introduction to Money
7. Unit 7: Introduction to Macroeconomics
8. Unit 8: Basic Entrepreneurship

Also need to update the `Grade9Subject` interface category type to include the new category value or map to existing ones. Economics maps to 'Social Sciences'. The interface already supports this.

### Technical Details
- Single file edit: `src/data/grade9Subjects.ts`
- Update the category type union if needed for new subjects
- The `GradeSelection` page shows Grade 9 with "9 subjects" — will need to update to reflect the actual count (10 subjects with Economics added)
- The `SubjectsPage.tsx` and `ChaptersPage.tsx` already dynamically read from the grade9Subjects array, so adding Economics will automatically appear

