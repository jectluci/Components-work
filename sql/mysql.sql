
alter table libro_reclamacion add COLUMN
  correlativo VARCHAR(4) default 'LRC0'


CREATE VIEW view_reclamos as 
 select 
  concat(correlativo, id_num_declaracion) as correlativo,
  dni, DATE(fecha) as 'fecha reclamo', 
  date(date_add(fecha, interval 30 day)) as 'fecha respuesta' 
  from libro_reclamacion;

select * from view_reclamos where dni = 70817763 and correlativo = "LRC01"
