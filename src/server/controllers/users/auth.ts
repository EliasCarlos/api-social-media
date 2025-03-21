import { Request, Response } from "express";
import { usersService } from "../../services";

export const Auth = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const auth = await usersService.Auth({ email, password });

  return res.json(auth);
};
