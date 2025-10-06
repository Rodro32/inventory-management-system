import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoute } from './app/modules/users/users.route'
const app: Application = express()
const port = 5000

app.use(express.json())
app.use(cors())


app.use('/api/v1/users',UserRoute)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello Rodro Boss!')
})

export default app;


