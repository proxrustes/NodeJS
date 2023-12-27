"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.json({ message: "GET request received" });
});
router.post("/", (req, res) => {
    res.json({ message: "POST request received" });
});
router.put("/", (req, res) => {
    res.json({ message: "PUT request received" });
});
router.delete("/", (req, res) => {
    res.json({ message: "DELETE request received" });
});
exports.default = router;
//# sourceMappingURL=home.js.map