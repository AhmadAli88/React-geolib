import { getGreatCircleBearing } from 'geolib';

const BearingCalculator = () => {
  // Define the starting and destination points
  const point1 = { latitude: 52.518611, longitude: 13.408356 }; // Berlin
  const point2 = { latitude: 48.856613, longitude: 2.352222 }; // Paris

  // Calculate the bearing from Berlin to Paris
  const bearing = getGreatCircleBearing(point1, point2);

  return (
    <div>
      <h3>Bearing Calculator</h3>
      <p>Bearing from Berlin to Paris: {bearing}°</p>
    </div>
  );
};

export default BearingCalculator;
