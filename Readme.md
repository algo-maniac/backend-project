My first large scale backend project


1. Production grade backend project.
2. Proper routes and controllers for signup, login, change password, get current user, update user details, update avatar/coverImage, logout.
3. Middlewares for jwt verification, multer and uploading files on cloudinary.
4. Database ( MongoDB ) handling.
5. Refresh and Access Token for user identification.

The routes are :

1. userRouter.route("/login").post(loginUser);
2. userRouter.route("/refresh-token").post(refreshAccessToken);
3. userRouter.route("/change-password").post(verifyJwt, changePassword);
4. userRouter.route("/get-user").get(verifyJwt, getCurrentUser);
5. userRouter
   .route("/update-accountdetails")
   .post(verifyJwt, updateAccountDetails);
6. userRouter
   .route("/update-useravatar")
   .post(verifyJwt, upload.single("avatar"), updateUserAvatar);
7. userRouter
   .route("/update-usercoverimage")
   .post(verifyJwt, upload.single("coverImage"), updateCoverImage);
8. userRouter.route("/logout").post(verifyJwt, logoutUser);
