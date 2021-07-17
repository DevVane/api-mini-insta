const express = require('express');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login');
const verificaLogin = require('./filtros/verificaLogin');
const postagens = require('./controladores/postagens');

const rotas = express();

//cadastro de usuario
rotas.post('/cadastro', usuarios.cadastrarUsuario);

//login
rotas.post('/login', login.login);

//filtro pra verificar se usuário ta logado
rotas.use(verificaLogin);

//perfil
rotas.get('/perfil', usuarios.obterPerfil);
rotas.put('/perfil', usuarios.atualizarPerfil);

//postagens
rotas.get('/postagens', postagens.obterPostagens);
rotas.post('/postagens', postagens.cadastrarPostagem);
rotas.post('/postagens/:postagemId/curtir', postagens.curtirPostagem);
rotas.post('/postagens/:postagemId/comentar', postagens.comentarPostagem);



module.exports = rotas;