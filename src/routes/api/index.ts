import { Router } from 'express';
import jsonRoute from './json';

const router = Router();

router.use('/json', jsonRoute);

export default router;
