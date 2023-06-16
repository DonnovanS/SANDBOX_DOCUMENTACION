import { Router } from "express"
import MedicoControl from "../controllers/MedicoControl"

class MedicoRouter{

    router:Router
    medicoControl: MedicoControl

    constructor(){
        
        this.router=Router()
        this.medicoControl= new MedicoControl()
        this.routes()
    }

    private routes():void{
        this.router.get('/medicos',
            (req:Request, res:Response)=>{
                this.medicoControl.obtenerMedicos(req,res)
            }
        )
    }
}

export default new MedicoRouter().router