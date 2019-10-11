<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="EditarUsuario.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST.WebForm2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    
    <asp:HiddenField Value="Request.QueryString['IDUsuario']" runat="server" ID="IDUsuario"/>
    <asp:Label ID="Label1" runat="server" Text="Nombre"></asp:Label>
    <asp:TextBox ID="txt_sNombre" runat="server"></asp:TextBox>
    <asp:Label ID="Label3" runat="server" Text="Contraseña"></asp:Label>
    <asp:TextBox ID="txt_sClave" runat="server"></asp:TextBox>
    <asp:Label ID="Label4" runat="server" Text="Rol"></asp:Label>
    <asp:DropDownList ID="ddl_roles" runat="server"></asp:DropDownList>
    <asp:Label ID="Label5" runat="server" Text="Correo"></asp:Label>
    <asp:TextBox ID="txt_sEmail" runat="server" TextMode="Email"></asp:TextBox>
    <asp:Label ID="Label6" runat="server" Text="Contacto"></asp:Label>
    <asp:TextBox ID="txt_sContacto" runat="server"></asp:TextBox>
    <asp:Label ID="Label7" runat="server" Text="Perfil Activo"></asp:Label>
    <asp:RadioButtonList ID="rb_Activo" runat="server">
        <asp:ListItem Text="Activado" Value=true></asp:ListItem>
        <asp:ListItem Text="Desactivado" Value=false></asp:ListItem>
    </asp:RadioButtonList>
    <asp:Label ID="Label8" runat="server" Text="Telefono"></asp:Label>
    <asp:TextBox ID="txt_sTelefono" runat="server" TextMode="Number"></asp:TextBox>
    <asp:Label ID="Label9" runat="server" Text="Celular"></asp:Label>
    <asp:TextBox ID="txt_sCelular" runat="server" TextMode="Number"></asp:TextBox>
    <asp:Label ID="Label10" runat="server" Text="RFC"></asp:Label>
    <asp:TextBox ID="txt_sRfc" runat="server"></asp:TextBox>
    <asp:Label ID="Label11" runat="server" Text="Direccion Fiscal"></asp:Label>
    <asp:TextBox ID="txt_sDirFisc" runat="server"></asp:TextBox>
    <asp:Label ID="Label12" runat="server" Text="Datos Actualizados"></asp:Label>
    <asp:RadioButtonList ID="rb_datosActualizados" runat="server">
        <asp:ListItem Text="Activado" Value=true></asp:ListItem>
        <asp:ListItem Text="Desactivado" Value=false></asp:ListItem>
    </asp:RadioButtonList>
    <asp:Label ID="Label13" runat="server" Text="Extension"></asp:Label>
    <asp:TextBox ID="txt_sExtension" runat="server" TextMode="Number"></asp:TextBox>
    <asp:Label ID="Label14" runat="server" Text="Nombre del Representante Legal"></asp:Label>
    <asp:TextBox ID="txt_sNombRepLeg" runat="server"></asp:TextBox>
    <asp:Label ID="Label15" runat="server" Text="Numero Proveedor"></asp:Label>
    <asp:TextBox ID="txt_sNumProv" runat="server" TextMode="Number"></asp:TextBox>    

    <%--<input id="toggle-one" checked type="checkbox">--%>
  <%--  <script>
      $(function() {
          $('#toggle-one').bootstrapToggle();
      })
    </script>--%>


    <asp:Button ID="btn_actualiarDatos" runat="server" Text="Enviar" OnClick="btn_actualiarDatos_Click"/>


</asp:Content>

