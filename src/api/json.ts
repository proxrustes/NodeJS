// api/json.ts
import { VercelRequest, VercelResponse } from '@vercel/node'

export default function (req: VercelRequest, res: VercelResponse) {
  res.json({ message: 'This is a JSON response' })
}
