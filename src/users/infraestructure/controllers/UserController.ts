import { Request, Response } from "express";
import { IUsuarioManager } from "../../domain/interfaces/IUsuarioManager";

export class UserController {

    constructor(
        private readonly userManager: IUsuarioManager
    ) { }

    public getAll = async (req: Request, res: Response) => {
        const users = await this.userManager.getAll()
        res.json(users);
    }
 
}
