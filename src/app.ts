import express from "express";
import dotenv from "dotenv";
import { BookRoutes } from "./modules/book/book.route";
import { BorrowRoutes } from "./modules/borrow/borrow.route";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use("/api/books", BookRoutes);
app.use("/api/borrow", BorrowRoutes);

// Error handler
app.use(errorHandler);

export default app;
