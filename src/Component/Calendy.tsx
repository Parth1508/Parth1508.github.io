import { Component } from "react";

class Calendy extends Component {
    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head?.appendChild(script);
      }
    
      componentWillUnmount() {
        // whatever you need to cleanup the widgets code
      }
    
      render(){
        return (
            <section>
            <div className="Card-calendy-main">
            <div id="schedule_form">
              <div 
                className="calendly-inline-widget"
                data-url="https://calendly.com/parthacharya66"
                style={{ minWidth: '320px', height: '650px' }} />
            </div>
          </div>
                </section>
        );
      }
    }
export default Calendy;