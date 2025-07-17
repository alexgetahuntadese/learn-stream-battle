
interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

interface UnitQuestions {
  easy: Question[];
  medium: Question[];
  hard: Question[];
}

export const grade12BiologyQuestions: { [unit: string]: UnitQuestions } = {
  'Unit 1: Application of Biology': {
    easy: [
      {
        id: 'bio12_u1_e1',
        question: 'What is the main focus of applied biology?',
        options: ['Using biological knowledge to solve real-world problems', 'Studying only theoretical concepts', 'Memorizing biological facts', 'Avoiding practical applications'],
        correct: 'Using biological knowledge to solve real-world problems',
        explanation: 'Applied biology focuses on using biological knowledge and principles to address practical problems and improve human life.'
      },
      {
        id: 'bio12_u1_e2',
        question: 'Which field combines biology with engineering principles?',
        options: ['Bioengineering', 'Pure biology', 'Mathematics', 'Chemistry'],
        correct: 'Bioengineering',
        explanation: 'Bioengineering (or biomedical engineering) combines biological sciences with engineering principles to develop solutions for medical and biological problems.'
      },
      {
        id: 'bio12_u1_e3',
        question: 'What is biotechnology?',
        options: ['The use of living organisms to develop products', 'The study of rocks', 'The study of weather', 'The study of space'],
        correct: 'The use of living organisms to develop products',
        explanation: 'Biotechnology is the use of living organisms, cells, or biological processes to develop products and technologies that improve human life.'
      },
      {
        id: 'bio12_u1_e4',
        question: 'Which of the following is an example of applied biology?',
        options: ['Medicine', 'Astronomy', 'Geology', 'Physics'],
        correct: 'Medicine',
        explanation: 'Medicine is a direct application of biological knowledge to treat diseases and improve human health.'
      },
      {
        id: 'bio12_u1_e5',
        question: 'What is the role of biology in agriculture?',
        options: ['Improving crop yields and quality', 'Building machines', 'Creating software', 'Studying planets'],
        correct: 'Improving crop yields and quality',
        explanation: 'Biology helps in developing better crops, understanding plant diseases, and improving agricultural practices.'
      },
      {
        id: 'bio12_u1_e6',
        question: 'Which field studies the application of biology in environmental protection?',
        options: ['Environmental biology', 'Pure mathematics', 'Computer science', 'Mechanical engineering'],
        correct: 'Environmental biology',
        explanation: 'Environmental biology applies biological principles to understand and solve environmental problems.'
      },
      {
        id: 'bio12_u1_e7',
        question: 'What is the main goal of medical biotechnology?',
        options: ['Developing treatments and cures for diseases', 'Creating entertainment', 'Building houses', 'Making clothes'],
        correct: 'Developing treatments and cures for diseases',
        explanation: 'Medical biotechnology focuses on using biological processes to develop medical treatments, vaccines, and cures.'
      },
      {
        id: 'bio12_u1_e8',
        question: 'Which of these is an application of biology in industry?',
        options: ['Fermentation processes', 'Metal welding', 'Road construction', 'Car manufacturing'],
        correct: 'Fermentation processes',
        explanation: 'Fermentation is a biological process used in industries to produce food, beverages, and other products.'
      },
      {
        id: 'bio12_u1_e9',
        question: 'What is the importance of biology in food production?',
        options: ['Ensuring food safety and quality', 'Building cooking equipment', 'Creating recipes', 'Designing restaurants'],
        correct: 'Ensuring food safety and quality',
        explanation: 'Biology helps in understanding food safety, preservation, nutrition, and quality control in food production.'
      },
      {
        id: 'bio12_u1_e10',
        question: 'Which career directly applies biological knowledge?',
        options: ['Veterinarian', 'Accountant', 'Lawyer', 'Pilot'],
        correct: 'Veterinarian',
        explanation: 'Veterinarians apply biological knowledge to treat and care for animals.'
      }
    ],
    medium: [
      {
        id: 'bio12_u1_m1',
        question: 'What is genetic engineering primarily used for?',
        options: ['Modifying genes to create desired traits', 'Building computers', 'Creating art', 'Studying history'],
        correct: 'Modifying genes to create desired traits',
        explanation: 'Genetic engineering involves manipulating genes to produce organisms with desired characteristics.'
      },
      {
        id: 'bio12_u1_m2',
        question: 'Which technique is used to produce insulin for diabetics?',
        options: ['Recombinant DNA technology', 'Solar energy', 'Nuclear fusion', 'Chemical synthesis only'],
        correct: 'Recombinant DNA technology',
        explanation: 'Recombinant DNA technology is used to produce human insulin in bacteria for treating diabetes.'
      },
      {
        id: 'bio12_u1_m3',
        question: 'What is the role of enzymes in industrial biotechnology?',
        options: ['Catalyzing specific reactions', 'Providing energy', 'Storing information', 'Building structures'],
        correct: 'Catalyzing specific reactions',
        explanation: 'Enzymes are used in industry as biological catalysts to speed up specific chemical reactions.'
      },
      {
        id: 'bio12_u1_m4',
        question: 'Which organism is commonly used in biotechnology for protein production?',
        options: ['E. coli bacteria', 'Oak trees', 'Lions', 'Rocks'],
        correct: 'E. coli bacteria',
        explanation: 'E. coli bacteria are commonly used in biotechnology because they can be easily modified to produce proteins.'
      },
      {
        id: 'bio12_u1_m5',
        question: 'What is bioremediation?',
        options: ['Using organisms to clean up environmental pollutants', 'Building new cities', 'Creating music', 'Painting pictures'],
        correct: 'Using organisms to clean up environmental pollutants',
        explanation: 'Bioremediation uses living organisms to remove or neutralize environmental contaminants.'
      },
      {
        id: 'bio12_u1_m6',
        question: 'Which field combines biology with computer science?',
        options: ['Bioinformatics', 'Pure chemistry', 'Mechanical engineering', 'Literature'],
        correct: 'Bioinformatics',
        explanation: 'Bioinformatics uses computational methods to analyze biological data and solve biological problems.'
      },
      {
        id: 'bio12_u1_m7',
        question: 'What is tissue engineering?',
        options: ['Creating biological tissues for medical use', 'Building machines', 'Designing clothes', 'Writing books'],
        correct: 'Creating biological tissues for medical use',
        explanation: 'Tissue engineering involves growing biological tissues in the laboratory for medical applications.'
      },
      {
        id: 'bio12_u1_m8',
        question: 'Which application of biology helps in crime investigation?',
        options: ['DNA fingerprinting', 'Weather forecasting', 'Stock market analysis', 'Music composition'],
        correct: 'DNA fingerprinting',
        explanation: 'DNA fingerprinting uses biological techniques to identify individuals in criminal investigations.'
      },
      {
        id: 'bio12_u1_m9',
        question: 'What is the purpose of biological pest control?',
        options: ['Using natural enemies to control pests', 'Building stronger buildings', 'Creating entertainment', 'Improving transportation'],
        correct: 'Using natural enemies to control pests',
        explanation: 'Biological pest control uses natural predators or parasites to control harmful pests in agriculture.'
      },
      {
        id: 'bio12_u1_m10',
        question: 'Which biotechnology application helps in organ transplantation?',
        options: ['Immunosuppressive therapy', 'Solar panels', 'Computer programming', 'Road construction'],
        correct: 'Immunosuppressive therapy',
        explanation: 'Immunosuppressive therapy uses biological knowledge to prevent organ rejection in transplant patients.'
      }
    ],
    hard: [
      {
        id: 'bio12_u1_h1',
        question: 'What is CRISPR-Cas9 technology primarily used for?',
        options: ['Precise gene editing', 'Weather prediction', 'Building construction', 'Music production'],
        correct: 'Precise gene editing',
        explanation: 'CRISPR-Cas9 is a revolutionary gene-editing technology that allows precise modification of DNA sequences.'
      },
      {
        id: 'bio12_u1_h2',
        question: 'Which technique is used to produce monoclonal antibodies?',
        options: ['Hybridoma technology', 'Solar energy conversion', 'Metal forging', 'Oil refining'],
        correct: 'Hybridoma technology',
        explanation: 'Hybridoma technology fuses immune cells with immortal cells to produce monoclonal antibodies for medical use.'
      },
      {
        id: 'bio12_u1_h3',
        question: 'What is the principle behind PCR (Polymerase Chain Reaction)?',
        options: ['Amplifying specific DNA sequences', 'Generating electricity', 'Creating music', 'Building bridges'],
        correct: 'Amplifying specific DNA sequences',
        explanation: 'PCR uses repeated cycles of heating and cooling to amplify specific DNA sequences millions of times.'
      },
      {
        id: 'bio12_u1_h4',
        question: 'Which application uses stem cells for therapeutic purposes?',
        options: ['Regenerative medicine', 'Computer manufacturing', 'Food packaging', 'Textile production'],
        correct: 'Regenerative medicine',
        explanation: 'Regenerative medicine uses stem cells to repair or replace damaged tissues and organs.'
      },
      {
        id: 'bio12_u1_h5',
        question: 'What is pharmacogenomics?',
        options: ['Study of how genes affect drug response', 'Study of plant growth', 'Study of weather patterns', 'Study of rock formations'],
        correct: 'Study of how genes affect drug response',
        explanation: 'Pharmacogenomics studies how genetic variations affect individual responses to medications.'
      },
      {
        id: 'bio12_u1_h6',
        question: 'Which biotechnology application involves modifying organisms to produce pharmaceuticals?',
        options: ['Biopharming', 'Mining', 'Logging', 'Fishing'],
        correct: 'Biopharming',
        explanation: 'Biopharming uses genetically modified plants or animals to produce pharmaceutical compounds.'
      },
      {
        id: 'bio12_u1_h7',
        question: 'What is synthetic biology?',
        options: ['Engineering biological systems for specific purposes', 'Creating artificial weather', 'Building virtual reality', 'Composing digital music'],
        correct: 'Engineering biological systems for specific purposes',
        explanation: 'Synthetic biology involves designing and constructing new biological parts and systems for useful purposes.'
      },
      {
        id: 'bio12_u1_h8',
        question: 'Which technique is used in gene therapy?',
        options: ['Introducing functional genes into cells', 'Building robots', 'Creating websites', 'Designing fashion'],
        correct: 'Introducing functional genes into cells',
        explanation: 'Gene therapy involves introducing healthy genes into cells to treat or prevent genetic diseases.'
      },
      {
        id: 'bio12_u1_h9',
        question: 'What is the role of biomarkers in personalized medicine?',
        options: ['Predicting treatment response', 'Building houses', 'Creating entertainment', 'Designing vehicles'],
        correct: 'Predicting treatment response',
        explanation: 'Biomarkers are biological indicators used to predict how patients will respond to specific treatments.'
      },
      {
        id: 'bio12_u1_h10',
        question: 'Which application uses biological systems to produce biofuels?',
        options: ['Metabolic engineering', 'Nuclear physics', 'Mechanical engineering', 'Civil engineering'],
        correct: 'Metabolic engineering',
        explanation: 'Metabolic engineering modifies cellular metabolism to produce biofuels from biological materials.'
      }
    ]
  },
  'Unit 2: Microorganisms': {
    easy: [
      {
        id: 'bio12_u2_e1',
        question: 'What are microorganisms?',
        options: ['Microscopic living organisms', 'Large animals', 'Plants only', 'Non-living things'],
        correct: 'Microscopic living organisms',
        explanation: 'Microorganisms are tiny living things that can only be seen with a microscope.'
      },
      {
        id: 'bio12_u2_e2',
        question: 'Which of these is a type of microorganism?',
        options: ['Bacteria', 'Elephants', 'Trees', 'Rocks'],
        correct: 'Bacteria',
        explanation: 'Bacteria are single-celled microorganisms that are found everywhere in the environment.'
      },
      {
        id: 'bio12_u2_e3',
        question: 'What do we call microorganisms that cause disease?',
        options: ['Pathogens', 'Nutrients', 'Vitamins', 'Minerals'],
        correct: 'Pathogens',
        explanation: 'Pathogens are microorganisms that can cause disease in humans, animals, or plants.'
      },
      {
        id: 'bio12_u2_e4',
        question: 'Which microorganism is used to make bread rise?',
        options: ['Yeast', 'Virus', 'Algae', 'Protozoa'],
        correct: 'Yeast',
        explanation: 'Yeast is a fungus that ferments sugars and produces carbon dioxide, which makes bread rise.'
      },
      {
        id: 'bio12_u2_e5',
        question: 'What is the basic structure of a virus?',
        options: ['Genetic material surrounded by protein coat', 'Cell wall and nucleus', 'Chloroplasts and mitochondria', 'Blood and bones'],
        correct: 'Genetic material surrounded by protein coat',
        explanation: 'Viruses consist of genetic material (DNA or RNA) enclosed in a protein coat called a capsid.'
      },
      {
        id: 'bio12_u2_e6',
        question: 'Which microorganism can photosynthesize?',
        options: ['Algae', 'Bacteria only', 'Viruses', 'Fungi'],
        correct: 'Algae',
        explanation: 'Algae are microorganisms that contain chlorophyll and can perform photosynthesis.'
      },
      {
        id: 'bio12_u2_e7',
        question: 'What do beneficial bacteria in our gut help with?',
        options: ['Digestion', 'Breathing', 'Hearing', 'Seeing'],
        correct: 'Digestion',
        explanation: 'Beneficial bacteria in the gut help break down food and aid in the digestion process.'
      },
      {
        id: 'bio12_u2_e8',
        question: 'Which method is commonly used to kill harmful microorganisms?',
        options: ['Sterilization', 'Fertilization', 'Pollination', 'Hibernation'],
        correct: 'Sterilization',
        explanation: 'Sterilization is the process of killing or removing all microorganisms from an object or surface.'
      },
      {
        id: 'bio12_u2_e9',
        question: 'What is fermentation?',
        options: ['A process where microorganisms break down sugars', 'Building houses', 'Growing plants', 'Swimming'],
        correct: 'A process where microorganisms break down sugars',
        explanation: 'Fermentation is a metabolic process where microorganisms convert sugars into other compounds like alcohol or acids.'
      },
      {
        id: 'bio12_u2_e10',
        question: 'Which disease is caused by bacteria?',
        options: ['Tuberculosis', 'Common cold', 'Malaria', 'Diabetes'],
        correct: 'Tuberculosis',
        explanation: 'Tuberculosis is a bacterial infection caused by Mycobacterium tuberculosis.'
      }
    ],
    medium: [
      {
        id: 'bio12_u2_m1',
        question: 'What is the difference between gram-positive and gram-negative bacteria?',
        options: ['Cell wall structure', 'Size', 'Color', 'Shape only'],
        correct: 'Cell wall structure',
        explanation: 'Gram-positive bacteria have thick peptidoglycan cell walls, while gram-negative bacteria have thin peptidoglycan walls with an outer membrane.'
      },
      {
        id: 'bio12_u2_m2',
        question: 'Which type of reproduction is common in bacteria?',
        options: ['Binary fission', 'Sexual reproduction only', 'Budding only', 'Fragmentation only'],
        correct: 'Binary fission',
        explanation: 'Binary fission is the primary method of reproduction in bacteria, where one cell divides into two identical cells.'
      },
      {
        id: 'bio12_u2_m3',
        question: 'What is an antibiotic?',
        options: ['A substance that kills or inhibits bacteria', 'A type of virus', 'A plant hormone', 'A type of food'],
        correct: 'A substance that kills or inhibits bacteria',
        explanation: 'Antibiotics are medications that either kill bacteria or prevent their growth and reproduction.'
      },
      {
        id: 'bio12_u2_m4',
        question: 'Which structure helps bacteria move?',
        options: ['Flagella', 'Nucleus', 'Chloroplasts', 'Mitochondria'],
        correct: 'Flagella',
        explanation: 'Flagella are whip-like structures that help bacteria swim and move through liquid environments.'
      },
      {
        id: 'bio12_u2_m5',
        question: 'What is the role of fungi in ecosystems?',
        options: ['Decomposers', 'Primary producers only', 'Top predators', 'Herbivores only'],
        correct: 'Decomposers',
        explanation: 'Fungi play a crucial role as decomposers, breaking down dead organic matter and recycling nutrients.'
      },
      {
        id: 'bio12_u2_m6',
        question: 'How do viruses reproduce?',
        options: ['By hijacking host cell machinery', 'By binary fission', 'By photosynthesis', 'By breathing'],
        correct: 'By hijacking host cell machinery',
        explanation: 'Viruses cannot reproduce on their own and must infect host cells to use their machinery for replication.'
      },
      {
        id: 'bio12_u2_m7',
        question: 'What is pasteurization?',
        options: ['Heat treatment to kill harmful microorganisms', 'Growing plants', 'Building structures', 'Creating art'],
        correct: 'Heat treatment to kill harmful microorganisms',
        explanation: 'Pasteurization is a process that uses controlled heat to kill harmful microorganisms in food and beverages.'
      },
      {
        id: 'bio12_u2_m8',
        question: 'Which microorganism causes malaria?',
        options: ['Plasmodium (protozoa)', 'Bacteria', 'Virus', 'Fungus'],
        correct: 'Plasmodium (protozoa)',
        explanation: 'Malaria is caused by Plasmodium, a parasitic protozoan transmitted by mosquitoes.'
      },
      {
        id: 'bio12_u2_m9',
        question: 'What is antibiotic resistance?',
        options: ['Bacteria evolving to survive antibiotic treatment', 'Viruses becoming stronger', 'Plants growing faster', 'Animals becoming larger'],
        correct: 'Bacteria evolving to survive antibiotic treatment',
        explanation: 'Antibiotic resistance occurs when bacteria develop mechanisms to survive exposure to antibiotics.'
      },
      {
        id: 'bio12_u2_m10',
        question: 'Which process do some bacteria use to obtain energy without oxygen?',
        options: ['Anaerobic respiration', 'Photosynthesis only', 'Aerobic respiration only', 'Digestion'],
        correct: 'Anaerobic respiration',
        explanation: 'Anaerobic respiration allows bacteria to generate energy without using oxygen as the final electron acceptor.'
      }
    ],
    hard: [
      {
        id: 'bio12_u2_h1',
        question: 'What is horizontal gene transfer in bacteria?',
        options: ['Transfer of genes between bacterial cells', 'Vertical inheritance only', 'Cell division', 'Energy production'],
        correct: 'Transfer of genes between bacterial cells',
        explanation: 'Horizontal gene transfer allows bacteria to share genetic material with other bacterial cells, contributing to evolution and antibiotic resistance.'
      },
      {
        id: 'bio12_u2_h2',
        question: 'Which mechanism do bacteria use for conjugation?',
        options: ['Pilus formation', 'Photosynthesis', 'Respiration', 'Digestion'],
        correct: 'Pilus formation',
        explanation: 'Conjugation involves the formation of a pilus (bridge) between bacterial cells to transfer genetic material.'
      },
      {
        id: 'bio12_u2_h3',
        question: 'What is the significance of endospores in bacteria?',
        options: ['Survival in harsh conditions', 'Faster reproduction', 'Better nutrition', 'Improved movement'],
        correct: 'Survival in harsh conditions',
        explanation: 'Endospores are highly resistant structures that allow bacteria to survive extreme conditions like heat, radiation, and chemicals.'
      },
      {
        id: 'bio12_u2_h4',
        question: 'Which viral replication cycle involves integration into the host genome?',
        options: ['Lysogenic cycle', 'Lytic cycle only', 'Photosynthesis', 'Respiration'],
        correct: 'Lysogenic cycle',
        explanation: 'In the lysogenic cycle, viral DNA integrates into the host cell\'s genome and remains dormant until activated.'
      },
      {
        id: 'bio12_u2_h5',
        question: 'What is quorum sensing in bacteria?',
        options: ['Cell-to-cell communication', 'Individual cell growth', 'Energy production', 'Waste removal'],
        correct: 'Cell-to-cell communication',
        explanation: 'Quorum sensing is a bacterial communication system that allows cells to coordinate behavior based on population density.'
      },
      {
        id: 'bio12_u2_h6',
        question: 'Which enzyme do restriction enzymes target in bacteria?',
        options: ['Foreign DNA', 'Proteins only', 'Lipids only', 'Carbohydrates only'],
        correct: 'Foreign DNA',
        explanation: 'Restriction enzymes are part of bacterial defense systems that cut foreign DNA at specific recognition sequences.'
      },
      {
        id: 'bio12_u2_h7',
        question: 'What is the role of biofilms in bacterial communities?',
        options: ['Protection and cooperation', 'Individual survival only', 'Faster movement', 'Energy storage'],
        correct: 'Protection and cooperation',
        explanation: 'Biofilms are structured communities of bacteria embedded in a protective matrix that enhances survival and cooperation.'
      },
      {
        id: 'bio12_u2_h8',
        question: 'Which mechanism allows some bacteria to fix nitrogen?',
        options: ['Nitrogenase enzyme', 'Photosynthesis only', 'Fermentation only', 'Respiration only'],
        correct: 'Nitrogenase enzyme',
        explanation: 'Nitrogenase is the enzyme complex that allows nitrogen-fixing bacteria to convert atmospheric nitrogen into ammonia.'
      },
      {
        id: 'bio12_u2_h9',
        question: 'What is the difference between bacteriophages and other viruses?',
        options: ['They specifically infect bacteria', 'They are larger', 'They contain more DNA', 'They reproduce faster'],
        correct: 'They specifically infect bacteria',
        explanation: 'Bacteriophages are viruses that specifically target and infect bacterial cells.'
      },
      {
        id: 'bio12_u2_h10',
        question: 'Which process involves bacteria converting organic matter in oxygen-depleted environments?',
        options: ['Anaerobic digestion', 'Photosynthesis', 'Aerobic respiration', 'Protein synthesis'],
        correct: 'Anaerobic digestion',
        explanation: 'Anaerobic digestion is the process where bacteria break down organic matter in the absence of oxygen, producing methane and other compounds.'
      }
    ]
  },
  'Unit 3: Energy transformation': {
    easy: [
      {
        id: 'bio12_u3_e1',
        question: 'What is energy transformation?',
        options: ['Converting one form of energy to another', 'Creating energy from nothing', 'Destroying energy', 'Storing energy permanently'],
        correct: 'Converting one form of energy to another',
        explanation: 'Energy transformation is the process of changing energy from one form to another, following the law of conservation of energy.'
      },
      {
        id: 'bio12_u3_e2',
        question: 'Which process converts light energy into chemical energy?',
        options: ['Photosynthesis', 'Respiration', 'Digestion', 'Excretion'],
        correct: 'Photosynthesis',
        explanation: 'Photosynthesis converts light energy from the sun into chemical energy stored in glucose molecules.'
      },
      {
        id: 'bio12_u3_e3',
        question: 'What is ATP?',
        options: ['Energy currency of cells', 'A type of protein', 'A vitamin', 'A mineral'],
        correct: 'Energy currency of cells',
        explanation: 'ATP (Adenosine Triphosphate) is the primary energy currency used by cells for various biological processes.'
      },
      {
        id: 'bio12_u3_e4',
        question: 'Where does photosynthesis occur in plant cells?',
        options: ['Chloroplasts', 'Nucleus', 'Mitochondria', 'Vacuole'],
        correct: 'Chloroplasts',
        explanation: 'Photosynthesis occurs in chloroplasts, which contain the green pigment chlorophyll that captures light energy.'
      },
      {
        id: 'bio12_u3_e5',
        question: 'What is cellular respiration?',
        options: ['Breaking down glucose to release energy', 'Making glucose from light', 'Building proteins', 'Storing water'],
        correct: 'Breaking down glucose to release energy',
        explanation: 'Cellular respiration is the process of breaking down glucose and other molecules to release energy in the form of ATP.'
      },
      {
        id: 'bio12_u3_e6',
        question: 'Which gas is produced during photosynthesis?',
        options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
        correct: 'Oxygen',
        explanation: 'Oxygen is released as a byproduct during photosynthesis when water molecules are split.'
      },
      {
        id: 'bio12_u3_e7',
        question: 'What do plants need for photosynthesis?',
        options: ['Light, carbon dioxide, and water', 'Only water', 'Only light', 'Only carbon dioxide'],
        correct: 'Light, carbon dioxide, and water',
        explanation: 'Photosynthesis requires light energy, carbon dioxide from the air, and water from the soil.'
      },
      {
        id: 'bio12_u3_e8',
        question: 'Where does cellular respiration occur?',
        options: ['Mitochondria', 'Chloroplasts', 'Nucleus', 'Cell wall'],
        correct: 'Mitochondria',
        explanation: 'Cellular respiration primarily occurs in mitochondria, which are known as the powerhouses of the cell.'
      },
      {
        id: 'bio12_u3_e9',
        question: 'What is the main product of photosynthesis?',
        options: ['Glucose', 'Protein', 'Fat', 'Mineral'],
        correct: 'Glucose',
        explanation: 'Glucose is the main product of photosynthesis, serving as a source of energy and building material for plants.'
      },
      {
        id: 'bio12_u3_e10',
        question: 'Which process releases carbon dioxide?',
        options: ['Cellular respiration', 'Photosynthesis', 'Protein synthesis', 'DNA replication'],
        correct: 'Cellular respiration',
        explanation: 'Cellular respiration releases carbon dioxide as a waste product when glucose is broken down for energy.'
      }
    ],
    medium: [
      {
        id: 'bio12_u3_m1',
        question: 'What are the two main stages of photosynthesis?',
        options: ['Light-dependent and light-independent reactions', 'Day and night reactions', 'Fast and slow reactions', 'Hot and cold reactions'],
        correct: 'Light-dependent and light-independent reactions',
        explanation: 'Photosynthesis consists of light-dependent reactions (photo reactions) and light-independent reactions (Calvin cycle).'
      },
      {
        id: 'bio12_u3_m2',
        question: 'What is the role of chlorophyll in photosynthesis?',
        options: ['Absorbing light energy', 'Storing water', 'Producing oxygen', 'Breaking down glucose'],
        correct: 'Absorbing light energy',
        explanation: 'Chlorophyll is the green pigment that absorbs light energy, particularly red and blue wavelengths, for photosynthesis.'
      },
      {
        id: 'bio12_u3_m3',
        question: 'Which molecule carries energy within cells?',
        options: ['ATP', 'DNA', 'RNA', 'Protein'],
        correct: 'ATP',
        explanation: 'ATP (Adenosine Triphosphate) is the primary energy-carrying molecule in cells.'
      },
      {
        id: 'bio12_u3_m4',
        question: 'What happens during glycolysis?',
        options: ['Glucose is broken down into pyruvate', 'Glucose is made from light', 'Proteins are synthesized', 'DNA is replicated'],
        correct: 'Glucose is broken down into pyruvate',
        explanation: 'Glycolysis is the first stage of cellular respiration where glucose is broken down into two pyruvate molecules.'
      },
      {
        id: 'bio12_u3_m5',
        question: 'What is the Calvin cycle?',
        options: ['Light-independent reactions of photosynthesis', 'Light-dependent reactions', 'Part of cellular respiration', 'DNA replication process'],
        correct: 'Light-independent reactions of photosynthesis',
        explanation: 'The Calvin cycle is the light-independent phase of photosynthesis where carbon dioxide is fixed into glucose.'
      },
      {
        id: 'bio12_u3_m6',
        question: 'Which process produces the most ATP?',
        options: ['Aerobic respiration', 'Fermentation', 'Photosynthesis', 'Protein synthesis'],
        correct: 'Aerobic respiration',
        explanation: 'Aerobic respiration produces the most ATP (about 36-38 molecules per glucose) compared to other cellular processes.'
      },
      {
        id: 'bio12_u3_m7',
        question: 'What is fermentation?',
        options: ['Anaerobic breakdown of glucose', 'Aerobic breakdown of glucose', 'Synthesis of glucose', 'Storage of glucose'],
        correct: 'Anaerobic breakdown of glucose',
        explanation: 'Fermentation is the anaerobic breakdown of glucose that produces less ATP than aerobic respiration.'
      },
      {
        id: 'bio12_u3_m8',
        question: 'Which wavelengths of light are most effective for photosynthesis?',
        options: ['Red and blue', 'Green and yellow', 'Only white', 'Only infrared'],
        correct: 'Red and blue',
        explanation: 'Red and blue wavelengths are most effectively absorbed by chlorophyll for photosynthesis.'
      },
      {
        id: 'bio12_u3_m9',
        question: 'What is the function of NADH in cellular respiration?',
        options: ['Electron carrier', 'Energy storage', 'Glucose synthesis', 'Protein building'],
        correct: 'Electron carrier',
        explanation: 'NADH is an electron carrier that transfers electrons to the electron transport chain in cellular respiration.'
      },
      {
        id: 'bio12_u3_m10',
        question: 'Where do the light-dependent reactions occur?',
        options: ['Thylakoid membranes', 'Stroma', 'Nucleus', 'Cytoplasm'],
        correct: 'Thylakoid membranes',
        explanation: 'Light-dependent reactions occur in the thylakoid membranes of chloroplasts where chlorophyll is located.'
      }
    ],
    hard: [
      {
        id: 'bio12_u3_h1',
        question: 'What is the net equation for photosynthesis?',
        options: ['6CO2 + 6H2O + light → C6H12O6 + 6O2', '6O2 + 6H2O → C6H12O6 + 6CO2', 'C6H12O6 → 6CO2 + 6H2O', 'ATP → ADP + Pi'],
        correct: '6CO2 + 6H2O + light → C6H12O6 + 6O2',
        explanation: 'The net equation shows that photosynthesis uses carbon dioxide, water, and light energy to produce glucose and oxygen.'
      },
      {
        id: 'bio12_u3_h2',
        question: 'What is chemiosmosis?',
        options: ['ATP synthesis using proton gradient', 'Glucose breakdown', 'DNA replication', 'Protein synthesis'],
        correct: 'ATP synthesis using proton gradient',
        explanation: 'Chemiosmosis is the process where ATP is synthesized using the energy from a proton gradient across a membrane.'
      },
      {
        id: 'bio12_u3_h3',
        question: 'Which enzyme fixes carbon dioxide in the Calvin cycle?',
        options: ['RuBisCO', 'ATP synthase', 'Cytochrome', 'NADH dehydrogenase'],
        correct: 'RuBisCO',
        explanation: 'RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase) is the enzyme that catalyzes carbon fixation in the Calvin cycle.'
      },
      {
        id: 'bio12_u3_h4',
        question: 'What is the electron transport chain?',
        options: ['Series of protein complexes that transfer electrons', 'DNA replication machinery', 'Protein synthesis pathway', 'Glucose breakdown pathway'],
        correct: 'Series of protein complexes that transfer electrons',
        explanation: 'The electron transport chain is a series of protein complexes that transfer electrons and pump protons to generate ATP.'
      },
      {
        id: 'bio12_u3_h5',
        question: 'What is photorespiration?',
        options: ['Wasteful pathway when RuBisCO binds oxygen', 'Normal photosynthesis', 'Cellular respiration in light', 'Glucose synthesis'],
        correct: 'Wasteful pathway when RuBisCO binds oxygen',
        explanation: 'Photorespiration is a wasteful process that occurs when RuBisCO binds oxygen instead of carbon dioxide, reducing photosynthetic efficiency.'
      },
      {
        id: 'bio12_u3_h6',
        question: 'What is the role of cytochrome c in cellular respiration?',
        options: ['Electron carrier in the electron transport chain', 'Glucose breakdown', 'ATP synthesis', 'Oxygen production'],
        correct: 'Electron carrier in the electron transport chain',
        explanation: 'Cytochrome c is a mobile electron carrier that transfers electrons between complex III and complex IV in the electron transport chain.'
      },
      {
        id: 'bio12_u3_h7',
        question: 'What is substrate-level phosphorylation?',
        options: ['Direct transfer of phosphate to ADP', 'Phosphorylation using light', 'Phosphorylation using oxygen', 'Phosphorylation in chloroplasts'],
        correct: 'Direct transfer of phosphate to ADP',
        explanation: 'Substrate-level phosphorylation is the direct transfer of a phosphate group from a substrate molecule to ADP to form ATP.'
      },
      {
        id: 'bio12_u3_h8',
        question: 'What is the P680 reaction center?',
        options: ['Photosystem II chlorophyll that absorbs 680nm light', 'Photosystem I component', 'Cellular respiration enzyme', 'Calvin cycle enzyme'],
        correct: 'Photosystem II chlorophyll that absorbs 680nm light',
        explanation: 'P680 is the reaction center chlorophyll in photosystem II that absorbs light at 680 nanometers wavelength.'
      },
      {
        id: 'bio12_u3_h9',
        question: 'What happens during the oxidative phosphorylation?',
        options: ['ATP synthesis coupled to electron transport', 'Glucose breakdown', 'Calvin cycle reactions', 'Fermentation'],
        correct: 'ATP synthesis coupled to electron transport',
        explanation: 'Oxidative phosphorylation couples the oxidation of NADH and FADH2 through electron transport to ATP synthesis.'
      },
      {
        id: 'bio12_u3_h10',
        question: 'What is the significance of the proton-motive force?',
        options: ['Drives ATP synthesis', 'Breaks down glucose', 'Fixes carbon dioxide', 'Synthesizes proteins'],
        correct: 'Drives ATP synthesis',
        explanation: 'The proton-motive force is the electrochemical gradient of protons that drives ATP synthesis through ATP synthase.'
      }
    ]
  },
  'Unit 4: Evolution': {
    easy: [
      {
        id: 'bio12_u4_e1',
        question: 'What is evolution?',
        options: ['Change in species over time', 'Growth of an individual', 'Daily changes in behavior', 'Seasonal migration'],
        correct: 'Change in species over time',
        explanation: 'Evolution is the process by which species change and develop over long periods of time.'
      },
      {
        id: 'bio12_u4_e2',
        question: 'Who proposed the theory of evolution by natural selection?',
        options: ['Charles Darwin', 'Albert Einstein', 'Isaac Newton', 'Gregor Mendel'],
        correct: 'Charles Darwin',
        explanation: 'Charles Darwin proposed the theory of evolution by natural selection based on his observations and research.'
      },
      {
        id: 'bio12_u4_e3',
        question: 'What is natural selection?',
        options: ['Survival of the fittest', 'Random changes', 'Human breeding', 'Seasonal changes'],
        correct: 'Survival of the fittest',
        explanation: 'Natural selection is the process where organisms with favorable traits are more likely to survive and reproduce.'
      },
      {
        id: 'bio12_u4_e4',
        question: 'What are fossils?',
        options: ['Preserved remains of ancient organisms', 'Living organisms', 'Modern bones', 'Artificial structures'],
        correct: 'Preserved remains of ancient organisms',
        explanation: 'Fossils are preserved remains or traces of organisms that lived in the past, providing evidence for evolution.'
      },
      {
        id: 'bio12_u4_e5',
        question: 'What is adaptation?',
        options: ['Traits that help organisms survive', 'Daily routines', 'Learning new skills', 'Changing seasons'],
        correct: 'Traits that help organisms survive',
        explanation: 'Adaptations are inherited traits that increase an organism\'s ability to survive and reproduce in its environment.'
      },
      {
        id: 'bio12_u4_e6',
        question: 'What is a species?',
        options: ['Group of organisms that can interbreed', 'Individual animals', 'Group of plants only', 'Single organism'],
        correct: 'Group of organisms that can interbreed',
        explanation: 'A species is a group of organisms that can interbreed and produce fertile offspring.'
      },
      {
        id: 'bio12_u4_e7',
        question: 'What causes genetic variation in populations?',
        options: ['Mutations and sexual reproduction', 'Only environment', 'Only age', 'Only diet'],
        correct: 'Mutations and sexual reproduction',
        explanation: 'Genetic variation in populations is primarily caused by mutations and the mixing of genes during sexual reproduction.'
      },
      {
        id: 'bio12_u4_e8',
        question: 'What is selective breeding?',
        options: ['Humans choosing which organisms reproduce', 'Natural reproduction', 'Random mating', 'Seasonal breeding'],
        correct: 'Humans choosing which organisms reproduce',
        explanation: 'Selective breeding is when humans deliberately choose which organisms should reproduce to get desired traits.'
      },
      {
        id: 'bio12_u4_e9',
        question: 'What evidence supports evolution?',
        options: ['Fossils, DNA similarities, and anatomy', 'Only behavior', 'Only size differences', 'Only color patterns'],
        correct: 'Fossils, DNA similarities, and anatomy',
        explanation: 'Evolution is supported by multiple lines of evidence including fossils, DNA comparisons, anatomical similarities, and more.'
      },
      {
        id: 'bio12_u4_e10',
        question: 'What is extinction?',
        options: ['When all members of a species die out', 'When animals migrate', 'When animals hibernate', 'When animals change color'],
        correct: 'When all members of a species die out',
        explanation: 'Extinction occurs when all members of a species die out and the species no longer exists.'
      }
    ],
    medium: [
      {
        id: 'bio12_u4_m1',
        question: 'What is genetic drift?',
        options: ['Random changes in gene frequencies', 'Directed evolution', 'Mutation rate', 'Migration patterns'],
        correct: 'Random changes in gene frequencies',
        explanation: 'Genetic drift is the random change in gene frequencies in a population, especially noticeable in small populations.'
      },
      {
        id: 'bio12_u4_m2',
        question: 'What is the founder effect?',
        options: ['Loss of genetic variation when few individuals start new population', 'Increase in population size', 'New species formation', 'Environmental change'],
        correct: 'Loss of genetic variation when few individuals start new population',
        explanation: 'The founder effect occurs when a small group establishes a new population, resulting in reduced genetic diversity.'
      },
      {
        id: 'bio12_u4_m3',
        question: 'What is convergent evolution?',
        options: ['Similar traits evolving independently', 'Species becoming identical', 'Related species diverging', 'Extinction of species'],
        correct: 'Similar traits evolving independently',
        explanation: 'Convergent evolution occurs when unrelated species develop similar traits due to similar environmental pressures.'
      },
      {
        id: 'bio12_u4_m4',
        question: 'What is speciation?',
        options: ['Formation of new species', 'Death of species', 'Migration of species', 'Growth of individuals'],
        correct: 'Formation of new species',
        explanation: 'Speciation is the evolutionary process by which new species arise from existing species.'
      },
      {
        id: 'bio12_u4_m5',
        question: 'What is adaptive radiation?',
        options: ['Rapid evolution of many species from common ancestor', 'Slow evolution', 'Species extinction', 'Individual adaptation'],
        correct: 'Rapid evolution of many species from common ancestor',
        explanation: 'Adaptive radiation is the rapid diversification of a species into many new species adapted to different environments.'
      },
      {
        id: 'bio12_u4_m6',
        question: 'What is gene flow?',
        options: ['Movement of genes between populations', 'Gene expression', 'DNA replication', 'Protein synthesis'],
        correct: 'Movement of genes between populations',
        explanation: 'Gene flow is the transfer of genetic material between separate populations through migration and breeding.'
      },
      {
        id: 'bio12_u4_m7',
        question: 'What is sexual selection?',
        options: ['Selection based on mating success', 'Natural disaster survival', 'Food competition', 'Shelter building'],
        correct: 'Selection based on mating success',
        explanation: 'Sexual selection is the process where traits that increase mating success are favored, even if they don\'t improve survival.'
      },
      {
        id: 'bio12_u4_m8',
        question: 'What are homologous structures?',
        options: ['Similar structures from common ancestor', 'Identical functions only', 'Same size structures', 'Same color patterns'],
        correct: 'Similar structures from common ancestor',
        explanation: 'Homologous structures are similar anatomical features in different species that evolved from a common ancestor.'
      },
      {
        id: 'bio12_u4_m9',
        question: 'What is the bottleneck effect?',
        options: ['Severe reduction in population size', 'Population growth', 'Species formation', 'Geographic separation'],
        correct: 'Severe reduction in population size',
        explanation: 'The bottleneck effect occurs when a population\'s size is significantly reduced, leading to loss of genetic diversity.'
      },
      {
        id: 'bio12_u4_m10',
        question: 'What is coevolution?',
        options: ['Evolution of two species in response to each other', 'Evolution of one species only', 'Random evolution', 'Reverse evolution'],
        correct: 'Evolution of two species in response to each other',
        explanation: 'Coevolution occurs when two or more species evolve in response to each other\'s evolutionary changes.'
      }
    ],
    hard: [
      {
        id: 'bio12_u4_h1',
        question: 'What is the Hardy-Weinberg principle?',
        options: ['Mathematical model for gene frequencies in populations', 'Natural selection model', 'Mutation rate calculation', 'Migration pattern'],
        correct: 'Mathematical model for gene frequencies in populations',
        explanation: 'The Hardy-Weinberg principle describes the conditions under which gene frequencies remain constant in a population.'
      },
      {
        id: 'bio12_u4_h2',
        question: 'What are the five factors that can disrupt Hardy-Weinberg equilibrium?',
        options: ['Mutation, gene flow, genetic drift, selection, non-random mating', 'Only mutation', 'Only selection', 'Only migration'],
        correct: 'Mutation, gene flow, genetic drift, selection, non-random mating',
        explanation: 'The five evolutionary forces that can change gene frequencies are mutation, gene flow, genetic drift, natural selection, and non-random mating.'
      },
      {
        id: 'bio12_u4_h3',
        question: 'What is punctuated equilibrium?',
        options: ['Rapid evolutionary change followed by stability', 'Constant evolutionary change', 'No evolutionary change', 'Reverse evolution'],
        correct: 'Rapid evolutionary change followed by stability',
        explanation: 'Punctuated equilibrium suggests that evolution occurs in rapid bursts followed by long periods of stability.'
      },
      {
        id: 'bio12_u4_h4',
        question: 'What is allopatric speciation?',
        options: ['Speciation due to geographic isolation', 'Speciation in same location', 'Speciation due to behavior only', 'Speciation due to time only'],
        correct: 'Speciation due to geographic isolation',
        explanation: 'Allopatric speciation occurs when populations are geographically separated and evolve into different species.'
      },
      {
        id: 'bio12_u4_h5',
        question: 'What is sympatric speciation?',
        options: ['Speciation without geographic isolation', 'Speciation with geographic isolation', 'Speciation in water only', 'Speciation in air only'],
        correct: 'Speciation without geographic isolation',
        explanation: 'Sympatric speciation occurs when new species form within the same geographic area without physical barriers.'
      },
      {
        id: 'bio12_u4_h6',
        question: 'What is molecular evolution?',
        options: ['Evolution at the DNA and protein level', 'Evolution of body size only', 'Evolution of behavior only', 'Evolution of color only'],
        correct: 'Evolution at the DNA and protein level',
        explanation: 'Molecular evolution studies changes in DNA sequences and proteins over time to understand evolutionary relationships.'
      },
      {
        id: 'bio12_u4_h7',
        question: 'What is the molecular clock hypothesis?',
        options: ['DNA changes at relatively constant rate', 'DNA never changes', 'DNA changes rapidly', 'DNA changes randomly'],
        correct: 'DNA changes at relatively constant rate',
        explanation: 'The molecular clock hypothesis suggests that DNA sequences evolve at relatively constant rates, allowing estimation of divergence times.'
      },
      {
        id: 'bio12_u4_h8',
        question: 'What is kin selection?',
        options: ['Natural selection favoring relatives', 'Selection against relatives', 'Random selection', 'Individual selection only'],
        correct: 'Natural selection favoring relatives',
        explanation: 'Kin selection is a form of natural selection where individuals favor the reproductive success of their relatives.'
      },
      {
        id: 'bio12_u4_h9',
        question: 'What is phylogenetic analysis?',
        options: ['Study of evolutionary relationships between organisms', 'Study of individual development', 'Study of behavior only', 'Study of ecology only'],
        correct: 'Study of evolutionary relationships between organisms',
        explanation: 'Phylogenetic analysis uses molecular and morphological data to reconstruct evolutionary relationships between species.'
      },
      {
        id: 'bio12_u4_h10',
        question: 'What is the neutral theory of molecular evolution?',
        options: ['Most molecular changes are selectively neutral', 'All changes are beneficial', 'All changes are harmful', 'No molecular changes occur'],
        correct: 'Most molecular changes are selectively neutral',
        explanation: 'The neutral theory suggests that most molecular evolutionary changes are due to random genetic drift rather than natural selection.'
      }
    ]
  },
  'Unit 5: Human Body System': {
    easy: [
      {
        id: 'bio12_u5_e1',
        question: 'What is the main function of the circulatory system?',
        options: ['Transport blood throughout the body', 'Digest food', 'Breathe air', 'Think and remember'],
        correct: 'Transport blood throughout the body',
        explanation: 'The circulatory system transports blood, oxygen, nutrients, and waste products throughout the body.'
      },
      {
        id: 'bio12_u5_e2',
        question: 'What is the largest organ in the human body?',
        options: ['Skin', 'Heart', 'Brain', 'Liver'],
        correct: 'Skin',
        explanation: 'The skin is the largest organ in the human body, covering and protecting the entire body surface.'
      },
      {
        id: 'bio12_u5_e3',
        question: 'What is the main function of the respiratory system?',
        options: ['Exchange gases (oxygen and carbon dioxide)', 'Digest food', 'Filter blood', 'Produce hormones'],
        correct: 'Exchange gases (oxygen and carbon dioxide)',
        explanation: 'The respiratory system is responsible for taking in oxygen and removing carbon dioxide from the body.'
      },
      {
        id: 'bio12_u5_e4',
        question: 'What is the main function of the digestive system?',
        options: ['Break down food and absorb nutrients', 'Pump blood', 'Control movement', 'Filter waste'],
        correct: 'Break down food and absorb nutrients',
        explanation: 'The digestive system breaks down food into nutrients that can be absorbed and used by the body.'
      },
      {
        id: 'bio12_u5_e5',
        question: 'What controls most body functions?',
        options: ['Nervous system', 'Skeletal system', 'Muscular system', 'Integumentary system'],
        correct: 'Nervous system',
        explanation: 'The nervous system, including the brain and spinal cord, controls and coordinates most body functions.'
      },
      {
        id: 'bio12_u5_e6',
        question: 'What is the function of kidneys?',
        options: ['Filter waste from blood', 'Pump blood', 'Digest food', 'Produce saliva'],
        correct: 'Filter waste from blood',
        explanation: 'Kidneys filter waste products and excess water from the blood to produce urine.'
      },
      {
        id: 'bio12_u5_e7',
        question: 'What connects bones to muscles?',
        options: ['Tendons', 'Ligaments', 'Cartilage', 'Nerves'],
        correct: 'Tendons',
        explanation: 'Tendons are tough connective tissues that connect muscles to bones, allowing movement.'
      },
      {
        id: 'bio12_u5_e8',
        question: 'What is the function of white blood cells?',
        options: ['Fight infections', 'Carry oxygen', 'Clot blood', 'Store nutrients'],
        correct: 'Fight infections',
        explanation: 'White blood cells are part of the immune system and help fight infections and diseases.'
      },
      {
        id: 'bio12_u5_e9',
        question: 'What is the main function of red blood cells?',
        options: ['Carry oxygen', 'Fight infection', 'Clot blood', 'Digest food'],
        correct: 'Carry oxygen',
        explanation: 'Red blood cells contain hemoglobin and are responsible for carrying oxygen from the lungs to body tissues.'
      },
      {
        id: 'bio12_u5_e10',
        question: 'What protects the brain?',
        options: ['Skull', 'Ribs', 'Spine', 'Skin'],
        correct: 'Skull',
        explanation: 'The skull is a bony structure that protects the brain from injury.'
      }
    ],
    medium: [
      {
        id: 'bio12_u5_m1',
        question: 'What is homeostasis?',
        options: ['Maintaining stable internal conditions', 'Growing larger', 'Moving around', 'Reproducing'],
        correct: 'Maintaining stable internal conditions',
        explanation: 'Homeostasis is the process by which the body maintains stable internal conditions despite external changes.'
      },
      {
        id: 'bio12_u5_m2',
        question: 'What is the role of insulin in the body?',
        options: ['Regulates blood sugar levels', 'Fights infections', 'Carries oxygen', 'Digests proteins'],
        correct: 'Regulates blood sugar levels',
        explanation: 'Insulin is a hormone that helps regulate blood glucose levels by allowing cells to take up glucose.'
      },
      {
        id: 'bio12_u5_m3',
        question: 'What is the function of the lymphatic system?',
        options: ['Immune defense and fluid balance', 'Digestion only', 'Breathing only', 'Blood circulation only'],
        correct: 'Immune defense and fluid balance',
        explanation: 'The lymphatic system helps with immune defense and maintains fluid balance in the body.'
      },
      {
        id: 'bio12_u5_m4',
        question: 'What is the difference between arteries and veins?',
        options: ['Arteries carry blood away from heart, veins carry blood to heart', 'No difference', 'Arteries are smaller', 'Veins are stronger'],
        correct: 'Arteries carry blood away from heart, veins carry blood to heart',
        explanation: 'Arteries transport oxygenated blood away from the heart, while veins return deoxygenated blood to the heart.'
      },
      {
        id: 'bio12_u5_m5',
        question: 'What is the function of the endocrine system?',
        options: ['Produces and regulates hormones', 'Digests food', 'Pumps blood', 'Filters air'],
        correct: 'Produces and regulates hormones',
        explanation: 'The endocrine system produces hormones that regulate various body functions including growth, metabolism, and reproduction.'
      },
      {
        id: 'bio12_u5_m6',
        question: 'What is the role of the liver in digestion?',
        options: ['Produces bile to digest fats', 'Breaks down proteins', 'Absorbs water', 'Stores food'],
        correct: 'Produces bile to digest fats',
        explanation: 'The liver produces bile, which helps emulsify and digest fats in the small intestine.'
      },
      {
        id: 'bio12_u5_m7',
        question: 'What is the function of the cerebellum?',
        options: ['Coordinates movement and balance', 'Controls breathing', 'Processes emotions', 'Stores memories'],
        correct: 'Coordinates movement and balance',
        explanation: 'The cerebellum coordinates voluntary movements, balance, and posture.'
      },
      {
        id: 'bio12_u5_m8',
        question: 'What is the role of platelets in blood?',
        options: ['Blood clotting', 'Carrying oxygen', 'Fighting infection', 'Transporting nutrients'],
        correct: 'Blood clotting',
        explanation: 'Platelets are cell fragments that help in blood clotting to prevent bleeding when blood vessels are damaged.'
      },
      {
        id: 'bio12_u5_m9',
        question: 'What is the function of the spinal cord?',
        options: ['Transmits messages between brain and body', 'Pumps blood', 'Filters air', 'Digests food'],
        correct: 'Transmits messages between brain and body',
        explanation: 'The spinal cord acts as a highway for nerve signals traveling between the brain and the rest of the body.'
      },
      {
        id: 'bio12_u5_m10',
        question: 'What is the role of the pancreas?',
        options: ['Produces digestive enzymes and insulin', 'Pumps blood', 'Filters urine', 'Stores oxygen'],
        correct: 'Produces digestive enzymes and insulin',
        explanation: 'The pancreas has dual functions: producing digestive enzymes for the digestive system and insulin for blood sugar regulation.'
      }
    ],
    hard: [
      {
        id: 'bio12_u5_h1',
        question: 'What is the mechanism of muscle contraction?',
        options: ['Sliding filament theory', 'Swelling theory', 'Rotation theory', 'Compression theory'],
        correct: 'Sliding filament theory',
        explanation: 'Muscle contraction occurs through the sliding filament mechanism where actin and myosin filaments slide past each other.'
      },
      {
        id: 'bio12_u5_h2',
        question: 'What is the role of ADH (antidiuretic hormone)?',
        options: ['Regulates water reabsorption in kidneys', 'Controls heart rate', 'Stimulates growth', 'Regulates calcium'],
        correct: 'Regulates water reabsorption in kidneys',
        explanation: 'ADH controls water reabsorption in the kidneys to maintain proper fluid balance in the body.'
      },
      {
        id: 'bio12_u5_h3',
        question: 'What is the Frank-Starling mechanism?',
        options: ['Heart pumps more when filled with more blood', 'Brain controls heart rate', 'Lungs regulate breathing', 'Kidneys filter blood'],
        correct: 'Heart pumps more when filled with more blood',
        explanation: 'The Frank-Starling mechanism describes how the heart automatically adjusts its pumping strength based on the amount of blood returning to it.'
      },
      {
        id: 'bio12_u5_h4',
        question: 'What is the blood-brain barrier?',
        options: ['Selective barrier protecting brain from harmful substances', 'Physical wall around brain', 'Blood vessel in brain', 'Brain tissue type'],
        correct: 'Selective barrier protecting brain from harmful substances',
        explanation: 'The blood-brain barrier is a highly selective barrier that protects the brain from potentially harmful substances while allowing essential nutrients to pass through.'
      },
      {
        id: 'bio12_u5_h5',
        question: 'What is the complement system?',
        options: ['Protein cascade enhancing immune response', 'Digestive enzyme system', 'Nervous system component', 'Circulatory system part'],
        correct: 'Protein cascade enhancing immune response',
        explanation: 'The complement system is a cascade of proteins that enhances the immune system\'s ability to clear pathogens and damaged cells.'
      },
      {
        id: 'bio12_u5_h6',
        question: 'What is the role of the hypothalamus?',
        options: ['Links nervous and endocrine systems', 'Processes visual information', 'Controls voluntary movement', 'Stores long-term memory'],
        correct: 'Links nervous and endocrine systems',
        explanation: 'The hypothalamus serves as the crucial link between the nervous and endocrine systems, controlling many homeostatic functions.'
      },
      {
        id: 'bio12_u5_h7',
        question: 'What is negative feedback in homeostasis?',
        options: ['Response that opposes the original stimulus', 'Response that enhances the original stimulus', 'No response to stimulus', 'Random response'],
        correct: 'Response that opposes the original stimulus',
        explanation: 'Negative feedback is a regulatory mechanism where the response opposes the original stimulus to maintain homeostasis.'
      },
      {
        id: 'bio12_u5_h8',
        question: 'What is the glomerular filtration rate (GFR)?',
        options: ['Rate of filtrate formation in kidneys', 'Heart pumping rate', 'Breathing rate', 'Digestive rate'],
        correct: 'Rate of filtrate formation in kidneys',
        explanation: 'GFR is the volume of filtrate formed per minute by both kidneys, indicating kidney function efficiency.'
      },
      {
        id: 'bio12_u5_h9',
        question: 'What is the role of surfactant in lungs?',
        options: ['Reduces surface tension in alveoli', 'Carries oxygen', 'Filters air', 'Produces mucus'],
        correct: 'Reduces surface tension in alveoli',
        explanation: 'Surfactant reduces surface tension in the alveoli, preventing lung collapse and making breathing easier.'
      },
      {
        id: 'bio12_u5_h10',
        question: 'What is synaptic plasticity?',
        options: ['Ability of synapses to strengthen or weaken over time', 'Physical shape of neurons', 'Speed of nerve impulses', 'Number of neurons'],
        correct: 'Ability of synapses to strengthen or weaken over time',
        explanation: 'Synaptic plasticity is the ability of connections between neurons to change in strength, which is fundamental to learning and memory.'
      }
    ]
  },
  'Unit 6: Climate Change': {
    easy: [
      {
        id: 'bio12_u6_e1',
        question: 'What is climate change?',
        options: ['Long-term changes in global weather patterns', 'Daily weather changes', 'Seasonal changes', 'Monthly temperature changes'],
        correct: 'Long-term changes in global weather patterns',
        explanation: 'Climate change refers to long-term shifts in global weather patterns and temperatures over decades or longer periods.'
      },
      {
        id: 'bio12_u6_e2',
        question: 'What is the main cause of current climate change?',
        options: ['Human activities', 'Natural disasters only', 'Solar radiation only', 'Ocean currents only'],
        correct: 'Human activities',
        explanation: 'Current climate change is primarily caused by human activities, especially the burning of fossil fuels and deforestation.'
      },
      {
        id: 'bio12_u6_e3',
        question: 'What is the greenhouse effect?',
        options: ['Trapping of heat in Earth\'s atmosphere', 'Growing plants in greenhouses', 'Making glass structures', 'Cooling the Earth'],
        correct: 'Trapping of heat in Earth\'s atmosphere',
        explanation: 'The greenhouse effect is the process where certain gases in the atmosphere trap heat, warming the Earth\'s surface.'
      },
      {
        id: 'bio12_u6_e4',
        question: 'Which gas is the most important greenhouse gas?',
        options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
        correct: 'Carbon dioxide',
        explanation: 'Carbon dioxide is the most significant greenhouse gas contributing to climate change, mainly from burning fossil fuels.'
      },
      {
        id: 'bio12_u6_e5',
        question: 'What happens to polar ice due to climate change?',
        options: ['It melts', 'It grows thicker', 'It changes color', 'It moves to different locations'],
        correct: 'It melts',
        explanation: 'Rising global temperatures cause polar ice caps and glaciers to melt, contributing to sea level rise.'
      },
      {
        id: 'bio12_u6_e6',
        question: 'How does climate change affect sea levels?',
        options: ['Sea levels rise', 'Sea levels drop', 'Sea levels stay the same', 'Sea levels fluctuate randomly'],
        correct: 'Sea levels rise',
        explanation: 'Climate change causes sea levels to rise due to melting ice and thermal expansion of warmer ocean water.'
      },
      {
        id: 'bio12_u6_e7',
        question: 'What is deforestation?',
        options: ['Cutting down forests', 'Planting new trees', 'Moving forests', 'Painting trees'],
        correct: 'Cutting down forests',
        explanation: 'Deforestation is the clearing or removal of forests, which reduces the Earth\'s ability to absorb carbon dioxide.'
      },
      {
        id: 'bio12_u6_e8',
        question: 'How do forests help with climate change?',
        options: ['They absorb carbon dioxide', 'They produce carbon dioxide', 'They reflect sunlight only', 'They have no effect'],
        correct: 'They absorb carbon dioxide',
        explanation: 'Forests help mitigate climate change by absorbing carbon dioxide from the atmosphere during photosynthesis.'
      },
      {
        id: 'bio12_u6_e9',
        question: 'What can individuals do to help reduce climate change?',
        options: ['Use less energy and reduce waste', 'Use more energy', 'Ignore the problem', 'Only governments can help'],
        correct: 'Use less energy and reduce waste',
        explanation: 'Individuals can help by reducing energy consumption, using renewable energy, recycling, and making sustainable choices.'
      },
      {
        id: 'bio12_u6_e10',
        question: 'What is renewable energy?',
        options: ['Energy from sources that don\'t run out', 'Energy that can only be used once', 'Energy from fossil fuels', 'Energy that is expensive'],
        correct: 'Energy from sources that don\'t run out',
        explanation: 'Renewable energy comes from sources that naturally replenish, such as solar, wind, and hydroelectric power.'
      }
    ],
    medium: [
      {
        id: 'bio12_u6_m1',
        question: 'What is ocean acidification?',
        options: ['Increase in ocean acidity due to CO2 absorption', 'Decrease in ocean temperature', 'Increase in ocean salinity', 'Change in ocean color'],
        correct: 'Increase in ocean acidity due to CO2 absorption',
        explanation: 'Ocean acidification occurs when oceans absorb excess atmospheric CO2, making the water more acidic and harming marine life.'
      },
      {
        id: 'bio12_u6_m2',
        question: 'What is coral bleaching?',
        options: ['Loss of algae from coral due to stress', 'Natural coral reproduction', 'Coral growing process', 'Coral changing location'],
        correct: 'Loss of algae from coral due to stress',
        explanation: 'Coral bleaching occurs when corals expel their symbiotic algae due to stress from warming waters, causing them to turn white.'
      },
      {
        id: 'bio12_u6_m3',
        question: 'What are carbon footprints?',
        options: ['Total greenhouse gas emissions from activities', 'Footprints made of carbon', 'Black marks on the ground', 'Fossil fuel reserves'],
        correct: 'Total greenhouse gas emissions from activities',
        explanation: 'A carbon footprint measures the total amount of greenhouse gases produced directly and indirectly by human activities.'
      },
      {
        id: 'bio12_u6_m4',
        question: 'What is permafrost?',
        options: ['Permanently frozen ground', 'Temporary ice', 'Surface snow', 'Liquid water underground'],
        correct: 'Permanently frozen ground',
        explanation: 'Permafrost is ground that remains frozen year-round; its melting due to warming releases stored carbon into the atmosphere.'
      },
      {
        id: 'bio12_u6_m5',
        question: 'How does climate change affect biodiversity?',
        options: ['Threatens species survival and ecosystem balance', 'Increases all species populations', 'Has no effect on biodiversity', 'Only affects plants'],
        correct: 'Threatens species survival and ecosystem balance',
        explanation: 'Climate change threatens biodiversity by altering habitats, disrupting food chains, and forcing species to adapt or migrate.'
      },
      {
        id: 'bio12_u6_m6',
        question: 'What is carbon sequestration?',
        options: ['Process of capturing and storing carbon dioxide', 'Releasing carbon dioxide', 'Converting carbon to oxygen', 'Burning carbon'],
        correct: 'Process of capturing and storing carbon dioxide',
        explanation: 'Carbon sequestration is the process of capturing CO2 from the atmosphere and storing it to reduce greenhouse gas concentrations.'
      },
      {
        id: 'bio12_u6_m7',
        question: 'What is the urban heat island effect?',
        options: ['Cities being warmer than surrounding areas', 'Islands getting hotter', 'Heat moving from cities', 'Islands moving to cities'],
        correct: 'Cities being warmer than surrounding areas',
        explanation: 'The urban heat island effect occurs when urban areas are significantly warmer than surrounding rural areas due to human activities and infrastructure.'
      },
      {
        id: 'bio12_u6_m8',
        question: 'What is climate adaptation?',
        options: ['Adjusting to climate change impacts', 'Preventing climate change', 'Ignoring climate change', 'Reversing climate change'],
        correct: 'Adjusting to climate change impacts',
        explanation: 'Climate adaptation involves making adjustments to natural or human systems in response to actual or expected climate change impacts.'
      },
      {
        id: 'bio12_u6_m9',
        question: 'What is climate mitigation?',
        options: ['Reducing greenhouse gas emissions', 'Adapting to climate change', 'Studying climate patterns', 'Measuring temperature'],
        correct: 'Reducing greenhouse gas emissions',
        explanation: 'Climate mitigation involves efforts to reduce or prevent the emission of greenhouse gases to limit future climate change.'
      },
      {
        id: 'bio12_u6_m10',
        question: 'How does agriculture contribute to climate change?',
        options: ['Through greenhouse gas emissions and land use changes', 'By cooling the atmosphere', 'By absorbing all CO2', 'Agriculture has no climate impact'],
        correct: 'Through greenhouse gas emissions and land use changes',
        explanation: 'Agriculture contributes to climate change through methane from livestock, CO2 from machinery, and land use changes like deforestation.'
      }
    ],
    hard: [
      {
        id: 'bio12_u6_h1',
        question: 'What is the albedo effect?',
        options: ['Reflectivity of Earth\'s surface affecting temperature', 'Absorption of all sunlight', 'Color changes in the atmosphere', 'Movement of clouds'],
        correct: 'Reflectivity of Earth\'s surface affecting temperature',
        explanation: 'The albedo effect refers to how much sunlight is reflected by Earth\'s surface; lower albedo (darker surfaces) absorbs more heat, contributing to warming.'
      },
      {
        id: 'bio12_u6_h2',
        question: 'What are tipping points in climate systems?',
        options: ['Thresholds beyond which changes become irreversible', 'Points where climate improves', 'Maximum safe temperatures', 'Areas with no climate change'],
        correct: 'Thresholds beyond which changes become irreversible',
        explanation: 'Climate tipping points are critical thresholds beyond which small changes can lead to large, potentially irreversible changes in the climate system.'
      },
      {
        id: 'bio12_u6_h3',
        question: 'What is the thermohaline circulation?',
        options: ['Global ocean current system driven by temperature and salinity', 'Local wind patterns', 'Atmospheric pressure changes', 'Volcanic activity'],
        correct: 'Global ocean current system driven by temperature and salinity',
        explanation: 'Thermohaline circulation is the global ocean conveyor belt driven by differences in water density due to temperature and salinity variations.'
      },
      {
        id: 'bio12_u6_h4',
        question: 'What is radiative forcing?',
        options: ['Measure of how factors influence Earth\'s energy balance', 'Solar energy output', 'Wind speed measurement', 'Ocean temperature'],
        correct: 'Measure of how factors influence Earth\'s energy balance',
        explanation: 'Radiative forcing measures the difference between solar energy absorbed and energy radiated back to space, indicating warming or cooling influences.'
      },
      {
        id: 'bio12_u6_h5',
        question: 'What is geoengineering?',
        options: ['Large-scale interventions to counteract climate change', 'Natural climate processes', 'Small-scale environmental projects', 'Studying geological formations'],
        correct: 'Large-scale interventions to counteract climate change',
        explanation: 'Geoengineering involves large-scale technological interventions designed to counteract climate change by removing CO2 or managing solar radiation.'
      },
      {
        id: 'bio12_u6_h6',
        question: 'What is the carbon cycle feedback loop?',
        options: ['Self-reinforcing process affecting carbon storage', 'Linear carbon flow', 'Carbon destruction process', 'Carbon creation process'],
        correct: 'Self-reinforcing process affecting carbon storage',
        explanation: 'Carbon cycle feedback loops can either amplify or reduce climate change effects, such as warming leading to less carbon storage in forests.'
      },
      {
        id: 'bio12_u6_h7',
        question: 'What is phenological shift?',
        options: ['Changes in timing of biological events', 'Physical movement of species', 'Changes in species appearance', 'Changes in population size'],
        correct: 'Changes in timing of biological events',
        explanation: 'Phenological shifts are changes in the timing of biological events like flowering or migration due to climate change.'
      },
      {
        id: 'bio12_u6_h8',
        question: 'What is climate sensitivity?',
        options: ['Temperature response to doubled CO2 concentrations', 'Speed of climate change', 'Climate measurement accuracy', 'Regional climate differences'],
        correct: 'Temperature response to doubled CO2 concentrations',
        explanation: 'Climate sensitivity measures how much global average temperature would increase if atmospheric CO2 concentrations were doubled.'
      },
      {
        id: 'bio12_u6_h9',
        question: 'What is the role of methane hydrates in climate change?',
        options: ['Potential source of methane emissions from warming', 'Carbon storage solution', 'Cooling mechanism', 'Oxygen production'],
        correct: 'Potential source of methane emissions from warming',
        explanation: 'Methane hydrates are ice-like crystals containing methane that could be released as potent greenhouse gases if warming continues.'
      },
      {
        id: 'bio12_u6_h10',
        question: 'What is the concept of planetary boundaries?',
        options: ['Safe operating limits for Earth systems', 'Physical borders between countries', 'Limits of space exploration', 'Ocean depth measurements'],
        correct: 'Safe operating limits for Earth systems',
        explanation: 'Planetary boundaries define safe operating limits for Earth systems within which humanity can continue to develop and thrive.'
      }
    ]
  }
};

export const getGrade12BiologyQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  const unitQuestions = grade12BiologyQuestions[unit];
  if (!unitQuestions) {
    console.log(`No questions found for unit: ${unit}`);
    return [];
  }
  
  const questions = unitQuestions[difficulty] || [];
  console.log(`Found ${questions.length} ${difficulty} questions for ${unit}`);
  return questions;
};
