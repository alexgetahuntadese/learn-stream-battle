
export interface Grade10Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  chapters: string[];
  category: 'Natural Sciences' | 'Social Sciences' | 'Mathematics' | 'Languages' | 'Other';
}

export const grade10Subjects: Grade10Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: 'Calculator',
    description: 'Advanced algebra, trigonometry, coordinate geometry, and calculus introduction',
    chapters: [
      'Unit 1: Polynomial Functions',
      'Unit 2: Exponential and Logarithmic Functions',
      'Unit 3: Trigonometric Functions',
      'Unit 4: Coordinate Geometry',
      'Unit 5: Statistics and Probability',
      'Unit 6: Mathematical Reasoning and Proofs',
      'Unit 7: Circles',
      'Unit 8: Solid Geometry'
    ],
    category: 'Mathematics'
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: 'Atom',
    description: 'Motion, forces, electricity, magnetism, and modern physics',
    chapters: [
      'Unit 1: Motion in Two Dimensions',
      'Unit 2: Circular Motion and Gravitation',
      'Unit 3: Electrostatics',
      'Unit 4: Current Electricity',
      'Unit 5: Magnetism',
      'Unit 6: Electromagnetic Induction',
      'Unit 7: Atomic Physics',
      'Unit 8: Nuclear Physics'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'Flask',
    description: 'Organic chemistry, electrochemistry, and industrial chemistry',
    chapters: [
      'Unit 1: Introduction to Organic Chemistry',
      'Unit 2: Hydrocarbons',
      'Unit 3: Oxygen-Containing Organic Compounds',
      'Unit 4: Electrochemistry',
      'Unit 5: Industrial Chemistry',
      'Unit 6: Chemistry and Society',
      'Unit 7: Environmental Chemistry'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: 'Leaf',
    description: 'Genetics, evolution, ecology, and biotechnology',
    chapters: [
      'Unit 1: Sub-fields of Biology',
      'Unit 2: Plants',
      'Unit 3: Biochemical molecules',
      'Unit 4: Cell reproduction',
      'Unit 5: Human Biology',
      'Unit 6: Ecological interaction'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'english',
    name: 'English',
    icon: 'BookOpen',
    description: 'Advanced reading, writing, literature, and communication skills',
    chapters: [
      'Unit 1: Education and Development',
      'Unit 2: Technology and Society',
      'Unit 3: Literature and Culture',
      'Unit 4: Environment and Conservation',
      'Unit 5: Globalization',
      'Unit 6: Media and Communication',
      'Unit 7: Career Planning',
      'Unit 8: Ethiopian Heritage'
    ],
    category: 'Languages'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: 'Globe',
    description: 'World geography, resources, urbanization, and development',
    chapters: [
      'Unit 1: World Physical Geography',
      'Unit 2: World Climate and Vegetation',
      'Unit 3: World Population',
      'Unit 4: World Economic Activities',
      'Unit 5: Urbanization',
      'Unit 6: Natural Resources and Development',
      'Unit 7: Environmental Issues and Sustainability'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'history',
    name: 'History',
    icon: 'Clock',
    description: 'Modern world history and Ethiopian modernization',
    chapters: [
      'Unit 1: The Era of Princes (Zemene Mesafint)',
      'Unit 2: The Making of Modern Ethiopia',
      'Unit 3: Modern World History (1789-1914)',
      'Unit 4: World War I and Its Aftermath',
      'Unit 5: The Italian Invasion and WWII',
      'Unit 6: Post-WWII World',
      'Unit 7: Ethiopia from 1941 to Present'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'civics',
    name: 'Civic Education',
    icon: 'Scale',
    description: 'Government systems, constitution, human rights, and global citizenship',
    chapters: [
      'Unit 1: The Ethiopian Constitution',
      'Unit 2: Government Structure and Functions',
      'Unit 3: Human Rights',
      'Unit 4: Democracy and Elections',
      'Unit 5: Rule of Law',
      'Unit 6: Federalism in Ethiopia',
      'Unit 7: Global Citizenship'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'amharic',
    name: 'Amharic',
    icon: 'Type',
    description: 'Advanced Amharic language, literature, and critical analysis',
    chapters: [
      'ምዕራፍ 1: ንባብ (Reading)',
      'ምዕራፍ 2: ሰዋሰው (Grammar)',
      'ምዕራፍ 3: ግጥም (Poetry)',
      'ምዕራፍ 4: ድራማ (Drama)',
      'ምዕራፍ 5: ጽሑፍ (Writing)',
      'ምዕራፍ 6: ቋንቋ ጥናት (Language Study)'
    ],
    category: 'Languages'
  },
  {
    id: 'economics',
    name: 'Economics',
    icon: 'TrendingUp',
    description: 'Introduction to economics, markets, and Ethiopian economy',
    chapters: [
      'Unit 1: Basic Economic Concepts',
      'Unit 2: Demand, Supply and Market Equilibrium',
      'Unit 3: Theory of Production and Costs',
      'Unit 4: Market Structures',
      'Unit 5: National Income',
      'Unit 6: Money and Banking',
      'Unit 7: The Ethiopian Economy'
    ],
    category: 'Social Sciences'
  }
];
