import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: { type: String },
  job: { type: String },
});

const User = mongoose.model("user", schema);

export default User;
