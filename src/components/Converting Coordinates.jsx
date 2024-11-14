const toDMS = (decimal) => {
  const degrees = Math.floor(decimal);
  const minutesNotTruncated = (decimal - degrees) * 60;
  const minutes = Math.floor(minutesNotTruncated);
  const seconds = Math.round((minutesNotTruncated - minutes) * 60);
  return `${degrees}° ${minutes}' ${seconds}"`;
};

const CoordinatesConverter = () => {
  // Define the decimal coordinates
  const decimalCoordinates = { latitude: 52.518611, longitude: 13.408356 };

  // Convert latitude and longitude to DMS format
  const latitudeDMS = toDMS(decimalCoordinates.latitude);
  const longitudeDMS = toDMS(decimalCoordinates.longitude);

  return (
    <div>
      <h3>Decimal to DMS Coordinates Converter</h3>
      <p>
        Decimal Coordinates: {decimalCoordinates.latitude},{' '}
        {decimalCoordinates.longitude}
      </p>
      <p>
        DMS Format: {latitudeDMS} N, {longitudeDMS} E
      </p>
    </div>
  );
};

export default CoordinatesConverter;
