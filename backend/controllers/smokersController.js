const Smokers = require("../models/smokers");

const addSmokers = async (req, res) => {
  try {
    const {video_location, age, gender, image} = req.body;
    const newSmokers = await new Smokers({
      video_location,
      age,
      gender,
      image,
    });
    const smokersData = await newSmokers.save();
    res.status(201).json(smokersData);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};
module.exports = {addSmokers};
