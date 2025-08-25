import { Book } from "./book.model";
import { IBook } from "./book.interface";

export const BookService = {
  async createBook(payload: IBook) {
    const book = await Book.create(payload);
    return book;
  },

  async getAllBooks(query: any) {
    const { filter, sortBy = "createdAt", sort = "asc", limit = 10 } = query;

    const findQuery: any = {};
    if (filter) {
      findQuery.genre = filter;
    }

    const books = await Book.find(findQuery)
      .sort({ [sortBy]: sort === "desc" ? -1 : 1 })
      .limit(Number(limit));

    return books;
  },

  async getBookById(id: string) {
    return Book.findById(id);
  },

  async updateBook(id: string, payload: Partial<IBook>) {
    const book = await Book.findByIdAndUpdate(id, payload, { new: true });
    return book;
  },

  async deleteBook(id: string) {
    return Book.findByIdAndDelete(id);
  },
};
