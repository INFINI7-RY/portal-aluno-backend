import { Universidade } from "../../../domain/universidade/Universidade";
import { UniversidadeRepository } from "../../../domain/universidade/UniversidadeRepository";
import { UpdateUniversidadeDTO } from "../../dto/UniversidadeDTO";

export class UpdateUniversidadeUseCase {
  constructor(private universidadeRepository: UniversidadeRepository) {}

  async update(dto: UpdateUniversidadeDTO): Promise<Universidade> {
    return await this.universidadeRepository.update({
      uuid: dto.uuid,
      nome: dto.nome,
      sigla: dto.sigla,
      cnpj: dto.cnpj,
    });
  }
}
