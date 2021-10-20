import React from 'react';
import Doctor from '../Doctor/Doctor';
import doctor1 from '../../../images/doctors/doctor-1.jpg'
import doctor2 from '../../../images/doctors/doctor-2.jpg'
import doctor3 from '../../../images/doctors/doctor-3.jpg'
import doctor4 from '../../../images/doctors/doctor-4.jpg'

const doctors = [
    {
        img: doctor1,
        name: 'Nazmus Sakib',
        expertize: 'ENT Specialist',
        designation: 'Head of ENT Department'
    },
    {
        img: doctor2,
        name: 'Pran Gopal Datto',
        expertize: 'Medicine Specialist',
        designation: 'Associate Professor of Medicine'
    },
    {
        img: doctor3,
        name: 'Saroar Jahan',
        expertize: 'Surgery Specialist',
        designation: 'Head of Surgery Department'
    },
    {
        img: doctor4,
        name: 'Hosne Ara Begum',
        expertize: 'Gynae Specialist',
        designation: 'Head of Gynae Department'
    },
]

const Doctors = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Some Of Our Doctors</h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;