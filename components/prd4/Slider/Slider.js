/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Slider from 'react-slick';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/App.css";
//import { FaStar } from "react-icons/fa";
function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2
        
    }
    return (
        <Slider {...settings} className="roler">
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                English
                            </p>
                        </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/425.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                Mathematics
                            </p>
                        </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                English
                            </p>
                        </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/425.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                Mathematics
                            </p>
                        </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                English
                            </p>
                        </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/425.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                Mathematics
                            </p>
                        </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                English
                            </p>
                        </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/425.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                Mathematics
                            </p>
                        </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                English
                            </p>
                        </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/425.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                Mathematics
                            </p>
                        </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='cardy'>
                    <div>
                        <img className='rolling' src='images/444.jpg' />
                    </div>
                    <div className="heading2">
                            <p>
                                English
                            </p>
                        </div>
                </div>
            </div>
        </Slider >
    )
}

export default ImageSlider