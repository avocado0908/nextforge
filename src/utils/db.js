import mongoose, { connect } from "mongoose"

const coonect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw new Error("Connection failed");
    }
};

export default connect;