"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// import sendResponse from "../../utils/sendResponse"
exports.BookController = {
    async createBook(req, res) {
        const result = await book_service_1.BookService.createBook(req.body);
        (0, sendResponse_1.default)(res, true, "Book created successfully", result);
    },
    async getAllBooks(req, res) {
        const result = await book_service_1.BookService.getAllBooks(req.query);
        (0, sendResponse_1.default)(res, true, "Books retrieved successfully", result);
    },
    async getBookById(req, res) {
        const result = await book_service_1.BookService.getBookById(req.params.bookId);
        (0, sendResponse_1.default)(res, true, "Book retrieved successfully", result);
    },
    async updateBook(req, res) {
        const result = await book_service_1.BookService.updateBook(req.params.bookId, req.body);
        (0, sendResponse_1.default)(res, true, "Book updated successfully", result);
    },
    async deleteBook(req, res) {
        await book_service_1.BookService.deleteBook(req.params.bookId);
        (0, sendResponse_1.default)(res, true, "Book deleted successfully", null);
    },
};
//# sourceMappingURL=book.controller.js.map