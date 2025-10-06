import { Admin } from "../admin/admin.model";
import { TAdmin } from "./../admin/admin.interface";
import { TUser } from "./users.interface";
import { User } from "./users.model";

const createUserIntoDB = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

const createAdminIntoDb = async (password: string, payload: TAdmin) => {
  const userData: Partial<TUser> = {};
  console.log(userData);
  
  userData.role = "admin";
  userData.password = password;
  userData.email = payload.email;
  userData.id = "256";
  const newUser = await User.create(userData);
  if (!newUser) {
    throw new Error("user created failed");
  }

  payload.userId = newUser._id;

  const createNewAdmin = await Admin.create(payload);
  return createNewAdmin;
};

export const userServices = {
  createUserIntoDB,
  createAdminIntoDb,
};
