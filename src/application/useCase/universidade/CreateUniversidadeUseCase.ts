import { UniversidadeRepository } from "../../../domain/universidade/UniversidadeRepository";
import { Universidade } from "../../../domain/universidade/Universidade";
import { CreateUniversidadeDTO } from "../../dto/UniversidadeDTO";
import { v4 as uuidv4 } from "uuid";

export class CreateUniversidadeUseCase {
  constructor(private universidadeRepository: UniversidadeRepository) {}

  async create(dto: CreateUniversidadeDTO): Promise<Universidade> {
    const universidade = new Universidade(uuidv4(), dto.nome, dto.sigla, dto.cnpj);
    return await this.universidadeRepository.create(universidade);
  }
}
