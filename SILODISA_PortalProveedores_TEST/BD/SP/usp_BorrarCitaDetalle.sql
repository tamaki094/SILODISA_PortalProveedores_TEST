ALTER PROCEDURE [dbo].[usp_BorrarCitaDetalle]	
@param_IdCitaDetalle		int	,
@param_IdCita				int
AS
BEGIN
	BEGIN TRANSACTION 
		ALTER TABLE ClavesProveedores
		NOCHECK CONSTRAINT CK_PurchaseOrderHeader_Freight;   
		DELETE	
			ClavesProveedores
		WHERE 
			IdCitaDetalle = @param_IdCitaDetalle;
		DELETE 
			Citas
		WHERE
			Id = @param_IdCita;
		DELETE
			CitaDetalle
		WHERE 
		Id = @param_IdCitaDetalle;		
	COMMIT
END


