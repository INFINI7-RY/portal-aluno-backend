import { string, z } from "zod";

export const uuidSchema = z.object({
  uuid: z.string().uuid("UUID inválido."),
});

export const universidadeBaseSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .nonempty("Nome é obrigatório"),
  sigla: z
    .string()
    .min(2, "Sigla deve ter pelo menos 2 caracteres")
    .max(10, "Sigla deve ter no máximo 10 caracteres")
    .nonempty("Sigla é obrigatória"),
  cnpj: z
    .string()
    .min(14, "CNPJ deve conter exatamente 14 caracteres")
    .max(14, "CNPJ deve conter exatamente 14 caracteres")
    .regex(/^\d{14}$/, "CNPJ deve conter apenas números")
    .nonempty("CNPJ é obrigatório"),
});

export const universidadeCreateOrUpdateSchema = universidadeBaseSchema;

export const universidadeFindAllSchema = z.object({
  busca: string().optional(),
  limit: z.coerce.number().int().positive().max(100).default(10),
  page: z.coerce.number().int().nonnegative().default(1),
});
