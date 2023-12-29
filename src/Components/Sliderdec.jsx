
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import evening from '../assets/images/evening.png'
import nfi from '../assets/images/nfi.png'
import mart from '../assets/images/mart.png'
import fannie from '../assets/images/fannie.png'
import yellowline from '../assets/images/yellowline.png'


const Slidersection = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        centreMode: true,
        speed: 2000,
        cssEase: 'Linear',
        slidesToShow: 4,
        pauseOnHover: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className='py-5 light-black '>
            <div className='custom-container'>
                    <h2 className='ff-SansUber text-white fs-xl fw-normal text-center '>Partners</h2>
                <Slider {...settings} className='pt-4'>
                    <div className='d-flex justify-content-center align-items-center mx-5 '>
                        <img src={evening} alt="sliderimg1" className='ps-5' />
                        <img src={yellowline} alt="sliderline" className='' />
                    </div>
                    <div className='d-flex justify-content-center align-items-center mx-5 '>
                        <img src={nfi} alt="sliderimg2" className='ps-2' />
                        <img src={yellowline} alt="sliderline" className='' />
                    </div>
                    <div className='d-flex justify-content-center align-items-center mx-5 '>
                        <img src={mart} alt="sliderimg3" className='ps-3' />
                        <img src={yellowline} alt="sliderline" className='' />
                    </div>
                    <div className='d-flex justify-content-center align-items-center mx-5 '>
                        <img src={fannie} alt="sliderimg4" />
                        <img src={yellowline} alt="sliderline" className='' />
                    </div>
                    <div className='d-flex justify-content-center align-items-center mx-5 '>
                        <img src={mart} alt="sliderimg3" />
                        <img src={yellowline} alt="sliderline" className='' />
                    </div>
                    <div className='d-flex justify-content-center align-items-center mx-5 '>
                        <img src={fannie} alt="sliderimg4" />
                        <img src={yellowline} alt="sliderline" className='' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Slidersection