import * as Create from "./create";
import * as Auth from "./auth";

export const usersService = {
  ...Create,
  ...Auth,
};
