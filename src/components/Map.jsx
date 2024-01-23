import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {

   const position = [50.039462499419855, 22.01317272571859]

   return (
      <div className='h-full w-full overflow-hidden z-0'>
         <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: "100%", width: "100%", zIndex: 0 }}>
            <TileLayer
            attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <Marker position={position}>
               <Popup>
                     Rzeszów <br/>
                     woj. Podkarpackie
               </Popup>
            </Marker>
         </MapContainer>
      </div>
   )
}

export default Map