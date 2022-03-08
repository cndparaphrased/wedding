import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/index.scss";
import Main from "./Main";
import Rsvp from "./Rsvp";
import Venue from "./Venue";
import Covid from "./Covid";

const App = () => {
  return (
    <>
      <Main />
      {/* <Rsvp />
      <Venue />
      <Covid /> */}
    </>
  )
}

export default App; 