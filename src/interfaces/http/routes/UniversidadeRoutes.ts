import { Router } from "express";
import { UniversidadePrismaRepository } from "../../../infrastructure/prisma/UniversidadePrismaRepository";
import { CreateUniversidadeUseCase } from "../../../application/useCase/universidade/CreateUniversidadeUseCase";
import { FindUniversidadeUseCase } from "../../../application/useCase/universidade/FindUniversidadeUseCase";
import { UpdateUniversidadeUseCase } from "../../../application/useCase/universidade/UpdateUniversidadeUseCase";
import { DeleteUniversidadeUseCase } from "../../../application/useCase/universidade/DeleteUniversidadeUseCase";
import { UniversidadeController } from "../controllers/UniversidadeController";

const router = Router();

const universidadeRepository = new UniversidadePrismaRepository();

const useCases = {
  create: new CreateUniversidadeUseCase(universidadeRepository),
  find: new FindUniversidadeUseCase(universidadeRepository),
  update: new UpdateUniversidadeUseCase(universidadeRepository),
  delete: new DeleteUniversidadeUseCase(universidadeRepository),
};

const universidadeController = new UniversidadeController(
  useCases.create,
  useCases.find,
  useCases.update,
  useCases.delete
);

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) => Promise.resolve(fn(req, res)).catch(next);

router.post("", asyncHandler(universidadeController.create.bind(universidadeController)));
router.get("/:uuid", asyncHandler(universidadeController.findByUUID.bind(universidadeController)));
router.get("", asyncHandler(universidadeController.findAll.bind(universidadeController)));
router.put("/:uuid", asyncHandler(universidadeController.update.bind(universidadeController)));
router.delete("/:uuid", asyncHandler(universidadeController.delete.bind(universidadeController)));

export default router;
