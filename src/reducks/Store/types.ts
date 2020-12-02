import "react-redux";
import { RouterState } from "connected-react-router";
export type StoreState = {
  quizzes: {
    id: number[];
    choices: [];
    answer: [];
    selectAnswer: string;
  };
  router: RouterState;
};

declare module "react-redux" {
  interface DefaultRootState extends StoreState {}
}
