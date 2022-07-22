
alter table libro_reclamacion add COLUMN
  correlativo VARCHAR(4) default 'LRC0';

alter table libro_reclamacion add column 
respuesta_empresa varchar(200) default 'Sin respuesta';

CREATE VIEW view_reclamos as 
 select 
  concat(correlativo, id_num_declaracion) as correlativo,
  dni, DATE(fecha) as 'fecha_reclamo', 
  date(date_add(fecha, interval 30 day)) as 'fecha_respuesta' 
  from libro_reclamacion;

select * from view_reclamos where dni = "" and correlativo = "";

/**/
SELECT 
    id_num_declaracion
  FROM
    libro_reclamacion 
  WHERE dni = indni AND 
  fecha = (SELECT MAX( fecha) FROM libro_reclamacion)
  
/* alter table libro_reclamacion alter column */
/* fecha_respuesta VARCHAR(50) as (if( */
/*             null, date_add(fecha,interval 30 day) */
/*             )) */
/* CREATE VIEW view_reclamos as */
/*  select */ 
/*   concat(correlativo, id_num_declaracion) as correlativo, */
/*   dni, date(fecha) as fecha, */  
/*   IFNULL(fecha_respuesta, date(date_add(fecha, interval 30 day))) as fecha_respuesta, */
/*   estado, respuesta_empresa */  
/*   from libro_reclamacion; */

/* update view_reclamos set */ 
/*     fecha_respuesta =  where correlativo ="LRC014" and dni =222 */
