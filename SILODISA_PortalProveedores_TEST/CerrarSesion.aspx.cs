﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SILODISA_PortalProveedores_TEST
{
    public partial class WebForm9 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Session["IDUsuario"] = null;
            Session["Usuario"] = null;
            Session["Rol"] = null;
            Session["Email"] = null;
        }
    }
}