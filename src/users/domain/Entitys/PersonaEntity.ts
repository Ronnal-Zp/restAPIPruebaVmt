import { Column, Entity } from "typeorm";

@Entity()
export class PersonaEntity {
    @Column()
    idPersona?: number;
    @Column()
    nombres!: string;
    @Column()
    apellidos!: string;
    @Column()
    identificacion!: number;
    @Column()
    fechaNacimiento!: string;
}