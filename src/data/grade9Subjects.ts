
export interface Grade9Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  chapters: string[];
  category: 'Natural Sciences' | 'Social Sciences' | 'Mathematics' | 'Languages' | 'Other';
}

export const grade9Subjects: Grade9Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: 'Calculator',
    description: 'Fundamental mathematics including algebra, geometry, and statistics',
    chapters: [
      'Unit 1: The Number System',
      'Unit 2: Solving Equations',
      'Unit 3: Further on Sets',
      'Unit 4: Relations and Functions',
      'Unit 5: Geometry and Measurement',
      'Unit 6: Statistics and Probability',
      'Unit 7: Vectors in Two Dimensions',
      'Unit 8: Similarity and Congruence'
    ],
    category: 'Mathematics'
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: 'Atom',
    description: 'Introduction to mechanics, heat, waves, and electricity',
    chapters: [
      'Unit 1: Vectors',
      'Unit 2: Motion in a Straight Line',
      'Unit 3: Force and Newton\'s Laws of Motion',
      'Unit 4: Work, Energy and Power',
      'Unit 5: Simple Machines',
      'Unit 6: Fluid Statics',
      'Unit 7: Temperature and Heat',
      'Unit 8: Wave Motion and Sound'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'Flask',
    description: 'Introduction to chemistry, matter, and chemical reactions',
    chapters: [
      'Unit 1: Structure of the Atom',
      'Unit 2: Periodic Classification of Elements',
      'Unit 3: Chemical Bonding and Intermolecular Forces',
      'Unit 4: Chemical Reactions and Stoichiometry',
      'Unit 5: The Physical States of Matter',
      'Unit 6: Chemistry and the Environment'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: 'Leaf',
    description: 'Cell biology, genetics, human body systems, and ecology',
    chapters: [
      'Unit 1: Biology and Technology',
      'Unit 2: Cell Biology',
      'Unit 3: Human Biology and Health',
      'Unit 4: Plants',
      'Unit 5: Animals',
      'Unit 6: Environment'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'english',
    name: 'English',
    icon: 'BookOpen',
    description: 'English language skills, reading comprehension, and writing',
    chapters: [
      'Unit 1: Education',
      'Unit 2: Health',
      'Unit 3: Culture and Society',
      'Unit 4: Science and Technology',
      'Unit 5: Environment',
      'Unit 6: Democracy and Good Governance',
      'Unit 7: Tourism and Development',
      'Unit 8: Gender Issues'
    ],
    category: 'Languages'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: 'Globe',
    description: 'Physical geography, climate, population, and economic activities',
    chapters: [
      'Unit 1: The Science of Geography',
      'Unit 2: Physical Geography of Ethiopia and the Horn',
      'Unit 3: Population of Ethiopia and the Horn',
      'Unit 4: Economic Activities in Ethiopia',
      'Unit 5: Environmental Problems in Ethiopia',
      'Unit 6: Map Reading and Interpretation'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'history',
    name: 'History',
    icon: 'Clock',
    description: 'Ethiopian history, world civilizations, and historical analysis',
    chapters: [
      'Unit 1: Introduction to History',
      'Unit 2: People and Early States in Ethiopia and the Horn',
      'Unit 3: Ancient World Civilizations',
      'Unit 4: The Zagwe and Solomonic Dynasty',
      'Unit 5: Medieval World History',
      'Unit 6: The Age of Exploration',
      'Unit 7: Ethiopia: Internal and External Relations'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'civics',
    name: 'Civic Education',
    icon: 'Scale',
    description: 'Civic and ethical education, democracy, and human rights',
    chapters: [
      'Unit 1: Introduction to Civics and Ethics',
      'Unit 2: Building a Democratic System',
      'Unit 3: Rights and Obligations of Citizens',
      'Unit 4: Diversity and Unity',
      'Unit 5: Conflict Resolution',
      'Unit 6: Good Governance',
      'Unit 7: Patriotism and National Pride'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'amharic',
    name: 'Amharic',
    icon: 'Type',
    description: 'Amharic language, grammar, literature, and composition',
    chapters: [
      'ምዕራፍ 1: ማንበብ (Reading)',
      'ምዕራፍ 2: ሰዋሰው (Grammar)',
      'ምዕራፍ 3: ግጥም (Poetry)',
      'ምዕራፍ 4: ድርሰት (Composition)',
      'ምዕራፍ 5: ቋንቋና ባህል (Language and Culture)',
      'ምዕራፍ 6: ልቦለድ (Fiction)'
    ],
    category: 'Languages'
  }
];
