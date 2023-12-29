import React from 'react'
import timemonk from '../assets/images/timemonk.png'
import yellowcircle from '../assets/images/yellowcircle.svg'
import timeyellow from '../assets/images/timeyellow.svg'
import { Col, Container, Row } from 'react-bootstrap'

function Timeline() {
    return (
        <div className='light-black py-5'>
            <div className='custom-container'>
                <h2 className='ff-SansUber fw-normal fs-xl lh-109 text-white text-center pb-lg-180  '>Roadmap</h2>
                <div className='position-relative d-none d-lg-block '>
                    <img src={timemonk} alt="monkey" className=' d-lg-block d-none' />
                    <img src={timeyellow} alt="monkey" className='roadmapline d-lg-block d-none shadow ' />
                    <img src={yellowcircle} alt="monkey" className='yellow-circle d-xl-block d-none' />
                    <img src={yellowcircle} alt="monkey" className='yellow-circle2 d-xl-block d-none' />
                    <img src={yellowcircle} alt="monkey" className='yellow-circle3 d-xl-block d-none' />
                    <img src={yellowcircle} alt="monkey" className='yellow-circle4 d-xl-block d-none' />
                    <img src={yellowcircle} alt="monkey" className='yellow-circle5 d-xl-block d-none' />
                    <div className='d-lg-block d-none'>
                        <div className='d-flex align-items-center timeline grow gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="179" height="12" viewBox="0 0 179 12" fill="none">
                                <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z" fill="#fff" />
                            </svg>
                            <>
                                <div className="small-circle d-flex  align-items-center ps-3 pe-3 ">
                                    <p className='fs-s lh-109 color-black ff-Montserrat fw-bolderr mb-0 '>20%</p>
                                </div>
                            </>
                            <div className=''>
                                <h2 className='ff-SansUber text-white fs-s fw-normal lh-109'>Phase 1</h2>
                                <p className='fs-xs ff-Montserrat fw-normal text-white lh-160 max-w-565'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center timeline1 grow  gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="109" height="12" viewBox="0 0 109 12" fill="none">
                                <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM97.6667 6.00001C97.6667 8.94553 100.054 11.3333 103 11.3333C105.946 11.3333 108.333 8.94553 108.333 6.00001C108.333 3.05449 105.946 0.666675 103 0.666675C100.054 0.666675 97.6667 3.05449 97.6667 6.00001ZM6 7L103 7.00001L103 5.00001L6 5L6 7Z" fill="white" />
                            </svg>
                            <>
                                <div className="small-circle d-flex  align-items-center ps-3 pe-3 ">
                                    <p className='fs-s lh-109 color-black ff-Montserrat fw-bolderr mb-0 '>40%</p>
                                </div>
                            </>
                            <div className=''>
                                <h2 className='ff-SansUber text-white fs-s fw-normal lh-109'>Phase 2</h2>
                                <p className='fs-xs ff-Montserrat fw-normal text-white lh-160 max-w-565'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center timeline2 grow  gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="123" height="12" viewBox="0 0 123 12" fill="none">
                                <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM111.667 6C111.667 8.94552 114.054 11.3333 117 11.3333C119.946 11.3333 122.333 8.94552 122.333 6C122.333 3.05448 119.946 0.666667 117 0.666667C114.054 0.666667 111.667 3.05448 111.667 6ZM6 7H117V5H6V7Z" fill="white" />
                            </svg>
                            <>
                                <div className="small-circle d-flex  align-items-center ps-4 pe-4">
                                    <p className='fs-s lh-109 color-black ff-Montserrat fw-bolderr mb-0 '>60%</p>
                                </div>
                            </>
                            <div className='p'>
                                <h2 className='ff-SansUber text-white fs-s fw-normal lh-109'>Phase 3</h2>
                                <p className='fs-xs ff-Montserrat fw-normal text-white lh-160 max-w-565'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris. </p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center timeline3 grow  gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="12" viewBox="0 0 97 12" fill="none">
                                <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM85.6667 6.00001C85.6667 8.94553 88.0545 11.3333 91 11.3333C93.9455 11.3333 96.3333 8.94553 96.3333 6.00001C96.3333 3.05449 93.9455 0.666674 91 0.666674C88.0545 0.666674 85.6667 3.05449 85.6667 6.00001ZM6 7L91 7.00001L91 5.00001L6 5L6 7Z" fill="white" />
                            </svg>
                            <>
                                <div className="small-circle d-flex  align-items-center ps-3 pe-3 ">
                                    <p className='fs-s lh-109 color-black ff-Montserrat fw-bolderr mb-0 '>80%</p>
                                </div>
                            </>
                            <div className=''>
                                <h2 className='ff-SansUber text-white fs-s fw-normal lh-109'>Phase4</h2>
                                <p className='fs-xs ff-Montserrat fw-normal text-white lh-160 max-w-565'>Ut egestas lacus nec varius blandit volutpat, malesuada nunc, nisl. Nisl mattis convallis lacus tristique.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center timeline4 grow  gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="133" height="12" viewBox="0 0 133 12" fill="none">
                                <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM121.667 6.00001C121.667 8.94553 124.054 11.3333 127 11.3333C129.946 11.3333 132.333 8.94553 132.333 6.00001C132.333 3.05449 129.946 0.666677 127 0.666677C124.054 0.666677 121.667 3.05449 121.667 6.00001ZM6 7L127 7.00001L127 5.00001L6 5L6 7Z" fill="white" />
                            </svg>
                            <>
                                <div className="small-circle d-flex  align-items-center  ps-3 pe-3 ">
                                    <p className='fs-s lh-109 color-black ff-Montserrat fw-bolderr mb-0 '>100%</p>
                                </div>
                            </>
                            <div className='ps-xl-5'>
                                <h2 className='ff-SansUber text-white fs-s fw-normal lh-109'>Phase 5</h2>
                                <p className='fs-xs ff-Montserrat fw-normal text-white lh-160 max-w-565'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='position-relative '>
                    <Row className='d-lg-none d-block position-relative z-1 '>
                        <Col lg={6}>
                            <img src={timemonk} alt="monkey" className='w_100 ' />
                        </Col>
                        <Col lg={6} className='pt-5' >
                            <div className='d-flex align-items-center gap-3 pt-4 '>

                                <div>
                                    <div className="small-circle d-flex  align-items-center">
                                        <p className='fs-s lh-109 color-black ff-Montserrat fw-bolderr mb-0 '>20%</p>
                                    </div>
                                </div>
                                <div className='ps-xl-5'>
                                    <h2 className='ff-SansUber text-white fs-s fw-normal lh-109'>Phase 1</h2>
                                    <p className='fs-xs ff-Montserrat fw-normal text-white lh-160 max-w-565'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3 pt-4'>

                                <div>
                                    <div className="small-circle d-flex  align-items-center ">
                                        <p className='fs-s lh-109 color-black ff-Montserrat fw-bolderr mb-0 '>40%</p>
                                    </div>
                                </div>
                                <div className='ps-xl-5'>
                                    <h2 className='ff-SansUber text-white fs-s fw-normal lh-109'>Phase 2</h2>
                                    <p className='fs-xs ff-Montserrat fw-normal text-white lh-160 max-w-565'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3 pt-4'>

                                <div>
                                    <div className="small-circle d-flex  align-items-center ">
                                        <p className='fs-s lh-109 color-black ff-Montserrat fw-bolderr mb-0 '>60%</p>
                                    </div>
                                </div>
                                <div className='ps-xl-5'>
                                    <h2 className='ff-SansUber text-white fs-s fw-normal lh-109'>Phase 3</h2>
                                    <p className='fs-xs ff-Montserrat fw-normal text-white lh-160 max-w-565'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris. </p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3 pt-4'>

                                <div>
                                    <div className="small-circle d-flex  align-items-center ">
                                        <p className='fs-s lh-109 color-black ff-Montserrat fw-bolderr mb-0 '>80%</p>
                                    </div>
                                </div>
                                <div className='ps-xl-5'>
                                    <h2 className='ff-SansUber text-white fs-s fw-normal lh-109'>Phase4</h2>
                                    <p className='fs-xs ff-Montserrat fw-normal text-white lh-160 max-w-565'>Ut egestas lacus nec varius blandit volutpat, malesuada nunc, nisl. Nisl mattis convallis lacus tristique.</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3 pt-4'>

                                <div>
                                    <div className="small-circle d-flex  align-items-center ">
                                        <p className='fs-s lh-109 color-black ff-Montserrat fw-bolderr mb-0 '>100%</p>
                                    </div>
                                </div>
                                <div className='ps-xl-5'>
                                    <h2 className='ff-SansUber text-white fs-s fw-normal lh-109'>Phase 5</h2>
                                    <p className='fs-xs ff-Montserrat fw-normal text-white lh-160 max-w-565'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='circleline'></div>
                </div>
                <div className='d-flex justify-content-center pt-lg-120'>
                    <button className='fs-xs fw-normal color-black btn-1  ff-SansUber mt-5 border-0'> Read Our Whitepaper</button>
                </div>
            </div>
        </div>
    )
}

export default Timeline