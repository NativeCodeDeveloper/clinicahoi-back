import ProfesionalAgendaAsignacion from '../model/ProfesionalAgendaAsignacion.js';

export default class ProfesionalAgendaAsignacionController {

    constructor() {
    }

    //FUNCION PARA INSERTAR UNA NUEVA ASIGNACION DE AGENDA PROFESIONAL
    static async insertarProfesionalAgendaAsignacionController(req, res) {
        try{
            const { titulo_profesionalAgendaAsignacion, descripcion_profesionalAgendaAsignacion, porcentaje_remuneracion, profesional_id } = req.body;
            if (!titulo_profesionalAgendaAsignacion || !profesional_id) {
                return res.status(400).json({ message: "sindata" });
            }
            const asignacionClass = new ProfesionalAgendaAsignacion();
            const resultado = await asignacionClass.insertarProfesionalAgendaAsignacionModel(titulo_profesionalAgendaAsignacion, descripcion_profesionalAgendaAsignacion, porcentaje_remuneracion, profesional_id);
            if (resultado.affectedRows > 0) {
                res.status(200).json({ message: true });
            }else {
                res.status(500).json({ message: false });
            }
        }catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA ACTUALIZAR UNA ASIGNACION DE AGENDA PROFESIONAL
    static async actualizarProfesionalAgendaAsignacionController(req, res) {
        try{
            const { titulo_profesionalAgendaAsignacion, descripcion_profesionalAgendaAsignacion, porcentaje_remuneracion, profesional_id, profesionalAgendaAsignacion_id } = req.body;
            if (!profesionalAgendaAsignacion_id) {
                return res.status(400).json({ message: "sindata" });
            }
            const asignacionClass = new ProfesionalAgendaAsignacion();
            const resultado = await asignacionClass.actualizarProfesionalAgendaAsignacionModel(titulo_profesionalAgendaAsignacion, descripcion_profesionalAgendaAsignacion, porcentaje_remuneracion, profesional_id, profesionalAgendaAsignacion_id);

            if (resultado.affectedRows > 0) {
                res.status(200).json({ message: true });
            }else {
                res.status(500).json({ message: false });
            }
        }catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA SELECCIONAR POR ID UNA ASIGNACION DE AGENDA PROFESIONAL
    static async seleccionarProfesionalAgendaAsignacionController(req, res) {
        try{
            const { profesionalAgendaAsignacion_id } = req.body;

            if (!profesionalAgendaAsignacion_id) {
                return res.status(400).json({ message: "sindata" });
            }
            const asignacionClass = new ProfesionalAgendaAsignacion();
            const resultado = await asignacionClass.seleccionarProfesionalAgendaAsignacionPorID(profesionalAgendaAsignacion_id);

            if (resultado) {
                res.status(200).json(resultado);
            }else {
                res.status(500).json({ message: false });
            }
        }catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA ELIMINAR LOGICAMENTE UNA ASIGNACION DE AGENDA PROFESIONAL
    static async eliminarProfesionalAgendaAsignacionController(req, res) {
        try {
            const { profesionalAgendaAsignacion_id } = req.body;
            if (!profesionalAgendaAsignacion_id) {
                return res.status(400).json({ message: "sindata" });
            }
            const asignacionClass = new ProfesionalAgendaAsignacion();
            const resultado = await asignacionClass.eliminarProfesionalAgendaAsignacionPorId(profesionalAgendaAsignacion_id);

            if (resultado.affectedRows > 0) {
                res.status(200).json({ message: true });
            } else {
                res.status(500).json({ message: false });
            }
        } catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA SELECCIONAR TODAS LAS ASIGNACIONES DE AGENDA PROFESIONAL
    static async seleccionarTodasProfesionalAgendaAsignacionController(req, res) {
        try{
            const asignacionClass = new ProfesionalAgendaAsignacion();
            const resultado = await asignacionClass.seleccionarTodasProfesionalAgendaAsignacion();

            if (resultado) {
                res.status(200).json(resultado);
            } else {
                res.status(500).json({ message: false });
            }
        } catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA SELECCIONAR ASIGNACIONES POR PROFESIONAL
    static async seleccionarProfesionalAgendaAsignacionPorProfesionalController(req, res) {
        try{
            const { profesional_id } = req.body;
            if (!profesional_id) {
                return res.status(400).json({ message: "sindata" });
            }
            const asignacionClass = new ProfesionalAgendaAsignacion();
            const resultado = await asignacionClass.seleccionarProfesionalAgendaAsignacionPorProfesionalId(profesional_id);

            if (resultado) {
                res.status(200).json(resultado);
            }else {
                res.status(500).json({ message: false });
            }
        }catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

}
