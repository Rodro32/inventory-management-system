import { TUser } from "./users.interface";
import { User } from "./users.model";

const createUserIntoDB = async(user:TUser) =>{
  const result = await User.create(user);
  return result;
}

export const userServices = {
  createUserIntoDB,
}