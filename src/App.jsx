import { useState } from "react";

import "./App.css";
import Home from "./components/pages/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="font-bodyfont">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
