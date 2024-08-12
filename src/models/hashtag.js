import mongoose from "mongoose";

const hastagSchema = new mongoose.Schema({
   text: {
    type : String,
    required: true,
    unique: true
   },
   tweets : [
    {
        type: mongoose.Schema.Types.ObjectId
    }
   ]
});

const Hashtag = mongoose.model('Hashtag', hastagSchema);

export default Hashtag;