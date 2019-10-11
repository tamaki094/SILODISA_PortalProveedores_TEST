GO  
-- Create a new table with three columns.  
CREATE TABLE Citas  
    (
		Id int NOT NULL,  
		Hora time NULL,  
		Dia date NULL
	 );  
GO  
-- Create a clustered index called IX_TestTable_TestCol1  
-- on the dbo.TestTable table using the TestCol1 column.  
CREATE CLUSTERED INDEX IX_Dia 
    ON Citas (Dia);   
GO  