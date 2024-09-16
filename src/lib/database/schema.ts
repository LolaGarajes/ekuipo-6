import { SQliteTable, integer, text} from "drizzle-orm/sqlite-core"
import {sql} from "drizzle-orm"
import {foreignKey} from "drizzle-orm/mysql-core";

export const jornada = SQliteTable ("jornada", {
        id_jornada: integer("id_jornada") .PRIMARYKEY,
        nom_jornada: text("nom_jornada")
      });
      
export const tipo_evento = SQliteTable ("tipo_evento", {
        id_tipo_evento: integer("id_tipo_evento") .PRIMARYKEY,
        des_tipo_evento: text("des_tipo_evento"),  
})

export const lugares = SQliteTable ("lugares", {
    id_lugar: integer("id_lugar") .PRIMARYKEY,
    nom_lugar: text("nom_lugar")
})

export const autores = SQliteTable ("autores", {
    id_autor: integer("id_autor") .PRIMARYKEY,
  mail_autor: text("mail_autor"),
  nom_autor: text("nom_autor")
})

export const eventos = SQliteTable ("eventos", {
    
        id_evento: integer("id_evento") .PRIMARYKEY,
        titulo_evento: text("titulo_evento"),
        desc_evento: text("desc_evento"),
        fec_evento: new Date("fec_evento"), /* necesita ser cambiado a tipo date (pedir ayuda al profesor del pascual) */
        id_tipo_evento: integer("id_tipo_evento").references(()=>tipo_evento.id_tipo_evento),
        id_lugar: integer("id_lugar").references(()=>lugares.id_lugares),
        id_jornada: integer("id_jornada").references(()=>jornada.id_jornada),
        id_autor: integer("id_autor").references(()=>autores.id_autores)
        
    
})

export const detalles_autores_eventos = SQliteTable("detalles_autores_eventos", {
    id_autores: integer("id_autores").references(()=>autores.id_autores),
    id_evento: integer("id_evento").references(()=>eventos.id_evento)
})

export const admin = SQliteTable("admin", {
  id_admin: integer("id_admin") .PRIMARYKEY,
  contra: integer("contra")
})