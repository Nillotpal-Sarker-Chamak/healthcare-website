import React from 'react';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Contacts from '../AllContact.js/AllContact';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;