import DataBase from "../config/Database.js";

export default class Convenios {
    constructor(id_convenio, titulo_convenio, descripcion_convenio, estado_convenio) {
        this.id_convenio = id_convenio;
        this.titulo_convenio = titulo_convenio;
        this.descripcion_convenio = descripcion_convenio;
        this.estado_convenio = estado_convenio;
    }

    //FUNCION PARA INSERTAR UN NUEVO CONVENIO
    async insertarConvenioModel(titulo_convenio, descripcion_convenio) {
        try {
            const conexion = DataBase.getInstance();
            const query = "INSERT INTO convenios (titulo_convenio, descripcion_convenio) VALUES (?,?)";
            const params = [titulo_convenio, descripcion_convenio];

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

    //FUNCION PARA ACTUALIZAR UN CONVENIO
    async actualizarConvenioModel(titulo_convenio, descripcion_convenio, id_convenio) {
        try {
            const conexion = DataBase.getInstance();
            const query = "UPDATE convenios SET titulo_convenio = ?, descripcion_convenio = ? WHERE id_convenio = ?";
            const params = [titulo_convenio, descripcion_convenio, id_convenio];

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

    //FUNCION PARA SELECCIONAR POR ID UN CONVENIO
    async seleccionarConvenioPorID(id_convenio) {
        try {
            const conexion = DataBase.getInstance();
            const query = "SELECT * FROM convenios WHERE id_convenio = ? AND estado_convenio <> 0";
            const params = [id_convenio];

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

    //FUNCION PARA ELIMINAR LOGICAMENTE UN CONVENIO
    async eliminarConvenioPorId(id_convenio) {
        try {
            const conexion = DataBase.getInstance();
            const query = "UPDATE convenios SET estado_convenio = 0 WHERE id_convenio = ?";
            const params = [id_convenio];

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

    //FUNCION PARA SELECCIONAR TODOS LOS CONVENIOS
    async seleccionarTodosConvenios() {
        try {
            const conexion = DataBase.getInstance();
            const query = "SELECT * FROM convenios WHERE estado_convenio <> 0";
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
