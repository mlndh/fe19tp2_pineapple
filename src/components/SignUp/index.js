import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";
import * as ROLES from "../../constants/roles";

const Signupsection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 80vh;
`;
const Signupsectiondiv = styled.div`
  width: 150px;
`;

const SignUpPage = () => (
  <Signupsection>
    <Signupsectiondiv>
      <div>
        <h1>SignUp</h1>
        <SignUpForm />
      </div>
    </Signupsectiondiv>
  </Signupsection>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  isAdmin: false,
  isMollerbil: false,
  isBrabil: false,
  isUscenter: false,
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const {
      username,
      email,
      passwordOne,
      isAdmin,
      // isMollerbil,
      isBrabil,
      isUscenter
    } = this.state;
    const roles = [];
    if (isAdmin) {
      roles.push(ROLES.ADMIN);
    }
    /* if (isMollerbil) {
      roles.push(ROLES.MOLLERBIL);
    } */
    if (isBrabil) {
      roles.push(ROLES.BRABIL);
    }
    if (isUscenter) {
      roles.push(ROLES.USCENTER);
    }
    this.props.firebase

      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      // isMollerbil,
      isUscenter,
      isBrabil,
      error
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <h2>
          <input
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />{" "}
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />{" "}
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />{" "}
          <br />
          <label>
            Admin
            <input
              name="isAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={this.onChangeCheckbox}
            />
          </label>
          {/* <label>
          Mollerbil:
          <input
            name="isMollerbil"
            type="checkbox"
            checked={isMollerbil}
            onChange={this.onChangeCheckbox}
          />
        </label> */}
          <label>
            Brabil
            <input
              name="isBrabil"
              type="checkbox"
              checked={isBrabil}
              onChange={this.onChangeCheckbox}
            />
          </label>
          <label>
            UScenter
            <input
              name="isUscenter"
              type="checkbox"
              checked={isUscenter}
              onChange={this.onChangeCheckbox}
            />
          </label>
          <br />
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>
        </h2>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };
