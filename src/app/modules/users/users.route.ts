import express from 'express'
import { UserControllers} from './users.controller';
const router = express.Router();

router.post('/create-user',UserControllers.createUser);
export const UserRoute = router;