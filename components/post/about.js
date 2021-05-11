import React from "react";
import Post from "../Post";
import TextLoop from "react-text-loop";

export default function About() {
    return <div>
        <span className={"center align-center"}><h1 className="minor align-center">This is  Frank. </h1></span>
        <span className={"center align-center"}><h2
            className="center align-center minor">He's having some troubles.</h2></span>
        <span className={"center align-center"}><h2 className="center align-center minor">Let's help Frank to find the solutions.</h2></span>

        <img width="640" height="480" src={'static/images/frank.svg'} alt="Italian Trulli"/> 
    </div>

}
 