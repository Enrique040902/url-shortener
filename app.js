/**
 * Express config file
 */
import express, { json } from "express";
import shortenerRouter from "./routes/shortenerRoutes.js";

const app = express();

app.use(json());

app.use('/', shortenerRouter);

export default app;