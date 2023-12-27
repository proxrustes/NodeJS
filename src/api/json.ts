import { VercelRequest, VercelResponse } from '@vercel/node';
import JSONHandler from '../handlers/JSONHandler';

export default function (req: VercelRequest, res: VercelResponse): void {
  JSONHandler(req, res);
}
