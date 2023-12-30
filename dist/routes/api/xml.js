"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiUtils_1 = require("../../lib/apiUtils");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.set('Content-Type', 'application/xml');
    res
        .status(200)
        .send('<response><message>GET request received</message></response>');
});
router.post('/', (req, res) => {
    if (req.is('xml')) {
        res.set('Content-Type', 'application/xml');
        res.send('<response><message>XML data received</message></response>');
    }
    else {
        res.status(400).send('Invalid content type. Please send XML.');
    }
});
router.delete('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.set('Content-Type', 'application/xml');
    res.send(`<response><message>User data for user ${userId} deleted successfully</message></response>`);
});
router.options('/', (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.send('<response><message>Allowed methods: GET, POST, DELETE, PATCH, OPTIONS</message></response>');
});
router.patch('/user/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    if (req.is('xml')) {
        try {
            const xmlData = yield (0, apiUtils_1.getBody)(req);
            console.log(xmlData);
            const updatedUserData = {
                name: xmlData.user.name[0],
                email: xmlData.user.email ? xmlData.user.email[0] : undefined,
                phoneNumber: xmlData.user.phoneNumber
                    ? xmlData.user.phoneNumber[0]
                    : undefined,
                address: xmlData.user.address ? xmlData.user.address[0] : undefined,
            };
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
        }
        catch (error) {
            console.error('XML parsing error:', error);
            res.status(500).send('Error parsing XML');
        }
    }
    else {
        res.status(400).send('Invalid content type. Please send XML.');
    }
}));
exports.default = router;
//# sourceMappingURL=xml.js.map