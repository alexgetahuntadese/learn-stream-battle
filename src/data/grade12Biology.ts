import { Question } from './naturalScienceQuizzes';

export const grade12BiologyQuestions: { [unit: string]: { [difficulty: string]: Question[] } } = {
  'Unit 1: Molecular Biology and Genetics': {
    easy: [
      {
        id: 'g12bio_u1_e1',
        question: 'What is the central dogma of molecular biology?',
        options: ['Protein -> RNA -> DNA', 'DNA -> RNA -> Protein', 'RNA -> Protein -> RNA', 'Protein -> DNA -> RNA'],
        correct: 'DNA -> RNA -> Protein',
        explanation: 'The central dogma explains the flow of genetic information in a biological system.'
      },
      {
        id: 'g12bio_u1_e2',
        question: 'Which of the following is NOT a component of a DNA nucleotide?',
        options: ['Deoxyribose sugar', 'Phosphate group', 'Nitrogenous base', 'Amino acid'],
        correct: 'Amino acid',
        explanation: 'DNA nucleotides consist of a deoxyribose sugar, a phosphate group, and a nitrogenous base.'
      },
      {
        id: 'g12bio_u1_e3',
        question: 'What type of bond holds the two strands of DNA together?',
        options: ['Ionic bond', 'Covalent bond', 'Hydrogen bond', 'Hydrophobic interaction'],
        correct: 'Hydrogen bond',
        explanation: 'Hydrogen bonds form between complementary base pairs, holding the two DNA strands together.'
      },
      {
        id: 'g12bio_u1_e4',
        question: 'Which nitrogenous base is NOT found in RNA?',
        options: ['Adenine', 'Guanine', 'Cytosine', 'Thymine'],
        correct: 'Thymine',
        explanation: 'RNA contains uracil (U) instead of thymine (T).'
      },
      {
        id: 'g12bio_u1_e5',
        question: 'What is the function of mRNA?',
        options: ['Carry genetic code from DNA to ribosomes', 'Form ribosomes', 'Carry amino acids to ribosomes', 'Catalyze reactions'],
        correct: 'Carry genetic code from DNA to ribosomes',
        explanation: 'mRNA carries the genetic information from DNA to the ribosomes for protein synthesis.'
      }
    ],
    medium: [
      {
        id: 'g12bio_u1_m1',
        question: 'What is the role of DNA polymerase in DNA replication?',
        options: ['Unwinds DNA', 'Adds nucleotides to growing strand', 'Cuts DNA', 'Repairs mutations'],
        correct: 'Adds nucleotides to growing strand',
        explanation: 'DNA polymerase is the enzyme responsible for adding nucleotides to the growing DNA strand during replication.'
      },
      {
        id: 'g12bio_u1_m2',
        question: 'Which type of RNA carries amino acids to the ribosome?',
        options: ['mRNA', 'tRNA', 'rRNA', 'snRNA'],
        correct: 'tRNA',
        explanation: 'Transfer RNA (tRNA) carries specific amino acids to the ribosome during protein synthesis.'
      },
      {
        id: 'g12bio_u1_m3',
        question: 'What is the function of the ribosome in protein synthesis?',
        options: ['Transcribes DNA', 'Translates mRNA', 'Replicates DNA', 'Modifies proteins'],
        correct: 'Translates mRNA',
        explanation: 'Ribosomes are the cellular machinery responsible for translating mRNA into proteins.'
      },
      {
        id: 'g12bio_u1_m4',
        question: 'In which direction does DNA polymerase synthesize new DNA?',
        options: ['3\' to 5\'', '5\' to 3\'', 'Both directions', 'Random direction'],
        correct: '5\' to 3\'',
        explanation: 'DNA polymerase can only add nucleotides in the 5\' to 3\' direction.'
      },
      {
        id: 'g12bio_u1_m5',
        question: 'What is a codon?',
        options: ['A sequence of 3 DNA bases', 'A sequence of 3 RNA bases', 'A single amino acid', 'A protein chain'],
        correct: 'A sequence of 3 RNA bases',
        explanation: 'A codon is a sequence of three RNA nucleotides that corresponds to a specific amino acid.'
      },
      {
        id: 'g12bio_u1_m6',
        question: 'Which enzyme is responsible for unwinding DNA during replication?',
        options: ['DNA polymerase', 'Helicase', 'Ligase', 'Primase'],
        correct: 'Helicase',
        explanation: 'Helicase unwinds the double helix structure of DNA by breaking hydrogen bonds between base pairs.'
      },
      {
        id: 'g12bio_u1_m7',
        question: 'What is the difference between the leading and lagging strand in DNA replication?',
        options: ['Leading strand is synthesized continuously', 'Lagging strand is synthesized continuously', 'No difference', 'Leading strand is longer'],
        correct: 'Leading strand is synthesized continuously',
        explanation: 'The leading strand is synthesized continuously in the 5\' to 3\' direction, while the lagging strand is synthesized in fragments.'
      },
      {
        id: 'g12bio_u1_m8',
        question: 'What is the role of mRNA in protein synthesis?',
        options: ['Carries genetic information from DNA', 'Brings amino acids to ribosome', 'Forms ribosome structure', 'Repairs DNA'],
        correct: 'Carries genetic information from DNA',
        explanation: 'mRNA carries the genetic information from DNA to the ribosome where it is translated into proteins.'
      },
      {
        id: 'g12bio_u1_m9',
        question: 'Which process converts DNA information into RNA?',
        options: ['Translation', 'Transcription', 'Replication', 'Mutation'],
        correct: 'Transcription',
        explanation: 'Transcription is the process by which DNA information is converted into RNA.'
      },
      {
        id: 'g12bio_u1_m10',
        question: 'What is the function of RNA polymerase?',
        options: ['Replicates DNA', 'Synthesizes RNA from DNA template', 'Repairs DNA', 'Degrades RNA'],
        correct: 'Synthesizes RNA from DNA template',
        explanation: 'RNA polymerase synthesizes RNA using DNA as a template during transcription.'
      },
      {
        id: 'g12bio_u1_m11',
        question: 'What are Okazaki fragments?',
        options: ['Continuous DNA synthesis products', 'Short DNA fragments on lagging strand', 'RNA primers', 'Protein fragments'],
        correct: 'Short DNA fragments on lagging strand',
        explanation: 'Okazaki fragments are short DNA fragments synthesized on the lagging strand during DNA replication.'
      },
      {
        id: 'g12bio_u1_m12',
        question: 'Which molecule provides the energy for DNA replication?',
        options: ['ATP', 'GTP', 'dNTPs', 'All of the above'],
        correct: 'All of the above',
        explanation: 'DNA replication requires ATP for helicase activity, GTP for certain processes, and dNTPs provide both nucleotides and energy.'
      },
      {
        id: 'g12bio_u1_m13',
        question: 'What is the anticodon?',
        options: ['Sequence on mRNA', 'Sequence on tRNA', 'Sequence on DNA', 'Sequence on rRNA'],
        correct: 'Sequence on tRNA',
        explanation: 'The anticodon is a three-nucleotide sequence on tRNA that is complementary to the codon on mRNA.'
      },
      {
        id: 'g12bio_u1_m14',
        question: 'During which phase of the cell cycle does DNA replication occur?',
        options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
        correct: 'S phase',
        explanation: 'DNA replication occurs during the S (synthesis) phase of the cell cycle.'
      },
      {
        id: 'g12bio_u1_m15',
        question: 'What is the role of ligase in DNA replication?',
        options: ['Unwinds DNA', 'Adds nucleotides', 'Joins DNA fragments', 'Proofreads DNA'],
        correct: 'Joins DNA fragments',
        explanation: 'DNA ligase joins the Okazaki fragments on the lagging strand to form a continuous DNA strand.'
      },
      {
        id: 'g12bio_u1_m16',
        question: 'What is the role of primase in DNA replication?',
        options: ['Unwinds DNA', 'Synthesizes RNA primers', 'Joins DNA fragments', 'Proofreads DNA'],
        correct: 'Synthesizes RNA primers',
        explanation: 'Primase synthesizes short RNA primers that are needed for DNA polymerase to begin synthesis.'
      },
      {
        id: 'g12bio_u1_m17',
        question: 'Which type of RNA processing removes introns from pre-mRNA?',
        options: ['Capping', 'Polyadenylation', 'Splicing', 'Editing'],
        correct: 'Splicing',
        explanation: 'Splicing is the process that removes introns and joins exons to form mature mRNA.'
      },
      {
        id: 'g12bio_u1_m18',
        question: 'What is the function of the promoter region in gene expression?',
        options: ['Codes for amino acids', 'Provides binding site for RNA polymerase', 'Terminates transcription', 'Splices mRNA'],
        correct: 'Provides binding site for RNA polymerase',
        explanation: 'The promoter region provides a binding site for RNA polymerase to initiate transcription.'
      },
      {
        id: 'g12bio_u1_m19',
        question: 'What is the wobble position in the genetic code?',
        options: ['First position of codon', 'Second position of codon', 'Third position of codon', 'All positions'],
        correct: 'Third position of codon',
        explanation: 'The wobble position is the third position of the codon where base pairing rules are relaxed, allowing for degeneracy in the genetic code.'
      },
      {
        id: 'g12bio_u1_m20',
        question: 'Which enzyme is responsible for adding the 5\' cap to mRNA?',
        options: ['RNA polymerase', 'Capping enzyme', 'Ligase', 'Helicase'],
        correct: 'Capping enzyme',
        explanation: 'The capping enzyme adds a 7-methylguanosine cap to the 5\' end of pre-mRNA to protect it from degradation.'
      },
      {
        id: 'g12bio_u1_m21',
        question: 'What is the role of the poly-A tail in mRNA?',
        options: ['Initiates translation', 'Protects mRNA from degradation', 'Codes for amino acids', 'Splices introns'],
        correct: 'Protects mRNA from degradation',
        explanation: 'The poly-A tail at the 3\' end of mRNA protects it from degradation and helps in translation efficiency.'
      },
      {
        id: 'g12bio_u1_m22',
        question: 'Which of the following is a stop codon?',
        options: ['AUG', 'UAA', 'UUU', 'GGG'],
        correct: 'UAA',
        explanation: 'UAA is one of the three stop codons (UAA, UAG, UGA) that signal the termination of protein synthesis.'
      },
      {
        id: 'g12bio_u1_m23',
        question: 'What is the function of elongation factors in translation?',
        options: ['Initiate translation', 'Facilitate ribosome movement', 'Terminate translation', 'Modify amino acids'],
        correct: 'Facilitate ribosome movement',
        explanation: 'Elongation factors help facilitate the movement of ribosomes along mRNA during translation.'
      },
      {
        id: 'g12bio_u1_m24',
        question: 'Which structure contains the catalytic site for peptide bond formation?',
        options: ['Large ribosomal subunit', 'Small ribosomal subunit', 'tRNA', 'mRNA'],
        correct: 'Large ribosomal subunit',
        explanation: 'The large ribosomal subunit contains the peptidyl transferase center where peptide bonds are formed.'
      },
      {
        id: 'g12bio_u1_m25',
        question: 'What is the significance of the start codon AUG?',
        options: ['Codes for any amino acid', 'Codes for methionine and starts translation', 'Stops translation', 'Codes for tryptophan'],
        correct: 'Codes for methionine and starts translation',
        explanation: 'AUG codes for methionine and serves as the start codon that initiates protein synthesis.'
      }
    ],
    hard: [
      {
        id: 'g12bio_u1_h1',
        question: 'How does the proofreading mechanism work during DNA replication?',
        options: ['By adding a methyl group', 'By using a different polymerase', 'By excising incorrect bases', 'By changing the sugar'],
        correct: 'By excising incorrect bases',
        explanation: 'DNA polymerase has a proofreading function that excises incorrectly paired bases during replication.'
      },
      {
        id: 'g12bio_u1_h2',
        question: 'What are telomeres and why are they important?',
        options: ['Regions of active genes', 'Repetitive sequences at ends of chromosomes', 'Sites for ribosome assembly', 'Storage for mRNA'],
        correct: 'Repetitive sequences at ends of chromosomes',
        explanation: 'Telomeres are repetitive nucleotide sequences at the ends of chromosomes that protect them from deterioration or fusion with neighboring chromosomes.'
      },
      {
        id: 'g12bio_u1_h3',
        question: 'Explain the role of histone modification in gene expression.',
        options: ['Changes DNA sequence', 'Alters DNA methylation', 'Affects DNA replication', 'Modifies chromatin structure'],
        correct: 'Modifies chromatin structure',
        explanation: 'Histone modification affects chromatin structure, which can either promote or repress gene expression.'
      }
    ]
  },
  'Unit 2: Evolution and Biodiversity': {
    easy: [
      {
        id: 'g12bio_u2_e1',
        question: 'What is evolution?',
        options: ['Change in a species over time', 'Development of an individual', 'Change in weather patterns', 'Formation of mountains'],
        correct: 'Change in a species over time',
        explanation: 'Evolution is the change in the heritable characteristics of biological populations over successive generations.'
      },
      {
        id: 'g12bio_u2_e2',
        question: 'Who proposed the theory of natural selection?',
        options: ['Gregor Mendel', 'Charles Darwin', 'James Watson', 'Francis Crick'],
        correct: 'Charles Darwin',
        explanation: 'Charles Darwin is credited with proposing the theory of natural selection.'
      },
      {
        id: 'g12bio_u2_e3',
        question: 'What is biodiversity?',
        options: ['Variety of life in an area', 'Number of species in a family', 'Total number of cells in an organism', 'The study of cells'],
        correct: 'Variety of life in an area',
        explanation: 'Biodiversity refers to the variety of life in a particular habitat or ecosystem.'
      },
      {
        id: 'g12bio_u2_e4',
        question: 'What is a species?',
        options: ['A group of similar organisms that can interbreed', 'A group of identical organisms', 'A group of organisms in the same habitat', 'A group of organisms with the same diet'],
        correct: 'A group of similar organisms that can interbreed',
        explanation: 'A species is often defined as a group of organisms that can interbreed and produce fertile offspring.'
      },
      {
        id: 'g12bio_u2_e5',
        question: 'What is a fossil?',
        options: ['The remains of a dead organism', 'A preserved ancient organism', 'A type of rock', 'A modern organism'],
        correct: 'A preserved ancient organism',
        explanation: 'A fossil is the preserved remains or traces of ancient organisms.'
      }
    ],
    medium: [
      {
        id: 'g12bio_u2_m1',
        question: 'What is natural selection?',
        options: ['Random survival', 'Survival of the fittest', 'Equal survival chance', 'Survival of the weakest'],
        correct: 'Survival of the fittest',
        explanation: 'Natural selection is the process where organisms better adapted to their environment tend to survive and reproduce more successfully.'
      },
      {
        id: 'g12bio_u2_m2',
        question: 'What is genetic drift?',
        options: ['Change in gene frequency due to chance', 'Migration of genes', 'Mutation of genes', 'Selection of genes'],
        correct: 'Change in gene frequency due to chance',
        explanation: 'Genetic drift is the change in the frequency of a gene variant (allele) in a population due to random sampling of organisms.'
      },
      {
        id: 'g12bio_u2_m3',
        question: 'What is adaptation?',
        options: ['A change in environment', 'A trait that enhances survival and reproduction', 'A random mutation', 'A type of disease'],
        correct: 'A trait that enhances survival and reproduction',
        explanation: 'Adaptation is a trait with a current functional role in the life history of an organism that is maintained and evolved by means of natural selection.'
      },
      {
        id: 'g12bio_u2_m4',
        question: 'What is speciation?',
        options: ['Formation of new species', 'Extinction of species', 'Migration of species', 'Mutation of species'],
        correct: 'Formation of new species',
        explanation: 'Speciation is the evolutionary process by which new biological species arise.'
      },
      {
        id: 'g12bio_u2_m5',
        question: 'What is the role of mutations in evolution?',
        options: ['Always beneficial', 'Always harmful', 'Source of new genetic variation', 'No role in evolution'],
        correct: 'Source of new genetic variation',
        explanation: 'Mutations are the source of new genetic variation, which can be acted upon by natural selection.'
      }
    ],
    hard: [
      {
        id: 'g12bio_u2_h1',
        question: 'Explain the concept of punctuated equilibrium.',
        options: ['Gradual change over time', 'Sudden change followed by stability', 'Constant rate of evolution', 'No change over time'],
        correct: 'Sudden change followed by stability',
        explanation: 'Punctuated equilibrium is a theory that proposes that evolution occurs in rapid bursts of change, followed by long periods of stability.'
      },
      {
        id: 'g12bio_u2_h2',
        question: 'What is the significance of the fossil record in understanding evolution?',
        options: ['Provides no evidence', 'Shows direct lineage of species', 'Provides evidence of past life forms', 'Only shows extinct species'],
        correct: 'Provides evidence of past life forms',
        explanation: 'The fossil record provides evidence of past life forms and helps scientists understand the history of life on Earth.'
      },
      {
        id: 'g12bio_u2_h3',
        question: 'How does comparative anatomy support the theory of evolution?',
        options: ['Shows no similarities', 'Shows different functions', 'Reveals homologous structures', 'Only shows analogous structures'],
        correct: 'Reveals homologous structures',
        explanation: 'Comparative anatomy reveals homologous structures, which are similar structures in different species that share a common ancestor, supporting the theory of evolution.'
      }
    ]
  },
  'Unit 3: Ecology and Conservation': {
    easy: [
      {
        id: 'g12bio_u3_e1',
        question: 'What is ecology?',
        options: ['Study of cells', 'Study of tissues', 'Study of organisms and their environment', 'Study of rocks'],
        correct: 'Study of organisms and their environment',
        explanation: 'Ecology is the study of the relationships between living organisms and their environment.'
      },
      {
        id: 'g12bio_u3_e2',
        question: 'What is an ecosystem?',
        options: ['A single organism', 'A community of organisms and their environment', 'A type of cell', 'A type of rock'],
        correct: 'A community of organisms and their environment',
        explanation: 'An ecosystem includes all of the living things (plants, animals and organisms) in a given area, interacting with each other, and also with their non-living environments (weather, earth, sun, soil, climate, atmosphere).'
      },
      {
        id: 'g12bio_u3_e3',
        question: 'What is a food chain?',
        options: ['A list of foods', 'A sequence of organisms that eat each other', 'A type of cell', 'A type of rock'],
        correct: 'A sequence of organisms that eat each other',
        explanation: 'A food chain is a linear sequence of organisms through which nutrients and energy pass as one organism eats another.'
      },
      {
        id: 'g12bio_u3_e4',
        question: 'What is conservation?',
        options: ['Destruction of natural resources', 'Protection of natural resources', 'Pollution of the environment', 'Mining of resources'],
        correct: 'Protection of natural resources',
        explanation: 'Conservation is the protection, preservation, management, or restoration of natural environments and the ecological communities that inhabit them.'
      },
      {
        id: 'g12bio_u3_e5',
        question: 'What is pollution?',
        options: ['Clean environment', 'Contamination of the environment', 'Natural environment', 'Healthy ecosystem'],
        correct: 'Contamination of the environment',
        explanation: 'Pollution is the introduction of harmful materials into the environment.'
      }
    ],
    medium: [
      {
        id: 'g12bio_u3_m1',
        question: 'What is a trophic level?',
        options: ['A type of cell', 'A feeding level in a food chain', 'A type of rock', 'A type of ecosystem'],
        correct: 'A feeding level in a food chain',
        explanation: 'A trophic level is the position an organism occupies in a food chain or food web.'
      },
      {
        id: 'g12bio_u3_m2',
        question: 'What is a keystone species?',
        options: ['A common species', 'A species with a large population', 'A species that has a disproportionately large effect on its environment', 'A species that is not important'],
        correct: 'A species that has a disproportionately large effect on its environment',
        explanation: 'A keystone species is a species that has a disproportionately large effect on its environment relative to its abundance.'
      },
      {
        id: 'g12bio_u3_m3',
        question: 'What is a biome?',
        options: ['A small ecosystem', 'A large geographic area with similar climate and organisms', 'A type of cell', 'A type of rock'],
        correct: 'A large geographic area with similar climate and organisms',
        explanation: 'A biome is a large geographic area characterized by specific climate conditions, animal populations, and plant species.'
      },
      {
        id: 'g12bio_u3_m4',
        question: 'What is the greenhouse effect?',
        options: ['Cooling of the Earth', 'Trapping of heat in the atmosphere', 'Cleaning of the atmosphere', 'Formation of clouds'],
        correct: 'Trapping of heat in the atmosphere',
        explanation: 'The greenhouse effect is the process by which radiation from a planet\'s atmosphere warms the planet\'s surface to a temperature above what it would be without its atmosphere.'
      },
      {
        id: 'g12bio_u3_m5',
        question: 'What is deforestation?',
        options: ['Planting trees', 'Cutting down forests', 'Protecting forests', 'Growing trees'],
        correct: 'Cutting down forests',
        explanation: 'Deforestation is the clearing of forests for other land uses, such as agriculture, urbanization, or mining.'
      }
    ],
    hard: [
      {
        id: 'g12bio_u3_h1',
        question: 'Explain the concept of ecological succession.',
        options: ['Random changes in an ecosystem', 'The process of change in the species structure of an ecological community over time', 'No change in an ecosystem', 'Sudden change in an ecosystem'],
        correct: 'The process of change in the species structure of an ecological community over time',
        explanation: 'Ecological succession is the process of change in the species structure of an ecological community over time, from pioneer species to a climax community.'
      },
      {
        id: 'g12bio_u3_h2',
        question: 'What are the major threats to biodiversity?',
        options: ['Habitat loss, invasive species, pollution, climate change, overexploitation', 'Only climate change', 'Only pollution', 'Only habitat loss'],
        correct: 'Habitat loss, invasive species, pollution, climate change, overexploitation',
        explanation: 'The major threats to biodiversity include habitat loss, invasive species, pollution, climate change, and overexploitation of resources.'
      },
      {
        id: 'g12bio_u3_h3',
        question: 'How does climate change affect ecosystems?',
        options: ['No effect', 'Only benefits ecosystems', 'Changes temperature, precipitation, and sea level', 'Only harms a few species'],
        correct: 'Changes temperature, precipitation, and sea level',
        explanation: 'Climate change affects ecosystems by altering temperature, precipitation patterns, and sea levels, leading to shifts in species distribution and ecosystem function.'
      }
    ]
  },
  'Unit 4: Human Anatomy and Physiology': {
    easy: [
      {
        id: 'g12bio_u4_e1',
        question: 'What is anatomy?',
        options: ['Study of cells', 'Study of tissues', 'Study of the structure of the body', 'Study of diseases'],
        correct: 'Study of the structure of the body',
        explanation: 'Anatomy is the study of the structure of the body and its parts.'
      },
      {
        id: 'g12bio_u4_e2',
        question: 'What is physiology?',
        options: ['Study of cells', 'Study of tissues', 'Study of the function of the body', 'Study of diseases'],
        correct: 'Study of the function of the body',
        explanation: 'Physiology is the study of the function of the body and its parts.'
      },
      {
        id: 'g12bio_u4_e3',
        question: 'What is the function of the heart?',
        options: ['Pump blood', 'Digest food', 'Filter air', 'Produce hormones'],
        correct: 'Pump blood',
        explanation: 'The heart is a muscular organ that pumps blood through the blood vessels by repeated, rhythmic contractions.'
      },
      {
        id: 'g12bio_u4_e4',
        question: 'What is the function of the lungs?',
        options: ['Pump blood', 'Digest food', 'Exchange gases', 'Produce hormones'],
        correct: 'Exchange gases',
        explanation: 'The lungs are responsible for exchanging oxygen and carbon dioxide between the air and the blood.'
      },
      {
        id: 'g12bio_u4_e5',
        question: 'What is the function of the brain?',
        options: ['Pump blood', 'Digest food', 'Control body functions', 'Produce hormones'],
        correct: 'Control body functions',
        explanation: 'The brain is the control center of the body, responsible for coordinating and regulating various functions.'
      }
    ],
    medium: [
      {
        id: 'g12bio_u4_m1',
        question: 'What is the role of the digestive system?',
        options: ['Pump blood', 'Break down food', 'Filter air', 'Produce hormones'],
        correct: 'Break down food',
        explanation: 'The digestive system breaks down food into smaller molecules that can be absorbed into the bloodstream.'
      },
      {
        id: 'g12bio_u4_m2',
        question: 'What is the role of the endocrine system?',
        options: ['Pump blood', 'Digest food', 'Filter air', 'Produce hormones'],
        correct: 'Produce hormones',
        explanation: 'The endocrine system produces hormones that regulate various body functions, such as growth, metabolism, and reproduction.'
      },
      {
        id: 'g12bio_u4_m3',
        question: 'What is the role of the nervous system?',
        options: ['Pump blood', 'Digest food', 'Transmit signals', 'Produce hormones'],
        correct: 'Transmit signals',
        explanation: 'The nervous system transmits signals between the brain and other parts of the body, allowing for communication and coordination.'
      },
      {
        id: 'g12bio_u4_m4',
        question: 'What is the role of the immune system?',
        options: ['Pump blood', 'Digest food', 'Defend against pathogens', 'Produce hormones'],
        correct: 'Defend against pathogens',
        explanation: 'The immune system defends the body against pathogens, such as bacteria, viruses, and parasites.'
      },
      {
        id: 'g12bio_u4_m5',
        question: 'What is the role of the skeletal system?',
        options: ['Pump blood', 'Digest food', 'Provide support and structure', 'Produce hormones'],
        correct: 'Provide support and structure',
        explanation: 'The skeletal system provides support and structure to the body, protects organs, and allows for movement.'
      }
    ],
    hard: [
      {
        id: 'g12bio_u4_h1',
        question: 'Explain the process of gas exchange in the lungs.',
        options: ['No exchange', 'Only oxygen exchange', 'Exchange of oxygen and carbon dioxide', 'Only carbon dioxide exchange'],
        correct: 'Exchange of oxygen and carbon dioxide',
        explanation: 'Gas exchange in the lungs involves the exchange of oxygen and carbon dioxide between the air and the blood in the alveoli.'
      },
      {
        id: 'g12bio_u4_h2',
        question: 'How does the body regulate blood glucose levels?',
        options: ['No regulation', 'Only by diet', 'By hormones like insulin and glucagon', 'Only by exercise'],
        correct: 'By hormones like insulin and glucagon',
        explanation: 'Blood glucose levels are regulated by hormones like insulin and glucagon, which are produced by the pancreas.'
      },
      {
        id: 'g12bio_u4_h3',
        question: 'What are the main components of the immune system and how do they work together?',
        options: ['Only white blood cells', 'Only antibodies', 'White blood cells, antibodies, and other components', 'Only vaccines'],
        correct: 'White blood cells, antibodies, and other components',
        explanation: 'The immune system consists of white blood cells, antibodies, and other components that work together to defend the body against pathogens.'
      }
    ]
  }
};

export const getGrade12BiologyQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  const unitData = grade12BiologyQuestions[unit];
  if (!unitData) {
    console.warn(`No questions found for unit: ${unit}`);
    return [];
  }

  const questions = unitData[difficulty] || [];
  if (questions.length === 0) {
    console.warn(`No ${difficulty} questions found for unit: ${unit}`);
  }

  return questions;
};
