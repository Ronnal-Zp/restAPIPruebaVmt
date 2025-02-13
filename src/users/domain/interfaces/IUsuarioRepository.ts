import { UsuarioDto } from "../Dtos/UsuarioDto";


export interface IUsuarioRepository {
  getById(id: string): Promise<UsuarioDto | null>;
  getAll(): Promise<UsuarioDto[] | null>;
  getByUserName(userName: string): Promise<UsuarioDto | null>;
  getByEmail(email: string): Promise<UsuarioDto | null>;
}
