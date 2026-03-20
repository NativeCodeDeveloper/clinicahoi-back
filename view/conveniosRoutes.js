import {Router} from 'express';
import ConveniosController from '../controller/ConveniosController.js';

const router = Router();

router.post('/insertarConvenio', ConveniosController.insertarConvenioController);
router.post('/seleccionarConvenio', ConveniosController.seleccionarConvenioController);
router.post('/actualizarConvenio', ConveniosController.actualizarConvenioController);
router.post('/eliminarConvenio', ConveniosController.eliminarConvenioController);
router.get('/seleccionarTodosConvenios', ConveniosController.seleccionarTodosConveniosController);

export default router;
