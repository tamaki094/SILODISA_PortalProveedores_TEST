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
using SILODISA_PortalProveedores_TEST.Models;
using System.Reflection;

namespace SILODISA_PortalProveedores_TEST
{
    public partial class WebForm3 : System.Web.UI.Page
    {
        DateTime fecha_cita = new DateTime();
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["anio"] != null || Request.QueryString["mes"] != null || Request.QueryString["dia"] != null)
            {
                if (Session["IDUsuario"] == null) { Response.Redirect("Default.aspx"); }

                fecha_cita = new DateTime(Convert.ToInt32(Request.QueryString["anio"]), Convert.ToInt32(Request.QueryString["mes"]), Convert.ToInt32(Request.QueryString["dia"]));
                GetCitas();
                CargarDdlTransportes();

                RemisionesTextBoxE_modal_citaNueva.Attributes.Add("onkeyup", "validarCampo(" + RemisionesTextBoxE_modal_citaNueva.ClientID + ", " + btn_GuardarCita.ClientID + ");");
                LotesTextBoxE_modal_citaNueva.Attributes.Add("onkeyup", "validarCampo(" + LotesTextBoxE_modal_citaNueva.ClientID + ", " + btn_GuardarCita.ClientID + ");");
                ClavesTextBoxE_modal_citaNueva.Attributes.Add("onkeyup", "validarCampo(" + ClavesTextBoxE_modal_citaNueva.ClientID + ", " + btn_GuardarCita.ClientID + ");");
                ClavesAddTextBoxE_modal_citaNueva.Attributes.Add("onkeyup", "validarCampo(" + ClavesAddTextBoxE_modal_citaNueva.ClientID + ", " + btn_GuardarCita.ClientID + ");");
            }
            else
            {
                Response.Redirect("Default.aspx");
            }
        }
        private void CargarDdlTransportes()
        {
            try
            {
                
                string queryString = "SELECT * FROM CatalogoTransportes;";
                using (var connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand(queryString, connection);
                    connection.Open();
                    SqlDataAdapter ad = new SqlDataAdapter(command);
                    DataTable dt = new DataTable();
                    ad.Fill(dt);
                    ddl_transportes.DataSource = dt;
                    ddl_transportes.DataTextField = "sDescripcion";
                    ddl_transportes.DataValueField = "IDCatalogoTransportes";
                    ddl_transportes.DataBind();
                    dt.Dispose();
                }
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "CargarDdlTransportes()", Convert.ToInt32(Session["IDUsuario"]));
            }

        }

        protected void btn_GuardarCita_Click(object sender, EventArgs e)
        {       
            CitaDetalle obj_CitaDetalle = new CitaDetalle();

            obj_CitaDetalle.IdTransporte = (ddl_transportes.SelectedIndex + 1);
            obj_CitaDetalle.Tipo = rb_tipo.SelectedValue;
            obj_CitaDetalle.Tarimas = (txt_tarimas.Text != "") ? Convert.ToInt32(txt_tarimas.Text) : 0;
            obj_CitaDetalle.DobleEstiba = chk_doblEstiba.Checked;
            obj_CitaDetalle.Cajas = (txt_cajas.Text != "") ? Convert.ToInt32(txt_cajas.Text) : 0;
            obj_CitaDetalle .Refrigerado= RefrigeradoCheckBoxE_modal_citaNueva.Checked;
            obj_CitaDetalle.Seco = SecoCheckBoxE_modal_citaNueva.Checked;
            obj_CitaDetalle.MaterialCuracion = MaterialDeCuracionCheckBoxE_modal_citaNueva.Checked;
            obj_CitaDetalle.Controlado = ControladoCheckBoxE_modal_citaNueva.Checked;
            obj_CitaDetalle.Remisiones = Convert.ToInt32(RemisionesTextBoxE_modal_citaNueva.Text);
            obj_CitaDetalle.Lotes = Convert.ToInt32(LotesTextBoxE_modal_citaNueva.Text);
            List<string> claves = claves_input.Text.TrimEnd(',').Split(',').ToList();
            obj_CitaDetalle.NumClaves = claves.Count;

            CrearCitaDetalle(obj_CitaDetalle, claves);
        }

        private void CrearCitaDetalle(CitaDetalle obj_CitaDetalle, List<string> claves)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            int idCitaDetalle = 0;
            int idCita = 0;
                    
            SqlTransaction transaction;
       
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    transaction = connection.BeginTransaction("transaccion1");

                    SqlCommand cmd = new SqlCommand("usp_CrearCitaDetalle", connection);
                      
                    cmd.Transaction = transaction;
                        
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@param_IdTransporte", SqlDbType.Int).Value = obj_CitaDetalle.IdTransporte;
                    cmd.Parameters.Add("@param_Tipo", SqlDbType.VarChar).Value = obj_CitaDetalle.Tipo;
                    cmd.Parameters.Add("@param_Tarimas", SqlDbType.Int).Value = obj_CitaDetalle.Tarimas;
                    cmd.Parameters.Add("@param_DobleEstiba", SqlDbType.Bit).Value = (obj_CitaDetalle.DobleEstiba == true) ? 1 : 0;
                    cmd.Parameters.Add("@param_Cajas", SqlDbType.Int).Value = obj_CitaDetalle.Cajas;
                    cmd.Parameters.Add("@param_Refrigerado", SqlDbType.Bit).Value = (obj_CitaDetalle.Refrigerado == true) ? 1 : 0;
                    cmd.Parameters.Add("@param_Seco", SqlDbType.Bit).Value = (obj_CitaDetalle.Seco == true) ? 1 : 0;
                    cmd.Parameters.Add("@param_MaterialCuracion", SqlDbType.Bit).Value = (obj_CitaDetalle.MaterialCuracion == true) ? 1 : 0;
                    cmd.Parameters.Add("@param_Controlado", SqlDbType.Bit).Value = (obj_CitaDetalle.Controlado == true) ? 1 : 0;
                    cmd.Parameters.Add("@param_Remisiones", SqlDbType.Int).Value = obj_CitaDetalle.Remisiones;
                    cmd.Parameters.Add("@param_Lotes", SqlDbType.Int).Value = obj_CitaDetalle.Lotes;
                    cmd.Parameters.Add("@param_NumClaves", SqlDbType.Int).Value = obj_CitaDetalle.NumClaves;
                    cmd.Parameters.Add("@param_IdUsuario", SqlDbType.Int).Value = Convert.ToInt32(Session["IDUsuario"]);
                    cmd.Parameters.Add("@param_Hora", SqlDbType.Time).Value = ddl_horario.SelectedValue.ToString();
                    cmd.Parameters.Add("@param_Dia", SqlDbType.Date).Value = fecha_cita.ToString("yyyy-MM-dd");
                        
                    SqlDataReader reader = cmd.ExecuteReader();

                    while(reader.Read())
                    {
                        idCitaDetalle = Convert.ToInt32(reader[0]);
                        idCita = Convert.ToInt32(reader[1]);
                    }
                    reader.Close();

                    
                    foreach (var elemento in claves)
                    {                   
                        cmd.CommandType = CommandType.Text;
                        cmd.CommandText = String.Format("INSERT INTO ClavesProveedores(IdCitaDetalle, IdUsuario, Clave) VALUES({0}, {1}, {2})",idCitaDetalle, Convert.ToInt32(Session["IDUsuario"]), elemento.ToString());
                        cmd.ExecuteNonQuery();
                    }
                    
                    transaction.Commit();
                                  
                    connection.Close();
                }
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "CrearCitaDetalle", Convert.ToInt32(Session["IDUsuario"]));
            }
            finally
            {
                Response.Redirect("CalendarioProveedores.aspx");
            }
        }
        protected void GetCitas()
        {
            try
            {
                var connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;             
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand command = new SqlCommand("usp_MostrarCitasXFecha", connection);
                    command.Parameters.Add("@fecha", SqlDbType.Date).Value = fecha_cita.ToString("yyyy-MM-dd");
                    command.Parameters.Add("@usuario", SqlDbType.Int).Value = Convert.ToInt32(Session["IDUsuario"]);
                    command.CommandType = CommandType.StoredProcedure;

                    SqlDataAdapter ad = new SqlDataAdapter(command);
                    DataTable dt = new DataTable();
                    ad.Fill(dt);
                    dtg_CitasDetalle.DataSource = dt;
                    dtg_CitasDetalle.DataBind();
                    dt.Dispose();
                    connection.Close();                 
                }
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "GetCitas", Convert.ToInt32(Session["IDUsuario"]));
            }
           
        }

        private bool ValidacionCampos()
        {
            int contador = 0;
            contador += (rb_tipo.SelectedValue != "") ? 1 : 0;
            contador += (txt_tarimas.Text != "") ? 1 : 0;
            contador +=(txt_cajas.Text != "") ? 1 : 0;
            contador +=(RefrigeradoCheckBoxE_modal_citaNueva.Checked ==true || SecoCheckBoxE_modal_citaNueva.Checked == true && MaterialDeCuracionCheckBoxE_modal_citaNueva.Checked == true || ControladoCheckBoxE_modal_citaNueva.Checked == true) ?1:0;
            contador +=(RemisionesTextBoxE_modal_citaNueva.Text != "") ? 1 : 0;
            contador +=(LotesTextBoxE_modal_citaNueva.Text != "") ? 1 : 0;
            List<string> claves = claves_input.Text.TrimEnd(',').Split(',').ToList();
            contador +=claves.Count;

            return false;
        }

       
    }
}