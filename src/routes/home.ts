import { Router, Request, Response } from 'express'

const router = Router()

router.get("/", (req: Request, res: Response) => {
    res.json({ message: "GET request received" })
})

router.post("/", (req: Request, res: Response) => {
    res.json({ message: "POST request received" })
})

router.put("/", (req: Request, res: Response) => {
    res.json({ message: "PUT request received" })
})

router.delete("/", (req: Request, res: Response) => {
    res.json({ message: "DELETE request received" })
})

export default router;
