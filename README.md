<div align="center">
  <img src="public/LogoTeleAjuda.png" alt="Logo do Projeto TeleAjuda" width="200"/>

  <h1 align="center">TeleAjuda IMREA - Challenge FIAP (Sprint 4)</h1>

  <p align="center">
    Plataforma SPA (Single Page Application) acessível e intuitiva para reduzir o absenteísmo em teleconsultas, com gestão de tickets e autenticação de usuários (Paciente e Funcionário) integrada a uma API Java.
  </p>
</div>

### 🔗 Links Importantes (Avaliação)

| Link | URL |
| :--- | :--- |
| [cite_start]**Deploy (Vercel)** [cite: 87] | `https://tele-ajuda-front.vercel.app` |
| [cite_start]**Repositório (GitHub)** [cite: 133] | `https://github.com/TeleAjudaChallenge/Front2.git` |
| [cite_start]**Vídeo (YouTube)** [cite: 134] | `https://youtu.be/k77RvOJk8ng` |

---

### 🚀 Tecnologias Utilizadas

[cite_start]Este projeto foi construído utilizando as seguintes tecnologias, conforme os requisitos da Sprint 04[cite: 5, 11]:

- [cite_start]**React 19** [cite: 5]
- [cite_start]**Vite** [cite: 5]
- [cite_start]**TypeScript** [cite: 5]
- [cite_start]**TailwindCSS** [cite: 32] (Para toda a estilização e responsividade)
- [cite_start]**React Router DOM** [cite: 17] (Para gerenciamento de rotas da SPA)
- **React Hook Form** (Para validação de formulários)
- **React Context API** (Para gerenciamento de estado global de autenticação)
- [cite_start]**Fetch API** (Para consumo da API REST Java) [cite: 7]

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</div>

---

### 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte do Challenge da FIAP para a disciplina de Front-End Design Engineering. [cite_start]A solução visa apoiar o Instituto de Reabilitação do Hospital das Clínicas (HC-IMREA), com foco em reduzir o absenteísmo em teleconsultas através de uma plataforma acessível, intuitiva e responsiva[cite: 8].

[cite_start]Nesta versão final (Sprint 04), o projeto evoluiu para uma Single Page Application (SPA) completa [cite: 5][cite_start], com autenticação, rotas protegidas e integração total com a API de back-end (`https://teleajuda.onrender.com`)[cite: 7].

### ✨ Funcionalidades Principais

A plataforma conta com dois fluxos de usuário principais com autenticação e consumo de API:

**1. Fluxo do Paciente:**
* **Autenticação:** Cadastro (`POST /paciente`) e Login (`GET /paciente/validar/...`).
* **Gestão de Perfil:** Visualização e atualização dos próprios dados (`GET /paciente/cpf/...` e `PUT /paciente`).
* **Suporte:** Abertura de tickets de chamado (`POST /ticket`), vinculados ao seu CPF.
* **Feedback:** Envio de Pesquisa de Satisfação (`POST /pesquisa`).

**2. Fluxo do Funcionário:**
* **Autenticação:** Login (`GET /funcionario/validar/...`).
* **Dashboard de Tickets:** Visualização de todos os tickets abertos pelos pacientes (`GET /ticket`).
* **Atendimento:** Envio de respostas aos tickets (`PUT /ticket`).
* **Análise de Dados:** Visualização dos resultados e médias da Pesquisa de Satisfação (`GET /pesquisa`).

**Outras Funcionalidades:**
* [cite_start]**Páginas Obrigatórias:** Home, Sobre, FAQ, Contato e Integrantes[cite: 155].
* [cite_start]**Rotas Dinâmicas:** Página de contato com rota dinâmica (`/contato/:filialId`)[cite: 41, 54].
* **Rotas Protegidas:** O usuário não consegue acessar as páginas do sistema (como `/perfil` ou `/chamados`) sem estar logado, sendo redirecionado para `/login`.
* **Validação de Formulários:** Todos os formulários (Login, Cadastro, Chamados, Pesquisa, Perfil) usam `react-hook-form` para validação em tempo real.
* [cite_start]**Design Responsivo:** Interface totalmente adaptável para desktops, tablets e celulares usando TailwindCSS[cite: 8, 70].

---

### [cite_start]👨‍💻 Integrantes da Equipe [cite: 129]

| Nome Completo | RM | Turma |
| :--- | :--- | :--- |
| Matheus Borges Sansão | 562896 | 1TDSPO |
| Julia Correa e Souza Altino | 564870 | 1TDSPO |
| Nicholas Camillo Canadas de Paulo | 561262 | 1TDSPO |

---

### ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/TeleAjudaChallenge/Front2.git](https://github.com/TeleAjudaChallenge/Front2.git)
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd [pasta-do-projeto]
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

---

### [cite_start]📂 Estrutura de Pastas [cite: 132]

O projeto segue uma estrutura de pastas organizada para facilitar a manutenção e a escalabilidade:

/src 
|-- /assets # Imagens, ícones e outros arquivos estáticos 
|-- /components # Componentes reutilizáveis (Header, Footer, Menu) 
|-- /data # Mock de dados (ex: lista de filiais) 
|-- /routes # Componentes que representam as páginas (telas) da aplicação 
|-- /types # Definições de tipos do TypeScript 
|-- App.tsx # Componente principal (Layout, Contexto de Auth) 
|-- main.tsx # Ponto de entrada (Configuração de Rotas) 
|-- global.css # Estilos globais e configuração do Tailwind