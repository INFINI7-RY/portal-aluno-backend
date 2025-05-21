import { Request, Response } from "express";
import { CreateUniversidadeUseCase } from "../../../application/useCase/universidade/CreateUniversidadeUseCase";
import { FindUniversidadeUseCase } from "../../../application/useCase/universidade/FindUniversidadeUseCase";
import {
  universidadeCreateOrUpdateSchema,
  universidadeFindAllSchema,
  uuidSchema,
} from "../validators/Universidade.schema";
import { UpdateUniversidadeUseCase } from "../../../application/useCase/universidade/UpdateUniversidadeUseCase";
import { DeleteUniversidadeUseCase } from "../../../application/useCase/universidade/DeleteUniversidadeUseCase";
import { Universidade } from "../../../domain/universidade/Universidade";
import { CreateUniversidadeDTO, UpdateUniversidadeDTO } from "../../../application/dto/UniversidadeDTO";

export class UniversidadeController {
  constructor(
    private createUniversidadeUseCase: CreateUniversidadeUseCase,
    private findUniversidadeUseCase: FindUniversidadeUseCase,
    private updateUniversidadeUseCase: UpdateUniversidadeUseCase,
    private deleteUniversidadeUseCase: DeleteUniversidadeUseCase
  ) {}

  async create(req: Request, res: Response) {
    try {
      const universidadeDto: CreateUniversidadeDTO = universidadeCreateOrUpdateSchema.parse(req.body);

      const universidade: Universidade = await this.createUniversidadeUseCase.create(universidadeDto);
      return res.status(201).json(universidade);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao cadastrar nova universidade. Por favor, tente novamente.";
      return res.status(400).json({ error: errorMessage });
    }
  }

  async findByUUID(req: Request, res: Response) {
    try {
      const { uuid } = uuidSchema.parse(req.params);
      const universidade: Universidade = await this.findUniversidadeUseCase.findByUUID(uuid);
      return res.status(200).json(universidade);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao buscar universidade. Por favor, tente novamente.";
      return res.status(400).json({ error: errorMessage });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const { busca, limit, page } = universidadeFindAllSchema.parse(req.query);

      const universidades = await this.findUniversidadeUseCase.findAll(busca, limit, page);

      return res.status(200).json(universidades);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao buscar universidades. Por favor, tente novamente.";
      return res.status(400).json({ error: errorMessage });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { uuid } = uuidSchema.parse(req.params);
      const universidadeDto: Omit<UpdateUniversidadeDTO, "uuid"> = universidadeCreateOrUpdateSchema.parse(req.body);
      const universidade: Universidade = await this.updateUniversidadeUseCase.update({ uuid, ...universidadeDto });
      return res.status(200).json(universidade);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao atualizar universidade. Por favor, tente novamente.";
      return res.status(400).json({ error: errorMessage });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { uuid } = uuidSchema.parse(req.params);
      if (!(await this.findUniversidadeUseCase.findByUUID(uuid))) {
        return res.status(400).json({ error: "Universidade não encontrada." });
      }

      const universidadeDeletada: boolean = await this.deleteUniversidadeUseCase.delete(uuid);
      return res.status(200).json(universidadeDeletada);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao deletar universidade. Por favor, tente novamente.";
      return res.status(400).json({ error: errorMessage });
    }
  }
}
