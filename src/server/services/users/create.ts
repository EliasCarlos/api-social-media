import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const Create = async ({
  name,
  email,
  password,
  passwordConfirmation,
}: IUserRequest) => {
  // check if the email is already registered on the platform
  const userAlreadyExists = await prismaClient.user.findFirst({
    where: {
      email,
    },
  });

  if (userAlreadyExists) {
    throw new Error("User already exists");
  }

  const passwordHash = await hash(password, 8);

  const user = await prismaClient.user.create({
    data: {
      name,
      email,
      password: passwordHash,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return user;
};
