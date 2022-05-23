import React from "react";
import { Row, Col, ListGroup } from 'react-bootstrap';
import logo from '../Images/Neofindesk-Logo.png';

// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";



import { Link } from "react-router-dom";
// import WebpImage from "./WebpImage";
class Footer extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="p-5 color-white bg-dark footer footermain" >
                <div className="container">
                    <Row className="inside-contRow">
                        <Col className="col-4  mb-footer-main">
                        <img src={logo}className="img-fluid img-responsive logo  image" />
                            <p className="ft">303,A Wing,Gokul Arcade,
                                <br />
                                Near Garware House,
                                <br />
                                Sahar Road,Ville Parle (E),
                                <br />
                                Mumbai - 400057
                                <br />
                                <br />
                            </p>
                            <p className="ft">Email : info@invest4edu.com</p>
                            {/* <p className="ft">Phone : +91 98995 75852</p> */}
                            <br />
                            <div className="Social-icons">
                                <div className="social-icon" >
                                    <a href="https://www.instagram.com" className="FaIcons">
                                        {/* <FaInstagram /> */}
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://www.facebook.com" className="FaIcons">
                                        {/* <FaFacebook /> */}
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://twitter.com" className="FaIcons">
                                        {/* <FaTwitter /> */}
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-4">
                            <h6 className="head">Products</h6>
                            <ListGroup variant="flush" className="list">
                                <ListGroup.Item as={Link} to="/MutualFunds" className="footer-anchor">Mutual Funds</ListGroup.Item>
                                <ListGroup.Item as={Link} to="/FixedDeposit" className="footer-anchor">Fixed Deposit</ListGroup.Item>
                                <ListGroup.Item as={Link} to="/GoldBond" className="footer-anchor">Gold Bond</ListGroup.Item>
                                <ListGroup.Item as={Link} to="/EducationLoan" className="footer-anchor">Education Loan</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col className="col-4">
                            <h6 className="head">Quick Links</h6>
                            <ListGroup variant="flush" className="list">
                                <ListGroup.Item as={Link} to="/ContactUs" className="footer-anchor">Product</ListGroup.Item>
                                <ListGroup.Item as={Link} to="/FAQs" className="footer-anchor">Team</ListGroup.Item>
                                <ListGroup.Item as={Link} to="/Disclaimer" className="footer-anchor">Book a Call</ListGroup.Item>
                                <ListGroup.Item as={Link} to="/PrivacyPolicy" className="footer-anchor">Member Login</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        
                    </Row>
                </div>
            </div>
        );
    }
}
export default Footer;