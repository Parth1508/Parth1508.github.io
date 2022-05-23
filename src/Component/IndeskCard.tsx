import React, { Component } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../Css/indeskcard.css"
// import galleryone from "../images/gallery/gallery-01.jpg"
import Equity from "../Images/Equity.png"
import insurance from "../Images/insurance.png"
import mutualfund from "../Images/mutualfund.png"
import bonds from "../Images/bonds.png"
import fixeddeposit from "../Images/fixeddeposit.png"
import ipo from "../Images/ipo.png"
import goldbonds from "../Images/goldbonds.png"
import commodities from "../Images/commodities.png";


export class IndeskCard extends Component {
  render() {
    return (
      <section>
        <div>
      <Row className='Cards-Row-1'>
      <Col className="col-3">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Equity} alt="Avatar" style={{width:"200px",height:"200px"}}/>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      </Col>
      
      
      <Col className="col-3">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Equity} alt="Avatar" style={{width:"200px",height:"200px"}}/>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      </Col>
      
      <Col className="col-3">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Equity}alt="Avatar" style={{width:"200px",height:"200px"}}/>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      </Col>
      <Col className="col-3">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Equity}alt="Avatar" style={{width:"200px",height:"200px"}}/>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      </Col>
      </Row>
      <Row>
      <Col className="col-3">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Equity} alt="Avatar" style={{width:"200px",height:"200px"}}/>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      </Col>
      
      
      <Col className="col-3">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Equity} alt="Avatar" style={{width:"200px",height:"200px"}}/>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      </Col>
      
      <Col className="col-3">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Equity}alt="Avatar" style={{width:"200px",height:"200px"}}/>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      </Col>
      <Col className="col-3">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Equity}alt="Avatar" style={{width:"200px",height:"200px"}}/>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
      </Col>
      </Row>
      </div>
      </section>
    )
  }
}

export default IndeskCard