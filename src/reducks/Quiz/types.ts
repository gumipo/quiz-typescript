export type Quiz = {
  title: string;
  id: number;
  description: string;
};

export type QuizzesState = {
  id: number[];
  choices: Quiz[];
  answer: Quiz[];
  selectAnswer: string;
};
