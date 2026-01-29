import mongoose from "mongoose";

const {Schema} = mongoose

const postSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
},
{
    timestamps: true 
}
)

// reuse existing model if compiled to avoid OverwriteModelError in dev/hot-reload
export default mongoose.models.Post || mongoose.model("Post", postSchema)