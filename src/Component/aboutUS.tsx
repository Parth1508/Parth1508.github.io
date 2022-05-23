import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import "../Css/Aboutus.css"
import logo from '../Images/rozy250px.png';
class Aboutus extends Component {
  render() {
    return (
        <section >
                <div className='aboutus-main'>
                <div className='aboutus-text'>
                    <span>OUR TEAM</span>
                    </div>
                    <Row style={{padding:"50px"}}>
                      <Col className='col-6 ' style={{margin:'auto'}}>
                      <div className='aboutus-img'>
                        <img src={logo} alt=""/>
                        </div>
                      </Col>
                      <Col className='col-6'>
                        <div className='aboutus-span'>
                        <span >
                            Lorem Ipsum has been the industry's standard dummy text ever since the 
                            1500s, when an unknown printer took a galley of type and scrambled it to 
                            make a type specimen book. It has survived not only five centuries, but also 
                            the leap into electronic typesetting, remaining essentially unchanged. It was 
                            popularised in the 1960s with the release of Letraset sheets containing Lorem 
                            Ipsum passages, and more recently with desktop publishing software like 
                            Aldus PageMaker including versions of Lorem Ipsum
                        </span>
                        </div>
                      </Col>
                        </Row>
                
                </div>
            </section>
    )
  }
}

export default Aboutus