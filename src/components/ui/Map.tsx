'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Card from './Card'

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: '/green-pin.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
})

interface LeafletMapProps {
  lat: number
  lng: number
  jawgAccessToken: string
}

const LeafletMap = ({ lat, lng, jawgAccessToken }: LeafletMapProps) => {
  const center = {
    lat,
    lng,
  }

  return (
    <Card className="p-1">
      <MapContainer
        center={center}
        zoom={16}
        style={{ height: '200px', width: '100%', maxWidth: '100%' }}
      >
        <TileLayer
          url={`https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=${jawgAccessToken}`}
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={center}>
          <Popup>
            Your IP provider is here: {center.lat}, {center.lng}
          </Popup>
        </Marker>
      </MapContainer>
    </Card>
  )
}

export default LeafletMap
