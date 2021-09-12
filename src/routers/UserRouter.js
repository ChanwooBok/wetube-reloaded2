import express from "express";

const userRouter = express.Router();


const handleEditUser = (req,res) => res.send("Edit User");
// app.use("/users",userRouter)
userRouter.get("/edit",handleEditUser);

export default userRouter;
