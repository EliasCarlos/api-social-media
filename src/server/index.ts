import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "dotenv/config";

import { router as usersRouter } from "./routes/usersRoutes";

const server = express();

server.use(express.json());
server.use(usersRouter);

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});

export { server };
