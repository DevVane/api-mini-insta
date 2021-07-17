drop table if exists usuarios;

create table usuarios (
	id serial primary key,
  username text not null unique,
  senha text not null,
  nome text,
  bio text,
  site text,
  imagem text,
  email text unique,
  telefone text,
  genero text,
  perfiloficial boolean default false
);

create table postagens(
	id serial primary key,
  usuario_id int not null references usuarios(id),
  data timestamptz default now(),
  texto text,
  qtdcurtidas int
);

create table postagem_fotos (
  id serial primary key,
  postagem_id int not null references postagens(id),
  imagem text not null
);

create table postagem_comentarios (
  id serial primary key,
  texto text not null,
  data timestamptz default now(),
  usuario_id int not null references usuarios(id),
  postagem_id int not null references postagens(id)
);

create table postagem_curtidas (
  usuario_id int not null references usuarios(id),
  postagem_id int not null references postagens(id),
  data timestamptz default now()
);