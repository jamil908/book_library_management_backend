import { Book } from "../book/book.model";
import { Borrow } from "./borrow.model";

export const BorrowService = {
  async borrowBook(data: { bookId: string; quantity: number; dueDate: string }) {
    const { bookId, quantity, dueDate } = data;

    // 1. Find the book
    const book = await Book.findById(bookId);
    if (!book) {
      throw { statusCode: 404, message: "Book not found" };
    }

    // 2. Check availability
    if (book.copies < quantity) {
      throw {
        statusCode: 400,
        message: `Only ${book.copies} copies available`,
      };
    }

    // 3. Create borrow record (pre-save hook will update book copies)
    const borrow = await Borrow.create({
      book: bookId,
      quantity,
      dueDate,
    });

    // ⚠️ NOTE: Don't manually update book copies here!
    // Your pre-save hook in borrow.model.ts already does this.
    // Updating here would cause double deduction!

    return borrow;
  },

  async getBorrowSummary() {
    // Aggregate borrows by book
    const summary = await Borrow.aggregate([
      {
        $lookup: {
          from: "books", // ⚠️ Make sure this matches your collection name
          localField: "book",
          foreignField: "_id",
          as: "bookDetails",
        },
      },
      { $unwind: "$bookDetails" },
      {
        $group: {
          _id: "$book",
          bookTitle: { $first: "$bookDetails.title" },
          isbn: { $first: "$bookDetails.isbn" },
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $project: {
          _id: 1,
          bookTitle: 1,
          isbn: 1,
          totalQuantity: 1,
        },
      },
    ]);

    return summary;
  },
};