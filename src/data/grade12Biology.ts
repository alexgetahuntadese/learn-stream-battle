import { Question } from './naturalScienceQuizzes';

const unit1Questions = {
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
      question: 'What is the role of enzymes in biotechnology?',
      options: ['Catalyze biochemical reactions', 'Provide energy', 'Store genetic information', 'Transport oxygen'],
      correct: 'Catalyze biochemical reactions',
      explanation: 'Enzymes speed up biochemical reactions, essential in many biotechnological processes.'
    },
    {
      id: 'bio12_u1_e4',
      question: 'Which technique is used to amplify DNA?',
      options: ['PCR', 'Gel electrophoresis', 'Microscopy', 'Chromatography'],
      correct: 'PCR',
      explanation: 'Polymerase Chain Reaction (PCR) is used to amplify DNA sequences.'
    },
    {
      id: 'bio12_u1_e5',
      question: 'What is a genetically modified organism (GMO)?',
      options: ['An organism with altered DNA', 'A natural organism', 'A fossil', 'A virus'],
      correct: 'An organism with altered DNA',
      explanation: 'GMOs have had their genetic material altered using genetic engineering techniques.'
    },
    {
      id: 'bio12_u1_e6',
      question: 'What is cloning?',
      options: ['Producing genetically identical organisms', 'Crossbreeding plants', 'Mutation', 'Natural selection'],
      correct: 'Producing genetically identical organisms',
      explanation: 'Cloning produces organisms with identical genetic material.'
    },
    {
      id: 'bio12_u1_e7',
      question: 'What is the function of restriction enzymes?',
      options: ['Cut DNA at specific sites', 'Join DNA strands', 'Replicate DNA', 'Transcribe RNA'],
      correct: 'Cut DNA at specific sites',
      explanation: 'Restriction enzymes cut DNA at specific sequences, useful in genetic engineering.'
    },
    {
      id: 'bio12_u1_e8',
      question: 'What is gene therapy?',
      options: ['Treating diseases by modifying genes', 'Using antibiotics', 'Vaccination', 'Physical therapy'],
      correct: 'Treating diseases by modifying genes',
      explanation: 'Gene therapy involves altering genes to treat or prevent diseases.'
    },
    {
      id: 'bio12_u1_e9',
      question: 'What is the Human Genome Project?',
      options: ['Mapping all human genes', 'Studying human behavior', 'Developing vaccines', 'Cloning humans'],
      correct: 'Mapping all human genes',
      explanation: 'The Human Genome Project mapped the entire human genetic code.'
    },
    {
      id: 'bio12_u1_e10',
      question: 'What is bioinformatics?',
      options: ['Using computers to analyze biological data', 'Studying animal behavior', 'Plant breeding', 'Chemical analysis'],
      correct: 'Using computers to analyze biological data',
      explanation: 'Bioinformatics applies computational tools to understand biological data.'
    },
    {
      id: 'bio12_u1_e11',
      question: 'What is biotechnology?',
      options: ['The use of living organisms to make products', 'The study of rocks', 'The study of weather', 'The study of space'],
      correct: 'The use of living organisms to make products',
      explanation: 'Biotechnology involves using living organisms, cells, or biological processes to develop products and technologies.'
    },
    {
      id: 'bio12_u1_e12',
      question: 'Which of the following is an example of biotechnology?',
      options: ['Making bread with yeast', 'Mining coal', 'Building computers', 'Painting pictures'],
      correct: 'Making bread with yeast',
      explanation: 'Using yeast to make bread is a traditional form of biotechnology, utilizing living organisms for food production.'
    },
    {
      id: 'bio12_u1_e13',
      question: 'What is genetic engineering?',
      options: ['Modifying genes in organisms', 'Building machines', 'Growing plants', 'Studying animals'],
      correct: 'Modifying genes in organisms',
      explanation: 'Genetic engineering involves directly manipulating genes to alter the characteristics of organisms.'
    },
    {
      id: 'bio12_u1_e14',
      question: 'What does PCR stand for?',
      options: ['Polymerase Chain Reaction', 'Protein Chain Reaction', 'Polymer Chain Reaction', 'Peptide Chain Reaction'],
      correct: 'Polymerase Chain Reaction',
      explanation: 'PCR is a technique used to amplify DNA sequences, making millions of copies from a small sample.'
    },
    {
      id: 'bio12_u1_e15',
      question: 'What is the purpose of DNA fingerprinting?',
      options: ['To identify individuals', 'To count chromosomes', 'To measure proteins', 'To study cells'],
      correct: 'To identify individuals',
      explanation: 'DNA fingerprinting creates unique genetic profiles that can be used to identify individuals.'
    },
    {
      id: 'bio12_u1_e16',
      question: 'What is tissue culture?',
      options: ['Growing cells in a controlled environment', 'Studying animal behavior', 'Examining fossils', 'Measuring temperature'],
      correct: 'Growing cells in a controlled environment',
      explanation: 'Tissue culture involves growing plant or animal cells in artificial media under controlled conditions.'
    },
    {
      id: 'bio12_u1_e17',
      question: 'Which organism is commonly used to produce insulin?',
      options: ['Bacteria', 'Elephants', 'Trees', 'Fish'],
      correct: 'Bacteria',
      explanation: 'Genetically modified bacteria (E. coli) are commonly used to produce human insulin for diabetes treatment.'
    },
    {
      id: 'bio12_u1_e18',
      question: 'What is a DNA probe?',
      options: ['A DNA sequence used to detect specific genes', 'A tool for cutting DNA', 'A type of microscope', 'A chemical solution'],
      correct: 'A DNA sequence used to detect specific genes',
      explanation: 'DNA probes are short DNA sequences that can bind to complementary sequences to detect specific genes.'
    },
    {
      id: 'bio12_u1_e19',
      question: 'What is the main advantage of biotechnology in agriculture?',
      options: ['Increased crop yield and resistance', 'Reduced soil quality', 'Higher costs', 'Less nutrition'],
      correct: 'Increased crop yield and resistance',
      explanation: 'Biotechnology helps create crops with higher yields and resistance to pests and diseases.'
    },
    {
      id: 'bio12_u1_e20',
      question: 'What is forensic biotechnology used for?',
      options: ['Solving crimes using biological evidence', 'Cooking food', 'Building houses', 'Weather prediction'],
      correct: 'Solving crimes using biological evidence',
      explanation: 'Forensic biotechnology uses DNA analysis and other biological techniques to solve criminal cases.'
    },
    {
      id: 'bio12_u1_e21',
      question: 'What is bacterial transformation?',
      options: ['Introducing foreign DNA into bacteria', 'Bacteria changing shape', 'Bacteria reproducing', 'Bacteria dying'],
      correct: 'Introducing foreign DNA into bacteria',
      explanation: 'Bacterial transformation is the process of introducing foreign DNA into bacterial cells.'
    },
    {
      id: 'bio12_u1_e22',
      question: 'What is the role of DNA polymerase in PCR?',
      options: ['Synthesizes new DNA strands', 'Cuts DNA', 'Joins proteins', 'Destroys RNA'],
      correct: 'Synthesizes new DNA strands',
      explanation: 'DNA polymerase synthesizes new DNA strands by adding nucleotides during PCR amplification.'
    },
    {
      id: 'bio12_u1_e23',
      question: 'What is gene sequencing?',
      options: ['Determining the order of nucleotides in DNA', 'Counting genes', 'Removing genes', 'Copying genes'],
      correct: 'Determining the order of nucleotides in DNA',
      explanation: 'Gene sequencing determines the exact order of nucleotides (A, T, G, C) in a DNA molecule.'
    },
    {
      id: 'bio12_u1_e24',
      question: 'What is the purpose of gel electrophoresis?',
      options: ['Separate DNA fragments by size', 'Heat DNA', 'Cool DNA', 'Color DNA'],
      correct: 'Separate DNA fragments by size',
      explanation: 'Gel electrophoresis separates DNA fragments based on their size using an electric field.'
    },
    {
      id: 'bio12_u1_e25',
      question: 'What is a biological vector?',
      options: ['An organism that carries and transfers genes', 'A type of disease', 'A measurement tool', 'A chemical compound'],
      correct: 'An organism that carries and transfers genes',
      explanation: 'Biological vectors are organisms (like bacteria or viruses) used to transfer genetic material between cells.'
    }
  ],
  medium: [
    {
      id: 'bio12_u1_m1',
      question: 'What is recombinant DNA?',
      options: ['DNA formed by combining DNA from different sources', 'DNA from a single organism', 'RNA molecule', 'Protein molecule'],
      correct: 'DNA formed by combining DNA from different sources',
      explanation: 'Recombinant DNA is created by joining DNA from different organisms.'
    },
    {
      id: 'bio12_u1_m2',
      question: 'What is a vector in genetic engineering?',
      options: ['A DNA molecule used to transfer genes', 'A disease carrier', 'A type of cell', 'An enzyme'],
      correct: 'A DNA molecule used to transfer genes',
      explanation: 'Vectors carry foreign DNA into host cells in genetic engineering.'
    },
    {
      id: 'bio12_u1_m3',
      question: 'What is the role of ligase enzyme?',
      options: ['Join DNA fragments', 'Cut DNA', 'Replicate DNA', 'Transcribe RNA'],
      correct: 'Join DNA fragments',
      explanation: 'Ligase joins DNA fragments together during recombinant DNA formation.'
    },
    {
      id: 'bio12_u1_m4',
      question: 'What is gel electrophoresis used for?',
      options: ['Separating DNA fragments by size', 'Amplifying DNA', 'Sequencing DNA', 'Cloning genes'],
      correct: 'Separating DNA fragments by size',
      explanation: 'Gel electrophoresis separates DNA fragments based on size.'
    },
    {
      id: 'bio12_u1_m5',
      question: 'What is a transgenic organism?',
      options: ['An organism with genes from another species', 'A natural organism', 'A virus', 'A fossil'],
      correct: 'An organism with genes from another species',
      explanation: 'Transgenic organisms contain foreign genes introduced by genetic engineering.'
    },
    {
      id: 'bio12_u1_m6',
      question: 'What is the function of a promoter in genetic engineering?',
      options: ['Initiate transcription', 'Terminate transcription', 'Replicate DNA', 'Translate proteins'],
      correct: 'Initiate transcription',
      explanation: 'Promoters are DNA sequences that initiate gene transcription.'
    },
    {
      id: 'bio12_u1_m7',
      question: 'What is the role of plasmids in genetic engineering?',
      options: ['Vectors for gene transfer', 'Cell organelles', 'Enzymes', 'Proteins'],
      correct: 'Vectors for gene transfer',
      explanation: 'Plasmids are circular DNA molecules used as vectors in bacteria.'
    },
    {
      id: 'bio12_u1_m8',
      question: 'What is gene cloning?',
      options: ['Producing multiple copies of a gene', 'Crossbreeding plants', 'Mutation', 'Natural selection'],
      correct: 'Producing multiple copies of a gene',
      explanation: 'Gene cloning produces many copies of a specific gene.'
    },
    {
      id: 'bio12_u1_m9',
      question: 'What is the purpose of DNA sequencing?',
      options: ['Determining the order of nucleotides', 'Amplifying DNA', 'Cutting DNA', 'Joining DNA fragments'],
      correct: 'Determining the order of nucleotides',
      explanation: 'DNA sequencing reveals the exact nucleotide order in a DNA molecule.'
    },
    {
      id: 'bio12_u1_m10',
      question: 'What is the role of cDNA in genetic engineering?',
      options: ['Complementary DNA synthesized from mRNA', 'Genomic DNA', 'RNA molecule', 'Protein molecule'],
      correct: 'Complementary DNA synthesized from mRNA',
      explanation: 'cDNA is synthesized from mRNA and used in cloning expressed genes.'
    },
    {
      id: 'bio12_u1_m11',
      question: 'What is the role of restriction enzymes in genetic engineering?',
      options: ['Cut DNA at specific sequences', 'Join DNA fragments', 'Copy DNA', 'Translate proteins'],
      correct: 'Cut DNA at specific sequences',
      explanation: 'Restriction enzymes act as molecular scissors, cutting DNA at specific recognition sequences.'
    },
    {
      id: 'bio12_u1_m12',
      question: 'What is a plasmid?',
      options: ['A small circular DNA molecule', 'A type of protein', 'A cell organelle', 'A type of virus'],
      correct: 'A small circular DNA molecule',
      explanation: 'Plasmids are small, circular DNA molecules found in bacteria, often used as vectors in genetic engineering.'
    },
    {
      id: 'bio12_u1_m13',
      question: 'What is gene therapy?',
      options: ['Treatment using genetic modification', 'Physical therapy', 'Drug treatment', 'Surgery'],
      correct: 'Treatment using genetic modification',
      explanation: 'Gene therapy involves introducing genetic material into cells to treat or prevent disease.'
    },
    {
      id: 'bio12_u1_m14',
      question: 'What is bioinformatics?',
      options: ['Computer analysis of biological data', 'Study of insects', 'Plant breeding', 'Animal behavior'],
      correct: 'Computer analysis of biological data',
      explanation: 'Bioinformatics uses computational tools to analyze and interpret biological data, especially genetic sequences.'
    },
    {
      id: 'bio12_u1_m15',
      question: 'What is the Human Genome Project?',
      options: ['Mapping all human DNA', 'Cloning humans', 'Creating new species', 'Studying brain function'],
      correct: 'Mapping all human DNA',
      explanation: 'The Human Genome Project was an international effort to map and sequence the entire human genome.'
    }
  ],
  hard: [
    {
      id: 'bio12_u1_h1',
      question: 'What is the CRISPR-Cas9 system used for?',
      options: ['Gene editing', 'Protein synthesis', 'Cell division', 'DNA replication'],
      correct: 'Gene editing',
      explanation: 'CRISPR-Cas9 is a powerful tool for precise gene editing.'
    },
    {
      id: 'bio12_u1_h2',
      question: 'What is the significance of the polymerase chain reaction (PCR)?',
      options: ['Amplifying DNA sequences', 'Sequencing proteins', 'Transcribing RNA', 'Translating proteins'],
      correct: 'Amplifying DNA sequences',
      explanation: 'PCR allows rapid amplification of specific DNA sequences.'
    },
    {
      id: 'bio12_u1_h3',
      question: 'What ethical issues are associated with genetic engineering?',
      options: ['Privacy, consent, and safety', 'Cost and efficiency', 'Speed and accuracy', 'None'],
      correct: 'Privacy, consent, and safety',
      explanation: 'Genetic engineering raises ethical concerns about privacy, consent, and potential risks.'
    },
    {
      id: 'bio12_u1_h4',
      question: 'What is the role of vectors in gene therapy?',
      options: ['Deliver therapeutic genes', 'Destroy harmful genes', 'Replicate DNA', 'Transcribe RNA'],
      correct: 'Deliver therapeutic genes',
      explanation: 'Vectors carry therapeutic genes into patient cells in gene therapy.'
    },
    {
      id: 'bio12_u1_h5',
      question: 'What is the difference between somatic and germline gene therapy?',
      options: ['Somatic affects body cells; germline affects reproductive cells', 'Somatic affects reproductive cells; germline affects body cells', 'No difference', 'Both are the same'],
      correct: 'Somatic affects body cells; germline affects reproductive cells',
      explanation: 'Somatic gene therapy targets body cells; germline therapy targets reproductive cells and can be inherited.'
    },
    {
      id: 'bio12_u1_h6',
      question: 'What is a DNA microarray used for?',
      options: ['Analyzing gene expression', 'Sequencing DNA', 'Amplifying DNA', 'Editing genes'],
      correct: 'Analyzing gene expression',
      explanation: 'DNA microarrays measure the expression levels of many genes simultaneously.'
    },
    {
      id: 'bio12_u1_h7',
      question: 'What is the role of siRNA in gene regulation?',
      options: ['Silencing gene expression', 'Enhancing gene expression', 'Replicating DNA', 'Translating proteins'],
      correct: 'Silencing gene expression',
      explanation: 'siRNA molecules can silence specific genes by degrading mRNA.'
    },
    {
      id: 'bio12_u1_h8',
      question: 'What is the purpose of DNA fingerprinting?',
      options: ['Identify individuals based on DNA', 'Clone organisms', 'Sequence genomes', 'Edit genes'],
      correct: 'Identify individuals based on DNA',
      explanation: 'DNA fingerprinting is used in forensics and paternity testing to identify individuals.'
    },
    {
      id: 'bio12_u1_h9',
      question: 'What is the role of epigenetics in gene expression?',
      options: ['Regulating gene activity without changing DNA sequence', 'Changing DNA sequence', 'Replicating DNA', 'Transcribing RNA'],
      correct: 'Regulating gene activity without changing DNA sequence',
      explanation: 'Epigenetics involves modifications that affect gene expression without altering the DNA sequence.'
    },
    {
      id: 'bio12_u1_h10',
      question: 'What is the function of a reporter gene in genetic engineering?',
      options: ['Indicate gene expression', 'Cut DNA', 'Join DNA fragments', 'Replicate DNA'],
      correct: 'Indicate gene expression',
      explanation: 'Reporter genes produce detectable signals to show if a gene is expressed.'
    },
    {
      id: 'bio12_u1_h11',
      question: 'What is CRISPR-Cas9?',
      options: ['A gene editing tool', 'A type of bacteria', 'A protein structure', 'A cell division process'],
      correct: 'A gene editing tool',
      explanation: 'CRISPR-Cas9 is a revolutionary gene editing technology that allows precise modification of DNA sequences.'
    },
    {
      id: 'bio12_u1_h12',
      question: 'What are the ethical concerns with genetic engineering?',
      options: ['All of the above', 'Safety risks', 'Equity issues', 'Environmental impact'],
      correct: 'All of the above',
      explanation: 'Genetic engineering raises multiple ethical concerns including safety, equity, and environmental considerations.'
    },
    {
      id: 'bio12_u1_h13',
      question: 'What is pharmacogenomics?',
      options: ['Personalized medicine based on genetics', 'Drug manufacturing', 'Disease diagnosis', 'Vaccine development'],
      correct: 'Personalized medicine based on genetics',
      explanation: 'Pharmacogenomics studies how genetic variations affect drug responses, enabling personalized treatments.'
    },
    {
      id: 'bio12_u1_h14',
      question: 'What is synthetic biology?',
      options: ['Engineering biological systems', 'Studying natural biology', 'Preserving species', 'Environmental cleanup'],
      correct: 'Engineering biological systems',
      explanation: 'Synthetic biology involves designing and constructing new biological parts, devices, and systems.'
    },
    {
      id: 'bio12_u1_h15',
      question: 'What are biosafety considerations in biotechnology?',
      options: ['Preventing harm from biological agents', 'Cost reduction', 'Speed of production', 'Market competition'],
      correct: 'Preventing harm from biological agents',
      explanation: 'Biosafety focuses on preventing harm to humans, animals, and the environment from biological agents and processes.'
    }
  ]
};

