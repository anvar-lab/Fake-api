import React from "react";
import {Link} from "react-router-dom";
import "./index.scss";



const Navbar =()=>{
    return(
        <div className="navbar-container">
                <Link style={{textDecoration:`none`,color:'red'}} to="/book">APi1</Link>
                <Link style={{textDecoration:`none`,color:'red'}} to="/">APi2</Link>
                <Link style={{textDecoration:`none`,color:'red'}} to="/movie">APi3</Link>
                <Link style={{textDecoration:`none`,color:'red'}} to="/api4">APi4</Link>
                <Link style={{textDecoration:`none`,color:'red'}} to="/api5">APi5</Link>
        </div>
    )
}

export default Navbar