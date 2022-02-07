const { Router } = require("express");

const {
  addNewFriendToUser,
  removeFriendFromUser,
} = require("../../controllers/api/friends");

const router = Router({ mergeParams: true });

router.post("/", addNewReactionToThought);
router.delete("/:reactionId", removeReactionFromThought);

module.exports = router;
