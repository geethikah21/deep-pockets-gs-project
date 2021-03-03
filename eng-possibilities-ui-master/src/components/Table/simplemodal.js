import React from "react";
import './modal.css'
export default class SimpleModal extends React.Component {
  render() {
    return (
        <div className="pop-up">
            <span><b>Sector: Minimum Allocation</b></span><br/>
            <span>Energy: 5</span><br/>
            <span>Financial Services: 4</span><br/>
            <span>Technology: 6</span><br/>
            <span>Real Estate: 15</span><br/>
            <span>Pharmaceuticals: 10</span><br/>
            <span>Airline: 10</span><br/>
            <span>Retail: 10</span><br/>
            <span>Gaming: 12</span><br/><br/>
        </div>
    );
  }
}