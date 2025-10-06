import express from 'express'
import { UserControllers} from './users.controller';
const router = express.Router();

router.post('/create-user',UserControllers.createUser);
router.post('/create-admin',UserControllers.createAdmin);
export const UserRoute = router;