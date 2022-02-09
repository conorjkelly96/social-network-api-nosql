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

    // seed thoughts with users
    const thoughtPromises = thoughtsFromDb.map(async (thought) => {
      const username = thought.username;

      const user = usersFromDb.find((user) => user.username === username);

      user.thoughts.push(thought._id.toString());

      await User.findByIdAndUpdate(user._id, { ...user });
    });

    // seed friends with users
    const friendsPromises = usersFromDb.forEach((user) => {
      // get a random user id
      // update operation on the friends and push it into the friends array
    });

    await Promise.all(thoughtPromises);

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
