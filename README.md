# Desafio fullstack

Olá, esse projeto é um desafio feito em python e angular para desenvolvimento de uma dashboard e o tratamento de dados com python.

## Meu Processo

No desenvolvimento utilizei o seguinte padrão de commits,que segue como base o padrão utilizado pelo angular, [Angular Docs](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines):

```bash
    <tipo-do-commit>: <descrição-do-commit>
```

Aqui está a lista dos tipos:

- FIX: para resolução de bugs

- FEAT: para iniciar a implementação de uma feature

- CHORE: para trabalho em progresso em uma feature

- REFACTOR: refatoração - ajustes que não interferem na lógica

- TEST: para implementar testes

- STYLE: mudanças de formatação no código

- PERF: ajustes de performance

- DOCS: para inserção/alteração em documentação

## Tecnologias

As principais tecnologias utilizadas foram:

- [Angular](https://angular.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Sass](https://sass-lang.com/)
- [Jasmine](https://jasmine.github.io/)
- [Karma](https://karma-runner.github.io/latest/index.html)
- [Python](https://www.python.org/)
- [Fast Api](https://fastapi.tiangolo.com/)

## Como Usar

Para utilizar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Python](https://www.python.org/) e o [Node.js](https://nodejs.org/en/) em uma versão superior a 18.

### Rodando o Back

Para rodar o back é necessário instalar as dependências com :

```bash
    pip install -r back/requirements.txt
```

Após instaladas pode rodar com o seguinte comando:

```bash
    fastapi dev back/app.py
```

#### Rodando o Front

Para rodar o front é necessário instalar as dependências de dentro da pasta do front, assim :

```bash
    cd front/
    npm i
```

Após instaladas pode rodar com o seguinte comando:

```bash
    npm run serve
```
