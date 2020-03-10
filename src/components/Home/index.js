import React from "react";
import { withAuthorization } from "../Session";
import styled from "styled-components";
const Homeicon = require("../Assets/Home.svg");
const KPIreport = require("../Assets/Line-graph.svg");
const Settingsicon = require("../Assets/Settings.svg");
const Adminicon = require("../Assets/Admin-icon.svg");
const Logouticon = require("../Assets/Logout.svg");

const Maindiv = styled.div`
  margin-left: 10%;
  img {
    width: 3.5rem;
    background-color: transparent;
    padding: 5px;
  }
  h1 {
    padding-bottom: 25px;
  }
`;

const HomePage = () => (
  <Maindiv>
    <h1>
      Home Page
      <br />
      <img src={Homeicon} /> This page <br />
      <img src={KPIreport} /> Here are your charts <br />
      <img src={Settingsicon} /> Settings <br />
      <img src={Adminicon} /> Adminpage <br />
      <img src={Logouticon} /> Sign out <br />
    </h1>
  </Maindiv>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
