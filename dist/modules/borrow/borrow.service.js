"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowService = void 0;
const borrow_model_1 = require("./borrow.model");
exports.BorrowService = {
    async borrowBook(payload) {
        const borrow = await borrow_model_1.Borrow.create(payload);
        return borrow;
    },
    async getBorrowSummary() {
        const summary = await borrow_model_1.Borrow.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" },
                },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookDetails",
                },
            },
            { $unwind: "$bookDetails" },
            {
                $project: {
                    _id: 0,
                    book: {
                        title: "$bookDetails.title",
                        isbn: "$bookDetails.isbn",
                    },
                    totalQuantity: 1,
                },
            },
        ]);
        return summary;
    },
};
//# sourceMappingURL=borrow.service.js.map