using SILODISA_PortalProveedores_TEST.Services;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SILODISA_PortalProveedores_TEST
{
    public partial class WebForm6 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!this.Page.IsPostBack)
            {

            }
        }

        protected void btn_Confirmar_Click(object sender, EventArgs e)
        {
            BorrarCita(Convert.ToInt32(Request.QueryString["IDCitaDetalle"]), MostrarInfoCita());
        }

        private int MostrarInfoCita()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;          
            int idCita = 0;        
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    

                    SqlCommand cmd = new SqlCommand("usp_MostrarInfoCitaXId", connection);
                  
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@param_idCitaDetalle", SqlDbType.Int).Value = Convert.ToInt32(Request.QueryString["IDCitaDetalle"]);

                    SqlDataReader reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {                      
                        idCita = Convert.ToInt32(reader[5]);
                    }
                    reader.Close();                
                    connection.Close();
                }
                return idCita;
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "CrearCitaDetalle", Convert.ToInt32(Session["IDUsuario"]));
                return -1;
            }
        }

        private void BorrarCita(int idCitaDetalle, int idCita)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    SqlCommand cmd = new SqlCommand("usp_BorrarCitaDetalle", connection);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.Add("@param_IdCitaDetalle", SqlDbType.Int).Value = idCitaDetalle;
                    cmd.Parameters.Add("@param_IdCita", SqlDbType.Int).Value = idCita;

                    cmd.ExecuteNonQuery();

                    connection.Close();
                }
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "BorrarCita", Convert.ToInt32(Session["IDUsuario"]));
            }
            finally
            {
                Response.Redirect("CalendarioProveedores.aspx");
            }
        }
    }
}