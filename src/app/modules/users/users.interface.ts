import { Schema, Types } from "mongoose";

export type TUser = {
  id: string;
  email:string;
  password: string;
  // userId:Types.ObjectId,
  needsPasswordChange: boolean;
  role: 'admin' | 'vendor';
  isDeleted ?: boolean ;
}