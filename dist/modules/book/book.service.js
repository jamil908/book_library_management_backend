"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_model_1 = require("./book.model");
exports.BookService = {
    async createBook(payload) {
        const book = await book_model_1.Book.create(payload);
        return book;
    },
    async getAllBooks(query) {
        const { filter, sortBy = "createdAt", sort = "asc", limit = 10 } = query;
        const findQuery = {};
        if (filter) {
            findQuery.genre = filter;
        }
        const books = await book_model_1.Book.find(findQuery)
            .sort({ [sortBy]: sort === "desc" ? -1 : 1 })
            .limit(Number(limit));
        return books;
    },
    async getBookById(id) {
        return book_model_1.Book.findById(id);
    },
    async updateBook(id, payload) {
        const book = await book_model_1.Book.findByIdAndUpdate(id, payload, { new: true });
        return book;
    },
    async deleteBook(id) {
        return book_model_1.Book.findByIdAndDelete(id);
    },
};
//# sourceMappingURL=book.service.js.map