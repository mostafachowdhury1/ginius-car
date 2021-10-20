import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const{signInGoogle}=useAuth()
    return (
        <div>

<div className=" container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-10 mx-auto shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-3">
                    <button  className="btn btn-warning" onClick={signInGoogle}>google sign in</button>
                    </div>
                        <Link to="/regestar">
                            
                    <p >have an account alreay ?</p>
                        </Link>
                </div>
               
            </div>
        </div>

            
            
        </div>
    );
};

export default Login;