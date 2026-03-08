
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
      'Unit 1: Relations and Functions',
      'Unit 2: Polynomial Functions',
      'Unit 3: Exponential and Logarithmic Functions',
      'Unit 4: Trigonometric Functions',
      'Unit 5: Circles',
      'Unit 6: Solid Figures',
      'Unit 7: Coordinate Geometry'
    ],
    category: 'Mathematics'
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: 'Atom',
    description: 'Motion, forces, electricity, magnetism, and modern physics',
    chapters: [
      'Unit 1: Vector Quantities',
      'Unit 2: Uniformly Accelerated Motion',
      'Unit 3: Elasticity and Static Equilibrium of Rigid Body',
      'Unit 4: Static and Current Electricity',
      'Unit 5: Magnetism',
      'Unit 6: Electromagnetic Waves and Geometrical Optics'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'Flask',
    description: 'Organic chemistry, electrochemistry, and industrial chemistry',
    chapters: [
      'Unit 1: Chemical Reactions And Stoichiometry',
      'Unit 2: Solutions',
      'Unit 3: Important Inorganic Compounds',
      'Unit 4: Energy Changes And Electro-Chemistry',
      'Unit 5: Metals And Non Metals',
      'Unit 6: Hydrocarbons And Their Natural Sources'
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
      'Unit 1: Population Growth',
      'Unit 2: Travel Behaviors',
      'Unit 3: Punctuality',
      'Unit 4: Tourist Attractions',
      'Unit 5: Honey Processing',
      'Unit 6: Migration',
      'Unit 7: Branding Ethiopia and National Identity',
      'Unit 8: The Healing Power of Plants',
      'Unit 9: Multilingualism',
      'Unit 10: Digital Vs Satellite Television'
    ],
    category: 'Languages'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: 'Globe',
    description: 'World geography, resources, urbanization, and development',
    chapters: [
      'Unit 1: Land-forms Of Africa',
      'Unit 2: Climate Of Africa',
      'Unit 3: Natural Resource Base Of Africa',
      'Unit 4: Population of Africa',
      'Unit 5: Major Economic and Cultural Activities of Africa',
      'Unit 6: Human – Natural Environment Interactions',
      'Unit 7: Geographic Issues And Public Concerns In Africa',
      'Unit 8: Geospatial Information And Data Processing'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'history',
    name: 'History',
    icon: 'Clock',
    description: 'Modern world history and Ethiopian modernization',
    chapters: [
      'Unit 1: Development of Capitalism and Nationalism 1815-1914',
      'Unit 2: Africa & the Colonial Experience (1880s-1960s)',
      'Unit 3: Social, Economic & Political Developments in Ethiopia mid-19th C. to 1941',
      'Unit 4: Society and Politics in the Age of World Wars 1914-1945',
      'Unit 5: Global and Regional Developments Since 1945',
      'Unit 6: Ethiopia: Internal Developments and External Influences from 1941 to 1991',
      'Unit 7: Africa Since 1960',
      'Unit 8: Post-1991 Developments in Ethiopia',
      'Unit 9: Indigenous Knowledge and Heritages of Ethiopia'
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
