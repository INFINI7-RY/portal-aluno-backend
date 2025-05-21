export interface CreateUniversidadeDTO {
  nome: string;
  sigla: string;
  cnpj: string;
}

export interface UpdateUniversidadeDTO extends CreateUniversidadeDTO {
  uuid: string;
}
