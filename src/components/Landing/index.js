import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import styled, { createGlobalStyle } from "styled-components";

const Kpidiv = styled.div `
    display: flex;
    justify-content: space-evenly;
`;

const Styledlinks = styled.div`
  a {
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    list-style: none;
    color: black;
  }
`;

const H1div = styled.div `
  margin-left: 10%
`;

const App = () => (
  <div>
    <Kpidiv>
     <Styledlinks>
      <Link to={ROUTES.Chartmoller}>Möller bil</Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.Chartbrabil}>Brabil</Link>
    </Styledlinks>
    <Styledlinks>
      <Link to={ROUTES.Chartus}>US center</Link>
    </Styledlinks>
    </Kpidiv>
    <H1div>
    <h1>Here is the landing page (here should the KPI reports show instead)</h1>
  </H1div>
  </div>
);
export default App;
