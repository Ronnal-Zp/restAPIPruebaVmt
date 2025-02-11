import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm"
import { IsInt, Length, Matches } from "class-validator"


@Entity()
@Unique(["identificacion"])
export class UserEntity {
    @PrimaryGeneratedColumn()
    idPersona!: number

    @Column({type: "varchar"})
    @Length(8, 20, { message: "Los nombres debe contener entre 8 y 20 caracteres." })
    nombres!: string

    @Column({type: "varchar"})
    @Length(8, 20, { message: "Los apellidos debe contener entre 8 y 20 caracteres." })
    apellidos!: string

    @Column({type: "int"})
    @Length(10, 10, { message: "La identifiacion no tiene 10 caracteres." })
    @IsInt({ message: "Identification debe ser un numero." })
    @Matches(/^(?!.*(\d)\1{3})\d{10}$/, {
        message: "Identificacion invalida."
    })
    identificacion!: number;

    @Column({type: "date"})
    fechaNacimiento!: string
}