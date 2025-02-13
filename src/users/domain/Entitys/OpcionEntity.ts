import { Column, Entity } from "typeorm";

@Entity()
export class OpcionEntity {
    @Column()
    idOpcion!: number;
    @Column()
    nombreOpcion!: string;
}
