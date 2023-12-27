import { VercelRequest, VercelResponse } from '@vercel/node'

export function XMLHandler (req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/xml' })
    res.end('<response><message>XML response</message></response>')
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Method Not Allowed' }))
  }
}
