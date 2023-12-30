import { Router } from 'express';
import jsonRoute from './json';
import xmlRoute from './xml';

const router = Router();

router.use('/json', jsonRoute);
router.use('/xml', xmlRoute);

export default router;
