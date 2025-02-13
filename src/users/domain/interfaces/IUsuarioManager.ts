import { UsuarioDto } from "../Dtos/UsuarioDto";


export interface IUsuarioManager {
  getById(id: string): Promise<UsuarioDto | null>;
  getAll(): Promise<UsuarioDto[] | null>;
}
