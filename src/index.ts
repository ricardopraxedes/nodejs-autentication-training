import express from "express";
import { categoryRoutes } from "./routes";
import "./database";

const app = express();

app.listen(3333);

app.use(express.json());

app.use("/categories", categoryRoutes);

export { app };
