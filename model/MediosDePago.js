import DataBase from "../config/Database.js";

export default class MediosDePago {
    constructor(mediosDePago_id, titulo_mediosDePago, descripcion_mediosDePago, estado_mediosDePago) {
        this.mediosDePago_id = mediosDePago_id;
        this.titulo_mediosDePago = titulo_mediosDePago;
        this.descripcion_mediosDePago = descripcion_mediosDePago;
        this.estado_mediosDePago = estado_mediosDePago;
    }

    //FUNCION PARA INSERTAR UN NUEVO MEDIO DE PAGO
    async insertarMediosDePagoModel(titulo_mediosDePago, descripcion_mediosDePago) {
        try {
            const conexion = DataBase.getInstance();
            const query = "INSERT INTO mediosDePago (titulo_mediosDePago, descripcion_mediosDePago) VALUES (?,?)";
            const params = [titulo_mediosDePago, descripcion_mediosDePago];

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

    //FUNCION PARA ACTUALIZAR UN MEDIO DE PAGO
    async actualizarMediosDePagoModel(titulo_mediosDePago, descripcion_mediosDePago, mediosDePago_id) {
        try {
            const conexion = DataBase.getInstance();
            const query = "UPDATE mediosDePago SET titulo_mediosDePago = ?, descripcion_mediosDePago = ? WHERE mediosDePago_id = ?";
            const params = [titulo_mediosDePago, descripcion_mediosDePago, mediosDePago_id];

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

    //FUNCION PARA SELECCIONAR POR ID UN MEDIO DE PAGO
    async seleccionarMediosDePagoPorID(mediosDePago_id) {
        try {
            const conexion = DataBase.getInstance();
            const query = "SELECT * FROM mediosDePago WHERE mediosDePago_id = ? AND estado_mediosDePago <> 0";
            const params = [mediosDePago_id];

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

    //FUNCION PARA ELIMINAR LOGICAMENTE UN MEDIO DE PAGO
    async eliminarMediosDePagoPorId(mediosDePago_id) {
        try {
            const conexion = DataBase.getInstance();
            const query = "UPDATE mediosDePago SET estado_mediosDePago = 0 WHERE mediosDePago_id = ?";
            const params = [mediosDePago_id];

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

    //FUNCION PARA SELECCIONAR TODOS LOS MEDIOS DE PAGO
    async seleccionarTodosMediosDePago() {
        try {
            const conexion = DataBase.getInstance();
            const query = "SELECT * FROM mediosDePago WHERE estado_mediosDePago <> 0";
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

}
