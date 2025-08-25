import { Request, Response } from "express";
import { BorrowService } from "./borrow.service";
import sendResponse from "../../utils/sendResponse";

export const BorrowController = {
  async borrowBook(req: Request, res: Response) {
    const result = await BorrowService.borrowBook(req.body);
    sendResponse(res, true, "Book borrowed successfully", result);
  },

  async getBorrowSummary(req: Request, res: Response) {
    const result = await BorrowService.getBorrowSummary();
    sendResponse(res, true, "Borrowed books summary retrieved successfully", result);
  },
};
