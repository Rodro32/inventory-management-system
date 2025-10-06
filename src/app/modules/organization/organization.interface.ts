import { ObjectId, Types } from "mongoose"

export type TOrganization = {
  user: Types.ObjectId,
  id:String,
  name:String,
  address:String,
  subscriptionPlan:'monthly' |'weekly',
  trialEnd:Date,
}