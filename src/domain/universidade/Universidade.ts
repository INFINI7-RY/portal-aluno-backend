export class Universidade {
  uuid: string;
  nome: string;
  sigla: string;
  cnpj: string;
  criadoEm: Date;
  alteradoEm: Date;

  constructor(uuid: string, nome: string, sigla: string, cnpj: string) {
    this.uuid = uuid;
    this.nome = nome;
    this.sigla = sigla;
    this.cnpj = cnpj;
    this.criadoEm = new Date();
    this.alteradoEm = new Date();
  }
}
