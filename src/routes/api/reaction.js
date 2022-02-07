const { Router } = require("express");

const {
  addNewReactionToThought,
  removeReactionFromThought,
} = require("../../controllers/api/reaction");

const router = Router({ mergeParams: true });

router.post("/", addNewReactionToThought);
router.delete("/:reactionId", removeReactionFromThought);

module.exports = router;
