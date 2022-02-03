import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./user.js";
const app = express();

const port = process.env.PORT || 3001;

app.use(cors());

// TO DO: Update with database connection
// https://www.techomoro.com/connect-mongodb-atlas-with-express-backend/
const uri =
  "mongodb+srv://admin:TxQDAuz2D0HjPUnJ@cluster0.fc5ql.mongodb.net/my-app?retryWrites=true&w=majority";
var options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options, (err) => {
  if (err) console.log(err);
});

app.get("/", (request, response) => {
  response.json({ message: "Hello World!" });
});

app.get("/users", async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json({
      status: 200,
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
