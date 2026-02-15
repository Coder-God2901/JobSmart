// require("dotenv").config({path: "./.env"});
import dotenv from "dotenv";
dotenv.config({path: './.env'});
import { connectDB } from "./db/index.js";
// import express from "express";

// const app = express();
// app.use(express.json());

// Connect to DB first, then start the server so the process stays alive

connectDB();