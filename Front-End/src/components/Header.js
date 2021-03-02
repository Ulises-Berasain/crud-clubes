import React from "react";
import premierLogo from "img/premier-logo.png";
import {Link} from "react-router-dom";
import "styled-components/Header.css"

export default function Headers(){
    return(
        <Link className="link-home" to="/"><img className="premier-logo" src={premierLogo} alt="PremierLogo"/></Link>
    );
};
