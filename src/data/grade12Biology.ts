
import { Question } from './naturalScienceQuizzes';

export const grade12BiologyQuestions = {};

export const getGrade12BiologyQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  console.log(`No questions found for chapter: ${chapter}`);
  return [];
};
