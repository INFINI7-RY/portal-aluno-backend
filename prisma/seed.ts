import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const universidadeSeed = [
  {
    uuid: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    nome: "Universidade de São Paulo",
    sigla: "USP",
    cnpj: "63025530000104",
    criadoEm: new Date("1960-01-25"),
    alteradoEm: new Date("2023-10-15"),
  },
  {
    uuid: "b2c3d4e5-f6a7-8901-bcde-fg2345678901",
    nome: "Universidade Estadual de Campinas",
    sigla: "UNICAMP",
    cnpj: "46068425000133",
    criadoEm: new Date("1966-09-05"),
    alteradoEm: new Date("2024-02-20"),
  },
  {
    uuid: "c3d4e5f6-a7b8-9012-cdef-gh3456789012",
    nome: "Universidade Federal do Rio de Janeiro",
    sigla: "UFRJ",
    cnpj: "33937681000178",
    criadoEm: new Date("1920-07-07"),
    alteradoEm: new Date("2023-12-01"),
  },
  {
    uuid: "d4e5f6a7-b8c9-0123-defg-hi4567890123",
    nome: "Universidade Federal de Minas Gerais",
    sigla: "UFMG",
    cnpj: "17217985000122",
    criadoEm: new Date("1927-12-07"),
    alteradoEm: new Date("2024-01-10"),
  },
  {
    uuid: "e5f6a7b8-c9d0-1234-efgh-ij5678901234",
    nome: "Universidade Estadual Paulista",
    sigla: "UNESP",
    cnpj: "49123456000199",
    criadoEm: new Date("1976-01-30"),
    alteradoEm: new Date("2023-11-22"),
  },
  {
    uuid: "f6a7b8c9-d0e1-2345-fghi-jk6789012345",
    nome: "Universidade Federal do Rio Grande do Sul",
    sigla: "UFRGS",
    cnpj: "92818551000167",
    criadoEm: new Date("1934-11-28"),
    alteradoEm: new Date("2024-03-15"),
  },
  {
    uuid: "a7b8c9d0-e1f2-3456-ghij-kl7890123456",
    nome: "Pontifícia Universidade Católica de São Paulo",
    sigla: "PUC-SP",
    cnpj: "62823257000145",
    criadoEm: new Date("1946-08-22"),
    alteradoEm: new Date("2023-09-30"),
  },
  {
    uuid: "b8c9d0e1-f2a3-4567-hijk-lm8901234567",
    nome: "Universidade de Brasília",
    sigla: "UnB",
    cnpj: "00394445000112",
    criadoEm: new Date("1962-04-21"),
    alteradoEm: new Date("2024-04-05"),
  },
  {
    uuid: "c9d0e1f2-a3b4-5678-ijkl-mn9012345678",
    nome: "Universidade Federal de Santa Catarina",
    sigla: "UFSC",
    cnpj: "83932123000188",
    criadoEm: new Date("1960-12-18"),
    alteradoEm: new Date("2023-08-14"),
  },
  {
    uuid: "d0e1f2a3-b4c5-6789-jklm-no0123456789",
    nome: "Universidade Federal do Paraná",
    sigla: "UFPR",
    cnpj: "75123789000156",
    criadoEm: new Date("1912-12-19"),
    alteradoEm: new Date("2024-05-01"),
  },
];

async function main() {
  console.log("Iniciando seeding...");

  for (const universidade of universidadeSeed) {
    await prisma.universidade.upsert({
      where: { uuid: universidade.uuid },
      update: {},
      create: universidade,
    });
  }

  console.log("Seeding concluído!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
