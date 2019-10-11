using DataAccesLayer;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BussinesLayer;

namespace SILODISA_PortalProveedores_TEST
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        private int num_rows = 12;
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
                    Filtro();
                }
            }
        }

        private int Count()
        {
            var desc = txtDesc.Text;
            CargarData(1, num_rows);
            return new UsuariosTb().GetPaginacionCount(desc);
        }

        private void CargarData(int starIndex, int maxRows)
        {
            grdLista.DataSource = new UsuariosTb().GetPaginacionByDesc(starIndex, maxRows, txtDesc.Text);
            grdLista.DataBind();
        }

        protected void btnBuscar_Click(object sender, EventArgs e)
        {
            Filtro();
        }

        protected void grdLista_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            grdLista.PageIndex = e.NewPageIndex;
            CargarData(e.NewPageIndex + 1, num_rows);
        }

        private void Filtro()
        {
            grdLista.VirtualItemCount = Count();
            CargarData(1, num_rows);
        }

        protected void btnNuevoUsuario_Click(object sender, EventArgs e)
        {
            Response.Redirect("NuevoUsuario.aspx");
        }
    }
}
