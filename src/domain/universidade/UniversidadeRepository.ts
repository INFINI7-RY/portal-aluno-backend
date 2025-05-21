import { CreateUniversidadeDTO, UpdateUniversidadeDTO } from "../../application/dto/UniversidadeDTO";
import { Universidade } from "./Universidade";

export type UniversidadeFindAllResponse = Omit<Universidade, "criadoEm" | "alteradoEm">;

export interface UniversidadeRepository {
  create(universidade: CreateUniversidadeDTO): Promise<Universidade>;
  findByUUID(uuid: string): Promise<Universidade | null>;
  findAll(
      busca?: string,
    limit?: number | 10,
    page?: number | 1,
  ): Promise<{ data: UniversidadeFindAllResponse[]; total: number }>;
  update(universidade: UpdateUniversidadeDTO): Promise<Universidade>;
  delete(uuid: string): Promise<boolean>;
}
