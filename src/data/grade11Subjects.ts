
export interface Grade11Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  chapters: string[];
  category: 'Natural Sciences' | 'Social Sciences' | 'Mathematics' | 'Languages' | 'Other';
}

export const grade11Subjects: Grade11Subject[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: 'Calculator',
    description: 'Advanced mathematical concepts including algebra, geometry, and trigonometry',
    chapters: [
      'Unit 1: Relations and Functions',
      'Unit 2: Rational Expressions and Rational Functions',
      'Unit 3: Matrices',
      'Unit 4: Determinants and their Properties',
      'Unit 5: Vectors',
      'Unit 6: Transformations of the Plane',
      'Unit 7: Statistics',
      'Unit 8: Probability'
    ],
    category: 'Mathematics'
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: 'Atom',
    description: 'Fundamental principles of physics including mechanics, waves, and electricity',
    chapters: [
      'Chapter 1: Mechanics',
      'Chapter 2: Waves and Sound',
      'Chapter 3: Heat and Thermodynamics',
      'Chapter 4: Electricity and Magnetism',
      'Chapter 5: Optics',
      'Chapter 6: Modern Physics'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'Flask',
    description: 'Chemical principles, reactions, and laboratory techniques',
    chapters: [
      'Unit 1: Atomic Structure And Periodic Properties Of The Elements',
      'Unit 2: Chemical Bonding',
      'Unit 3: Physical State Of Matter',
      'Unit 4: Chemical Kinetics',
      'Unit 5: Chemical Equilibrium',
      'Unit 6: Some Important Oxygen-containing Organic Compounds'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: 'Leaf',
    description: 'Study of living organisms, cells, genetics, and ecosystems',
    chapters: [
      'Unit 1: Biology and Technology',
      'Unit 2: Characteristics of animals',
      'Unit 3: Enzymes',
      'Unit 4: Genetics',
      'Unit 5: The human body systems',
      'Unit 6: Population and natural resources'
    ],
    category: 'Natural Sciences'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: 'Wheat',
    description: 'Agricultural practices, crop production, and animal husbandry',
    chapters: [
      'Chapter 1: Introduction to Crop Production',
      'Chapter 2: Field Crops Production and Management',
      'Chapter 3: Industrial Crops Production and Management',
      'Chapter 4: Introduction to Farm Animals',
      'Chapter 5: Animal Feeds and Feeding Practices',
      'Chapter 6: Animal Genetics and Breeding Practices',
      'Chapter 7: Farm Animals Housing',
      'Chapter 8: Basic Animal Health and Disease Control',
      'Chapter 9: Dairy Cattle Production and Management',
      'Chapter 10: Introduction to Natural Resources',
      'Chapter 11: Management of Natural Resources',
      'Chapter 12: Concepts of Biodiversity',
      'Chapter 13: Climate Change Adaptation and Mitigation',
      'Chapter 14: Mechanized Farming',
      'Chapter 15: Introduction to Human Nutrition',
      'Chapter 16: Diversified Food Production and Consumption'
    ],
    category: 'Other'
  },
  {
    id: 'economics',
    name: 'Economics',
    icon: 'TrendingUp',
    description: 'Economic theories, market structures, national income, trade, and development',
    chapters: [
      'Unit 1: Theory Of Consumer Behavior And Demand',
      'Unit 2: Market Structure And The Decision Of Firms',
      'Unit 3: National Income Accounting',
      'Unit 4: Consumption, Saving And Investment',
      'Unit 5: Trade And Finance',
      'Unit 6: Economic Development',
      'Unit 7: Main Sectors, Sectorial Policies And Strategies Of Ethiopia'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'english',
    name: 'English',
    icon: 'BookOpen',
    description: 'English language skills, literature, and communication',
    chapters: [
      'Unit 1: Environmental Hazards',
      'Unit 2: Civilization',
      'Unit 3: Causes of Road Traffic Accidents',
      'Unit 4: People and Natural Resources',
      'Unit 5: Irrigation',
      'Unit 6: Global Warming',
      'Unit 7: Patriotism',
      'Unit 8: Efficiency of Health Services',
      'Unit 9: Indigenous Conflict Resolution',
      'Unit 10: Artificial Intelligence'
    ],
    category: 'Languages'
  },
  {
    id: 'history',
    name: 'History',
    icon: 'Clock',
    description: 'Ethiopian and world history, civilizations, and historical analysis',
    chapters: [
      'Chapter 1: Ancient Civilizations',
      'Chapter 2: Medieval Period',
      'Chapter 3: Modern Ethiopian History',
      'Chapter 4: World Wars',
      'Chapter 5: Contemporary History',
      'Chapter 6: Historical Research Methods'
    ],
    category: 'Social Sciences'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: 'Globe',
    description: 'Physical and human geography, mapping, and environmental studies',
    chapters: [
      'Chapter 1: Formation of the Continents',
      'Chapter 2: Climate Classification and Climate Regions of Our World',
      'Chapter 3: Natural Resources and Conflicts Over Resources',
      'Chapter 4: Global Population Dynamics and Challenges',
      'Chapter 5: Geography and Economic Development',
      'Chapter 6: Major Global Environmental Changes',
      'Chapter 7: Geographic Issues and Public Concerns',
      'Chapter 8: Geo-spatial Information and Data Processing'
    ],
    category: 'Social Sciences'
  }
];

export const getGrade11SubjectsByCategory = () => {
  const categories = ['Mathematics', 'Natural Sciences', 'Social Sciences', 'Languages', 'Other'];
  
  return categories.map(category => ({
    name: category,
    subjects: grade11Subjects.filter(subject => subject.category === category)
  })).filter(category => category.subjects.length > 0);
};
