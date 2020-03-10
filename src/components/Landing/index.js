import React from "react";
import styled from "styled-components";
const Mainicon = require("../Assets/android-chrome-192x192.png");

const H1div = styled.div`
  margin-left: 10%;
  img {
    padding-top: 15px;
    padding-bottom: 40px;
  }
`;

const Landing = () => (
  <H1div>
    <img src={Mainicon} />
    <h1>
      Hi and welcome to birds eye view
      <br /> Sign in to the left{" "}
    </h1>
  </H1div>
);

export default Landing;
