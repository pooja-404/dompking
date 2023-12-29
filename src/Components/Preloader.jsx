import React, { useState, useEffect } from 'react';
import bear from '../assets/images/bear.png'


const preloader = () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        document.getElementById("preloader").classList.add("d_none")
        document.body.classList.remove("overflow_hidden")
    }, 3000);
    return (
        <div>
            <div id="preloader" class="overflow-y-hidden  position-relative  ">
                <div class=" light-black min-vh-100 d-flex align-items-center justify-content-center  position-fixed animation pointer_event_none z_4 duration-300  top-0 start-0 w-100 ">
                    <div class="d-flex align-items-center justify-content-center preloder-img ">
                        <img src={bear} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default preloader