export type QuizState = {
  title: string;
  id: number;
  description: string;
};

export type QuizzesState = {
  id: number[];
  choices: QuizState[];
  answer: QuizState[];
  selectAnswer: string;
};
