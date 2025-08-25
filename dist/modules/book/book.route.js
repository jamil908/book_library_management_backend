"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = require("express");
const book_controller_1 = require("./book.controller");
const router = (0, express_1.Router)();
router.post("/", book_controller_1.BookController.createBook);
router.get("/", book_controller_1.BookController.getAllBooks);
router.get("/:bookId", book_controller_1.BookController.getBookById);
router.put("/:bookId", book_controller_1.BookController.updateBook);
router.delete("/:bookId", book_controller_1.BookController.deleteBook);
exports.BookRoutes = router;
//# sourceMappingURL=book.route.js.map