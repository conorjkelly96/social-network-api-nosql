const addNewReactionToThought = (req, res) => {
  const reaction = req.body;
  const { reactionId } = req.params;

  console.log(reactionId);
};

const removeReactionFromThought = (req, res) => {
  res.send("removeReactionFromThought");
};

module.exports = {
  addNewReactionToThought,
  removeReactionFromThought,
};
