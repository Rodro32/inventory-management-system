import { ObjectId } from "mongoose"

export type TOrganization = {
  userId : ObjectId,
  supplierId:ObjectId,
  id:String,
  name:String,
  address:String,
  subscriptionPlan:'monthly' |'weekly',
  trialEnd:Date,
}