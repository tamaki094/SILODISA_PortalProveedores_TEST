using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using SILODISA_PortalProveedores_TEST.Models;

namespace SILODISA_PortalProveedores_TEST
{
    public partial class CalendarioInfra : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static object getAppoimnets()
        {
            List<InfoCita> lista = new List<InfoCita>();
           

            try
            {
                string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
                
                using (var connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("usp_MostrarInfoCItas", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;                    
                      
                        connection.Open();

                        SqlDataReader rd = cmd.ExecuteReader();
                        if (rd.HasRows == true)
                        {
                            while (rd.Read())
                            {
                                //lista.Add(new InfoCita(Convert.ToInt32(rd[4]), Convert.ToInt32(rd[0]), Convert.ToString(Convert.ToDateTime(rd[1]).ToString("dddd MMMM dd yyyy HH:mm:ss")), Convert.ToString(Convert.ToDateTime(rd[1]).ToString("dddd MMMM dd yyyy HH:mm:ss")), Convert.ToString(rd[2])));
                            }
                           
                        }
                        object obj_json = new { data = lista };

                        return obj_json;
                    }
                }
            }
            catch (Exception)
            {
                object obj_json = new { data = lista };

                return obj_json;
            }
        }
    }
}