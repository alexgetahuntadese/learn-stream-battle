
// Grade 12 Biology Questions - organized by unit and difficulty
export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

export const grade12BiologyQuestions = {
  'Unit 1: Application of Biology': {
    easy: [
      {
        id: 'bio12_u1_e1',
        question: 'What is the primary focus of Unit 1 in Grade 12 Biology?',
        options: ['Application of Biology', 'Cell Structure', 'Genetics', 'Ecology'],
        correct: 'Application of Biology',
        explanation: 'Unit 1 focuses on the application of biological principles in various fields.'
      },
      {
        id: 'bio12_u1_e2',
        question: 'Which of the following is a branch of biotechnology?',
        options: ['Genetic engineering', 'Astrophysics', 'Geology', 'Meteorology'],
        correct: 'Genetic engineering',
        explanation: 'Genetic engineering is a key branch of biotechnology involving manipulation of genes.'
      },
      {
        id: 'bio12_u1_e3',
        question: 'What is bioinformatics?',
        options: ['The use of computers to analyze biological data', 'Study of plant biology', 'Study of animal behavior', 'Environmental science'],
        correct: 'The use of computers to analyze biological data',
        explanation: 'Bioinformatics combines biology with computer science to analyze and interpret biological data.'
      },
      {
        id: 'bio12_u1_e4',
        question: 'Which technique is commonly used in molecular biology?',
        options: ['PCR (Polymerase Chain Reaction)', 'Photosynthesis', 'Respiration', 'Digestion'],
        correct: 'PCR (Polymerase Chain Reaction)',
        explanation: 'PCR is a fundamental technique used to amplify DNA sequences in molecular biology.'
      },
      {
        id: 'bio12_u1_e5',
        question: 'What is the main application of biology in medicine?',
        options: ['Drug development and disease treatment', 'Weather prediction', 'Earthquake monitoring', 'Space exploration'],
        correct: 'Drug development and disease treatment',
        explanation: 'Biology is extensively applied in medicine for understanding diseases and developing treatments.'
      },
      {
        id: 'bio12_u1_e6',
        question: 'What is genomics?',
        options: ['The study of complete DNA sequences', 'The study of rocks', 'The study of weather', 'The study of space'],
        correct: 'The study of complete DNA sequences',
        explanation: 'Genomics is the field that studies an organism\'s complete set of DNA sequences.'
      },
      {
        id: 'bio12_u1_e7',
        question: 'Which field combines biology with agriculture?',
        options: ['Agricultural biotechnology', 'Astronomy', 'Physics', 'Chemistry'],
        correct: 'Agricultural biotechnology',
        explanation: 'Agricultural biotechnology applies biological techniques to improve crop production and food security.'
      },
      {
        id: 'bio12_u1_e8',
        question: 'What is bioethics?',
        options: ['The study of ethical issues in biology', 'The study of plant growth', 'The study of animal migration', 'The study of cell division'],
        correct: 'The study of ethical issues in biology',
        explanation: 'Bioethics deals with the ethical implications of biological research and applications.'
      },
      {
        id: 'bio12_u1_e9',
        question: 'Which technology is used for DNA sequencing?',
        options: ['Next-generation sequencing', 'X-ray imaging', 'Radio waves', 'Sound waves'],
        correct: 'Next-generation sequencing',
        explanation: 'Next-generation sequencing technologies allow rapid and accurate DNA sequence determination.'
      },
      {
        id: 'bio12_u1_e10',
        question: 'What is the role of biology in environmental conservation?',
        options: ['Understanding ecosystems and biodiversity', 'Building roads', 'Manufacturing cars', 'Cooking food'],
        correct: 'Understanding ecosystems and biodiversity',
        explanation: 'Biology helps us understand how ecosystems function and how to preserve biodiversity.'
      }
    ],
    medium: [
      {
        id: 'bio12_u1_m1',
        question: 'Which technique is used to insert foreign genes into organisms?',
        options: ['Transformation', 'Photosynthesis', 'Respiration', 'Transpiration'],
        correct: 'Transformation',
        explanation: 'Transformation is the process of introducing foreign genetic material into cells.'
      },
      {
        id: 'bio12_u1_m2',
        question: 'What is CRISPR-Cas9 primarily used for?',
        options: ['Gene editing', 'Protein synthesis', 'Cell division', 'Energy production'],
        correct: 'Gene editing',
        explanation: 'CRISPR-Cas9 is a revolutionary gene editing tool that allows precise DNA modifications.'
      },
      {
        id: 'bio12_u1_m3',
        question: 'In biotechnology, what does GMO stand for?',
        options: ['Genetically Modified Organism', 'Generally Modified Object', 'Genetically Managed Operation', 'Generally Maintained Organism'],
        correct: 'Genetically Modified Organism',
        explanation: 'GMO refers to organisms whose genetic material has been artificially manipulated.'
      },
      {
        id: 'bio12_u1_m4',
        question: 'What is the primary purpose of DNA fingerprinting?',
        options: ['Individual identification', 'Protein production', 'Cell growth', 'Energy storage'],
        correct: 'Individual identification',
        explanation: 'DNA fingerprinting uses unique genetic patterns to identify individuals.'
      },
      {
        id: 'bio12_u1_m5',
        question: 'Which application of biology helps in drug discovery?',
        options: ['Pharmacogenomics', 'Geology', 'Astronomy', 'Meteorology'],
        correct: 'Pharmacogenomics',
        explanation: 'Pharmacogenomics studies how genes affect drug responses for personalized medicine.'
      },
      {
        id: 'bio12_u1_m6',
        question: 'What is synthetic biology?',
        options: ['Engineering biological systems for useful purposes', 'Study of natural ecosystems', 'Traditional farming methods', 'Weather forecasting'],
        correct: 'Engineering biological systems for useful purposes',
        explanation: 'Synthetic biology involves designing and constructing new biological parts and systems.'
      },
      {
        id: 'bio12_u1_m7',
        question: 'Which technique is used to produce recombinant proteins?',
        options: ['Genetic engineering in host cells', 'Traditional cooking', 'Manual assembly', 'Chemical synthesis only'],
        correct: 'Genetic engineering in host cells',
        explanation: 'Recombinant proteins are produced by introducing genes into host cells like bacteria or yeast.'
      },
      {
        id: 'bio12_u1_m8',
        question: 'What is the main goal of personalized medicine?',
        options: ['Tailoring treatment to individual genetic profiles', 'Using the same treatment for everyone', 'Avoiding all medications', 'Relying only on surgery'],
        correct: 'Tailoring treatment to individual genetic profiles',
        explanation: 'Personalized medicine uses genetic information to customize medical treatments.'
      },
      {
        id: 'bio12_u1_m9',
        question: 'Which field studies the interaction between genes and environment?',
        options: ['Epigenetics', 'Geology', 'Physics', 'Chemistry'],
        correct: 'Epigenetics',
        explanation: 'Epigenetics studies how environmental factors can influence gene expression.'
      },
      {
        id: 'bio12_u1_m10',
        question: 'What is bioremediation?',
        options: ['Using organisms to clean up environmental pollutants', 'Creating new pollutants', 'Destroying ecosystems', 'Building factories'],
        correct: 'Using organisms to clean up environmental pollutants',
        explanation: 'Bioremediation uses microorganisms or plants to remove or neutralize environmental contaminants.'
      }
    ],
    hard: [
      {
        id: 'bio12_u1_h1',
        question: 'What is the significance of the Human Genome Project?',
        options: ['It mapped the complete human DNA sequence', 'It created the first human clone', 'It discovered DNA structure', 'It invented microscopes'],
        correct: 'It mapped the complete human DNA sequence',
        explanation: 'The Human Genome Project successfully sequenced the entire human genome, revolutionizing biology and medicine.'
      },
      {
        id: 'bio12_u1_h2',
        question: 'Which technology enables rapid DNA sequencing at low cost?',
        options: ['Next-generation sequencing', 'Traditional Sanger sequencing', 'Manual sequencing', 'X-ray crystallography'],
        correct: 'Next-generation sequencing',
        explanation: 'Next-generation sequencing technologies have dramatically reduced the cost and time of DNA sequencing.'
      },
      {
        id: 'bio12_u1_h3',
        question: 'What is the primary ethical concern with human genetic engineering?',
        options: ['Potential for creating genetic inequality', 'Cost of equipment', 'Time required', 'Technical difficulty'],
        correct: 'Potential for creating genetic inequality',
        explanation: 'The main ethical concern is that genetic enhancement could create or worsen social inequalities.'
      },
      {
        id: 'bio12_u1_h4',
        question: 'Which technique allows for precise gene knockout in research?',
        options: ['CRISPR-Cas9 system', 'Simple PCR', 'Basic microscopy', 'Standard cell culture'],
        correct: 'CRISPR-Cas9 system',
        explanation: 'CRISPR-Cas9 provides unprecedented precision in gene editing and knockout studies.'
      },
      {
        id: 'bio12_u1_h5',
        question: 'What is the role of bioinformatics in modern biology?',
        options: ['Managing and analyzing large biological datasets', 'Growing plants in labs', 'Observing animal behavior', 'Cooking biological samples'],
        correct: 'Managing and analyzing large biological datasets',
        explanation: 'Bioinformatics is essential for handling the massive amounts of data generated by modern biological research.'
      },
      {
        id: 'bio12_u1_h6',
        question: 'Which approach is used in systems biology?',
        options: ['Studying biological systems as integrated networks', 'Examining individual molecules only', 'Focusing on single cells', 'Studying only proteins'],
        correct: 'Studying biological systems as integrated networks',
        explanation: 'Systems biology takes a holistic approach to understand complex biological systems and their interactions.'
      },
      {
        id: 'bio12_u1_h7',
        question: 'What is the potential of stem cell therapy?',
        options: ['Regenerating damaged tissues and organs', 'Only treating skin conditions', 'Replacing all surgeries', 'Curing all diseases instantly'],
        correct: 'Regenerating damaged tissues and organs',
        explanation: 'Stem cell therapy holds promise for regenerative medicine by replacing or repairing damaged tissues.'
      },
      {
        id: 'bio12_u1_h8',
        question: 'Which technique is used for large-scale protein analysis?',
        options: ['Proteomics', 'Simple counting', 'Visual inspection', 'Manual sorting'],
        correct: 'Proteomics',
        explanation: 'Proteomics is the large-scale study of proteins and their functions in biological systems.'
      },
      {
        id: 'bio12_u1_h9',
        question: 'What is the main challenge in gene therapy?',
        options: ['Delivering genes to specific target cells safely', 'Finding enough genes', 'Making genes visible', 'Storing genes properly'],
        correct: 'Delivering genes to specific target cells safely',
        explanation: 'The major challenge in gene therapy is developing safe and efficient delivery systems for therapeutic genes.'
      },
      {
        id: 'bio12_u1_h10',
        question: 'Which field combines biology with nanotechnology?',
        options: ['Nanobiotechnology', 'Macrobiology', 'Gigabiology', 'Microbiology only'],
        correct: 'Nanobiotechnology',
        explanation: 'Nanobiotechnology applies nanotechnology principles to biological systems for medical and research applications.'
      }
    ]
  }
};

export const getGrade12BiologyQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  const chapterQuestions = grade12BiologyQuestions[chapter as keyof typeof grade12BiologyQuestions];
  if (!chapterQuestions) {
    console.log('No questions found for chapter:', chapter);
    return [];
  }
  
  const questions = chapterQuestions[difficulty] || [];
  console.log(`Found ${questions.length} ${difficulty} questions for ${chapter}`);
  return questions;
};
