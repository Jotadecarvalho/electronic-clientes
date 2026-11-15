class Endereco {
  #logradouro;
  #numero;
  #cidade;
  #uf;

  constructor(logradouro, numero, cidade, uf) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.uf = uf;
  }

  get logradouro() {
    return this.#logradouro;
  }

  set logradouro(valor) {
    if (typeof valor !== 'string' || valor.trim() === '') {
      throw new Error('Endereço inválido: o logradouro é obrigatório.');
    }
    this.#logradouro = valor.trim();
  }

  get numero() {
    return this.#numero;
  }

  set numero(valor) {
    if (valor === undefined || valor === null || String(valor).trim() === '') {
      throw new Error('Endereço inválido: o número é obrigatório.');
    }
    this.#numero = String(valor).trim();
  }

  get cidade() {
    return this.#cidade;
  }

  set cidade(valor) {
    if (typeof valor !== 'string' || valor.trim() === '') {
      throw new Error('Endereço inválido: a cidade é obrigatória.');
    }
    this.#cidade = valor.trim();
  }

  get uf() {
    return this.#uf;
  }

  set uf(valor) {
    if (typeof valor !== 'string' || valor.trim().length !== 2) {
      throw new Error('Endereço inválido: a UF deve ter 2 letras (exemplo: AM).');
    }
    this.#uf = valor.trim().toUpperCase();
  }

  toString() {
    return this.#logradouro + ', ' + this.#numero + ' - ' + this.#cidade + '/' + this.#uf;
  }
}

module.exports = Endereco;
