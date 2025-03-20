import { Request, Response } from "express";
import { usersService } from "../../services";

export const create = async (req: Request, res: Response) => {
  const { name, email, password, passwordConfirmation } = req.body;

  const user = await usersService.create({
    name,
    email,
    password,
    passwordConfirmation,
  });

  return res.json(user);
};
