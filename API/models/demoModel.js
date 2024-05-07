let mongoose = require("mongoose");

const puppySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: Number,
  }
  //   {
  //     collection: "puppy", // collection name
  //   }
);

const Puppy = mongoose.model("DemoUser", puppySchema);

module.exports = Puppy;
