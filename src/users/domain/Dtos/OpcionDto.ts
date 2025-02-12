import { IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class OpcionDto {
    @IsOptional()
    @IsInt({ message: "El ID debe ser un numero entero." })
    idOpcion!: number;

    @IsNotEmpty({message: "El nombre es obligatorio"})
    nombreOpcion!: string;
}
