import { UniversidadeRepository, UniversidadeFindAllResponse } from "../../domain/universidade/UniversidadeRepository";
import { Universidade } from "../../domain/universidade/Universidade";
import { prisma } from "./PrismaClient";

export class UniversidadePrismaRepository implements UniversidadeRepository {
  async create(universidade: Universidade): Promise<Universidade> {
    return await prisma.universidade.create({
      data: {
        uuid: universidade.uuid,
        nome: universidade.nome,
        sigla: universidade.sigla,
        cnpj: universidade.cnpj,
      },
    });
  }

  async findByUUID(uuid: string): Promise<Universidade | null> {
    const universidade = await prisma.universidade.findUnique({
      where: { uuid },
    });
    if (!universidade) throw new Error("Universidade não encontrada");
    return universidade;
  }

  async findAll(
    busca: string,
    limit: number,
    page: number
  ): Promise<{ data: UniversidadeFindAllResponse[]; total: number }> {
    const [universidades, total] = await prisma.$transaction([
      prisma.universidade.findMany({
        where: {
          OR: [
            { nome: { contains: busca, mode: "insensitive" } },
            { sigla: { contains: busca, mode: "insensitive" } },
            { cnpj: { contains: busca, mode: "insensitive" } },
          ],
        },
        take: limit,
        skip: (page - 1) * limit,
      }),
      prisma.universidade.count({
        where: {
          OR: [
            { nome: { contains: busca, mode: "insensitive" } },
            { sigla: { contains: busca, mode: "insensitive" } },
            { cnpj: { contains: busca, mode: "insensitive" } },
          ],
        },
      }),
    ]);
    return {
      data: universidades.map((universidade) => ({
        uuid: universidade.uuid,
        nome: universidade.nome,
        sigla: universidade.sigla,
        cnpj: universidade.cnpj,
      })),
      total,
    };
  }

  async update(universidade: Universidade): Promise<Universidade> {
    return await prisma.universidade.update({
      where: { uuid: universidade.uuid },
      data: {
        nome: universidade.nome,
        sigla: universidade.sigla,
        cnpj: universidade.cnpj,
        alteradoEm: new Date(),
      },
    });
  }

  async delete(uuid: string): Promise<boolean> {
    return !!(await prisma.universidade.delete({
      where: { uuid },
    }));
  }
}
