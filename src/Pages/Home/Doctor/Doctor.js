import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, img, expertize, designation } = doctor;
    return (
        <div className="col-lg-4 col-md-6 col-sm-9 col-12 overflow-hidden">
            <img className="img-fluid " src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-secondary">{expertize}</h5>
            <h3 className="text-primary">{designation}</h3>
        </div>
    );
};

export default Doctor;