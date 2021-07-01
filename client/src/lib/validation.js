const validateUserName = (username) => username.length >= 0;
const validateEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
//const validateLatitude = (latitude) => latitude.length >= 2;
//const validateLongitude = (longitude) => longitude.length >= 2;

const validatePersonalSpot = (personalSpot) =>
  validateUserName(personalSpot.username) && validateEmail(personalSpot.email);
// validateLatitude(personalSpot.latitude) &&
// validateLongitude(personalSpot.longitude);

export default validatePersonalSpot;
