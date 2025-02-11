import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm"
import { Length, Matches, MinLength } from "class-validator"

export enum UserRole {
    ADMIN = "admin",
    USER = "user"
}


@Entity()
@Unique(["username"])
export class UserEntity {
    @PrimaryGeneratedColumn()
    idUsuario!: number

    @Column({type: "varchar"})
    @Length(8, 20, { message: "Username debe contener entre 8 y 20 caracteres." })
    @Matches(/^(?=[A-Za-z0-9]*[A-Z])(?=[A-Za-z0-9]*\d)[A-Za-z0-9]+$/, {//expresion regular para validar letras, numeros, que tenga al menos un numero y letra mayusc
        message: "Username debe contener letras y numeros, al menos una letra en mayuscula y un numero"
    })
    username!: string

    @Column({type: "varchar"})
    @MinLength(8, { message: "La contrasena debe tener al menos 8 caracteres." })
    @Matches(/^(?=[^ ]*[A-Z])(?=[^ ]*[\W_])[^ ]+$/, {
        message: "La contrasena no debe tener espacios en blanco y debe tener al menos una letra en mayuscula y un signo."
    })
    password!: string

    @Column({type: "varchar"})
    mail!: string

    @Column({type: "varchar"})
    sessionActive!: string

    @Column({type: "int"})
    idPersona!: number

    @Column({type: "varchar"})
    status!: string;
}