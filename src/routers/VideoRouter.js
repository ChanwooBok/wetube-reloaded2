import express from "express";

const VideoRouter = express.Router();


const handleWatchVideo = (req,res) => res.send("watch video");
// app.use("/videos",VideoRouter);
VideoRouter.get("/watch",handleWatchVideo);

export default VideoRouter;
