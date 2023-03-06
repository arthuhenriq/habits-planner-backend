// API RESTful (recursos e acessos)
//

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes';


/*
    * Método HTTP: Get (busca) , Post (adiciona), Put (atualiza), Patch (atualiza informação específica), Delete (remove)
    * Apenas operações Get pelo navegador;
*/


const app = Fastify()



app.register(cors); // Permite a aplicação Frontend consumir os dados do Backend
app.register(appRoutes)




app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then(() => {
    console.log("HTTP Server Running")
})
