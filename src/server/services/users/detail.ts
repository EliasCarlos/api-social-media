import prismaClient from "../../prisma";

export const Detail = async (user_id: string) => {
  const user = await prismaClient.user.findUnique({
    where: { id: user_id },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return user;
};
