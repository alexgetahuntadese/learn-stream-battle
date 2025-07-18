import { supabase } from "@/integrations/supabase/client";

export interface QuizQuestion {
  id: string;
  legacy_id: number;
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  chapter_name: string;
}

export const getQuestionsFromSupabase = async (
  subject: string,
  chapters: string[],
  difficulty: string,
  limit: number = 10
): Promise<QuizQuestion[]> => {
  try {
    console.log('Fetching questions from Supabase:', { subject, chapters, difficulty, limit });

    // Get subject ID
    const { data: subjectData, error: subjectError } = await supabase
      .from('subjects')
      .select('id')
      .eq('name', `Grade 12 ${subject.charAt(0).toUpperCase() + subject.slice(1)}`)
      .single();

    if (subjectError || !subjectData) {
      console.error('Subject not found:', subjectError);
      return [];
    }

    // Get chapter IDs
    const { data: chaptersData, error: chaptersError } = await supabase
      .from('chapters')
      .select('id, name')
      .eq('subject_id', subjectData.id)
      .in('name', chapters);

    if (chaptersError || !chaptersData?.length) {
      console.error('Chapters not found:', chaptersError);
      return [];
    }

    const chapterIds = chaptersData.map(c => c.id);

    // Get questions
    const { data: questions, error: questionsError } = await supabase
      .from('quiz_questions')
      .select(`
        id,
        legacy_id,
        question,
        options,
        correct_answer,
        explanation,
        difficulty,
        chapters!inner(name)
      `)
      .in('chapter_id', chapterIds)
      .eq('difficulty', difficulty)
      .limit(limit);

    if (questionsError) {
      console.error('Error fetching questions:', questionsError);
      return [];
    }

    const formattedQuestions: QuizQuestion[] = questions?.map(q => ({
      id: q.legacy_id.toString(),
      legacy_id: q.legacy_id,
      question: q.question,
      options: Array.isArray(q.options) ? q.options.map(String) : [],
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      difficulty: q.difficulty as 'Easy' | 'Medium' | 'Hard',
      chapter_name: q.chapters?.name || ''
    })) || [];

    console.log('Fetched questions:', formattedQuestions);
    return formattedQuestions;

  } catch (error) {
    console.error('Error in getQuestionsFromSupabase:', error);
    return [];
  }
};