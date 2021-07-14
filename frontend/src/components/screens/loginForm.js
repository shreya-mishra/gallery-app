import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
import { NavLink } from "react-router-dom";
import Loading from "../loading";
import ErrorMessage from "../errorMessage";
import { connect } from "react-redux";
import { login, logout } from "./../../redux/User/user.actions";

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      login(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <>
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
      </div>

      <div className='formCenter'>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <Loading />}
        <div style={{ height: 20 }} />

        <form className='formFields' onSubmit={submitHandler}>
          <div className='formField'>
            <label className='formFieldLabel' htmlFor='email'>
              E-Mail Address
            </label>
            <input
              type='email'
              id='email'
              className='formFieldInput'
              placeholder='Enter your email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ height: 20 }} />

          <div className='formField'>
            <label className='formFieldLabel' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='formFieldInput'
              placeholder='Enter your password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ height: 20 }} />
          <div className='formField'>
            <button className='formFieldButton'>Sign In</button>{" "}
          </div>
        </form>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
