import { Router } from "express";
import { usersControllers } from "../controllers";
import { createValidation } from "../middlewares/users/createValidation";
import { authValidation } from "../middlewares/users/authValidation";
import { handleValidationUser } from "../middlewares/handleValidatior";
import { isAuthenticated } from "../middlewares/users/isAuthenticated";

const router = Router();

router.post(
  "/users",
  createValidation,
  handleValidationUser,
  usersControllers.Create
);

router.post(
  "/session",
  authValidation,
  handleValidationUser,
  usersControllers.Auth
);

router.get("/me", isAuthenticated, usersControllers.Detail);

export { router };
