create database divein;
use divein;
create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar (100) not null,
    sobrenome varchar (100) not null,
    email varchar(100) not null,
    senha varchar(45) not null
);
create table criatura (
	idCriatura int primary key auto_increment,
    imagem varchar(100),
    nome varchar (100) not null,
    nomeCientifico varchar (100),
    habitat varchar (100),
    praia varchar (100) not null,
    uf char(2) not null,
    descricao varchar (1000) not null
);
create table registro (
	usuario_idUsuario int,
    constraint registroUsuario foreign key (usuario_idUsuario) references usuario(idUsuario),
    criatura_idCriatura int,
    constraint registroCriatura foreign key (criatura_idCriatura) references criatura(idCriatura),
    idRegistro int auto_increment,
    primary key (usuario_idUsuario, criatura_idCriatura, idResgitro),
    dtRegistro date
);
insert into usuario (nome, sobrenome, email, senha) values
	('Igor', 'Dias', 'igor.reis@sptech.school', 'Sptech1234');
insert into criatura (imagem, nome, nomeCientifico, habitat, praia, uf, descricao) values
	('C:\Users\igord\Desktop\Projeto Individual\garoupa.jpg', 'Garoupa', 'Epinephelidae', 'Tocas ou cavidades', 'Ubatuba', 'SP', 'São habitantes dos oceanos tropicais, sub-tropicais e temperados, vivendo geralmente em fundos coralinos ou rochosos, onde têm o hábito de se esconderem. São predadores activos - a maior parte tem uma boca grande e dentes aguçados, por vezes, mesmo no céu-da-boca. Algumas espécies atingem tamanhos enormes - até 2,40 metros e mais de 300 quilogramas de peso. Muitas têm cores brilhantes e padrões de coloração muito especiais.');