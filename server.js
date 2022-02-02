import express from "express";
import cors from "cors";
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

// TO DO: Update with database connection

app.get("/", (request, response) => {
  response.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
