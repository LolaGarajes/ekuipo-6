import {relations} from "drizzle-orm/relations";
// import {condicion, docentes, encargados, estados} from "./schema";
//export const TiposRelations = relations (tipos, ({many}) => ({articulos: many(Inventario)}));

import { eventos,autores,admin,jornada,lugares,tipo_evento,detalles_autores_eventos} from "./schema";
export const TiposRelations = relations (eventos, ({many}) => ({administrador: many(admin)}));