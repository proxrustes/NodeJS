import { Router, Request, Response } from 'express'

const router = Router()

router.get("/", (req: Request, res: Response) => {
    res.json({ message: "GET request received" })
})

router.post("/", (req: Request, res: Response) => {
    if (req.is('xml')) {
        res.set('Content-Type', 'application/xml');
        res.send('<response><message>XML data received</message></response>');
    } else {
        res.status(400).send("Invalid content type. Please send XML.");
    }
});
export default router;
