CREATE PROCEDURE usp_ActualizarCitaDetalle
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
@param_Hora					time ,	
@param_IdCitaDetalle		int	,
@param_IdCita				int
AS
BEGIN
	BEGIN TRANSACTION 
		UPDATE 
			Citas
		SET 
			Hora = @param_Hora
		WHERE
			Id = @param_IdCita;
		UPDATE
			CitaDetalle
		SET
			Tipo = @param_Tipo,
			Tarimas = @param_Tarimas,
			DobleEstiba = @param_DobleEstiba,
			Cajas = @param_Cajas,
			Refrigerado = @param_Refrigerado,
			Seco = @param_Seco,
			MaterialCuracion = @param_MaterialCuracion,
			Controlado = @param_Controlado,
			Remisiones = @param_Remisiones,
			Lotes = @param_Lotes
		WHERE 
		Id = @param_IdCitaDetalle;
	COMMIT


END