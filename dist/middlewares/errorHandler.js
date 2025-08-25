"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    res.status(400).json({
        message: err.message || "Something went wrong",
        success: false,
        error: err,
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map