import { VercelRequest, VercelResponse } from '@vercel/node'
import { IndexHandler } from './routeHandlers/IndexHandler'
import { JSONHandler } from './routeHandlers/JSONHandler'
import { XMLHandler } from './routeHandlers/XMLHandler'

export function handleRequest (req: VercelRequest, res: VercelResponse, pathname: string) {

  switch (pathname) {
    case '/':
      IndexHandler(req, res)
      break
    case '/json':
      JSONHandler(req, res)
      break
    case '/xml':
      XMLHandler(req, res)
      break
    default:
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Not Found' }))
  }
}
