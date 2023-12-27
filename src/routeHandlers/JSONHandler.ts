import { VercelRequest, VercelResponse } from '@vercel/node'

export function JSONHandler (req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'JSON response' }))
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Method Not Allowed' }))
  }
}
