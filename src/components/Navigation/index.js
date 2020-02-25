import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import styled from "styled-components";

const Navigationsection = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 75%;
`;

const Styledlinks = styled.li`
  a {
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
  </Navigationsection>
);

const NavigationNonAuth = () => (
  <Navigationsection>
    <Styledlinks>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </Styledlinks>
  </Navigationsection>
);
export default Navigation;
