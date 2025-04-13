import "dotenv/config";
import express from "express";
import connectDB from "./db/connectDatabase.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;
const secret = process.env.COOKIE_SECRET;
const frontendBaseURL = process.env.FRONTEND_BASE_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(secret));

// CORS middleware
app.use(
  cors({
    origin: frontendBaseURL,
    credentials: true,
  })
);

// Handle preflight requests
app.options('*', cors({ origin: frontendBaseURL, credentials: true }));

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello, Welcome To Vooshfoods" });
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started on PORT: ${PORT}`);
});
