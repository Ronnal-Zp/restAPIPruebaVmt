import { IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class RolDto {
    @IsOptional()
    @IsInt({ message: "El ID debe ser un numero entero." })
    idRol?: number;

    @IsNotEmpty({message: "El nombre es obligatorio"})
    rolName!: string;
}
         