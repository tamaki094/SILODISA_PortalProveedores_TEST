using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Mail;
using System.Net;

namespace SILODISA_PortalProveedores_TEST.Services
{
    public class Correo
    {
        MailMessage correo = new MailMessage();
        SmtpClient smtp = new SmtpClient();

        public void New()
        {
            correo.From = new MailAddress("alertas@silodisa.com.mx", "CENADI - SILODISA");
            correo.IsBodyHtml = true;
            correo.Priority = MailPriority.Normal;

            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.Credentials =new NetworkCredential("alertas@silodisa.com.mx", "S0pOrT3t1");
            smtp.EnableSsl = true;
        }

        public string Enviar(List<string> Correos, string Sujeto, string Mensaje)
        {
            New();
            try
            {
                correo.To.Clear();
                correo.Subject = Sujeto;

                foreach (var dirmail in Correos)
                {
                    correo.To.Add(dirmail); 
                }

                correo.Body = Mensaje.ToString();

                try
                {
                    smtp.Send(correo);
                }
                catch (Exception ex)
                {
                    Funciones.EscribirLog(ex.Message, "Enviar", -1);
                }
                return "Envio Correcto";
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "Enviar", -1);
                return "Fallo Envio";
            }          
        }

        public string Enviar(List<string> Correos, string Sujeto, string Mensaje, Attachment oAttachment)
        {
            New();
            try
            {
                correo.To.Clear();
                correo.Attachments.Add(oAttachment);
                correo.Subject = Sujeto;

                foreach (var dirmail in Correos)
                {
                    correo.To.Add(dirmail);
                }

                correo.Body = Mensaje.ToString();

                try
                {
                    smtp.Send(correo);
                }
                catch (Exception ex)
                {
                    Funciones.EscribirLog(ex.Message, "Enviar", -1);
                }
                return "Envio Correcto";
            }
            catch (Exception ex)
            {
                Funciones.EscribirLog(ex.Message, "Enviar", -1);
                return "Fallo Envio";
            }
        }
    }
}