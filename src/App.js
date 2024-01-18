import React from "react";
import Routerconfig from "./route/Routerconfig";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routerconfig />
    </HashRouter>
  );
};

export default App;
