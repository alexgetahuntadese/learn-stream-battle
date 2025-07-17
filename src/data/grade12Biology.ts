
import { Question } from './naturalScienceQuizzes';

export const grade12BiologyQuestions: { [chapter: string]: { [difficulty: string]: Question[] } } = {
  'Unit 1: Application of Biology': {
    'easy': [
      {
        id: 'bio12_u1_e1',
        question: 'What is the primary focus of Unit 1 in Grade 12 Biology?',
        options: ['Application of Biology', 'Cell Structure', 'Genetics', 'Ecology'],
        correct: 'Application of Biology',
        explanation: 'Unit 1 focuses on the application of biology in various fields like agriculture, medicine, and industry.'
      },
      {
        id: 'bio12_u1_e2',
        question: 'Which field applies biological knowledge to food production?',
        options: ['Agriculture', 'Medicine', 'Engineering', 'Computing'],
        correct: 'Agriculture',
        explanation: 'Agriculture applies biological knowledge to improve crop yields, pest resistance, and food production.'
      },
      {
        id: 'bio12_u1_e3',
        question: 'What is biotechnology?',
        options: [
          'The use of living organisms to make products or processes', 
          'The study of rocks and minerals', 
          'The study of weather patterns', 
          'The production of synthetic materials'
        ],
        correct: 'The use of living organisms to make products or processes',
        explanation: 'Biotechnology involves using living organisms or their components to develop useful products or processes.'
      },
      {
        id: 'bio12_u1_e4',
        question: 'Which of these is an example of applied biology in medicine?',
        options: ['Vaccine development', 'Bridge construction', 'Computer programming', 'Mining'],
        correct: 'Vaccine development',
        explanation: 'Vaccine development is a direct application of biological principles to prevent diseases.'
      },
      {
        id: 'bio12_u1_e5',
        question: 'What is bioremediation?',
        options: [
          'Using organisms to clean up pollution', 
          'Creating artificial organs', 
          'Studying fossils', 
          'Breeding plants for higher yields'
        ],
        correct: 'Using organisms to clean up pollution',
        explanation: 'Bioremediation is the use of microorganisms or plants to detoxify and clean up environmental pollutants.'
      },
      {
        id: 'bio12_u1_e6',
        question: 'Which field uses biology to improve crop resistance to pests?',
        options: ['Agricultural biology', 'Marine biology', 'Paleontology', 'Astronomy'],
        correct: 'Agricultural biology',
        explanation: 'Agricultural biology applies biological principles to improve crop resistance to pests, diseases, and environmental stresses.'
      },
      {
        id: 'bio12_u1_e7',
        question: 'What is the main goal of conservation biology?',
        options: [
          'Preserving biodiversity', 
          'Creating new medicines', 
          'Increasing food production', 
          'Developing new fuels'
        ],
        correct: 'Preserving biodiversity',
        explanation: 'Conservation biology focuses on protecting and preserving biodiversity and ecosystems.'
      },
      {
        id: 'bio12_u1_e8',
        question: 'Which of these is an application of biology in the food industry?',
        options: ['Fermentation', 'Mining', 'Road construction', 'Computer design'],
        correct: 'Fermentation',
        explanation: 'Fermentation is a biological process used in food production for products like bread, cheese, yogurt, and alcoholic beverages.'
      },
      {
        id: 'bio12_u1_e9',
        question: 'What does the field of genomics study?',
        options: [
          'The complete set of genes in an organism', 
          'The behavior of animals', 
          'The structure of mountains', 
          'The composition of soil'
        ],
        correct: 'The complete set of genes in an organism',
        explanation: 'Genomics is the study of the complete set of genes (genome) and their interactions within an organism.'
      },
      {
        id: 'bio12_u1_e10',
        question: 'Which applied biology field focuses on creating new medicines?',
        options: ['Pharmaceutical biology', 'Agricultural biology', 'Marine biology', 'Forest biology'],
        correct: 'Pharmaceutical biology',
        explanation: 'Pharmaceutical biology applies biological knowledge to develop medicines and treatments for diseases.'
      }
    ],
    'medium': [],
    'hard': []
  }
};

export const getGrade12BiologyQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  if (grade12BiologyQuestions[chapter] && grade12BiologyQuestions[chapter][difficulty]) {
    return grade12BiologyQuestions[chapter][difficulty];
  }
  console.log(`No questions found for chapter: ${chapter}, difficulty: ${difficulty}`);
  return [];
};
