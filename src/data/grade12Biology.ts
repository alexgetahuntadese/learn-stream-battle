
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
  },
  'Unit 2: Cell Biology': {
    'easy': [
      {
        id: 'bio12_u2_e1',
        question: 'What is the basic unit of life?',
        options: ['Cell', 'Tissue', 'Organ', 'System'],
        correct: 'Cell',
        explanation: 'The cell is the basic structural, functional, and biological unit of all known living organisms.'
      },
      {
        id: 'bio12_u2_e2',
        question: 'Which organelle is known as the "powerhouse" of the cell?',
        options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Golgi apparatus'],
        correct: 'Mitochondria',
        explanation: 'Mitochondria are known as the powerhouse of the cell because they generate most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.'
      },
      {
        id: 'bio12_u2_e3',
        question: 'What is the function of the cell membrane?',
        options: ['Controls what enters and exits the cell', 'Stores genetic information', 'Produces proteins', 'Generates energy'],
        correct: 'Controls what enters and exits the cell',
        explanation: 'The cell membrane is a selective barrier that controls what enters and exits the cell, maintaining the internal environment of the cell.'
      },
      {
        id: 'bio12_u2_e4',
        question: 'Which of the following is NOT a function of the nucleus?',
        options: ['Energy production', 'Storage of genetic information', 'Control of cell activities', 'RNA synthesis'],
        correct: 'Energy production',
        explanation: 'Energy production is primarily the function of mitochondria. The nucleus stores genetic information, controls cell activities, and is involved in RNA synthesis.'
      },
      {
        id: 'bio12_u2_e5',
        question: 'What is the site of protein synthesis in a cell?',
        options: ['Ribosomes', 'Lysosomes', 'Mitochondria', 'Golgi apparatus'],
        correct: 'Ribosomes',
        explanation: 'Ribosomes are the cellular structures responsible for protein synthesis, translating mRNA into proteins.'
      },
      {
        id: 'bio12_u2_e6',
        question: 'Which organelle is responsible for detoxifying harmful substances in the cell?',
        options: ['Smooth endoplasmic reticulum', 'Rough endoplasmic reticulum', 'Lysosome', 'Peroxisome'],
        correct: 'Smooth endoplasmic reticulum',
        explanation: 'The smooth endoplasmic reticulum is involved in detoxification of harmful substances, lipid synthesis, and calcium storage.'
      },
      {
        id: 'bio12_u2_e7',
        question: 'What is the primary role of lysosomes?',
        options: ['Digestion of cellular waste', 'Protein synthesis', 'Energy production', 'Lipid synthesis'],
        correct: 'Digestion of cellular waste',
        explanation: 'Lysosomes contain digestive enzymes that break down cellular waste, debris, and damaged organelles.'
      },
      {
        id: 'bio12_u2_e8',
        question: 'Which cellular component is responsible for cellular respiration?',
        options: ['Mitochondria', 'Chloroplast', 'Nucleus', 'Lysosome'],
        correct: 'Mitochondria',
        explanation: 'Mitochondria are the sites of cellular respiration, where glucose and oxygen are converted into ATP, carbon dioxide, and water.'
      },
      {
        id: 'bio12_u2_e9',
        question: 'What is the main function of the Golgi apparatus?',
        options: ['Processing and packaging of proteins', 'Energy production', 'DNA replication', 'Cell division'],
        correct: 'Processing and packaging of proteins',
        explanation: 'The Golgi apparatus receives, modifies, sorts, and packages proteins and lipids for storage in the cell or secretion outside the cell.'
      },
      {
        id: 'bio12_u2_e10',
        question: 'Which statement about prokaryotic cells is FALSE?',
        options: ['They have a nucleus', 'They lack membrane-bound organelles', 'They are generally smaller than eukaryotic cells', 'They include bacteria'],
        correct: 'They have a nucleus',
        explanation: 'Prokaryotic cells do not have a true nucleus with a nuclear membrane. Their genetic material is not enclosed within a membrane-bound nucleus.'
      }
    ],
    'medium': [
      {
        id: 'bio12_u2_m1',
        question: 'What is the role of the cytoskeleton in a eukaryotic cell?',
        options: ['Provides structural support and facilitates cellular movement', 'Produces ATP for the cell', 'Synthesizes proteins', 'Stores genetic information'],
        correct: 'Provides structural support and facilitates cellular movement',
        explanation: 'The cytoskeleton is a network of protein filaments that provides structural support, maintains cell shape, and facilitates cellular movement and intracellular transport.'
      },
      {
        id: 'bio12_u2_m2',
        question: 'What is the difference between passive and active transport across cell membranes?',
        options: ['Active transport requires energy, passive does not', 'Passive transport moves against the concentration gradient, active does not', 'Active transport involves proteins, passive does not', 'Passive transport is faster than active transport'],
        correct: 'Active transport requires energy, passive does not',
        explanation: 'Active transport requires cellular energy (ATP) to move substances against their concentration gradient, while passive transport does not require energy as substances move down their concentration gradient.'
      },
      {
        id: 'bio12_u2_m3',
        question: 'Which process involves the engulfing of large particles by the cell membrane?',
        options: ['Phagocytosis', 'Diffusion', 'Osmosis', 'Facilitated diffusion'],
        correct: 'Phagocytosis',
        explanation: 'Phagocytosis is a form of endocytosis where the cell membrane engulfs solid particles, forming an internal vesicle called a phagosome.'
      },
      {
        id: 'bio12_u2_m4',
        question: 'What is the primary role of the rough endoplasmic reticulum?',
        options: ['Protein synthesis and modification', 'Lipid synthesis', 'Detoxification', 'Energy production'],
        correct: 'Protein synthesis and modification',
        explanation: 'The rough endoplasmic reticulum is studded with ribosomes and is involved in the synthesis, folding, and modification of proteins, especially those destined for secretion or insertion into membranes.'
      },
      {
        id: 'bio12_u2_m5',
        question: 'Which of the following best describes cell differentiation?',
        options: ['The process by which cells become specialized for specific functions', 'The division of cells to increase their number', 'The movement of cells from one location to another', 'The self-destruction of cells'],
        correct: 'The process by which cells become specialized for specific functions',
        explanation: 'Cell differentiation is the process by which a less specialized cell becomes a more specialized cell type, acquiring specific functions through changes in gene expression.'
      },
      {
        id: 'bio12_u2_m6',
        question: 'What is the function of telomeres in chromosomes?',
        options: ['Protect chromosome ends from deterioration', 'Initiate DNA replication', 'Regulate gene expression', 'Connect sister chromatids'],
        correct: 'Protect chromosome ends from deterioration',
        explanation: 'Telomeres are repetitive nucleotide sequences at the ends of chromosomes that protect them from deterioration or fusion with neighboring chromosomes during cell division.'
      },
      {
        id: 'bio12_u2_m7',
        question: 'Which organelle is responsible for removing hydrogen peroxide from cells?',
        options: ['Peroxisome', 'Lysosome', 'Mitochondrion', 'Golgi apparatus'],
        correct: 'Peroxisome',
        explanation: 'Peroxisomes contain enzymes like catalase that break down harmful hydrogen peroxide into water and oxygen, protecting the cell from oxidative damage.'
      },
      {
        id: 'bio12_u2_m8',
        question: 'What is the fluid mosaic model of the cell membrane?',
        options: ['A model describing the membrane as a fluid phospholipid bilayer with embedded proteins', 'A model describing the cytoplasm as a mixture of fluids', 'A model describing the movement of water across membranes', 'A model describing the organization of the cytoskeleton'],
        correct: 'A model describing the membrane as a fluid phospholipid bilayer with embedded proteins',
        explanation: 'The fluid mosaic model describes the cell membrane as a phospholipid bilayer with embedded proteins that can move laterally, giving the membrane a fluid-like quality.'
      },
      {
        id: 'bio12_u2_m9',
        question: 'What happens during plasmolysis in plant cells?',
        options: ['The cell membrane shrinks away from the cell wall due to water loss', 'The cell bursts due to excess water intake', 'The cell divides into two daughter cells', 'The cell wall breaks down'],
        correct: 'The cell membrane shrinks away from the cell wall due to water loss',
        explanation: 'Plasmolysis occurs when a plant cell loses water to a hypertonic solution, causing the cytoplasm and cell membrane to shrink away from the cell wall.'
      },
      {
        id: 'bio12_u2_m10',
        question: 'Which of the following is a function of the nuclear pore complex?',
        options: ['Regulates the transport of molecules between the nucleus and cytoplasm', 'Synthesizes ATP', 'Produces ribosomes', 'Breaks down toxic substances'],
        correct: 'Regulates the transport of molecules between the nucleus and cytoplasm',
        explanation: 'Nuclear pore complexes are large protein structures that span the nuclear envelope and regulate the transport of molecules (like RNA and proteins) between the nucleus and cytoplasm.'
      }
    ],
    'hard': [
      {
        id: 'bio12_u2_h1',
        question: 'What is the mechanism of action of the sodium-potassium pump in cell membranes?',
        options: ['It uses ATP to transport sodium ions out and potassium ions into the cell against their concentration gradients', 'It allows passive diffusion of sodium and potassium ions', 'It transfers electrons across the membrane', 'It breaks down sodium and potassium ions for energy'],
        correct: 'It uses ATP to transport sodium ions out and potassium ions into the cell against their concentration gradients',
        explanation: 'The sodium-potassium pump (Na⁺/K⁺-ATPase) is an active transport mechanism that uses ATP to move 3 sodium ions out and 2 potassium ions into the cell against their concentration gradients, maintaining membrane potential and cell volume.'
      },
      {
        id: 'bio12_u2_h2',
        question: 'What is the relationship between structure and function in the mitochondrial cristae?',
        options: ['The folded structure increases surface area for ATP production', 'The folded structure decreases the rate of respiration', 'The folded structure prevents ions from entering the mitochondria', 'The folded structure is solely for structural support'],
        correct: 'The folded structure increases surface area for ATP production',
        explanation: 'Mitochondrial cristae are infoldings of the inner mitochondrial membrane that increase the surface area available for the electron transport chain and ATP synthase enzymes, maximizing ATP production during cellular respiration.'
      },
      {
        id: 'bio12_u2_h3',
        question: 'How do integral membrane proteins differ from peripheral membrane proteins?',
        options: ['Integral proteins penetrate or span the lipid bilayer, while peripheral proteins are attached to the membrane surface', 'Integral proteins are always enzymes, while peripheral proteins are always receptors', 'Integral proteins are found only in animal cells, while peripheral proteins are found in all cells', 'Integral proteins require ATP to function, while peripheral proteins do not'],
        correct: 'Integral proteins penetrate or span the lipid bilayer, while peripheral proteins are attached to the membrane surface',
        explanation: 'Integral membrane proteins are embedded within or span the phospholipid bilayer, often with hydrophobic regions interacting with the lipid tails. Peripheral membrane proteins are temporarily attached to the membrane surface or to integral proteins, without entering the hydrophobic core.'
      },
      {
        id: 'bio12_u2_h4',
        question: 'What is the role of ubiquitin in cellular protein degradation?',
        options: ['It tags proteins for degradation by the proteasome', 'It directly breaks down proteins into amino acids', 'It prevents protein degradation', 'It transports proteins to the lysosome'],
        correct: 'It tags proteins for degradation by the proteasome',
        explanation: 'Ubiquitin is a small regulatory protein that is covalently attached to proteins targeted for degradation. This ubiquitination serves as a signal that directs proteins to the proteasome, a large protein complex that degrades and recycles unneeded or damaged proteins.'
      },
      {
        id: 'bio12_u2_h5',
        question: 'What cellular mechanism is disrupted in Tay-Sachs disease?',
        options: ['Lysosomal enzyme function', 'Mitochondrial respiration', 'DNA replication', 'Protein synthesis'],
        correct: 'Lysosomal enzyme function',
        explanation: 'Tay-Sachs disease is caused by a deficiency of the lysosomal enzyme hexosaminidase A, which results in the accumulation of gangliosides in neurons, leading to progressive neurological deterioration.'
      },
      {
        id: 'bio12_u2_h6',
        question: 'What is the significance of membrane rafts in cellular function?',
        options: ['They organize membrane proteins for signaling and trafficking', 'They facilitate rapid cell division', 'They increase membrane permeability', 'They protect the cell from osmotic stress'],
        correct: 'They organize membrane proteins for signaling and trafficking',
        explanation: 'Membrane rafts are dynamic, ordered microdomains in the cell membrane enriched in cholesterol and sphingolipids. They organize membrane proteins and lipids to facilitate cellular processes such as signal transduction, membrane trafficking, and pathogen entry.'
      },
      {
        id: 'bio12_u2_h7',
        question: 'How does the process of autophagy contribute to cellular homeostasis?',
        options: ['By degrading damaged organelles and recycling cellular components', 'By synthesizing new proteins', 'By producing ATP', 'By regulating cell division'],
        correct: 'By degrading damaged organelles and recycling cellular components',
        explanation: 'Autophagy is a cellular process where cytoplasmic components, including damaged organelles and misfolded proteins, are sequestered in double-membrane vesicles and delivered to lysosomes for degradation and recycling, contributing to cellular quality control and homeostasis.'
      },
      {
        id: 'bio12_u2_h8',
        question: 'What is the molecular basis for the selective permeability of aquaporins?',
        options: ['Their structure allows water molecules to pass while preventing the passage of ions and other solutes', 'They actively pump water molecules across the membrane', 'They change the phospholipid composition of the membrane', 'They create pores large enough for all small molecules'],
        correct: 'Their structure allows water molecules to pass while preventing the passage of ions and other solutes',
        explanation: 'Aquaporins are membrane channel proteins with a specific structure that forms a pore allowing water molecules to pass through in single file, while preventing the passage of ions (including hydronium H₃O⁺) and other solutes through size restriction and charge repulsion.'
      },
      {
        id: 'bio12_u2_h9',
        question: 'How do cancerous cells typically differ from normal cells in terms of cell cycle control?',
        options: ['Cancerous cells have mutations in genes controlling cell cycle checkpoints', 'Cancerous cells have a slower rate of division than normal cells', 'Cancerous cells always have more mitochondria', 'Cancerous cells cannot undergo mitosis'],
        correct: 'Cancerous cells have mutations in genes controlling cell cycle checkpoints',
        explanation: 'Cancerous cells typically have mutations in genes that control cell cycle checkpoints (such as p53, Rb, and various cyclins and CDKs), leading to unregulated cell division, genomic instability, and the formation of tumors.'
      },
      {
        id: 'bio12_u2_h10',
        question: 'What is the significance of the H⁺ gradient across the inner mitochondrial membrane?',
        options: ['It drives ATP synthesis via chemiosmosis', 'It prevents harmful substances from entering the mitochondria', 'It helps maintain the shape of the mitochondria', 'It facilitates protein import into the mitochondria'],
        correct: 'It drives ATP synthesis via chemiosmosis',
        explanation: 'The H⁺ (proton) gradient across the inner mitochondrial membrane represents stored energy created by the electron transport chain. This gradient drives ATP synthesis through chemiosmosis, as protons flow back into the mitochondrial matrix through ATP synthase, powering the phosphorylation of ADP to ATP.'
      }
    ]
  },
  'Unit 3: Genetics and Inheritance': {
    'easy': [
      {
        id: 'bio12_u3_e1',
        question: 'What is a gene?',
        options: ['A unit of heredity', 'A type of cell', 'A chromosome', 'A protein'],
        correct: 'A unit of heredity',
        explanation: 'A gene is a unit of heredity that determines a particular characteristic and is transferred from parent to offspring.'
      },
      {
        id: 'bio12_u3_e2',
        question: 'What is DNA?',
        options: ['Deoxyribonucleic acid', 'Dinitrogen oxide', 'Dioxyribose nucleic acid', 'Dynamic nucleic arrangement'],
        correct: 'Deoxyribonucleic acid',
        explanation: 'DNA stands for Deoxyribonucleic Acid, the molecule that carries genetic instructions for the development, functioning, growth, and reproduction of all known organisms.'
      },
      {
        id: 'bio12_u3_e3',
        question: 'Which structure contains DNA in eukaryotic cells?',
        options: ['Nucleus', 'Ribosome', 'Golgi apparatus', 'Endoplasmic reticulum'],
        correct: 'Nucleus',
        explanation: 'In eukaryotic cells, DNA is primarily located in the nucleus, although small amounts are also found in mitochondria and (in plants) chloroplasts.'
      },
      {
        id: 'bio12_u3_e4',
        question: 'What are the four nitrogenous bases in DNA?',
        options: ['Adenine, Thymine, Guanine, Cytosine', 'Adenine, Uracil, Guanine, Cytosine', 'Alanine, Tyrosine, Glycine, Cysteine', 'Arginine, Threonine, Glutamine, Cysteine'],
        correct: 'Adenine, Thymine, Guanine, Cytosine',
        explanation: 'The four nitrogenous bases in DNA are Adenine (A), Thymine (T), Guanine (G), and Cytosine (C). In RNA, Uracil (U) replaces Thymine.'
      },
      {
        id: 'bio12_u3_e5',
        question: 'What is a chromosome?',
        options: ['A structure of DNA and protein', 'A type of RNA', 'A cellular organelle', 'A type of mutation'],
        correct: 'A structure of DNA and protein',
        explanation: 'A chromosome is a structure of DNA and protein found in the nucleus of most living cells, carrying genetic information in the form of genes.'
      },
      {
        id: 'bio12_u3_e6',
        question: 'What is meant by "dominant" and "recessive" alleles?',
        options: ['Dominant alleles mask recessive alleles when both are present', 'Dominant alleles are always beneficial', 'Recessive alleles are always harmful', 'Recessive alleles are more common than dominant alleles'],
        correct: 'Dominant alleles mask recessive alleles when both are present',
        explanation: 'A dominant allele is expressed phenotypically when at least one copy is present, while a recessive allele is only expressed when two copies are present (homozygous recessive).'
      },
      {
        id: 'bio12_u3_e7',
        question: 'What is a genotype?',
        options: ['The genetic makeup of an organism', 'The physical appearance of an organism', 'The environment in which an organism lives', 'The behavior of an organism'],
        correct: 'The genetic makeup of an organism',
        explanation: 'Genotype refers to the complete set of genes in an organism\'s genome, or the specific allelic composition at a particular gene locus.'
      },
      {
        id: 'bio12_u3_e8',
        question: 'What is a phenotype?',
        options: ['The observable characteristics of an organism', 'The genetic makeup of an organism', 'The evolutionary history of an organism', 'The reproductive capacity of an organism'],
        correct: 'The observable characteristics of an organism',
        explanation: 'Phenotype refers to the observable physical properties of an organism, including its appearance, development, and behavior, resulting from the interaction of its genotype with the environment.'
      },
      {
        id: 'bio12_u3_e9',
        question: 'What is a mutation?',
        options: ['A change in the DNA sequence', 'A type of cell division', 'A type of protein', 'A type of inheritance pattern'],
        correct: 'A change in the DNA sequence',
        explanation: 'A mutation is a change in the nucleotide sequence of DNA, which may result in a change in the amino acid sequence of a protein or affect gene expression.'
      },
      {
        id: 'bio12_u3_e10',
        question: 'What is a Punnett square used for?',
        options: ['Predicting the probability of genotypes in offspring', 'Determining the age of fossils', 'Measuring the rate of evolution', 'Calculating genetic diversity in a population'],
        correct: 'Predicting the probability of genotypes in offspring',
        explanation: 'A Punnett square is a diagram used to predict the probability of different genotypes in offspring based on the genotypes of the parents.'
      }
    ],
    'medium': [
      {
        id: 'bio12_u3_m1',
        question: 'What is non-disjunction and what can it lead to?',
        options: ['Failure of chromosomes to separate during meiosis, leading to aneuploidy', 'Normal separation of chromosomes during mitosis', 'Crossing over between homologous chromosomes', 'Random assortment of genes on different chromosomes'],
        correct: 'Failure of chromosomes to separate during meiosis, leading to aneuploidy',
        explanation: 'Non-disjunction is the failure of homologous chromosomes or sister chromatids to separate properly during meiosis or mitosis. This can lead to aneuploidy (abnormal chromosome number) in gametes or somatic cells, causing conditions like Down syndrome (trisomy 21).'
      },
      {
        id: 'bio12_u3_m2',
        question: 'What is meant by "linked genes"?',
        options: ['Genes located on the same chromosome that tend to be inherited together', 'Genes that code for the same protein', 'Genes that are activated simultaneously', 'Genes that mutate at the same rate'],
        correct: 'Genes located on the same chromosome that tend to be inherited together',
        explanation: 'Linked genes are genes located physically close to each other on the same chromosome, which tend to be inherited together rather than assorted independently. Linkage can be broken by crossing over during meiosis.'
      },
      {
        id: 'bio12_u3_m3',
        question: 'What is the difference between transcription and translation in protein synthesis?',
        options: ['Transcription creates RNA from DNA; translation creates proteins from RNA', 'Transcription occurs in the cytoplasm; translation in the nucleus', 'Transcription involves ribosomes; translation involves DNA polymerase', 'Transcription requires tRNA; translation requires mRNA'],
        correct: 'Transcription creates RNA from DNA; translation creates proteins from RNA',
        explanation: 'Transcription is the process of creating an RNA copy (usually mRNA) from a DNA sequence. Translation is the process where ribosomes use this mRNA as a template to assemble amino acids into a protein.'
      },
      {
        id: 'bio12_u3_m4',
        question: 'What is the Hardy-Weinberg principle used for?',
        options: ['Predicting allele frequencies in a population under certain conditions', 'Determining the age of fossils', 'Calculating mutation rates', 'Measuring biodiversity'],
        correct: 'Predicting allele frequencies in a population under certain conditions',
        explanation: 'The Hardy-Weinberg principle is a mathematical model used to predict how allele and genotype frequencies will remain constant from generation to generation in a population that is not evolving (meeting conditions like random mating, no mutation, no selection, etc.).'
      },
      {
        id: 'bio12_u3_m5',
        question: 'What is epistasis?',
        options: ['When one gene influences the phenotypic expression of another gene', 'The gradual change in allele frequencies in a population', 'The inheritance of traits controlled by genes on the X chromosome', 'The study of chromosome structure'],
        correct: 'When one gene influences the phenotypic expression of another gene',
        explanation: 'Epistasis occurs when the phenotypic expression of one gene is affected by the presence of one or more "modifier genes." It results in non-Mendelian inheritance patterns and can produce novel phenotypes not seen in either parent.'
      },
      {
        id: 'bio12_u3_m6',
        question: 'What is the central dogma of molecular biology?',
        options: ['DNA → RNA → Protein', 'RNA → DNA → Protein', 'Protein → DNA → RNA', 'DNA → Protein → RNA'],
        correct: 'DNA → RNA → Protein',
        explanation: 'The central dogma of molecular biology describes the flow of genetic information within a biological system: DNA is transcribed into RNA, which is then translated into protein. Reverse transcription (RNA to DNA) and RNA replication are exceptions to this general rule.'
      },
      {
        id: 'bio12_u3_m7',
        question: 'What is genetic recombination?',
        options: ['The production of new combinations of alleles during meiosis', 'The duplication of DNA before cell division', 'The synthesis of proteins from amino acids', 'The repair of damaged DNA'],
        correct: 'The production of new combinations of alleles during meiosis',
        explanation: 'Genetic recombination is the production of offspring with combinations of traits different from either parent, through processes like crossing over during meiosis and independent assortment of chromosomes, increasing genetic diversity.'
      },
      {
        id: 'bio12_u3_m8',
        question: 'What is a codon in the genetic code?',
        options: ['A sequence of three nucleotides that specifies an amino acid', 'A type of mutation', 'A segment of DNA that doesn\'t code for proteins', 'A type of RNA polymerase'],
        correct: 'A sequence of three nucleotides that specifies an amino acid',
        explanation: 'A codon is a sequence of three consecutive nucleotides in mRNA that specifies a particular amino acid during protein synthesis, or signals the start or stop of translation. The genetic code consists of 64 possible codons.'
      },
      {
        id: 'bio12_u3_m9',
        question: 'What is genomic imprinting?',
        options: ['Gene expression depends on which parent the gene was inherited from', 'The process of creating a complete genome map', 'The synthesis of proteins from a DNA template', 'The transfer of genes between species'],
        correct: 'Gene expression depends on which parent the gene was inherited from',
        explanation: 'Genomic imprinting is an epigenetic phenomenon where certain genes are expressed in a parent-of-origin-specific manner. The expression of these genes depends on whether they were inherited from the mother or the father.'
      },
      {
        id: 'bio12_u3_m10',
        question: 'What is a chromosomal inversion?',
        options: ['A segment of a chromosome is reversed end to end', 'A segment of a chromosome is moved to a non-homologous chromosome', 'A segment of a chromosome is duplicated', 'A segment of a chromosome is deleted'],
        correct: 'A segment of a chromosome is reversed end to end',
        explanation: 'A chromosomal inversion occurs when a segment of a chromosome breaks off and reattaches in the reverse orientation. This rearrangement can affect gene expression and recombination but usually doesn\'t result in loss of genetic material.'
      }
    ],
    'hard': [
      {
        id: 'bio12_u3_h1',
        question: 'What is the mechanistic difference between conservative and semi-conservative DNA replication?',
        options: ['In semi-conservative replication, each daughter DNA has one original and one new strand; in conservative replication, one daughter DNA would be entirely original and one entirely new', 'Conservative replication is faster than semi-conservative replication', 'Semi-conservative replication occurs only in prokaryotes, while conservative occurs in eukaryotes', 'Conservative replication requires more energy than semi-conservative replication'],
        correct: 'In semi-conservative replication, each daughter DNA has one original and one new strand; in conservative replication, one daughter DNA would be entirely original and one entirely new',
        explanation: 'In semi-conservative replication (the actual mechanism of DNA replication), the parental DNA strands separate and each serves as a template for synthesis of a new complementary strand, resulting in two daughter molecules, each with one original and one new strand. In the hypothetical conservative model, the original double helix would remain intact and a completely new double helix would be synthesized.'
      },
      {
        id: 'bio12_u3_h2',
        question: 'What is the role of DNA methylation in gene expression?',
        options: ['It typically represses gene transcription by preventing transcription factor binding', 'It always enhances gene transcription', 'It repairs damaged DNA', 'It increases the rate of mutation'],
        correct: 'It typically represses gene transcription by preventing transcription factor binding',
        explanation: 'DNA methylation is an epigenetic mechanism involving the addition of methyl groups to DNA, typically at CpG sites. Methylation usually leads to the repression of gene transcription by preventing the binding of transcription factors or by recruiting proteins that remodel chromatin into a repressed state.'
      },
      {
        id: 'bio12_u3_h3',
        question: 'How does RNA interference (RNAi) regulate gene expression?',
        options: ['Small RNA molecules bind to complementary mRNA, preventing translation or inducing degradation', 'Small RNA molecules enhance the translation of specific mRNAs', 'Small RNA molecules directly modify DNA sequences', 'Small RNA molecules activate transcription factors'],
        correct: 'Small RNA molecules bind to complementary mRNA, preventing translation or inducing degradation',
        explanation: 'RNA interference is a biological process where small RNA molecules, such as microRNA (miRNA) or small interfering RNA (siRNA), bind to complementary sequences in messenger RNA (mRNA). This binding can lead to the cleavage and degradation of the mRNA or the inhibition of translation, effectively silencing the expression of specific genes post-transcriptionally.'
      },
      {
        id: 'bio12_u3_h4',
        question: 'What is the molecular basis of anticipation in trinucleotide repeat disorders?',
        options: ['Expansion of trinucleotide repeats during gametogenesis, leading to earlier onset and increased severity in successive generations', 'Accumulation of toxic proteins over multiple generations', 'Increased mutation rates in specific genes', 'Epigenetic changes that accumulate over generations'],
        correct: 'Expansion of trinucleotide repeats during gametogenesis, leading to earlier onset and increased severity in successive generations',
        explanation: 'Anticipation in genetic disorders refers to the phenomenon where symptoms appear at an earlier age and/or are more severe in successive generations. In trinucleotide repeat disorders (such as Huntington\'s disease), this occurs because the number of trinucleotide repeats can increase during gametogenesis, particularly spermatogenesis. Longer repeat sequences typically correlate with earlier onset and more severe symptoms.'
      },
      {
        id: 'bio12_u3_h5',
        question: 'What is the functional significance of alternative splicing?',
        options: ['It allows a single gene to code for multiple proteins', 'It prevents transcription of damaged genes', 'It increases the rate of DNA replication', 'It facilitates the repair of mutations'],
        correct: 'It allows a single gene to code for multiple proteins',
        explanation: 'Alternative splicing is a regulated process during gene expression where particular exons of a gene may be included or excluded from the final processed mRNA. This allows multiple proteins to be coded from a single gene, significantly increasing the diversity of the proteome without increasing genome size.'
      },
      {
        id: 'bio12_u3_h6',
        question: 'What is the mechanism and significance of genomic imprinting at the molecular level?',
        options: ['Differential DNA methylation and histone modifications that lead to parent-of-origin specific gene expression', 'Random inactivation of genes regardless of parental origin', 'Selective degradation of mRNA from one parent\'s allele', 'Increased mutation rate in genes from one parent'],
        correct: 'Differential DNA methylation and histone modifications that lead to parent-of-origin specific gene expression',
        explanation: 'Genomic imprinting involves epigenetic modifications, primarily DNA methylation and histone modifications, established during gametogenesis that result in the expression of certain genes in a parent-of-origin-specific manner. These modifications do not change the DNA sequence but affect gene expression. Imprinting is important for normal development, and disruptions can lead to disorders like Prader-Willi and Angelman syndromes.'
      },
      {
        id: 'bio12_u3_h7',
        question: 'How do structural variations in the genome contribute to human genetic diversity and disease?',
        options: ['They can affect gene dosage, disrupt genes, or alter gene regulation', 'They only affect non-coding regions and have no phenotypic effects', 'They are always harmful and lead to genetic disorders', 'They only occur during meiosis in germ cells'],
        correct: 'They can affect gene dosage, disrupt genes, or alter gene regulation',
        explanation: 'Structural variations in the genome, including copy number variations (CNVs), inversions, translocations, and insertions/deletions, contribute to human genetic diversity and disease by affecting gene dosage (number of copies of a gene), disrupting gene structure, creating fusion genes, or altering gene regulation by changing the proximity of regulatory elements. These variations can lead to phenotypic differences and susceptibility to various diseases.'
      },
      {
        id: 'bio12_u3_h8',
        question: 'What is the mechanistic role of CRISPR-Cas9 in bacterial immunity and how has it been adapted for genome editing?',
        options: ['In bacteria, it targets and cleaves viral DNA; in genome editing, it creates targeted double-strand breaks that can be repaired to introduce specific changes', 'It prevents the entry of viruses into bacterial cells; in genome editing, it prevents the integration of foreign DNA', 'It produces antibodies against viruses; in genome editing, it produces proteins that modify DNA', 'It accelerates mutation rates to generate resistance; in genome editing, it increases the frequency of spontaneous mutations'],
        correct: 'In bacteria, it targets and cleaves viral DNA; in genome editing, it creates targeted double-strand breaks that can be repaired to introduce specific changes',
        explanation: 'CRISPR-Cas9 is a bacterial adaptive immune system that uses CRISPR RNA (crRNA) to guide the Cas9 nuclease to complementary sequences in invasive viral DNA, which is then cleaved and destroyed. For genome editing, this system has been adapted by designing guide RNAs that direct Cas9 to create double-strand breaks at specific genomic locations. These breaks can be repaired by non-homologous end joining (NHEJ), which can introduce mutations, or by homology-directed repair (HDR) using a supplied template, allowing precise genomic modifications.'
      },
      {
        id: 'bio12_u3_h9',
        question: 'What is the molecular basis for X-chromosome inactivation in female mammals?',
        options: ['Random inactivation of one X chromosome by Xist RNA coating, DNA methylation, and histone modifications', 'Preferential degradation of proteins encoded by one X chromosome', 'Deletion of one X chromosome during early development', 'Translocation of one X chromosome to an autosome'],
        correct: 'Random inactivation of one X chromosome by Xist RNA coating, DNA methylation, and histone modifications',
        explanation: 'X-chromosome inactivation in female mammals is a process where one of the two X chromosomes is randomly inactivated during early embryonic development to achieve dosage compensation. The molecular mechanism involves the expression of Xist (X-inactive specific transcript) RNA from the chromosome to be inactivated. Xist RNA coats the X chromosome, recruiting protein complexes that establish repressive histone modifications and DNA methylation, leading to the formation of a highly condensed, transcriptionally inactive Barr body.'
      },
      {
        id: 'bio12_u3_h10',
        question: 'How do prions cause disease without containing genetic material?',
        options: ['By inducing normal proteins to misfold and aggregate', 'By directly damaging DNA', 'By inhibiting protein synthesis', 'By triggering autoimmune responses'],
        correct: 'By inducing normal proteins to misfold and aggregate',
        explanation: 'Prions are misfolded proteins that can induce normal proteins of the same type to also misfold and aggregate. Unlike viruses or bacteria, prions do not contain genetic material (DNA or RNA). The misfolded prion protein (PrPSc) acts as a template that converts the normal cellular prion protein (PrPC) into the pathogenic form through a conformational change. This leads to an accumulation of misfolded proteins that form aggregates, eventually causing cellular damage, neurodegeneration, and disease in conditions like Creutzfeldt-Jakob disease, BSE (mad cow disease), and scrapie.'
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
