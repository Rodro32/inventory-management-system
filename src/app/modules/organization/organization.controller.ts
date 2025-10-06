import { Request, Response } from "express";
import { OrganizationServices } from "./organization.service";

const createOrganization =async (req:Request,res:Response)=>{
  try{
    const data = req.body;
  const result = await OrganizationServices.createOrganizationIntoDB(data)


  res.status(200).json({
    success:true,
    message:'Organization is created successfully',
    data: result
  })
  }
  catch(err){
    console.log(err)
  }
}

export const OrganizationControllers = {
  createOrganization
}