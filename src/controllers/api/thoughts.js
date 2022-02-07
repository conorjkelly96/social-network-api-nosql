const { Thought } = require("../../models");

const getThoughts = async (req, res) => {
  try {
    res.send("getThought");
    // const thoughts = await User.find({});
    // return res.json({ success: true, data: students });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Thoughts | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get Thoughts" });
  }
};

const getThoughtById = async (req, res) => {
  try {
    res.send("getThoughtById");
    // const { userId } = req.params;
    // const User = await User.findById(studentId);
    // return res.json({ success: true, data: student });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get Thought" });
  }
};

const createThought = (req, res) => {
  res.send("createThought");
};

const updateThoughtById = (req, res) => {
  res.send("updateThoughtById");
};

const deleteThoughtById = (req, res) => {
  // const { UserId } = req.params;

  // console.log("UserId", UserId);

  res.send("deleteThoughtById");
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
