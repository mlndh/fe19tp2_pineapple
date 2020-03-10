import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import styled from "styled-components";

const Maindiv = styled.div`
  margin-left: 10%;
  padding-top: 40px;
`;

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Maindiv>
        <h1>Settings</h1>
        <h2>You are logged in as: {authUser.email}</h2>
      </Maindiv>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);
