import React from "react";
import Routerconfig from "./route/Routerconfig";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routerconfig />
    </HashRouter>
  );
};

export default App;
