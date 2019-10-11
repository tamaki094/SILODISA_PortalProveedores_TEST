<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <asp:TextBox ID="txt_user" runat="server"></asp:TextBox>
    <asp:TextBox ID="txt_pass" runat="server" TextMode="Password"></asp:TextBox>
    <asp:Button ID="btn_logear" runat="server" Text="Iniciar Sesion" OnClick="btn_logear_Click" />
    <asp:Button ID="btn_Registrarse" runat="server" Text="Registrarse" OnClick="btn_Registrarse_Click"/>
    <asp:HyperLink ID="hl_OlvideDatos" runat="server" Text="Olvide mi contraseña" NavigateUrl="RecuperarContrasena.aspx"></asp:HyperLink>
</asp:Content>
