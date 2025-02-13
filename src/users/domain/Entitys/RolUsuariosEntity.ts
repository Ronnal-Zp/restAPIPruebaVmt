import { Column, Entity } from "typeorm";

@Entity()
export class RolUsuariosEntity {
    @Column()
    rol_idRol!: number;
    @Column()
    user_idUsuario!: number;
}
