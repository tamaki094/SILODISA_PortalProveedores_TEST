using SILODISA_PortalProveedores_TEST.Models;
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
    public partial class WebForm7 : System.Web.UI.Page
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        Usuario obj_Usuario = new Usuario();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                
            }
            btn_actualizarDatos.Enabled = false;

            txt_sNombre.Attributes.Add("onkeyup", "validarCampo(" + txt_sNombre.ClientID + ", " + btn_actualizarDatos.ClientID + ");");     
            txt_sUsuario.Attributes.Add("onkeyup", "validarCampo(" + txt_sUsuario.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sClave.Attributes.Add("onkeyup", "validarCampo(" + txt_sClave.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sEmail.Attributes.Add("onkeyup", "validarCampo(" + txt_sEmail.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sContacto.Attributes.Add("onkeyup", "validarCampo(" + txt_sContacto.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sTelefono.Attributes.Add("onkeyup", "validarCampo(" + txt_sTelefono.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sCelular.Attributes.Add("onkeyup", "validarCampo(" + txt_sCelular.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sRfc.Attributes.Add("onkeyup", "validarCampo(" + txt_sRfc.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sDirFisc.Attributes.Add("onkeyup", "validarCampo(" + txt_sDirFisc.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sExtension.Attributes.Add("onkeyup", "validarCampo(" + txt_sExtension.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sNombRepLeg.Attributes.Add("onkeyup", "validarCampo(" + txt_sNombRepLeg.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sNumProv.Attributes.Add("onkeyup", "validarCampo(" + txt_sNumProv.ClientID + ", " + btn_actualizarDatos.ClientID + ");");


            txt_sNombre.Attributes.Add("onblur", "validarCampo(" + txt_sNombre.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sUsuario.Attributes.Add("onblur", "validarCampo(" + txt_sUsuario.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sClave.Attributes.Add("onblur", "validarCampo(" + txt_sClave.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sEmail.Attributes.Add("onblur", "validarCampo(" + txt_sEmail.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sContacto.Attributes.Add("onblur", "validarCampo(" + txt_sContacto.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sTelefono.Attributes.Add("onblur", "validarCampo(" + txt_sTelefono.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sCelular.Attributes.Add("onblur", "validarCampo(" + txt_sCelular.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sRfc.Attributes.Add("onblur", "validarCampo(" + txt_sRfc.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sDirFisc.Attributes.Add("onblur", "validarCampo(" + txt_sDirFisc.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sExtension.Attributes.Add("onblur", "validarCampo(" + txt_sExtension.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sNombRepLeg.Attributes.Add("onblur", "validarCampo(" + txt_sNombRepLeg.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
            txt_sNumProv.Attributes.Add("onblur", "validarCampo(" + txt_sNumProv.ClientID + ", " + btn_actualizarDatos.ClientID + ");");
        }

        private void NuevoUsuario()
        {
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("usp_InsertarNuevoUsuario", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

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
                        cmd.Parameters.Add("@sUsuario", SqlDbType.VarChar).Value = txt_sUsuario.Text;


                        connection.Open();
                        cmd.ExecuteNonQuery();

                    }
                }
                //Response.Redirect("Default.aspx");
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "NuevoUsuario()", Convert.ToInt32(Session["IDUsuario"]));
            }
            finally
            {
                Response.Redirect("AdminsitracionDeUsuarios.aspx");
            }
        }

        protected void btn_actualiarDatos_Click(object sender, EventArgs e)
        {
            NuevoUsuario();
        }
    }
}