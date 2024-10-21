import { relations } from "drizzle-orm/relations";
import { autores, eventos, jornada, lugares, tipoEvento, detallesAutoresEventos } from "./schema";

export const eventosRelations = relations(eventos, ({one}) => ({
	autore: one(autores, {
		fields: [eventos.idAutor],
		references: [autores.idAutor]
	}),
	jornada: one(jornada, {
		fields: [eventos.idJornada],
		references: [jornada.idJornada]
	}),
	lugare: one(lugares, {
		fields: [eventos.idLugar],
		references: [lugares.idLugar]
	}),
	tipoEvento: one(tipoEvento, {
		fields: [eventos.idTipoEvento],
		references: [tipoEvento.idTipoEvento]
	}),
}));

export const autoresRelations = relations(autores, ({many}) => ({
	eventos: many(eventos),
	detallesAutoresEventos: many(detallesAutoresEventos),
}));

export const jornadaRelations = relations(jornada, ({many}) => ({
	eventos: many(eventos),
}));

export const lugaresRelations = relations(lugares, ({many}) => ({
	eventos: many(eventos),
}));

export const tipoEventoRelations = relations(tipoEvento, ({many}) => ({
	eventos: many(eventos),
}));

export const detallesAutoresEventosRelations = relations(detallesAutoresEventos, ({one}) => ({
	eventos: one(eventos, {
		fields: [detallesAutoresEventos.idEvento],
		references: [eventos.idEvento]
	}),
	autores: one(autores, {
		fields: [detallesAutoresEventos.idAutor],
		references: [autores.idAutor]
	}),
}));

export const entosRelations = relations(eventos, ({many}) => ({
	detallesAutoresEventos: many(detallesAutoresEventos),
}));