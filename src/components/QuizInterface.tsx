import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Award,
  RefreshCw,
  Star
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuizInterfaceProps {
  quiz: any;
  user: any;
  onComplete: (result: any) => void;
  onBack: () => void;
}

const QuizInterface = ({ quiz, user, onComplete, onBack }: QuizInterfaceProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60); // Convert to seconds
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  // Generate questions based on quiz subject and difficulty
  const generateQuestions = () => {
    const questionSets = {
      mathematics: [
        {
          id: 1,
          question: "What is the value of x in the equation 2x + 5 = 15?",
          options: ["3", "5", "7", "10"],
          correct: "5",
          explanation: "Subtract 5 from both sides: 2x = 10, then divide by 2: x = 5"
        },
        {
          id: 2,
          question: "Which of the following is a prime number?",
          options: ["15", "21", "17", "25"],
          correct: "17",
          explanation: "17 is only divisible by 1 and itself, making it a prime number"
        },
        {
          id: 3,
          question: "What is the area of a circle with radius 4 units?",
          options: ["12π", "16π", "8π", "32π"],
          correct: "16π",
          explanation: "Area = πr² = π × 4² = 16π square units"
        },
        {
          id: 4,
          question: "Solve for y: 3y - 7 = 14",
          options: ["5", "7", "9", "11"],
          correct: "7",
          explanation: "Add 7 to both sides: 3y = 21, then divide by 3: y = 7"
        },
        {
          id: 5,
          question: "What is 25% of 80?",
          options: ["15", "20", "25", "30"],
          correct: "20",
          explanation: "25% × 80 = 0.25 × 80 = 20"
        }
      ],
      physics: [
        {
          id: 1,
          question: "What is the unit of force in the SI system?",
          options: ["Newton", "Joule", "Pascal", "Watt"],
          correct: "Newton",
          explanation: "Newton (N) is the SI unit of force, named after Isaac Newton"
        },
        {
          id: 2,
          question: "What is the speed of light in vacuum?",
          options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
          correct: "3 × 10⁸ m/s",
          explanation: "The speed of light in vacuum is approximately 299,792,458 m/s or 3 × 10⁸ m/s"
        },
        {
          id: 3,
          question: "Which law states that every action has an equal and opposite reaction?",
          options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
          correct: "Newton's Third Law",
          explanation: "Newton's Third Law states that for every action, there is an equal and opposite reaction"
        }
      ],
      biology: [
        {
          id: 1,
          question: "What is the basic unit of life?",
          options: ["Tissue", "Organ", "Cell", "Organism"],
          correct: "Cell",
          explanation: "The cell is the basic structural and functional unit of all living organisms"
        },
        {
          id: 2,
          question: "Which organelle is responsible for photosynthesis?",
          options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
          correct: "Chloroplast",
          explanation: "Chloroplasts contain chlorophyll and are responsible for photosynthesis in plants"
        },
        {
          id: 3,
          question: "What is DNA an abbreviation for?",
          options: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Dynamic Nuclear Acid", "Deoxy Nuclear Acid"],
          correct: "Deoxyribonucleic Acid",
          explanation: "DNA stands for Deoxyribonucleic Acid, which carries genetic information"
        }
      ],
      chemistry: [
        {
          id: 1,
          question: "What is the chemical symbol for gold?",
          options: ["Go", "Gd", "Au", "Ag"],
          correct: "Au",
          explanation: "Au comes from the Latin word 'aurum' meaning gold"
        },
        {
          id: 2,
          question: "What is the pH of pure water?",
          options: ["6", "7", "8", "9"],
          correct: "7",
          explanation: "Pure water has a pH of 7, which is neutral (neither acidic nor basic)"
        }
      ]
    };

    const subjectQuestions = questionSets[quiz.subject as keyof typeof questionSets] || questionSets.mathematics;
    return subjectQuestions.slice(0, Math.min(quiz.questions || 5, subjectQuestions.length));
  };

  const questions = generateQuestions();
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  console.log('Quiz started:', quiz);
  console.log('Generated questions:', questions);
  console.log('Current question:', currentQuestion);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizCompleted) {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizCompleted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
    console.log('Answer selected:', answer, 'for question:', currentQuestion.id);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    const correctAnswers = questions.filter(q => selectedAnswers[q.id] === q.correct).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    
    const quizResults = {
      quiz: quiz,
      score: score,
      correctAnswers: correctAnswers,
      totalQuestions: questions.length,
      timeSpent: (quiz.duration * 60) - timeLeft,
      answers: selectedAnswers
    };

    setResults(quizResults);
    setQuizCompleted(true);

    toast({
      title: "Quiz Completed!",
      description: `You scored ${score}% (${correctAnswers}/${questions.length})`,
    });
  };

  // Early return if no questions available
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardContent className="p-6 text-center">
              <p className="text-xl mb-4">No questions available for this quiz.</p>
              <Button onClick={onBack} className="bg-gradient-to-r from-green-600 to-yellow-600">
                Back to Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (quizCompleted && results) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full">
                  <Award className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
              <div className="flex justify-center items-center space-x-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-8 w-8 ${
                      i < Math.floor(results.score / 20) 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score Summary */}
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  {results.score}%
                </div>
                <p className="text-xl text-gray-300">
                  {results.correctAnswers} out of {results.totalQuestions} questions correct
                </p>
                <Badge 
                  className={`text-lg px-6 py-2 ${
                    results.score >= 90 ? 'bg-green-500' :
                    results.score >= 70 ? 'bg-yellow-500' :
                    results.score >= 50 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                >
                  {results.score >= 90 ? 'Excellent!' :
                   results.score >= 70 ? 'Good Job!' :
                   results.score >= 50 ? 'Keep Practicing!' : 'Needs Improvement'}
                </Badge>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">{results.correctAnswers}</div>
                  <div className="text-sm text-gray-300">Correct</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-400">{results.totalQuestions - results.correctAnswers}</div>
                  <div className="text-sm text-gray-300">Incorrect</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">{Math.floor(results.timeSpent / 60)}m</div>
                  <div className="text-sm text-gray-300">Time Spent</div>
                </div>
              </div>

              {/* Review Answers */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Review Your Answers</h3>
                {questions.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.correct;
                  
                  return (
                    <div key={question.id} className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        {isCorrect ? (
                          <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium mb-2">Q{index + 1}: {question.question}</p>
                          <div className="text-sm space-y-1">
                            <p>Your answer: <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>{userAnswer || 'Not answered'}</span></p>
                            {!isCorrect && (
                              <p>Correct answer: <span className="text-green-400">{question.correct}</span></p>
                            )}
                            <p className="text-gray-300 italic">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => onComplete(results)}
                  className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white border-0"
                >
                  Back to Dashboard
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="border-slate-600 text-white hover:bg-slate-700"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:bg-slate-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-4 py-2">
              <Clock className="h-4 w-4" />
              <span className={`font-mono ${timeLeft < 300 ? 'text-red-400' : 'text-white'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <Badge variant="secondary" className="bg-slate-700 text-white border-slate-600">
              {currentQuestionIndex + 1} / {questions.length}
            </Badge>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="bg-slate-800 border-slate-700 text-white mb-6">
          <CardHeader>
            <CardTitle className="text-xl">
              Question {currentQuestionIndex + 1}
            </CardTitle>
            <p className="text-lg leading-relaxed">{currentQuestion.question}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswers[currentQuestion.id] === option ? "default" : "outline"}
                  className={`w-full text-left justify-start p-4 h-auto ${
                    selectedAnswers[currentQuestion.id] === option
                      ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white border-0'
                      : 'border-slate-600 text-black bg-white hover:bg-slate-100 hover:text-black'
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  <span className="mr-4 font-bold">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="border-slate-600 text-white hover:bg-slate-700 disabled:opacity-50"
          >
            Previous
          </Button>
          
          <Button
            onClick={handleNextQuestion}
            disabled={!selectedAnswers[currentQuestion.id]}
            className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white border-0 disabled:opacity-50"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
          </Button>
        </div>

        {/* Question Navigator */}
        <div className="mt-8 p-4 bg-slate-800 rounded-lg">
          <h4 className="text-sm font-medium mb-3">Question Navigator</h4>
          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => (
              <Button
                key={index}
                size="sm"
                variant={index === currentQuestionIndex ? "default" : "outline"}
                className={`w-10 h-10 p-0 ${
                  index === currentQuestionIndex
                    ? 'bg-gradient-to-r from-green-600 to-yellow-600 text-white border-0'
                    : selectedAnswers[questions[index].id]
                    ? 'border-green-500 text-green-400 hover:bg-green-500/10'
                    : 'border-slate-600 text-white hover:bg-slate-700'
                }`}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
