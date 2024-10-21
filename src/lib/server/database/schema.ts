import { sqliteTable, integer, text} from "drizzle-orm/sqlite-core"
import {sql} from "drizzle-orm"
import {foreignKey} from "drizzle-orm/mysql-core";

export const jornada = sqliteTable ("jornada", {
        id_jornada: integer("id_jornada").primaryKey(),
        nom_jornada: text("nom_jornada")
      });
      
export const tipo_evento = sqliteTable ("tipo_evento", {
        id_tipo_evento: integer("id_tipo_evento").primaryKey(),
        des_tipo_evento: text("des_tipo_evento"),  
})

export const lugares = sqliteTable ("lugares", {
    id_lugar: integer("id_lugar").primaryKey(),
    nom_lugar: text("nom_lugar")
})

export const autores = sqliteTable ("autores", {
    id_autor: integer("id_autor").primaryKey(),
  mail_autor: text("mail_autor"),
  nom_autor: text("nom_autor")
})

export const eventos = sqliteTable ("eventos", {
    
        id_evento: integer("id_evento") .primaryKey(),
        titulo_evento: text("titulo_evento"),
        desc_evento: text("desc_evento"),
        fec_evento:  integer("fec_evento"), 
        id_tipo_evento: integer("id_tipo_evento").references(()=>tipo_evento.id_tipo_evento),
        id_lugar: integer("id_lugar").references(()=>lugares.id_lugar),
        id_jornada: integer("id_jornada").references(()=>jornada.id_jornada),
        id_autor: integer("id_autor").references(()=>autores.id_autor)
        
    
})

export const detalles_autores_eventos = sqliteTable("detalles_autores_eventos", {
    id_autores: integer("id_autores").references(()=>autores.id_autor),
    id_evento: integer("id_evento").references(()=>eventos.id_evento)
})

export const admin = sqliteTable("admin", {
  id_admin: integer("id_admin") .primaryKey(),
  contra: integer("contra")
})