import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId
    },
    comment: {
        type: String
    },
    onModel:{
        type: String,
        required: true,
        enum: ["Tweet","Comment"]
    },
    commenttable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    }
})

const Comment = mongoose.model('comment',commentSchema);

export default Comment