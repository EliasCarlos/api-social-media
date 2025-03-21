import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // receive the token
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // validate the token
    const { sub } = verify(token, process.env.SECRET_JWT) as Payload;

    // Id placed inside the Express Request variable
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
