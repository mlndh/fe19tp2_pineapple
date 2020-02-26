import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import styled, { createGlobalStyle } from "styled-components";

const Homeicon = require('../Assets/Home.svg');
const KPIreport = require('../Assets/Line-graph.svg');
const Settingsicon = require('../Assets/Settings.svg');
const Logouticon = require('../Assets/Logout.svg'); 

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
`

const Navigationsection = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 100%;
`;

const Styledlinks = styled.li`
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: black;
  }

  img {
    width: 2.5rem;
  }
`;

const Navigation = () => (
  <div>
    {" "}
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>{" "}
  </div>
);
const NavigationAuth = () => (
  <Navigationsection>
    <Styledlinks>
    <Link to={ROUTES.HOME}>
     <img src={Homeicon}/>
     </Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.LANDING}>
        <img src={KPIreport}/>
        </Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.ACCOUNT}>
      <img src={Settingsicon}/>
      </Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.ADMIN}>ADMIN</Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.Chartmoller}>Möller bil</Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.Chartbrabil}>Brabil</Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.Chartus}>US center</Link>
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
