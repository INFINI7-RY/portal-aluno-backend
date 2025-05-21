import { UniversidadeRepository } from "../../../domain/universidade/UniversidadeRepository";

export class DeleteUniversidadeUseCase {
  constructor(private universidadeRepository: UniversidadeRepository) {}

  async delete(uuid: string): Promise<boolean> {
    return !!(await this.universidadeRepository.delete(uuid));
  }
}
