import React, { Component } from 'react'
import Aboutus from './aboutUS';
import Scroll from './Scroll';
import WhyUS from './whyUS';
import FinancialProducts from './financialProducts';
import ContactUs from './contactUs';
import Blogs from './Blogs/blogs';
import IndeskCard from './IndeskCard';
import Footer from './Footer';
import Calendy from './Calendy';

class Homepage extends Component {
  render() {
    return (
      <div>

        <Scroll ></Scroll>
        <WhyUS></WhyUS>
        {/* <FinancialProducts></FinancialProducts> */}
        <IndeskCard></IndeskCard>
        {/* <Card></Card> */}
        <Calendy></Calendy>
        <Blogs></Blogs>
        <Aboutus></Aboutus>

      </div>
    )
  }
}

export default Homepage