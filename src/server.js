console.log('ola Messi!')

import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json(
        {

        message:"Olá Messi brasileiro!",
        success:"sucesso ao executar o Cristiano Ronaldo"

        }
     )
})


app.listen(3000,() => {
    console.log('Messi sacudo logado na porta http://localhost:3000')
})