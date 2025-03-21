import { Request, Response } from "express";
import { usersService } from "../../services";

export const Detail = async (req: Request, res: Response) => {
  const user_id = req.user_id;

  const user = await usersService.Detail(user_id);

  return res.json(user);
};
