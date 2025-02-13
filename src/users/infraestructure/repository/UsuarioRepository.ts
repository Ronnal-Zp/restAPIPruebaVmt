import { DataSource } from "typeorm";
import { UsuarioDto } from "../../domain/Dtos/UsuarioDto";
import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";
import { UsuarioEntity } from "../../domain/Entitys/UsuarioEntity";

export class UsuarioRepository implements IUsuarioRepository {

    constructor(
        private readonly clientSQL: DataSource
    ) { }

    getById(id: string): Promise<UsuarioDto | null> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<UsuarioDto[] | null> {
        // return this.clientSQL.manager.find(UsuarioDto)
        const userRepository= this.clientSQL.getRepository(UsuarioEntity);
        return await userRepository.find();
    }
    getByUserName(userName: string): Promise<UsuarioDto | null> {
        throw new Error("Method not implemented.");
    }
    getByEmail(email: string): Promise<UsuarioDto | null> {
        throw new Error("Method not     implemented.");
    }

}
