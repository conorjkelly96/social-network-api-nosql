const { Thought } = require("../../models");

// * `POST` to create a reaction stored in a single thought's `reactions` array field
const addNewReactionToThought = async (req, res) => {
  try {
    const reaction = req.body;

    console.log(reaction._id);

    const thought = await Thought.updateOne(
      { _id: reaction._id },
      { $push: { reactions: { reaction } } }
    );

    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create reaction" });
  }
};

// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
const removeReactionFromThought = (req, res) => {
  res.send("removeReactionFromThought");
};

module.exports = {
  addNewReactionToThought,
  removeReactionFromThought,
};
