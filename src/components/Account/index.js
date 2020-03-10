import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import styled from "styled-components";

const Maindiv = styled.div`
  margin-left: 10%;
`;

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Maindiv>
        <h1>Settings</h1>
        <h1>You are logged in as: {authUser.email}</h1>
      </Maindiv>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);
