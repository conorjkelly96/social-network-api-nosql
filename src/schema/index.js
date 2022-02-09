const mongoose = require("mongoose");

const { User, Thought } = require("../models");
const thoughts = require("./data/thoughts");
const users = require("./data/users");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/thoughtbaseDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    await User.deleteMany({});
    await User.insertMany(users);

    console.log("[INFO]: Successfully seeded users");

    await Thought.deleteMany({});
    await Thought.insertMany(thoughts);

    console.log("[INFO]: Successfully seeded thoughts");

    const usersFromDb = await User.find({});
    const thoughtsFromDb = await Thought.find({});

    const promises = thoughtsFromDb.map((thought) => {
      const thoughtUsername = thought.username;

      const thoughtUser = usersFromDb.find((user) => {
        return user.username === thoughtUsername;
      });

      const userId = thoughtUser._id.toString();

      const thoughtId = thought._id;

      User.findByIdAndUpdate(userId, {
        thoughts: [...thoughtUser.thoughts, thoughtId.toString()],
      });
    });

    await Promise.all(promises);

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
