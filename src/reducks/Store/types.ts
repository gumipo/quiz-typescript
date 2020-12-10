import "react-redux";
import { Quiz } from "../../reducks/Quiz/types";
import { RouterState } from "connected-react-router";
export type StoreState = {
  quizzes: {
    id: string[];
    choices: Quiz[];
    answer: Quiz;
    selectAnswer: string;
  };
  router: RouterState;
};

declare module "react-redux" {
  interface DefaultRootState extends StoreState {}
}
