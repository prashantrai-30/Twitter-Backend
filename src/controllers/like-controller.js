import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req,res) => {
    try {
        const data = req.body;
        console.log(data);
        const response = await likeService.toggleLike(data.modelId,data.modelType,data.userId);
        console.log(response);
        return res
                .status(201)
                .json({
                    success:true,
                    message:'successfully created',
                    data:response,
                    err:{}
                });
    } catch (error) {
        return res
                .status(500)
                .json({
                    success:false,
                    message:'error',
                    data:{},
                    err:error
                });
    }
}