const unit2Questions = {
  easy: [
    {
      id: 'bio12_u2_e1',
      question: 'What is the main focus of Unit 2 in Grade 12 Biology?',
      options: ['Microorganisms and Biotechnology', 'Cell Structure', 'Genetics', 'Ecology'],
      correct: 'Microorganisms and Biotechnology',
      explanation: 'Unit 2 focuses on microorganisms and their applications in biotechnology.'
    },
    {
      id: 'bio12_u2_e2',
      question: 'Which microorganism is used in yogurt production?',
      options: ['Lactobacillus', 'E. coli', 'Staphylococcus', 'Streptomyces'],
      correct: 'Lactobacillus',
      explanation: 'Lactobacillus bacteria ferment milk to produce yogurt.'
    },
    {
      id: 'bio12_u2_e3',
      question: 'What is fermentation?',
      options: ['Anaerobic breakdown of organic compounds', 'Aerobic respiration', 'Photosynthesis', 'DNA replication'],
      correct: 'Anaerobic breakdown of organic compounds',
      explanation: 'Fermentation is the anaerobic breakdown of organic compounds by microorganisms.'
    },
    {
      id: 'bio12_u2_e4',
      question: 'What is an antibiotic?',
      options: ['A substance that kills bacteria', 'A type of virus', 'A nutrient', 'A vitamin'],
      correct: 'A substance that kills bacteria',
      explanation: 'Antibiotics are substances that kill or inhibit the growth of bacteria.'
    },
    {
      id: 'bio12_u2_e5',
      question: 'What causes food poisoning?',
      options: ['Harmful microorganisms', 'Too much salt', 'Cold temperature', 'Bright light'],
      correct: 'Harmful microorganisms',
      explanation: 'Food poisoning is typically caused by consuming food contaminated with harmful bacteria, viruses, or toxins.'
    },
    {
      id: 'bio12_u2_e6',
      question: 'What is pasteurization?',
      options: ['Heat treatment to kill pathogens', 'Adding preservatives', 'Freezing food', 'Adding vitamins'],
      correct: 'Heat treatment to kill pathogens',
      explanation: 'Pasteurization is a process that uses heat to kill harmful microorganisms in food and beverages.'
    },
    {
      id: 'bio12_u2_e7',
      question: 'What is the role of yeast in baking?',
      options: ['Fermentation to produce carbon dioxide', 'Adding flavor', 'Preserving bread', 'Providing nutrients'],
      correct: 'Fermentation to produce carbon dioxide',
      explanation: 'Yeast ferments sugars producing CO2 that makes bread rise.'
    },
    {
      id: 'bio12_u2_e8',
      question: 'What is a vaccine?',
      options: ['A substance that stimulates immunity', 'An antibiotic', 'A virus', 'A toxin'],
      correct: 'A substance that stimulates immunity',
      explanation: 'Vaccines stimulate the immune system to protect against diseases.'
    },
    {
      id: 'bio12_u2_e9',
      question: 'What is the function of decomposers?',
      options: ['Break down dead matter', 'Produce oxygen', 'Fix nitrogen', 'Photosynthesize'],
      correct: 'Break down dead matter',
      explanation: 'Decomposers break down dead organisms and recycle nutrients.'
    },
    {
      id: 'bio12_u2_e10',
      question: 'What is the role of bacteria in nitrogen fixation?',
      options: ['Convert atmospheric nitrogen to usable forms', 'Produce oxygen', 'Consume nitrogen', 'Destroy nitrogen compounds'],
      correct: 'Convert atmospheric nitrogen to usable forms',
      explanation: 'Certain bacteria convert nitrogen gas into ammonia usable by plants.'
    },
    {
      id: 'bio12_u2_e11',
      question: 'What is fermentation?',
      options: ['Anaerobic breakdown of organic compounds', 'Aerobic respiration', 'Photosynthesis', 'DNA replication'],
      correct: 'Anaerobic breakdown of organic compounds',
      explanation: 'Fermentation is the anaerobic breakdown of organic compounds by microorganisms.'
    },
    {
      id: 'bio12_u2_e12',
      question: 'Which microorganism is used to make yogurt?',
      options: ['Lactobacillus', 'E. coli', 'Staphylococcus', 'Streptomyces'],
      correct: 'Lactobacillus',
      explanation: 'Lactobacillus bacteria are commonly used in yogurt production through lactic acid fermentation.'
    },
    {
      id: 'bio12_u2_e13',
      question: 'What is an antibiotic?',
      options: ['A substance that kills bacteria', 'A type of virus', 'A nutrient', 'A vitamin'],
      correct: 'A substance that kills bacteria',
      explanation: 'Antibiotics are substances that kill or inhibit the growth of bacteria.'
    },
    {
      id: 'bio12_u2_e14',
      question: 'What causes food poisoning?',
      options: ['Harmful microorganisms', 'Too much salt', 'Cold temperature', 'Bright light'],
      correct: 'Harmful microorganisms',
      explanation: 'Food poisoning is typically caused by consuming food contaminated with harmful bacteria, viruses, or toxins.'
    },
    {
      id: 'bio12_u2_e15',
      question: 'What is pasteurization?',
      options: ['Heat treatment to kill pathogens', 'Adding preservatives', 'Freezing food', 'Adding vitamins'],
      correct: 'Heat treatment to kill pathogens',
      explanation: 'Pasteurization is a process that uses heat to kill harmful microorganisms in food and beverages.'
    }
  ],
  medium: [
    {
      id: 'bio12_u2_m1',
      question: 'What is the difference between bacteriostatic and bactericidal antibiotics?',
      options: ['One stops growth, one kills bacteria', 'No difference', 'One is natural, one is synthetic', 'One is stronger'],
      correct: 'One stops growth, one kills bacteria',
      explanation: 'Bacteriostatic antibiotics inhibit bacterial growth, while bactericidal antibiotics kill bacteria directly.'
    },
    {
      id: 'bio12_u2_m2',
      question: 'What is antibiotic resistance?',
      options: ['Bacteria becoming immune to antibiotics', 'Antibiotics becoming weaker', 'Humans becoming allergic', 'Viruses affecting bacteria'],
      correct: 'Bacteria becoming immune to antibiotics',
      explanation: 'Antibiotic resistance occurs when bacteria evolve mechanisms to survive antibiotic treatment.'
    },
    {
      id: 'bio12_u2_m3',
      question: 'What is the role of microorganisms in nitrogen cycle?',
      options: ['Convert nitrogen compounds', 'Produce oxygen', 'Create carbon dioxide', 'Generate heat'],
      correct: 'Convert nitrogen compounds',
      explanation: 'Microorganisms play crucial roles in converting nitrogen between different chemical forms in the nitrogen cycle.'
    },
    {
      id: 'bio12_u2_m4',
      question: 'What is bioremediation?',
      options: ['Using organisms to clean pollution', 'Making new medicines', 'Preventing disease', 'Growing crops'],
      correct: 'Using organisms to clean pollution',
      explanation: 'Bioremediation uses living organisms, especially microorganisms, to remove or neutralize pollutants.'
    },
    {
      id: 'bio12_u2_m5',
      question: 'What are probiotics?',
      options: ['Beneficial live microorganisms', 'Harmful bacteria', 'Synthetic chemicals', 'Dead cells'],
      correct: 'Beneficial live microorganisms',
      explanation: 'Probiotics are live microorganisms that provide health benefits when consumed in adequate amounts.'
    },
    {
      id: 'bio12_u2_m6',
      question: 'What is the role of bacteriophages?',
      options: ['Viruses that infect bacteria', 'Bacteria that infect viruses', 'Antibiotics', 'Fungi'],
      correct: 'Viruses that infect bacteria',
      explanation: 'Bacteriophages are viruses that specifically infect and kill bacteria.'
    },
    {
      id: 'bio12_u2_m7',
      question: 'What is the function of nitrogen-fixing bacteria?',
      options: ['Convert nitrogen gas to ammonia', 'Produce oxygen', 'Decompose organic matter', 'Cause disease'],
      correct: 'Convert nitrogen gas to ammonia',
      explanation: 'Nitrogen-fixing bacteria convert atmospheric nitrogen into forms usable by plants.'
    },
    {
      id: 'bio12_u2_m8',
      question: 'What is the role of cyanobacteria in ecosystems?',
      options: ['Photosynthesis and nitrogen fixation', 'Decomposition', 'Pathogenesis', 'Pollution'],
      correct: 'Photosynthesis and nitrogen fixation',
      explanation: 'Cyanobacteria perform photosynthesis and fix nitrogen, contributing to ecosystem productivity.'
    },
    {
      id: 'bio12_u2_m9',
      question: 'What is the difference between aerobic and anaerobic respiration?',
      options: ['Aerobic uses oxygen; anaerobic does not', 'No difference', 'Anaerobic uses oxygen; aerobic does not', 'Both use oxygen'],
      correct: 'Aerobic uses oxygen; anaerobic does not',
      explanation: 'Aerobic respiration requires oxygen; anaerobic respiration occurs without oxygen.'
    },
    {
      id: 'bio12_u2_m10',
      question: 'What is the role of enzymes in microbial metabolism?',
      options: ['Catalyze biochemical reactions', 'Store energy', 'Provide structure', 'Transport molecules'],
      correct: 'Catalyze biochemical reactions',
      explanation: 'Enzymes speed up metabolic reactions in microorganisms.'
    },
    {
      id: 'bio12_u2_m11',
      question: 'What is the difference between bacteriostatic and bactericidal antibiotics?',
      options: ['One stops growth, one kills bacteria', 'No difference', 'One is natural, one is synthetic', 'One is stronger'],
      correct: 'One stops growth, one kills bacteria',
      explanation: 'Bacteriostatic antibiotics inhibit bacterial growth, while bactericidal antibiotics kill bacteria directly.'
    },
    {
      id: 'bio12_u2_m12',
      question: 'What is antibiotic resistance?',
      options: ['Bacteria becoming immune to antibiotics', 'Antibiotics becoming weaker', 'Humans becoming allergic', 'Viruses affecting bacteria'],
      correct: 'Bacteria becoming immune to antibiotics',
      explanation: 'Antibiotic resistance occurs when bacteria evolve mechanisms to survive antibiotic treatment.'
    },
    {
      id: 'bio12_u2_m13',
      question: 'What is the role of microorganisms in nitrogen cycle?',
      options: ['Convert nitrogen compounds', 'Produce oxygen', 'Create carbon dioxide', 'Generate heat'],
      correct: 'Convert nitrogen compounds',
      explanation: 'Microorganisms play crucial roles in converting nitrogen between different chemical forms in the nitrogen cycle.'
    },
    {
      id: 'bio12_u2_m14',
      question: 'What is bioremediation?',
      options: ['Using organisms to clean pollution', 'Making new medicines', 'Preventing disease', 'Growing crops'],
      correct: 'Using organisms to clean pollution',
      explanation: 'Bioremediation uses living organisms, especially microorganisms, to remove or neutralize pollutants.'
    },
    {
      id: 'bio12_u2_m15',
      question: 'What are probiotics?',
      options: ['Beneficial live microorganisms', 'Harmful bacteria', 'Synthetic chemicals', 'Dead cells'],
      correct: 'Beneficial live microorganisms',
      explanation: 'Probiotics are live microorganisms that provide health benefits when consumed in adequate amounts.'
    }
  ],
  hard: [
    {
      id: 'bio12_u2_h1',
      question: 'What is horizontal gene transfer in bacteria?',
      options: ['Transfer of genes between bacteria', 'Vertical inheritance', 'Gene mutation', 'Gene deletion'],
      correct: 'Transfer of genes between bacteria',
      explanation: 'Horizontal gene transfer allows bacteria to exchange genetic material directly, contributing to antibiotic resistance spread.'
    },
    {
      id: 'bio12_u2_h2',
      question: 'What is quorum sensing?',
      options: ['Bacterial communication system', 'Cell division', 'Nutrient absorption', 'Waste elimination'],
      correct: 'Bacterial communication system',
      explanation: 'Quorum sensing is a bacterial communication system that coordinates group behaviors based on population density.'
    },
    {
      id: 'bio12_u2_h3',
      question: 'What is biofilm formation?',
      options: ['Bacterial communities in protective matrix', 'Single bacterial growth', 'Viral infection', 'Cell death'],
      correct: 'Bacterial communities in protective matrix',
      explanation: 'Biofilms are structured communities of bacteria embedded in a protective extracellular matrix.'
    },
    {
      id: 'bio12_u2_h4',
      question: 'What is the mechanism of penicillin action?',
      options: ['Inhibits cell wall synthesis', 'Destroys DNA', 'Blocks protein synthesis', 'Disrupts membrane'],
      correct: 'Inhibits cell wall synthesis',
      explanation: 'Penicillin works by inhibiting the synthesis of peptidoglycan in bacterial cell walls.'
    },
    {
      id: 'bio12_u2_h5',
      question: 'What is the role of microorganisms in carbon cycle?',
      options: ['Decompose organic matter', 'Only produce CO2', 'Only consume CO2', 'No role in carbon cycle'],
      correct: 'Decompose organic matter',
      explanation: 'Microorganisms play essential roles in decomposing organic matter and cycling carbon through ecosystems.'
    },
    {
      id: 'bio12_u2_h6',
      question: 'What is the significance of extremophiles?',
      options: ['Survive in extreme environments', 'Cause diseases', 'Produce antibiotics', 'Fix nitrogen'],
      correct: 'Survive in extreme environments',
      explanation: 'Extremophiles are microorganisms adapted to survive harsh conditions.'
    },
    {
      id: 'bio12_u2_h7',
      question: 'What is the role of plasmids in antibiotic resistance?',
      options: ['Carry resistance genes', 'Cause infections', 'Produce antibiotics', 'Destroy bacteria'],
      correct: 'Carry resistance genes',
      explanation: 'Plasmids can carry genes that confer antibiotic resistance and transfer them between bacteria.'
    },
    {
      id: 'bio12_u2_h8',
      question: 'What is the function of endospores?',
      options: ['Protect bacteria in harsh conditions', 'Aid in reproduction', 'Produce toxins', 'Fix nitrogen'],
      correct: 'Protect bacteria in harsh conditions',
      explanation: 'Endospores allow bacteria to survive extreme environmental stresses.'
    },
    {
      id: 'bio12_u2_h9',
      question: 'What is the role of microbial enzymes in industry?',
      options: ['Catalyze reactions in production processes', 'Cause diseases', 'Produce toxins', 'Fix nitrogen'],
      correct: 'Catalyze reactions in production processes',
      explanation: 'Microbial enzymes are used in industries like food, pharmaceuticals, and biofuels.'
    },
    {
      id: 'bio12_u2_h10',
      question: 'What is the significance of metagenomics?',
      options: ['Study of genetic material from environmental samples', 'Study of individual genomes', 'Protein analysis', 'Cell structure'],
      correct: 'Study of genetic material from environmental samples',
      explanation: 'Metagenomics analyzes DNA from entire microbial communities without culturing.'
    },
    {
      id: 'bio12_u2_h11',
      question: 'What is horizontal gene transfer in bacteria?',
      options: ['Transfer of genes between bacteria', 'Vertical inheritance', 'Gene mutation', 'Gene deletion'],
      correct: 'Transfer of genes between bacteria',
      explanation: 'Horizontal gene transfer allows bacteria to exchange genetic material directly, contributing to antibiotic resistance spread.'
    },
    {
      id: 'bio12_u2_h12',
      question: 'What is quorum sensing?',
      options: ['Bacterial communication system', 'Cell division', 'Nutrient absorption', 'Waste elimination'],
      correct: 'Bacterial communication system',
      explanation: 'Quorum sensing is a bacterial communication system that coordinates group behaviors based on population density.'
    },
    {
      id: 'bio12_u2_h13',
      question: 'What is biofilm formation?',
      options: ['Bacterial communities in protective matrix', 'Single bacterial growth', 'Viral infection', 'Cell death'],
      correct: 'Bacterial communities in protective matrix',
      explanation: 'Biofilms are structured communities of bacteria embedded in a protective extracellular matrix.'
    },
    {
      id: 'bio12_u2_h14',
      question: 'What is the mechanism of penicillin action?',
      options: ['Inhibits cell wall synthesis', 'Destroys DNA', 'Blocks protein synthesis', 'Disrupts membrane'],
      correct: 'Inhibits cell wall synthesis',
      explanation: 'Penicillin works by inhibiting the synthesis of peptidoglycan in bacterial cell walls.'
    },
    {
      id: 'bio12_u2_h15',
      question: 'What is the role of microorganisms in carbon cycle?',
      options: ['Decompose organic matter', 'Only produce CO2', 'Only consume CO2', 'No role in carbon cycle'],
      correct: 'Decompose organic matter',
      explanation: 'Microorganisms play essential roles in decomposing organic matter and cycling carbon through ecosystems.'
    }
  ]
};

