import { Router } from 'express';
import * as taskController from '../controllers/taskController';

const router = Router();

router.get('/', taskController.getTasks);

router.get('/get-task/:id', taskController.getTask)

router.post('/add-task', taskController.postAddTask);

router.post('/update-task', taskController.postUpdateTask);

export default router;
