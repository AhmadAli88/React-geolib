
import { getPreciseDistance } from 'geolib';

const DistanceCalculator = () => {
  // Define the points
  const point1 = { latitude: 52.518611, longitude: 13.408356 }; // Berlin
  const point2 = { latitude: 48.856613, longitude: 2.352222 };  // Paris

  // Calculate the distance in meters
  const distance = getPreciseDistance(point1, point2);

  return (
    <div>
      <h3>Distance Calculator</h3>
      <p>Distance between Berlin and Paris: {distance} meters</p>
    </div>
  );
};

export default DistanceCalculator;
