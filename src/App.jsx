import { useEffect, useState } from 'react';
import './App.css';
import PolygonAreaCalculator from './components/AreaCalculation';
import BearingCalculator from './components/BearingBetweenTwoPoints';
import DistanceCalculator from './components/Calculate Distance Between Two Points';
import PointInPolygonChecker from './components/Checking if a Point is Within a Polygon';
import CoordinatesConverter from './components/Converting Coordinates';
import DistanceConverter from './components/Distance Calculation with Custom Unit';
import NearestPointFinder from './components/Finding the Nearest Point';
import DistanceTracker from './components/Tracking User’s Movement';

function App() {
  const [userLocation, setUserLocation] = useState({
    latitude: 52.518611,
    longitude: 13.408356,
  });

  useEffect(() => {
    // Mock user movement with a location update
    setTimeout(() => {
      setUserLocation({ latitude: 48.856613, longitude: 2.352222 });
    }, 3000);
  }, []);
  return (
    <div>
      <h1>Geospatial Calculations</h1>
      <PolygonAreaCalculator />
      <h1>Geospatial Calculations</h1>
      <BearingCalculator />
      <h1>Geospatial Calculations</h1>
      <DistanceCalculator />
      <h1>Geospatial Calculations</h1>
      <PointInPolygonChecker />
      <h1>Coordinate Conversion Example</h1>
      <CoordinatesConverter />
      <h1>Geolib Distance Conversion Example</h1>
      <DistanceConverter />
      <h1>Geolib Nearest Point Example</h1>
      <NearestPointFinder />
      <h1>User Distance Tracker</h1>
      <DistanceTracker userLocation={userLocation} />
    </div>
  );
}

export default App;
