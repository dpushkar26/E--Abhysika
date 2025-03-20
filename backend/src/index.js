import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" }); // Correct path to the .env file inside the src folder

import db from "./database/db.js";
import { app } from "./app.js";

// Debugging: Log the current working directory and environment variables
console.log("Current working directory:", process.cwd());
console.log("Loaded MONGODB_URL:", process.env.MONGODB_URL);

// Validate required environment variables
if (!process.env.MONGODB_URL) {
    console.error("❌ Missing required environment variable: MONGODB_URL");
    process.exit(1);
}
if (!process.env.PORT) {
    console.warn("⚠️ PORT is not defined. Using default port 8000.");
}

db()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed!", err);
  });
