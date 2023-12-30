import { Router, Request, Response } from 'express';
import { getBody } from "../../lib/apiUtils";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.set('Content-Type', 'application/xml');
    res.status(200).send('<response><message>GET request received</message></response>');
});

router.post("/", (req: Request, res: Response) => {
    if (req.is('xml')) {
        res.set('Content-Type', 'application/xml');
        res.send('<response><message>XML data received</message></response>');
    } else {
        res.status(400).send("Invalid content type. Please send XML.");
    }
});

router.delete("/user/:userId", (req: Request, res: Response) => {
    const userId = req.params.userId;
    res.set('Content-Type', 'application/xml');
    res.send(`<response><message>User data for user ${userId} deleted successfully</message></response>`);
});

router.options("/", (req: Request, res: Response) => {
    res.set('Content-Type', 'application/xml')
    res.send('<response><message>Allowed methods: GET, POST, DELETE, PATCH, OPTIONS</message></response>');
});


router.patch("/user/:userId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    if (req.is('xml')) {
        try {
            const xmlData  = await getBody(req)
            console.log(xmlData)
            const updatedUserData = {
                name: xmlData.user.name[0],
                email: xmlData.user.email ? xmlData.user.email[0] : undefined,
                phoneNumber: xmlData.user.phoneNumber ? xmlData.user.phoneNumber[0] : undefined,
                address: xmlData.user.address ? xmlData.user.address[0] : undefined
            }
            const responseXml = `
                <response>
                    <message>User data for user ${userId} updated successfully</message>
                    <updatedData>
                        <userId>${userId}</userId>
                        <name>${updatedUserData.name}</name>
                        <email>${updatedUserData.email}</email>
                        <phoneNumber>${updatedUserData.phoneNumber}</phoneNumber>
                        <address>${updatedUserData.address}</address>
                    </updatedData>
                </response>
            `;

            res.set('Content-Type', 'application/xml');
            res.send(responseXml);
        } catch (error) {
            console.error("XML parsing error:", error)
            res.status(500).send("Error parsing XML");
        }
    } else {
        res.status(400).send("Invalid content type. Please send XML.");
    }
});

export default router;
