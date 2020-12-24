import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Home, TermQuiz, Correct, Mistake, StartQuiz } from "./Pages/index";

const Router = () => {
  return (
    <HashRouter hashType="noslash">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/quiz"} component={TermQuiz} />
        <StartQuiz>
          <Route exact path={"/correct"} component={Correct} />
          <Route exact path={"/mistake"} component={Mistake} />
        </StartQuiz>
      </Switch>
    </HashRouter>
  );
};
export default Router;
