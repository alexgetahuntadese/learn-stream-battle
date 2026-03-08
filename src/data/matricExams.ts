export interface MatricExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface MatricExamSubject {
  subject: string;
  questions: MatricExamQuestion[];
}

export interface MatricExamYear {
  year: number;
  subjects: MatricExamSubject[];
}

// Placeholder structure — replace with real past exam questions
export const matricExams: MatricExamYear[] = [
  {
    year: 2016,
    subjects: [
      {
        subject: "Mathematics",
        questions: [
          {
            id: "mat-2016-math-1",
            question: "Sample question for Mathematics 2016 — replace with real exam question.",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: 0,
            explanation: "Replace with real explanation.",
          },
        ],
      },
      {
        subject: "Physics",
        questions: [
          {
            id: "mat-2016-phys-1",
            question: "Sample question for Physics 2016 — replace with real exam question.",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: 1,
            explanation: "Replace with real explanation.",
          },
        ],
      },
      {
        subject: "Chemistry",
        questions: [],
      },
      {
        subject: "Biology",
        questions: [],
      },
      {
        subject: "English",
        questions: [],
      },
      {
        subject: "Civics",
        questions: [],
      },
    ],
  },
  {
    year: 2015,
    subjects: [
      { subject: "Mathematics", questions: [] },
      { subject: "Physics", questions: [] },
      { subject: "Chemistry", questions: [] },
      { subject: "Biology", questions: [] },
      { subject: "English", questions: [] },
      { subject: "Civics", questions: [] },
    ],
  },
  {
    year: 2014,
    subjects: [
      { subject: "Mathematics", questions: [] },
      { subject: "Physics", questions: [] },
      { subject: "Chemistry", questions: [] },
      { subject: "Biology", questions: [] },
      { subject: "English", questions: [] },
      { subject: "Civics", questions: [] },
    ],
  },
  {
    year: 2013,
    subjects: [
      { subject: "Mathematics", questions: [] },
      { subject: "Physics", questions: [] },
      { subject: "Chemistry", questions: [] },
      { subject: "Biology", questions: [] },
      { subject: "English", questions: [] },
      { subject: "Civics", questions: [] },
    ],
  },
];

export const getMatricYears = () => matricExams.map((e) => e.year);

export const getMatricSubjectsForYear = (year: number) =>
  matricExams.find((e) => e.year === year)?.subjects ?? [];

export const getMatricQuestions = (year: number, subject: string) =>
  matricExams
    .find((e) => e.year === year)
    ?.subjects.find((s) => s.subject === subject)
    ?.questions ?? [];
