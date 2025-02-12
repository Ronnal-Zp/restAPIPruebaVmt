import { IsInt, IsNotEmpty, IsOptional, Length, Matches } from "class-validator";


export class PersonaDto {
    @IsOptional()
    @IsInt({ message: "El ID debe ser un numero entero." })
    idPersona?: number;

    @IsNotEmpty({ message: "Los nombres son obligatorios." })
    @Length(8, 20, { message: "Los nombres debe contener entre 8 y 20 caracteres." })
    nombres!: string;

    @IsNotEmpty({ message: "Los apellidos son obligatorios." })
    @Length(8, 20, { message: "Los apellidos debe contener entre 8 y 20 caracteres." })
    apellidos!: string;

    @IsNotEmpty({ message: "La identificacion es obligatoria." })
    @Length(10, 10, { message: "La identifiacion no tiene 10 caracteres." })
    @IsInt({ message: "Identification debe ser un numero entero." })
    @Matches(/^(?!.*(\d)\1{3})\d{10}$/, {
        message: "Identificacion invalida."
    })
    identificacion!: number;

    @IsNotEmpty({ message: "La fecha de nacimiento es obligatoria." })
    fechaNacimiento!: string;

}