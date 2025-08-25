import { Request, Response } from "express";
import { BookService } from "./book.service";
import sendResponse from "../../utils/sendResponse";
// import sendResponse from "../../utils/sendResponse"

export const BookController = {
  async createBook(req: Request, res: Response) {
    const result = await BookService.createBook(req.body);
    sendResponse(res, true, "Book created successfully", result);
  },

  async getAllBooks(req: Request, res: Response) {
    const result = await BookService.getAllBooks(req.query);
    sendResponse(res, true, "Books retrieved successfully", result);
  },

  async getBookById(req: Request, res: Response) {
    const result = await BookService.getBookById(req.params.bookId);
    sendResponse(res, true, "Book retrieved successfully", result);
  },

  async updateBook(req: Request, res: Response) {
    const result = await BookService.updateBook(req.params.bookId, req.body);
    sendResponse(res, true, "Book updated successfully", result);
  },

  async deleteBook(req: Request, res: Response) {
    await BookService.deleteBook(req.params.bookId);
    sendResponse(res, true, "Book deleted successfully", null);
  },
};
