# 📚 Library Management API (Node.js + Express + MongoDB)

A simple backend API for managing books and borrow records in a library system.  
Built with **Express**, **TypeScript**, and **Mongoose**.

---

## 🚀 Features

- 📖 **Book Management**
  - Add, update, delete, and fetch books
  - Tracks available copies
  - Auto-handles availability status

- 📦 **Borrow Management**
  - Borrow books with quantity & due date
  - Automatically decreases book copies
  - Returns summary of borrowed books

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, TypeScript  
- **Database:** MongoDB + Mongoose  
- **Utilities:** dotenv, nodemon, cors, express-async-handler

---

## 📁 Folder Structure

src/
├── modules/
│ ├── book/
│ │ ├── book.controller.ts
│ │ ├── book.interface.ts
│ │ ├── book.model.ts
│ │ └── book.routes.ts
│ │ ├── book.service.ts
│ └── borrow/
│ ├── borrow.controller.ts
│ ├── borrow.interface.ts
│ ├── borrow.model.ts
│ └── borrow.routes.ts
│ ├── borrow.service.ts
├── utils/
│ └── sendResponse.ts
├── app.ts
└── server.ts


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

bash
git clone https://github.com/your-username/library-api.git
cd library-api

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file in the root:

PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/library

4️⃣ Run the development server
npm run dev


The server will start at:
👉 http://localhost:5000

🧠 API Endpoints
📚 Book Routes
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/:id	Get a book by ID
POST	/api/books	Add a new book
PUT	/api/books/:id	Update book info
DELETE	/api/books/:id	Delete a book
## ❌ Generic Error Response

**Structure:**

```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "copies": {
        "message": "Copies must be a positive number",
        "name": "ValidatorError",
        "properties": {
          "message": "Copies must be a positive number",
          "type": "min",
          "min": 0
        },
        "kind": "min",
        "path": "copies",
        "value": -5
      }
    }
  }
}
✨ Main Section (50 Marks)
1️⃣ Create Book
POST /api/books

Request:

json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}
Response:

json
Copy code
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "64f123abc4567890def12345",
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "description": "An overview of cosmology and black holes.",
    "copies": 5,
    "available": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
2️⃣ Get All Books
GET /api/books

Response:

json
{
  "success": true,
  "message": "Books retrieved successfully",
  "data": [
    {
      "_id": "64f123abc4567890def12345",
      "title": "The Theory of Everything",
      "author": "Stephen Hawking",
      "genre": "SCIENCE",
      "isbn": "9780553380163",
      "description": "An overview of cosmology and black holes.",
      "copies": 5,
      "available": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    }
  ]
}
3️⃣ Get Book by ID
GET /api/books/:bookId

Response:

{
  "success": true,
  "message": "Book retrieved successfully",
  "data": {
    "_id": "64f123abc4567890def12345",
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "description": "An overview of cosmology and black holes.",
    "copies": 5,
    "available": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
4️⃣ Update Book
PUT /api/books/:bookId

Request:

{
  "copies": 50
}
Response:

{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "_id": "64f123abc4567890def12345",
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "description": "An overview of cosmology and black holes.",
    "copies": 50,
    "available": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-20T08:30:00.000Z"
  }
}
5️⃣ Delete Book
DELETE /api/books/:bookId

Response:

{
  "success": true,
  "message": "Book deleted successfully",
  "data": null
}
6️⃣ Borrow a Book
POST /api/borrow/:bookId

Business Logic:

Verify that the book has enough available copies.

Deduct the requested quantity from the book’s copies.

If copies reach 0 → set available = false.

Save borrow record with book, quantity, and dueDate.

Request:

json
{
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
Response:

json
{
  "success": true,
  "message": "Book borrowed successfully",
  "data": {
    "_id": "64bc4a0f9e1c2d3f4b5a6789",
    "book": "64ab3f9e2a4b5c6d7e8f9012",
    "quantity": 2,
    "dueDate": "2025-07-18T00:00:00.000Z",
    "createdAt": "2025-06-18T07:12:15.123Z",
    "updatedAt": "2025-06-18T07:12:15.123Z"
  }
}
7️⃣ Borrowed Books Summary (Aggregation)
GET /api/borrow/summary

Purpose:

Return total borrowed quantity per book

Include book title and ISBN

Implemented using MongoDB Aggregation Pipeline

Response:

json
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    },
    {
      "book": {
        "title": "1984",
        "isbn": "9780451524935"
      },
      "totalQuantity": 3
    }
  ]
}
🧪 Testing with Postman
Set Base URL: http://localhost:5000/api

Add routes for /books and /borrows

Use JSON body and Content-Type: application/json

Test book creation first before borrowing

🧹 Scripts
Command	Description
npm run dev	Run server in development mode
npm run build	Build TypeScript files
npm start	Run built server (production)
🧩 Future Enhancements

🔐 Authentication & role-based access (admin, member)

🔄 Book return system

📊 Overdue and fine calculation

🧾 Activity logs

🧑‍💻 Author

Md Jamil Hossain Rafi
📍 Chittagong, Bangladesh
💻 GitHub
 | Portfolio