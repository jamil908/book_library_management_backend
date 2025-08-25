"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrow = void 0;
const mongoose_1 = require("mongoose");
const book_model_1 = require("../book/book.model");
const borrowSchema = new mongoose_1.Schema({
    book: { type: mongoose_1.Schema.Types.ObjectId, ref: "Book", required: true },
    quantity: { type: Number, required: true, min: [1, "Quantity must be at least 1"] },
    dueDate: { type: Date, required: true },
}, { timestamps: true });
// Pre-save middleware → update book copies
borrowSchema.pre("save", async function (next) {
    const book = await book_model_1.Book.findById(this.book);
    if (!book)
        throw new Error("Book not found");
    if (book.copies < this.quantity)
        throw new Error("Not enough copies available");
    book.copies -= this.quantity;
    await book.save();
    // Update availability using static method
    await book_model_1.Book.updateAvailability(book._id);
    next();
});
exports.Borrow = (0, mongoose_1.model)("Borrow", borrowSchema);
//# sourceMappingURL=borrow.model.js.map