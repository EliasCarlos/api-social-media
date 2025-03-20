import { Router } from "express";
import { usersControllers } from "../controllers";
import { createValidation } from "../middlewares/users/createValidation";
import { handleValidationUser } from "../middlewares/handleValidatior";

const router = Router();

router.post(
  "/users",
  createValidation,
  handleValidationUser,
  usersControllers.create
);

export { router };
