"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRoutes = void 0;
const express_1 = require("express");
const borrow_controller_1 = require("./borrow.controller");
const router = (0, express_1.Router)();
router.post("/", borrow_controller_1.BorrowController.borrowBook);
router.get("/", borrow_controller_1.BorrowController.getBorrowSummary);
exports.BorrowRoutes = router;
//# sourceMappingURL=borrow.route.js.map