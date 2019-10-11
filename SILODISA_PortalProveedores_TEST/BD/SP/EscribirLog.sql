ALTER PROCEDURE EscribirLog
@descripcion_error		nvarchar(MAX),
@Nivel					nvarchar(200),
@Hora					datetime,
@Usuario				int
AS
BEGIN
	INSERT INTO Log_registro(Descripcion_Error, Nivel, Hora, Usuario) VALUES(@descripcion_error, @Nivel, @Hora, @Usuario);
END