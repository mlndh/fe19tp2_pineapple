import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }  

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  }
`

const Navigationsection = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 100%;
`;

const Styledlinks = styled.li`
a{
  text-decoration: none;
  color: black;
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
      <Link to={ROUTES.LANDING}>Landing</Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.HOME}>Home</Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </Styledlinks>
    <Styledlinks>
    <Link to={ROUTES.APIDATA}> API </Link>
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
