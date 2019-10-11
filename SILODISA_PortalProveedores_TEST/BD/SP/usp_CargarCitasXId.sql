ALTER PROCEDURE usp_CargarCitasXId
@IdCitaDetalle		int
AS
BEGIN
	SELECT  
		SUBSTRING(CAST(c.Hora AS varchar), 0, 9) [Hora Cita]
		,cd.Id [IdCitaDetalle]
		,cd.Tipo [Tipo]
		,cd.Tarimas [Tarimas]
		,cd.DobleEstiba [Doble Estiba]
		,cd.Cajas [Cajas]
		,cd.Refrigerado [Refrigerado]
		,cd.Seco [Medicamento Seco]
		,cd.MaterialCuracion [Material de curacion]
		,cd.Controlado [Medicamento Controlado]
		,cd.Remisiones [Remisiones]
		,cd.Lotes [Lotes]
		,c.Id [IdCitas]
	FROM 
		CitaDetalle cd INNER JOIN CatalogoTransportes ct ON cd.IdTransporte = ct.IDCatalogoTransportes
					   INNER JOIN Citas c ON c.Id = cd.IdCitas
	WHERE
		cd.Id = @IdCitaDetalle
END
