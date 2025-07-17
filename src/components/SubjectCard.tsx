
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { BookOpen, Play, Clock, Award, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile';

interface Chapter {
  id: string;
  name: string;
  progress: number;
  totalQuizzes: number;
  completedQuizzes: number;
}

interface Quiz {
  id: string;
  title: string;
  difficulty: string;
  duration: number;
  questions: number;
  completed: boolean;
  score?: number;
  subject: string;
  chapters: string[];
}

interface SubjectCardProps {
  subject: {
    name: string;
    icon: string;
    color: string;
    chapters: Chapter[];
    totalQuizzes: number;
    completedQuizzes: number;
    progress: number;
  };
  onSelectQuiz: (quiz: Quiz) => void;
  availableQuizzes: Quiz[];
}

const SubjectCard = ({ subject, onSelectQuiz, availableQuizzes }: SubjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const isMobile = useIsMobile();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-white';
      case 'Hard': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handleBack = () => {
    if (selectedChapter) {
      setSelectedChapter(null);
    } else {
      setIsOpen(false);
    }
  };

  const getQuizzesForChapter = (chapterName: string) => {
    return availableQuizzes.filter(quiz => 
      quiz.chapters?.includes(chapterName) || 
      quiz.title.toLowerCase().includes(chapterName.toLowerCase())
    );
  };

  const renderChapterContent = () => {
    if (!selectedChapter) {
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl">{subject.icon}</span>
            <h3 className="text-xl font-bold text-white">{subject.name}</h3>
          </div>
          <div className="grid gap-3">
            {subject.chapters.map((chapter) => (
              <Card key={chapter.id} className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors cursor-pointer" onClick={() => setSelectedChapter(chapter)}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white">{chapter.name}</h4>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {chapter.completedQuizzes}/{chapter.totalQuizzes}
                    </Badge>
                  </div>
                  <Progress value={chapter.progress} className="h-2" />
                  <p className="text-sm text-gray-300 mt-2">{chapter.progress}% complete</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }

    const chapterQuizzes = getQuizzesForChapter(selectedChapter.name);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <Button variant="ghost" size="sm" onClick={handleBack} className="text-white hover:bg-white/10 p-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h3 className="text-xl font-bold text-white">{selectedChapter.name}</h3>
        </div>
        
        <div className="grid gap-3">
          {chapterQuizzes.map((quiz) => (
            <Card key={quiz.id} className="bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium mb-2 text-white">{quiz.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {quiz.duration} min
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="mr-1 h-3 w-3" />
                        {quiz.questions} questions
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge className={getDifficultyColor(quiz.difficulty)}>
                      {quiz.difficulty}
                    </Badge>
                    {quiz.completed && quiz.score && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        <Award className="mr-1 h-3 w-3" />
                        {quiz.score}%
                      </Badge>
                    )}
                  </div>
                </div>

                {quiz.completed && quiz.score ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-white">
                      <span>Score: {quiz.score}%</span>
                      <span>Completed</span>
                    </div>
                    <Progress value={quiz.score} className="h-2" />
                  </div>
                ) : (
                  <Button 
                    onClick={() => {
                      onSelectQuiz(quiz);
                      setIsOpen(false);
                    }}
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
    );
  };

  const content = renderChapterContent();

  if (isMobile) {
    return (
      <>
        <Card 
          className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{subject.icon}</span>
              <div>
                <CardTitle className="text-white text-lg">{subject.name}</CardTitle>
                <p className="text-sm text-gray-300">{subject.chapters.length} chapters</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-white">
                <span>Progress</span>
                <span>{subject.completedQuizzes}/{subject.totalQuizzes} quizzes</span>
              </div>
              <Progress value={subject.progress} className="h-2" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">{subject.progress}% complete</span>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {subject.chapters.length} chapters
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="bg-slate-900 border-slate-700">
            <DrawerHeader>
              <DrawerTitle className="text-white">
                {selectedChapter ? selectedChapter.name : subject.name}
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-8">
              {content}
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <>
      <Card 
        className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{subject.icon}</span>
            <div>
              <CardTitle className="text-white text-lg">{subject.name}</CardTitle>
              <p className="text-sm text-gray-300">{subject.chapters.length} chapters</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-white">
              <span>Progress</span>
              <span>{subject.completedQuizzes}/{subject.totalQuizzes} quizzes</span>
            </div>
            <Progress value={subject.progress} className="h-2" />
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">{subject.progress}% complete</span>
              <Badge variant="secondary" className="bg-white/20 text-white">
                {subject.chapters.length} chapters
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white">
              {selectedChapter ? selectedChapter.name : subject.name}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {content}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubjectCard;
