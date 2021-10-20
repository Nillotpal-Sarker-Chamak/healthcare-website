import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Always First to React</h3>
                        <h5>Best Treatment Record in case of Emergencies</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-dark">
                        <h3>Most ICU's In The Town</h3>
                        <h5>We have ICU specialist doctors and nurses</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-dark">
                        <h3>Best in All Sectors of Health</h3>
                        <h5>We have Some of the BEST DOCTORS and Nurses of the Country</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;