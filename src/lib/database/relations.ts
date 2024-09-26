import {relations} from "drizzle-orm/relations";
// import {condicion, docentes, encargados, estados} from "./schema";
//export const TiposRelations = relations (tipos, ({many}) => ({articulos: many(Inventario)}));

import { eventos,autores,admin,jornada,lugares,tipo_evento,detalles_autores_eventos} from "./schema";
export const TiposRelations = relations (eventos, ({many}) => ({admin: many(admin)}));
export const TiposRelations1 = relations (eventos,({many}) => ({jornadas: many(jornada)}));
export const TiposRelations2 = relations (eventos,({many}) => ({tipo: many(tipo_evento)}));
export const TiposRelations3 = relations (eventos,({many}) => ({lugares: many(lugares)}));
export const TiposRelations4 = relations (eventos,({many}) => ({detalles_autores_eventos: many(detalles_autores_eventos)}));
export const TiposRelations5 = relations (detalles_autores_eventos,({many}) => ({autores: many(autores)}));