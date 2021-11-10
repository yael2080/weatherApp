import React from 'react'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap'

function mapStateToProps(state) {
    return {
        coordinates : state.coordinates,
        temperature : state.temperature
    };
}

export default connect(mapStateToProps)(function History(props){
    const {coordinates, temperature } = props

    return (
        <>
        <Table hover size="sm">
        <thead>
            <tr>
                <th>latitude</th>
                <th>longitude</th>
                <th>temperature</th>         
                <th>name place</th>                          
            </tr>
        </thead>
        <tbody>
        {coordinates.coordinates.map((item, index)=> (
            <tr key={index}>          
                <td>{item.latitude}</td>
                <td>{item.longitude}</td>
                <td>{temperature.temperature}</td>
                <td>{}</td>                           
            </tr>  
        ))}    
        </tbody>
        </Table>
    </>
    )
})

