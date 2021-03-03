import React, { Component } from "react";


class TablePopup extends Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
        <div className="pop-up">
            <span><b>Sector: Minimum Allocation</b></span><br/>
            <span>Energy: 5</span><br/>
            <span>Financial Services: 4</span><br/>
            <span>Technology: 6</span><br/>
            <span>Real Estate: 15</span><br/>
            <span>Pharmaceuticals: 10</span><br/>
            <span>Airline: 10</span><br/>
            <span>Retail: 10</span><br/>
            <span>Gaming: 12</span><br/>
        </div>
        </div>
      </div>
    );
  }
}

export default TablePopup