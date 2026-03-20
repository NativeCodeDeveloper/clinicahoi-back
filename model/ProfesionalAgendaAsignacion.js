import DataBase from "../config/Database.js";

export default class ProfesionalAgendaAsignacion {
    constructor(profesionalAgendaAsignacion_id, titulo_profesionalAgendaAsignacion, descripcion_profesionalAgendaAsignacion, porcentaje_remuneracion, estado_profesionalAgendaAsignacion, profesional_id) {
        this.profesionalAgendaAsignacion_id = profesionalAgendaAsignacion_id;
        this.titulo_profesionalAgendaAsignacion = titulo_profesionalAgendaAsignacion;
        this.descripcion_profesionalAgendaAsignacion = descripcion_profesionalAgendaAsignacion;
        this.porcentaje_remuneracion = porcentaje_remuneracion;
        this.estado_profesionalAgendaAsignacion = estado_profesionalAgendaAsignacion;
        this.profesional_id = profesional_id;
    }

    //FUNCION PARA INSERTAR UNA NUEVA ASIGNACION DE AGENDA PROFESIONAL
    async insertarProfesionalAgendaAsignacionModel(titulo_profesionalAgendaAsignacion, descripcion_profesionalAgendaAsignacion, porcentaje_remuneracion, profesional_id) {
        try {
            const conexion = DataBase.getInstance();
            const query = "INSERT INTO profesionalAgendaAsignacion (titulo_profesionalAgendaAsignacion, descripcion_profesionalAgendaAsignacion, porcentaje_remuneracion, profesional_id) VALUES (?,?,?,?)";
            const params = [titulo_profesionalAgendaAsignacion, descripcion_profesionalAgendaAsignacion, porcentaje_remuneracion, profesional_id];

            const resultado = await conexion.ejecutarQuery(query, params);

            if (resultado) {
                return resultado;
            } else {
                return resultado;
            }

        } catch (error) {
            throw error;
        }
    }

    //FUNCION PARA ACTUALIZAR UNA ASIGNACION DE AGENDA PROFESIONAL
    async actualizarProfesionalAgendaAsignacionModel(titulo_profesionalAgendaAsignacion, descripcion_profesionalAgendaAsignacion, porcentaje_remuneracion, profesional_id, profesionalAgendaAsignacion_id) {
        try {
            const conexion = DataBase.getInstance();
            const query = "UPDATE profesionalAgendaAsignacion SET titulo_profesionalAgendaAsignacion = ?, descripcion_profesionalAgendaAsignacion = ?, porcentaje_remuneracion = ?, profesional_id = ? WHERE profesionalAgendaAsignacion_id = ?";
            const params = [titulo_profesionalAgendaAsignacion, descripcion_profesionalAgendaAsignacion, porcentaje_remuneracion, profesional_id, profesionalAgendaAsignacion_id];

            const resultado = await conexion.ejecutarQuery(query, params);

            if (resultado) {
                return resultado;
            } else {
                return resultado;
            }

        } catch (error) {
            throw error;
        }
    }

    //FUNCION PARA SELECCIONAR POR ID UNA ASIGNACION DE AGENDA PROFESIONAL
    async seleccionarProfesionalAgendaAsignacionPorID(profesionalAgendaAsignacion_id) {
        try {
            const conexion = DataBase.getInstance();
            const query = "SELECT * FROM profesionalAgendaAsignacion WHERE profesionalAgendaAsignacion_id = ? AND estado_profesionalAgendaAsignacion <> 0";
            const params = [profesionalAgendaAsignacion_id];

            const resultado = await conexion.ejecutarQuery(query, params);

            if (resultado) {
                return resultado;
            } else {
                return resultado;
            }

        } catch (error) {
            throw error;
        }
    }

    //FUNCION PARA ELIMINAR LOGICAMENTE UNA ASIGNACION DE AGENDA PROFESIONAL
    async eliminarProfesionalAgendaAsignacionPorId(profesionalAgendaAsignacion_id) {
        try {
            const conexion = DataBase.getInstance();
            const query = "UPDATE profesionalAgendaAsignacion SET estado_profesionalAgendaAsignacion = 0 WHERE profesionalAgendaAsignacion_id = ?";
            const params = [profesionalAgendaAsignacion_id];

            const resultado = await conexion.ejecutarQuery(query, params);

            if (resultado) {
                return resultado;
            } else {
                return resultado;
            }

        } catch (error) {
            throw error;
        }
    }

    //FUNCION PARA SELECCIONAR TODAS LAS ASIGNACIONES DE AGENDA PROFESIONAL
    async seleccionarTodasProfesionalAgendaAsignacion() {
        try {
            const conexion = DataBase.getInstance();
            const query = "SELECT * FROM profesionalAgendaAsignacion WHERE estado_profesionalAgendaAsignacion <> 0";
            const resultado = await conexion.ejecutarQuery(query);

            if (resultado) {
                return resultado;
            } else {
                return resultado;
            }

        } catch (error) {
            throw error;
        }
    }

    //FUNCION PARA SELECCIONAR ASIGNACIONES POR PROFESIONAL ID
    async seleccionarProfesionalAgendaAsignacionPorProfesionalId(profesional_id) {
        try {
            const conexion = DataBase.getInstance();
            const query = "SELECT * FROM profesionalAgendaAsignacion WHERE profesional_id = ? AND estado_profesionalAgendaAsignacion <> 0";
            const params = [profesional_id];

            const resultado = await conexion.ejecutarQuery(query, params);

            if (resultado) {
                return resultado;
            } else {
                return resultado;
            }

        } catch (error) {
            throw error;
        }
    }

}
