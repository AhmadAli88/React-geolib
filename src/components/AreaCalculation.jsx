import {  getAreaOfPolygon } from 'geolib';

const PolygonAreaCalculator = () => {
  // Define the polygon with latitude and longitude points
  const polygon = [
    { latitude: 52.518611, longitude: 13.408356 }, // Berlin
    { latitude: 48.856613, longitude: 2.352222 },  // Paris
    { latitude: 51.5074, longitude: -0.1278 },     // London
    { latitude: 52.518611, longitude: 13.408356 }  // Closing the polygon back to Berlin
  ];

  // Calculate the area in square meters
  const area = getAreaOfPolygon(polygon);

  return (
    <div>
      <h3>Polygon Area Calculator</h3>
      <p>Area of the polygon: {area} square meters</p>
    </div>
  );
};

export default PolygonAreaCalculator;
