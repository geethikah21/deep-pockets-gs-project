import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './table.css'

class TableForm extends Component {
    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
        this.state = {
            energy: null,
            financial: null,
            estate: null,
            technology: null,
            pharmaceuticals: null,
            airline: null,
            retail: null,
            gaming: null
        }
    }

    handleChange(event) {

        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]:  value, 
        })
    }

    handleClick(event) {

        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
        }, () => {
            if (this.props.onClick) {
                this.props.onClick(this.state)
            }
        })
    }


    render() {
        return (
            <div>
            <div className="table-form">
                <form autoComplete="off">
                    <label>
                        Energy:
                        <input
                            name="energy"
                            value={this.state.energy}
                            type="number"
                            min="5"
                            onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label>
                        Technology:
                        <input
                            name="technology"
                            value={this.state.technology}
                            type="number"
                            onChange={this.handleChange}
                            min="6"/>
                    </label>
                    <br />
                    <label>
                        Financial Services:
                        <input
                            name="financial"
                            value={this.state.financial}
                            type="number"
                            onChange={this.handleChange}
                            min="4"/>
                    </label>
                    <br />
                    <label>
                        Real Estate:
                        <input
                        name="estate"
                            value={this.state.estate}
                            type="number"
                            onChange={this.handleChange}
                            min="15"/>
                    </label>
                    <br />
                    <label>
                        Pharmaceuticals:
                        <input
                        name="pharmaceuticals"
                            value={this.state.pharmaceuticals}
                            type="number"
                            onChange={this.handleChange}
                            min="10"/>
                    </label>
                    <br />
                    <label>
                        Airline:
                        <input
                        name="airline"
                            value={this.state.airline}
                            type="number"
                            onChange={this.handleChange}
                            min="10"/>
                    </label>
                    <br />
                    <label>
                        Retail:
                        <input
                        name="retail"
                            value={this.state.retail}
                            type="number"
                            onChange={this.handleChange}
                            min="10"/>
                    </label>
                    <br />
                    <label>
                        Gaming:
                        <input
                        name="gaming"
                            value={this.state.gaming}
                            type="number"
                            onChange={this.handleChange}
                            min="12"/>
                    </label>
                    <br />
                </form>
            </div>
            <Button 
                    variant="contained" 
                    color="primary"
                    onClick={this.handleClick}
                >
                                    Submit
                </Button>   
            </div>
        )
    }
}

export default TableForm