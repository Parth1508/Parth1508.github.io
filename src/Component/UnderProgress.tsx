import React, { Component } from "react";
export class UnderProgress extends Component {
  render() {
    return (
      <div className="Underprogress">
        <div className="UnderprogressCenter " >
          <div className=" block text-center">
            <h1 className="Underprogresshead">Oops !!</h1>
            <h3>Website under maintenance</h3>
            <p>
              Web pages might be down, as we are moving our Servers. <br />
              Don't worry, we will be back soon. <br />
              For anything urgent, please drop us an email at :
              info@invest4edu.com <br />
              Thank you
            </p>
            <a href="/" className=" btn btnInProgres">
              visit homepage
            </a>
          </div>
        </div>
        <div className="scroll-top-to">
          <i className="ti-angle-up"></i>
        </div>
      </div>
    );
  }
}
export default UnderProgress;
