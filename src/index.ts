import { VercelRequest, VercelResponse } from '@vercel/node';
import handleRequest from './api/router/router';

export default function (req: VercelRequest, res: VercelResponse) {
  handleRequest(req, res);
}
