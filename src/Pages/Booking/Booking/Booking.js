import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(_ => {
        fetch(`https://enigmatic-fjord-71291.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [serviceId])
    return (
        <div>
            <h3>Details of: {service.name}</h3>
            <h2>this is booking: {serviceId}</h2>
            <p>Description: {service.description}</p>
            <img src={service.image} alt="" />

        </div>
    );
};

export default Booking;