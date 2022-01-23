import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/index.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App; 