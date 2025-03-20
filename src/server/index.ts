import express from "express";
import "dotenv/config";

import { router as usersRouter } from "./routes/usersRoutes";

const server = express();

server.use(express.json());
server.use("/users", usersRouter);

export { server };
