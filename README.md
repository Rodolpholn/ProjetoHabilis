#Projeto Notas Rápidas
Este é um mini projeto full-stack, desenvolvido como parte de um processo seletivo, que implementa uma funcionalidade de "Notas Rápidas" para um sistema de CRM. A aplicação permite que usuários adicionem e visualizem notas associadas a clientes específicos, demonstrando habilidades de desenvolvimento e integração entre frontend e backend.

Funcionalidades
Adicionar Notas: Um formulário no frontend para criar novas notas.

Visualizar Notas: Exibição da lista de notas de um cliente específico.

API RESTful: Endpoints de backend para gerenciar as notas (POST e GET).

Componente Dinâmico: O frontend atualiza a lista de notas automaticamente após a inserção.

Tecnologias Utilizadas
Backend: Node.js com o framework Express.js.

Frontend: Angular (com arquitetura de componentes autônomos).

Banco de Dados: MySQL (a modelagem está disponível no código).

Como Rodar o Projeto
Siga os passos abaixo para configurar e executar o projeto em sua máquina.

Pré-requisitos
Node.js e npm instalados.

Angular CLI instalado globalmente (npm install -g @angular/cli).

Backend
Navegue até a pasta backend e instale as dependências:

Bash

npm install
Inicie o servidor Node.js. O banco de dados é em memória, então será resetado a cada reinício.

Bash

node app.js
O servidor estará rodando em http://localhost:3000.

Frontend
Navegue até a pasta frontend e instale as dependências:

Bash

npm install
Inicie a aplicação Angular. Ela se conectará automaticamente ao backend.

Bash

ng serve --open
O aplicativo será aberto no seu navegador em http://localhost:4200/.

Uso
Ao acessar a aplicação, você verá o componente de notas.

Use o campo de texto para adicionar uma nota e clique no botão para salvar. A lista será atualizada automaticamente.
