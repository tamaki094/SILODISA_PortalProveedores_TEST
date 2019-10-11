using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SILODISA_PortalProveedores_TEST.Services;

namespace SILODISA_PortalProveedores_TEST
{
    public partial class _Default : Page
    {
        string alerta_msj = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void btn_logear_Click(object sender, EventArgs e)
        {
            IniciarSesion(txt_user.Text, txt_pass.Text);
        }

        private void IniciarSesion(string usuario, string pass)
        {
            bool perfil_activo = false;
            try
            {
                string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

                using (var connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("usp_MostrarUsuarioXId", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.Add("@sUsuario", SqlDbType.VarChar).Value = txt_user.Text;
                        cmd.Parameters.Add("@sClave", SqlDbType.VarChar).Value = txt_pass.Text;

                        connection.Open();
                        SqlDataReader rd = cmd.ExecuteReader();
                        if (rd.HasRows == true)
                        {
                            while (rd.Read())
                            {
                                Session["IDUsuario"] = rd["Id"];
                                Session["Usuario"] = rd["sUsuario"];
                                Session["Rol"] = rd["IDRoles"];
                                Session["Email"] = rd["sEMail"];
                                perfil_activo = Convert.ToBoolean(rd["bActivo"]);
                            }
                        }
                        else
                        {
                            alerta_msj = "No existe usuario";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "IniciarSesio()", Convert.ToInt32(Session["IDUsuario"]));
            }
            finally
            {
                if (perfil_activo == true)
                {
                    if (Convert.ToInt32(Session["Rol"]) == 1)
                    {
                        Response.Redirect("AdminsitracionDeUsuarios.aspx");
                    }
                    else if (Convert.ToInt32(Session["Rol"]) == 3)
                    {
                        Response.Redirect("CalendarioProveedores.aspx");
                    }
                }
                else
                {
                    alerta_msj = "Usuario desactivado";
                }                
            }
            
        }

        protected void btn_Registrarse_Click(object sender, EventArgs e)
        {
            Response.Redirect("NuevoUsuario.aspx");
        }
    }
}