using SILODISA_PortalProveedores_TEST.Models;
using SILODISA_PortalProveedores_TEST.Services;
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

namespace SILODISA_PortalProveedores_TEST
{
    public partial class WebForm4 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static object getCitas()
        {
            List<InfoCita> lista = new List<InfoCita>();

            try
            {
                string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

                using (var connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand cmd = new SqlCommand("usp_MostrarInfoCitas", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        connection.Open();

                        SqlDataReader rd = cmd.ExecuteReader();
                        if (rd.HasRows == true)
                        {
                            while (rd.Read())
                            {
                                lista.Add(new InfoCita(Convert.ToString(rd[0]), Convert.ToString(rd[1]), Convert.ToString(rd[2]), Convert.ToString(rd[3]), Convert.ToInt32(rd[4]), Convert.ToString(rd[5])));
                            }

                        }
                        object obj_json = new { data = lista };

                        return obj_json;
                    }
                }
            }
            catch (Exception ex)
            {
                object obj_json = new { data = lista };

                return obj_json;
            }
        }
    }
}