// const express = require("express");
// babel node를 이용하므로 더 섹시한코드 가능
import express from "express";

const app = express();
// express application 생성

const logger = (req,res,next) =>{
    console.log(` ${req.method} ${req.url}`);
    next();
}

const privateMiddelware = (req,res,next) =>{
    const url = req.url;
    if( url === "/protected") {
        return res.send("<h1>Not allowed</h1>");
    }
    console.log("Allowed,You may continue");
    next();
}

const handlehome = (req,res) =>{
    return res.end();
};

const handleProtected = (req,res) => {
    return res.send("Welcome to the private Lounge!");
}

app.use(logger);
app.use(privateMiddelware);
app.get("/",handlehome);
// handlehome : router handler 로서, req,res값을 가진다.
app.get("/protected",handleProtected);

const PORT = 5000;
const handleListening = () => console.log(`🔑Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)
// server가 request를 listening하게 대기시킴(server 오픈)