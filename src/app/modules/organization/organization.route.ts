import express from "express";
import { OrganizationController } from "./organization.controller";

const router = express.Router();


router.get("/", OrganizationController.getAllOrganizations);

export const OrganizationRoute = router;
