<<<<<<< HEAD
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
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**
   
   Crie um arquivo `.env` na raiz do projeto e adicione:
   ```plaintext
   DATABASE_URL="postgresql://user:password@localhost:5432/backend-news?schema=public"
   ```
   Substitua `user`, `password` e `backend-news` pelas suas credenciais.

4. **Suba o banco de dados com Docker (opcional):**
   ```bash
   docker-compose up -d
   ```

5. **Execute as migrações do Prisma:**
   ```bash
   npx prisma migrate dev --name init
   ```

6. **Rode o servidor:**
   ```bash
   npm run start:dev
   ```

7. **Acesse a API:**
   O servidor estará rodando em [http://localhost:3000](http://localhost:3000).

=======
# Newsletter Streak System

Este projeto é um exemplo de uma plataforma de gamificação usando:
- **NestJS** (framework Node.js)
- **Prisma** (ORM)
- **PostgreSQL** (Banco de dados)

## Configuração

1. Instale as dependências:
   ```bash
   npm install
>>>>>>> fix/auth-me-endpoints
