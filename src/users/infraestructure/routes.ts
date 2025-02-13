import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { UsuarioManager } from "../application/UsuarioManager";
import { UsuarioRepository } from "./repository/UsuarioRepository";
import { PostgreSQLRepository } from "./PostgreSQLRepository";


export class UserRoutes {

    static routes(): Router {
        const router = Router();
        const usuarioRepository = new UsuarioRepository(PostgreSQLRepository.connect());
        const usuarioManager = new UsuarioManager(usuarioRepository);
        const todosController  = new UserController(usuarioManager);

        router.get('/', todosController.getAll);
        // router.get('/:id', todosController.getById);
        // router.post('/', todosController.create);
        // router.put('/:id', todosController.update);
        // router.delete('/:id', todosController.delete);

        return router;
    }

}