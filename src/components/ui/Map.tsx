'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
})

interface LeafletMapProps {
  lat: number
  lng: number
}

const LeafletMap = ({ lat, lng }: LeafletMapProps) => {
  const center = {
    lat,
    lng,
  }

  return (
    <MapContainer
      center={center}
      zoom={16}
      style={{ height: '400px', width: '100%', maxWidth: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={center}>
        <Popup>
          You are here: {center.lat}, {center.lng}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LeafletMap
