import { VercelRequest, VercelResponse } from '@vercel/node'
import JSONHandler from '../../handlers/JSONHandler'

export default function handleRequest (
  req: VercelRequest,
  res: VercelResponse
) {
  switch (req.url) {
    case '/':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('Welcome to main page')
      break
    case '/json':
      JSONHandler(req, res)
  }
}
