import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import domking from '../assets/images/domking.png'
import monkey1 from '../assets/images/monkey1.png'
import monkey2 from '../assets/images/monkey2.png'
import monkey3 from '../assets/images/monkey3.png'
import monkey4 from '../assets/images/monkey4.png'
import monkey5 from '../assets/images/monkey5.png'
import monkey6 from '../assets/images/monkey6.png'
import monkey7 from '../assets/images/monkey7.png'
import monkey8 from '../assets/images/monkey8.png'
import monkey9 from '../assets/images/monkey9.png'
import lastmonkey from '../assets/images/lastmonkey.png'
const Section4 = () => {
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
                breakpoint: 1400,
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }

            },
            {
                  breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className='light-black'>
            <div className='fuild-container pt-5  position-relative overflow-hidden pb-lg-370 d-lg-block d-none  z-1'>
                <div className='d-flex align-items-center justify-content-center flex-column' >
                    <h3 className='fs-xl fw-normal lh-108 text-white ff-SansUber '>THE KONGS</h3>
                    <img src={domking} alt="thekongs" className='pt-3 position relative z-1' />
                </div>
                <img src={monkey1} alt="monkey" className='kong1' />
                <img src={monkey2} alt="monkey" className='kong2' />
                <img src={monkey3} alt="monkey" className='kong3' />
                <img src={monkey4} alt="monkey" className='kong4' />
                <img src={monkey5} alt="monkey" className='kong5' />
                <img src={monkey6} alt="monkey" className='kong6' />
                <img src={monkey7} alt="monkey" className='kong7' />
                <img src={monkey8} alt="monkey" className='kong8' />
                <img src={monkey9} alt="monkey" className='kong9' />
                <img src={lastmonkey} alt="monkey" className='kong10' />
                <div className='yellow-ellipse'></div>
            </div>
            <div className='custom-container pt-5  pb-370 d-lg-none d-block  z-1'>
                <div className='d-flex align-items-center justify-content-center flex-column' >
                    <h3 className='fs-xl fw-normal lh-108 text-white ff-SansUber text-nowrap pt-5'>THE KONGS</h3>
                </div>

                <Slider {...settings}>
                    <div className=' mx-2 mt-5'>
                        <img src={monkey4} alt="monkey" />
                    </div>
                    <div className=' mx-2 mt-5'>
                        <img src={monkey2} alt="monkey" />
                    </div>
                    <div className=' mx-2 mt-5'>
                        <img src={monkey3} alt="monkey" />
                    </div>
                    <div className=' mx-3 mt-5'>
                        <img src={monkey4} alt="monkey" />
                    </div>
                    <div className=' mx-3 mt-5'>
                        <img src={monkey2} alt="monkey" />
                    </div>

                </Slider >

                <img src={domking} alt="thekongs" className=' w-100 pb-5' />
                <Slider {...settings} className='mt-5'>
                    <div className=' mx-2 mt-5'>
                        <img src={monkey9} alt="monkey" />
                    </div>
                    <div className=' mx-2 mt-5'>
                        <img src={monkey7} alt="monkey" />
                    </div>
                    <div className=' mx-2 mt-5'>
                        <img src={monkey8} alt="monkey" />
                    </div>
                    <div className=' mx-2 mt-5 '>
                        <img src={monkey9} alt="monkey" className='mon' />
                    </div>
                    <div className=' mx-2 mt-5'>
                        <img src={monkey7} alt="monkey" />
                    </div>

                </Slider >
            </div>
        </div>
    )
}

export default Section4