import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './middlewares/globalErrorHandler'
import router from './routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)

export default app
