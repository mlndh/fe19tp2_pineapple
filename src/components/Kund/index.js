import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { SignUpForm } from "../SignUp";
import { compose } from "recompose";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import styled from "styled-components";

const Maindiv = styled.div`
  margin-left: 10%;
`;

class Kund extends Component {
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
        <h1>Admin</h1>
        <p>Kundsida</p>
        {loading && <div>Loading ...</div>}
        <SignUpForm />
        <UserList users={users} />
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

const condition = authUser =>
  authUser && authUser.roles.includes(ROLES.MOLLERBIL);
export default compose(withAuthorization(condition), withFirebase)(Kund);
