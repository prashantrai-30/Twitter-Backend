import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async (req,res) => {
    try {
        const data = req.body;
        console.log(data);
        const response = await userService.signUp(data);
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
export const signIn = async (req,res) => {
    try {
        const data = req.body;
        const response = await userService.signIn(data);
        return res
                .status(201)
                .json({
                    success:true,
                    message:'successfully executed',
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