# Backend News 🚀

Este é o repositório do backend do projeto **Gamificação em The News**, desenvolvido com **NestJS** e **Prisma**. O objetivo é criar uma plataforma para gamificar a leitura de newsletters, premiando leitores que mantêm uma sequência de aberturas.

---

## **Tecnologias Utilizadas**

- **Backend:** NestJS, TypeScript, Prisma (ORM), PostgreSQL
- **Ferramentas:** Docker, Git, GitHub Actions (CI/CD)
- **Testes:** Jest (unitários e integração)

---

## **Funcionalidades**

### **Módulo de Leitores**
- CRUD de leitores.
- Consulta de streaks (sequência de leituras).
- Histórico de aberturas de newsletters.

### **Módulo de Newsletters**
- CRUD de newsletters.
- Registro de aberturas por leitor.

### **Módulo de Streaks**
- Cálculo de streaks (dias consecutivos de leitura).
- Atualização automática do streak ao abrir uma newsletter.

---

## **Como Rodar o Projeto**

### **Pré-requisitos**
- Node.js (v18 ou superior)
- Docker (opcional, para rodar o banco de dados)
- Git

### **Passo a Passo**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/allankdev/backend-news.git
   cd backend-news



   Instale as dependências:

bash
Copy
npm install
Configure o banco de dados:

Crie um arquivo .env na raiz do projeto e adicione:

plaintext
Copy
DATABASE_URL="postgresql://user:password@localhost:5432/backend-news?schema=public"
Substitua user, password e backend-news pelas suas credenciais.

Suba o banco de dados com Docker (opcional):

bash
Copy
docker-compose up -d
Execute as migrações do Prisma:

bash
Copy
npx prisma migrate dev --name init
Rode o servidor:

bash
Copy
npm run start:dev
Acesse a API:

O servidor estará rodando em http://localhost:3000.
