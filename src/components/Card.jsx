import React from "react"
import '../styles/card.css'

export default function Card(props){
    return(
        <div className="card">
            <img src={`${props.imageUrl}`} className="card-image"/>
            <div className="card-info">
                <div className="card-location">
                    <img src="./pin.png"/>
                    <p className="card-location-name">{`${props.location.toUpperCase()}`} </p>
                    <a href={`${props.googleMapsUrl}`} className="card-adress">View on Google Maps</a>
                </div>
                <p className="card-title">{`${props.title}`}</p>
                <p className="card-date">{`${props.startDate} - ${props.endDate}`} </p>
                <p className="card-description">{`${props.description}`}</p>
            </div>

        </div>
    )
}