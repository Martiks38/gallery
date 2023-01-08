import express from 'express'
import { PORT } from './utils/env.js'

const app = express()
const port = PORT || 0

app.set('PORT', port)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => res.send('hello world'))
app.use('/static', express.static('public'))

export default app
