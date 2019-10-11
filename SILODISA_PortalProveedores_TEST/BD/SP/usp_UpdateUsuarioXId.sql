USE [Portal_Proveedores]
GO
/****** Object:  StoredProcedure [dbo].[usp_UpdateUsuarioXId]    Script Date: 12/09/2019 11:19:14 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[usp_UpdateUsuarioXId]
	@IDUsuarios						int	
	,@sNombre						varchar(200)
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
	,@bActivo						bit
	,@IDRoles						int	
AS
BEGIN	
	IF (Select bActivo from Usuarios where Id = @IDUsuarios) = 'false' AND 
		(Select bDatosActualizados from Usuarios where Id = @IDUsuarios) = 'false' 
	BEGIN		
		UPDATE Usuarios
		   SET [sNombre]			= @sNombre				
			  ,[sClave]				= @sClave				
			  ,[sEMail]				= @sEMail				
			  ,[sContacto]			= @sContacto			
			  ,[sTelefono]			= @sTelefono			
			  ,[sCelular]			= @sCelular				
			  ,[sRFC]				= @sRFC			
			  ,[sDireccionFiscal]	= @sDireccionFiscal	
			  ,[sExtension]	= @sExtension	
			  ,[sNombreReprLegal]	= @sNombreReprLegal	
			  ,[sNumProveedor]		= @sNumProveedor	
			  ,[bDatosActualizados] = 1				 
			  ,bActivo = @bActivo
			  ,IDRoles				= @IDRoles
		 WHERE Id=@IDUsuarios
	 END
	 ELSE
	 BEGIN
		UPDATE Usuarios
		   SET [sNombre]			= @sNombre				
			  ,[sClave]				= @sClave				
			  ,[sEMail]				= @sEMail				
			  ,[sContacto]			= @sContacto			
			  ,[sTelefono]			= @sTelefono			
			  ,[sCelular]			= @sCelular				
			  ,[sRFC]				= @sRFC			
			  ,[sDireccionFiscal]	= @sDireccionFiscal	
			  ,[sExtension]	= @sExtension	
			  ,[sNombreReprLegal]	= @sNombreReprLegal	
			  ,[sNumProveedor]		= @sNumProveedor	
			  ,[bDatosActualizados] = 1	
			  ,bActivo				= @bActivo
			  ,IDRoles				= @IDRoles
		 WHERE Id=@IDUsuarios	 
	 END
END
