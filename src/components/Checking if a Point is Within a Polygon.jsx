import { isPointInPolygon } from 'geolib';

const PointInPolygonChecker = () => {
  // Define the polygon points
  const polygon = [
    { latitude: 52.518611, longitude: 13.408356 }, // Berlin
    { latitude: 48.856613, longitude: 2.352222 }, // Paris
    { latitude: 51.5074, longitude: -0.1278 }, // London
    { latitude: 52.518611, longitude: 13.408356 }, // Closing back to Berlin
  ];

  // Define the point to check
  const point = { latitude: 50, longitude: 10 }; // Inside polygon

  // Check if the point is inside the polygon
  const isInside = isPointInPolygon(point, polygon);

  return (
    <div>
      <h3>Point in Polygon Checker</h3>
      <p>
        {isInside
          ? 'Point is inside the polygon'
          : 'Point is outside the polygon'}
      </p>
    </div>
  );
};

export default PointInPolygonChecker;
