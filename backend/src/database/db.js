import mongoose from "mongoose";

const db = async () => {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error("MONGODB_URL is not defined in environment variables.");
        }
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL, {
          
        });
        console.log(`\n✅ MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default db;
