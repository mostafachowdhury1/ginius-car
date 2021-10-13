import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../images/2488756.jpg"
const NotFound = () => {
    return (
        <div>
            <img style={{width:"100%"}} src={img} alt=""/>
            <Link to="/"><button>go back</button></Link>
        </div>
    );
};

export default NotFound;