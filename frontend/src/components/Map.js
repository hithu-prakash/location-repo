import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css'
import {MapContainer,TileLayer, Marker,Popup,Circle} from "react-leaflet"
import {Icon} from 'leaflet'

export default function Map() {

    const [radius, setRadius] = useState(10)
    const center = [12.9471935,77.5678365];

    const markers  = [
        {
            geocode : [12.9471935,77.5678365],
            Popup:"hello, you're here"
        }
    ]

    const customIcon = new Icon({
        iconUrl:require("../img/Marker.png"),
        iconSize: [38,38] //Icon size
    })


    return(
        <div className="Map-Container">
        <MapContainer center={center} zoom={13} style={{ height: '399px' }}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Circle center={center} radius={radius * 1000} />

            {markers.map((marker,i) => {
              return  <Marker key={i} position={marker.geocode} icon={customIcon}>
                    <Popup>
                        <h2>You're here</h2>
                    </Popup>
                </Marker>
})}
            
        
        </MapContainer>
          

        </div>
    )
}