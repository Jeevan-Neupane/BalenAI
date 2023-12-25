const mongoose = require("mongoose");

const SmokersSchema = new mongoose.Schema(
  {
    video_location: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

const Smokers = mongoose.model("smokers", SmokersSchema);
module.exports = Smokers;
