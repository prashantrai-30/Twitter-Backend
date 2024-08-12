import mongoose from "mongoose";

const connect = async () => {
    await mongoose.connect('mongodb+srv://pkr:Prashant%401234@cluster0.llh4zug.mongodb.net/')
}
 export default connect