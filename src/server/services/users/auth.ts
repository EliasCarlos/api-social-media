import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthRequest {
  email: string;
  password: string;
}

export const Auth = async ({ email, password }: IAuthRequest) => {
  // Check if user exists
  const user = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // Verify password
  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid password");
  }

  //Gerar token do usuário
  const token = sign(
    {
      name: user.name,
      email: user.email,
    },
    process.env.SECRET_JWT,
    {
      subject: user.id,
      expiresIn: "30d",
    }
  );

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token: token,
  };
};
