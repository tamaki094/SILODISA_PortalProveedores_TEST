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
    public partial class WebForm5 : System.Web.UI.Page
    {      
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!this.Page.IsPostBack)
            {             
                CargarControles(Convert.ToInt32(Request.QueryString["IDCitaDetalle"]));
            }       
        }

        private void CargarControles(int idCitaDetalle)
        {
            try
            {
                string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                  

                    SqlCommand cmd = new SqlCommand("usp_CargarCitasXId", connection);

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@IdCitaDetalle", SqlDbType.Int).Value = Convert.ToInt32(Request.QueryString["IDCitaDetalle"]);

                    SqlDataReader reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        ddl_horario.SelectedValue = Convert.ToString(reader[0]);
                        rb_tipo.SelectedValue = Convert.ToString(reader[2]);
                        if(Convert.ToString(reader[2]) == "paletizado")
                        {
                            txt_tarimas.Text = Convert.ToString(reader[3]);
                            chk_doblEstiba.Checked = (Convert.ToInt32(reader[4]) == 1) ? true : false;
                            txt_tarimas.Visible = true;
                            chk_doblEstiba.Visible = true;
                            capa_paletizado.Visible = true;
                            capa_granel.Visible = false;
                        }
                        else
                        {
                            txt_cajas.Text = Convert.ToString(reader[5]);
                            txt_cajas.Visible = true;
                            capa_paletizado.Visible = false;
                            capa_granel.Visible = true;
                        }
                        RefrigeradoCheckBoxE_modal_citaNueva.Checked = (Convert.ToInt32(reader[6]) == 1) ? true : false;
                        SecoCheckBoxE_modal_citaNueva.Checked = (Convert.ToInt32(reader[7]) == 1) ? true : false;
                        MaterialDeCuracionCheckBoxE_modal_citaNueva.Checked = (Convert.ToInt32(reader[8]) == 1) ? true : false;
                        ControladoCheckBoxE_modal_citaNueva.Checked = (Convert.ToInt32(reader[9]) == 1) ? true : false;

                        RemisionesTextBoxE_modal_citaNueva.Text = Convert.ToString(reader[10]);
                        LotesTextBoxE_modal_citaNueva.Text = Convert.ToString(reader[11]);
        
                        txt_IdCita.Text = Convert.ToString(reader[12]);
                        txt_IdCitaDetalle.Text = Convert.ToInt32(Request.QueryString["IDCitaDetalle"]).ToString();
                    }
                    reader.Close();
                 
                    connection.Close();
                }
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "CrearCitaDetalle", Convert.ToInt32(Session["IDUsuario"]));
            }
        }

        protected void btn_Guardar_Click(object sender, EventArgs e)
        {
            EditarCita(ddl_horario.SelectedValue.ToString(), rb_tipo.SelectedValue.ToString(), txt_tarimas.Text, chk_doblEstiba.Checked, txt_cajas.Text, RefrigeradoCheckBoxE_modal_citaNueva.Checked, SecoCheckBoxE_modal_citaNueva.Checked, MaterialDeCuracionCheckBoxE_modal_citaNueva.Checked, ControladoCheckBoxE_modal_citaNueva.Checked, RemisionesTextBoxE_modal_citaNueva.Text, LotesTextBoxE_modal_citaNueva.Text, txt_IdCita.Text, txt_IdCitaDetalle.Text);
        }

        private void EditarCita(string horario, string tipo, string tarimas, bool doble_estiba, string cajas, bool refrigerado, bool seco, bool curacion, bool controlado, string remisiones, string lotes, string idCita, string idCitaDetalle)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            if(tipo == "paletizado")
            {
                cajas = "";
            }
            else if(tipo == "granel")
            {
                doble_estiba = false;
                tarimas = "";
            }

            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                 
                    SqlCommand cmd = new SqlCommand("usp_ActualizarCitaDetalle", connection);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.Add("@param_Hora", SqlDbType.Time).Value = horario;
                    cmd.Parameters.Add("@param_IdCitaDetalle", SqlDbType.Int).Value = Convert.ToInt32(idCitaDetalle);
                    cmd.Parameters.Add("@param_IdCita", SqlDbType.Int).Value = Convert.ToInt32(idCita);
                    cmd.Parameters.Add("@param_Tipo", SqlDbType.VarChar).Value = tipo;
                    cmd.Parameters.Add("@param_Tarimas", SqlDbType.Int).Value = (tarimas == "")? 0 : Convert.ToInt32(tarimas);
                    cmd.Parameters.Add("@param_DobleEstiba", SqlDbType.Bit).Value = (doble_estiba == true) ? 1 : 0;
                    cmd.Parameters.Add("@param_Cajas", SqlDbType.Int).Value = (cajas == "") ? 0 : Convert.ToInt32(cajas);
                    cmd.Parameters.Add("@param_Refrigerado", SqlDbType.Bit).Value = (refrigerado == true) ? 1 : 0;
                    cmd.Parameters.Add("@param_Seco", SqlDbType.Bit).Value = (seco == true) ? 1 : 0;
                    cmd.Parameters.Add("@param_MaterialCuracion", SqlDbType.Bit).Value = (curacion == true) ? 1 : 0;
                    cmd.Parameters.Add("@param_Controlado", SqlDbType.Bit).Value = (controlado == true) ? 1 : 0;
                    cmd.Parameters.Add("@param_Remisiones", SqlDbType.Int).Value = (remisiones == "") ? 0 : Convert.ToInt32(remisiones);
                    cmd.Parameters.Add("@param_Lotes", SqlDbType.Int).Value = (lotes == "") ? 0 : Convert.ToInt32(lotes);

                    cmd.ExecuteNonQuery();
                 
                    connection.Close();
                }
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "EditarCita", Convert.ToInt32(Session["IDUsuario"]));
            }
            finally
            {
                Response.Redirect("CalendarioProveedores.aspx");
            }
        }
    }
}