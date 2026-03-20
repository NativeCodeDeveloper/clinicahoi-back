import {Router} from 'express';
import MediosDePagoController from '../controller/MediosDePagoController.js';

const router = Router();

router.post('/insertarMediosDePago', MediosDePagoController.insertarMediosDePagoController);
router.post('/seleccionarMediosDePago', MediosDePagoController.seleccionarMediosDePagoController);
router.post('/actualizarMediosDePago', MediosDePagoController.actualizarMediosDePagoController);
router.post('/eliminarMediosDePago', MediosDePagoController.eliminarMediosDePagoController);
router.get('/seleccionarTodosMediosDePago', MediosDePagoController.seleccionarTodosMediosDePagoController);

export default router;
