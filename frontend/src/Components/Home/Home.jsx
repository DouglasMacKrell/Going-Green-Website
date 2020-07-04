import React, { useEffect, useState } from "react";
import Logo from '../../Going-Green-Logo.svg'

const Home = () => {

    return (
        <div className="Home-main-container">
            <img className="Home-logo" src={Logo} alt="Going Green Logo" ></img>
        </div>
    )
}

export default Home