const unit3Questions = {
  easy: [
    {
      id: 'bio12_u3_e1',
      question: 'What is the main focus of Unit 3 in Grade 12 Biology?',
      options: ['Plant and Animal Physiology', 'Microorganisms', 'Genetics', 'Ecology'],
      correct: 'Plant and Animal Physiology',
      explanation: 'Unit 3 covers the physiology of plants and animals.'
    }
    // Additional questions would be added here following the same pattern
  ],
  medium: [
    // Questions for medium difficulty
  ],
  hard: [
    // Questions for hard difficulty
  ]
};

const unit4Questions = {
  easy: [
    {
      id: 'bio12_u4_e1',
      question: 'What is the main focus of Unit 4 in Grade 12 Biology?',
      options: ['Genetics and Evolution', 'Plant Physiology', 'Microorganisms', 'Ecology'],
      correct: 'Genetics and Evolution',
      explanation: 'Unit 4 focuses on genetics and evolutionary biology.'
    }
    // Additional questions would be added here following the same pattern
  ],
  medium: [
    // Questions for medium difficulty
  ],
  hard: [
    // Questions for hard difficulty
  ]
};

const unit5Questions = {
  easy: [
    {
      id: 'bio12_u5_e1',
      question: 'What is the main focus of Unit 5 in Grade 12 Biology?',
      options: ['Ecology and Environment', 'Genetics', 'Plant Physiology', 'Microorganisms'],
      correct: 'Ecology and Environment',
      explanation: 'Unit 5 covers ecological principles and environmental issues.'
    }
    // Additional questions would be added here following the same pattern
  ],
  medium: [
    // Questions for medium difficulty
  ],
  hard: [
    // Questions for hard difficulty
  ]
};

const unit6Questions = {
  easy: [
    {
      id: 'bio12_u6_e1',
      question: 'What is the main focus of Unit 6 in Grade 12 Biology?',
      options: ['Human Physiology', 'Ecology', 'Genetics', 'Plant Physiology'],
      correct: 'Human Physiology',
      explanation: 'Unit 6 focuses on the physiology of the human body.'
    }
    // Additional questions would be added here following the same pattern
  ],
  medium: [
    // Questions for medium difficulty
  ],
  hard: [
    // Questions for hard difficulty
  ]
};

export const grade12BiologyQuestions = {
  'Unit 1: Application of Biology': unit1Questions,
  'Unit 2: Microorganisms and Biotechnology': unit2Questions,
  'Unit 3: Plant and Animal Physiology': unit3Questions,
  'Unit 4: Genetics and Evolution': unit4Questions,
  'Unit 5: Ecology and Environment': unit5Questions,
  'Unit 6: Human Physiology': unit6Questions
};

export const getGrade12BiologyQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  const unitData = grade12BiologyQuestions[unit];
  if (!unitData) {
    return [];
  }
  return unitData[difficulty] || [];
};
