import React, { Component } from 'react'
import {DataGrid} from '@material-ui/data-grid'
import "./table.css"
import TableInput from './tableinput'
import TableForm from './tableform'
import fetchData from './utils'

const investmentCategories =  [
  {
    "category": "Energy",
    "minimum": "5",
    "data": [
      "17",
      "9",
      "21",
      "44",
      "-4",
      "20",
      "26",
      "15.1",
      "33",
      "26"
    ]
  },
  {
    "category": "Technology",
    "minimum": "6",
    "data": [
      "15",
      "22",
      "13.6",
      "-3",
      "17",
      "20",
      "12.2",
      "19.3",
      "-4",
      "7"
    ]
  },
  {
    "category": "Financial Services",
    "minimum": "4",
    "data": [
      "11",
      "16",
      "55.2",
      "12",
      "-17",
      "20",
      "26.1",
      "9.67",
      "30",
      "3"
    ]
  },
  {
    "category": "Real Estate",
    "minimum": "15",
    "data": [
      "19",
      "-6",
      "0.5",
      "13",
      "17.3",
      "20.8",
      "82.4",
      "15.2",
      "33",
      "14"
    ]
  },
  {
    "category": "Pharmaceuticals",
    "minimum": "10",
    "data": [
      "21",
      "15",
      "21",
      "32",
      "-2",
      "34.2",
      "26",
      "15.4",
      "25.7",
      "5"
    ]
  },
  {
    "category": "Airline",
    "minimum": "10",
    "data": [
      "12",
      "14",
      "12.6",
      "5",
      "6.7",
      "20",
      "7",
      "12",
      "23.4",
      "10"
    ]
  },
  {
    "category": "Retail",
    "minimum": "10",
    "data": [
      "5",
      "-11",
      "24.5",
      "-6.5",
      "13",
      "21",
      "11.6",
      "7.6",
      "14",
      "11"
    ]
  },
  {
    "category": "Gaming",
    "minimum": "12",
    "data": [
      "21",
      "-11",
      "16.4",
      "-6.5",
      "7.7",
      "21",
      "11.6",
      "-5",
      "10",
      "18"
    ]
  }
]


var arrayy = [[1, 2, 3], [2, 4, 5]]

const turnToRow = (array, index) => {
		const values = []
    
    for (var row of array) {
    	values.push(row[index])
    }
    return values
    
  }

const rowsTransfrom = (responses) => {
	var rowValues = []
  var i = 0
	while (i <= responses.length){
  	rowValues.push(turnToRow(responses, i))
    i += 1
  }
  return rowValues
}


class TableSection extends Component {
    constructor(props) {
        super(props)


        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {        

            response: [],
        
            allocation: [],

            category: "energy",

            // rows:  [
            //     {id: 1, category: "Energy", year_one: response[0]},
            //     {id: 2, category: "Technology",  year_one: response[1]},
            //     {id: 3, category: "Financial Services",  year_one: response[2]},
            //     {id: 4, category: "Real Estate",  year_one: response[3]},
            //     {id: 5, category: "Pharmaceuticals",  year_one: response[4]},
            //     {id: 6, category: "Airline",  year_one: response[5]},
            //     {id: 7, category: "Retail",  year_one: response[6]},
            //     {id: 8, category: "Gaming",  year_one: response[7]}
            // ],
            
            // columns:  [
            //     { field: 'category', headerName: 'Category', width: 150},
            //     { field: 'year_one', headerName: 'Year One', width: 150},
            //     { field: 'year_two', headerName: 'Year Two', width: 150},
            //     { field: 'year_three', headerName: 'Year Three', width: 150},
            //     { field: 'year_four', headerName: 'Year Four', width: 150},
            //     { field: 'year_five', headerName: 'Year Five', width: 150},
            //     { field: 'year_six', headerName: 'Year Six', width: 150},
            //     { field: 'year_seven', headerName: 'Year Seven', width: 150},
            //     { field: 'year_eight', headerName: 'Year Eight', width: 150},
            //     { field: 'year_nine', headerName: 'Year Nine', width: 150},
            //     { field: 'year_ten', headerName: 'Year Ten', width: 150},
            //     {field: 'percentage', headerName: 'Percentage',
            //     renderCell: (params) => (
            //         <TableInput />
            //       ),
            //     width: 150
            // },
        }
    }


    componentDidMount() {
        fetchData(true)
        .then((response) => {
            console.log(response.data)
            // this.setState({
            //   ...this.state,
            //   response: data
            // })
        })
        .catch(console.log)
      }

    // getPercentage = data => this.setState({
    //     [this.state.percentage]: data
    // }, console.log(this.state.percentage)
    // )

    // handleClick(
    //     //post to server
    // )
    
    // handleChange(name, value) {
    //     this.setState(prevState => {
    //         newState: prevState.push(name, value)
    //     })
    // }

    handleChange(data) {
      this.setState(prevState => {
        allocation: prevState.allocation.push(data)
      })
      console.log(data)
    }

    handleClick(data) {
      console.log(data)
    }

    render() {

        const columns = [
            { field: "category", headerName: "Category", width: 150},
            { field: "year_one", headerName: "Year One", width: 150},
            { field: 'year_two', headerName: 'Year Two', width: 150},
            { field: 'year_three', headerName: 'Year Three', width: 150},
            { field: 'year_four', headerName: 'Year Four', width: 150},
            { field: 'year_five', headerName: 'Year Five', width: 150},
            { field: 'year_six', headerName: 'Year Six', width: 150},
            { field: 'year_seven', headerName: 'Year Seven', width: 150},
            { field: 'year_eight', headerName: 'Year Eight', width: 150},
            { field: 'year_nine', headerName: 'Year Nine', width: 150},
            { field: 'year_ten', headerName: 'Year Ten', width: 150},
        ]

        const rows = investmentCategories.map((value, index) => {
            return {
                "id": index,
                "category": value.category,
                "year_one": value.data[0],
                "year_two": value.data[1],
                "year_three": value.data[2],
                "year_four": value.data[3],
                "year_five": value.data[4],
                "year_six": value.data[5],
                "year_seven": value.data[6],
                "year_eight": value.data[7],
                "year_nine": value.data[8],
                "year_ten": value.data[9],
            }
        })

        return (
            <div style={{ display: 'flex', height: '100%' }} className="table-section">
                <div style={{ flexGrow: 1 }}>
                    <DataGrid autoHeight rows={rows} columns={columns}/>
                    <TableForm onClick={this.handleClick}/>
                </div>
            </div>

        )
    }
}

export default TableSection