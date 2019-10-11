using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SILODISA_PortalProveedores_TEST.Models
{
    public class CitaDetalle
    {
        public int Id { get; set; }
        public int IdCitas { get; set; }
        public int IdTransporte { get; set; }
        public string Tipo { get; set; }
        public int Tarimas { get; set; }
        public bool DobleEstiba { get; set; }
        public int Cajas { get; set; }
        public bool Refrigerado { get; set; }
        public bool Seco { get; set; }
        public bool MaterialCuracion { get; set; }
        public bool Controlado { get; set; }
        public int Remisiones { get; set; }
        public int Lotes { get; set; }
        public int NumClaves { get; set; }
        public int IdUsuario { get; set; }
    }
}