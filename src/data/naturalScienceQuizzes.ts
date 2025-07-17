
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
}

export interface SubjectQuizData {
  [key: string]: {
    [chapter: string]: QuizQuestion[];
  };
}

export const naturalScienceQuizzes: SubjectQuizData = {
  biology: {
    "Chapter 1: Cell Biology and Genetics": [
      // Easy Questions
      {
        id: 1,
        question: "What is the basic unit of life?",
        options: ["Tissue", "Organ", "Cell", "Organism"],
        correct: "Cell",
        explanation: "The cell is the basic structural and functional unit of all living organisms.",
        difficulty: "Easy",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 2,
        question: "Which organelle contains the cell's genetic material?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"],
        correct: "Nucleus",
        explanation: "The nucleus contains the cell's DNA and controls cellular activities.",
        difficulty: "Easy",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 3,
        question: "What does DNA stand for?",
        options: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Dynamic Nuclear Acid", "Deoxy Nuclear Acid"],
        correct: "Deoxyribonucleic Acid",
        explanation: "DNA stands for Deoxyribonucleic Acid, which carries genetic information.",
        difficulty: "Easy",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 4,
        question: "Which process allows cells to divide and reproduce?",
        options: ["Photosynthesis", "Respiration", "Mitosis", "Digestion"],
        correct: "Mitosis",
        explanation: "Mitosis is the process by which cells divide to produce two identical daughter cells.",
        difficulty: "Easy",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 5,
        question: "What are genes made of?",
        options: ["Proteins", "Carbohydrates", "DNA", "Lipids"],
        correct: "DNA",
        explanation: "Genes are segments of DNA that contain instructions for making proteins.",
        difficulty: "Easy",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      // Medium Questions
      {
        id: 6,
        question: "During which phase of mitosis do chromosomes align at the cell's equator?",
        options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
        correct: "Metaphase",
        explanation: "During metaphase, chromosomes align at the cell's equatorial plane (metaphase plate).",
        difficulty: "Medium",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 7,
        question: "What is the role of ribosomes in protein synthesis?",
        options: ["DNA replication", "RNA transcription", "Protein translation", "Lipid synthesis"],
        correct: "Protein translation",
        explanation: "Ribosomes are the sites where mRNA is translated into proteins.",
        difficulty: "Medium",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 8,
        question: "Which type of RNA carries amino acids to the ribosome?",
        options: ["mRNA", "tRNA", "rRNA", "snRNA"],
        correct: "tRNA",
        explanation: "Transfer RNA (tRNA) carries specific amino acids to the ribosome during protein synthesis.",
        difficulty: "Medium",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 9,
        question: "What is the difference between chromatin and chromosomes?",
        options: ["Chromatin is condensed, chromosomes are not", "Chromosomes are condensed chromatin", "They are the same thing", "Chromatin contains RNA, chromosomes contain DNA"],
        correct: "Chromosomes are condensed chromatin",
        explanation: "Chromosomes are highly condensed forms of chromatin that become visible during cell division.",
        difficulty: "Medium",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 10,
        question: "What is the function of the spindle fibers during mitosis?",
        options: ["DNA replication", "Chromosome separation", "Nuclear envelope formation", "Protein synthesis"],
        correct: "Chromosome separation",
        explanation: "Spindle fibers attach to chromosomes and help separate sister chromatids during mitosis.",
        difficulty: "Medium",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      // Hard Questions
      {
        id: 11,
        question: "What is the significance of the G1/S checkpoint in the cell cycle?",
        options: ["Checks for DNA damage before replication", "Ensures proper chromosome alignment", "Verifies spindle attachment", "Controls cytokinesis"],
        correct: "Checks for DNA damage before replication",
        explanation: "The G1/S checkpoint ensures that DNA is not damaged before the cell proceeds to DNA replication in S phase.",
        difficulty: "Hard",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 12,
        question: "Which enzyme is responsible for unwinding the DNA double helix during replication?",
        options: ["DNA polymerase", "DNA ligase", "DNA helicase", "DNA primase"],
        correct: "DNA helicase",
        explanation: "DNA helicase unwinds the double helix by breaking hydrogen bonds between base pairs.",
        difficulty: "Hard",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 13,
        question: "What is the role of telomeres in cell division?",
        options: ["Initiate DNA replication", "Protect chromosome ends", "Form spindle fibers", "Control gene expression"],
        correct: "Protect chromosome ends",
        explanation: "Telomeres protect chromosome ends from degradation and fusion with other chromosomes.",
        difficulty: "Hard",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 14,
        question: "In eukaryotic gene expression, what is alternative splicing?",
        options: ["DNA repair mechanism", "Different ways to join exons", "Chromosome condensation", "Protein folding"],
        correct: "Different ways to join exons",
        explanation: "Alternative splicing allows different combinations of exons to be joined, producing multiple proteins from one gene.",
        difficulty: "Hard",
        chapter: "Chapter 1: Cell Biology and Genetics"
      },
      {
        id: 15,
        question: "What is the molecular basis of semiconservative DNA replication?",
        options: ["Both strands are completely new", "One strand is old, one is new", "Both strands are partially new", "Replication is random"],
        correct: "One strand is old, one is new",
        explanation: "In semiconservative replication, each new DNA molecule consists of one original strand and one newly synthesized strand.",
        difficulty: "Hard",
        chapter: "Chapter 1: Cell Biology and Genetics"
      }
    ],
    "Chapter 2: Human Biology and Health": [
      // Easy Questions
      {
        id: 16,
        question: "Which organ system is responsible for transporting oxygen throughout the body?",
        options: ["Digestive system", "Circulatory system", "Respiratory system", "Nervous system"],
        correct: "Circulatory system",
        explanation: "The circulatory system transports oxygen-rich blood from the lungs to all body tissues.",
        difficulty: "Easy",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 17,
        question: "What is the main function of red blood cells?",
        options: ["Fight infection", "Carry oxygen", "Clot blood", "Produce hormones"],
        correct: "Carry oxygen",
        explanation: "Red blood cells contain hemoglobin, which binds to oxygen and transports it throughout the body.",
        difficulty: "Easy",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 18,
        question: "Which organ filters waste from the blood?",
        options: ["Liver", "Heart", "Kidneys", "Lungs"],
        correct: "Kidneys",
        explanation: "The kidneys filter waste products and excess water from the blood to form urine.",
        difficulty: "Easy",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 19,
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Liver", "Skin", "Heart"],
        correct: "Skin",
        explanation: "The skin is the largest organ, serving as a protective barrier and regulating body temperature.",
        difficulty: "Easy",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 20,
        question: "Which vitamin is essential for bone health?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        correct: "Vitamin D",
        explanation: "Vitamin D helps the body absorb calcium, which is essential for strong bones and teeth.",
        difficulty: "Easy",
        chapter: "Chapter 2: Human Biology and Health"
      },
      // Medium Questions
      {
        id: 21,
        question: "What is the role of insulin in blood glucose regulation?",
        options: ["Increases blood glucose", "Decreases blood glucose", "Has no effect on glucose", "Converts glucose to fat"],
        correct: "Decreases blood glucose",
        explanation: "Insulin is released by the pancreas to lower blood glucose levels by promoting cellular glucose uptake.",
        difficulty: "Medium",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 22,
        question: "Which type of immunity provides long-term protection through memory cells?",
        options: ["Innate immunity", "Passive immunity", "Active immunity", "Natural immunity"],
        correct: "Active immunity",
        explanation: "Active immunity involves the production of memory cells that provide long-term protection against specific pathogens.",
        difficulty: "Medium",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 23,
        question: "What is the function of the nephron in the kidney?",
        options: ["Produce hormones", "Filter blood and form urine", "Store urine", "Regulate blood pressure"],
        correct: "Filter blood and form urine",
        explanation: "Nephrons are the functional units of the kidney that filter blood and produce urine.",
        difficulty: "Medium",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 24,
        question: "Which hormone regulates the sleep-wake cycle?",
        options: ["Cortisol", "Melatonin", "Adrenaline", "Thyroxine"],
        correct: "Melatonin",
        explanation: "Melatonin is produced by the pineal gland and regulates circadian rhythms and sleep patterns.",
        difficulty: "Medium",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 25,
        question: "What is atherosclerosis?",
        options: ["Bone disease", "Muscle disorder", "Artery hardening", "Nerve damage"],
        correct: "Artery hardening",
        explanation: "Atherosclerosis is the hardening and narrowing of arteries due to plaque buildup.",
        difficulty: "Medium",
        chapter: "Chapter 2: Human Biology and Health"
      },
      // Hard Questions
      {
        id: 26,
        question: "What is the mechanism of action of ACE inhibitors in treating hypertension?",
        options: ["Block calcium channels", "Inhibit angiotensin-converting enzyme", "Block beta receptors", "Increase sodium excretion"],
        correct: "Inhibit angiotensin-converting enzyme",
        explanation: "ACE inhibitors prevent the conversion of angiotensin I to angiotensin II, reducing vasoconstriction and blood pressure.",
        difficulty: "Hard",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 27,
        question: "Which cells are responsible for antigen presentation to T-lymphocytes?",
        options: ["B cells", "Dendritic cells", "Neutrophils", "Eosinophils"],
        correct: "Dendritic cells",
        explanation: "Dendritic cells are professional antigen-presenting cells that activate T-lymphocytes in immune responses.",
        difficulty: "Hard",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 28,
        question: "What is the role of surfactant in the lungs?",
        options: ["Gas exchange", "Reduce surface tension", "Filter air", "Produce mucus"],
        correct: "Reduce surface tension",
        explanation: "Surfactant reduces surface tension in alveoli, preventing collapse and facilitating breathing.",
        difficulty: "Hard",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 29,
        question: "Which mechanism explains the Frank-Starling law of the heart?",
        options: ["Heart rate increases with exercise", "Stroke volume increases with preload", "Blood pressure affects heart rate", "Cardiac output is constant"],
        correct: "Stroke volume increases with preload",
        explanation: "The Frank-Starling mechanism states that stroke volume increases as venous return (preload) increases, up to a point.",
        difficulty: "Hard",
        chapter: "Chapter 2: Human Biology and Health"
      },
      {
        id: 30,
        question: "What is the molecular basis of sickle cell anemia?",
        options: ["Missing hemoglobin", "Defective iron absorption", "Abnormal globin chain", "Reduced red cell production"],
        correct: "Abnormal globin chain",
        explanation: "Sickle cell anemia results from a mutation in the β-globin gene, causing abnormal hemoglobin S formation.",
        difficulty: "Hard",
        chapter: "Chapter 2: Human Biology and Health"
      }
    ],
    "Chapter 3: Reproduction and Development": [
      // Easy Questions
      {
        id: 31,
        question: "What is fertilization?",
        options: ["Cell division", "Union of sperm and egg", "Hormone production", "Organ formation"],
        correct: "Union of sperm and egg",
        explanation: "Fertilization is the process where a sperm cell unites with an egg cell to form a zygote.",
        difficulty: "Easy",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 32,
        question: "Where does fertilization typically occur in humans?",
        options: ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
        correct: "Fallopian tube",
        explanation: "Fertilization usually occurs in the fallopian tube, specifically in the ampulla region.",
        difficulty: "Easy",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 33,
        question: "What is the first stage of human development after fertilization?",
        options: ["Fetus", "Embryo", "Zygote", "Blastocyst"],
        correct: "Zygote",
        explanation: "The zygote is the first stage of development, formed immediately after fertilization.",
        difficulty: "Easy",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 34,
        question: "How long is the typical human pregnancy?",
        options: ["36 weeks", "40 weeks", "44 weeks", "32 weeks"],
        correct: "40 weeks",
        explanation: "Human pregnancy typically lasts about 40 weeks or 9 months from the last menstrual period.",
        difficulty: "Easy",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 35,
        question: "Which hormone is primarily responsible for maintaining pregnancy?",
        options: ["Estrogen", "Testosterone", "Progesterone", "Insulin"],
        correct: "Progesterone",
        explanation: "Progesterone maintains the uterine lining and supports pregnancy throughout gestation.",
        difficulty: "Easy",
        chapter: "Chapter 3: Reproduction and Development"
      },
      // Medium Questions
      {
        id: 36,
        question: "What is gastrulation in embryonic development?",
        options: ["Cell division", "Formation of three germ layers", "Organ formation", "Neural development"],
        correct: "Formation of three germ layers",
        explanation: "Gastrulation is the process that forms the three primary germ layers: ectoderm, mesoderm, and endoderm.",
        difficulty: "Medium",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 37,
        question: "Which germ layer gives rise to the nervous system?",
        options: ["Ectoderm", "Mesoderm", "Endoderm", "Blastoderm"],
        correct: "Ectoderm",
        explanation: "The ectoderm is the outermost germ layer that develops into the nervous system and skin.",
        difficulty: "Medium",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 38,
        question: "What is the function of the placenta?",
        options: ["Produce hormones only", "Exchange nutrients and waste", "Protect the fetus only", "Store genetic material"],
        correct: "Exchange nutrients and waste",
        explanation: "The placenta facilitates nutrient and gas exchange between mother and fetus, and also produces hormones.",
        difficulty: "Medium",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 39,
        question: "During which week of pregnancy does organogenesis primarily occur?",
        options: ["Weeks 1-2", "Weeks 3-8", "Weeks 10-15", "Weeks 20-25"],
        correct: "Weeks 3-8",
        explanation: "Organogenesis, the formation of major organs, occurs primarily during weeks 3-8 of pregnancy.",
        difficulty: "Medium",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 40,
        question: "What triggers ovulation in the menstrual cycle?",
        options: ["FSH surge", "LH surge", "Estrogen drop", "Progesterone rise"],
        correct: "LH surge",
        explanation: "A surge in luteinizing hormone (LH) triggers ovulation, causing the mature follicle to release the egg.",
        difficulty: "Medium",
        chapter: "Chapter 3: Reproduction and Development"
      },
      // Hard Questions
      {
        id: 41,
        question: "What is the role of sonic hedgehog (Shh) in development?",
        options: ["Cell death", "Pattern formation", "DNA replication", "Hormone production"],
        correct: "Pattern formation",
        explanation: "Sonic hedgehog is a signaling molecule crucial for establishing body axis and pattern formation during development.",
        difficulty: "Hard",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 42,
        question: "Which process explains how cells become specialized during development?",
        options: ["Differentiation", "Proliferation", "Migration", "Apoptosis"],
        correct: "Differentiation",
        explanation: "Cellular differentiation is the process by which cells become specialized for specific functions.",
        difficulty: "Hard",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 43,
        question: "What is the significance of the zona pellucida?",
        options: ["Hormone production", "Prevent polyspermy", "Nutrient transport", "Waste removal"],
        correct: "Prevent polyspermy",
        explanation: "The zona pellucida hardens after fertilization to prevent multiple sperm from entering the egg (polyspermy).",
        difficulty: "Hard",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 44,
        question: "What are Hox genes responsible for?",
        options: ["Cell division", "Body segment identity", "Hormone regulation", "Immune response"],
        correct: "Body segment identity",
        explanation: "Hox genes control the body plan of an embryo along the anterior-posterior axis and specify segment identity.",
        difficulty: "Hard",
        chapter: "Chapter 3: Reproduction and Development"
      },
      {
        id: 45,
        question: "What is neural crest cell migration and its significance?",
        options: ["Brain development only", "Formation of peripheral nervous system", "Heart formation", "Kidney development"],
        correct: "Formation of peripheral nervous system",
        explanation: "Neural crest cells migrate from the neural tube to form the peripheral nervous system, facial bones, and other structures.",
        difficulty: "Hard",
        chapter: "Chapter 3: Reproduction and Development"
      }
    ],
    "Chapter 4: Heredity and Genetics": [
      // Easy Questions
      {
        id: 46,
        question: "What is a gene?",
        options: ["A type of cell", "A unit of heredity", "A body organ", "A chemical reaction"],
        correct: "A unit of heredity",
        explanation: "A gene is a unit of heredity that is transferred from parent to offspring and determines traits.",
        difficulty: "Easy",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 47,
        question: "How many chromosomes do humans typically have?",
        options: ["23", "44", "46", "48"],
        correct: "46",
        explanation: "Humans typically have 46 chromosomes (23 pairs) in their somatic cells.",
        difficulty: "Easy",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 48,
        question: "What determines the sex of a human baby?",
        options: ["Mother's chromosomes only", "Father's chromosomes only", "Both parents equally", "Environmental factors"],
        correct: "Father's chromosomes only",
        explanation: "The father contributes either an X or Y chromosome, which determines the baby's sex (XX = female, XY = male).",
        difficulty: "Easy",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 49,
        question: "What is the difference between genotype and phenotype?",
        options: ["No difference", "Genotype is genetic makeup, phenotype is observable traits", "Phenotype is genetic makeup, genotype is observable traits", "Both refer to chromosomes"],
        correct: "Genotype is genetic makeup, phenotype is observable traits",
        explanation: "Genotype refers to the genetic composition, while phenotype refers to the observable characteristics.",
        difficulty: "Easy",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 50,
        question: "What is a dominant allele?",
        options: ["An allele that is always expressed", "An allele that is never expressed", "An allele that needs two copies to be expressed", "An allele that causes diseases"],
        correct: "An allele that is always expressed",
        explanation: "A dominant allele is expressed in the phenotype even when only one copy is present.",
        difficulty: "Easy",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      // Medium Questions
      {
        id: 51,
        question: "What is the probability of two heterozygous parents (Aa × Aa) having a homozygous recessive offspring?",
        options: ["0%", "25%", "50%", "75%"],
        correct: "25%",
        explanation: "In a cross between two heterozygotes (Aa × Aa), there's a 25% chance of producing aa offspring.",
        difficulty: "Medium",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 52,
        question: "What is codominance?",
        options: ["One allele dominates another", "Both alleles are equally expressed", "Neither allele is expressed", "Alleles blend together"],
        correct: "Both alleles are equally expressed",
        explanation: "In codominance, both alleles are fully expressed simultaneously in the phenotype, like in ABO blood types.",
        difficulty: "Medium",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 53,
        question: "Which type of inheritance pattern is shown by ABO blood groups?",
        options: ["Simple dominance", "Incomplete dominance", "Multiple alleles and codominance", "Sex-linked inheritance"],
        correct: "Multiple alleles and codominance",
        explanation: "ABO blood groups involve multiple alleles (A, B, O) with codominance between A and B alleles.",
        difficulty: "Medium",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 54,
        question: "What is a carrier in genetics?",
        options: ["Someone with a genetic disease", "Someone who transports genes", "Someone with one recessive allele for a trait", "Someone with no genetic variations"],
        correct: "Someone with one recessive allele for a trait",
        explanation: "A carrier has one recessive allele for a trait but doesn't express the trait phenotypically.",
        difficulty: "Medium",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 55,
        question: "What is the difference between autosomal and sex-linked inheritance?",
        options: ["No difference", "Autosomal involves autosomes, sex-linked involves sex chromosomes", "Autosomal is dominant, sex-linked is recessive", "Autosomal affects males, sex-linked affects females"],
        correct: "Autosomal involves autosomes, sex-linked involves sex chromosomes",
        explanation: "Autosomal inheritance involves genes on autosomes (chromosomes 1-22), while sex-linked involves genes on sex chromosomes.",
        difficulty: "Medium",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      // Hard Questions
      {
        id: 56,
        question: "What is genetic linkage and how does it affect inheritance?",
        options: ["Genes are always inherited together", "Genes close together on a chromosome tend to be inherited together", "All genes are linked", "Linkage prevents inheritance"],
        correct: "Genes close together on a chromosome tend to be inherited together",
        explanation: "Genetic linkage occurs when genes are located close together on the same chromosome and tend to be inherited as a unit.",
        difficulty: "Hard",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 57,
        question: "What is the molecular basis of Huntington's disease?",
        options: ["Chromosome deletion", "Point mutation", "Trinucleotide repeat expansion", "Chromosomal translocation"],
        correct: "Trinucleotide repeat expansion",
        explanation: "Huntington's disease is caused by an expansion of CAG trinucleotide repeats in the huntingtin gene.",
        difficulty: "Hard",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 58,
        question: "What is genomic imprinting?",
        options: ["DNA replication", "Parent-specific gene expression", "Chromosome pairing", "Gene mutation"],
        correct: "Parent-specific gene expression",
        explanation: "Genomic imprinting is an epigenetic phenomenon where gene expression depends on the parent of origin.",
        difficulty: "Hard",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 59,
        question: "How does crossing over during meiosis contribute to genetic diversity?",
        options: ["It prevents mutations", "It creates new allele combinations", "It reduces chromosome number", "It increases chromosome number"],
        correct: "It creates new allele combinations",
        explanation: "Crossing over exchanges genetic material between homologous chromosomes, creating new combinations of alleles.",
        difficulty: "Hard",
        chapter: "Chapter 4: Heredity and Genetics"
      },
      {
        id: 60,
        question: "What is haploinsufficiency?",
        options: ["Having too many chromosomes", "Loss of one functional copy of a gene causing disease", "Having unpaired chromosomes", "Complete gene deletion"],
        correct: "Loss of one functional copy of a gene causing disease",
        explanation: "Haploinsufficiency occurs when one functional copy of a gene is insufficient for normal function, leading to disease.",
        difficulty: "Hard",
        chapter: "Chapter 4: Heredity and Genetics"
      }
    ]
  },
  chemistry: {
    "Chapter 6: Chemical Equilibrium": [
      // Easy Questions
      {
        id: 61,
        question: "What is chemical equilibrium?",
        options: ["When all reactants are consumed", "When forward and reverse reaction rates are equal", "When no reaction occurs", "When products are formed"],
        correct: "When forward and reverse reaction rates are equal",
        explanation: "Chemical equilibrium occurs when the rates of forward and reverse reactions are equal, resulting in constant concentrations.",
        difficulty: "Easy",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 62,
        question: "What does the equilibrium constant (K) represent?",
        options: ["Reaction rate", "Temperature", "Ratio of products to reactants at equilibrium", "Activation energy"],
        correct: "Ratio of products to reactants at equilibrium",
        explanation: "The equilibrium constant K represents the ratio of product concentrations to reactant concentrations at equilibrium.",
        difficulty: "Easy",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 63,
        question: "If K > 1, what does this indicate about the equilibrium?",
        options: ["Reactants are favored", "Products are favored", "No reaction occurs", "Temperature is high"],
        correct: "Products are favored",
        explanation: "When K > 1, the equilibrium lies to the right, favoring product formation.",
        difficulty: "Easy",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 64,
        question: "What happens to equilibrium when temperature increases for an exothermic reaction?",
        options: ["Shifts to products", "Shifts to reactants", "No change", "Reaction stops"],
        correct: "Shifts to reactants",
        explanation: "For exothermic reactions, increasing temperature shifts equilibrium to the left (toward reactants) according to Le Chatelier's principle.",
        difficulty: "Easy",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 65,
        question: "What is Le Chatelier's principle?",
        options: ["Equilibrium always favors products", "System responds to oppose changes", "Temperature doesn't affect equilibrium", "Catalysts change equilibrium position"],
        correct: "System responds to oppose changes",
        explanation: "Le Chatelier's principle states that a system at equilibrium will respond to stress by shifting to oppose the change.",
        difficulty: "Easy",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      // Medium Questions
      {
        id: 66,
        question: "For the reaction N2(g) + 3H2(g) ⇌ 2NH3(g), what happens when pressure increases?",
        options: ["Shifts left", "Shifts right", "No change", "Reaction stops"],
        correct: "Shifts right",
        explanation: "Increasing pressure shifts equilibrium toward the side with fewer gas molecules (2 vs 4), favoring NH3 formation.",
        difficulty: "Medium",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 67,
        question: "What is the relationship between Kc and Kp for gaseous reactions?",
        options: ["Kp = Kc", "Kp = Kc(RT)^Δn", "Kc = Kp(RT)", "No relationship"],
        correct: "Kp = Kc(RT)^Δn",
        explanation: "For gaseous reactions, Kp = Kc(RT)^Δn, where Δn is the change in moles of gas and R is the gas constant.",
        difficulty: "Medium",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 68,
        question: "How does adding a catalyst affect chemical equilibrium?",
        options: ["Shifts to products", "Shifts to reactants", "No effect on position", "Changes K value"],
        correct: "No effect on position",
        explanation: "Catalysts increase reaction rates equally in both directions but don't change the equilibrium position or K value.",
        difficulty: "Medium",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 69,
        question: "What is the ice table method used for?",
        options: ["Measuring temperature", "Calculating equilibrium concentrations", "Determining reaction rate", "Finding activation energy"],
        correct: "Calculating equilibrium concentrations",
        explanation: "The ICE table (Initial, Change, Equilibrium) is used to calculate equilibrium concentrations systematically.",
        difficulty: "Medium",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 70,
        question: "For the reaction A + B ⇌ C + D, if [A] = [B] = 0.1 M and [C] = [D] = 0.9 M at equilibrium, what is K?",
        options: ["0.01", "1", "81", "100"],
        correct: "81",
        explanation: "K = [C][D]/[A][B] = (0.9)(0.9)/(0.1)(0.1) = 0.81/0.01 = 81",
        difficulty: "Medium",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      // Hard Questions
      {
        id: 71,
        question: "What is the relationship between ΔG° and the equilibrium constant?",
        options: ["ΔG° = RT ln K", "ΔG° = -RT ln K", "ΔG° = K/RT", "No relationship"],
        correct: "ΔG° = -RT ln K",
        explanation: "The standard Gibbs free energy change is related to the equilibrium constant by ΔG° = -RT ln K.",
        difficulty: "Hard",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 72,
        question: "For a reaction with multiple equilibria, how do you calculate the overall equilibrium constant?",
        options: ["Add individual K values", "Subtract K values", "Multiply K values", "Divide K values"],
        correct: "Multiply K values",
        explanation: "For multiple equilibria leading to an overall reaction, the overall K is the product of individual equilibrium constants.",
        difficulty: "Hard",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 73,
        question: "What is the principle behind the van't Hoff equation?",
        options: ["Pressure dependence of K", "Temperature dependence of K", "Volume dependence of K", "Concentration dependence of K"],
        correct: "Temperature dependence of K",
        explanation: "The van't Hoff equation describes how the equilibrium constant varies with temperature: d(ln K)/dT = ΔH°/RT²",
        difficulty: "Hard",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 74,
        question: "In heterogeneous equilibria, why are pure solids and liquids not included in the equilibrium expression?",
        options: ["They don't participate", "Their concentrations are constant", "They have no effect", "They are catalysts"],
        correct: "Their concentrations are constant",
        explanation: "Pure solids and liquids have constant concentrations (activities = 1) and are incorporated into the equilibrium constant.",
        difficulty: "Hard",
        chapter: "Chapter 6: Chemical Equilibrium"
      },
      {
        id: 75,
        question: "What is the significance of the reaction quotient (Q) compared to K?",
        options: ["Q = K always", "Q predicts reaction direction", "Q determines reaction rate", "Q measures temperature"],
        correct: "Q predicts reaction direction",
        explanation: "Comparing Q to K predicts reaction direction: if Q < K, reaction proceeds forward; if Q > K, reaction proceeds backward.",
        difficulty: "Hard",
        chapter: "Chapter 6: Chemical Equilibrium"
      }
    ],
    "Chapter 7: Acids and Bases": [
      // Easy Questions
      {
        id: 76,
        question: "What is the pH of a neutral solution at 25°C?",
        options: ["0", "7", "14", "1"],
        correct: "7",
        explanation: "At 25°C, pure water has a pH of 7, which is considered neutral (neither acidic nor basic).",
        difficulty: "Easy",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 77,
        question: "According to Arrhenius theory, what do acids produce in water?",
        options: ["OH⁻ ions", "H⁺ ions", "Electrons", "Neutrons"],
        correct: "H⁺ ions",
        explanation: "According to Arrhenius, acids are substances that produce hydrogen ions (H⁺) when dissolved in water.",
        difficulty: "Easy",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 78,
        question: "What is the pH range for acidic solutions?",
        options: ["0-7", "7-14", "0-14", "1-6"],
        correct: "0-7",
        explanation: "Acidic solutions have pH values less than 7, typically ranging from 0 to just below 7.",
        difficulty: "Easy",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 79,
        question: "What happens when an acid reacts with a base?",
        options: ["Explosion", "Neutralization", "Precipitation", "Gas formation"],
        correct: "Neutralization",
        explanation: "When acids and bases react, they undergo neutralization, producing water and a salt.",
        difficulty: "Easy",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 80,
        question: "Which indicator turns red in acidic solutions?",
        options: ["Phenolphthalein", "Litmus paper", "Methyl orange", "Universal indicator"],
        correct: "Litmus paper",
        explanation: "Red litmus paper remains red in acidic solutions, while blue litmus paper turns red in acids.",
        difficulty: "Easy",
        chapter: "Chapter 7: Acids and Bases"
      },
      // Medium Questions
      {
        id: 81,
        question: "What is the relationship between pH and pOH in aqueous solutions at 25°C?",
        options: ["pH + pOH = 7", "pH + pOH = 14", "pH - pOH = 14", "pH × pOH = 14"],
        correct: "pH + pOH = 14",
        explanation: "At 25°C, pH + pOH = 14 due to the ion product of water (Kw = 1.0 × 10⁻¹⁴).",
        difficulty: "Medium",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 82,
        question: "According to Brønsted-Lowry theory, what is a conjugate acid-base pair?",
        options: ["Two different acids", "An acid and base that differ by H⁺", "Two strong electrolytes", "Acid and base with same strength"],
        correct: "An acid and base that differ by H⁺",
        explanation: "A conjugate acid-base pair consists of two species that differ by the transfer of one proton (H⁺).",
        difficulty: "Medium",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 83,
        question: "What is the pH of a 0.01 M HCl solution?",
        options: ["1", "2", "12", "13"],
        correct: "2",
        explanation: "HCl is a strong acid, so [H⁺] = 0.01 M = 1.0 × 10⁻². pH = -log(0.01) = 2.",
        difficulty: "Medium",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 84,
        question: "What is a buffer solution?",
        options: ["Very concentrated acid", "Solution that resists pH change", "Solution with pH = 7", "Mixture of two acids"],
        correct: "Solution that resists pH change",
        explanation: "A buffer solution resists changes in pH when small amounts of acid or base are added.",
        difficulty: "Medium",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 85,
        question: "Which of the following is the strongest acid?",
        options: ["HF", "HCl", "HBr", "HI"],
        correct: "HI",
        explanation: "Among the hydrogen halides, HI is the strongest acid due to the weakest H-I bond.",
        difficulty: "Medium",
        chapter: "Chapter 7: Acids and Bases"
      },
      // Hard Questions
      {
        id: 86,
        question: "What is the Henderson-Hasselbalch equation used for?",
        options: ["Calculating reaction rates", "Determining buffer pH", "Finding equilibrium constants", "Measuring conductivity"],
        correct: "Determining buffer pH",
        explanation: "The Henderson-Hasselbalch equation (pH = pKa + log([A⁻]/[HA])) is used to calculate the pH of buffer solutions.",
        difficulty: "Hard",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 87,
        question: "For a weak acid HA with Ka = 1.0 × 10⁻⁵, what is the pH of a 0.1 M solution?",
        options: ["2", "3", "4", "5"],
        correct: "3",
        explanation: "For weak acids, pH ≈ ½(pKa - log C) = ½(5 - log 0.1) = ½(5 + 1) = 3.",
        difficulty: "Hard",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 88,
        question: "What is the principle behind acid-base titration curves?",
        options: ["Constant pH change", "Gradual then sharp pH change", "No pH change", "Random pH changes"],
        correct: "Gradual then sharp pH change",
        explanation: "Titration curves show gradual pH change initially, followed by a sharp change near the equivalence point.",
        difficulty: "Hard",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 89,
        question: "What is the autoionization constant of water (Kw) at 25°C?",
        options: ["1.0 × 10⁻⁷", "1.0 × 10⁻¹⁴", "1.0 × 10⁻¹²", "1.0 × 10⁻¹⁰"],
        correct: "1.0 × 10⁻¹⁴",
        explanation: "At 25°C, the ion product of water Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴.",
        difficulty: "Hard",
        chapter: "Chapter 7: Acids and Bases"
      },
      {
        id: 90,
        question: "In Lewis acid-base theory, what defines an acid?",
        options: ["Proton donor", "Electron pair donor", "Electron pair acceptor", "Hydroxide producer"],
        correct: "Electron pair acceptor",
        explanation: "According to Lewis theory, an acid is an electron pair acceptor, while a base is an electron pair donor.",
        difficulty: "Hard",
        chapter: "Chapter 7: Acids and Bases"
      }
    ],
    "Chapter 8: Redox Reactions and Electrochemistry": [
      // Easy Questions
      {
        id: 91,
        question: "What does 'redox' stand for?",
        options: ["Reduction-oxidation", "Reverse-direct oxidation", "Red-oxygen", "Radical-oxide"],
        correct: "Reduction-oxidation",
        explanation: "Redox is a combination of reduction and oxidation reactions that occur simultaneously.",
        difficulty: "Easy",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 92,
        question: "What happens to an atom when it is oxidized?",
        options: ["Gains electrons", "Loses electrons", "Gains protons", "Loses protons"],
        correct: "Loses electrons",
        explanation: "Oxidation involves the loss of electrons, which increases the oxidation state of the atom.",
        difficulty: "Easy",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 93,
        question: "What is the oxidation state of oxygen in most compounds?",
        options: ["+2", "0", "-1", "-2"],
        correct: "-2",
        explanation: "Oxygen typically has an oxidation state of -2 in most compounds (except in peroxides where it's -1).",
        difficulty: "Easy",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 94,
        question: "In a galvanic cell, where does oxidation occur?",
        options: ["Cathode", "Anode", "Salt bridge", "External circuit"],
        correct: "Anode",
        explanation: "In a galvanic cell, oxidation occurs at the anode, which is the negative terminal.",
        difficulty: "Easy",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 95,
        question: "What is the purpose of a salt bridge in an electrochemical cell?",
        options: ["Provide energy", "Complete the circuit", "Store electrons", "Generate voltage"],
        correct: "Complete the circuit",
        explanation: "The salt bridge allows ion flow to complete the electrical circuit and maintain charge neutrality.",
        difficulty: "Easy",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      // Medium Questions
      {
        id: 96,
        question: "What is the standard hydrogen electrode (SHE) used for?",
        options: ["Measuring pH", "Reference for electrode potentials", "Generating electricity", "Electrolysis"],
        correct: "Reference for electrode potentials",
        explanation: "The SHE serves as the reference electrode with a defined potential of 0.00 V for measuring other electrode potentials.",
        difficulty: "Medium",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 97,
        question: "How do you calculate the cell potential (E°cell) from standard reduction potentials?",
        options: ["E°cathode + E°anode", "E°cathode - E°anode", "E°anode - E°cathode", "E°cathode × E°anode"],
        correct: "E°cathode - E°anode",
        explanation: "The standard cell potential is calculated as E°cell = E°cathode - E°anode.",
        difficulty: "Medium",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 98,
        question: "What does a positive E°cell value indicate?",
        options: ["Non-spontaneous reaction", "Spontaneous reaction", "Equilibrium", "No reaction"],
        correct: "Spontaneous reaction",
        explanation: "A positive E°cell indicates that the redox reaction is thermodynamically spontaneous under standard conditions.",
        difficulty: "Medium",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 99,
        question: "In electrolysis, what happens at the cathode?",
        options: ["Oxidation", "Reduction", "Neutralization", "Precipitation"],
        correct: "Reduction",
        explanation: "During electrolysis, reduction (gain of electrons) occurs at the cathode, regardless of whether it's positive or negative.",
        difficulty: "Medium",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 100,
        question: "What is Faraday's first law of electrolysis?",
        options: ["Current is proportional to voltage", "Mass deposited is proportional to charge", "Resistance increases with temperature", "Power equals voltage times current"],
        correct: "Mass deposited is proportional to charge",
        explanation: "Faraday's first law states that the mass of substance deposited during electrolysis is proportional to the quantity of electric charge.",
        difficulty: "Medium",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      // Hard Questions
      {
        id: 101,
        question: "What is the Nernst equation used to calculate?",
        options: ["Standard potentials", "Cell potential under non-standard conditions", "Reaction rates", "Activation energy"],
        correct: "Cell potential under non-standard conditions",
        explanation: "The Nernst equation (E = E° - (RT/nF)ln Q) calculates cell potential under non-standard conditions.",
        difficulty: "Hard",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 102,
        question: "How is the equilibrium constant related to the standard cell potential?",
        options: ["K = E°", "ln K = nFE°/RT", "K = nFE°", "K = exp(-nFE°/RT)"],
        correct: "ln K = nFE°/RT",
        explanation: "The relationship between equilibrium constant and standard cell potential is ln K = nFE°/RT.",
        difficulty: "Hard",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 103,
        question: "What is overpotential in electrochemistry?",
        options: ["Excess voltage", "Additional voltage needed beyond theoretical", "Maximum voltage", "Minimum voltage"],
        correct: "Additional voltage needed beyond theoretical",
        explanation: "Overpotential is the additional voltage required beyond the theoretical cell potential to drive an electrochemical reaction at a measurable rate.",
        difficulty: "Hard",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 104,
        question: "In corrosion of iron, what acts as the cathode reaction?",
        options: ["Fe → Fe²⁺ + 2e⁻", "O₂ + 4H⁺ + 4e⁻ → 2H₂O", "H₂O → H⁺ + OH⁻", "Fe²⁺ → Fe³⁺ + e⁻"],
        correct: "O₂ + 4H⁺ + 4e⁻ → 2H₂O",
        explanation: "In iron corrosion, oxygen reduction (O₂ + 4H⁺ + 4e⁻ → 2H₂O) serves as the cathode reaction.",
        difficulty: "Hard",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      },
      {
        id: 105,
        question: "What is the relationship between ΔG and cell potential?",
        options: ["ΔG = nFE", "ΔG = -nFE", "ΔG = nF/E", "ΔG = E/nF"],
        correct: "ΔG = -nFE",
        explanation: "The Gibbs free energy change is related to cell potential by ΔG = -nFE, where n is electrons transferred and F is Faraday's constant.",
        difficulty: "Hard",
        chapter: "Chapter 8: Redox Reactions and Electrochemistry"
      }
    ],
    "Chapter 9: Organic Chemistry": [
      // Easy Questions
      {
        id: 106,
        question: "What is the main element in organic compounds?",
        options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
        correct: "Carbon",
        explanation: "Organic chemistry is primarily the study of carbon-containing compounds.",
        difficulty: "Easy",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 107,
        question: "What is the simplest alkane?",
        options: ["Ethane", "Propane", "Methane", "Butane"],
        correct: "Methane",
        explanation: "Methane (CH₄) is the simplest alkane with only one carbon atom.",
        difficulty: "Easy",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 108,
        question: "What type of bond do alkanes contain?",
        options: ["Single bonds only", "Double bonds only", "Triple bonds only", "Mixed bonds"],
        correct: "Single bonds only",
        explanation: "Alkanes are saturated hydrocarbons containing only single C-C and C-H bonds.",
        difficulty: "Easy",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 109,
        question: "What is the general formula for alkanes?",
        options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
        correct: "CₙH₂ₙ₊₂",
        explanation: "The general formula for alkanes is CₙH₂ₙ₊₂, where n is the number of carbon atoms.",
        difficulty: "Easy",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 110,
        question: "What functional group do alcohols contain?",
        options: ["-COOH", "-NH₂", "-OH", "-CHO"],
        correct: "-OH",
        explanation: "Alcohols contain the hydroxyl functional group (-OH) attached to a carbon atom.",
        difficulty: "Easy",
        chapter: "Chapter 9: Organic Chemistry"
      },
      // Medium Questions
      {
        id: 111,
        question: "What is the difference between primary, secondary, and tertiary alcohols?",
        options: ["Number of OH groups", "Number of carbons attached to the carbon bearing OH", "Size of the molecule", "Type of bonds"],
        correct: "Number of carbons attached to the carbon bearing OH",
        explanation: "Primary (1°) alcohols have the OH carbon attached to one other carbon, secondary (2°) to two carbons, and tertiary (3°) to three carbons.",
        difficulty: "Medium",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 112,
        question: "What is an isomer?",
        options: ["Same molecular formula, different structure", "Different molecular formula, same structure", "Same structure and formula", "Different in all aspects"],
        correct: "Same molecular formula, different structure",
        explanation: "Isomers are compounds with the same molecular formula but different structural arrangements.",
        difficulty: "Medium",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 113,
        question: "What is the IUPAC name for CH₃CH₂CH₂OH?",
        options: ["Propanol", "1-Propanol", "Propan-1-ol", "All of the above"],
        correct: "All of the above",
        explanation: "CH₃CH₂CH₂OH can be named as propanol, 1-propanol, or propan-1-ol according to IUPAC nomenclature.",
        difficulty: "Medium",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 114,
        question: "What happens during the combustion of alkanes?",
        options: ["They decompose", "They react with oxygen to form CO₂ and H₂O", "They form alcohols", "They polymerize"],
        correct: "They react with oxygen to form CO₂ and H₂O",
        explanation: "Complete combustion of alkanes produces carbon dioxide and water: CₙH₂ₙ₊₂ + O₂ → CO₂ + H₂O",
        difficulty: "Medium",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 115,
        question: "What is the functional group of carboxylic acids?",
        options: ["-OH", "-CHO", "-COOH", "-CO-"],
        correct: "-COOH",
        explanation: "Carboxylic acids contain the carboxyl functional group (-COOH), which consists of both carbonyl and hydroxyl groups.",
        difficulty: "Medium",
        chapter: "Chapter 9: Organic Chemistry"
      },
      // Hard Questions
      {
        id: 116,
        question: "What is the mechanism of nucleophilic substitution in alcohols?",
        options: ["SN1 and SN2", "E1 and E2", "Addition", "Condensation"],
        correct: "SN1 and SN2",
        explanation: "Alcohols can undergo nucleophilic substitution via SN1 (unimolecular) or SN2 (bimolecular) mechanisms depending on the alcohol structure.",
        difficulty: "Hard",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 117,
        question: "What is Markovnikov's rule?",
        options: ["Addition occurs at the most substituted carbon", "Hydrogen adds to the carbon with more hydrogens", "Addition is always anti", "Elimination always occurs"],
        correct: "Hydrogen adds to the carbon with more hydrogens",
        explanation: "Markovnikov's rule states that in the addition of HX to an alkene, hydrogen adds to the carbon that already has more hydrogen atoms.",
        difficulty: "Hard",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 118,
        question: "What is the difference between E and Z isomers?",
        options: ["Number of carbons", "Position of substituents around double bond", "Type of functional group", "Molecular weight"],
        correct: "Position of substituents around double bond",
        explanation: "E and Z notation describes the geometric arrangement of substituents around a double bond based on priority rules.",
        difficulty: "Hard",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 119,
        question: "What is the role of a chiral center in organic molecules?",
        options: ["Increases reactivity", "Creates optical activity", "Changes boiling point", "Affects solubility only"],
        correct: "Creates optical activity",
        explanation: "A chiral center (carbon bonded to four different groups) creates optical activity, allowing the molecule to rotate plane-polarized light.",
        difficulty: "Hard",
        chapter: "Chapter 9: Organic Chemistry"
      },
      {
        id: 120,
        question: "What is the mechanism of esterification?",
        options: ["Nucleophilic addition", "Nucleophilic acyl substitution", "Electrophilic addition", "Free radical substitution"],
        correct: "Nucleophilic acyl substitution",
        explanation: "Esterification involves nucleophilic acyl substitution where the alcohol acts as a nucleophile attacking the carbonyl carbon of the carboxylic acid.",
        difficulty: "Hard",
        chapter: "Chapter 9: Organic Chemistry"
      }
    ]
  }
};

export const getQuestionsForQuiz = (subject: string, chapter: string, difficulty: 'Easy' | 'Medium' | 'Hard', questionCount: number = 5): QuizQuestion[] => {
  const subjectData = naturalScienceQuizzes[subject.toLowerCase()];
  if (!subjectData) return [];
  
  const chapterData = subjectData[chapter];
  if (!chapterData) return [];
  
  const filteredQuestions = chapterData.filter(q => q.difficulty === difficulty);
  
  // Return up to the requested number of questions, shuffled
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(questionCount, shuffled.length));
};
