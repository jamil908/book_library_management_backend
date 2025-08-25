"use strict";
// import app from "./app";
// import { connectDB } from "./config/db";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
let server;
const startServer = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        console.log('connected to db');
        server = app_1.default.listen(process.env.PORT, () => {
            console.log(`server is listening on  port ${process.env.PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
(async () => {
    await startServer();
    // await seedSuperAdmin()
})();
//# sourceMappingURL=server.js.map