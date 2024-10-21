import { sqliteTable, integer, foreignKey, text, numeric } from "drizzle-orm/sqlite-core"
  

export const jornada = sqliteTable("jornada", {
	idJornada: integer("id_jornada").primaryKey(),
	nomJornada: text("nom_jornada", { length: 255 }),
});

export const tipoEvento = sqliteTable("tipo_evento", {
	idTipoEvento: integer("id_tipo_evento").primaryKey(),
	desTipoEvento: text("des_tipo_evento", { length: 255 }),
});

export const lugares = sqliteTable("lugares", {
	idLugar: integer("id_lugar").primaryKey(),
	nomLugar: text("nom_lugar", { length: 255 }),
});

export const autores = sqliteTable("autores", {
	idAutor: integer("id_autor").primaryKey(),
	mailAutor: text("mail_autor", { length: 255 }),
	nomAutor: text("nom_autor", { length: 255 }),
});

export const admin = sqliteTable("admin", {
	idAdmin: integer("id_admin"),
	"contraseña": integer("contraseña"),
});

export const eventos = sqliteTable("eventos", {
	idEvento: integer("id_evento").primaryKey(),
	tituloEvento: text("titulo_evento"),
	descEvento: text("desc_evento"),
	fecEvento: numeric("fec_evento"),
	idTipoEvento: integer("id_tipo_evento").references(() => tipoEvento.idTipoEvento),
	idLugar: integer("id_lugar").references(() => lugares.idLugar),
	idJornada: integer("id_jornada").references(() => jornada.idJornada),
	idAutor: integer("id_autor").references(() => autores.idAutor),
});

export const detallesAutoresEventos = sqliteTable("detalles_autores_eventos", {
	idAutor: integer("id_autor").references(() => autores.idAutor),
	idEvento: integer("id_evento").references(() => eventos.idEvento),
});

