
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
    'medium': [
      {
        id: 'bio12_u1_m1',
        question: 'Which biotechnology technique involves the transfer of DNA from one organism to another?',
        options: ['Genetic engineering', 'Fermentation', 'Tissue culture', 'Selective breeding'],
        correct: 'Genetic engineering',
        explanation: 'Genetic engineering is a biotechnology technique that involves the direct manipulation of an organism\'s genes, including transferring DNA between different species.'
      },
      {
        id: 'bio12_u1_m2',
        question: 'What is the main ethical concern related to stem cell research?',
        options: [
          'The source of embryonic stem cells', 
          'The cost of research', 
          'The patents on techniques', 
          'The length of clinical trials'
        ],
        correct: 'The source of embryonic stem cells',
        explanation: 'The main ethical concern in stem cell research relates to embryonic stem cells, which are obtained from human embryos, raising questions about the moral status of embryos.'
      },
      {
        id: 'bio12_u1_m3',
        question: 'Which of these is an application of PCR (Polymerase Chain Reaction)?',
        options: [
          'DNA fingerprinting in forensic science', 
          'Production of antibiotics', 
          'Creating transgenic animals', 
          'Generating biofuels'
        ],
        correct: 'DNA fingerprinting in forensic science',
        explanation: 'PCR (Polymerase Chain Reaction) is used in forensic science for DNA fingerprinting, allowing small samples of DNA to be amplified for analysis in criminal investigations.'
      },
      {
        id: 'bio12_u1_m4',
        question: 'What is the purpose of gene therapy?',
        options: [
          'To treat genetic disorders by correcting defective genes', 
          'To create genetically identical organisms', 
          'To identify the sequence of nucleotides in DNA', 
          'To produce large quantities of proteins'
        ],
        correct: 'To treat genetic disorders by correcting defective genes',
        explanation: 'Gene therapy aims to treat or cure diseases by introducing genetic material into cells to compensate for abnormal genes or to make a beneficial protein.'
      },
      {
        id: 'bio12_u1_m5',
        question: 'Which term describes the use of biological processes by industry to create products like chemicals and pharmaceuticals?',
        options: ['Industrial biotechnology', 'Bioengineering', 'Bioprocessing', 'Biosynthesis'],
        correct: 'Industrial biotechnology',
        explanation: 'Industrial biotechnology (also known as white biotechnology) uses biological systems like microorganisms or enzymes to produce chemicals, materials, and energy on an industrial scale.'
      },
      {
        id: 'bio12_u1_m6',
        question: 'What biological technique is used to determine the sequence of nucleotide bases in DNA?',
        options: ['DNA sequencing', 'Gel electrophoresis', 'Cell culture', 'Chromatography'],
        correct: 'DNA sequencing',
        explanation: 'DNA sequencing is the process of determining the precise order of nucleotides within a DNA molecule, essential for understanding genetic information and identifying mutations.'
      },
      {
        id: 'bio12_u1_m7',
        question: 'Which biotechnology application involves the use of microorganisms to clean up environmental pollutants?',
        options: ['Bioremediation', 'Biofiltration', 'Bioaugmentation', 'Biomagnification'],
        correct: 'Bioremediation',
        explanation: 'Bioremediation uses microorganisms to degrade or detoxify environmental pollutants, converting them into less harmful substances.'
      },
      {
        id: 'bio12_u1_m8',
        question: 'What is the primary goal of agricultural biotechnology?',
        options: [
          'To improve crop yield and resistance to pests', 
          'To reduce the need for farmland', 
          'To create aesthetically pleasing plants', 
          'To eliminate the need for fertilizers'
        ],
        correct: 'To improve crop yield and resistance to pests',
        explanation: 'Agricultural biotechnology primarily aims to improve crop yields, enhance nutritional content, and develop resistance to pests, diseases, and environmental stresses.'
      },
      {
        id: 'bio12_u1_m9',
        question: 'Which technique is used to produce large quantities of a specific protein using genetically modified bacteria?',
        options: ['Recombinant DNA technology', 'Cloning', 'Hybridization', 'Pasteurization'],
        correct: 'Recombinant DNA technology',
        explanation: 'Recombinant DNA technology involves inserting genes into bacteria that code for specific proteins, allowing the bacteria to produce large quantities of these proteins, such as insulin.'
      },
      {
        id: 'bio12_u1_m10',
        question: 'What is a GMO (Genetically Modified Organism)?',
        options: [
          'An organism whose genetic material has been altered using genetic engineering techniques', 
          'An organism produced through selective breeding', 
          'An organism grown under controlled laboratory conditions', 
          'An organism that produces its own pesticides naturally'
        ],
        correct: 'An organism whose genetic material has been altered using genetic engineering techniques',
        explanation: 'A GMO is an organism whose genetic material has been altered using genetic engineering techniques, creating combinations of genes that would not occur naturally.'
      }
    ],
    'hard': [
      {
        id: 'bio12_u1_h1',
        question: 'Which technique involves the use of restriction enzymes and DNA ligase in recombinant DNA technology?',
        options: [
          'Molecular cloning', 
          'Polymerase chain reaction', 
          'Flow cytometry', 
          'Chromatography'
        ],
        correct: 'Molecular cloning',
        explanation: 'Molecular cloning involves cutting DNA with restriction enzymes and joining fragments using DNA ligase to create recombinant DNA molecules that can be replicated in host organisms.'
      },
      {
        id: 'bio12_u1_h2',
        question: 'What is the principle behind CRISPR-Cas9 gene editing technology?',
        options: [
          'It uses a guide RNA to target specific DNA sequences and a Cas9 enzyme to cut the DNA', 
          'It replaces entire chromosomes with synthetic ones', 
          'It introduces random mutations to create genetic diversity', 
          'It fuses cells from different species to create hybrid organisms'
        ],
        correct: 'It uses a guide RNA to target specific DNA sequences and a Cas9 enzyme to cut the DNA',
        explanation: 'CRISPR-Cas9 uses a guide RNA to recognize specific DNA sequences and the Cas9 enzyme to make precise cuts at those locations, allowing for targeted gene editing.'
      },
      {
        id: 'bio12_u1_h3',
        question: 'Which of these is a limitation of somatic gene therapy?',
        options: [
          'The genetic changes are not passed to offspring', 
          'It can only be used for non-human organisms', 
          'It requires completely replacing the affected organ', 
          'It can only correct single-gene disorders'
        ],
        correct: 'The genetic changes are not passed to offspring',
        explanation: 'Somatic gene therapy modifies genes in somatic (non-reproductive) cells, so the genetic changes affect only the treated individual and are not inherited by future generations.'
      },
      {
        id: 'bio12_u1_h4',
        question: 'What is the difference between therapeutic cloning and reproductive cloning?',
        options: [
          'Therapeutic cloning aims to produce stem cells for medical treatments, while reproductive cloning aims to create a genetic copy of an organism', 
          'Therapeutic cloning is performed on plants, while reproductive cloning is performed on animals', 
          'Therapeutic cloning produces exact copies, while reproductive cloning produces improved versions', 
          'Therapeutic cloning is legal worldwide, while reproductive cloning is illegal everywhere'
        ],
        correct: 'Therapeutic cloning aims to produce stem cells for medical treatments, while reproductive cloning aims to create a genetic copy of an organism',
        explanation: 'Therapeutic cloning creates embryonic stem cells for research or medical treatments without creating a new organism, while reproductive cloning creates a genetic copy of an entire organism.'
      },
      {
        id: 'bio12_u1_h5',
        question: 'What is pharmacogenomics?',
        options: [
          'The study of how genes affect a person\'s response to drugs', 
          'The production of pharmaceuticals using genetically modified organisms', 
          'The study of natural plant compounds for medicinal use', 
          'The use of drugs to alter gene expression'
        ],
        correct: 'The study of how genes affect a person\'s response to drugs',
        explanation: 'Pharmacogenomics studies how a person\'s genetic makeup affects their response to drugs, helping to develop personalized medicine approaches with optimal efficacy and minimal side effects.'
      },
      {
        id: 'bio12_u1_h6',
        question: 'Which technique would be most appropriate for analyzing the expression levels of thousands of genes simultaneously?',
        options: ['DNA microarray', 'Gel electrophoresis', 'Polymerase chain reaction', 'Restriction enzyme analysis'],
        correct: 'DNA microarray',
        explanation: 'DNA microarrays (gene chips) allow researchers to measure the expression levels of thousands of genes simultaneously, providing a comprehensive view of gene activity in a cell or tissue.'
      },
      {
        id: 'bio12_u1_h7',
        question: 'What is the primary concern regarding horizontal gene transfer in genetically modified organisms?',
        options: [
          'Transgenes could transfer to unintended organisms in the environment', 
          'GMOs might transfer harmful genes to humans through consumption', 
          'Gene transfer only occurs in vertical directions, making horizontal concerns irrelevant', 
          'It might lead to the extinction of wild-type varieties'
        ],
        correct: 'Transgenes could transfer to unintended organisms in the environment',
        explanation: 'A key concern with GMOs is that introduced genes might transfer horizontally to non-target organisms in the environment, potentially creating unintended ecological consequences.'
      },
      {
        id: 'bio12_u1_h8',
        question: 'What is meant by "golden rice" in the context of agricultural biotechnology?',
        options: [
          'Rice genetically engineered to contain beta-carotene to address vitamin A deficiency', 
          'Rice that produces higher yields due to enhanced photosynthesis genes', 
          'Rice with a natural golden color that commands premium prices', 
          'Rice engineered to grow in drought conditions'
        ],
        correct: 'Rice genetically engineered to contain beta-carotene to address vitamin A deficiency',
        explanation: 'Golden rice is genetically modified to biosynthesize beta-carotene, a precursor of vitamin A, in the edible parts of rice to address vitamin A deficiency in developing countries.'
      },
      {
        id: 'bio12_u1_h9',
        question: 'What ethical principle is most directly challenged by the concept of human germline gene editing?',
        options: [
          'Future generations cannot consent to genetic modifications made to them', 
          'All genetic modifications are inherently unsafe', 
          'Only natural selection should determine human evolution', 
          'Medical interventions should focus on existing patients, not potential ones'
        ],
        correct: 'Future generations cannot consent to genetic modifications made to them',
        explanation: 'Human germline gene editing raises profound ethical concerns because modifications made to eggs, sperm, or embryos would be inherited by future generations who had no ability to consent to these changes.'
      },
      {
        id: 'bio12_u1_h10',
        question: 'Which biological application uses phage display technology?',
        options: [
          'Antibody engineering and drug discovery', 
          'Plant breeding for drought resistance', 
          'Human gene therapy for genetic diseases', 
          'Biofuel production from algae'
        ],
        correct: 'Antibody engineering and drug discovery',
        explanation: 'Phage display technology is used in antibody engineering and drug discovery to create libraries of peptides or proteins (including antibodies) expressed on the surface of bacteriophages for screening potential therapeutic agents.'
      }
    ]
  }
};

export const getGrade12BiologyQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  if (grade12BiologyQuestions[chapter] && grade12BiologyQuestions[chapter][difficulty]) {
    return grade12BiologyQuestions[chapter][difficulty];
  }
  console.log(`No questions found for chapter: ${chapter}, difficulty: ${difficulty}`);
  return [];
};
