console.log('ola Messi!')

import express from 'express'
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'
import { ENVIRONMENT, PORT, HOST } from './config.js'

const app = express()

app.use('/auth', authRouter)

app.use('/account', accountRouter)



app.listen(PORT,() => {
console.log(`Messi logado na porta ${ ENVIRONMENT} em ${HOST}:${PORT}`)
})