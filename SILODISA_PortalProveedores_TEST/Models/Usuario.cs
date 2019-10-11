using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SILODISA_PortalProveedores_TEST.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string sNombre { get; set; }
        public string sUsuario { get; set; }
        public string sClave { get; set; }
        public int IDRoles { get; set; }
        public string sEMail { get; set; }
        public string sContacto { get; set; }
        public bool bActivo { get; set; }
        public string sTelefono { get; set; }
        public string sCelular { get; set; }
        public string sRFC { get; set; }
        public string sDireccionFiscal { get; set; }
        public bool bDatosActualizados { get; set; }
        public string sExtension { get; set; }
        public string sNombreReprLegal { get; set; }
        public string sNumProveedor { get; set; }
    }
}