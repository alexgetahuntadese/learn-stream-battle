import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.52.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface MathQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting complete mathematics data import...');

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Complete Grade 12 Mathematics data with multiple questions per difficulty level
    const grade12Mathematics = {
      "Unit 1: Sequence and Series": [
        // Easy Questions
        {
          id: 1001,
          question: "What is the next term in the arithmetic sequence 2, 5, 8, 11, ...?",
          options: ["13", "14", "15", "16"],
          correct: "14",
          explanation: "This is an arithmetic sequence with first term a₁ = 2 and common difference d = 3. The next term is 11 + 3 = 14.",
          difficulty: "Easy",
          chapter: "Unit 1: Sequence and Series"
        },
        {
          id: 1002,
          question: "In the geometric sequence 3, 6, 12, 24, ..., what is the common ratio?",
          options: ["2", "3", "4", "6"],
          correct: "2",
          explanation: "The common ratio r = 6/3 = 2. Each term is obtained by multiplying the previous term by 2.",
          difficulty: "Easy",
          chapter: "Unit 1: Sequence and Series"
        },
        {
          id: 1003,
          question: "What is the 5th term of the arithmetic sequence with first term 7 and common difference 4?",
          options: ["23", "27", "31", "35"],
          correct: "23",
          explanation: "Using aₙ = a₁ + (n-1)d: a₅ = 7 + (5-1)×4 = 7 + 16 = 23.",
          difficulty: "Easy",
          chapter: "Unit 1: Sequence and Series"
        },
        {
          id: 1004,
          question: "What is the sum of the first 4 terms of the series 1 + 3 + 5 + 7 + ...?",
          options: ["16", "18", "20", "22"],
          correct: "16",
          explanation: "The first 4 terms are 1, 3, 5, 7. Their sum is 1 + 3 + 5 + 7 = 16.",
          difficulty: "Easy",
          chapter: "Unit 1: Sequence and Series"
        },
        {
          id: 1005,
          question: "In the sequence 1, 4, 9, 16, 25, ..., what type of sequence is this?",
          options: ["Arithmetic", "Geometric", "Square numbers", "Fibonacci"],
          correct: "Square numbers",
          explanation: "This sequence represents perfect squares: 1², 2², 3², 4², 5², ...",
          difficulty: "Easy",
          chapter: "Unit 1: Sequence and Series"
        },
        // Medium Questions
        {
          id: 1008,
          question: "Find the sum of the first 20 terms of the arithmetic sequence 5, 8, 11, 14, ...",
          options: ["650", "670", "685", "700"],
          correct: "670",
          explanation: "Using Sₙ = n/2[2a₁ + (n-1)d]: S₂₀ = 20/2[2(5) + (20-1)(3)] = 10[10 + 57] = 670.",
          difficulty: "Medium",
          chapter: "Unit 1: Sequence and Series"
        },
        {
          id: 1009,
          question: "What is the sum of the infinite geometric series 1 + 1/2 + 1/4 + 1/8 + ...?",
          options: ["1", "2", "3", "4"],
          correct: "2",
          explanation: "For |r| < 1, S∞ = a₁/(1-r) = 1/(1-1/2) = 1/(1/2) = 2.",
          difficulty: "Medium",
          chapter: "Unit 1: Sequence and Series"
        },
        {
          id: 1010,
          question: "Find the nth term formula for the sequence 3, 7, 11, 15, ...",
          options: ["aₙ = 4n - 1", "aₙ = 4n + 1", "aₙ = 3n + 1", "aₙ = n + 3"],
          correct: "aₙ = 4n - 1",
          explanation: "This is arithmetic with a₁ = 3 and d = 4. So aₙ = a₁ + (n-1)d = 3 + (n-1)4 = 3 + 4n - 4 = 4n - 1.",
          difficulty: "Medium",
          chapter: "Unit 1: Sequence and Series"
        },
        // Hard Questions
        {
          id: 1015,
          question: "Find the sum of the series 1² + 2² + 3² + ... + n² for n = 10.",
          options: ["385", "390", "395", "400"],
          correct: "385",
          explanation: "Using the formula for sum of squares: Σk² = n(n+1)(2n+1)/6 = 10(11)(21)/6 = 2310/6 = 385.",
          difficulty: "Hard",
          chapter: "Unit 1: Sequence and Series"
        },
        {
          id: 1016,
          question: "In a geometric sequence, the sum of the first 3 terms is 21 and the sum of the first 6 terms is 189. Find the first term.",
          options: ["3", "6", "9", "12"],
          correct: "3",
          explanation: "Let a be the first term and r be the common ratio. Using the geometric series formula and solving the system of equations gives a = 3.",
          difficulty: "Hard",
          chapter: "Unit 1: Sequence and Series"
        },
        {
          id: 1017,
          question: "Find the value of x if 2, x, 18 are in geometric progression.",
          options: ["±6", "±8", "±9", "±12"],
          correct: "±6",
          explanation: "For geometric progression: x² = 2 × 18 = 36, so x = ±6.",
          difficulty: "Hard",
          chapter: "Unit 1: Sequence and Series"
        }
      ],
      "Unit 2: Differential Calculus": [
        // Easy Questions
        {
          id: 2001,
          question: "What is the derivative of f(x) = x³?",
          options: ["x²", "2x²", "3x²", "3x³"],
          correct: "3x²",
          explanation: "Using the power rule: d/dx[xⁿ] = nxⁿ⁻¹, so d/dx[x³] = 3x².",
          difficulty: "Easy",
          chapter: "Unit 2: Differential Calculus"
        },
        {
          id: 2002,
          question: "What is the derivative of f(x) = 5x + 2?",
          options: ["5", "5x", "7", "5x + 2"],
          correct: "5",
          explanation: "The derivative of a linear function ax + b is just the coefficient a, so f'(x) = 5.",
          difficulty: "Easy",
          chapter: "Unit 2: Differential Calculus"
        },
        {
          id: 2003,
          question: "What is the derivative of f(x) = 7?",
          options: ["0", "7", "7x", "1"],
          correct: "0",
          explanation: "The derivative of a constant is always 0.",
          difficulty: "Easy",
          chapter: "Unit 2: Differential Calculus"
        },
        // Medium Questions
        {
          id: 2008,
          question: "Find the derivative of f(x) = x² sin(x).",
          options: ["2x sin(x) + x² cos(x)", "2x sin(x) - x² cos(x)", "x² cos(x)", "2x cos(x)"],
          correct: "2x sin(x) + x² cos(x)",
          explanation: "Using the product rule: d/dx[uv] = u'v + uv'. Here u = x², v = sin(x), so f'(x) = 2x sin(x) + x² cos(x).",
          difficulty: "Medium",
          chapter: "Unit 2: Differential Calculus"
        },
        {
          id: 2009,
          question: "What is the derivative of f(x) = e^(2x)?",
          options: ["e^(2x)", "2e^(2x)", "2xe^(2x)", "e^(2x) + 2x"],
          correct: "2e^(2x)",
          explanation: "Using the chain rule: d/dx[e^(u)] = e^(u) · u'. Here u = 2x, so f'(x) = e^(2x) · 2 = 2e^(2x).",
          difficulty: "Medium",
          chapter: "Unit 2: Differential Calculus"
        },
        // Hard Questions
        {
          id: 2015,
          question: "Find the critical points of f(x) = x³ - 3x² + 2.",
          options: ["x = 0, x = 2", "x = 1, x = 2", "x = 0, x = 1", "x = -1, x = 2"],
          correct: "x = 0, x = 2",
          explanation: "f'(x) = 3x² - 6x = 3x(x - 2). Setting f'(x) = 0 gives x = 0 and x = 2.",
          difficulty: "Hard",
          chapter: "Unit 2: Differential Calculus"
        }
      ],
      "Unit 3: Integral Calculus": [
        // Easy Questions
        {
          id: 3001,
          question: "What is ∫2x dx?",
          options: ["x²", "x² + C", "2x²", "2x² + C"],
          correct: "x² + C",
          explanation: "∫2x dx = 2∫x dx = 2(x²/2) + C = x² + C. Don't forget the constant of integration!",
          difficulty: "Easy",
          chapter: "Unit 3: Integral Calculus"
        },
        {
          id: 3002,
          question: "What is ∫5 dx?",
          options: ["5", "5x", "5x + C", "5 + C"],
          correct: "5x + C",
          explanation: "The integral of a constant k is kx + C. So ∫5 dx = 5x + C.",
          difficulty: "Easy",
          chapter: "Unit 3: Integral Calculus"
        },
        {
          id: 3003,
          question: "What is ∫x³ dx?",
          options: ["x⁴/4 + C", "3x² + C", "x⁴ + C", "4x³ + C"],
          correct: "x⁴/4 + C",
          explanation: "Using the power rule for integration: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. So ∫x³ dx = x⁴/4 + C.",
          difficulty: "Easy",
          chapter: "Unit 3: Integral Calculus"
        },
        // Medium Questions
        {
          id: 3008,
          question: "Evaluate ∫₀² x² dx.",
          options: ["8/3", "4", "8", "16/3"],
          correct: "8/3",
          explanation: "∫x² dx = x³/3 + C. Evaluating from 0 to 2: [x³/3]₀² = 8/3 - 0 = 8/3.",
          difficulty: "Medium",
          chapter: "Unit 3: Integral Calculus"
        },
        {
          id: 3009,
          question: "What is ∫cos(x) dx?",
          options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
          correct: "sin(x) + C",
          explanation: "The integral of cos(x) is sin(x) + C.",
          difficulty: "Medium",
          chapter: "Unit 3: Integral Calculus"
        },
        // Hard Questions
        {
          id: 3015,
          question: "Find ∫x ln(x) dx using integration by parts.",
          options: ["x²ln(x)/2 - x²/4 + C", "x²ln(x)/2 + x²/4 + C", "xln(x) - x + C", "x²ln(x) - x² + C"],
          correct: "x²ln(x)/2 - x²/4 + C",
          explanation: "Using integration by parts with u = ln(x), dv = x dx: ∫x ln(x) dx = x²ln(x)/2 - ∫x²/2 · 1/x dx = x²ln(x)/2 - x²/4 + C.",
          difficulty: "Hard",
          chapter: "Unit 3: Integral Calculus"
        }
      ],
      "Unit 4: Statistics": [
        // Easy Questions
        {
          id: 4001,
          question: "What is the mean of the data set {2, 4, 6, 8, 10}?",
          options: ["5", "6", "7", "8"],
          correct: "6",
          explanation: "Mean = (2 + 4 + 6 + 8 + 10)/5 = 30/5 = 6.",
          difficulty: "Easy",
          chapter: "Unit 4: Statistics"
        },
        {
          id: 4002,
          question: "What is the median of the data set {3, 7, 1, 9, 5}?",
          options: ["5", "6", "7", "3"],
          correct: "5",
          explanation: "First arrange in order: {1, 3, 5, 7, 9}. The median is the middle value: 5.",
          difficulty: "Easy",
          chapter: "Unit 4: Statistics"
        },
        {
          id: 4003,
          question: "What is the mode of the data set {2, 3, 3, 4, 5, 3, 6}?",
          options: ["2", "3", "4", "5"],
          correct: "3",
          explanation: "The mode is the value that appears most frequently. 3 appears three times.",
          difficulty: "Easy",
          chapter: "Unit 4: Statistics"
        },
        // Medium Questions
        {
          id: 4008,
          question: "What is the standard deviation of the data set {1, 3, 5, 7, 9}?",
          options: ["2", "2.83", "3", "3.16"],
          correct: "2.83",
          explanation: "Mean = 5. Variance = [(1-5)² + (3-5)² + (5-5)² + (7-5)² + (9-5)²]/5 = [16+4+0+4+16]/5 = 8. Standard deviation = √8 ≈ 2.83.",
          difficulty: "Medium",
          chapter: "Unit 4: Statistics"
        },
        {
          id: 4009,
          question: "What is the range of the data set {12, 5, 8, 15, 3, 10}?",
          options: ["10", "12", "13", "15"],
          correct: "12",
          explanation: "Range = Maximum - Minimum = 15 - 3 = 12.",
          difficulty: "Medium",
          chapter: "Unit 4: Statistics"
        },
        // Hard Questions
        {
          id: 4015,
          question: "In a normal distribution with μ = 100 and σ = 15, what percentage of values fall within two standard deviations?",
          options: ["68%", "95%", "99.7%", "50%"],
          correct: "95%",
          explanation: "By the empirical rule (68-95-99.7 rule), approximately 95% of values fall within two standard deviations of the mean in a normal distribution.",
          difficulty: "Hard",
          chapter: "Unit 4: Statistics"
        }
      ],
      "Unit 5: Linear Programming": [
        // Easy Questions
        {
          id: 5001,
          question: "In linear programming, what is the feasible region?",
          options: ["The area where all constraints are satisfied", "The optimal solution point", "The objective function", "The corner points"],
          correct: "The area where all constraints are satisfied",
          explanation: "The feasible region is the set of all points that satisfy all the constraints of the linear programming problem.",
          difficulty: "Easy",
          chapter: "Unit 5: Linear Programming"
        },
        {
          id: 5002,
          question: "What is the objective function in linear programming?",
          options: ["The function to be maximized or minimized", "The constraint equations", "The feasible region", "The corner points"],
          correct: "The function to be maximized or minimized",
          explanation: "The objective function is the linear function that needs to be optimized (maximized or minimized).",
          difficulty: "Easy",
          chapter: "Unit 5: Linear Programming"
        },
        {
          id: 5003,
          question: "What are constraints in linear programming?",
          options: ["Linear inequalities that limit the solution", "The objective function", "The optimal solution", "The feasible region"],
          correct: "Linear inequalities that limit the solution",
          explanation: "Constraints are linear inequalities or equations that restrict the possible values of the variables.",
          difficulty: "Easy",
          chapter: "Unit 5: Linear Programming"
        },
        // Medium Questions
        {
          id: 5008,
          question: "Where does the optimal solution occur in a linear programming problem?",
          options: ["At any point in the feasible region", "At the center of the feasible region", "At a corner point of the feasible region", "Outside the feasible region"],
          correct: "At a corner point of the feasible region",
          explanation: "The Fundamental Theorem of Linear Programming states that if an optimal solution exists, it occurs at a corner point (vertex) of the feasible region.",
          difficulty: "Medium",
          chapter: "Unit 5: Linear Programming"
        },
        {
          id: 5009,
          question: "What is the graphical method used for in linear programming?",
          options: ["Solving problems with 2 variables", "Solving problems with many variables", "Finding the objective function", "Creating constraints"],
          correct: "Solving problems with 2 variables",
          explanation: "The graphical method is primarily used for linear programming problems with two variables, as they can be easily visualized on a 2D graph.",
          difficulty: "Medium",
          chapter: "Unit 5: Linear Programming"
        },
        // Hard Questions
        {
          id: 5015,
          question: "Maximize P = 2x + 3y subject to x + y ≤ 4, 2x + y ≤ 6, x ≥ 0, y ≥ 0. What is the maximum value?",
          options: ["10", "12", "14", "16"],
          correct: "12",
          explanation: "Corner points are (0,0), (0,4), (2,2), (3,0). Evaluating P: P(0,0)=0, P(0,4)=12, P(2,2)=10, P(3,0)=6. Maximum is P = 12 at (0,4).",
          difficulty: "Hard",
          chapter: "Unit 5: Linear Programming"
        }
      ],
      "Unit 6: Mathematical Application in Business": [
        // Easy Questions
        {
          id: 6001,
          question: "What is 15% of 200?",
          options: ["30", "25", "35", "20"],
          correct: "30",
          explanation: "15% of 200 = 0.15 × 200 = 30.",
          difficulty: "Easy",
          chapter: "Unit 6: Mathematical Application in Business"
        },
        {
          id: 6002,
          question: "If a product costs $80 and is marked up by 25%, what is the selling price?",
          options: ["$100", "$105", "$110", "$120"],
          correct: "$100",
          explanation: "Markup = $80 × 0.25 = $20. Selling price = $80 + $20 = $100.",
          difficulty: "Easy",
          chapter: "Unit 6: Mathematical Application in Business"
        },
        {
          id: 6003,
          question: "What is simple interest on $1000 at 5% per year for 2 years?",
          options: ["$50", "$100", "$150", "$200"],
          correct: "$100",
          explanation: "Simple Interest = P × r × t = $1000 × 0.05 × 2 = $100.",
          difficulty: "Easy",
          chapter: "Unit 6: Mathematical Application in Business"
        },
        // Medium Questions
        {
          id: 6008,
          question: "If an investment of $1000 earns 8% compound interest annually, what is the value after 3 years?",
          options: ["$1240", "$1259.71", "$1260", "$1280"],
          correct: "$1259.71",
          explanation: "Using A = P(1 + r)^t: A = 1000(1.08)³ = 1000(1.259712) = $1259.71.",
          difficulty: "Medium",
          chapter: "Unit 6: Mathematical Application in Business"
        },
        {
          id: 6009,
          question: "A business has fixed costs of $2000 and variable costs of $15 per unit. If they sell 100 units, what are the total costs?",
          options: ["$3500", "$3000", "$2500", "$4000"],
          correct: "$3500",
          explanation: "Total Cost = Fixed Cost + Variable Cost × Quantity = $2000 + $15 × 100 = $3500.",
          difficulty: "Medium",
          chapter: "Unit 6: Mathematical Application in Business"
        },
        // Hard Questions
        {
          id: 6015,
          question: "A company's profit function is P(x) = -2x² + 120x - 1000, where x is units produced. What production level maximizes profit?",
          options: ["25 units", "30 units", "35 units", "40 units"],
          correct: "30 units",
          explanation: "To find maximum, take derivative: P'(x) = -4x + 120. Set equal to 0: -4x + 120 = 0, so x = 30 units.",
          difficulty: "Hard",
          chapter: "Unit 6: Mathematical Application in Business"
        }
      ]
    };

    // Get the Mathematics subject ID
    const { data: mathSubject, error: subjectError } = await supabase
      .from('subjects')
      .select('id')
      .eq('name', 'Grade 12 Mathematics')
      .single();

    if (subjectError || !mathSubject) {
      throw new Error('Mathematics subject not found');
    }

    console.log('Found Mathematics subject:', mathSubject.id);

    let totalImported = 0;

    // Process each chapter
    for (const [chapterName, questions] of Object.entries(grade12Mathematics)) {
      console.log(`Processing chapter: ${chapterName}`);

      // First check if chapter exists, if not create it
      let { data: chapter, error: chapterSelectError } = await supabase
        .from('chapters')
        .select('id')
        .eq('subject_id', mathSubject.id)
        .eq('name', chapterName)
        .single();

      if (chapterSelectError && chapterSelectError.code === 'PGRST116') {
        // Chapter doesn't exist, create it
        const { data: newChapter, error: chapterInsertError } = await supabase
          .from('chapters')
          .insert({
            subject_id: mathSubject.id,
            name: chapterName,
            description: `Mathematics questions for ${chapterName}`,
            order_index: Object.keys(grade12Mathematics).indexOf(chapterName) + 1
          })
          .select('id')
          .single();

        if (chapterInsertError) {
          console.error(`Error creating chapter ${chapterName}:`, chapterInsertError);
          continue;
        }
        
        chapter = newChapter;
      } else if (chapterSelectError) {
        console.error(`Error finding chapter ${chapterName}:`, chapterSelectError);
        continue;
      }


      
      console.log(`Chapter ready: ${chapter.id} for ${chapterName}`);

      // Insert questions one by one to handle duplicates properly
      let chapterImportCount = 0;
      for (const q of questions) {
        // Check if question already exists
        const { data: existingQuestion } = await supabase
          .from('quiz_questions')
          .select('id')
          .eq('legacy_id', q.id)
          .single();

        if (!existingQuestion) {
          const { error: questionError } = await supabase
            .from('quiz_questions')
            .insert({
              legacy_id: q.id,
              chapter_id: chapter.id,
              question: q.question,
              options: q.options,
              correct_answer: q.correct,
              explanation: q.explanation,
              difficulty: q.difficulty
            });

          if (!questionError) {
            chapterImportCount++;
            totalImported++;
          } else {
            console.error(`Error inserting question ${q.id}:`, questionError);
          }
        } else {
          console.log(`Question ${q.id} already exists, skipping`);
        }
      }

      console.log(`Imported ${chapterImportCount} new questions for ${chapterName}`);
    }

    console.log(`Import completed. Total questions imported: ${totalImported}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Successfully imported ${totalImported} mathematics questions`,
        totalImported 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('Import error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});