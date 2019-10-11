CREATE PROCEDURE VerLog
AS
BEGIN
SELECT [Id]
      ,[Descripcion_Error]
      ,[Nivel]
      ,[Hora]
      ,[Usuario]
  FROM [Portal_Proveedores].[dbo].[Log_registro]
  ORDER BY Id DESC;
END;
