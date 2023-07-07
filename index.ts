import serverless from 'serverless-http'
import express from 'express'
import { appRouter } from './src/controllers/app.controller'
const app = express()

app.use('/', appRouter)

module.exports.handler = serverless(app)
