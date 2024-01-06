import dotenv from "dotenv";
import { dbConnect } from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

dbConnect()
  .then(() => {
    app.on("error", (error) => {
      console.log("Some error occurred while running server", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection error", err);
  });
