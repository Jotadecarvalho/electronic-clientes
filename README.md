# Cadastro de Clientes - Electronic (Appfull)

## Identificação do estudante

- **Nome:** João Moris de Carvalho
- **Curso:** [preencher com o nome do curso]
- **Unidade Curricular:** [preencher]
- **Atividade:** Avaliação 01 - Modelagem e implementação orientada a objetos em JavaScript

## Sobre o projeto

Módulo de cadastro de clientes (pessoas físicas e jurídicas) do aplicativo de e-commerce da Electronic, desenvolvido em JavaScript orientado a objetos. O projeto aplica:

- **Herança:** `PessoaFisica` e `PessoaJuridica` estendem `Pessoa` (`extends` e `super`).
- **Encapsulamento:** campos privados (`#`) com getters e setters.
- **Validação:** valores inválidos lançam erro com `throw` e são tratados com `try/catch`, sem derrubar o programa.
- **Composição:** toda `Pessoa` possui um `Endereco`.

## Estrutura do repositório

```
electronic-clientes/
├── docs/
│   ├── diagrama-classes.drawio
│   └── diagrama-classes.png
├── src/
│   ├── Endereco.js
│   ├── Pessoa.js
│   ├── PessoaFisica.js
│   └── PessoaJuridica.js
├── index.js
├── package.json
└── README.md
```

## Diagrama de classes

Arquivo editável: [`docs/diagrama-classes.drawio`](docs/diagrama-classes.drawio)

![Diagrama de classes](docs/diagrama-classes.png)

Observações: `+` indica membro público e `-` indica membro privado (implementado com `#` no JavaScript). Os getters e setters não são representados no diagrama, seguindo a convenção vista em aula; as classes derivadas mostram apenas os atributos que acrescentam à classe `Pessoa`.

## Regras de validação

| Campo | Regra |
|---|---|
| Nome | Mínimo de 3 caracteres |
| CPF | 11 dígitos (pontos e traço são desconsiderados) |
| CNPJ | 14 dígitos (pontos, traço e barra são desconsiderados) |
| Data de nascimento | Data existente no calendário e não pode estar no futuro (formato `AAAA-MM-DD`) |
| Razão social | Obrigatória |
| Endereço | Logradouro, número e cidade obrigatórios; UF com 2 letras |

## Como executar

Pré-requisito: [Node.js](https://nodejs.org) instalado.

```bash
git clone [URL-DO-REPOSITÓRIO]
cd electronic-clientes
node index.js
```

## Evidências de teste

Cenários exigidos: (1) pessoa física válida, (2) pessoa jurídica válida, (3) pessoa física inválida e (4) pessoa jurídica inválida. Foram incluídas duas variações de erro para cada tipo de pessoa. Saída real do terminal ao executar `node index.js`:

```
=== TESTES DE CADASTRO ===

[OK]   Cenário 1 - Pessoa física válida
[OK]   Cenário 2 - Pessoa jurídica válida
[ERRO] Cenário 3a - Pessoa física inválida (CPF com 10 dígitos) -> CPF inválido: deve ter 11 dígitos.
[ERRO] Cenário 3b - Pessoa física inválida (data no futuro) -> Data de nascimento inválida: não pode estar no futuro.
[ERRO] Cenário 4a - Pessoa jurídica inválida (razão social vazia) -> Razão social inválida: o campo é obrigatório.
[ERRO] Cenário 4b - Pessoa jurídica inválida (nome curto) -> Nome inválido: deve ter ao menos 3 caracteres.

=== CADASTROS VÁLIDOS ===

Cliente 1
[Pessoa Física]
Nome: Maria Souza
Endereço: Rua das Flores, 120 - Manaus/AM
CPF: 12345678909
Data de nascimento: 15/03/1990

Cliente 2
[Pessoa Jurídica]
Nome: Tech Manaus
Endereço: Av. Djalma Batista, 1500 - Manaus/AM
CNPJ: 12345678000190
Razão social: Tech Manaus Comércio de Eletrônicos LTDA

Total de cadastros válidos: 2
Total de cadastros inválidos: 4
```

**Resultado:** os 2 cadastros válidos foram exibidos ao final e os 4 inválidos foram rejeitados com mensagem de erro, sem interromper a execução.

## Histórico de commits

O histórico de commits deste repositório mostra a evolução do trabalho (modelagem, classes, validações, testes e documentação).
