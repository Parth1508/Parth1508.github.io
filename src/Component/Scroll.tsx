import React, { Component } from 'react'
import "../Css/scroll.css"

class Scroll extends Component {
  render() {
    return (
      <>
			<section className='whoarewe-section'>
{/* <div className='container'> */}

        <div className='whoarewe_maindiv wrapper'>
          <div id="textSlider" className=" whoarewe-slider row flex">
            <div id='flip'>
              <div><div>Intellectual Capability</div></div>
              <div><div>Platform</div></div>
              <div><div>Product</div></div>
            </div>
          </div>
        </div>


        <div className='whoarewe-main'>
						<div className='whoarewe-text'>
						<div className="iamCol">
							<span>The ^ Tools you need to help grow your business</span>
						</div>
					<div className="whoarewe-info">
						<p className='whoarewe-description'>Our mission is to empower individuals and business
							have access to useful and affordable financial
							products and services that meet their needs</p>
					</div>
			</div>
						</div>

{/* </div> */}

</section>
      </>
    )
  }
}

export default Scroll