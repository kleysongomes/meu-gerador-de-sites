# 🚀 Gerador de Sites Dinâmicos

![Status](https://img.shields.io/badge/status-em--desenvolvimento-green)
![Tecnologia](https://img.shields.io/badge/tecnologia-Vue.js%20%7C%20Supabase-blue)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-informational)

Um gerador de sites "no-code" intuitivo que permite a qualquer pessoa, mesmo sem conhecimento técnico, criar uma página web profissional, responsiva e pronta para ser publicada. O projeto utiliza uma interface de edição moderna e um fluxo de publicação simplificado com monetização via doação PIX.

<img width="1903" height="892" alt="image" src="https://github.com/user-attachments/assets/90b528f5-fb31-4c4d-ae07-7dffdc75509b" />

---

### ✨ Funcionalidades Principais

- **Editor Visual Profissional:** Uma interface de 3 painéis (Navegação, Propriedades, Pré-visualização) inspirada nas melhores ferramentas do mercado.
- **Pré-visualização em Tempo Real:** Todas as alterações feitas no painel de edição são refletidas instantaneamente na pré-visualização do site.
- **Templates Profissionais:** Dois temas de alta qualidade prontos para usar ("Tema Claro" e "Tema Escuro"), baseados em um design moderno.
- **Conteúdo Dinâmico:** Adicione e remova seções de conteúdo de forma ilimitada para construir a página.
- **Layout Responsivo:** Tanto o editor quanto os sites gerados são totalmente funcionais em desktops, tablets e celulares.
- **Backend Serverless com Supabase:** Todos os dados dos sites criados são armazenados de forma segura em um banco de dados PostgreSQL, gerenciado pelo Supabase.
- **Geração de HTML:** Além de salvar os dados, o sistema gera um backup em HTML puro do site final para portabilidade.
- **Fluxo de Publicação com PIX:** Um fluxo de monetização simples e opcional que exibe um QR Code PIX antes de publicar o site.

---

### 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **Frontend:**
  - [Vue.js 3](https://vuejs.org/) (Composition API)
  - [Vite](https://vitejs.dev/)
  - [Pinia](https://pinia.vuejs.org/) (para gerenciamento de estado)
  - [Vue Router](https://router.vuejs.org/)
- **Estilização:**
  - [Tailwind CSS](https://tailwindcss.com/)
  - [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- **Backend-as-a-Service:**
  - [Supabase](https://supabase.io/) (Banco de Dados PostgreSQL, APIs automáticas)
- **Outras Bibliotecas:**
  - `qrcode` (para geração do QR Code PIX)

---

### 🏁 Começando

Siga estas instruções para rodar o projeto em sua máquina local.

#### Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/) (versão LTS recomendada) instalado.

#### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd nome-do-repositorio
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

#### Configuração do Ambiente

1.  Crie uma cópia do arquivo de exemplo de variáveis de ambiente:
    ```bash
    cp .env.example .env
    ```
2.  Abra o arquivo `.env` que você acabou de criar.
3.  Você precisará preenchê-lo com suas chaves do Supabase, que você pode encontrar no painel do seu projeto em `Project Settings > API`.

    ```env
    VITE_SUPABASE_URL="SUA_URL_DO_SUPABASE_AQUI"
    VITE_SUPABASE_ANON_KEY="SUA_CHAVE_ANON_PUBLIC_AQUI"
    ```

#### Rodando o Projeto

Para iniciar o servidor de desenvolvimento, rode o comando:
```bash
npm run dev

Abra http://localhost:5173 (ou o endereço que aparecer no seu terminal) no seu navegador para ver o projeto em ação.
