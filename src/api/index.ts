import { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse): void {
  res.status(200).send('Welcome to the main page!');
}
