import { body, ValidationChain } from "express-validator";

export const createValidation: ValidationChain[] = [
  body("name")
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage("O nome precisa ter entre 3 e 50 caracteres"),
  body("email")
    .isString()
    .withMessage("O e-mail é obrigatório")
    .isEmail()
    .withMessage("O email deve ser um endereço de email válido"),
  body("password")
    .isString()
    .isLength({ min: 6 })
    .withMessage("A senha deve ter pelo menos 6 caracteres"),
  body("passwordConfirmation")
    .isString()
    .withMessage("A confirmação da senha é obrigatória")
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("As senhas não são iguais.");
      }

      return true;
    }),
];
