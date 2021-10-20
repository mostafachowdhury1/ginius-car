import React from 'react';

import { useParams } from 'react-router';
import Details from '../../Details/Details';

const Booking = () => {
 
    const {serviceId}=useParams()



  
    return (


        <div>
            <h3>this is id {serviceId}</h3>

               
        </div>
    );
};

export default Booking;