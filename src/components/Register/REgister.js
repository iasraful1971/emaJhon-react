import React from 'react';
import { Link } from 'react-router-dom';

const REgister = () => {
    return (
        <div className="log-form">
            <div className="border">
                <h2>Create account</h2>
                <form>
                    <input type="email" name="" placeholder="your email? " id="" /> <br />
                    <input type="password" name="" placeholder="your password? " id="" />
                    <br />
                    <input type="password" name="" placeholder="confirm password" id="" /> <br />
                    <input type="submit" value="register " />
                </form>
                <p>Already have an account?<Link to="/login">Sign-In</Link> </p> 
                <div>-----------or ------------</div>
               <button className="btn-regular">sign in with google</button>
            </div>
        </div>
    );
};

export default REgister;