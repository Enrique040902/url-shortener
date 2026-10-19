import { Router } from "express";
import { getLongUrl, shortenUrl } from "../controllers/shortenerController.js";

const shortenerRouter = Router();

shortenerRouter.get('/:shortCode', getLongUrl);

shortenerRouter.post('/v1/shorten',shortenUrl);

export default shortenerRouter;