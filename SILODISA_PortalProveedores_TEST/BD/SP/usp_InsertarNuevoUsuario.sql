CREATE PROCEDURE [dbo].[usp_InsertarNuevoUsuario]
	 @sNombre						varchar(200)
	,@sEMail						varchar(255)
	,@sContacto						varchar(250)
	,@sTelefono						varchar(150)
	,@sCelular						varchar(150)
	,@sRFC							varchar(15)
	,@sDireccionFiscal				varchar(500)
	,@sExtension					varchar(50)
	,@sNombreReprLegal				varchar(200)
	,@sNumProveedor					varchar(200)
	,@sClave						varchar(50)
	,@sUsuario						varchar(200)
AS
BEGIN	
	INSERT INTO Usuarios
           ([sNombre]
           ,[sUsuario]
           ,[sClave]
           ,[IDRoles]
           ,[sEMail]
           ,[sContacto]
           ,[bActivo]
           ,[sTelefono]
           ,[sCelular]
           ,[sRFC]
           ,[sDireccionFiscal]
           ,[bDatosActualizados]
           ,[sExtension]
           ,[sNombreReprLegal]
           ,[sNumProveedor])
		VALUES
		(
		 @sNombre
		,@sUsuario
		,@sClave
		,3
		,@sEMail
		,@sContacto
		,1
		,@sTelefono
		,@sCelular
		,@sRFC
		,@sDireccionFiscal
		,1
		,@sExtension
		,@sNombreReprLegal
		,@sNumProveedor
		);
END