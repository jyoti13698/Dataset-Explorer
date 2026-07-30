import express from "express";
import cors from "cors";

import datasetRoutes from "./routes/dataset.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Dataset Explorer API Running 🚀",
  });
});

app.use("/api/datasets", datasetRoutes);

export default app;