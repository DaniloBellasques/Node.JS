import { Request,Response } from "express";

export const home =((req: Request,res: Response) =>{
    let idade: number = 18
    let mostrarIdade: boolean = false
    if(idade >= 18){
        mostrarIdade = true
    }

    res.render('pages/home',{
        nome:'Danilo',
        sobreNome:'Bellasques',
        aparecerMensagem:true,
        mostrarIdade,
        idade,
        produtos: [
            {titulo: 'Mesa', preco: 200},
            {titulo: 'Shampoo', preco: 15},
            {titulo: 'Cadeira', preco: 50},
            
        ], 
        frases:[
            
        ]
        
        
    })
    
    
})