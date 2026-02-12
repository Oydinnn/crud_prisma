import { NextFunction } from "express";

export function Log(req: Request, res: Response, next: NextFunction){
  console.log('function log');
  next()
}