import { Console } from 'console'
import { Router, Request, Response, RequestHandler } from 'express'
import * as HomeController from '../controllers/homeController'
import * as InfoController from '../controllers/infoController'
import * as UserController from '../controllers/userController'

const router = Router()

router.get('/', HomeController.home)




//Quando usamos middleware, colocamos next
/*const interferir: RequestHandler = (req, res, next) => {
    let logged = false
    if (logged) {
        next()
    } else {
        res.status(404).send("Login não permitido")
    }
}*/

router.get('/contato', InfoController.contato)

router.get('/sobre', InfoController.sobre)

router.get('/nome', UserController.nome)

router.get('/dados', UserController.dados)

router.get('/idade', UserController.idade)

router.get('/email', UserController.email)

router.post('/email-resultado', UserController.resultado)

router.post('/idade-resultado', UserController.resultado2)




//ROTA DINÂMICA
/*router.get("/noticia/:slug", (req: Request, res: Response) => {
    let slug: string = req.params.slug
    res.send(`NOTÍCIA: ${slug}`)
})

router.get("/voo/:origem-:destino", (req: Request, res: Response) => {
    let { origem, destino } = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})*/

export default router


