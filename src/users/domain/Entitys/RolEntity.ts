import { Column, Entity } from "typeorm";

@Entity()
export class RolEntity {
    @Column()
    idRol?: number;
    @Column()
    rolName!: string;
}
         