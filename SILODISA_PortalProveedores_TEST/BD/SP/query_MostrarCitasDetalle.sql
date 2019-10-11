DECLARE @fecha			DATE
DECLARE @usuario		int
SET @fecha = '2019-09-03'  
SET @usuario = 3192 
	SELECT  
		SUBSTRING(CAST(c.Hora AS varchar), 0, 9) [Hora Cita]
		,ct.sDescripcion [Transporte]
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
		,cd.NumClaves [Total claves]
		,(SELECT ', ' + Clave FROM ClavesProveedores WHERE IdUsuario = @usuario AND IdCitaDetalle = cd.Id FOR XML PATH ('')) [Claves]
	FROM 
		CitaDetalle cd INNER JOIN CatalogoTransportes ct ON cd.IdTransporte = ct.IDCatalogoTransportes
					   INNER JOIN Citas c ON c.Id = cd.IdCitas
	WHERE
		c.dia = @fecha
		AND
		cd.IdUsuario = @usuario;
