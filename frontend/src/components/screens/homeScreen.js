import { Container } from "@material-ui/core";
import React from "react";
import "../../App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import SignUpForm from "./signUpForm";
import LoginForm from "./loginForm";

const Home = () => {
  return (
    <Container>
      <BrowserRouter>
        <div className='main'>
          <div className='appForm'>
            <div style={{ height: 20 }} />
            <div className='pageSwitcher'>
              <NavLink
                to='/sign-in'
                activeClassName='pageSwitcherItem-active'
                className='pageSwitcherItem'>
                Sign In
              </NavLink>
              <NavLink
                exact
                to='/sign-up'
                activeClassName='pageSwitcherItem-active'
                className='pageSwitcherItem'>
                Sign Up
              </NavLink>
            </div>

            <Route exact path='/sign-up' component={SignUpForm} />
            <Route path='/sign-in' component={LoginForm} />
          </div>
        </div>
      </BrowserRouter>
    </Container>
  );
};

export default Home;
