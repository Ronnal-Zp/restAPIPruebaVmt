import { UsuarioDto } from "../domain/Dtos/UsuarioDto";
import { IUsuarioManager } from "../domain/interfaces/IUsuarioManager";
import { IUsuarioRepository } from "../domain/interfaces/IUsuarioRepository";

export class UsuarioManager implements IUsuarioManager  {

    constructor(
        private readonly usuarioRepository: IUsuarioRepository
    ) {}

    getById(id: string): Promise<UsuarioDto | null> {
        return this.usuarioRepository.getById(id);
    }

    getAll(): Promise<UsuarioDto[] | null> {
        // return this.usuarioRepository.getAll();
        return this.usuarioRepository.getAll();
    }

}

