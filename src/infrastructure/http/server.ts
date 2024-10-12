import 'dotenv/config'

import express from 'express'

const app = express()

app.listen(process.env.PORT, () =>
  console.log(`Serveur run on port ${process.env.PORT}`)
)
