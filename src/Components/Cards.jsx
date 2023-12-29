import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import document from '../assets/images/document.svg'
import deal from '../assets/images/deal.svg'
import contact from '../assets/images/contact.svg'


const Utilitiescard = [
    {
        svg: document,
        heading: 'Document',
        para: 'Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. '

    },
    {
        svg: deal,
        heading: 'Deal',
        para: 'Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. '

    },
    {
        svg: contact,
        heading: 'Contract',
        para: 'Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. '

    },
]
const Cards = () => {
    const list = Utilitiescard.map((Utilitiescard) => (
        <Col xl={4} lg={4} md={6} sm={6} className='mt-3 pt- pt-xl-0 position-relative'>
            <Card className='Utilitiescard'>
                <div className='text-center pt-4'>
                    <img src={Utilitiescard.svg} alt="img-1" />
                </div>
                <Card.Body>
                    <p className='ff-Montserrat fw-semibold fs-md lh-109 text-white text-center pt-1'>{Utilitiescard.heading}</p>
                    <p className='ff-Montserrat fw-normal fs-xs lh-160 white text-center pt-1 max-w-35 0'>{Utilitiescard.para}</p>
                </Card.Body>
            </Card >
            <div className='card-elipse'></div>
            <div className='card-topellipse'></div>
        </Col >
    ))
    return (
        <div>
            <Row className=' py-5 justify-content-center'>
                {list}
            </Row >
        </div>
    );
}
export default Cards