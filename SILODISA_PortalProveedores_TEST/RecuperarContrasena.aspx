<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RecuperarContrasena.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST.WebForm8" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <asp:TextBox ID="txt_Email" TextMode="Email" runat="server"></asp:TextBox>
    <asp:Button ID="btn_Recuperar" Text="Recuperar" runat="server" OnClick="btn_Recuperar_Click" />
</asp:Content>
