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
router.get("/", (req, res) => {
    res.json({ message: "GET request received" });
});
router.post("/", (req, res) => {
    if (req.is('json')) {
        processJsonData(req, res);
    }
    else {
        res.status(400).send("Invalid content type. Please send JSON.");
    }
});
exports.default = router;
function processJsonData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield (0, apiUtils_1.getBody)(req);
        if (!userData.name || !userData.email) {
            return res.status(400).json({ message: "Missing name or email in user data." });
        }
        res.status(200).json({ message: "User data processed successfully", userData });
    });
}
//# sourceMappingURL=json.js.map