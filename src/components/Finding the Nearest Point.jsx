
import { findNearest } from 'geolib';

const NearestPointFinder = () => {
  const points = [
    { latitude: 52.518611, longitude: 13.408356, name: "Berlin" },
    { latitude: 48.856613, longitude: 2.352222, name: "Paris" },
    { latitude: 51.5074, longitude: -0.1278, name: "London" }
  ];

  const myLocation = { latitude: 51.1657, longitude: 10.4515 }; // Germany

  // Find the nearest point to myLocation
  const nearestPoint = findNearest(myLocation, points);

  return (
    <div>
      <h3>Nearest Point Finder</h3>
      <p>Your location: Germany</p>
      <p>
        Nearest Point: {nearestPoint.name} ({nearestPoint.latitude}, {nearestPoint.longitude})
      </p>
    </div>
  );
};

export default NearestPointFinder;
