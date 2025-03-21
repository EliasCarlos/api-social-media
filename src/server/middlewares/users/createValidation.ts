import { body, ValidationChain } from "express-validator";

export const createValidation: ValidationChain[] = [
  body("name")
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage("The name must be between 3 and 50 characters long"),
  body("email")
    .isString()
    .isEmail()
    .withMessage("The email must be a valid email address"),
  body("password")
    .isString()
    .isLength({ min: 6 })
    .withMessage("The password must be at least 6 characters long"),
  body("passwordConfirmation")
    .isString()
    .withMessage("Password confirmation is mandatory")
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("Passwords are not the same");
      }

      return true;
    }),
];
