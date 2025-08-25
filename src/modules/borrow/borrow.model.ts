import { Schema, model } from "mongoose";
import { IBorrow } from "./borrow.interface";
import { Book } from "../book/book.model";

const borrowSchema = new Schema<IBorrow>(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    quantity: { type: Number, required: true, min: [1, "Quantity must be at least 1"] },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true }
);

// Pre-save middleware → update book copies
borrowSchema.pre("save", async function (next) {
  const book = await Book.findById(this.book);
  if (!book) throw new Error("Book not found");

  if (book.copies < this.quantity) throw new Error("Not enough copies available");

  book.copies -= this.quantity;
  await book.save();

  // Update availability using static method
  await (Book as any).updateAvailability(book._id);

  next();
});

export const Borrow = model<IBorrow>("Borrow", borrowSchema);
