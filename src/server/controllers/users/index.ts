import * as Create from "./create";
import * as Auth from "./auth";
import * as Detail from "./detail";

export const usersControllers = {
  ...Create,
  ...Auth,
  ...Detail,
};
