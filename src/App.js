import React from "react";
import "./components/navbar/navbar";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import TourList from "./components/TourList";

function App() {
  return (
    <main>
      <Navbar />
      <TourList />
    </main>
  );
}

export default App;
