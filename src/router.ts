import { VercelRequest, VercelResponse } from '@vercel/node'
import { handleRequest } from './handleRequest'

export function router (req: VercelRequest, res: VercelResponse, parsedUrl: { pathname: string }) {
  const { pathname } = parsedUrl
  handleRequest(req, res, pathname)
}
