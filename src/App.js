import React from "react";
import Routerconfig from "./route/Routerconfig";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routerconfig />
    </BrowserRouter>
  );
};

export default App;
