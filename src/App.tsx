import React from "react";
import Router from "./Router";
import "./assets/sanitize.css";
import "./assets/style.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <main>
        <Router />
      </main>
    </React.Fragment>
  );
};
export default App;
