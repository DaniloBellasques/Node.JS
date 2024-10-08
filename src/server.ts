import express, {Request, Response} from 'express'
import path from 'path'

//importando o arquivos index.ts das rotas

import mainRoutes from './routes/index'

const server = express()

//configuração pasta public
server.use(express.static(path.join(__dirname,'../public')))

//inserindo a rota no servidor

server.use(mainRoutes)

//página não encontrada

server.use((req: Request, res: Response)=>{
    res.status(404).send("PÁGINA SUMIU")
})
server.listen(3000)