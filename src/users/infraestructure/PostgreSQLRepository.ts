import { DataSource } from "typeorm";
import { envs } from '../../envs';
import { OpcionEntity } from "../domain/Entitys/OpcionEntity";
import { PersonaEntity } from "../domain/Entitys/PersonaEntity";
import { RolUsuariosEntity } from "../domain/Entitys/RolUsuariosEntity";
import { RolOpcionesEntity } from "../domain/Entitys/RolOpcionesEntity";
import { UsuarioEntity } from "../domain/Entitys/UsuarioEntity";
import { RolEntity } from "../domain/Entitys/RolEntity";

export class PostgreSQLRepository {

    private _client!: DataSource;

    static connect() {
        return new DataSource({
            type: "postgres",
            url:  envs.POSTGRES_URL,
            port: envs.POSTGRES_PORT,
            username: envs.POSTGRES_USER,
            password: envs.POSTGRES_PASSWORD,
            database: envs.POSTGRES_DB,
            entities: [
                OpcionEntity,
                PersonaEntity,
                RolEntity,
                RolOpcionesEntity,
                RolUsuariosEntity,
                UsuarioEntity
            ],
            // entities: ["src/**/*.ts"],
            synchronize: true,
            logging: true,
        })
    }


}

