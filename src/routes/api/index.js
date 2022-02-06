const { Router } = require("express");

const users = require("./users");
const reaction = require("./reaction");
const thoughts = require("./thoughts");

const router = Router();

router.use("/users", users);
router.use("/reaction", reaction);
router.use("/thoughts", thoughts);

module.exports = router;
