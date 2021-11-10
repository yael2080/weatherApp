import React from 'react'
import './dateAndHour.css'

export default function  DateAndHour(props){

    function appendLeadingZeros(int){
        if(int < 10){
          return '0' + int;
        }
        return int;
      }   
    
    let dt = new Date();
    let date = dt.getDate() + "." + (dt.getMonth() + 1) + "." + dt.getFullYear();    
    let hour = appendLeadingZeros(dt.getHours()) + ":" + appendLeadingZeros(dt.getMinutes())
 
    return(
        <>
            <div>
                <span className="dateAndHour-span-th">The temperature for  </span>
            </div>
            <div>
                <span className="dateAndHour-span">{date}</span>
            </div>
            <div>
                <span className="dateAndHour-span">{hour}</span>
            </div>
            <div>
                <span className="dateAndHour-span-th">is:</span>
            </div>
        </>
    )
}
