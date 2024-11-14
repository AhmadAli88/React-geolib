import { useState, useEffect } from 'react';
import { getPreciseDistance } from 'geolib';
import PropTypes from 'prop-types';

const DistanceTracker = ({ userLocation }) => {
  const [previousLocation, setPreviousLocation] = useState(null);
  const [totalDistance, setTotalDistance] = useState(0);

  useEffect(() => {
    if (previousLocation) {
      // Only calculate the distance if previousLocation is set (not null)
      const distanceTraveled = getPreciseDistance(previousLocation, userLocation);
      setTotalDistance((prevTotal) => prevTotal + distanceTraveled);
    }
    // Update the previous location to the current location after the calculation
    setPreviousLocation(userLocation);
  }, [userLocation, previousLocation]);

  return (
    <div>
      <h3>Distance Tracker</h3>
      <p>
        Current Distance Traveled:{' '}
        {previousLocation ? getPreciseDistance(previousLocation, userLocation) : 0} meters
      </p>
      <p>Total Distance Traveled: {totalDistance} meters</p>
    </div>
  );
};

DistanceTracker.propTypes = {
  userLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default DistanceTracker;
