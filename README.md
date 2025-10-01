# To Do List simples

Aplicação simples de lista de tarefas desenvolvida como desafio técnico.
O projeto FullStack utiliza **HTML, CSS e JavaScript puro** no **Frontend**, e **API em Node.js** com persistência em **SQLite** para o **Backend**.

## Tecnologias utilizadas
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js (Express)
- **Banco de dados**: SQLite

## Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/pt) v18+
- npm
#### Como rodar o backend
1. faça o clone do projeto em um diretório usando o seguinte comando:
```bash
git clone https://github.com/Thaisfelicio/To-Do-List-Simples.git
```
2. Acesse o diretório do projeto:
```bash
cd To-Do-List-Simples/backend
```
3. Instale as dependências:
```bash
npm install
```
4. Inicie o servidor:
```bash
npm run dev
```

O servidor estará disponível em: http://localhost:3000

## Decisões arquiteturais
### Frontend
- Estrutura HTML simples.
- Estilização responsiva em CSS, utilizando medidas dinâmicas.
- Manipulação dinâmica do DOM via JavaScript para criar elementos das tarefas.
- Consumo da API para persistência das informações.

### Backend
Organização em pastas inspirada na **Arquitetura Limpa**, mas simplificada:
- **models:** entidades da aplicação.
- **repositories:** camada de acesso ao banco de dados.
- **controllers:** lógica de cada rota.
- **routes:** expõe os endpoints para o frontend.

`.gitignore` configurado para:
- Ignorar `node_modules` (por ser pesado e gerado localmente)
- Ignorar `database.db` (para que cada usuário crie o seu ambiente local)

## Limitações
- Não é possível editar tarefas.
- Não há filtros de tarefas.
- Falata tratamento de erros e validações.
- Design simples.
- Ainda não possui deploy.

## Próximos passos
- Melhorar a interface.
- Implementar testes e validações.
- Adicionar funcionalidade de edição de tarefas.
- Criar filtros (pendentes, concluídos, todas).
- Realizar deploy.
