import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import connectToMongoDB from "./db/mongoose.js";
import router from "./routes/index.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Server started.");
});

app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not found." });
});
const port = process.env.PORT || 5555;

try {
  await connectToMongoDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
