
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    idUsuario?: number;
    @Column()
    username!: string;
    @Column()
    password!: string;
    @Column()
    mail!: string;
    @Column()
    sessionActive?: string;
    @Column()
    idPersona!: number;
    @Column()
    status!: string;
}
