import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRoutes from "./routes/aiRoutes.js"; // ✅ .js extension required
import userRoutes from "./routes/userRoutes.js"; // ✅ .js extension required
import connectCloudinary from "./configs/cloudinary.js";

const app = express();
const port = process.env.PORT || 4000;

await connectCloudinary()

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// ✅ Public route
app.get("/", (req, res) => {
  res.send("✅ Server is running");
});

// ✅ Protected routes
app.use(requireAuth()); // Requires Clerk auth for everything below
app.use("/api/ai", aiRoutes);
app.use("/api/user", userRoutes);

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
