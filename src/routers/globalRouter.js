import express from "express";

const globalRouter = express.Router();


const handleHome = (req,res) => res.send("home");
// app.use("/",globalRouter);
globalRouter.get("/",handleHome)

export default globalRouter;
