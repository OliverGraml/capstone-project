import mongoose from 'mongoose';

const spotSchema = new mongoose.Schema({
  username: String,
  email: String,
  further_info: String,
  meet_others: Boolean,
  latitude: Number,
  longitude: Number,
});

const Spot = mongoose.model('NomadSpot', spotSchema);

export default Spot;
