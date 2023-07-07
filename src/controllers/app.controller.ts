import { Router } from 'express'
export const appRouter = Router()

appRouter.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from root!'
  })
})

appRouter.get('/path', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from path!'
  })
})
