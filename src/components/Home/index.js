import React from "react";
import { withAuthorization } from "../Session";
import styled from "styled-components";

const Maindiv = styled.div `
  margin-left: 10%
`;

const HomePage = () => (
  <Maindiv>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </Maindiv>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
