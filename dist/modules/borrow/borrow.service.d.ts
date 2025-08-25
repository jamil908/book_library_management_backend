export declare const BorrowService: {
    borrowBook(payload: any): Promise<import("mongoose").Document<unknown, {}, import("./borrow.interface").IBorrow, {}, {}> & import("./borrow.interface").IBorrow & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getBorrowSummary(): Promise<any[]>;
};
//# sourceMappingURL=borrow.service.d.ts.map