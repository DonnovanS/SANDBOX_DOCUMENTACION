import { Router, Response, Request } from 'express'

import FormularioController from '../controllers/Formulario.controller'

class FormularioRouter{

    router:Router
    miForumularioController:FormularioController

    constructor() {
        this.router=Router()
        this.miForumularioController= new FormularioController()
        this.routes()
    }
    private routes(){
        this.router.get{
            '/formulario/:formulario',
            (req:Request, res:Response)=>{
                this.miForumularioController.obtenerDefinicion(req,res)
            }
        }
    }
}
export default new FormularioRouter().router