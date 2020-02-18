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
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
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
