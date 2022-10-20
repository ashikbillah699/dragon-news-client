import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assets/brand/brand2.jpg'
import brand3 from '../../../assets/brand/brand3.jpg'

const BandCarousal = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brand1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brand3}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BandCarousal;