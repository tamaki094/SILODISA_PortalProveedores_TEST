using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SILODISA_PortalProveedores_TEST.Models
{
    public class InfoCita
    {
        //    public InfoCita(int resourceid, int id, string start, string end, string subject)
        //    {
        //        this.resourceId = resourceId;
        //        this.id = id;
        //        this.start = start;
        //        this.end = end;
        //        this.subject = subject;
        //    }

        //    public int resourceId { get; set; }
        //    public int id { get; set; }
        //    public string start { get; set; }
        //    public string end { get; set; }
        //    public string subject { get; set; }
        //}

        public InfoCita(string title, string url, string start, string color, int id_cita, string hora_cita)
        {
            this.title = title;
            this.url = url;
            this.start = start;
            this.color = color;
            this.id_cita = id_cita;
            this.hora_cita = hora_cita;
        }
        public string title { get; set; }
        public string url { get; set; }
        public string start { get; set; }
        public string color { get; set; }
        public int id_cita { get; set; }
        public string hora_cita { get; set; }


    }
}