import React, { Component } from 'react'
import {DataGrid} from '@material-ui/data-grid'
import "./table.css"
import TableInput from './tableinput'

function getEnergy(params) {
    return `${params.getValue('percentage') || ''} ${
      params.getValue('percentage') || ''
    }`;
  }

class TableSection extends Component {
    constructor() {
        super()

        this.state = {
            userData:  [
                {id: 1, col1: "Hello", col2: "World"}, 
                {id: 2, col1: "XGrid", col2: "is Awesome"}
            ],
            
            dataFields:  [
                { field: 'category', headerName: 'Category', width: 150, 
            valueGetter: getEnergy},
                { field: 'year_one', headerName: 'Year One', width: 150},
                { field: 'year_two', headerName: 'Year Two', width: 150},
                { field: 'year_three', headerName: 'Year Three', width: 150},
                { field: 'year_four', headerName: 'Year Four', width: 150},
                { field: 'year_five', headerName: 'Year Five', width: 150},
                { field: 'year_six', headerName: 'Year Six', width: 150},
                { field: 'year_seven', headerName: 'Year Seven', width: 150},
                { field: 'year_eight', headerName: 'Year Eight', width: 150},
                { field: 'year_nine', headerName: 'Year Nine', width: 150},
                { field: 'year_ten', headerName: 'Year Ten', width: 150},
                {field: 'percentage', headerName: 'Percentage',
                renderCell: (params) => (
                    <TableInput/>
                  ),
                width: 150
            },
            ]
        }
    }

    componentDidMount() {
        fetch('http://localhost:8443/data')
        .then(res => res.json())
        .then((data) => {
            this.setState({
                userData: data
            })
        })
        .catch(console.log)
      }

    render() {
        return (
            <div style={{ display: 'flex', height: '100%' }} className="table-section">
                <div style={{ flexGrow: 1 }}>
                    <DataGrid autoHeight rows={this.state.userData} columns={this.state.dataFields}/>
                </div>
            </div>

        )
    }
}

export default TableSection