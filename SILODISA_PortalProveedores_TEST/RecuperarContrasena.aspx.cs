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
    public partial class WebForm8 : System.Web.UI.Page
    {
        List<string> LstCorreos = new List<string>();
        Correo nCorreo = new Correo();
        string sMensaje = "";
        Random random = new Random();

        protected void Page_Load(object sender, EventArgs e)
        {
        }

        private string GenerarPassword()
        {
            string cadena = "ABCDEFGHIJKLMNOPQRSTUVWXWZabcdefghijklmnopqrstuvwxyz0123456789";
            int longitud_pass = 15;
            string nueva_pass = "";

            for (int i = 0; i < (longitud_pass-1); i++)
            {
                nueva_pass += cadena.Substring(Convert.ToInt32(random.Next(0, (cadena.Length-1))), 1);
            }
            return nueva_pass;
        }

        protected void btn_Recuperar_Click(object sender, EventArgs e)
        {
            EnviarCorreo(txt_Email.Text);
        }

        private void EnviarCorreo(string correo)
        {
            string pass_generada = GenerarPassword().Trim();
            try
            {
                LstCorreos.Add(correo);
                sMensaje += string.Format("Su nueva contraseña es: {0}", pass_generada);
                nCorreo.Enviar(LstCorreos, "Recuperacion de password", sMensaje);
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "Enviar", -1);
            }
            finally
            {            
                CambiarPassword(pass_generada);
            }
        }

        private void CambiarPassword(string pass)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;          

            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    SqlCommand cmd = new SqlCommand("usp_ActualizarContrasena", connection);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.Add("@sEMail", SqlDbType.VarChar).Value = txt_Email.Text;
                    cmd.Parameters.Add("@password", SqlDbType.VarChar).Value = pass;


                    cmd.ExecuteNonQuery();

                    connection.Close();
                }
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "CambiarPassword", Convert.ToInt32(Session["IDUsuario"]));
            }
            finally
            {
                Response.Redirect("Default.aspx");
            }
        }
    }
}