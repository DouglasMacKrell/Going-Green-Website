import React from "react";
import Logo from "./Going-Green-Logo.svg";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__main-container">
        <img className="home__logo" src={Logo} alt="Going Green Logo"></img>
        <iframe
          title="Going Green Submission Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdWphSHKpauK64L1jsDFef3GU1mktjX5ykFLkowqiAGR0tu9g/viewform?embedded=true"
          width="100%"
          height="968"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Home;
