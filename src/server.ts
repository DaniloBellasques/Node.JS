import express, {Request, Response} from 'express'

//importando o arquivos index.ts das rotas

import mainRoutes from './routes/index'

const server = express()

//inserindo a rota no servidor

server.use(mainRoutes)

//página não encontrada

server.use((req: Request, res: Response)=>{
    res.status(404).send("PÁGINA SUMIU")
})
server.listen(3000)