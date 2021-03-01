import React, { Component } from 'react'
import "./table.css"

class TableInput extends Component{
    constructor() {
        super()

        this.state = {
            sectorPercentage: 0
        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {

        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]:  value
        })
    }

    render() {
        return (
            <div>
                <form className="row-data">
                    <input
                        type="number"
                        name="sectorPercentage"
                        value={this.state.sectorPercentage}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default TableInput