import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home'
import Login from "./components/Login/Login";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";


function App() {
  return (
    <div className="App">
        <div>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/signup" component={Signup} />
                <PrivateRoutes exact path="/" component={Home} />
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
