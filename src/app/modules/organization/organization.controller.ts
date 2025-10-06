import { Request, Response } from "express";
import { OrganizationService } from "./organization.service";


const getAllOrganizations = async (req: Request, res: Response) => {
  try {
    const organizations = await  OrganizationService.getAllOrganizationsFromDB();

    return res.status(200).json({
      success: true,
      message: "Organizations fetched successfully",
      data: organizations,
    });
  } catch (error: any) {
    console.error("Error fetching organizations:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const OrganizationController = {
  getAllOrganizations,
};

