import { Schema, model } from "mongoose";
import { TUser } from "./users.interface";

const userSchema = new Schema<TUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name:{
    type: String,
    required: true
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type: String,
    required: true,
  },
  needsPasswordChange:{
    type: Boolean,
    default:false,
  },
  role:{
    type: String,
    enum:['admin' ,'vendor' ],
  },
  isDeleted:{
    type:Boolean,
    default:false
  }
})



export const User = model<TUser>('User',userSchema);