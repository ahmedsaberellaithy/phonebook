import express, { NextFunction, Request, Response } from "express";
import { Express } from "express-serve-static-core";

export async function createServer(): Promise<Express> {
  const server = express();
  server.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.send("hi");
  });
  return server;
}
