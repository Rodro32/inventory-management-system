import { Request, Response } from "express";
import { userServices } from "./users.service";
import catchAsync from "../../../utils/tryCatch";

const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    // Make sure service function returns a Promise
    const result = await userServices.createUserIntoDB(data);

    // Send response
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error: any) {
    console.error("Error creating ", error);

    // Send error response
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

const createAdmin = catchAsync(async (req, res) => {
  const { password, userData } = req.body;
  console.log(password, userData);

  const result = await userServices.createAdminIntoDb(password, userData);

  return res.status(201).json({
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  createAdmin,
};
