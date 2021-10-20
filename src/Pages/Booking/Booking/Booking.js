import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setserviceDetails] = useState([]);

    const [foundsingleService, setFoundSingleService] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setserviceDetails(data))
    }
        , [])

    useEffect(() => {
        const foundService = serviceDetails.find(service => service.id === serviceId)
        setFoundSingleService(foundService)
    }, [serviceDetails])
    return (
        <div>
            <h2>Service Name:{foundsingleService?.name}</h2>
            <img src={foundsingleService?.image} alt="" />
            <h5>{foundsingleService?.description}</h5>

        </div>
    );
};

export default Booking;