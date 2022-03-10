import { Router } from 'express';
import postController from './controller/post.controller'

const router = Router();

router.use('/create', postController);


export default router;