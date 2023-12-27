import { VercelRequest, VercelResponse } from '@vercel/node'

export function IndexHandler (req: VercelRequest, res: VercelResponse) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Welcome to the homepage!')
}
