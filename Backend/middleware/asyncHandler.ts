import type { NextFunction, Request, Response } from "express";

type AsyncRouteHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

// Express 4 doesn't forward rejected promises from async handlers to the error
// middleware on its own — this wrapper catches them and calls next(err) so a
// DB error (etc.) returns a proper 500 instead of hanging the request.
export function asyncHandler(handler: AsyncRouteHandler) {
  return (req: Request, res: Response, next: NextFunction) => {
    handler(req, res, next).catch(next);
  };
}
