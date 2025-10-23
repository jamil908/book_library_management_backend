import { Request, Response } from "express";
import { BorrowService } from "./borrow.service";
import sendResponse from "../../utils/sendResponse";

export const BorrowController = {
  async borrowBook(req: Request, res: Response) {
    try {
      const { bookId } = req.params; // ✅ Get bookId from URL params
      const { quantity, dueDate } = req.body; // ✅ Get data from body

      const result = await BorrowService.borrowBook({
        bookId,
        quantity,
        dueDate,
      });

      sendResponse(res, true, "Book borrowed successfully", result);
    } catch (error: any) {
      res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Failed to borrow book",
      });
    }
  },

  async getBorrowSummary(req: Request, res: Response) {
    try {
      const result = await BorrowService.getBorrowSummary();
      sendResponse(res, true, "Borrowed books summary retrieved successfully", result);
    } catch (error: any) {
      res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Failed to retrieve summary",
      });
    }
  },
};
