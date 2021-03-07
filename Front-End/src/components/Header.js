import React from "react";
import premierLogo from "img/premier-logo.png";
import {Link, useHistory} from "react-router-dom";
import "styled-components/Header.css";

export default function Headers(){
    const history = useHistory();

    const handleOnClickHome = ()=>{
        history.replace("/");
        window.location.reload();
    };

    return(
        <Link className="link-home" onClick={()=> handleOnClickHome()} to="/"><img className="premier-logo" src={premierLogo} alt="PremierLogo"/></Link>
    );
};
