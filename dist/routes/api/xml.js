"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.json({ message: "GET request received" });
});
router.post("/", (req, res) => {
    if (req.is('xml')) {
        res.set('Content-Type', 'application/xml');
        res.send('<response><message>XML data received</message></response>');
    }
    else {
        res.status(400).send("Invalid content type. Please send XML.");
    }
});
exports.default = router;
//# sourceMappingURL=xml.js.map