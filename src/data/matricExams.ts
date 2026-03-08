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

import { math2006Questions } from './math2006Questions';
import { physics2006Questions } from './physics2006Questions';
import { chemistry2006Questions } from './chemistry2006Questions';
import { biology2006Questions } from './biology2006Questions';
import { english2006Questions } from './english2006Questions';
import { civics2006Questions } from './civics2006Questions';

export const matricExams: MatricExamYear[] = [
  {
    year: 2016,
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
  {
    year: 2006,
    subjects: [
      { subject: "Mathematics", questions: math2006Questions },
      { subject: "Physics", questions: physics2006Questions },
      { subject: "Chemistry", questions: chemistry2006Questions },
      { subject: "Biology", questions: biology2006Questions },
      { subject: "English", questions: english2006Questions },
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
