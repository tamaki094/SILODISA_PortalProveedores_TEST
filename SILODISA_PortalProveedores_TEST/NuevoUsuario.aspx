<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="NuevoUsuario.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST.WebForm7" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">  
    <asp:HiddenField Value="Request.QueryString['IDUsuario']" runat="server" ID="IDUsuario"/>
    <asp:Label ID="Label1" runat="server" Text="Nombre"></asp:Label>
    <asp:TextBox ID="txt_sNombre" runat="server"></asp:TextBox>
    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txt_sNombre" ErrorMessage="Se debe ingresar un nombre" ValidationGroup="validacion_1"></asp:RequiredFieldValidator>
    <br />
    <asp:Label ID="Label2" runat="server" Text="Usuario"></asp:Label>
    <asp:TextBox ID="txt_sUsuario" runat="server"></asp:TextBox>
    <br />
    <asp:Label ID="Label3" runat="server" Text="Contraseña"></asp:Label>
    <asp:TextBox ID="txt_sClave" runat="server"></asp:TextBox>
    <br />
    <asp:Label ID="Label5" runat="server" Text="Correo"></asp:Label>
    <asp:TextBox ID="txt_sEmail" runat="server" TextMode="Email"></asp:TextBox>
    <br />
    <asp:Label ID="Label6" runat="server" Text="Contacto"></asp:Label>
    <asp:TextBox ID="txt_sContacto" runat="server"></asp:TextBox>
    <br />
    <asp:Label ID="Label8" runat="server" Text="Telefono"></asp:Label>
    <asp:TextBox ID="txt_sTelefono" runat="server" TextMode="Number"></asp:TextBox>
    <br />
    <asp:Label ID="Label9" runat="server" Text="Celular"></asp:Label>
    <asp:TextBox ID="txt_sCelular" runat="server" TextMode="Number"></asp:TextBox>
    <br />
    <asp:Label ID="Label10" runat="server" Text="RFC"></asp:Label>
    <asp:TextBox ID="txt_sRfc" runat="server"></asp:TextBox>
    <br />
    <asp:Label ID="Label11" runat="server" Text="Direccion Fiscal"></asp:Label>
    <asp:TextBox ID="txt_sDirFisc" runat="server"></asp:TextBox>
    <br />
    <asp:Label ID="Label13" runat="server" Text="Extension"></asp:Label>
    <asp:TextBox ID="txt_sExtension" runat="server" TextMode="Number"></asp:TextBox>
    <br />
    <asp:Label ID="Label14" runat="server" Text="Nombre del Representante Legal"></asp:Label>
    <asp:TextBox ID="txt_sNombRepLeg" runat="server"></asp:TextBox>
    <br />
    <asp:Label ID="Label15" runat="server" Text="Numero Proveedor"></asp:Label>
    <asp:TextBox ID="txt_sNumProv" runat="server" TextMode="Number"></asp:TextBox>    
    <br />

    <asp:Button ID="btn_actualizarDatos" runat="server" Text="Registrarse" OnClick="btn_actualiarDatos_Click" ValidationGroup="validacion_1"/>
    <script src="Scripts/Validaciones.js"></script>
</asp:Content>
