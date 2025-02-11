import { Router } from "express";
import { UserController } from "./controller";


export class UserRoutes {

    static routes(): Router {
        const router = Router();
        const todosController  = new UserController();

        router.get('/', todosController.getAll);
        // router.get('/:id', todosController.getById);
        // router.post('/', todosController.create);
        // router.put('/:id', todosController.update);
        // router.delete('/:id', todosController.delete);

        return router;
    }

}