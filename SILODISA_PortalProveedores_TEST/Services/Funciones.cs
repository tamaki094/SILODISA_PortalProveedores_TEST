using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace SILODISA_PortalProveedores_TEST.Services
{
    public class Funciones
    {      
        public static void EscribirLog(string error, string Nivel, int Usuario)
        {
            try
            {
                string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

                using (var connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("EscribirLog", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.Add("@descripcion_error", SqlDbType.VarChar).Value = error;
                        cmd.Parameters.Add("@Nivel", SqlDbType.VarChar).Value = Nivel;
                        cmd.Parameters.Add("@Hora", SqlDbType.DateTime).Value = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        cmd.Parameters.Add("@Usuario", SqlDbType.Int).Value = Usuario;
                        connection.Open();
                        cmd.ExecuteNonQuery();

                    }
                }
            }
            catch (Exception ex)
            {

                throw;
            }
           
        }
    }
}