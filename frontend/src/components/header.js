import { Button, Container } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/User/user.actions";

const Header = ({ logout, user }) => {
  return (
    <Container>
      {console.log(user)}
      <div
        style={{
          textAlign: "center",
          fontFamily: "Otomanopee One",
        }}>
        <div style={{ height: 20 }} />
        {user.token ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "100px" }} />

            <h1>Welcome To {user.name}'s Gallery</h1>

            <Button variant='text' color='secondary' onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <div style={{ width: "100px" }} />
            <h1>Welcome To your Gallery</h1>
          </div>
        )}
      </div>
      <div style={{ height: 40 }} />
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
