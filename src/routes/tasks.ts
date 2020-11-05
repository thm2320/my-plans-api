import { Router } from 'express';
import * as taskController from './../controllers/taskController';

const router = Router();

router.get('/',taskController.getTasks);

router.post('/add-task',taskController.postAddTask);

export default router;
