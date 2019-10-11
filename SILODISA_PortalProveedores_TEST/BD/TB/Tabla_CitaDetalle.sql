GO   
CREATE TABLE Citas  
(
	Id		int IDENTITY(1,1) PRIMARY KEY,  
	Hora	time NULL,  
	Dia		date NULL
);  
GO   
CREATE CLUSTERED INDEX IX_Dia 
    ON Citas (Dia);   
GO  
CREATE TABLE CitaDetalle (
    Id					int IDENTITY(1,1) PRIMARY KEY,
    IdCitas				int NOT NULL,
	IdTransporte		int NOT NULL,
	Tipo				varchar(50) NOT NULL,
    Tarimas				int NOT NULL,
	DobleEstiba			bit NOT NULL,
	Cajas				int NOT NULL,
	Refrigerado			bit NOT NULL,
	Seco				bit NOT NULL,
	MaterialCuracion	bit NOT NULL,
    Controlado			bit NOT NULL,
	Remisiones			int NOT NULL,
	Lotes				int NOT NULL,
	NumClaves			int NOT NULL,
	IdUsuario			int NOT NULL,
	FOREIGN KEY (IdCitas) REFERENCES Citas(Id),
	FOREIGN KEY (IdTransporte) REFERENCES CatalogoTransportes(IDCatalogoTransportes),
	FOREIGN KEY (IdUsuario) REFERENCES Usuarios(Id)
);
GO
CREATE TABLE ClavesProveedores (
    IdCitaDetalle		int,
	IdUsuario			int NOT NULL,
	Clave				varchar(200),
	FOREIGN KEY (IdUsuario) REFERENCES Usuarios(Id),
	FOREIGN KEY (IdCitaDetalle) REFERENCES CitaDetalle(Id)
);
GO
CREATE CLUSTERED INDEX IX_IdUsuario_ClavesProveedores
    ON ClavesProveedores (IdUsuario);   
GO  


SELECT * FROM Citas;
SELECT * FROM CitaDetalle;
SELECT * FROM ClavesProveedores;


--Borrar citas | quitando dependencias FK
ALTER TABLE Citas NOCHECK CONSTRAINT ALL;
ALTER TABLE CitaDetalle NOCHECK CONSTRAINT ALL;
ALTER TABLE ClavesProveedores NOCHECK CONSTRAINT ALL;
DELETE FROM Citas;
DELETE FROM CitaDetalle;
ALTER TABLE Citas CHECK CONSTRAINT ALL;
ALTER TABLE CitaDetalle CHECK CONSTRAINT ALL;
ALTER TABLE ClavesProveedores CHECK CONSTRAINT ALL;


--Resetar IDENTITY
DBCC CHECKIDENT (Citas, RESEED, 0);
DBCC CHECKIDENT (CitaDetalle, RESEED, 0);


SELECT * FROM sys.foreign_keys WHERE referenced_object_id = object_id('Citas')
ALTER TABLE CitaDetalle DROP CONSTRAINT FK__CitaDetal__IdCit__1ED998B2;
DROP TABLE Citas;

SELECT * FROM sys.foreign_keys WHERE referenced_object_id = object_id('CitaDetalle')
ALTER TABLE ClavesProveedores DROP CONSTRAINT FK__ClavesPro__IdCit__239E4DCF;
DROP TABLE CitaDetalle;

SELECT * FROM Usuarios WHERE sEMail LIKE '%eangulo%';

