import { Response } from "express";

export default function sendResponse(res: Response, success: boolean, message: string, data: any) {
  res.json({
    success,
    message,
    data,
  });
}
