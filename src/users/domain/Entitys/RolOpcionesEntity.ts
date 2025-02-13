import { Column, Entity } from "typeorm";

@Entity()
export class RolOpcionesEntity {
    @Column()
    rol_idRol!: number;
    @Column()
    opcion_idOpcion!: number;
}