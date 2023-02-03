import React from "react"
import Pin from "../images/pin.png"


function Entry (props){
    return (

        <section className = "entry">
            
            <div className = "img-container">
            <img src = {`/images/${props.coverImg}`} alt = "Mount Fuji"></img>
            </div>
            
            <div className="info">
            <img src={Pin} alt="Pin icon"></img>
            <span className="location">{props.location} </span>
            <a href={props.googleMaps}><span className="muted-txt">View on Google Maps</span></a>
            <h1>{props.name}</h1>
            <h4 className="date">{props.date}</h4>
            <p>{props.desc}</p>
            </div>
        </section>

    )
}

export default Entry