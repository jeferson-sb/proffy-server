import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routes from './routes'

const app = express()
const port = 3333

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api', routes)

app.listen(port, () => console.log(`⬆️ Server is up and running on port ${port}`))
