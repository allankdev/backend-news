# 📩 The News - Gamificação de Newsletters

## 🚀 Sobre o Projeto
O **The News** é uma plataforma de **gamificação para newsletters**, incentivando o engajamento dos leitores através de **streaks, badges e rankings**. Inspirado no **Duolingo**, o sistema permite que os usuários acompanhem seu progresso e conquistas enquanto leem as newsletters enviadas regularmente.

## 🎯 Funcionalidades
### ✅ **Área do Usuário**
- **Página Inicial** com introdução ao projeto e botão para login
- **Dashboard do Usuário** exibindo:
  - Streak atual (quantos dias consecutivos abriu a newsletter)
  - Histórico de leituras e progresso
  - Mensagens motivacionais para incentivar o usuário
  - Conquistas e Badges

### ✅ **Dashboard Administrativo**
- Visualização de **métricas de engajamento geral**
- **Ranking** dos leitores mais engajados
- **Filtros avançados** por período, newsletter e status de streak
- **Gráficos de padrões de engajamento**

### ✅ **Regras de Streak e Badges**
- Streak aumenta **+1 a cada dia consecutivo** que o usuário abrir uma newsletter
- Se o usuário perder um dia, o streak é **zerado** (exceto domingos)
- Badges são concedidos ao atingir **3, 7, 14, 30 dias de streak**

## 🛠 Tecnologias Utilizadas
- **Frontend**: Next.js, Tailwind CSS, shadcn/ui, Recharts
- **Backend**: NestJS, Prisma ORM, PostgreSQL
- **Autenticação**: JWT
- **Webhook**: Beehiiv API para rastrear aberturas de emails

## 🏗 Estrutura do Projeto
```
📂 backend/
├── src/
│   ├── auth/                  # Módulo de autenticação
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── jwt-auth.guard.ts
│   │   ├── jwt.strategy.ts
│   │   ├── auth.dto.ts        # DTOs para login e registro
│   │   └── auth.module.ts
│   ├── badges/                # Módulo de badges (conquistas)
│   │   ├── badges.controller.ts
│   │   ├── badges.service.ts
│   │   ├── badges.module.ts
│   │   └── badges.dto.ts      # DTOs para badges
│   ├── readers/               # Módulo de leitores
│   │   ├── readers.controller.ts
│   │   ├── readers.service.ts
│   │   ├── readers.module.ts
│   │   └── readers.dto.ts     # DTOs para leitores
│   ├── newsletters/           # Módulo de newsletters
│   │   ├── newsletters.controller.ts
│   │   ├── newsletters.service.ts
│   │   ├── newsletters.module.ts
│   │   └── newsletters.dto.ts # DTOs para newsletters
│   ├── streaks/               # Módulo de streaks (sequências de leitura)
│   │   ├── streaks.controller.ts
│   │   ├── streaks.service.ts
│   │   ├── streaks.module.ts
│   │   └── streaks.dto.ts     # DTOs para streaks
│   ├── webhooks/              # Módulo de webhooks
│   │   ├── webhooks.controller.ts
│   │   ├── webhooks.service.ts
│   │   ├── webhooks.module.ts
│   │   └── webhooks.dto.ts    # DTOs para webhooks
│   ├── prisma/                # Configuração do Prisma
│   │   ├── prisma.service.ts  # Serviço do Prisma
│   │   └── prisma.module.ts   # Módulo do Prisma
│   ├── utils/                 # Utilitários
│   │   ├── validation.utils.ts
│   │   ├── date.utils.ts
│   │   └── logger.utils.ts    # Logging centralizado
│   ├── app.module.ts          # Módulo principal
│   └── main.ts                # Ponto de entrada
├── prisma/
│   ├── migrations/            # Migrações do banco de dados
│   ├── schema.prisma          # Schema do Prisma
│   └── seed.ts                # Seed para dados iniciais
├── tests/                     # Testes automatizados
│   ├── unit/                  # Testes unitários
│   └── e2e/                   # Testes de integração
├── .env                       # Variáveis de ambiente
├── .env.example               # Template de variáveis de ambiente
├── docker-compose.yml         # Configuração do Docker
├── package.json               # Dependências do projeto
├── tsconfig.json              # Configuração do TypeScript
└── README.md                  # Documentação do projeto
```

## 🔧 Como Rodar o Projeto
### **1️⃣ Configurar o Backend**
```sh
cd backend-news
npm install
npm run start
```
Certifique-se de que o backend está rodando em **http://localhost:3000**

### **2️⃣ Rodar o Frontend**
```sh
cd frontend-news
npm install
npm run dev
```
O frontend rodará em **http://localhost:4000**

## 🌍 Variáveis de Ambiente (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXTAUTH_URL=http://localhost:4000
JWT_SECRET=super_secret_key
```

## ✅ Testes Realizados
- **Autenticação e redirecionamento correto de usuários**
- **Incremento e reset de streaks conforme regras**
- **Recebimento de dados via webhook do Beehiiv**
- **Exibição correta dos badges e ranking**
- **Responsividade e experiência do usuário**

## 📽 Demonstração
📌 **[Inserir link do vídeo de demonstração aqui]**

## 🔍 Melhorias Futuras
- Implementar **notificações push** para lembrar os usuários de abrir a newsletter
- Criar **mecânica de desafios e missões diárias**
- Permitir **customização de avatares e perfis**

## 📦 Entrega
- ✅ Código-fonte no **GitHub (repositório privado)**
- ✅ Demonstração funcional **(vídeo ou link hospedado)**
- ✅ Relatório de análise técnica

---
Feito com ❤️ por **[Allan Kelven]** 🚀

