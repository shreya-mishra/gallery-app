import React from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";

const SignUpForm = () => {
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
        <form
          // onSubmit={this.handleSubmit}
          className='formFields'>
          <div className='formField'>
            <label className='formFieldLabel' htmlFor='name'>
              Full Name
            </label>
            <input
              type='text'
              id='name'
              className='formFieldInput'
              placeholder='Enter your full name'
              name='name'
              // value={this.state.name}
              // onChange={this.handleChange}
            />
          </div>
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
              // value={this.state.email}
              // onChange={this.handleChange}
            />
          </div>
          <div className='formField'>
            <label className='formFieldLabel' htmlFor='profile'>
              Profile
            </label>
            <input
              type='file'
              id='profile'
              accept='image/*'
              className='formFieldInput'
              placeholder='Choose your profile'
              name='profile'
              // value={this.state.email}
              // onChange={this.handleChange}
            />
          </div>
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
              // value={this.state.password}
              // onChange={this.handleChange}
            />
          </div>

          <div style={{ height: 20 }} />

          <div className='formField'>
            <button className='formFieldButton'>Sign Up</button>{" "}
            <button to='/' className='formFieldLink'>
              Have an account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
