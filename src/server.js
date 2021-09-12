// const express = require("express");
// babel node를 이용하므로 더 섹시한코드 가능
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/UserRouter";
import VideoRouter from "./routers/VideoRouter";

const app = express();
// express application 생성
const logger = morgan("dev");

const PORT = 5000;

app.use(logger);

app.use("/",globalRouter);
app.use("/videos",VideoRouter);
app.use("/users",userRouter);

const handleListening = () => console.log(`🔑Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)
// server가 request를 listening하게 대기시킴(server 오픈)