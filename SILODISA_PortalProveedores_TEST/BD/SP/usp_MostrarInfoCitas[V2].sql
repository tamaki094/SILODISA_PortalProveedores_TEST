ALTER PROCEDURE usp_MostrarInfoCitas
AS
BEGIN
	SELECT 
		CAST(u.sNombre + ' ' + SUBSTRING(CAST(c.Hora AS varchar), 0 , 9) AS varchar) [title] 
		,'Cita.aspx' [url]
		, CAST(c.Dia AS varchar) [start]
		, '#6A9DE8' [color]
		, cd.Id [id_cita]
		, SUBSTRING(CAST(c.Hora AS varchar), 0 , 9) [hora_cita]
	FROM 
		Citas c INNER JOIN CitaDetalle cd ON cd.IdCitas = c.Id
				INNER JOIN Usuarios u ON u.Id = cd.IdUsuario;
END

