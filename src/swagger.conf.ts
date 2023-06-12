import swaggerJSDoc from "swagger-jsdoc"

export const swaggerOptions={

    definition:{
        openapi:"3.0.0",
        info:{
            title:"API de las IPS AteneaIPS",
            version:"1.0.0",
            descripcion:"API para IPS"
        },
        servers:[
            {
                url:"http://localhost:3000",
                description:"Server de documentacion"
            }
        ]
    }, 

    apis:["src/index.ts","./swagger/*.swagger.ts"]
}

export const swaggerSpec=swaggerJSDoc(swaggerOptions)