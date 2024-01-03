import React from "react";
import { useState } from "react";
import wiski from '../assets/images/wiski.png'
import { Container, Row, Col, Button } from "react-bootstrap";

const Section4 = () => {
    const [count, setCount] = useState(1);
    const decrement = () => {
        if (count >= 2) {
            setCount(count - 1);
        }
    }
    if (count == 10) {
        document.getElementById("addzero").style.display = "none"
    } else if (count == 9) {
        document.getElementById("addzero").style.display = "block"
    }
    return (
        <>
            <div className="bg-img py-5 position-relative z-1">
                <div className="custom-container">
                    <Row className="row align-items-center">
                        <Col lg={6} className="pt-4 pt-lg-0 text-c-center">
                            <img src={wiski} alt="wiski" className="ww-100" />
                        </Col>
                        <Col lg={6} className="pt-5 pt-lg-0 text-c-center">
                            <p className="text-white fs-xl lh-109 fw-normal ff-SansUber pb-5">
                                Mint NFT
                            </p>
                            <Row>
                                <Col className="col-6">
                                    <p className="ff-Montserrat fw-bolderr text-white fs-lg lh-109">
                                        9999{" "}
                                    </p>
                                    <p className="fs-xs ff-montserrat fw-normal text-white lh-160">
                                        of 10,000 minted
                                    </p>
                                </Col>
                                <Col className="col-6">
                                    <p className="ff-Montserrat fw-bolderr text-white fs-lg lh-109">
                                        .2 ETH
                                    </p>
                                    <p className="fs-xs ff-Montserrat fw-normal text-white lh-160">
                                        per NFT
                                    </p>
                                </Col>
                                <Col className="col-6">
                                    <p className="ff-Montserrat fw-bolderr text-white fs-lg lh-109 pt-4">
                                        Max 9{" "}
                                    </p>
                                    <p className="fs-xs ff-Montserrat fw-normal text-white lh-160">
                                        NFTs per transaction
                                    </p>
                                </Col>
                                <Col className="col-6">
                                    <p className="ff-Montserrat fw-bolderr text-white fs-lg lh-109 pt-4">
                                        Max 2
                                    </p>

                                    <p className="fs-xs ff-Montserrat fw-normal text-white lh-160">
                                        Transaction per wallet
                                    </p>
                                </Col>
                            </Row>
                            <div className="d-flex align-items-center iconn gap-3 mt-5 btn-width">
                                <Button className="small-btn color-black ff-montserrat fw-extrabold lh-109 fs-lg p-0  d-flex align-items-center justify-content-center iconn gap-3 mt - 5" onClick={decrement}>-</Button>
                                <div className="count-btn d-flex align-items-center justify-content-center">
                                    <p className=" count  lh-109 text-center mb-0 fw-extrabold  fs-lg  text-white ff-montserrat fw-extrabold d-flex align-items-center  justify-content-center">
                                        {" "}<span id='addzero' className="count ">0</span>
                                        {count}
                                    </p>
                                </div>
                                <Button
                                    onClick={() => setCount(count + 1)}
                                    className="small-btn color-black p-0 ff-montserrat fw-extrabold lh-109 fs-lg  d-flex align-items-center justify-content-center iconn gap-3 mt - 5"
                                >
                                    +
                                </Button>
                            </div>
                            <button className="mint-btn ff-SansUber font mt-4 text-nowrap">MINT NOW</button>
                        </Col>
                    </Row>
                </div>
                <div className="yellow-ellipse1 d-lg-block d-none"></div>
                <div className="yellow-ellipse2 d-lg-block d-none"></div>
            </div>
        </>
    ); 
};

export default Section4;