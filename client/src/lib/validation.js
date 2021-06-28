const validateUserName = (username) => username.length >= 2;
/* const validateEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  ); */
//const validateLatitude = (latitude) => latitude.length >= 2;
//const validateLongtitude = (longtitude) => longtitude.length >= 2;

const validatePersonalSpot = (personalSpot) =>
  validateUserName(personalSpot.username);
//validateEmail(personalSpot.email) &&
//validateLatitude(personalSpot.latitude) &&
//validateLongtitude(personalSpot.longtitude);

export default validatePersonalSpot;
