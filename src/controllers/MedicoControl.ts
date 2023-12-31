import { Router } from "express"

import { Prisma, PrismaClient } from "@prisma/client"

class MedicoControl{

    private prisma:PrismaClient

    constructor (){
        this.prisma=new PrismaClient()
    }

    async obtenerMedicos(req:Request, res:Response){
        const medicos = await this.prisma.medico.findMany()
        res.json(medicos)
    }

}
export default MedicoControl