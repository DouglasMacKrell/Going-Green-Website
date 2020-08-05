import React from "react";
import FZFText from "./doug-404.png";

import "./FourZeroFour.css";

const FourZeroFour = () => {
  return (
    <div className="fourzerofour">
      <div className="fourzerofour__main-container">
        <img className="fzf-text" src={FZFText} alt="404 Page Not Found" />
      </div>
    </div>
  );
};

export default FourZeroFour;
