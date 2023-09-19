import { Router } from 'express';
import userRouter from './user/userRouter.js';
const mainRouter = Router();

mainRouter.use('/user', userRouter);

export default mainRouter;
