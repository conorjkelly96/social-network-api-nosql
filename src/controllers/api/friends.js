const addNewFriendToUser = (req, res) => {
  res.send("addNewFriendToUser");
};

const removeFriendFromUser = (req, res) => {
  // const { UserId } = req.params;

  // console.log("UserId", UserId);

  res.send("deleteUserById");
};

module.exports = {
  addNewFriendToUser,
  removeFriendFromUser,
};
