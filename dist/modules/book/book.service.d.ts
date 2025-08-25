import { IBook } from "./book.interface";
export declare const BookService: {
    createBook(payload: IBook): Promise<import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllBooks(query: any): Promise<(import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getBookById(id: string): Promise<(import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    updateBook(id: string, payload: Partial<IBook>): Promise<(import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteBook(id: string): Promise<(import("mongoose").Document<unknown, {}, IBook, {}, {}> & IBook & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=book.service.d.ts.map