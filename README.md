# Boas-vindas ao repositório do projeto Talker Manager!


# O que foi desenvolvido 👨‍💻

  Uma aplicação de cadastro de talkers (palestrantes) em que foi possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso:
  1. Desenvolvi uma API  com Node e Express de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers);
  2. Desenvolvi alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`.
 

# Tecnologias utilizadas <a name="tecnologias"></a>
- [**Node JS**](https://nodejs.org/en/)
- [**Express**](https://expressjs.com/pt-br/)
- [**Https Status Code**](https://www.npmjs.com/package/http-status-codes)
- [**Thunder Cliente**](https://www.thunderclient.com/)

# Orientações

<details>
  <summary><strong>:whale: Rodando Projeto no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 
  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `talker_manager`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it talker_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  > Execute a aplicação com `npm start` ou `npm run dev`

  ---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Foi usado o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

  Para poder rodar o `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.
</details>

<details>
  <summary><strong>🔁 Live reload</strong></summary><br />

  Foi usado o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

  Este projeto já vem com as dependências relacionadas ao _nodemon_ configuradas no arquivo `package.json`.

  Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do projeto.
</details>

# API <a name="api"></a>

## Login
- POST /login 
## Talker 
- POST /talker
- GET /talker
- GET /talker/ :id
- PUT /talker/ :id
- DELETE /talker/ :id
- GET /talker/search?q=searchTerm
