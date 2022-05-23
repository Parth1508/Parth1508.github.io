import React, { Component } from 'react'
import "../Css/financialproduct.css"
import equity from '../Images/Equity.png'
import insurance from '../Images/insurance.png'
import mutualfunds from '../Images/mutualfund.png'
import bonds from '../Images/bonds.png'
import fixeddeposit from '../Images/fixeddeposit.png'
import ipo from '../Images/ipo.png'
import goldbonds from '../Images/goldbonds.png'
import commodities from '../Images/commodities.png'
import { Col, Row } from 'react-bootstrap'
class financialProducts extends Component {
    render() {
        return (
            <section>
                <div className="financialProducts-main">
                    <div className='financialproduct-text'>
                        <span>
                            Financial Products
                        </span>
                    </div>
                  

                    <Row className='Financial-Row'>
                        <Col className='col-3 finance-Equity ' >
                            <div className='financialproduct-info-image'>
                                <img src={equity} alt="demo"  className='fin-image' />
                                <span>Equity</span>
                            </div>
                            {/* <div className="user1-socl-medi">
                <ul className="profile1-soc-icon">
                   <li>helloooo</li>
                </ul>
            </div> */}
                        </Col>
                        <Col className='col-3 ' >

                            <div className='financialproduct-info-image'>
                                <img src={insurance} alt="demo" className='fin-image' />
                                <span>Insurance</span>
                            </div>
                        </Col>
                        <Col className='col-3 ' >

                            <div className='financialproduct-info-image'>
                                <img src={mutualfunds} alt="demo" className='fin-image'  />
                                <span>Mutual Funds</span>
                            </div>
                        </Col>
                        <Col className='col-3 ' >

                            <div className='financialproduct-info-image'>
                                <img src={bonds} alt="demo" className='fin-image'  />
                                <span>Bonds</span>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                    <Col className='col-3 ' >
                        <div className='financialproduct-info-image'>
                                <img src={fixeddeposit} alt="demo" className='fin-image' />
                                <span>Fixed Deposit</span>
                        </div>
</Col>
<Col className='col-3 ' >
                        <div className='financialproduct-info-image'>

                                <img src={ipo} alt="demo" className='fin-image' />
                                <span>IPO</span>
                        </div>
                        </Col>
                        <Col className='col-3 ' >
                        <div className='financialproduct-info-image'>
                                <img src={goldbonds} alt="demo" className='fin-image' />
                              
                            {/* <span></span> */}
                        </div>
    </Col>
    <Col className='col-3 ' >
                        <div className='financialproduct-info-image'>
                                <img src={commodities} alt="demo" className='fin-image'/>
                                <span>Commodities/Currency</span>
                                {/* <span></span> */}
                        </div>
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}

export default financialProducts