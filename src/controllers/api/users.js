const { User } = require("../../models");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.json({ success: true, data: students });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get Users" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const User = await User.findById(studentId);
    return res.json({ success: true, data: student });
  } catch (error) {
    console.log(`[ERROR]: Failed to get User | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get User" });
  }
};

const createUser = (req, res) => {
  res.send("createUser");
};

const deleteUserById = (req, res) => {
  const { UserId } = req.params;

  console.log("UserId", UserId);

  res.send("deleteUserById");
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
};
