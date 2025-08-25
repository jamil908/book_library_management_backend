"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowController = void 0;
const borrow_service_1 = require("./borrow.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
exports.BorrowController = {
    async borrowBook(req, res) {
        const result = await borrow_service_1.BorrowService.borrowBook(req.body);
        (0, sendResponse_1.default)(res, true, "Book borrowed successfully", result);
    },
    async getBorrowSummary(req, res) {
        const result = await borrow_service_1.BorrowService.getBorrowSummary();
        (0, sendResponse_1.default)(res, true, "Borrowed books summary retrieved successfully", result);
    },
};
//# sourceMappingURL=borrow.controller.js.map