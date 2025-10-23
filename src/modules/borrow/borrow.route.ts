import { Router } from "express";
import { BorrowController } from "./borrow.controller";

const router = Router();

// ✅ GET /api/borrows/summary - MUST come BEFORE /:bookId route
router.get("/summary", BorrowController.getBorrowSummary);

// ✅ POST /api/borrows/:bookId - Borrow a book
router.post("/:bookId", BorrowController.borrowBook);

export const BorrowRoutes = router;
