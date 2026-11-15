const Pessoa = require('./Pessoa');

class PessoaJuridica extends Pessoa {
  #cnpj;
  #razaoSocial;

  constructor(nome, cnpj, razaoSocial, endereco) {
    super(nome, endereco);
    this.cnpj = cnpj;
    this.razaoSocial = razaoSocial;
  }

  get cnpj() {
    return this.#cnpj;
  }

  set cnpj(valor) {
    const digitos = String(valor).replaceAll('.', '').replaceAll('-', '').replaceAll('/', '').trim();

    if (digitos.length !== 14 || !/^[0-9]+$/.test(digitos)) {
      throw new Error('CNPJ inválido: deve ter 14 dígitos.');
    }
    this.#cnpj = digitos;
  }

  get razaoSocial() {
    return this.#razaoSocial;
  }

  set razaoSocial(valor) {
    if (typeof valor !== 'string' || valor.trim() === '') {
      throw new Error('Razão social inválida: o campo é obrigatório.');
    }
    this.#razaoSocial = valor.trim();
  }

  toString() {
    return (
      '[Pessoa Jurídica]\n' +
      super.toString() + '\n' +
      'CNPJ: ' + this.#cnpj + '\n' +
      'Razão social: ' + this.#razaoSocial
    );
  }
}

module.exports = PessoaJuridica;
