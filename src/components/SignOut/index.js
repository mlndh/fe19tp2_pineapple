import React from "react";
import { withFirebase } from "../Firebase";

const Logouticon = require('../Assets/Logout.svg');
const SignOutButton = ({ firebase }) => (

  
  <button type="button" onClick={firebase.doSignOut}>
    <img src={Logouticon} alt="Sign Out"/>
  </button>
);
export default withFirebase(SignOutButton);
