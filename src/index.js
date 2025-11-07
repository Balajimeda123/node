// import express from "express";
// import cors from "cors";

// import dbConnection from "./db.js";
// import userRouter from "./routes/user.routes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/user", userRouter);

// dbConnection();

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(` Server running on port ${PORT}`);
// });

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import dbConnection from "./db.js";
// import todoRouter from "./routes/todo.routes.js";

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());
// dbConnection();

// app.use("/api/todos", todoRouter);
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(` Server running on port ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Task_routes from "./routes/Task_routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log(err));

// ✅ API Routes
app.use("/api/tasks", Task_routes);

app.listen(process.env.PORT, () =>
  console.log(`✅ Server running on port ${process.env.PORT}`)
);
