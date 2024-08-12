import express from "express";
import connect from "./config/database.js";
import router from "./routes/index.js";
import TweetRepository from "./repository/tweet-repository.js";
import passport from "passport";
import { passportAuth } from "./middlewares/jwt-middleware.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());

passportAuth(passport);

app.use('/api',router)

app.listen(2000, async ()=> {
    console.log("Server started at 2000");
    // mongodb connection establishment 
    connect();
    
    console.log("mongoDB is connected");

    // Tweet.create({
    //     content:'this is my second tweet',
    //     likes:25,
    //     noOfRetweets:50,
    //     comment: 'this is my  comment'
    // })

    // Hashtag.create({
    //     text: '#travel',
    //     tweets:['669a765c99d553f9c04c3c25']
    // })
    // const tweetRepo = new TweetRepository();

    //  let tweet = await tweetRepo.deleteTweet({_id:'669a84be3269a1ada45702ae'});
    //  console.log(tweet);
    
})