import React from 'react'
import { Container, Card } from 'react-bootstrap'
import Cards from './Cards'

function Section3() {
    return (
        <div className='light-black'>
            <div className='custom-container'>
                <Card.Header className='ff-SansUber fw-normal fs-xl lh-109 text-white text-center' > Utilities</Card.Header>
                <Cards />
            </div>
        </div>
    )
}

export default Section3