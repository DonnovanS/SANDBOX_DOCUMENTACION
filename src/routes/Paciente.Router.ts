import {Router, Response, Request} from 'express'
import PacienteControl from '../controllers/PacienteControl'

class PacienteRouter{

    router:Router
    pacienteControl:PacienteControl

    constructor(){

        this.router = Router()
        this.pacienteControl = new PacienteControl()
        this.routes()
    }

    private routes():void{
        this.router.get(
            '/pacientes',
            (req:Request, res:Response)=>{
                this.pacienteControl.obtenerPacientes(req,res)
            }
        )
        this.router.post(
            "/crear_paciente",
            (req:Request, res:Response)=>{
                this.pacienteControl.crearPaciente(req,res)
            }
        )
    }

}

export default new PacienteRouter().router