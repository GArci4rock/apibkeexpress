import express from 'express';
import accountController from '../controllers/account/accountController.js';
import listController from '../controllers/account/listController.js';
import getController from '../controllers/account/getController.js';
import putController from '../controllers/account/putController.js';
import deleteController from '../controllers/account/deleteController.js';




const router = express.Router();

router.post('/acc', accountController);

router.get('/list', listController);

router.get('/get/:id', getController);

router.put('/put/:id', putController);

router.delete('/del/:id', deleteController);

export default router;
