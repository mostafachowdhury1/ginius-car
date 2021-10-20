import React from 'react';


const Details = (props) => {

    const {name,img}=props.service;
    return (
        <div>
            <div>
                <img className="w-50" src={img} alt="pic"/>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Details;