import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div >
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div><h2>Or Login Using Google</h2>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Please Sign In</button></div>
            <p>New to Healthcare? <Link to="/register">Create Account</Link></p>
        </div>
    );
};

export default Login;