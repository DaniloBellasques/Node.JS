import { Request, Response } from "express";

export const nome=((req: Request,res: Response) =>{
    /*iremos fazer uma requisição ao usuário usando o req o as string é para ajudar o typescript a especificar o
        tipo desse dado que vou receber, e o query significa que é um dado que será enviado pela URL*/ 
    let nome: string = req.query.nome as string
    res.render('pages/nome',{
        nome
    })
 
})

export const dados =((req: Request,res: Response) =>{
    let nome: string = req.query.nome as string
    let idade: string = req.query.idade as string
    let telefone: string = req.query.telefone as string
    let rua: string = req.query.rua as string

    res.render('pages/dados',{
        nome,
        idade,
        telefone,
        rua
    })
})

export const idade =((req:Request,res:Response)=>{
    res.render('pages/idade')
})

export const email =((req: Request, res: Response) => {
    res.render('pages/email')
})

export const resultado =((req: Request, res: Response) => {
    let email
    let mostrarEmail: boolean = false
    if (req.body.email) {
        mostrarEmail = true
    }
    res.render('pages/email', {
        email,
        mostrarEmail
    })
})

export const resultado2 =((req: Request, res: Response) => {
    let idade: number = 0
    let mostrarIdade: boolean = false
    if (req.body.anoNascimento) {
        let anoNascimento: number = parseInt(req.body.anoNascimento as string)
        let anoAtual: number = new Date().getFullYear()
        idade = anoAtual - anoNascimento
        mostrarIdade = true
    }
    res.render('pages/idade', {
        idade,
        mostrarIdade
    })
})