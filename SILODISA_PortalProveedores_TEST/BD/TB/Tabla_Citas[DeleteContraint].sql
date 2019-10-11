GO   
CREATE TABLE Citas  
(
	Id		int IDENTITY(1,1) PRIMARY KEY,  
	Hora	time NULL,  
	Dia		date NULL
);  
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
	CONSTRAINT fk_CitaDetalle_IdCitas_Cita_Id FOREIGN KEY (IdCitas) REFERENCES Citas(Id) ON DELETE CASCADE,
	CONSTRAINT fk_CitaDetalle_IdTransporte_CatalogoTransportes_IDCatalogoTransportes FOREIGN KEY (IdTransporte) REFERENCES CatalogoTransportes(IDCatalogoTransportes) ON DELETE CASCADE,
	CONSTRAINT fk_CitaDetalle_IdUsuario_Usuarios_Id FOREIGN KEY (IdUsuario) REFERENCES Usuarios(Id) ON DELETE CASCADE
);
GO
CREATE TABLE ClavesProveedores (
    IdCitaDetalle		int,
	IdUsuario			int NOT NULL,
	Clave				varchar(200),
	CONSTRAINT fk_ClavesProveedores_IdUsuario_Usuarios_Id FOREIGN KEY (IdUsuario) REFERENCES Usuarios(Id) ON DELETE CASCADE,
	CONSTRAINT fk_ClavesProveedores_IdCitaDetalle_CitaDetalle_Id FOREIGN KEY (IdCitaDetalle)REFERENCES CitaDetalle(Id)
);
GO
SELECT * FROM Citas;
SELECT * FROM CitaDetalle;
SELECT * FROM ClavesProveedores;


