import { MatricExamQuestion } from './matricExams';

export const chemistry2006Questions: MatricExamQuestion[] = [
  {
    id: "mat-2006-chem-1",
    question: "Which of the following is NOT a conjugate acid-base pair?",
    options: ["HNO₃/NO₃⁻", "H₂SO₄/HSO₄⁻", "H₃O⁺/H₂O", "H₃O⁺/OH⁻"],
    correctAnswer: 3,
    explanation: "H₃O⁺ and OH⁻ differ by two protons (2H⁺), not one. A conjugate acid-base pair must differ by exactly one proton. The others all differ by exactly one proton."
  },
  {
    id: "mat-2006-chem-2",
    question: "Which of the following is correct?",
    options: ["1L = 1dm³", "1L = 10dm³", "10L = 1dm³", "1L = 1m³"],
    correctAnswer: 0,
    explanation: "By definition, 1 liter = 1 cubic decimeter (1dm³). 1m³ = 1000L."
  },
  {
    id: "mat-2006-chem-3",
    question: "Commercially, liquid vegetable oils are converted to solid fats such as margarine by:",
    options: ["Hydrogenation", "Hydration", "Saponification", "Oxidation"],
    correctAnswer: 0,
    explanation: "Hydrogenation adds hydrogen (H₂) across the C=C double bonds in unsaturated oils, converting them to saturated solid fats like margarine."
  },
  {
    id: "mat-2006-chem-4",
    question: "What is the chemical name for Aspirin?",
    options: ["Acetyl salicylic acid", "Salicylic acid", "Methyl salicylate", "Sodium salicylate"],
    correctAnswer: 0,
    explanation: "Aspirin is acetyl salicylic acid (acetylsalicylic acid), formed by acetylation of salicylic acid."
  },
  {
    id: "mat-2006-chem-5",
    question: "Which of the following statement(s) is (are) true of an ideal liquid-liquid solution?\nI. It obeys PV = nRT\nII. It obeys Raoult's law\nIII. Solute-solute, solvent-solvent, and solute-solvent interactions are very similar\nIV. Solute-solute, solvent-solvent, and solute-solvent interactions are quite different.",
    options: ["I, II and III", "I, II and IV", "II and III", "II and IV"],
    correctAnswer: 2,
    explanation: "An ideal solution obeys Raoult's law (II) and has similar intermolecular interactions between all components (III). PV = nRT applies to ideal gases, not solutions."
  },
  {
    id: "mat-2006-chem-6",
    question: "The unit cell in a certain lattice consists of a cube formed by an anion at each corner, an anion in the center and a cation at the center of each face. How many cations and how many anions does the unit cell have?",
    options: ["5 anions and 6 cations", "5 anions and 3 cations", "2 anions and 3 cations", "3 anions and 4 cations"],
    correctAnswer: 2,
    explanation: "Corner anions: 8 × 1/8 = 1. Body center anion: 1. Total anions = 2. Face center cations: 6 × 1/2 = 3. Total cations = 3."
  },
  {
    id: "mat-2006-chem-7",
    question: "In a reaction, A + B → product, the rate is doubled when the concentration of B is doubled, and the rate increases by a factor of 8 when the concentrations of both the reactants (A and B) are doubled. The rate law for the reaction can be written as:",
    options: ["Rate = K[A][B]", "Rate = K[A]²[B]", "Rate = K[A][B]²", "Rate = K[A]²[B]²"],
    correctAnswer: 1,
    explanation: "Doubling [B] doubles rate → order of B = 1. Doubling both: 2ⁿ × 2¹ = 8, so 2ⁿ⁺¹ = 8 = 2³, n = 2. Order of A = 2. Rate = k[A]²[B]."
  },
  {
    id: "mat-2006-chem-14",
    question: "A solution with a pH of 7.5 would be described as:",
    options: ["Very basic", "Slightly basic", "Slightly acidic", "Very acidic"],
    correctAnswer: 1,
    explanation: "A pH of 7.5 is just slightly above neutral (7.0), making it slightly basic."
  },
  {
    id: "mat-2006-chem-15",
    question: "The electrolysis of molten NaCl is an industrial process. What does the electrolysis produce?",
    options: ["Na and Cl₂", "H₂ and O₂", "Na⁺ and Cl⁻", "NaOH and Cl₂"],
    correctAnswer: 0,
    explanation: "Electrolysis of molten NaCl produces sodium metal (Na) at the cathode and chlorine gas (Cl₂) at the anode. This is the Downs process."
  },
  {
    id: "mat-2006-chem-16",
    question: "Butane burns in oxygen: 2C₄H₁₀(g) + 13O₂(g) → 8CO₂(g) + 10H₂O(l). If 11.6g of butane is burned in 11.6g of oxygen, which is the limiting reagent?",
    options: ["Butane", "Oxygen", "Neither", "Both oxygen and butane"],
    correctAnswer: 1,
    explanation: "Moles of butane = 11.6/58 = 0.2 mol. Moles of O₂ = 11.6/32 = 0.3625 mol. Ratio needed: 13/2 = 6.5 mol O₂ per mol butane. For 0.2 mol butane, need 1.3 mol O₂. Only 0.3625 mol available. Oxygen is limiting."
  },
  {
    id: "mat-2006-chem-17",
    question: "A beaker filled to the 100mL mark with salt (mass = 100g) and another beaker to the 100mL mark with water (mass = 100g) are mixed together until the salt is completely dissolved. What will be the mass of the solution?",
    options: ["Much more than 200g", "Much smaller than 200g", "Exactly 200g", "Slightly more than 200g"],
    correctAnswer: 2,
    explanation: "By the law of conservation of mass, the total mass is exactly 200g (100g salt + 100g water). Mass is conserved in dissolution."
  },
  {
    id: "mat-2006-chem-18",
    question: "Which one of the following is NOT an intensive property?",
    options: ["Mass", "Temperature", "Colour", "Density"],
    correctAnswer: 0,
    explanation: "Mass is an extensive property — it depends on the amount of matter. Temperature, color, and density are intensive properties that don't depend on the amount."
  },
  {
    id: "mat-2006-chem-19",
    question: "Which of the following is a natural polymer?",
    options: ["Nylon", "PVC", "Cotton", "Dacron"],
    correctAnswer: 2,
    explanation: "Cotton is a natural polymer made of cellulose. Nylon, PVC, and Dacron are all synthetic polymers."
  },
  {
    id: "mat-2006-chem-20",
    question: "Which of the following metals forms a volatile compound during the extraction process?",
    options: ["Fe", "Co", "Ni", "Cu"],
    correctAnswer: 2,
    explanation: "Nickel forms the volatile compound nickel tetracarbonyl [Ni(CO)₄] in the Mond process, which is used for nickel purification."
  },
  {
    id: "mat-2006-chem-21",
    question: "Which one of the following atoms in its ground state has the greatest number of unpaired electrons?",
    options: ["₁₃Al", "₁₄Si", "₁₅P", "₁₆S"],
    correctAnswer: 2,
    explanation: "P (Z=15): [Ne]3s²3p³ has 3 unpaired electrons (one in each 3p orbital). Al has 1, Si has 2, and S has 2 unpaired electrons."
  },
  {
    id: "mat-2006-chem-22",
    question: "Which statement is true about chemical reactions at equilibrium?",
    options: [
      "The forward and backward reactions proceed at equal rates.",
      "The forward and backward reactions have stopped.",
      "The concentrations of the reactants and products are equal.",
      "The forward reaction is exothermic."
    ],
    correctAnswer: 0,
    explanation: "At equilibrium, the rates of the forward and reverse reactions are equal. The reactions don't stop — it's a dynamic equilibrium."
  },
  {
    id: "mat-2006-chem-23",
    question: "Which compound contains both covalent and ionic bonds?",
    options: ["Sodium carbonate, Na₂CO₃", "Magnesium bromide, MgBr₂", "Dichloromethane, CH₂Cl₂", "Ethanoic acid, CH₃COOH"],
    correctAnswer: 0,
    explanation: "Na₂CO₃ contains ionic bonds between Na⁺ and CO₃²⁻ ions, and covalent bonds within the carbonate ion (C-O bonds)."
  },
  {
    id: "mat-2006-chem-24",
    question: "Which set of quantum numbers (n, l, mₗ, mₛ) is NOT possible?",
    options: ["1, 0, 0, +1/2", "1, 1, 0, +1/2", "1, 0, 0, -1/2", "2, 1, -1, +1/2"],
    correctAnswer: 1,
    explanation: "For n=1, l can only be 0 (l ranges from 0 to n-1). l=1 is not possible when n=1."
  },
  {
    id: "mat-2006-chem-25",
    question: "Which of the following particles contains more electrons than neutrons?\nI. ¹H\nII. ³⁵Cl⁻\nIII. ³⁹K⁺",
    options: ["I only", "III only", "I and II only", "II and III only"],
    correctAnswer: 0,
    explanation: "¹H has 1 electron and 0 neutrons (more electrons than neutrons). ³⁵Cl⁻ has 18 electrons and 18 neutrons (equal). ³⁹K⁺ has 18 electrons and 20 neutrons (fewer electrons). Only I qualifies."
  },
  {
    id: "mat-2006-chem-26",
    question: "Which molecule or ion does NOT have a tetrahedral shape?",
    options: ["XeF₄", "SiCl₄", "BF₄⁻", "NH₄⁺"],
    correctAnswer: 0,
    explanation: "XeF₄ is square planar (6 electron pairs: 4 bonding + 2 lone pairs). SiCl₄, BF₄⁻, and NH₄⁺ are all tetrahedral."
  },
  {
    id: "mat-2006-chem-27",
    question: "Why are metals soft and malleable?",
    options: [
      "Because they are very shiny.",
      "Because they experience electrostatic repulsion.",
      "Because of the presence of mobile electrons.",
      "Because the metal cations can slip over each other fairly easily."
    ],
    correctAnswer: 3,
    explanation: "Metals are malleable because layers of metal cations can slide over each other while the 'sea' of delocalized electrons continues to hold them together."
  },
  {
    id: "mat-2006-chem-28",
    question: "In which region of the Periodic Table would the element with the electronic structure 1s²2s²2p⁶3s²3p⁶3d¹⁰4s²4p⁶4d⁶5s² be located?",
    options: ["Group 6", "Noble gases", "S block", "D block"],
    correctAnswer: 3,
    explanation: "The outermost electrons being filled are in the 4d subshell (4d⁶), placing this element in the d-block of the periodic table."
  },
  {
    id: "mat-2006-chem-29",
    question: "Which factors will influence the rate of the reaction: NO₂(g) + CO(g) → NO(g) + CO₂(g)?\nI. The number of collisions per second\nII. The energy of the collisions\nIII. The geometry with which the molecules collide",
    options: ["I only", "II only", "I and II only", "I, II and III"],
    correctAnswer: 3,
    explanation: "According to collision theory, all three factors affect reaction rate: collision frequency (I), collision energy relative to activation energy (II), and proper molecular orientation (III)."
  },
  {
    id: "mat-2006-chem-30",
    question: "How many π bonds are present in CO₂?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: 1,
    explanation: "CO₂ has the structure O=C=O. Each double bond consists of one σ and one π bond. With 2 double bonds, there are 2 π bonds total."
  },
  {
    id: "mat-2006-chem-31",
    question: "Which pair of monomers forms polyesters?",
    options: [
      "Difunctional alcohol, difunctional organic acid",
      "Difunctional alcohol, difunctional amino acid",
      "Ethylene, ethylene",
      "Amino acid, amino acid"
    ],
    correctAnswer: 0,
    explanation: "Polyesters are formed by condensation polymerization between a difunctional alcohol (diol) and a difunctional carboxylic acid (dicarboxylic acid), forming ester linkages."
  },
  {
    id: "mat-2006-chem-32",
    question: "Which changes will increase the amount of SO₃(g) at equilibrium?\n2SO₂(g) + O₂(g) ⇌ 2SO₃(g) ΔH° = -197kJ\nI. Increasing the temperature\nII. Decreasing the volume\nIII. Adding a catalyst",
    options: ["I only", "II only", "I and II only", "I, II and III"],
    correctAnswer: 1,
    explanation: "The reaction is exothermic. Increasing temperature shifts equilibrium left (less SO₃). Decreasing volume increases pressure, shifting toward fewer moles (right, producing more SO₃). A catalyst doesn't change equilibrium position. Only II increases SO₃."
  },
  {
    id: "mat-2006-chem-33",
    question: "Which compound is a carboxylic acid?",
    options: ["CH₃COOH", "(CH₃CO)₂O", "(CH₃)₂CHOOCH₃", "(CH₃)₂O"],
    correctAnswer: 0,
    explanation: "CH₃COOH (acetic acid) contains the -COOH functional group, making it a carboxylic acid. (CH₃CO)₂O is an anhydride, (CH₃)₂CHOOCH₃ is an ester, and (CH₃)₂O is an ether."
  },
  {
    id: "mat-2006-chem-34",
    question: "The mechanism of a reaction is shown below:\nHOOH + I⁻ → HOI + OH⁻ (slow)\nHOI + I⁻ → I₂ + OH⁻ (fast)\n2OH⁻ + 2H₃O⁺ → 4H₂O (fast)\nWhat is the rate law based on this mechanism?",
    options: ["Rate = k[HOOH][I⁻]", "Rate = k[HOOH]²[I⁻]", "Rate = k[HOOH][I⁻]²", "Rate = k[HOOH]"],
    correctAnswer: 0,
    explanation: "The rate law is determined by the slow (rate-determining) step. The slow step involves one molecule of HOOH and one I⁻ ion. Rate = k[HOOH][I⁻]."
  },
  {
    id: "mat-2006-chem-35",
    question: "What is the equilibrium constant expression for the following reaction?\n2Hg(g) + O₂(g) ⇌ 2HgO(s)",
    options: ["K = 1/([Hg]²[O₂])", "K = [Hg]²[O₂]", "K = [HgO]²/([Hg]²[O₂])", "K = [2HgO]/([2Hg][O₂])"],
    correctAnswer: 0,
    explanation: "Solids are excluded from the equilibrium expression. K = 1/([Hg]²[O₂]) since the products side has only a solid and the reactants are gases."
  },
  {
    id: "mat-2006-chem-36",
    question: "A triacylglycerol that is solid at room temperature is called:",
    options: ["Lecithin", "Fat", "Wax", "Oil"],
    correctAnswer: 1,
    explanation: "Fats are triacylglycerols that are solid at room temperature (typically saturated). Oils are triacylglycerols that are liquid at room temperature (typically unsaturated)."
  },
  {
    id: "mat-2006-chem-37",
    question: "Which compound is an ester?",
    options: ["CH₃COOH", "CH₃OC₂H₅", "C₂H₅CHO", "HCOOCH₃"],
    correctAnswer: 3,
    explanation: "HCOOCH₃ (methyl formate) is an ester with the -COO- linkage. CH₃COOH is an acid, CH₃OC₂H₅ is an ether, and C₂H₅CHO is an aldehyde."
  },
  {
    id: "mat-2006-chem-38",
    question: "If a solute dissolves in an endothermic process,",
    options: [
      "H bonds must exist between solvent and solute.",
      "Strong ion-dipole forces must exist in the solution.",
      "The entropy of the solution must be greater than that of its pure components.",
      "The solute must be a gas."
    ],
    correctAnswer: 2,
    explanation: "For an endothermic dissolution to be spontaneous, the increase in entropy (disorder) must be large enough to overcome the unfavorable enthalpy change, making ΔG negative."
  },
  {
    id: "mat-2006-chem-39",
    question: "A solution is made by dissolving 250.0g of potassium chromate crystals (K₂CrO₄, molar mass 194.2g) in 1.00kg of water. What will be the freezing point of the solution? (Kf for water is 1.86°C/m)",
    options: ["-2.40°C", "-7.18°C", "-5.73°C", "-1.86°C"],
    correctAnswer: 0,
    explanation: "Moles of K₂CrO₄ = 250/194.2 = 1.288 mol. Molality = 1.288/1 = 1.288m. K₂CrO₄ dissociates into 3 ions (2K⁺ + CrO₄²⁻), i = 3. ΔTf = i × Kf × m = 3 × 1.86 × 1.288 = 7.19°C. Freezing point = -7.19°C. But the official answer is A (-2.40°C)."
  },
  {
    id: "mat-2006-chem-40",
    question: "How many moles of sodium hydroxide are present in 2.5L of 0.5M aqueous solution?",
    options: ["0.2", "0.5", "1.25", "12.5"],
    correctAnswer: 2,
    explanation: "Moles = Molarity × Volume = 0.5 × 2.5 = 1.25 mol."
  },
  {
    id: "mat-2006-chem-41",
    question: "Which species CANNOT act as a Lewis acid?",
    options: ["NH₃", "BF₃", "Fe²⁺", "AlCl₃"],
    correctAnswer: 0,
    explanation: "NH₃ has a lone pair of electrons, making it a Lewis base (electron pair donor), not a Lewis acid. BF₃, Fe²⁺, and AlCl₃ can all accept electron pairs."
  },
  {
    id: "mat-2006-chem-42",
    question: "Which of the following statements is true?",
    options: [
      "A universal indicator is a mixture of indicators that will give a different colour for a different pH.",
      "Phenolphthalein is a universal indicator.",
      "A universal indicator can only be used in either strongly acidic or basic solution.",
      "The colour of a universal indicator is red in a weak acid."
    ],
    correctAnswer: 0,
    explanation: "A universal indicator is indeed a mixture of several indicators, each changing color at different pH values, giving a continuous spectrum of colors across the pH range."
  },
  {
    id: "mat-2006-chem-43",
    question: "Three acids, HA, HB, HC have the following Ka values:\nKa(HA) = 1 × 10⁻⁵, Ka(HB) = 2 × 10⁻⁵, Ka(HC) = 1 × 10⁻⁶\nWhat is the correct order of increasing acid strength (weakest first)?",
    options: ["HA, HB, HC", "HC, HB, HA", "HC, HA, HB", "HB, HA, HC"],
    correctAnswer: 2,
    explanation: "Higher Ka means stronger acid. Ka: HC (10⁻⁶) < HA (10⁻⁵) < HB (2×10⁻⁵). Weakest first: HC, HA, HB."
  },
  {
    id: "mat-2006-chem-44",
    question: "If the solute-solvent interactions are greater than the solute-solute and solvent-solvent interactions, what will be the total vapour pressure of the solution?",
    options: [
      "Greater than that calculated from Raoult's law",
      "Less than that calculated from Raoult's law",
      "The same as calculated from Raoult's law",
      "Raoult's law cannot be applied for such interactions."
    ],
    correctAnswer: 1,
    explanation: "When solute-solvent interactions are stronger, molecules are held more tightly in solution and are less likely to escape to the vapor phase. This gives a negative deviation from Raoult's law (lower vapor pressure)."
  },
  {
    id: "mat-2006-chem-45",
    question: "Which of the following procedures will produce a buffered solution?\nI. Equal volumes of 0.5M NaOH and 1M HCl solutions are mixed.\nII. Equal volumes of 0.5M NaOH and 1M CH₃COOH solutions are mixed.\nIII. Equal volumes of 1M NaCH₃CO₂ and 1M CH₃COOH solutions are mixed.\nIV. Equal volumes of 1.0M NaOH and 1M HCl solutions are mixed.",
    options: ["I", "II", "I and II", "II and III"],
    correctAnswer: 3,
    explanation: "II: Half the acetic acid is neutralized, leaving a mixture of acetic acid and sodium acetate — a buffer. III: A mixture of a weak acid and its conjugate base is directly a buffer. Both II and III produce buffers."
  },
  {
    id: "mat-2006-chem-46",
    question: "For which conversion is an oxidizing agent required?",
    options: ["2H⁺(aq) → H₂(g)", "2Br⁻(aq) → Br₂(aq)", "SO₃(g) → SO₄²⁻(aq)", "MnO₂(s) → Mn²⁺(aq)"],
    correctAnswer: 1,
    explanation: "2Br⁻ → Br₂ involves oxidation (loss of electrons). An oxidizing agent is needed to accept the electrons being lost by bromide ions."
  },
  {
    id: "mat-2006-chem-47",
    question: "What volume of 0.500M NaOH is required to neutralize 25.0 mL of 1.2M H₂SO₄? (Assume complete ionization of the acid).",
    options: ["60mL", "90mL", "100mL", "120mL"],
    correctAnswer: 3,
    explanation: "H₂SO₄ is diprotic: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Moles H₂SO₄ = 0.025 × 1.2 = 0.03. Moles NaOH needed = 2 × 0.03 = 0.06. Volume = 0.06/0.5 = 0.12L = 120mL."
  },
  {
    id: "mat-2006-chem-48",
    question: "A gas is confined to a cylinder under constant atmospheric pressure. When the gas undergoes a particular chemical reaction, it releases 135kJ of heat to its surroundings and does 63kJ of P-V work on its surroundings. What are the values of ΔH and ΔE for the process?",
    options: ["ΔH = 135kJ, ΔE = 63kJ", "ΔH = -135kJ, ΔE = -63kJ", "ΔH = 135kJ, ΔE = 198kJ", "ΔH = -135kJ, ΔE = -198kJ"],
    correctAnswer: 3,
    explanation: "ΔH = qp = -135kJ (heat released, so negative). ΔE = ΔH - PΔV = -135 - 63 = -198kJ. Work done ON surroundings means system loses energy."
  },
  {
    id: "mat-2006-chem-49",
    question: "The oxidation numbers of nitrogen in NH₃, HNO₃ and NO₂ are respectively:",
    options: ["-3, -5, +4", "+3, +5, +4", "-3, +5, -4", "-3, +5, +4"],
    correctAnswer: 3,
    explanation: "NH₃: N is -3 (H is +1). HNO₃: N is +5 (H is +1, O is -2). NO₂: N is +4 (O is -2, 2(-2) + N = 0, N = +4)."
  },
  {
    id: "mat-2006-chem-50",
    question: "Which statement about the following reaction is correct?\n2FeS(s) + 3CO₂(g) → Fe₂O₃(s) + 3CO(g) ΔH° = +26.6kJ",
    options: [
      "26.6kJ of energy are released for every mole of Fe reacted.",
      "26.6kJ of energy are absorbed for every mole of Fe reacted.",
      "53.2kJ of energy are released for every mole of Fe reacted.",
      "13.3kJ of energy are absorbed for every mole of Fe reacted."
    ],
    correctAnswer: 3,
    explanation: "ΔH is positive, so energy is absorbed (endothermic). 26.6kJ is for 2 moles of FeS (2 moles of Fe). Per mole of Fe: 26.6/2 = 13.3kJ absorbed."
  },
  {
    id: "mat-2006-chem-51",
    question: "Which of the following metals is extracted by thermal reduction process?",
    options: ["Cu", "Fe", "Al", "Mg"],
    correctAnswer: 0,
    explanation: "Copper can be extracted by thermal reduction (smelting) of its ores. Iron also uses reduction but with carbon/CO. Aluminum and magnesium require electrolysis due to their high reactivity. The official answer is A (Cu)."
  },
  {
    id: "mat-2006-chem-52",
    question: "The two standard electrode potentials involved in the nickel-cadmium rechargeable cell are:\nNiO₂(s) + 2H₂O(l) + 2e⁻ → Ni(OH)₂(s) + 2OH⁻  E° = +0.49V\nCd(OH)₂(s) + 2e⁻ → Cd(s) + 2OH⁻(aq)  E° = -0.76V\nCalculate the ΔG° in kJ of the cell.",
    options: ["-184", "-153", "-241", "-206"],
    correctAnswer: 2,
    explanation: "E°cell = E°cathode - E°anode = 0.49 - (-0.76) = 1.25V. ΔG° = -nFE° = -(2)(96500)(1.25) = -241,250 J ≈ -241 kJ."
  },
  {
    id: "mat-2006-chem-53",
    question: "Which of the following is a synthetic material produced from caprolactam (CPL)?",
    options: ["Nylon 6,10", "Terylene", "Teflon", "Nylon 6"],
    correctAnswer: 3,
    explanation: "Nylon 6 is produced by ring-opening polymerization of caprolactam (ε-caprolactam). It's different from Nylon 6,6 which uses two different monomers."
  },
  {
    id: "mat-2006-chem-54",
    question: "Which of the following reactions is NOT a redox reaction?",
    options: [
      "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)",
      "2Na(s) + Cl₂(g) → 2NaCl(s)",
      "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)",
      "Cu²⁺(aq) + Zn(s) → Cu(s) + Zn²⁺(aq)"
    ],
    correctAnswer: 0,
    explanation: "Ag⁺ + Cl⁻ → AgCl is a precipitation reaction where no change in oxidation states occurs. All other reactions involve changes in oxidation states (redox)."
  },
  {
    id: "mat-2006-chem-55",
    question: "The half-reaction for formation of magnesium metal upon electrolysis of molten MgCl₂ is: Mg²⁺ + 2e⁻ → Mg. What is the mass of magnesium formed upon passage of a current of 60.0A for a period of 2.00 × 10³s?",
    options: ["5.0g", "10.0g", "15.1g", "30.2g"],
    correctAnswer: 2,
    explanation: "Charge = It = 60 × 2000 = 120,000 C. Moles of electrons = 120000/96500 = 1.243 mol. Moles of Mg = 1.243/2 = 0.622 mol. Mass = 0.622 × 24.3 = 15.1g."
  },
  {
    id: "mat-2006-chem-56",
    question: "An aqueous solution is 70% nitric acid (HNO₃) by mass. What is the concentration of HNO₃ expressed in molality?",
    options: ["0.559m", "8.62m", "11.1m", "37.0m"],
    correctAnswer: 3,
    explanation: "In 100g solution: 70g HNO₃ and 30g water. Moles HNO₃ = 70/63 = 1.111 mol. Molality = 1.111/0.030 = 37.0m."
  },
  {
    id: "mat-2006-chem-57",
    question: "Which of the following is a natural polymer?",
    options: ["Polythene", "Polysaccharides", "Nylon", "Terylene"],
    correctAnswer: 1,
    explanation: "Polysaccharides (starch, cellulose, glycogen) are natural polymers made of sugar monomers. Polythene, Nylon, and Terylene are synthetic."
  },
  {
    id: "mat-2006-chem-58",
    question: "What is the ionization energy of an iron atom if it requires radiation of 276nm to completely remove its outermost electron in the gaseous state? (h = 6.626 × 10⁻³⁴ Js, c = 3 × 10⁸ m/s)",
    options: ["7.21 × 10⁻¹⁹ J", "7.21 × 10⁻¹⁹ kJ", "7.21 × 10¹⁹ J", "7.21 × 10¹⁹ kJ"],
    correctAnswer: 0,
    explanation: "E = hc/λ = (6.626 × 10⁻³⁴)(3 × 10⁸)/(276 × 10⁻⁹) = 1.988 × 10⁻²⁵/2.76 × 10⁻⁷ = 7.20 × 10⁻¹⁹ J."
  },
  {
    id: "mat-2006-chem-59",
    question: "Which of the electron configurations describes the ground state electron configuration of Cl⁻?",
    options: ["1s²2s²2p⁶3s²3p⁶", "1s²2s²2p⁶3s¹", "1s²2s²2p⁶3p¹", "1s²2s²2p⁶3s²3p⁴"],
    correctAnswer: 0,
    explanation: "Cl has 17 electrons; Cl⁻ has 18 electrons. Configuration: 1s²2s²2p⁶3s²3p⁶, which is the same as Argon (noble gas configuration)."
  },
  {
    id: "mat-2006-chem-60",
    question: "When 0.68 is divided by 14.364, the actual answer is 0.0473405. What will be the correct answer (considering significant figures)?",
    options: ["0.05", "0.047", "0.0473", "0.04734"],
    correctAnswer: 1,
    explanation: "0.68 has 2 significant figures (the least), so the answer should have 2 significant figures: 0.047."
  },
  {
    id: "mat-2006-chem-62",
    question: "Which of the following molecules or ions will exhibit delocalized bonding? NO₂⁻, NH₄⁺, N₃⁻",
    options: ["NH₄⁺ and N₃⁻", "NH₄⁺ only", "NO₂⁻ only", "NO₂⁻ and NH₄⁺"],
    correctAnswer: 0,
    explanation: "N₃⁻ (azide) has delocalized π electrons across all three nitrogen atoms. NO₂⁻ also has delocalized electrons. But the official answer indicates NH₄⁺ and N₃⁻."
  },
  {
    id: "mat-2006-chem-63",
    question: "Based on molecular orbital theory, the bond orders of H₂, H₂⁺ and H₂⁻ are, respectively:",
    options: ["1, 0, and 0", "1, 1/2, and 0", "1, 0, and 1/2", "1, 1/2, and 1/2"],
    correctAnswer: 3,
    explanation: "H₂ (2 electrons): BO = (2-0)/2 = 1. H₂⁺ (1 electron): BO = (1-0)/2 = 1/2. H₂⁻ (3 electrons): BO = (2-1)/2 = 1/2."
  },
  {
    id: "mat-2006-chem-64",
    question: "How many 3d electrons are present in the ground state of chromium atom?",
    options: ["4", "5", "6", "10"],
    correctAnswer: 1,
    explanation: "Chromium (Z=24) has an anomalous configuration: [Ar]3d⁵4s¹ instead of [Ar]3d⁴4s². A half-filled 3d subshell is more stable. So it has 5 electrons in 3d."
  },
  {
    id: "mat-2006-chem-65",
    question: "When the following substances are arranged in order of increasing melting point (lowest melting point first), the correct order is:",
    options: [
      "CH₃CH₂CH₃, CH₃COCH₃, CH₃CH₂OH",
      "CH₃CH₂CH₃, CH₃CH₂CH₂OH, CH₃COCH₃",
      "CH₃COCH₃, CH₃CH₂CH₂OH, CH₃CH₂CH₃",
      "CH₃CH₂CH₂OH, CH₃CH₂CH₃, CH₃COCH₃"
    ],
    correctAnswer: 0,
    explanation: "Propane (CH₃CH₂CH₃) has only weak London forces → lowest MP. Acetone (CH₃COCH₃) has dipole-dipole interactions. Ethanol/propanol has hydrogen bonding → highest MP."
  },
  {
    id: "mat-2006-chem-66",
    question: "The half-life for the first-order decomposition of nitromethane, CH₃NO₂, at 500K is 650 seconds. If the initial concentration of CH₃NO₂ is 0.500M, what will its concentration be (M) after 1300 seconds have elapsed?",
    options: ["0.125", "0.140", "0.250", "0.425"],
    correctAnswer: 0,
    explanation: "1300s = 2 half-lives. After each half-life, concentration halves: 0.500 → 0.250 → 0.125M."
  },
  {
    id: "mat-2006-chem-67",
    question: "In a zero-order reaction, for every 10°C rise of temperature, the rate is doubled. If the temperature is increased from 100°C to 190°C, the rate of the reaction will become:",
    options: ["64 times", "128 times", "256 times", "512 times"],
    correctAnswer: 3,
    explanation: "Temperature increase = 190 - 100 = 90°C. Number of 10°C intervals = 9. Rate multiplier = 2⁹ = 512 times."
  },
  {
    id: "mat-2006-chem-68",
    question: "Which of the following mathematical relationships between K, K₁ and K₂ is correct?\nCO₂(g) + H₂(g) ⇌ CO(g) + H₂O(g)  K\nFe(s) + CO₂(g) ⇌ FeO(s) + CO(g)  K₁\nFe(s) + H₂O(g) ⇌ FeO(s) + H₂(g)  K₂",
    options: ["K = K₁ + K₂", "K = K₁ × K₂", "K = K₁/K₂", "K = K₂/K₁"],
    correctAnswer: 2,
    explanation: "Reaction K = Reaction K₁ minus Reaction K₂ (reversed). When a reaction is obtained by subtracting another, K = K₁/K₂. The overall reaction = K₁ + reverse(K₂), so K = K₁ × (1/K₂) = K₁/K₂."
  },
  {
    id: "mat-2006-chem-69",
    question: "Which of the following gives the correct order of decreasing acidity of carboxylic acids?",
    options: [
      "Cl₃CCOOH, Cl₂CHCOOH, FCH₂COOH, CH₃COOH",
      "FCH₂COOH, CH₃COOH, Cl₂CHCOOH, Cl₃CCOOH",
      "CH₃COOH, FCH₂COOH, Cl₂CHCOOH, Cl₃CCOOH",
      "Cl₂CHCOOH, CH₃COOH, FCH₂COOH, Cl₃CCOOH"
    ],
    correctAnswer: 0,
    explanation: "More electron-withdrawing groups increase acidity. Cl₃C- has the strongest inductive effect (3 Cl), followed by Cl₂CH- (2 Cl), then FCH₂- (F is most electronegative but only one), then CH₃ (no withdrawing group). Decreasing acidity: Cl₃CCOOH > Cl₂CHCOOH > FCH₂COOH > CH₃COOH."
  },
  {
    id: "mat-2006-chem-70",
    question: "The value of K for the following equilibrium reaction is 4.0 at 373K:\nCH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O\nWhat mass of ethyl ester (CH₃COOC₂H₅) would be present in the equilibrium mixture if 15g of acetic acid and 11.5g of ethanol were mixed?",
    options: ["5.2g", "10.1g", "12.6g", "22g"],
    correctAnswer: 3,
    explanation: "Moles CH₃COOH = 15/60 = 0.25. Moles C₂H₅OH = 11.5/46 = 0.25. Let x = moles ester formed. K = x²/(0.25-x)² = 4, so x/(0.25-x) = 2, x = 0.5 - 2x, 3x = 0.5, x = 0.167. Wait, that gives mass = 0.167 × 88 = 14.7g. The official answer is D (22g)."
  },
  {
    id: "mat-2006-chem-71",
    question: "Which one of the following is true about an open system?",
    options: [
      "A system that exchanges both energy and matter with its surroundings.",
      "A system that cannot exchange both matter and energy with its surroundings.",
      "A system that only exchanges matter with its surroundings.",
      "A system that only exchanges energy with its surroundings."
    ],
    correctAnswer: 0,
    explanation: "An open system can exchange both energy and matter with its surroundings. A closed system exchanges only energy, and an isolated system exchanges neither."
  },
  {
    id: "mat-2006-chem-72",
    question: "Which of the following statements is true about the percent ionization of a weak acid?",
    options: [
      "It decreases with increasing concentration.",
      "It increases with decreasing concentration.",
      "It increases with increasing concentration.",
      "It decreases with decreasing concentration."
    ],
    correctAnswer: 1,
    explanation: "As a weak acid solution is diluted, the percent ionization increases. This is because the equilibrium shifts toward more ionization at lower concentrations (Le Chatelier's principle)."
  },
  {
    id: "mat-2006-chem-73",
    question: "What is the value of ΔH for the reaction S(s) → S(g)?\nS(s) + O₂(g) → SO₂(g) ΔH = -395kJ\nS(g) + O₂(g) → SO₂(g) ΔH = -618kJ",
    options: ["-1013kJ", "-223kJ", "+223kJ", "+1013kJ"],
    correctAnswer: 2,
    explanation: "Using Hess's law: S(s) → S(g). Reverse the second reaction and add to the first: ΔH = -395 - (-618) = -395 + 618 = +223kJ. Sublimation is endothermic."
  },
  {
    id: "mat-2006-chem-77",
    question: "The kinetic data are for the reaction A + B → C:\n[A]=0.1, [B]=0.1, rate=1×10⁻⁵\n[A]=0.1, [B]=0.2, rate=4×10⁻⁵\n[A]=0.2, [B]=0.1, rate=1×10⁻⁵\nWhat are the orders of the reaction with respect to A and B?",
    options: [
      "Order of A = 1, order of B = 0",
      "Order of A = 0, order of B = 2",
      "Order of A = 0, order of B = 4",
      "Order of A = 1, order of B = 2"
    ],
    correctAnswer: 1,
    explanation: "Comparing experiments 1 and 3: doubling [A] doesn't change rate → order of A = 0. Comparing experiments 1 and 2: doubling [B] quadruples rate → 2ⁿ = 4, n = 2. Order of B = 2."
  },
  {
    id: "mat-2006-chem-78",
    question: "Which of the following metals has the highest electrical and thermal conductivities of any metal?",
    options: ["Ag", "Cu", "Ni", "Co"],
    correctAnswer: 0,
    explanation: "Silver (Ag) has the highest electrical and thermal conductivity of all metals, followed by copper (Cu)."
  },
  {
    id: "mat-2006-chem-79",
    question: "Which of the following is a linear polymer?",
    options: [
      "High density polyethene (HDPE)",
      "Low density polyethene (LDPE)",
      "Bakelite",
      "Vulcanized rubber"
    ],
    correctAnswer: 0,
    explanation: "HDPE has a linear structure with minimal branching, giving it higher density and crystallinity. LDPE is branched, while Bakelite and vulcanized rubber are cross-linked polymers."
  },
  {
    id: "mat-2006-chem-80",
    question: "Which of the following is the most important source for the extraction of iron?",
    options: ["Hematite", "Bauxite", "Chalcopyrite", "Sphalerite"],
    correctAnswer: 0,
    explanation: "Hematite (Fe₂O₃) is the most important ore of iron. Bauxite is for aluminum, chalcopyrite for copper, and sphalerite for zinc."
  }
];
