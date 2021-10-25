import React from "react";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

import Home from './pages/Home'
import Mission from './pages/Mission'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/signup" component={Signup} />
              <PrivateRoutes exact path="/" component={Home} />
              <PrivateRoutes exact path="/mission" component={Mission} />
              <PrivateRoutes exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
