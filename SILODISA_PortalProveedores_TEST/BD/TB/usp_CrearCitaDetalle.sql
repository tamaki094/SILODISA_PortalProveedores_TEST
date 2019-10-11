ALTER PROCEDURE usp_CrearCitaDetalle
@param_IdTransporte			int ,
@param_Tipo					varchar(50) ,
@param_Tarimas				int ,
@param_DobleEstiba			bit ,
@param_Cajas				int ,
@param_Refrigerado			bit ,
@param_Seco					bit ,
@param_MaterialCuracion		bit ,
@param_Controlado			bit ,
@param_Remisiones			int ,
@param_Lotes				int	,
@param_NumClaves			int ,
@param_IdUsuario			int ,
@param_Hora					time ,
@param_Dia					date 
AS
BEGIN
	BEGIN TRANSACTION
		DECLARE @idCitaDetalle int, @idCitas int
		INSERT INTO Citas(Hora, Dia) VALUES(@param_Hora, @param_Dia)
		SELECT @idCitas = SCOPE_IDENTITY()	
		INSERT INTO CitaDetalle(IdCitas, IdTransporte, Tipo, Tarimas, DobleEstiba, Cajas, Refrigerado, Seco, MaterialCuracion, Controlado, Remisiones, Lotes, NumClaves, IdUsuario) 
		VALUES(
					@idCitas,
					@param_IdTransporte,		
					@param_Tipo,		
					@param_Tarimas,		
					@param_DobleEstiba,		
					@param_Cajas,
					@param_Refrigerado,	
					@param_Seco,	
					@param_MaterialCuracion,
					@param_Controlado,	
					@param_Remisiones,	
					@param_Lotes,
					@param_NumClaves,
					@param_IdUsuario				
			   )
			   SELECT @idCitaDetalle = SCOPE_IDENTITY()	   
			   SELECT @idCitaDetalle, @idCitas		
	COMMIT
END



