import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>What a time to be alive!</p>
    <img
    className="image"
    src="https://i.imgur.com/mV8PQxj.gif" 
    alt="I made this"
    ></img>
  </div>;
}

export default About;
