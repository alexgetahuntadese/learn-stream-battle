
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  Star, 
  Play, 
  LogOut, 
  TrendingUp,
  Award,
  Target,
  Users,
  GraduationCap,
  ChevronRight
} from 'lucide-react';

interface QuizDashboardProps {
  user: { name: string; grade: string; school?: string };
  onLogout: () => void;
  onSelectQuiz: (quiz: any) => void;
}

const QuizDashboard = ({ user, onLogout, onSelectQuiz }: QuizDashboardProps) => {
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = [
    { id: 'mathematics', name: 'Mathematics', color: 'bg-blue-500', quizzes: 12 },
    { id: 'physics', name: 'Physics', color: 'bg-purple-500', quizzes: 8 },
    { id: 'chemistry', name: 'Chemistry', color: 'bg-green-500', quizzes: 10 },
    { id: 'biology', name: 'Biology', color: 'bg-emerald-500', quizzes: 9 },
    { id: 'english', name: 'English', color: 'bg-red-500', quizzes: 15 },
    { id: 'amharic', name: 'Amharic', color: 'bg-yellow-500', quizzes: 11 }
  ];

  const gradeCards = [
    {
      grade: 9,
      title: 'Grade 9',
      description: 'Foundation courses for secondary education',
      subjects: 8,
      quizzes: 45,
      progress: 75,
      color: 'from-blue-500 to-purple-500'
    },
    {
      grade: 10,
      title: 'Grade 10',
      description: 'Advanced secondary education preparation',
      subjects: 8,
      quizzes: 52,
      progress: 60,
      color: 'from-green-500 to-blue-500'
    },
    {
      grade: 11,
      title: 'Grade 11',
      description: 'Pre-university level studies',
      subjects: 6,
      quizzes: 38,
      progress: 40,
      color: 'from-purple-500 to-pink-500'
    },
    {
      grade: 12,
      title: 'Grade 12',
      description: 'University entrance preparation',
      subjects: 6,
      quizzes: 42,
      progress: 25,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'Algebra Fundamentals',
      subject: 'mathematics',
      difficulty: 'Medium',
      duration: 30,
      questions: 20,
      completed: false,
      score: null
    },
    {
      id: 2,
      title: 'Motion and Forces',
      subject: 'physics',
      difficulty: 'Hard',
      duration: 45,
      questions: 25,
      completed: true,
      score: 85
    },
    {
      id: 3,
      title: 'Chemical Bonds',
      subject: 'chemistry',
      difficulty: 'Medium',
      duration: 35,
      questions: 22,
      completed: true,
      score: 92
    },
    {
      id: 4,
      title: 'Cell Structure',
      subject: 'biology',
      difficulty: 'Easy',
      duration: 25,
      questions: 18,
      completed: false,
      score: null
    }
  ];

  const stats = [
    { icon: Trophy, label: 'Quizzes Completed', value: '23', color: 'text-yellow-500' },
    { icon: Star, label: 'Average Score', value: '87%', color: 'text-blue-500' },
    { icon: Target, label: 'Best Score', value: '96%', color: 'text-green-500' },
    { icon: TrendingUp, label: 'This Week', value: '+5', color: 'text-purple-500' }
  ];

  const filteredQuizzes = selectedSubject === 'all' 
    ? quizzes 
    : quizzes.filter(quiz => quiz.subject === selectedSubject);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-gradient-to-r from-green-500 to-yellow-500 text-white">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
                <p className="text-gray-400">Grade {user.grade} • {user.school}</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={onLogout}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/5 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Grade Cards Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Grade Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gradeCards.map((grade) => (
                <Card key={grade.grade} className="bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${grade.color}`}>
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{grade.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{grade.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Subjects:</span>
                        <span className="font-medium">{grade.subjects}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Quizzes:</span>
                        <span className="font-medium">{grade.quizzes}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress:</span>
                          <span className="font-medium">{grade.progress}%</span>
                        </div>
                        <Progress value={grade.progress} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Subjects Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-white/5 border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Subjects</CardTitle>
                  <CardDescription className="text-gray-300">
                    Choose a subject to filter quizzes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant={selectedSubject === 'all' ? 'default' : 'ghost'}
                    className={`w-full justify-start ${
                      selectedSubject === 'all' 
                        ? 'bg-gradient-to-r from-green-600 to-yellow-600' 
                        : 'text-white hover:bg-white/10'
                    }`}
                    onClick={() => setSelectedSubject('all')}
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    All Subjects
                  </Button>
                  
                  {subjects.map((subject) => (
                    <Button
                      key={subject.id}
                      variant={selectedSubject === subject.id ? 'default' : 'ghost'}
                      className={`w-full justify-start ${
                        selectedSubject === subject.id 
                          ? 'bg-gradient-to-r from-green-600 to-yellow-600' 
                          : 'text-white hover:bg-white/10'
                      }`}
                      onClick={() => setSelectedSubject(subject.id)}
                    >
                      <div className={`w-3 h-3 rounded-full mr-3 ${subject.color}`}></div>
                      {subject.name}
                      <Badge variant="secondary" className="ml-auto bg-white/20 text-white">
                        {subject.quizzes}
                      </Badge>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Quizzes List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Available Quizzes</h2>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {filteredQuizzes.length} quizzes
                </Badge>
              </div>

              <div className="space-y-4">
                {filteredQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{quiz.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-300">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {quiz.duration} min
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              {quiz.questions} questions
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge className={getDifficultyColor(quiz.difficulty)}>
                            {quiz.difficulty}
                          </Badge>
                          {quiz.completed && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              <Award className="mr-1 h-3 w-3" />
                              {quiz.score}%
                            </Badge>
                          )}
                        </div>
                      </div>

                      {quiz.completed ? (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Score: {quiz.score}%</span>
                            <span>Completed</span>
                          </div>
                          <Progress 
                            value={quiz.score} 
                            className="h-2"
                          />
                        </div>
                      ) : (
                        <Button 
                          onClick={() => onSelectQuiz(quiz)}
                          className="w-full bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white border-0"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Start Quiz
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDashboard;
