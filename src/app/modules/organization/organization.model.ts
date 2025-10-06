import {  Schema, model } from "mongoose";
import { TOrganization } from "./organization.interface";

const OrganizationSchema = new Schema<TOrganization>({
  userId:{
    type:Schema.Types.ObjectId,
    ref:'user',
    required:true
  },
  supplierId:{
    type:Schema.Types.ObjectId,
    ref:'supplier',
    required:true,
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
    required:true
  },
  subscriptionPlan:{
    type: String,
    enum:['monthly' ,'weekly'],
  },
  trialEnd: {
    type: Date,
    required: true,
  },
})

export const Organization = model<TOrganization>('Organization',OrganizationSchema)