# Mini insta

## Usuário pode fazer
- Logar
- Se cadastrar
- Ver seu perfil/informações
- Editar seus dados
- Ver postagens dos outros
    - Ver quantidade de curtidas numa postagem
    - Ver comentários
- Curtir postagens de outros
- Comentar postagens

## O que não será possível fazer
- Ver localização de uma postagem
- Ver quem curtiu a postagem
- Curtir um comentário
- Comentar comentários
- Descurtir uma postagem

## Endpoints

---
### POST - Login

#### Objetivos gerais
- Validar username e senha
- Buscar o usuário no banco de dados
- Verficar se a senha tá correta
- Gerar token de autenticação
- Retornar dados do usuario e token

#### Dados enviados
- username
- senha

#### Dados retornados
- sucesso / erro
- token

---
### POST - Cadastro

#### Objetivos gerais
- Validar username e senha
- Verificar se o username já existe no banco de dados
- Criptografar a senha
- Cadastrar o usuário no banco de dados
- Retornar sucesso ou erro

#### Dados enviados
- username
- senha

#### Dados retornados
- sucesso / erro
---

### GET - Perfil

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro no banco de dados com a informação do token
- Retornar os dados do usuário

#### Dados enviados
- token ( que terá id ou username)


#### Dados retornados
- URL da foto
- Nome
- Bio
- Username
- Site

##### informações privadas
- Email
- Telefone
- Genero
---

### PUT - Perfil

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro no banco de dados com a informação do token
- Exigir ao menos um campo pra atualizar os dados
- Criptografar a senha (se ela for informada)
- Verificar se o email e username já existe no banco de dados (se for informado)
- Atualizar o registro do usuário no banco de dados
- Retornar sucesso ou erro

#### Dados enviados
- URL da foto
- Nome
- Bio
- Username
- Site
- Email
- Telefone
- Genero

#### Dados retornados
- sucesso / erro
---

### GET - Postagens

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro no banco de dados com a informação do token
- Retornar postagens de outras pessoas

#### Dados enviados
- token
- offset

#### Dados retornados
- Postagens [] 
    - id
    - já curti?
    - Usuário
        - username
        - URL da foto
        - perfil oficial?
    - Fotos [] 
    - quantidade curtidas
    - Comentários [] 
        - username
        - texto
    - Data
---

### POST - Postagens

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro no banco de dados com a informação do token
- Exigir que seja informado ao menos uma foto
- Cadastro das fotos da postagem
- Cadastrar postagem para o usuário logado
- Retornar sucesso/erro

#### Dados enviados
- token
- texto
- array com fotos

#### Dados retornados
- sucesso ou erro
---

### POST - Curtir

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro no banco de dados com a informação do token
- Buscar o cadastro da postagem com o id informado
- Verificar se o usuário já curtia a postagem
- Cadastrar curtida da postagem no banco de dados
- Retornar sucesso ou erro

#### Dados enviados
- token (com username ou id)
- id da postagem

#### Dados retornados
- sucesso ou erro
---

### POST - Comentar

#### Objetivos gerais
- Validar o token do usuário
- Buscar o cadastro no banco de dados com a informação do token
- Buscar o cadastro da postagem com o id informado
- Validar texto
- Cadastrar comentário
- Retornar sucesso ou erro

#### Dados enviados
- token (com username ou id)
- id da postagem
- texto do comentário

#### Dados retornados
- sucesso ou erro
---

[README no HackMD](https://hackmd.io/-G-MKITeThq7p2DHDSzEBQ)
