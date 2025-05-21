import { Universidade } from "../../../domain/universidade/Universidade";
import {
  UniversidadeRepository,
  UniversidadeFindAllResponse,
} from "../../../domain/universidade/UniversidadeRepository";

export class FindUniversidadeUseCase {
  constructor(private universidadeRepository: UniversidadeRepository) {}

  async findAll(busca?: string, limit = 10, page = 1): Promise<{ data: UniversidadeFindAllResponse[]; total: number }> {
    const { data, total } = await this.universidadeRepository.findAll(busca, limit, page);
    if (data.length === 0) {
      throw new Error("Nenhuma universidade encontrada.");
    }
    return { data, total };
  }

  async findByUUID(uuid: string): Promise<Universidade> {
    const universidade = await this.universidadeRepository.findByUUID(uuid);
    if (!universidade) {
      throw new Error(`Universidade não encontrada.`);
    }
    return universidade;
  }
}
