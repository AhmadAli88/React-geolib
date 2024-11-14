
import { convertDistance, getPreciseDistance } from 'geolib';

const DistanceConverter = () => {
  const point1 = { latitude: 52.518611, longitude: 13.408356 }; // Berlin
  const point2 = { latitude: 48.856613, longitude: 2.352222 }; // Paris

  // Calculate distance in meters
  const distanceInMeters = getPreciseDistance(point1, point2);
  // Convert distance to kilometers
  const distanceInKilometers = convertDistance(distanceInMeters, 'km');

  return (
    <div>
      <h3>Distance between Berlin and Paris</h3>
      <p>Distance in meters: {distanceInMeters} m</p>
      <p>Distance in kilometers: {distanceInKilometers.toFixed(2)} km</p>
    </div>
  );
};

export default DistanceConverter;
