import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import "../styles/index.scss";
import Main from "./Main";
import Details from "./Details";
import Stories from "./Stories";

const App = () => {
  return (
    <>
      <Main />
      <Stories />
      <Details />
    </>
  )
}

export default App; 