import MediosDePago from '../model/MediosDePago.js';

export default class MediosDePagoController {

    constructor() {
    }

    //FUNCION PARA INSERTAR UN NUEVO MEDIO DE PAGO
    static async insertarMediosDePagoController(req, res) {
        try{
            const { titulo_mediosDePago, descripcion_mediosDePago } = req.body;
            if (!titulo_mediosDePago) {
                return res.status(400).json({ message: "sindata" });
            }
            const mediosDePagoClass = new MediosDePago();
            const resultado = await mediosDePagoClass.insertarMediosDePagoModel(titulo_mediosDePago, descripcion_mediosDePago);
            if (resultado.affectedRows > 0) {
                res.status(200).json({ message: true });
            }else {
                res.status(500).json({ message: false });
            }
        }catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA ACTUALIZAR UN MEDIO DE PAGO
    static async actualizarMediosDePagoController(req, res) {
        try{
            const { titulo_mediosDePago, descripcion_mediosDePago, mediosDePago_id } = req.body;
            if (!mediosDePago_id) {
                return res.status(400).json({ message: "sindata" });
            }
            const mediosDePagoClass = new MediosDePago();
            const resultado = await mediosDePagoClass.actualizarMediosDePagoModel(titulo_mediosDePago, descripcion_mediosDePago, mediosDePago_id);

            if (resultado.affectedRows > 0) {
                res.status(200).json({ message: true });
            }else {
                res.status(500).json({ message: false });
            }
        }catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA SELECCIONAR POR ID UN MEDIO DE PAGO
    static async seleccionarMediosDePagoController(req, res) {
        try{
            const { mediosDePago_id } = req.body;

            if (!mediosDePago_id) {
                return res.status(400).json({ message: "sindata" });
            }
            const mediosDePagoClass = new MediosDePago();
            const resultado = await mediosDePagoClass.seleccionarMediosDePagoPorID(mediosDePago_id);

            if (resultado) {
                res.status(200).json(resultado);
            }else {
                res.status(500).json({ message: false });
            }
        }catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA ELIMINAR LOGICAMENTE UN MEDIO DE PAGO
    static async eliminarMediosDePagoController(req, res) {
        try {
            const { mediosDePago_id } = req.body;
            if (!mediosDePago_id) {
                return res.status(400).json({ message: "sindata" });
            }
            const mediosDePagoClass = new MediosDePago();
            const resultado = await mediosDePagoClass.eliminarMediosDePagoPorId(mediosDePago_id);

            if (resultado.affectedRows > 0) {
                res.status(200).json({ message: true });
            } else {
                res.status(500).json({ message: false });
            }
        } catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA SELECCIONAR TODOS LOS MEDIOS DE PAGO
    static async seleccionarTodosMediosDePagoController(req, res) {
        try{
            const mediosDePagoClass = new MediosDePago();
            const resultado = await mediosDePagoClass.seleccionarTodosMediosDePago();

            if (resultado) {
                res.status(200).json(resultado);
            } else {
                res.status(500).json({ message: false });
            }
        } catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

}
