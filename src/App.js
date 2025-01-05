import React from "react";
import "./commoncss/bootstrap.css";
import "./commoncss/font-icon.css";
import "./App.css";
import Header from "./components/Header";
import WeddingDate from "./components/WeddingDate";
import CountDown from "./components/CountDown";
import WeddingDetails from "./components/WeddingDetails";
import Invitation from "./components/Invitation";
import WeddingLocation from "./components/WeddingLocation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <WeddingDate />
      <CountDown />
      <Invitation />
      <WeddingLocation />
      <WeddingDetails />
      <Contact />
    </div>
  );
}

export default App;
