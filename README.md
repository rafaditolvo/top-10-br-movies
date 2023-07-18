# top-10-br-movies

# Aplicação de Filmes com Curtidas
Este repositório contém um projeto Angular-NestJS que permite aos usuários listar filmes e curtir seus favoritos. Consiste em uma aplicação front-end construída com Angular e uma API back-end desenvolvida com NestJS, utilizando o MongoDB.

Pré-requisitos
Node.js
Angular CLI
NestJS CLI
MongoDB Compass


# Começando
Clone o repositório.

Instale as dependências do back-end e do front-end.

Em janelas de terminal separadas, execute o back-end e o front-end:

# Para o back-end:
cd backend 
npm start

# Para o front-end:
cd frontend 
ng serve

# Configuração do MongoDB:

Instale o MongoDB Compass se ainda não estiver instalado.
Crie um novo banco de dados com o nome movies-db no MongoDB Compass.
Dentro do banco de dados movies-db, crie duas coleções com os nomes likes e movies.

#Variáveis de Ambiente:

Renomeie o arquivo .env_copy para .env e forneça as variáveis de ambiente necessárias.
Executando as Aplicações:

Em janelas de terminal separadas, execute o back-end e o front-end.

# Acessando a Aplicação:

Abra o seu navegador e acesse http://localhost:4200 para acessar o front-end Angular.
Observação: Para entrar na aplicação, utilize as seguintes credenciais:

Usuário: admin
Senha: admin
Funcionalidades
Lista de filmes com um botão de curtir para cada um.
Possibilidade de curtir filmes, e as curtidas serão salvas no banco de dados MongoDB por meio da API NestJS.
Implementação de autenticação JWT para proteger os endpoints da API.
Visualização no MongoDB
Foi criada uma visualização (view) no MongoDB com o nome 'filmesMaisCurtidos' para listar os filmes com base no número de curtidas que receberam.

# Testes
A API do back-end é testada utilizando o framework de testes Jest.

Navegue até o diretório backend:

No terminal, acesse o diretório onde você clonou o repositório.
Em seguida, navegue para o diretório backend.

Execute os testes:

Após instalar as dependências, execute o seguinte comando para rodar os testes:

npm test

Visualizando os resultados:

O Jest irá executar os testes e mostrará o resultado no terminal. Você verá quais testes passaram e quais falharam.
Certifique-se de que o ambiente de desenvolvimento está corretamente configurado antes de executar os testes, pois eles dependem das dependências instaladas e da configuração correta do ambiente.

Lembre-se de que o teste deve ser realizado após a configuração completa do ambiente e da base de dados para garantir que a API esteja funcionando corretamente. Caso algum teste falhe, verifique as mensagens de erro fornecidas pelo Jest para entender a causa do problema.

# Estratégia de Branches
Este projeto utiliza a estratégia de branches Git Flow, com duas branches principais:

main: Representa o código pronto para produção.
develop: Representa o código mais recente em desenvolvimento.


Contribuições
Pull requests são bem-vindos. Para alterações importantes, abra primeiro um problema (issue) para discutir o que você gostaria de alterar.
 
