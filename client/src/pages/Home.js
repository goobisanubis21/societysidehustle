import React from 'react';
import HomeComp from '../components/HomeComp/HomeComp'
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import NavComp from '../components/Nav/NavComp';


function Home() {
    return (
        <div>
            <NavComp />
            <Router>
                <AuthProvider>
                    <Switch>
                        <PrivateRoutes exact path="/" component={HomeComp} />
                    </Switch>
                </AuthProvider>
            </Router>
        </div>
    )
}

export default Home
