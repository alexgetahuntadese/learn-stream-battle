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
    },
    {
      id: 'bio12_u3_e2',
      question: 'What is photosynthesis?',
      options: ['Process plants use to make food', 'Animal respiration', 'Cell division', 'DNA replication'],
      correct: 'Process plants use to make food',
      explanation: 'Photosynthesis is the process by which plants convert light energy into chemical energy (glucose).'
    },
    {
      id: 'bio12_u3_e3',
      question: 'What is transpiration?',
      options: ['Water loss from plant leaves', 'Water absorption by roots', 'Photosynthesis', 'Cell division'],
      correct: 'Water loss from plant leaves',
      explanation: 'Transpiration is the process of water movement through plants and its evaporation from leaves.'
    },
    {
      id: 'bio12_u3_e4',
      question: 'What is the function of stomata?',
      options: ['Gas exchange', 'Water storage', 'Food production', 'Support'],
      correct: 'Gas exchange',
      explanation: 'Stomata are pores in plant leaves that allow gas exchange between the plant and atmosphere.'
    },
    {
      id: 'bio12_u3_e5',
      question: 'What is the circulatory system?',
      options: ['System that transports blood', 'System that digests food', 'System that breathes', 'System that thinks'],
      correct: 'System that transports blood',
      explanation: 'The circulatory system transports blood, nutrients, oxygen, and waste throughout the body.'
    },
    {
      id: 'bio12_u3_e6',
      question: 'What is the respiratory system?',
      options: ['System for breathing', 'System for digestion', 'System for circulation', 'System for excretion'],
      correct: 'System for breathing',
      explanation: 'The respiratory system is responsible for gas exchange, bringing oxygen in and removing carbon dioxide.'
    },
    {
      id: 'bio12_u3_e7',
      question: 'What is homeostasis?',
      options: ['Maintaining internal balance', 'Growth and development', 'Reproduction', 'Evolution'],
      correct: 'Maintaining internal balance',
      explanation: 'Homeostasis is the ability of an organism to maintain stable internal conditions despite external changes.'
    },
    {
      id: 'bio12_u3_e8',
      question: 'What is the nervous system?',
      options: ['System that controls body functions', 'System that pumps blood', 'System that digests food', 'System that filters waste'],
      correct: 'System that controls body functions',
      explanation: 'The nervous system controls and coordinates body activities through electrical and chemical signals.'
    },
    {
      id: 'bio12_u3_e9',
      question: 'What is the endocrine system?',
      options: ['System that produces hormones', 'System that fights infections', 'System that moves the body', 'System that processes food'],
      correct: 'System that produces hormones',
      explanation: 'The endocrine system produces and releases hormones that regulate various body functions.'
    },
    {
      id: 'bio12_u3_e10',
      question: 'What is the digestive system?',
      options: ['System that breaks down food', 'System that circulates blood', 'System that exchanges gases', 'System that eliminates waste'],
      correct: 'System that breaks down food',
      explanation: 'The digestive system breaks down food into nutrients that can be absorbed and used by the body.'
    }
  ],
  medium: [
    {
      id: 'bio12_u3_m1',
      question: 'What is the Calvin cycle?',
      options: ['Light-independent reactions of photosynthesis', 'Light-dependent reactions', 'Cellular respiration', 'DNA replication'],
      correct: 'Light-independent reactions of photosynthesis',
      explanation: 'The Calvin cycle is the light-independent phase of photosynthesis where CO2 is fixed into glucose.'
    },
    {
      id: 'bio12_u3_m2',
      question: 'What is the role of chlorophyll?',
      options: ['Absorb light energy', 'Store glucose', 'Transport water', 'Support structure'],
      correct: 'Absorb light energy',
      explanation: 'Chlorophyll is the pigment that captures light energy for photosynthesis.'
    },
    {
      id: 'bio12_u3_m3',
      question: 'What is the function of the heart?',
      options: ['Pump blood throughout the body', 'Filter blood', 'Produce blood cells', 'Store oxygen'],
      correct: 'Pump blood throughout the body',
      explanation: 'The heart is a muscular organ that pumps blood through the circulatory system.'
    },
    {
      id: 'bio12_u3_m4',
      question: 'What is the difference between arteries and veins?',
      options: ['Arteries carry blood away from heart; veins return blood', 'No difference', 'Arteries are smaller', 'Veins carry oxygen'],
      correct: 'Arteries carry blood away from heart; veins return blood',
      explanation: 'Arteries carry oxygenated blood away from the heart; veins return deoxygenated blood to the heart.'
    },
    {
      id: 'bio12_u3_m5',
      question: 'What is the role of hemoglobin?',
      options: ['Transport oxygen', 'Fight infections', 'Clot blood', 'Digest food'],
      correct: 'Transport oxygen',
      explanation: 'Hemoglobin is a protein in red blood cells that binds and transports oxygen.'
    },
    {
      id: 'bio12_u3_m6',
      question: 'What is the function of alveoli?',
      options: ['Gas exchange in lungs', 'Filter air', 'Warm air', 'Store air'],
      correct: 'Gas exchange in lungs',
      explanation: 'Alveoli are tiny air sacs in the lungs where oxygen and carbon dioxide are exchanged.'
    },
    {
      id: 'bio12_u3_m7',
      question: 'What is the role of insulin?',
      options: ['Regulate blood sugar', 'Aid digestion', 'Fight infections', 'Control heart rate'],
      correct: 'Regulate blood sugar',
      explanation: 'Insulin is a hormone that regulates blood glucose levels by promoting glucose uptake by cells.'
    },
    {
      id: 'bio12_u3_m8',
      question: 'What is the function of neurons?',
      options: ['Transmit electrical signals', 'Produce hormones', 'Fight infections', 'Store nutrients'],
      correct: 'Transmit electrical signals',
      explanation: 'Neurons are specialized cells that transmit electrical and chemical signals throughout the nervous system.'
    },
    {
      id: 'bio12_u3_m9',
      question: 'What is the role of enzymes in digestion?',
      options: ['Break down food molecules', 'Absorb nutrients', 'Transport food', 'Store energy'],
      correct: 'Break down food molecules',
      explanation: 'Digestive enzymes break down complex food molecules into simpler forms that can be absorbed.'
    },
    {
      id: 'bio12_u3_m10',
      question: 'What is the function of kidneys?',
      options: ['Filter waste from blood', 'Produce hormones', 'Store water', 'Digest proteins'],
      correct: 'Filter waste from blood',
      explanation: 'Kidneys filter metabolic waste and excess water from the blood to form urine.'
    }
  ],
  hard: [
    {
      id: 'bio12_u3_h1',
      question: 'What is the chemiosmotic theory?',
      options: ['ATP synthesis using proton gradient', 'DNA replication mechanism', 'Protein folding process', 'Cell division process'],
      correct: 'ATP synthesis using proton gradient',
      explanation: 'Chemiosmotic theory explains how ATP is synthesized using the proton gradient across membranes.'
    },
    {
      id: 'bio12_u3_h2',
      question: 'What is the Frank-Starling mechanism?',
      options: ['Heart output increases with venous return', 'Breathing regulation', 'Blood clotting process', 'Hormone regulation'],
      correct: 'Heart output increases with venous return',
      explanation: 'The Frank-Starling mechanism describes how the heart increases output when more blood returns to it.'
    },
    {
      id: 'bio12_u3_h3',
      question: 'What is the Bohr effect?',
      options: ['Hemoglobin oxygen affinity decreases with pH', 'Oxygen production in lungs', 'Blood pressure regulation', 'Heart rate control'],
      correct: 'Hemoglobin oxygen affinity decreases with pH',
      explanation: 'The Bohr effect describes how hemoglobin\'s oxygen affinity decreases in acidic conditions.'
    },
    {
      id: 'bio12_u3_h4',
      question: 'What is countercurrent flow in fish gills?',
      options: ['Blood and water flow in opposite directions', 'Same direction flow', 'Random flow pattern', 'No flow pattern'],
      correct: 'Blood and water flow in opposite directions',
      explanation: 'Countercurrent flow maximizes oxygen extraction efficiency in fish gills.'
    },
    {
      id: 'bio12_u3_h5',
      question: 'What is the role of ADH in water balance?',
      options: ['Increases water reabsorption in kidneys', 'Decreases water intake', 'Increases urine production', 'Controls blood pressure only'],
      correct: 'Increases water reabsorption in kidneys',
      explanation: 'ADH (antidiuretic hormone) increases water reabsorption in kidney tubules to conserve water.'
    },
    {
      id: 'bio12_u3_h6',
      question: 'What is synaptic plasticity?',
      options: ['Ability of synapses to strengthen or weaken', 'Formation of new neurons', 'Death of brain cells', 'Blood-brain barrier function'],
      correct: 'Ability of synapses to strengthen or weaken',
      explanation: 'Synaptic plasticity is the ability of synapses to change their strength, underlying learning and memory.'
    },
    {
      id: 'bio12_u3_h7',
      question: 'What is the oxygen-hemoglobin dissociation curve?',
      options: ['Graph showing oxygen binding to hemoglobin', 'Heart rate variability', 'Blood pressure changes', 'Breathing patterns'],
      correct: 'Graph showing oxygen binding to hemoglobin',
      explanation: 'This curve shows the relationship between oxygen partial pressure and hemoglobin saturation.'
    },
    {
      id: 'bio12_u3_h8',
      question: 'What is negative feedback in homeostasis?',
      options: ['Response opposes the initial stimulus', 'Response enhances the stimulus', 'No response to stimulus', 'Random responses'],
      correct: 'Response opposes the initial stimulus',
      explanation: 'Negative feedback mechanisms maintain homeostasis by opposing changes from the set point.'
    },
    {
      id: 'bio12_u3_h9',
      question: 'What is the role of surfactant in lungs?',
      options: ['Reduces surface tension in alveoli', 'Filters air', 'Produces mucus', 'Fights infections'],
      correct: 'Reduces surface tension in alveoli',
      explanation: 'Surfactant reduces surface tension in alveoli, preventing collapse and easing breathing.'
    },
    {
      id: 'bio12_u3_h10',
      question: 'What is the renin-angiotensin-aldosterone system?',
      options: ['Blood pressure and volume regulation', 'Digestion control', 'Breathing regulation', 'Temperature control'],
      correct: 'Blood pressure and volume regulation',
      explanation: 'This system regulates blood pressure and fluid balance through hormone cascades.'
    }
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
    },
    {
      id: 'bio12_u4_e2',
      question: 'What is a gene?',
      options: ['A unit of heredity', 'A type of protein', 'A cell organelle', 'A tissue'],
      correct: 'A unit of heredity',
      explanation: 'A gene is a unit of heredity that determines specific traits in organisms.'
    },
    {
      id: 'bio12_u4_e3',
      question: 'What is DNA?',
      options: ['Genetic material', 'A protein', 'A carbohydrate', 'A lipid'],
      correct: 'Genetic material',
      explanation: 'DNA (deoxyribonucleic acid) is the genetic material that stores hereditary information.'
    },
    {
      id: 'bio12_u4_e4',
      question: 'What is evolution?',
      options: ['Change in species over time', 'Individual growth', 'Cell division', 'Metabolism'],
      correct: 'Change in species over time',
      explanation: 'Evolution is the change in heritable traits of biological populations over time.'
    },
    {
      id: 'bio12_u4_e5',
      question: 'What is natural selection?',
      options: ['Survival of the fittest', 'Random changes', 'Genetic drift', 'Mutation'],
      correct: 'Survival of the fittest',
      explanation: 'Natural selection is the process where organisms with favorable traits survive and reproduce more successfully.'
    },
    {
      id: 'bio12_u4_e6',
      question: 'What is a chromosome?',
      options: ['Structure containing DNA', 'A type of cell', 'An enzyme', 'A hormone'],
      correct: 'Structure containing DNA',
      explanation: 'A chromosome is a structure that contains DNA and associated proteins in the cell nucleus.'
    },
    {
      id: 'bio12_u4_e7',
      question: 'What is heredity?',
      options: ['Passing traits from parents to offspring', 'Individual development', 'Environmental adaptation', 'Cell growth'],
      correct: 'Passing traits from parents to offspring',
      explanation: 'Heredity is the passing of traits from parents to their offspring through genetic material.'
    },
    {
      id: 'bio12_u4_e8',
      question: 'What is a mutation?',
      options: ['Change in DNA sequence', 'Cell division', 'Protein synthesis', 'Energy production'],
      correct: 'Change in DNA sequence',
      explanation: 'A mutation is a change in the DNA sequence that can alter gene function and traits.'
    },
    {
      id: 'bio12_u4_e9',
      question: 'What is adaptation?',
      options: ['Traits that help survival', 'Random changes', 'Cell death', 'Energy storage'],
      correct: 'Traits that help survival',
      explanation: 'Adaptation refers to traits that have evolved to help organisms survive in their environment.'
    },
    {
      id: 'bio12_u4_e10',
      question: 'What is a species?',
      options: ['Group of similar organisms that can reproduce', 'Any living thing', 'A type of cell', 'A genetic code'],
      correct: 'Group of similar organisms that can reproduce',
      explanation: 'A species is a group of similar organisms that can interbreed and produce fertile offspring.'
    }
  ],
  medium: [
    {
      id: 'bio12_u4_m1',
      question: 'What is Mendel\'s law of segregation?',
      options: ['Alleles separate during gamete formation', 'Genes are linked', 'Traits blend together', 'DNA replicates'],
      correct: 'Alleles separate during gamete formation',
      explanation: 'Mendel\'s law of segregation states that allele pairs separate during gamete formation.'
    },
    {
      id: 'bio12_u4_m2',
      question: 'What is genetic drift?',
      options: ['Random changes in allele frequency', 'Natural selection', 'Gene flow', 'Mutation rate'],
      correct: 'Random changes in allele frequency',
      explanation: 'Genetic drift is the random change in allele frequencies in a population over time.'
    },
    {
      id: 'bio12_u4_m3',
      question: 'What is a genotype?',
      options: ['Genetic makeup of an organism', 'Physical appearance', 'Behavioral traits', 'Environmental factors'],
      correct: 'Genetic makeup of an organism',
      explanation: 'Genotype refers to the genetic constitution of an organism.'
    },
    {
      id: 'bio12_u4_m4',
      question: 'What is a phenotype?',
      options: ['Observable characteristics', 'DNA sequence', 'Gene location', 'Chromosome number'],
      correct: 'Observable characteristics',
      explanation: 'Phenotype refers to the observable physical and behavioral characteristics of an organism.'
    },
    {
      id: 'bio12_u4_m5',
      question: 'What is Hardy-Weinberg equilibrium?',
      options: ['Stable allele frequencies in populations', 'Rapid evolution', 'Gene mutation', 'Natural selection'],
      correct: 'Stable allele frequencies in populations',
      explanation: 'Hardy-Weinberg equilibrium describes conditions under which allele frequencies remain constant.'
    },
    {
      id: 'bio12_u4_m6',
      question: 'What is gene flow?',
      options: ['Movement of genes between populations', 'Gene expression', 'DNA replication', 'Protein synthesis'],
      correct: 'Movement of genes between populations',
      explanation: 'Gene flow is the transfer of genetic material from one population to another.'
    },
    {
      id: 'bio12_u4_m7',
      question: 'What is speciation?',
      options: ['Formation of new species', 'Individual development', 'Cell division', 'Metabolism'],
      correct: 'Formation of new species',
      explanation: 'Speciation is the evolutionary process by which new species arise from existing ones.'
    },
    {
      id: 'bio12_u4_m8',
      question: 'What is sexual selection?',
      options: ['Selection for reproductive success', 'Random mating', 'Asexual reproduction', 'Gene mutation'],
      correct: 'Selection for reproductive success',
      explanation: 'Sexual selection is selection for traits that increase reproductive success through mate choice or competition.'
    },
    {
      id: 'bio12_u4_m9',
      question: 'What is genetic linkage?',
      options: ['Genes located close together on chromosomes', 'Independent assortment', 'Random inheritance', 'Gene separation'],
      correct: 'Genes located close together on chromosomes',
      explanation: 'Genetic linkage occurs when genes are located close together on the same chromosome.'
    },
    {
      id: 'bio12_u4_m10',
      question: 'What is crossing over?',
      options: ['Exchange of genetic material between chromosomes', 'Cell division', 'DNA replication', 'Protein synthesis'],
      correct: 'Exchange of genetic material between chromosomes',
      explanation: 'Crossing over is the exchange of genetic material between homologous chromosomes during meiosis.'
    }
  ],
  hard: [
    {
      id: 'bio12_u4_h1',
      question: 'What is the molecular clock hypothesis?',
      options: ['DNA changes at constant rate over time', 'Genes evolve rapidly', 'Evolution stops', 'Random mutations'],
      correct: 'DNA changes at constant rate over time',
      explanation: 'The molecular clock hypothesis suggests that DNA sequences change at a relatively constant rate over time.'
    },
    {
      id: 'bio12_u4_h2',
      question: 'What is epistasis?',
      options: ['Gene interaction affecting phenotype', 'Independent gene action', 'Single gene effect', 'Environmental influence'],
      correct: 'Gene interaction affecting phenotype',
      explanation: 'Epistasis is the interaction between genes where one gene affects the expression of another.'
    },
    {
      id: 'bio12_u4_h3',
      question: 'What is balancing selection?',
      options: ['Maintains genetic diversity', 'Eliminates variation', 'Random selection', 'Directional change'],
      correct: 'Maintains genetic diversity',
      explanation: 'Balancing selection maintains multiple alleles in a population, preserving genetic diversity.'
    },
    {
      id: 'bio12_u4_h4',
      question: 'What is the founder effect?',
      options: ['Genetic drift in new populations', 'Gene flow increase', 'Mutation rate change', 'Selection pressure'],
      correct: 'Genetic drift in new populations',
      explanation: 'The founder effect occurs when a new population is established by a small number of individuals.'
    },
    {
      id: 'bio12_u4_h5',
      question: 'What is neutral theory of evolution?',
      options: ['Most mutations are neutral', 'All mutations are beneficial', 'Selection drives all changes', 'Mutations are harmful'],
      correct: 'Most mutations are neutral',
      explanation: 'Neutral theory proposes that most evolutionary changes are due to neutral mutations rather than selection.'
    },
    {
      id: 'bio12_u4_h6',
      question: 'What is gene duplication?',
      options: ['Process creating gene copies', 'Gene deletion', 'Gene mutation', 'Gene silencing'],
      correct: 'Process creating gene copies',
      explanation: 'Gene duplication is a process that creates copies of genes, providing raw material for evolution.'
    },
    {
      id: 'bio12_u4_h7',
      question: 'What is phylogenetic analysis?',
      options: ['Study of evolutionary relationships', 'Gene expression analysis', 'Protein structure study', 'Cell function research'],
      correct: 'Study of evolutionary relationships',
      explanation: 'Phylogenetic analysis reconstructs evolutionary relationships between organisms using genetic data.'
    },
    {
      id: 'bio12_u4_h8',
      question: 'What is convergent evolution?',
      options: ['Similar traits evolve independently', 'Related species diverge', 'Traits become more different', 'Random changes'],
      correct: 'Similar traits evolve independently',
      explanation: 'Convergent evolution occurs when unrelated organisms independently evolve similar traits.'
    },
    {
      id: 'bio12_u4_h9',
      question: 'What is coevolution?',
      options: ['Species evolve in response to each other', 'Independent evolution', 'Random changes', 'Genetic drift'],
      correct: 'Species evolve in response to each other',
      explanation: 'Coevolution occurs when two or more species evolve in response to each other.'
    },
    {
      id: 'bio12_u4_h10',
      question: 'What is horizontal gene transfer?',
      options: ['Gene transfer between organisms', 'Vertical inheritance', 'Gene mutation', 'Gene deletion'],
      correct: 'Gene transfer between organisms',
      explanation: 'Horizontal gene transfer is the movement of genetic material between organisms other than by inheritance.'
    }
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
    },
    {
      id: 'bio12_u5_e2',
      question: 'What is ecology?',
      options: ['Study of organisms and their environment', 'Study of genes', 'Study of cells', 'Study of diseases'],
      correct: 'Study of organisms and their environment',
      explanation: 'Ecology is the scientific study of organisms and their interactions with the environment.'
    },
    {
      id: 'bio12_u5_e3',
      question: 'What is an ecosystem?',
      options: ['Community of organisms and their environment', 'Single species', 'Abiotic factors only', 'Biotic factors only'],
      correct: 'Community of organisms and their environment',
      explanation: 'An ecosystem includes all living organisms and their physical environment in a given area.'
    },
    {
      id: 'bio12_u5_e4',
      question: 'What is a food chain?',
      options: ['Linear feeding relationships', 'Complex feeding network', 'Energy storage', 'Nutrient cycling'],
      correct: 'Linear feeding relationships',
      explanation: 'A food chain shows the linear transfer of energy and nutrients from one organism to another.'
    },
    {
      id: 'bio12_u5_e5',
      question: 'What are producers in an ecosystem?',
      options: ['Organisms that make their own food', 'Primary consumers', 'Secondary consumers', 'Decomposers'],
      correct: 'Organisms that make their own food',
      explanation: 'Producers are organisms that can synthesize their own food through photosynthesis or chemosynthesis.'
    },
    {
      id: 'bio12_u5_e6',
      question: 'What is biodiversity?',
      options: ['Variety of life forms', 'Population size', 'Genetic mutations', 'Environmental pollution'],
      correct: 'Variety of life forms',
      explanation: 'Biodiversity refers to the variety of life forms at genetic, species, and ecosystem levels.'
    },
    {
      id: 'bio12_u5_e7',
      question: 'What is pollution?',
      options: ['Harmful substances in the environment', 'Natural processes', 'Biodiversity increase', 'Energy flow'],
      correct: 'Harmful substances in the environment',
      explanation: 'Pollution is the introduction of harmful substances or energy into the environment.'
    },
    {
      id: 'bio12_u5_e8',
      question: 'What is conservation?',
      options: ['Protection of natural resources', 'Resource exploitation', 'Pollution increase', 'Habitat destruction'],
      correct: 'Protection of natural resources',
      explanation: 'Conservation is the protection and sustainable use of natural resources and ecosystems.'
    },
    {
      id: 'bio12_u5_e9',
      question: 'What is climate change?',
      options: ['Long-term change in weather patterns', 'Daily weather variation', 'Seasonal changes', 'Local temperature changes'],
      correct: 'Long-term change in weather patterns',
      explanation: 'Climate change refers to long-term changes in global or regional climate patterns.'
    },
    {
      id: 'bio12_u5_e10',
      question: 'What is the greenhouse effect?',
      options: ['Trapping of heat by atmospheric gases', 'Cooling of atmosphere', 'Ozone depletion', 'Acid rain formation'],
      correct: 'Trapping of heat by atmospheric gases',
      explanation: 'The greenhouse effect is the warming of Earth\'s surface due to heat-trapping gases in the atmosphere.'
    }
  ],
  medium: [
    {
      id: 'bio12_u5_m1',
      question: 'What is the difference between primary and secondary succession?',
      options: ['Primary starts with no soil; secondary has existing soil', 'No difference', 'Primary is faster', 'Secondary starts first'],
      correct: 'Primary starts with no soil; secondary has existing soil',
      explanation: 'Primary succession occurs on bare rock with no soil, while secondary succession occurs where soil already exists.'
    },
    {
      id: 'bio12_u5_m2',
      question: 'What is carrying capacity?',
      options: ['Maximum population an environment can support', 'Minimum population size', 'Growth rate', 'Birth rate'],
      correct: 'Maximum population an environment can support',
      explanation: 'Carrying capacity is the maximum number of individuals an environment can sustainably support.'
    },
    {
      id: 'bio12_u5_m3',
      question: 'What is bioaccumulation?',
      options: ['Buildup of substances in organisms', 'Energy transfer', 'Nutrient cycling', 'Population growth'],
      correct: 'Buildup of substances in organisms',
      explanation: 'Bioaccumulation is the buildup of substances like toxins in the tissues of organisms over time.'
    },
    {
      id: 'bio12_u5_m4',
      question: 'What is biomagnification?',
      options: ['Concentration increase up food chain', 'Energy decrease', 'Population decline', 'Habitat loss'],
      correct: 'Concentration increase up food chain',
      explanation: 'Biomagnification is the increasing concentration of substances as they move up the food chain.'
    },
    {
      id: 'bio12_u5_m5',
      question: 'What is eutrophication?',
      options: ['Nutrient enrichment causing algae blooms', 'Water purification', 'Oxygen increase', 'Temperature rise'],
      correct: 'Nutrient enrichment causing algae blooms',
      explanation: 'Eutrophication is the excessive nutrient enrichment of water bodies, leading to algae blooms and oxygen depletion.'
    },
    {
      id: 'bio12_u5_m6',
      question: 'What is the carbon cycle?',
      options: ['Movement of carbon through ecosystems', 'Energy flow', 'Water circulation', 'Nitrogen fixation'],
      correct: 'Movement of carbon through ecosystems',
      explanation: 'The carbon cycle describes the movement of carbon atoms through the atmosphere, biosphere, and geosphere.'
    },
    {
      id: 'bio12_u5_m7',
      question: 'What is ecological niche?',
      options: ['Role and position of species in ecosystem', 'Physical habitat', 'Population size', 'Genetic diversity'],
      correct: 'Role and position of species in ecosystem',
      explanation: 'An ecological niche describes how a species interacts with its environment and its role in the ecosystem.'
    },
    {
      id: 'bio12_u5_m8',
      question: 'What is competitive exclusion?',
      options: ['One species outcompetes another', 'Species cooperation', 'Predator-prey relationship', 'Symbiosis'],
      correct: 'One species outcompetes another',
      explanation: 'Competitive exclusion occurs when one species outcompetes another for the same resource.'
    },
    {
      id: 'bio12_u5_m9',
      question: 'What is keystone species?',
      options: ['Species with disproportionate ecosystem impact', 'Most abundant species', 'Largest species', 'Smallest species'],
      correct: 'Species with disproportionate ecosystem impact',
      explanation: 'A keystone species has a disproportionately large impact on ecosystem structure and function.'
    },
    {
      id: 'bio12_u5_m10',
      question: 'What is biological control?',
      options: ['Using natural enemies to control pests', 'Chemical pesticides', 'Genetic modification', 'Habitat destruction'],
      correct: 'Using natural enemies to control pests',
      explanation: 'Biological control uses natural predators, parasites, or pathogens to control pest populations.'
    }
  ],
  hard: [
    {
      id: 'bio12_u5_h1',
      question: 'What is the intermediate disturbance hypothesis?',
      options: ['Moderate disturbance maximizes diversity', 'High disturbance is best', 'No disturbance is optimal', 'Disturbance reduces diversity'],
      correct: 'Moderate disturbance maximizes diversity',
      explanation: 'The intermediate disturbance hypothesis suggests that moderate levels of disturbance maximize species diversity.'
    },
    {
      id: 'bio12_u5_h2',
      question: 'What is metapopulation dynamics?',
      options: ['Interconnected local populations', 'Single isolated population', 'Random population changes', 'Population extinction'],
      correct: 'Interconnected local populations',
      explanation: 'Metapopulation dynamics studies how groups of spatially separated populations are connected by migration.'
    },
    {
      id: 'bio12_u5_h3',
      question: 'What is the paradox of the plankton?',
      options: ['High diversity despite limited resources', 'Low plankton diversity', 'Plankton extinction', 'Resource abundance'],
      correct: 'High diversity despite limited resources',
      explanation: 'The paradox of the plankton questions how so many phytoplankton species coexist in seemingly uniform environments.'
    },
    {
      id: 'bio12_u5_h4',
      question: 'What is ecological stoichiometry?',
      options: ['Study of element ratios in ecology', 'Energy flow patterns', 'Population genetics', 'Behavior studies'],
      correct: 'Study of element ratios in ecology',
      explanation: 'Ecological stoichiometry examines the balance of elements (C, N, P) in ecological interactions.'
    },
    {
      id: 'bio12_u5_h5',
      question: 'What is the Gaia hypothesis?',
      options: ['Earth as self-regulating system', 'Random environmental changes', 'Linear ecosystem development', 'Simple cause-effect relationships'],
      correct: 'Earth as self-regulating system',
      explanation: 'The Gaia hypothesis proposes that Earth functions as a self-regulating system maintained by life.'
    },
    {
      id: 'bio12_u5_h6',
      question: 'What is ecological network theory?',
      options: ['Study of species interaction networks', 'Single species behavior', 'Linear food chains only', 'Random interactions'],
      correct: 'Study of species interaction networks',
      explanation: 'Ecological network theory analyzes complex networks of species interactions in ecosystems.'
    },
    {
      id: 'bio12_u5_h7',
      question: 'What is ecosystem engineering?',
      options: ['Species modify physical environment', 'Genetic modification', 'Artificial ecosystems', 'Technology in nature'],
      correct: 'Species modify physical environment',
      explanation: 'Ecosystem engineering occurs when organisms physically modify their environment, affecting other species.'
    },
    {
      id: 'bio12_u5_h8',
      question: 'What is the insurance hypothesis?',
      options: ['Biodiversity provides ecosystem stability', 'Species are redundant', 'Diversity reduces function', 'Single species suffice'],
      correct: 'Biodiversity provides ecosystem stability',
      explanation: 'The insurance hypothesis suggests that biodiversity provides insurance against environmental variability.'
    },
    {
      id: 'bio12_u5_h9',
      question: 'What is ecological debt?',
      options: ['Environmental cost of resource use', 'Financial cost only', 'Energy surplus', 'Resource abundance'],
      correct: 'Environmental cost of resource use',
      explanation: 'Ecological debt represents the environmental cost of human resource consumption beyond Earth\'s capacity.'
    },
    {
      id: 'bio12_u5_h10',
      question: 'What is trophic cascade?',
      options: ['Indirect effects across trophic levels', 'Direct predation only', 'Energy loss', 'Single species impact'],
      correct: 'Indirect effects across trophic levels',
      explanation: 'Trophic cascades are indirect effects that predators have on plants through their influence on herbivores.'
    }
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
    },
    {
      id: 'bio12_u6_e2',
      question: 'What is the function of the heart?',
      options: ['Pump blood', 'Digest food', 'Filter air', 'Produce hormones'],
      correct: 'Pump blood',
      explanation: 'The heart is a muscular organ that pumps blood throughout the body.'
    },
    {
      id: 'bio12_u6_e3',
      question: 'What is the function of the lungs?',
      options: ['Gas exchange', 'Blood production', 'Waste filtration', 'Hormone secretion'],
      correct: 'Gas exchange',
      explanation: 'The lungs facilitate the exchange of oxygen and carbon dioxide between the blood and air.'
    },
    {
      id: 'bio12_u6_e4',
      question: 'What is the function of the brain?',
      options: ['Control body functions', 'Pump blood', 'Digest food', 'Filter waste'],
      correct: 'Control body functions',
      explanation: 'The brain controls and coordinates all body functions through the nervous system.'
    },
    {
      id: 'bio12_u6_e5',
      question: 'What is the function of the kidneys?',
      options: ['Filter waste from blood', 'Produce oxygen', 'Digest nutrients', 'Control movement'],
      correct: 'Filter waste from blood',
      explanation: 'The kidneys filter metabolic waste and excess water from the blood to form urine.'
    },
    {
      id: 'bio12_u6_e6',
      question: 'What is the function of the liver?',
      options: ['Detoxify blood and produce bile', 'Pump blood', 'Exchange gases', 'Control thoughts'],
      correct: 'Detoxify blood and produce bile',
      explanation: 'The liver detoxifies harmful substances and produces bile for fat digestion.'
    },
    {
      id: 'bio12_u6_e7',
      question: 'What is blood pressure?',
      options: ['Force of blood against artery walls', 'Heart rate', 'Blood volume', 'Oxygen level'],
      correct: 'Force of blood against artery walls',
      explanation: 'Blood pressure is the force exerted by circulating blood against the walls of blood vessels.'
    },
    {
      id: 'bio12_u6_e8',
      question: 'What is the immune system?',
      options: ['Body\'s defense against disease', 'Digestive system', 'Circulatory system', 'Nervous system'],
      correct: 'Body\'s defense against disease',
      explanation: 'The immune system protects the body from infectious organisms and foreign substances.'
    },
    {
      id: 'bio12_u6_e9',
      question: 'What are hormones?',
      options: ['Chemical messengers', 'Blood cells', 'Nutrients', 'Waste products'],
      correct: 'Chemical messengers',
      explanation: 'Hormones are chemical messengers that regulate various body functions.'
    },
    {
      id: 'bio12_u6_e10',
      question: 'What is digestion?',
      options: ['Breaking down food into nutrients', 'Circulating blood', 'Breathing oxygen', 'Filtering waste'],
      correct: 'Breaking down food into nutrients',
      explanation: 'Digestion is the process of breaking down food into nutrients that can be absorbed by the body.'
    }
  ],
  medium: [
    {
      id: 'bio12_u6_m1',
      question: 'What is the cardiac cycle?',
      options: ['Sequence of heart contractions and relaxations', 'Blood circulation', 'Breathing pattern', 'Brain activity'],
      correct: 'Sequence of heart contractions and relaxations',
      explanation: 'The cardiac cycle is the sequence of events in one heartbeat, including contraction and relaxation phases.'
    },
    {
      id: 'bio12_u6_m2',
      question: 'What is the role of red blood cells?',
      options: ['Transport oxygen', 'Fight infections', 'Clot blood', 'Carry nutrients'],
      correct: 'Transport oxygen',
      explanation: 'Red blood cells contain hemoglobin which binds and transports oxygen throughout the body.'
    },
    {
      id: 'bio12_u6_m3',
      question: 'What is the role of white blood cells?',
      options: ['Fight infections and disease', 'Transport oxygen', 'Clot blood', 'Carry hormones'],
      correct: 'Fight infections and disease',
      explanation: 'White blood cells are part of the immune system and defend the body against pathogens.'
    },
    {
      id: 'bio12_u6_m4',
      question: 'What is the function of platelets?',
      options: ['Blood clotting', 'Oxygen transport', 'Fighting infections', 'Hormone transport'],
      correct: 'Blood clotting',
      explanation: 'Platelets are blood cells that help in blood clotting to prevent excessive bleeding.'
    },
    {
      id: 'bio12_u6_m5',
      question: 'What is the diaphragm?',
      options: ['Muscle that helps breathing', 'Heart valve', 'Blood vessel', 'Brain region'],
      correct: 'Muscle that helps breathing',
      explanation: 'The diaphragm is a dome-shaped muscle that contracts to help inflate the lungs during breathing.'
    },
    {
      id: 'bio12_u6_m6',
      question: 'What is insulin?',
      options: ['Hormone that regulates blood sugar', 'Enzyme for digestion', 'Protein for muscles', 'Vitamin for bones'],
      correct: 'Hormone that regulates blood sugar',
      explanation: 'Insulin is a hormone produced by the pancreas that regulates blood glucose levels.'
    },
    {
      id: 'bio12_u6_m7',
      question: 'What is the function of neurons?',
      options: ['Transmit electrical signals', 'Transport oxygen', 'Filter waste', 'Produce hormones'],
      correct: 'Transmit electrical signals',
      explanation: 'Neurons are specialized cells that transmit electrical and chemical signals throughout the nervous system.'
    },
    {
      id: 'bio12_u6_m8',
      question: 'What is the role of the cerebellum?',
      options: ['Balance and coordination', 'Memory formation', 'Heart rate control', 'Breathing regulation'],
      correct: 'Balance and coordination',
      explanation: 'The cerebellum coordinates voluntary movements, balance, and posture.'
    },
    {
      id: 'bio12_u6_m9',
      question: 'What is the role of the hypothalamus?',
      options: ['Regulate body temperature and hormones', 'Process visual information', 'Control movement', 'Store memories'],
      correct: 'Regulate body temperature and hormones',
      explanation: 'The hypothalamus regulates body temperature, hunger, thirst, and hormone production.'
    },
    {
      id: 'bio12_u6_m10',
      question: 'What is peristalsis?',
      options: ['Wave-like muscle contractions in digestive tract', 'Heart contractions', 'Breathing movements', 'Blood circulation'],
      correct: 'Wave-like muscle contractions in digestive tract',
      explanation: 'Peristalsis is the wave-like muscle contractions that move food through the digestive system.'
    }
  ],
  hard: [
    {
      id: 'bio12_u6_h1',
      question: 'What is the Frank-Starling mechanism of the heart?',
      options: ['Heart output increases with venous return', 'Heart rate regulation', 'Blood pressure control', 'Oxygen delivery mechanism'],
      correct: 'Heart output increases with venous return',
      explanation: 'The Frank-Starling mechanism describes how the heart increases its output when more blood returns to it.'
    },
    {
      id: 'bio12_u6_h2',
      question: 'What is the role of antidiuretic hormone (ADH)?',
      options: ['Regulates water reabsorption in kidneys', 'Controls blood sugar', 'Stimulates growth', 'Regulates metabolism'],
      correct: 'Regulates water reabsorption in kidneys',
      explanation: 'ADH regulates water balance by controlling water reabsorption in the kidney tubules.'
    },
    {
      id: 'bio12_u6_h3',
      question: 'What is the complement system?',
      options: ['Part of innate immune system', 'Digestive enzyme system', 'Hormonal regulation system', 'Nervous system component'],
      correct: 'Part of innate immune system',
      explanation: 'The complement system is a group of proteins that enhance the immune system\'s ability to clear pathogens.'
    },
    {
      id: 'bio12_u6_h4',
      question: 'What is the role of surfactant in the lungs?',
      options: ['Reduces surface tension in alveoli', 'Filters air particles', 'Produces mucus', 'Transports oxygen'],
      correct: 'Reduces surface tension in alveoli',
      explanation: 'Surfactant reduces surface tension in alveoli, preventing their collapse and making breathing easier.'
    },
    {
      id: 'bio12_u6_h5',
      question: 'What is the blood-brain barrier?',
      options: ['Selective barrier protecting the brain', 'Brain blood vessels', 'Skull protection', 'Brain tissue'],
      correct: 'Selective barrier protecting the brain',
      explanation: 'The blood-brain barrier is a selective barrier that protects the brain from harmful substances in the blood.'
    },
    {
      id: 'bio12_u6_h6',
      question: 'What is long-term potentiation (LTP)?',
      options: ['Strengthening of synaptic connections', 'Memory loss', 'Nerve damage', 'Brain aging'],
      correct: 'Strengthening of synaptic connections',
      explanation: 'LTP is the persistent strengthening of synapses based on recent patterns of activity, underlying learning and memory.'
    },
    {
      id: 'bio12_u6_h7',
      question: 'What is the renin-angiotensin-aldosterone system?',
      options: ['Regulates blood pressure and fluid balance', 'Controls digestion', 'Manages breathing', 'Coordinates movement'],
      correct: 'Regulates blood pressure and fluid balance',
      explanation: 'This hormonal system regulates blood pressure and fluid balance through a cascade of hormones.'
    },
    {
      id: 'bio12_u6_h8',
      question: 'What is autoimmunity?',
      options: ['Immune system attacks own tissues', 'Enhanced immune response', 'Immune deficiency', 'Pathogen resistance'],
      correct: 'Immune system attacks own tissues',
      explanation: 'Autoimmunity occurs when the immune system mistakenly attacks the body\'s own healthy tissues.'
    },
    {
      id: 'bio12_u6_h9',
      question: 'What is the enteric nervous system?',
      options: ['Nervous system of the digestive tract', 'Brain region', 'Spinal cord section', 'Peripheral nerve'],
      correct: 'Nervous system of the digestive tract',
      explanation: 'The enteric nervous system is the intrinsic nervous system of the gastrointestinal tract.'
    },
    {
      id: 'bio12_u6_h10',
      question: 'What is epigenetic inheritance?',
      options: ['Heritable changes not involving DNA sequence', 'Genetic mutations', 'Chromosome abnormalities', 'DNA replication errors'],
      correct: 'Heritable changes not involving DNA sequence',
      explanation: 'Epigenetic inheritance involves heritable changes in gene expression that don\'t involve changes to the DNA sequence.'
    }
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
