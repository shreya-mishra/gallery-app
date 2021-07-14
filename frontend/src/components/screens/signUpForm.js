import React, { useState } from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";
import ErrorMessage from "../errorMessage";
import Loading from "../loading";
import axios from "axios";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage(`Passwords Do Not Match`);
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "/api/users",
          { name, profile, email, password },
          config
        );
        console.log(data);
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "gallery-app");
      data.append("cloud_name", "dfi2yf43v");
      fetch("https://api.cloudinary.com/v1_1/dfi2yf43v/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProfile(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
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

        {message && <ErrorMessage>{message}</ErrorMessage>}
        {loading && <Loading />}

        <form onSubmit={handleSubmit} className='formFields'>
          <div className='formField'>
            <label className='formFieldLabel' htmlFor='name'>
              Full Name
            </label>
            <input
              required
              type='text'
              id='name'
              className='formFieldInput'
              placeholder='Enter your full name'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ height: 20 }} />

          <div className='formField'>
            <label className='formFieldLabel' htmlFor='email'>
              E-Mail Address
            </label>
            <input
              required
              type='email'
              id='email'
              className='formFieldInput'
              placeholder='Enter your email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ height: 20 }} />
          {picMessage && <ErrorMessage>{picMessage}</ErrorMessage>}
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
              onChange={(e) => postDetails(e.target.files[0])}
            />
          </div>
          <div style={{ height: 20 }} />

          <div className='formField'>
            <label className='formFieldLabel' htmlFor='password'>
              Password
            </label>
            <input
              required
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
            <label className='formFieldLabel' htmlFor='confirmPassword'>
              Confirm Password
            </label>
            <input
              required
              type='password'
              id='confirmPassword'
              className='formFieldInput'
              placeholder='Enter your Confirm Password'
              name='confirmPassword'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div style={{ height: 20 }} />

          <div className='formField'>
            <button className='formFieldButton'>Sign Up</button>{" "}
            {/* <button to='/' className='formFieldLink'>
              Have an account
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
