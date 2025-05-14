-- CreateTable
CREATE TABLE "Universidade" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alteradoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Universidade_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Universidade_sigla_key" ON "Universidade"("sigla");

-- CreateIndex
CREATE UNIQUE INDEX "Universidade_cnpj_key" ON "Universidade"("cnpj");
