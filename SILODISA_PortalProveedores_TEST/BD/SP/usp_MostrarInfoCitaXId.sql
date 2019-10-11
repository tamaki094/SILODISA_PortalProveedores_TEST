CREATE PROCEDURE usp_MostrarInfoCitaXId
@param_idCitaDetalle INT
AS
BEGIN
	SELECT 
		CAST(u.sNombre + ' ' + SUBSTRING(CAST(c.Hora AS varchar), 0 , 9) AS varchar) [title] 
		,'Cita.aspx' [url]
		, CAST(c.Dia AS varchar) [start]
		, '#6A9DE8' [color]
		, cd.Id [idCitaDetalle]
		, c.Id [idCita]
		, SUBSTRING(CAST(c.Hora AS varchar), 0 , 9) [hora_cita]
	FROM 
		Citas c INNER JOIN CitaDetalle cd ON cd.IdCitas = c.Id
				INNER JOIN Usuarios u ON u.Id = cd.IdUsuario
	WHERE 
	 c.Id = @param_idCitaDetalle;
END