import React from "react";

//include images into your bundle

import { NavBar } from "./NavBar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
  const resetStyles = {
    margin: 0,
    padding: 0,
  };

  return (
    <div className={resetStyles}>
      <NavBar />
      <div className="container">
        <Jumbotron />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
