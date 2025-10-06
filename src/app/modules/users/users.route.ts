import express from 'express';
import { UserController } from './users.controller';

const router = express.Router();

router.post('/create-organization', UserController.createOrganization);

export const UserRoute = router;
