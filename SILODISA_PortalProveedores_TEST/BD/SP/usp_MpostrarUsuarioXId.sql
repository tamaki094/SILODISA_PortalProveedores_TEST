ALTER PROCEDURE usp_MostrarUsuarioXId
@sUsuario		varchar(50),
@sClave			varchar(50)
AS
BEGIN
	SELECT 
       *
    FROM 
		Usuarios 
	WHERE 
		sUsuario = @sUsuario AND  sClave = @sClave
END