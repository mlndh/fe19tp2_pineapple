import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { SignUpForm } from "../SignUp";
import { compose } from "recompose";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import styled from "styled-components";

const Maindiv = styled.div`
  margin-left: 10%;

  h1 {
    padding-top: 40px;
    padding-bottom: 20px;
  }
`;

class AdminPage extends Component {
  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: []
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));
      this.setState({
        users: usersList,
        loading: false
      });
    });
  }
  render() {
    const { users, loading } = this.state;
    return (
      <Maindiv>
        <h1> Admin </h1>
        <br />
        <h2>
          Below you can sign up new users and you have a list over every user.
        </h2>
        {loading && <div>Loading ...</div>}
        <SignUpForm />
        <br />
        <h3>
          Users:
          <UserList users={users} />
        </h3>
      </Maindiv>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);
export default compose(withAuthorization(condition), withFirebase)(AdminPage);
