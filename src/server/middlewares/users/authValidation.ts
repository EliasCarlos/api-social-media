import { body, ValidationChain } from "express-validator";

export const authValidation: ValidationChain[] = [
  body("email")
    .isString()
    .isEmail()
    .withMessage("The email must be a valid email address"),
  body("password")
    .isString()
    .isLength({ min: 6 })
    .withMessage("The password must be at least 6 characters long"),
];
