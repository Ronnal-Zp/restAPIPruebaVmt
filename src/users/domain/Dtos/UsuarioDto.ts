import { IsEmail, IsInt, IsNotEmpty, IsOptional, Length, Matches, MinLength } from "class-validator"


export class UsuarioDto {
    @IsOptional()
    @IsInt({ message: "El ID debe ser un numero entero." })
    idUsuario?: number;

    @IsNotEmpty({ message: "El username es obligatorio." })
    @Length(8, 20, { message: "Username debe contener entre 8 y 20 caracteres." })
    @Matches(/^(?=[A-Za-z0-9]*[A-Z])(?=[A-Za-z0-9]*\d)[A-Za-z0-9]+$/, {//expresion regular para validar letras, numeros, que tenga al menos un numero y letra mayusc
        message: "Username debe contener letras y numeros, al menos una letra en mayuscula y un numero"
    })
    username!: string

    @IsNotEmpty({ message: "El password es obligatorio." })
    @MinLength(8, { message: "La contrasena debe tener al menos 8 caracteres." })
    @Matches(/^(?=[^ ]*[A-Z])(?=[^ ]*[\W_])[^ ]+$/, {
        message: "La contrasena no debe tener espacios en blanco y debe tener al menos una letra en mayuscula y un signo."
    })
    password!: string

    @IsNotEmpty({ message: "El email es obligatorio." })
    @IsEmail()
    mail!: string
    
    sessionActive?: string

    @IsInt({ message: "El ID persona debe ser un numero entero." })
    idPersona!: number

    status!: string;
}
