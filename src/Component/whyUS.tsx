import React, { Component } from 'react'
import demo from "../Images/insurance.jpeg"
import "../Css/whyus.css"
import { Col, Row } from 'react-bootstrap'

class whyUS extends Component {
    render() {
        return (
            <section>
                <div className="whyUs-main">
                    <div className='whyus-cont'>
                        <div className='whyus-text' >
                            <div className='whyus-span'>
                                <span>Why</span>
                                <span style={{color:"#00c0c0"}}> neofindesk?</span>
                            </div>

                            <Row>
                                <Col className='col-4 ' >
                                    <div className='whyus-info-image'>
                                        <img src={demo} alt="demo" />
                                        <span>Product</span>
                                    </div>
                                </Col>
                                <Col className='col-4 ' >
                                    <div className='whyus-info-image'>
                                        <img src={demo} alt="demo" />
                                        <span>Platform</span>
                                    </div>
                                </Col>
                                <Col className='col-4 ' >
                                    <div className='whyus-info-image'>
                                        <img src={demo} alt="demo" />
                                        <span>Intellectual Capability</span>
                                    </div>
                                </Col>
                            </Row>

                        </div>


                    </div>
                </div>

            </section>
        )
    }
}

export default whyUS