# Todo Alucom

Este é o front-end do projeto Todo Alucom, desenvolvido com React e TypeScript, que implementa uma interface moderna e responsiva para gerenciamento de tarefas.

## Requisitos

- Node.js 18 ou superior
- Git

## Rodando Projeto

O projeto já se encontra em ambiente de produção e pode ser acessado através das URLs:

- Front-end: [https://to-do-alucom-app.vercel.app/](https://to-do-alucom-app.vercel.app/)
- Back-end: [https://todoalucomapi.onrender.com](https://todoalucomapi.onrender.com)

Para executar localmente, certifique-se que o back-end está rodando em sua máquina (veja como fazer isso no repositório do back-end: https://github.com/pedroalima/ToDoAlucomAPI), agora siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/pedroalima/ToDoAlucomApp.git
```

Entre na raiz do projeto:

```bash
cd ToDoAlucomApp
```

2. Instale as dependências:

```bash
npm install
```

3. Procure arquivo axiosClient dentro da pasta services e altere a baseURL: para "http://localhost:8080"

```ts
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## Tecnologias Utilizadas

- React
- TypeScript
- Next
- Tailwind CSS
- Axios
- Lucide React
- Dnd-kit
- Vercel

## Funcionalidades

- Listagem de tarefas
- Criação de novas tarefas
- Exclusão de tarefas
- Marcação de tarefas como concluídas (atualizações enviadas para o banco de dados)
- Arrastar e soltar a tarefa, para reordenar sua posição na lista
- Interface responsiva e moderna
- Validação de formulários

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)
