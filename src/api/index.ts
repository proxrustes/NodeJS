import handleRequest from './router/router';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default function(req: VercelRequest, res: VercelResponse) {
  handleRequest(req, res);
}