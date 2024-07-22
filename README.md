# Desafio fullstack NINA

Olá, esse projeto é um desafio feito para o processo seletivo da NINA.

<!--ts-->

- [Meu processo ](#meu-processor)
  - [Extras](#extras)
- [Tecnologias](#tecnologias)
- [Instalação](#instalacao)
- [Como usar](#como-usar)
  - [Pre Requisitos](#pre-requisitos)
  - [Rodando o Back](#rodando-o-back)
  - [Rodando o Front](#rodando-o-front)
- [O que faria depois](#o-que-faria-depois)
- [Conclusões Finais](#conclusões-finais)
  <!--te-->

## Meu Processo

Eu iniciei o projeto pelo back-end finalizando os pedidos do desafio e ja desenvolvendo alguns pontos com a ideia de serem reutilizaveis e expansiveis como a questão dos filtros onde foi utilizado para depois filtrar as queixas por outros campos. Seguindo do back iniciei o front end utilizando duas metodologias a mobile first onde ajudou na responsividade final da aplicação, e o TDD onde ajudou a ter um codigo final melhor e já com testes, também decidi por utilizar junto ao SCSS o taiwind ,após finalização da base foi feitos pequenos ajustes e como citado a mais temos o componente de filtros adicionando o filtro pelo tipo da agressão e busca por texto nas queixas também foi adicionado um workflow simples para rodar os testes de maneira automatizada, além dos testes em si.
A dificuldade que vi no projeto acho que foi na configuração do projeto assim como na maioria dos projetos que onde uma lib não vai funcionar do jeito adequado então é necessario um pouco de analise e entender o que está acontencendo além de alguns erros que estavam no projeto para serem resolvidos, mesmo essa parte sendo um pouco chatinha acredito que o projeto fluiu de maneira tranquila.

Para a arquitetura do projeto do back eu segui a base que ja tinham sido feita, já no front utlizei a seguinte logica para as principais pastas:

![Imagem das pastas](/front/src/assets/readme_imgs/imagem-pastas-front.png)

No desenvolvimento utilizei o seguinte padrão de commits,que segue como base o padrão utilizado pelo angular, [Angular Docs](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines):

```bash
    <tipo-do-commit>: <descrição-do-commit>
```

Aqui está a lista dos tipos:

- FIX: resolução de bugs

- FEAT: inicia a implementação de uma feature

- CHORE: trabalho em progresso em uma feature

- REFACTOR: refatoração - ajustes que não interferem na lógica

- TEST: implementa testes

- STYLE: mudanças de formatação no código

- PERF: ajustes de performance

- DOCS: inserção/alteração em documentação

### Extras

##### Segue a descrição dos extras:

1. Sobre os testes eles foram escritos desde do inicio da aplicação e sempre tentando usar de base o TDD você pode verificar eles rodando:

```bash
    cd front/
    npm run test
```

2. Sobre os novos filtros podem ser acessas da dashboard a partir do botão de filtros e do input ,e são os seguintes:
   ![imagem dos filtros](/front/src/assets/readme_imgs/imagem-extra-front.png)
   ![imagem do modal de filtros](/front/src/assets/readme_imgs/imagem-extra-modal-filtro.png)

3. Já do workflow subi um arquivo que pode ser encontrado em "pasta-do-projeto"/github/workflows/build_test.yml , lá fiz um código para rodar os testes e pull request na develop e na main em pushs na main.

4. Também fiz o uso do tailwind dentro do projeto ao lado do scss.

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

## O que Faria Depois

Como próximos passos passos tem algumas coisas que acharia interessante ter implementado/continuado:

- Mais testes unitários;
- Testes End to End utilizando cypress;
- Hospedar a aplicação, minha ideia inicial era utilizar o netlify junto a digital ocean.

## Conclusões Finais

Enfim, adorei ter participado do desafio achei muito interessante pois acredito que mostrou como e o que é a NINA e a missão da empresa também, pois mesmo lidando com dados mocados da pra ver a importancia de uma plataforma como a NINA. E pra mim foi muito interessante ter o desafio de fazer um projeto novo ali com o escopo já decidido.
