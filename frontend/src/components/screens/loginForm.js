import React from "react";
import "../../App.css";
const LoginForm = () => {
  return (
    <div className='formCenter'>
      <form
        className='formFields'
        //   onSubmit={this.handleSubmit}
      >
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
          <button className='formFieldButton'>Sign In</button>{" "}
          <button to='/' className='formFieldLink'>
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
