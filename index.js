const Endereco = require('./src/Endereco');
const PessoaFisica = require('./src/PessoaFisica');
const PessoaJuridica = require('./src/PessoaJuridica');

const clientes = [];
let invalidos = 0;

console.log('=== TESTES DE CADASTRO ===\n');

// Cenário 1: pessoa física válida
try {
  const endereco = new Endereco('Rua das Flores', 120, 'Manaus', 'AM');
  const cliente = new PessoaFisica('Maria Souza', '123.456.789-09', '1990-03-15', endereco);
  clientes.push(cliente);
  console.log('[OK]   Cenário 1 - Pessoa física válida');
} catch (erro) {
  invalidos++;
  console.log('[ERRO] Cenário 1 -> ' + erro.message);
}

// Cenário 2: pessoa jurídica válida
try {
  const endereco = new Endereco('Av. Djalma Batista', 1500, 'Manaus', 'AM');
  const cliente = new PessoaJuridica(
    'Tech Manaus',
    '12.345.678/0001-90',
    'Tech Manaus Comércio de Eletrônicos LTDA',
    endereco
  );
  clientes.push(cliente);
  console.log('[OK]   Cenário 2 - Pessoa jurídica válida');
} catch (erro) {
  invalidos++;
  console.log('[ERRO] Cenário 2 -> ' + erro.message);
}

// Cenário 3a: pessoa física inválida (CPF com 10 dígitos)
try {
  const endereco = new Endereco('Rua Rio Negro', 45, 'Manaus', 'AM');
  const cliente = new PessoaFisica('Carlos Lima', '123.456.789-0', '1985-07-20', endereco);
  clientes.push(cliente);
  console.log('[OK]   Cenário 3a - Pessoa física');
} catch (erro) {
  invalidos++;
  console.log('[ERRO] Cenário 3a - Pessoa física inválida (CPF com 10 dígitos) -> ' + erro.message);
}

// Cenário 3b: pessoa física inválida (data de nascimento no futuro)
try {
  const endereco = new Endereco('Rua Pará', 77, 'Manaus', 'AM');
  const cliente = new PessoaFisica('Ana Pereira', '98765432100', '2030-01-01', endereco);
  clientes.push(cliente);
  console.log('[OK]   Cenário 3b - Pessoa física');
} catch (erro) {
  invalidos++;
  console.log('[ERRO] Cenário 3b - Pessoa física inválida (data no futuro) -> ' + erro.message);
}

// Cenário 4a: pessoa jurídica inválida (razão social vazia)
try {
  const endereco = new Endereco('Av. Constantino Nery', 300, 'Manaus', 'AM');
  const cliente = new PessoaJuridica('Eletro Norte', '98.765.432/0001-10', '', endereco);
  clientes.push(cliente);
  console.log('[OK]   Cenário 4a - Pessoa jurídica');
} catch (erro) {
  invalidos++;
  console.log('[ERRO] Cenário 4a - Pessoa jurídica inválida (razão social vazia) -> ' + erro.message);
}

// Cenário 4b: pessoa jurídica inválida (nome com menos de 3 caracteres)
try {
  const endereco = new Endereco('Rua Japurá', 55, 'Manaus', 'AM');
  const cliente = new PessoaJuridica('Ab', '12.345.678/0001-90', 'Ab Comércio Ltda', endereco);
  clientes.push(cliente);
  console.log('[OK]   Cenário 4b - Pessoa jurídica');
} catch (erro) {
  invalidos++;
  console.log('[ERRO] Cenário 4b - Pessoa jurídica inválida (nome curto) -> ' + erro.message);
}

console.log('\n=== CADASTROS VÁLIDOS ===');
for (let i = 0; i < clientes.length; i++) {
  console.log('\nCliente ' + (i + 1));
  console.log(clientes[i].toString());
}

console.log('\nTotal de cadastros válidos: ' + clientes.length);
console.log('Total de cadastros inválidos: ' + invalidos);
