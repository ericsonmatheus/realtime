# Início do projeto Backend

Esse projeto foi construído utilizando principalmente Express e Socket.io

## Configuração Inicial

Antes de iniciar este servidor, é necessário que seja instalado o banco de dados [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) na versão **9.6.24**

***Em caso de erro na instalação do postgree***

![err](https://user-images.githubusercontent.com/45068732/156946654-2a4ec45a-251a-42d7-9d17-3e253b66567c.png)

Será necessário adicionar ***--install_runtimes 0*** em um atalho criado para o executável no campo *DESTINO*

**1º Crie um atalho para a área de trabalho**

![atalho](https://user-images.githubusercontent.com/45068732/156946769-001598ce-31b1-4145-a66c-7e98832e16e2.png)

**2º Acesse as propriedades do atalho criado**

![Prop](https://user-images.githubusercontent.com/45068732/156946798-f47bc6d6-4f52-4a63-9750-c6de402fe6c4.png)

**3º Adicione o script "--install_runtimes 0"**

![corr](https://user-images.githubusercontent.com/45068732/156946870-f698196e-8277-4893-85e9-1e82d26a0f97.png)

**4º Por fim deve ser feito a instalação do postgre com as configurações padrões sugeridas**

***Observação***: O postgree deverá ser adicionado como variável de ambiente

**5º Acesse o terminal e logue no postgre com a senha criada no momento da instalação**

![cmd](https://user-images.githubusercontent.com/45068732/156953613-afb95ff2-21d4-4e7c-a475-cffd52484781.png)

**6º Em seguida crie uma base de dados com nome *realtime***

![create](https://user-images.githubusercontent.com/45068732/156953770-368d4827-01e3-4943-803a-4341b221eb7c.png)

**Antes de iniciar o projeto com o npm start, deve ser alterado o *password* no arquivo "knexfile.js" para a senha criada no momento da instalação do Postgree**

Por fim poderá ser iniciado o projeto utilizando o script

## Scripts Disponíveis

### `npm i`

Obrigatório que seja utilizado este script para que sejam instalados todas as dependências necessárias para a execução deste software

### `npm start`

Para que seja inicializado o servidor onde está rodando a aplicação backend

Abra [http://localhost:5050](http://localhost:5050)

## Rotas disponíveis

Para ter acessos a todas as rotas desta aplicação, será necessário que seja realizado cadastro, e posteriormente login, para que seja gerado Token de validação, Este poderá ser validado utilizando a rota para validar

# /singup

# /singin

# /validateToken
Após realizado login, os usuários com acesso a esta aplicação poderão ter acesso as seguintes rotas

# /users
Onde poderá ter acesso a todos os usuário, ou informar o id na URL e realizar alteração em algum usuário ou buscar algum usuário por ID

# /chats
Poderá ter acesso aos chats cadastrados ou realizar o cadastro de chat novo 

# /userschats
Neste momento, o usuário poderá ter acesso aos chats em que cada usuário está cadastrados, ou realizar um cadastro novo. 
Sendo possível também buscar os chats em que o usuário estiver cadastrado, ou remover algum chat de algum usuário.

# /messages
Esta poderá realizar a chamada de todas as mensagens para que usuário novos tenham acesso as todas as mensagem trocadas anteriormente
