import express from "express";
import {createTweet,getTweet} from "../controllers/tweet-controller.js";
import {signUp,signIn} from "../controllers/user-controller.js"
import {toggleLike} from "../controllers/like-controller.js"
import { authenticate } from "../middlewares/authenticate.js";
const router = express.Router();

router.post('/tweet',createTweet);
router.post('/tweet',createTweet);
router.post('/signup',signUp);
router.post('/signin',signIn);
router.post('/likes/toggle',authenticate,toggleLike);

export default router;