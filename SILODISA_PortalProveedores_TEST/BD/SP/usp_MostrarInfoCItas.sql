ALTER PROCEDURE usp_MostrarInfoCItas
AS
BEGIN
	SELECT 
		cd.Id [id]
		, CAST(CAST(c.Dia AS varchar) + ' ' + SUBSTRING(CAST(c.Hora AS varchar), 0 , 9) AS datetime) [start]
		, CAST(u.sNombre + ' ' + SUBSTRING(CAST(c.Hora AS varchar), 0 , 9) AS varchar) [subject] 
		, 'Cita detalle' [description]
		, 1 [resourceId]
	FROM 
		Citas c INNER JOIN CitaDetalle cd ON cd.IdCitas = c.Id
				INNER JOIN Usuarios u ON u.Id = cd.IdUsuario;
END

