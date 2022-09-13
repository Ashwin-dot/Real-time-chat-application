import express from "express";
import { PORT } from "./config/index.js";

const app = express();

app.get("/", (req, res) => {
  res.send(`hiii from backend`);
});

app.listen(PORT, () => {
  console.log(`server runs at http://localhost:${PORT}`);
});
