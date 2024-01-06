import { Router } from "express";
import {
  changePassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateCoverImage,
  updateUserAvatar,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

userRouter.route("/login").post(loginUser);
userRouter.route("/refresh-token").post(refreshAccessToken);
userRouter.route("/change-password").post(verifyJwt, changePassword);
userRouter.route("/get-user").get(verifyJwt, getCurrentUser);
userRouter
  .route("/update-accountdetails")
  .post(verifyJwt, updateAccountDetails);
userRouter
  .route("/update-useravatar")
  .post(verifyJwt, upload.single("avatar"), updateUserAvatar);
userRouter
  .route("/update-usercoverimage")
  .post(verifyJwt, upload.single("coverImage"), updateCoverImage);

userRouter.route("/logout").post(verifyJwt, logoutUser);

export default userRouter;
