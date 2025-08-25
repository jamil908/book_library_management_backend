"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sendResponse;
function sendResponse(res, success, message, data) {
    res.json({
        success,
        message,
        data,
    });
}
//# sourceMappingURL=sendResponse.js.map