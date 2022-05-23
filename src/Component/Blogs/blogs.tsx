import React, { Component } from 'react'
import Slider from 'react-slick';
// import SampleNextArrow from './SampleNextArrow';
// import SamplePrevArrow from './SamplePrevArrow';
import "../../Css/Blogs.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export class blogs extends Component {
    render() {
        const settings = {
          autoplay: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          rows:2,
          slidesPerRow: 1,
        };
        return (
          <div className='blogs-main'>
            <div className='blogs-header'>
              <span>Blogs & More</span>
              </div>
          
          <div className="slick-cont">
            <Slider {...settings}>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Joshua Earle on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Alisa Anton on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Igor Ovsyannykov on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Pierre Châtel-Innocenti on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Richard Nolan on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Cristina Gottardi on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Cristina Gottardi on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Cristina Gottardi on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Cristina Gottardi on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Cristina Gottardi on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Cristina Gottardi on Unsplash"
                />
              </div>
              <div >
                <img
                  src={require("../../Images/insurance.jpeg")}
                  alt="Credit to Cristina Gottardi on Unsplash"
                />
              </div>
            </Slider>
          </div>
          </div>
        );
      }
}

export default blogs;