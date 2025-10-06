import {  Schema, model } from "mongoose";
import { TOrganization } from "./organization.interface";

const OrganizationSchema = new Schema<TOrganization>({
  user:{
    type: Schema.Types.ObjectId,
    required: [true,'userId required'],
    unique: true,
    ref:'user',
  },
  id:{
    type:String,
    required:true,
    unique:true
  },
  name:{
    type:String,
    required:true,
  },
  address:{
    type:String,
  },
  subscriptionPlan:{
    type: String,
    enum:['monthly' ,'weekly'],
  },
  trialEnd: {
    type: Date,
  },
})

export const Organization = model<TOrganization>('Organization',OrganizationSchema)