<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="BorrarCita.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST.WebForm6" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <asp:Label ID="lbl_Cita" runat="server" Text="¿Desea borrar esta cita?"></asp:Label>
    <br />
    <asp:Button ID="btn_Confirmar" Text="Borrar" runat="server" CssClass="btn btn-success" OnClick="btn_Confirmar_Click"/>
    <asp:Button ID="btn_Cancelar" Text="Cancelar" runat="server" CssClass="btn btn-danger"/>
</asp:Content>
