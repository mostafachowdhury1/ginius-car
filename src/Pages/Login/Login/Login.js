import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const{signInGoogle}=useAuth()
    return (
        <div>
            <h2>please login</h2>
            <button  className="btn btn-warning" onClick={signInGoogle}>google sign in</button>
        </div>
    );
};

export default Login;