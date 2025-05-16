"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const app = (0, express_1.default)();
const PORT = 3000;
function getLocalNetworkAddress() {
    const interfaces = os_1.default.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name] || []) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}
const networkAddress = getLocalNetworkAddress();
app.get('/', (_req, res) => {
    res.send('Hello from Express + TypeScript');
});
app.listen(PORT, () => {
    console.log(`Local:   http://localhost:${PORT}`);
    console.log(`Network: http://${networkAddress}:${PORT}`);
});
