const Pessoa = require('./Pessoa');

class PessoaFisica extends Pessoa {
  #cpf;
  #dataNascimento;

  constructor(nome, cpf, dataNascimento, endereco) {
    super(nome, endereco);
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(valor) {
    const digitos = String(valor).replaceAll('.', '').replaceAll('-', '').trim();

    if (digitos.length !== 11 || !/^[0-9]+$/.test(digitos)) {
      throw new Error('CPF inválido: deve ter 11 dígitos.');
    }
    this.#cpf = digitos;
  }

  get dataNascimento() {
    return this.#dataNascimento;
  }

  set dataNascimento(valor) {
    // A data deve vir no formato AAAA-MM-DD (exemplo: 1990-03-15).
    const partes = String(valor).split('-');
    const ano = Number(partes[0]);
    const mes = Number(partes[1]);
    const dia = Number(partes[2]);
    const data = new Date(ano, mes - 1, dia);

    // Se o dia não existe (exemplo: 30/02), o JavaScript ajusta a data sozinho.
    // Por isso comparamos o dia final com o dia informado.
    if (partes.length !== 3 || isNaN(data.getTime()) || ano < 1900 || data.getDate() !== dia) {
      throw new Error('Data de nascimento inválida: use AAAA-MM-DD com uma data que exista.');
    }

    if (data > new Date()) {
      throw new Error('Data de nascimento inválida: não pode estar no futuro.');
    }
    this.#dataNascimento = data;
  }

  toString() {
    return (
      '[Pessoa Física]\n' +
      super.toString() + '\n' +
      'CPF: ' + this.#cpf + '\n' +
      'Data de nascimento: ' + this.#dataNascimento.toLocaleDateString('pt-BR')
    );
  }
}

module.exports = PessoaFisica;
