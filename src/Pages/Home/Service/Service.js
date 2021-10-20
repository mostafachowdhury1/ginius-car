import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    
    const {id, name, description, img } =props.service;
    
    return (
        <div className="service pb-3 " id="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
          
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning" >Details</button>
            </Link>
        </div>
    );
};

export default Service;