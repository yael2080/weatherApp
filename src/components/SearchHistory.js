import React, { useState, useRef } from 'react'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap'
import History from './history';
import './SearchHistory.css';

function mapStateToProps(state) {
    return {
        coordinates : state.coordinates,
        temperature : state.temperature
    };
}

export default connect(mapStateToProps)(function SearchHistory(props){
    const {coordinates, temperature, dispatch } = props
    const [flag, setFlag] = useState(true)
    const [location, setLocation] = useState('')
    const locationName = useRef('')
    let  rows=[];

    function setLocationName(){
        setLocation(locationName.current.value) 
    }    
    function searchLocationName(){
        if(location){
            setFlag(false)
        }
    }

    coordinates.coordinates.forEach(function(data) {
        if(data.latitude == location){
            rows.push(<tr><td>{data.latitude}</td><td>{data.longitude}</td><td>{temperature.temperature}</td><td></td></tr>)
        }     
    });
    
    return (
        <>
        <div>
            <input onChange={setLocationName} size="sm" className="searchHistory-input" ref={locationName} type="string"></input>
        <button className="searchHistory-btn" onClick={searchLocationName}>search</button>
        </div>
       
       { 
       flag && 
       <History/>
       } 
       {
       !flag &&
        <Table hover size="sm">
            <thead>
               <tr>
                 <th>latitude</th>
                 <th>longitude</th>
                 <th>temperature</th>         
                 <th>name place</th>                          
               </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
       }
         
        </>
    )
})

