import Convenios from '../model/Convenios.js';

export default class ConveniosController {

    constructor() {
    }

    //FUNCION PARA INSERTAR UN NUEVO CONVENIO
    static async insertarConvenioController(req, res) {
        try{
            const { titulo_convenio, descripcion_convenio } = req.body;
            if (!titulo_convenio) {
                return res.status(400).json({ message: "sindata" });
            }
            const convenioClass = new Convenios();
            const resultado = await convenioClass.insertarConvenioModel(titulo_convenio, descripcion_convenio);
            if (resultado.affectedRows > 0) {
                res.status(200).json({ message: true });
            }else {
                res.status(500).json({ message: false });
            }
        }catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA ACTUALIZAR UN CONVENIO
    static async actualizarConvenioController(req, res) {
        try{
            const { titulo_convenio, descripcion_convenio, id_convenio } = req.body;
            if (!id_convenio) {
                return res.status(400).json({ message: "sindata" });
            }
            const convenioClass = new Convenios();
            const resultado = await convenioClass.actualizarConvenioModel(titulo_convenio, descripcion_convenio, id_convenio);

            if (resultado.affectedRows > 0) {
                res.status(200).json({ message: true });
            }else {
                res.status(500).json({ message: false });
            }
        }catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA SELECCIONAR POR ID UN CONVENIO
    static async seleccionarConvenioController(req, res) {
        try{
            const { id_convenio } = req.body;

            if (!id_convenio) {
                return res.status(400).json({ message: "sindata" });
            }
            const convenioClass = new Convenios();
            const resultado = await convenioClass.seleccionarConvenioPorID(id_convenio);

            if (resultado) {
                res.status(200).json(resultado);
            }else {
                res.status(500).json({ message: false });
            }
        }catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA ELIMINAR LOGICAMENTE UN CONVENIO
    static async eliminarConvenioController(req, res) {
        try {
            const { id_convenio } = req.body;
            if (!id_convenio) {
                return res.status(400).json({ message: "sindata" });
            }
            const convenioClass = new Convenios();
            const resultado = await convenioClass.eliminarConvenioPorId(id_convenio);

            if (resultado.affectedRows > 0) {
                res.status(200).json({ message: true });
            } else {
                res.status(500).json({ message: false });
            }
        } catch (error) {
            res.status(500).json({ message: "serverError" });
        }
    }

    //FUNCION PARA SELECCIONAR TODOS LOS CONVENIOS
    static async seleccionarTodosConveniosController(req, res) {
        try{
            const convenioClass = new Convenios();
            const resultado = await convenioClass.seleccionarTodosConvenios();

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
