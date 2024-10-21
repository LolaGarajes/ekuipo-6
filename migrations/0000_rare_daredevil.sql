-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `jornada` (
	`id_jornada` integer PRIMARY KEY,
	`nom_jornada` text(255)
);
--> statement-breakpoint
CREATE TABLE `tipo_evento` (
	`id_tipo_evento` integer PRIMARY KEY,
	`des_tipo_evento` text(255)
);
--> statement-breakpoint
CREATE TABLE `lugares` (
	`id_lugar` integer PRIMARY KEY,
	`nom_lugar` text(255)
);
--> statement-breakpoint
CREATE TABLE `autores` (
	`id_autor` integer PRIMARY KEY,
	`mail_autor` text(255),
	`nom_autor` text(255)
);
--> statement-breakpoint
CREATE TABLE `admin` (
	`id_admin` integer,
	`contraseña` integer
);
--> statement-breakpoint
CREATE TABLE `eventos` (
	`id_evento` integer PRIMARY KEY,
	`titulo_evento` text,
	`desc_evento` text,
	`fec_evento` numeric,
	`id_tipo_evento` integer,
	`id_lugar` integer,
	`id_jornada` integer,
	`id_autor` integer,
	FOREIGN KEY (`id_autor`) REFERENCES `autores`(`id_autor`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_jornada`) REFERENCES `jornada`(`id_jornada`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_lugar`) REFERENCES `lugares`(`id_lugar`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_tipo_evento`) REFERENCES `tipo_evento`(`id_tipo_evento`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `detalles_autores_eventos` (
	`id_autor` integer,
	`id_evento` integer,
	FOREIGN KEY (`id_evento`) REFERENCES `entos`(`id_evento`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_autor`) REFERENCES `autores`(`id_autor`) ON UPDATE no action ON DELETE no action
);

*/