import express from 'express'
import { OrganizationControllers } from './organization.controller';
const router = express.Router();

router.post('/create/organization',OrganizationControllers.createOrganization);
export const OrganizationRoute = router;