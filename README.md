# Devnology - Teste Programa de Trainee

## Tecnologias:

- Node
- TypeScript
- Prisma
- Docker
- PostgreSQL
- Axios
- Puppeteer
- Express

## Como executar:

- Instale as dependências com ```npm install```;
- Inicie o container do banco de dados com ```docker compose up```;
- Rodar todas as migrations do prisma com ```npx prisma migrate dev```;
- Inicie o servidor com ```npm run dev```;
- Para abrir o Prisma Studio (db visual editor) ```npx prisma studio```;
- Tem uma coleção do Insomnia na raiz do projeto para importar as rotas do back-end e testar as mesmas;

## Processo de desenvolvimento:

Basicamente o processo de desenvolvimento foi dividido em 2 partes, sendo a primeira a implementação do back-end do sistema com todas as suas funcionalidades, rotas sendo testadas, tratamento de erros e possíveis falhas. Depois de desenvolvido o back-end, foi feito o front-end, com o intuito de ser um Dashboard amigável e de fácil utilização. Com isso, foi feita a conexão com o back-end para acessar suas rotas e testar as demais funcionalidades.
