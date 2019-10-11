using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SILODISA_PortalProveedores_TEST.Models;
using System.Reflection;
using SILODISA_PortalProveedores_TEST.Services;
using System.Web.UI.HtmlControls;




namespace SILODISA_PortalProveedores_TEST
{

    public partial class WebForm2 : System.Web.UI.Page
    {         
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        int IDUser;
        Usuario obj_Usuario = new Usuario();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["IDUsuario"] == null) { Response.Redirect("Default.aspx"); }

            if (Convert.ToInt32(Session["Rol"]) != 1)
            {
                return;
            }
            else
            {
                if (!Page.IsPostBack)
                {
                    IDUser = Convert.ToInt32(Request.QueryString["IDUsuario"]);       
                    CargarDatos();
                }
            }
        }

        private void CargarDatos()
        {
            try
            {
                CargarDdlRoles();              
                string queryString = String.Format("SELECT "
                                                    +"Id"
                                                    + ", ISNULL(sNombre, 'Sin')"
                                                    + ", ISNULL(sUsuario, 'Sin')"
                                                    + ", ISNULL(sClave, 'Sin')"
                                                    + ", ISNULL(IDRoles, 0)"
                                                    + ", ISNULL(sEMail, 'Sin')"
                                                    + ", ISNULL(sContacto, 'Sin')"
                                                    + ", ISNULL(bActivo, 0)"
                                                    + ", ISNULL(sTelefono, 'Sin')"
                                                    + ", ISNULL(sCelular, 'Sin')"
                                                    + ", ISNULL(sRFC, 'Sin')"
                                                    + ", ISNULL(sDireccionFiscal, 'Sin')"
                                                    + ", ISNULL(bDatosActualizados, 0)"
                                                    + ", ISNULL(sExtension, 'Sin')"
                                                    + ", ISNULL(sNombreReprLegal, 'Sin')"
                                                    + ", ISNULL(sNumProveedor, 'Sin') "
                                                    +"FROM Usuarios WHERE Id = {0}", IDUser);
                using (var connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand(queryString, connection);
                    connection.Open();
                   
                    using (var reader = command.ExecuteReader())
                    {
                        PropertyInfo[] properties = typeof(Usuario).GetProperties();
                        int idx = 0;
                        while (reader.Read())
                        {
                            for(int i = 0; i <= (properties.Length-1); i++)
                            {
                                properties[i].SetValue(obj_Usuario, reader[idx]);
                                idx++;
                            }                                                    
                        }
                    }
                }

                txt_sNombre.Text = obj_Usuario.sNombre;
                txt_sClave.Text = obj_Usuario.sClave;
                ddl_roles.SelectedIndex = (obj_Usuario.IDRoles-1);
                txt_sEmail.Text = obj_Usuario.sEMail;
                txt_sContacto.Text = obj_Usuario.sContacto;
                rb_Activo.SelectedIndex = (obj_Usuario.bActivo == true)  ? 0 : 1;
                txt_sTelefono.Text = obj_Usuario.sTelefono;
                txt_sCelular.Text = obj_Usuario.sCelular;
                txt_sRfc.Text = obj_Usuario.sRFC;
                txt_sDirFisc.Text = obj_Usuario.sDireccionFiscal;
                rb_datosActualizados.SelectedIndex = (obj_Usuario.bDatosActualizados == true) ? 0 : 1;
                txt_sExtension.Text = obj_Usuario.sExtension;
                txt_sNombRepLeg.Text = obj_Usuario.sNombreReprLegal;
                txt_sNumProv.Text = obj_Usuario.sNumProveedor;

            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "CargarDatos()", Convert.ToInt32(Session["IDUsuario"]));
            }
        }

        private void CargarDdlRoles()
        {
            try
            {             
                string queryString = "SELECT * FROM Roles;";
                using (var connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand(queryString, connection);
                    connection.Open();
                    SqlDataAdapter ad = new SqlDataAdapter(command);
                    DataTable dt = new DataTable();
                    ad.Fill(dt);
                    ddl_roles.DataSource = dt;
                    ddl_roles.DataTextField = "sDescripcion";
                    ddl_roles.DataValueField = "IDRoles";
                    ddl_roles.DataBind();
                    dt.Dispose();
                }
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "CargarDdlRoles()", Convert.ToInt32(Session["IDUsuario"]));
            }
            
        }

        protected void btn_actualiarDatos_Click(object sender, EventArgs e)
        {
            EditarUsuario();    
        }

        private void EditarUsuario()
        {
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("usp_UpdateUsuarioXId", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.Add("@IDUsuarios", SqlDbType.Int).Value = Convert.ToInt32(Request.QueryString["IDUsuario"]);
                        cmd.Parameters.Add("@sNombre", SqlDbType.VarChar).Value = txt_sNombre.Text;
                        cmd.Parameters.Add("@sEMail", SqlDbType.VarChar).Value = txt_sEmail.Text;
                        cmd.Parameters.Add("@sContacto", SqlDbType.VarChar).Value = txt_sContacto.Text;
                        cmd.Parameters.Add("@sTelefono", SqlDbType.VarChar).Value = txt_sTelefono.Text;
                        cmd.Parameters.Add("@sCelular", SqlDbType.VarChar).Value = txt_sCelular.Text;
                        cmd.Parameters.Add("@sRFC", SqlDbType.VarChar).Value = txt_sRfc.Text;
                        cmd.Parameters.Add("@sDireccionFiscal", SqlDbType.VarChar).Value = txt_sDirFisc.Text;
                        cmd.Parameters.Add("@sExtension", SqlDbType.VarChar).Value = txt_sExtension.Text;
                        cmd.Parameters.Add("@sNombreReprLegal", SqlDbType.VarChar).Value = txt_sNombRepLeg.Text;
                        cmd.Parameters.Add("@sNumProveedor", SqlDbType.VarChar).Value = txt_sNumProv.Text;
                        cmd.Parameters.Add("@sClave", SqlDbType.VarChar).Value = txt_sClave.Text;
                        cmd.Parameters.Add("@bActivo", SqlDbType.Bit).Value = (rb_Activo.SelectedIndex == 0) ? 1 : 0;
                        cmd.Parameters.Add("@IDRoles", SqlDbType.Int).Value = (ddl_roles.SelectedIndex+1);

                        connection.Open();
                        cmd.ExecuteNonQuery();

                    }
                }
                //Response.Redirect("Default.aspx");
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "EditarUsuario()", Convert.ToInt32(Session["IDUsuario"]));
            }
            finally
            {
                Response.Redirect("AdminsitracionDeUsuarios.aspx");
            }
        }
    }
}