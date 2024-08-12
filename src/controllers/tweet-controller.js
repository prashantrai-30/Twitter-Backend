import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req,res) => {
    try {
        const data = req.body;
        const response = await tweetService.create(data);
        return res.status(201).json({
            message:'successfully executed',
            success:true,
            data:response,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            message:'Error',
            success:false,
            data:{},
            err:error
        })
    }
}

export const getTweet = async (req,res) => {
    try {
        const id = req.params.id;
        const response = await tweetService.getTweet(req.params.id);
        return res.status(201).json({
            message:'successfully executed',
            success:true,
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            message:'Error',
            success:false,
            data:{},
            err:error
        })
    }
}



