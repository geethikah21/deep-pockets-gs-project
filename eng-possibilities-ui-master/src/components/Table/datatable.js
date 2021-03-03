import React, { Component } from 'react'
import TableSection from './tablesection'
import TableInput from './tableinput'
import "./table.css"

class DataTable extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="data-table">
                <TableSection />
            </div>
        );
    }
}

export default DataTable