create database divein;
use divein;
create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar (100) not null,
    sobrenome varchar (100) not null,
    email varchar (100) not null,
    senha varchar (45) not null
);
create table criatura (
	idCriatura int primary key auto_increment,
    imagem varchar (100),
    nome varchar (100) not null,
    nomeCientifico varchar (100),
    habitat varchar (1000),
    praia varchar (100) not null,
    uf char (2) not null,
    descricao varchar (1000) not null
);
create table registro (
	usuario_idUsuario int,
    constraint registroUsuario foreign key (usuario_idUsuario) references usuario(idUsuario),
    criatura_idCriatura int,
    constraint registroCriatura foreign key (criatura_idCriatura) references criatura(idCriatura),
    idRegistro int,
    primary key (usuario_idUsuario, criatura_idCriatura, idRegistro),
    dtRegistro date
);
insert into usuario (nome, sobrenome, email, senha) values
	('Igor', 'Dias', 'igor.reis@sptech.school', 'Sptech1234');
insert into criatura (imagem, nome, nomeCientifico, habitat, praia, uf, descricao) values
	('../assets/garoupa.jpg', 'Garoupa', 'Epinephelidae', 'Tocas ou cavidades', 'Ubatuba', 'SP', 'São habitantes dos oceanos tropicais, sub-tropicais e temperados, vivendo geralmente em fundos coralinos ou rochosos, onde têm o hábito de se esconderem. São predadores activos - a maior parte tem uma boca grande e dentes aguçados, por vezes, mesmo no céu-da-boca. Algumas espécies atingem tamanhos enormes - até 2,40 metros e mais de 300 quilogramas de peso. Muitas têm cores brilhantes e padrões de coloração muito especiais.'),
	('../assets/caravela-portuguesa.avif', 'Caravela-Portuguesa', 'Physalia physalis', 'Águas tropicais e subtropicais quentes dos oceanos Atlântico, Pacífico e Índico', 'Caraguatatuba', 'SP', 'A caravela-portuguesa não se move - flutua à superfície das águas, empurrada pelo vento, com os tentáculos pendentes com a finalidade de capturar peixes para a sua alimentação. Os tentáculos podem atingir um comprimento de 50 metros, mas a média é cerca de 30 metros'),
	('../assets/estrela-do-mar.jpg', 'Estrela-Do-Mar', 'Asteroidea', 'Vivem em todos os oceanos do mundo, desde águas tropicais a polares, e podem ser encontradas desde a zona entre marés até profundidades de cerca de 6.000 metros', 'Praia do Cedro', 'SP', 'Existem cerca de 1.900 espécies de estrela-do-mar em todos os oceanos do mundo, dos trópicos até as gélidas águas polares. Elas são encontradas desde a zona intermareal, descendo para as profundezas abissais, 6.000m (20.000 pés) abaixo da superfície.');
insert into registro (usuario_idUsuario, criatura_idCriatura, idRegistro, dtRegistro) values
    (1, 1, 1, '2025-01-18'),
    (1, 2, 1, '2025-01-18'),
    (1, 3, 1, '2025-11-18');
SELECT count(c.nome) as quantidade, date_format(r.dtRegistro, '%m/%Y') as periodo from criatura as c join registro as r on c.idCriatura = r.criatura_idCriatura group by periodo order by periodo limit 12;
