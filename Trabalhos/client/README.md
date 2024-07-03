Instale as dependências:
npm install
Rodando o Projeto
Para iniciar o servidor de desenvolvimento, use o seguinte comando:
npm start
Isso iniciará o aplicativo React em modo de desenvolvimento. Abra http://localhost:3000 para visualizá-lo no navegador.

Funcionalidades
Adicionar Livro: Acesse a rota /add-book para adicionar um novo livro.
Remover Livro: Acesse a rota /remove-book para remover um livro existente.
Pesquisar Livro: Acesse a rota /search-book para pesquisar por um livro adicionado.
Estrutura do Projeto
src/components/: Contém os componentes React como AddBookForm, RemoveBookForm, SearchBookForm, etc.
src/pages/: Contém as páginas principais como HomePage.
src/context/BookContext.js: Define o contexto BookContext para gerenciar o estado dos livros.
src/App.js: Configuração das rotas e layout principal da aplicação.
Tecnologias Utilizadas
React
React Router DOM
Context API
