ALTER PROCEDURE usp_ActualizarContrasena
@sEMail			varchar(255),
@password		VARCHAR(15)
AS
BEGIN
	UPDATE 
		Usuarios
	SET 
		sClave = @password
	WHERE 
	 sEMail = @sEMail;
END