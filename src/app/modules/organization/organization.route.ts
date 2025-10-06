import express from 'express'
import { OrganizationControllers } from './organization.controller';
const router = express.Router();

router.post('/create-vendor',OrganizationControllers.createOrganization);
export const OrganizationRoute = router;