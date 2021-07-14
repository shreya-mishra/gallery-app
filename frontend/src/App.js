import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/screens/homeScreen";
import LoginForm from "./components/screens/loginForm";
import SignUpForm from "./components/screens/signUpForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import notFound from "./components/screens/notFound";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <home style={{ minHeight: "100vh", width: "80%" }}>
          <Switch>
            <Route exact path='/sign-up' component={SignUpForm} />
            <Route path='/sign-in' component={LoginForm} />
            <Route exact path='/' component={Home} />
            <Route component={notFound} />
          </Switch>
        </home>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
