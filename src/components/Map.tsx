import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface SalesPoint {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  type: string;
  coordinates: { lat: number; lng: number };
}

interface MapProps {
  salesPoints: SalesPoint[];
}

const Map = ({ salesPoints }: MapProps) => {
  // Center of Paris as default center
  const center: [number, number] = [48.8566, 2.3522];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '400px', width: '100%', borderRadius: '0.5rem' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {salesPoints.map((point) => (
        <Marker
          key={point.id}
          position={[point.coordinates.lat, point.coordinates.lng]}
        >
          <Popup>
            <div className="text-sm">
              <h3 className="font-bold mb-1">{point.name}</h3>
              <p className="text-xs text-gray-600 mb-1">{point.type}</p>
              <p className="text-xs mb-1">{point.address}</p>
              <p className="text-xs">{point.hours}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
