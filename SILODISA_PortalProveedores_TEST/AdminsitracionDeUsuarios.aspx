<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AdminsitracionDeUsuarios.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST.WebForm1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="container">   
            <div class="row">
                <%--<h3>Tabla Usuarios</h3>--%>
            </div>
            <div class="row">      
                <div class="navbar-form navbar-left" role="search">
                    <div class="form-inline">
                        <asp:Label runat="server" for="txtDesc">Filtrar por: &nbsp; &nbsp;</asp:Label>
                        <asp:TextBox ID="txtDesc" runat="server" class="form-control" placeholder="descripcion"/>
                        <asp:Button ID="btnBuscar" CssClass="btn btn-primary" runat="server" Text="Buscar" OnClick="btnBuscar_Click"/>
                        <asp:Button ID="btnNuevoUsuario" CssClass="btn btn-warning" runat="server" Text="Nuevo" OnClick="btnNuevoUsuario_Click"/>
                    </div>              
                </div>
            </div>
            <div class="row">
                <div class="table-responsive">
                    <asp:GridView ID="grdLista" CssClass="table table-striped table-light" runat="server" AutoGenerateColumns="false" PageSize="12" AllowPaging="true" AllowCustomPaging="true" OnPageIndexChanging="grdLista_PageIndexChanging">
                        <Columns>
                            <asp:HyperLinkField DataTextField="Id" HeaderText="IdUsuario" DataNavigateUrlFields="Id" DataNavigateUrlFormatString="~/EditarUsuario.aspx?IDUsuario={0}"/>
                            <%--<asp:BoundField DataField="Id" HeaderText="IdUsuario" />--%>
                            <asp:BoundField DataField="sNombre" HeaderText="Nombre" />
                            <asp:BoundField DataField="sUsuario" HeaderText="Usuario" />
                            <asp:BoundField DataField="sClave" HeaderText="Password" />
                            <asp:CheckBoxField DataField="bActivo" HeaderText="Perfil Activo" />
                        </Columns>
                        <PagerSettings Mode="NumericFirstLast" PageButtonCount="8" FirstPageText="Primero" LastPageText="Ultimo" />
                        <PagerStyle CssClass="pagination-ys" HorizontalAlign="Center" />
                    </asp:GridView>
                </div>
            </div>     
        </div>
</asp:Content>
