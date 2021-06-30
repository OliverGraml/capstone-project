import Spot from '../models/spot.model.js';

function postSpot(req, res) {
  const spot = new Spot({
    username: req.body.username,
    email: req.body.email,
    further_info: req.body.further_info,
    meet_others: req.body.meet_others,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  spot
    .save()
    .then((spotSaved) => res.json(spotSaved))
    .catch((error) => res.json(error));
}

function getSpot(req, res) {
  Spot.find().then((spot) => {
    res.json(spot);
  });
}

export {postSpot, getSpot};
