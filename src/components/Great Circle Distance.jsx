import { getDistance, getRhumbLineDistance } from 'geolib';

const DistanceCalculator = () => {
  const point1 = { latitude: 52.518611, longitude: 13.408356 }; // Berlin
  const point2 = { latitude: 48.856613, longitude: 2.352222 }; // Paris

  // Calculate great-circle distance
  const greatCircleDistance = getDistance(point1, point2);

  // Calculate rhumb line distance
  const rhumbLineDistance = getRhumbLineDistance(point1, point2);

  return (
    <div>
      <h3>Distance Calculator</h3>
      <p>Between Berlin and Paris:</p>
      <ul>
        <li>Great circle distance: {greatCircleDistance} meters</li>
        <li>Rhumb line distance: {rhumbLineDistance} meters</li>
      </ul>
    </div>
  );
};

export default DistanceCalculator;
