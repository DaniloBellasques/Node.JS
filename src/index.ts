import validator from 'validator';
import{somar, subtrair} from './matematica';
import {filmes} from './filmes'

let nome: string = "Lucas"
let idade: number = 32

console.log(`Meu nome é ${nome}`)

console.log(validator.isEmail('fulano@gmail.com'))

let ip = '192.168.0.1'
console.log(validator.isIP(ip))

console.log((`SOMA ${somar(10, 20)}`))

console.log((`SUBTRAÇÃO ${subtrair(10, 20)}`))

console.log(filmes)