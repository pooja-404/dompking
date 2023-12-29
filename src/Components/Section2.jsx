import React from 'react'
import cars from '../assets/images/cars.png'
import { Container, Row, Col } from 'react-bootstrap'

function Section2() {
    return (
        < div className=' py-5 '>
            <div className=' custom-container py-5'>
                <Row className='pt-5'>
                    <Col lg={6} className='d-flex  justify-content-center flex-column z-1 text-c-center'>
                        <h2 className='ff-SansUber fw-normal fs-xl lh-109 text-white'>About</h2>
                        <p className='ff-Montserrat fw-normal fs-xs lh-160 text-white max-w-520'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                    </Col>
                    <Col lg={6} className='position-relative z-1 pt-5 pt-lg-0'>
                        <img src={cars} alt="cars" className=' w-100' />
                        <div className='gold-ellipse'></div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Section2
