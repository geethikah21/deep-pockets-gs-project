import React, { Component } from 'react'
import {DataGrid} from '@material-ui/data-grid'
import "./table.css"
import TableInput from './tableinput'

// function getEnergy(params) {
//     return `${params.getValue('percentage') || ''} ${
//       params.getValue('percentage') || ''
//     }`;
//   }

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


const response = ["114","13260", "15428", "3","56","66","42","456","32","621"]

class TableSection extends Component {
    constructor() {
        super()

        this.state = {        
        
            rows:  [
                {id: 1, category: "Energy", year_one: response[0]},
                {id: 2, category: "Technology",  year_one: response[1]},
                {id: 3, category: "Financial Services",  year_one: response[2]},
                {id: 4, category: "Real Estate",  year_one: response[3]},
                {id: 5, category: "Pharmaceuticals",  year_one: response[4]},
                {id: 6, category: "Airline",  year_one: response[5]},
                {id: 7, category: "Retail",  year_one: response[6]},
                {id: 8, category: "Gaming",  year_one: response[7]}
            ],
            
            columns:  [
                { field: 'category', headerName: 'Category', width: 150},
                { field: 'year_one', headerName: 'Year One', width: 150},
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
            ]
        }
    }


    // componentDidMount() {
    //     fetch('http://localhost:8443/data')
    //     .then(res => res.json())
    //     .then((data) => {
    //         // this.setState({
    //         //     userData: data
    //         // })
    //         console.log(data)
    //     })
    //     .catch(console.log)
    //   }

    render() {
        const columns = [
            { field: "category", headerName: "Category", width: 150},
            { field: "percentage", headerName: "Percentage", width: 150,
            renderCell: (params) => (
                        <TableInput />
                      )
                }
        ]

        const rows = investmentCategories.map((value, index) => {
            return {
                "id": index,
                "category": value.category,
                "percentage": 0
            }
        })

        return (
            <div style={{ display: 'flex', height: '100%' }} className="table-section">
                <div style={{ flexGrow: 1 }}>
                    <DataGrid autoHeight rows={rows} columns={columns}/>
                </div>
            </div>

        )
    }
}

export default TableSection