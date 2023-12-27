// api/xml.ts
import { VercelRequest, VercelResponse } from '@vercel/node'

export default function (req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'text/xml')
  res.status(200).send('<note><body>This is an XML response</body></note>')
}
