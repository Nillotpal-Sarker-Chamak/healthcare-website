import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service}=props;
    const { id, name, description, image } = service;
    return (
        <div className="service pb-3 ">
            <img className=" img-fluid " style={{ width: '100%' }} src={image} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn  btn-info">All About:{name}</button>
            </Link>
        </div>
    );
};

export default Service;