import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import styled, { createGlobalStyle } from "styled-components";
import * as ROLES from "../../constants/roles";

const Homeicon = require("../Assets/Home.svg");
const KPIreport = require("../Assets/Line-graph.svg");
const Settingsicon = require("../Assets/Settings.svg");
const Adminicon = require("../Assets/Admin-icon.svg");

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }  

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  
  }

  body {
    width: 100vw;
    font-family: 'Poppins';
  }
`;

const Navigationsection = styled.ul`
  background: white;
  width: 6rem;
  height: 100vh;
  position: fixed;
  left: 0;
  overflow-x: hidden;
  list-style: none;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-shadow: 0.1rem 0rem 1rem rgba(0, 0, 0, 0.2);
  
  @media (max-width: 649px) {
    background-color: white;
    overflow: hidden;
    bottom: 0;
    width: 100vw;
    height: 6%;
  }
`;

const Styledlinks = styled.li`
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: black;
  }

  button {
   border: none;
   background-color: transparent;
  }

  img {
    width: 3.5rem;
    background-color: transparent;
  }
`;

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
            <NavigationNonAuth />
          )
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = ({ authUser }) => (
  <Navigationsection>
    <Styledlinks>
      <Link to={ROUTES.HOME}>
        <img src={Homeicon} />
      </Link>
    </Styledlinks>

    <Styledlinks>
      {authUser.roles.includes(ROLES.BRABIL) && (
        <Link to={ROUTES.LANDINGBRABIL}>
          <img src={KPIreport} />
        </Link>
      )}
    </Styledlinks>
    
        {/* These Roles.CARCOMPANY creates a dead box in navbar on mobileview! need the get fixed before launch! */}

    {<Styledlinks>
      {authUser.roles.includes(ROLES.USCENTER) && (
        <Link to={ROUTES.LANDINGUS}>
          <img src={KPIreport} />
        </Link>
      )}
    </Styledlinks>}
    
    <Styledlinks>
      {authUser.roles.includes(ROLES.ADMIN) && (
        <Link to={ROUTES.ADMIN}>
          <img src={Adminicon} />
        </Link>
      )}
    </Styledlinks>

    <Styledlinks>
      <Link to={ROUTES.ACCOUNT}>
        <img src={Settingsicon} />
      </Link>
    </Styledlinks>

    <Styledlinks>
      <SignOutButton />
    </Styledlinks>
    <GlobalStyle />
  </Navigationsection>
);

const NavigationNonAuth = () => (
  <Navigationsection>
    <Styledlinks>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </Styledlinks>
    <GlobalStyle />
  </Navigationsection>
);
export default Navigation;
