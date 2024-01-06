import mongoose from "mongoose";
import { db_name } from "../constants.js";

export const dbConnect = async () => {
  try {
    const mongDbInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${db_name}`
    );
    console.log(
      "Database connected !! DB HOST : ",
      mongDbInstance.connection.host
    );
  } catch (error) {
    console.error("ERROR occured", error);
    process.exit(1);
  }
};
