import{Router, Request, Response, RequestHandler} from 'express'

const router = Router()

router.get('/', (req: Request,res: Response) =>{
    res.send("Aqui é a página de home")
})

//Quando usamos middleware, colocamos next
const interferir:RequestHandler = (req,res,next)=>{
    let logged = false
    if(logged){
        next()
    }else{
        res.status(404).send("Login não permitido")
    }
}

router.get('/contato', interferir, (req: Request,res: Response) =>{
    console.log("EXECUTOU A PAG DE CONTATOS")
    res.send("Aqui é a página de contato")
})

router.get('/sobre', (req: Request,res: Response) =>{
    res.send("Aqui é a página de sobre")
})

//ROTA DINÂMICA
router.get("/noticia/:slug", (req: Request,res: Response) =>{
    let slug: string = req.params.slug
    res.send(`NOTÍCIA: ${slug}`)
})

router.get("/voo/:origem-:destino", (req: Request,res: Response) =>{
    let{origem, destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

export default router


