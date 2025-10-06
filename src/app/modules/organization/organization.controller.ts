import { Request, Response } from "express";
import { OrganizationServices } from "./organization.service";

const createOrganization = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    
    const result = await OrganizationServices.createOrganizationIntoDB(data);

    
    return res.status(201).json({
      success: true,
      message: "Organization created successfully",
      data: result,
    });
  } catch (error: any) {
    console.error("Error creating organization:", error);

    
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const OrganizationControllers = {
  createOrganization,
};
