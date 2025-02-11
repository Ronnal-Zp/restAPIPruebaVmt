import { Request, Response } from "express";

export class UserController {

    constructor() { }

    public getAll = async (req: Request, res: Response) => {
        res.json([
            {id: 1}
        ])
    }
 
}
