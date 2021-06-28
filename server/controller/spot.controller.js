import Spot from '../models/spot.model.js';

function postSpot(req, res) {
  const spot = new Spot({
    username: req.body.username,
    email: req.body.email,
    further_info: req.body.further - info,
    meet_others: req.body.meet_others,
    latitude: req.body.latitude,
    longtitude: req.body.longtitude,
  });
  Spot.save()
    .then((spotSaved) => res.json(spotSaved))
    .catch((error) => res.json(error));
}

export {postSpot};
