import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const {signInUsingGoogle} =useAuth();
    const location = useLocation();
    const histry = useHistory();
    const redirecturl = location.state?.from || '/shop';
//console.log("came from" ,location.state?.from);
    const handleGoogleLogIn =() => {
            signInUsingGoogle()
            .then(result => {
              histry.push(redirecturl)
            })
    }
    return (
        <div className="log-form">
            <div className="border">
                <h2>Sign-In</h2>
                <form>
                    <input placeholder="your email or phone number" type="email" name="" id="" /> <br />
                    <input type="password" placeholder="your password? " name="" id="" />
                    <br />
                    <input type="submit" value="continue" />
                </form>
               <p>new to ema-jhon ? <Link to="/register">create account</Link> </p>
               <div>-----------or ------------</div>
               <button onClick={handleGoogleLogIn} className="btn-regular">sign in with google</button>
            </div>
        </div>
    );
};

export default Login;