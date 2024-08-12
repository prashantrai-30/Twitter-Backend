import UserRepository from "../repository/user-repository.js";

class UserService {
    constructor () {
        this.UserRepository = new UserRepository();
    } 
    async signUp(data){
        try {
            const user = await this.UserRepository.create(data);
            console.log(user);
            return user
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async signIn(data){
        try {
            // get the email
            // compare password
            // say user authenticate
            const email = data.email;
            const currentpassword = data.password;
            const user = await this.UserRepository.findBy({email:email});
            if(!user) {
                throw {
                    message: 'No user Found'
                }
            }
            if(!user.comparePassword(currentpassword)) {
                throw {
                    messge: 'Incorrect Password'
                }
            }
            console.log("User successfully signed in");
            const token = user.genJWT();
            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default UserService;