import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/screens/homeScreen";
import LoginForm from "./components/screens/loginForm";
import SignUpForm from "./components/screens/signUpForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect, useHistory } from "react-router";
import notFound from "./components/screens/notFound";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function App({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <home style={{ minHeight: "100vh", width: "80%" }}>
          <Switch>
            <Route exact path='/sign-up' component={SignUpForm} />
            <Route
              path='/sign-in'
              render={(...props) =>
                !isLoggedIn ? <LoginForm /> : <Redirect to='/' />
              }
            />
            <Route
              exact
              path='/'
              render={(...props) =>
                isLoggedIn ? <Home /> : <Redirect to='/sign-in' />
              }
            />
            <Route component={notFound} />
          </Switch>
        </home>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(App);
