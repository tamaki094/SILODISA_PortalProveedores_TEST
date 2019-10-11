<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="EditarCita.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST.WebForm5" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <script runat="server">
        void rb_tipo_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (rb_tipo.SelectedValue == "paletizado")
            {
                capa_paletizado.Visible = true;
                capa_granel.Visible = false;
            }
            else if (rb_tipo.SelectedValue == "granel")
            {
                capa_paletizado.Visible = false;
                capa_granel.Visible = true;
            }
        }

    </script>
    <script type="text/javascript">
            function jsDecimals(e) {
 
                var evt = (e) ? e : window.event;
                var key = (evt.keyCode) ? evt.keyCode : evt.which;
                if (key != null) {
                    key = parseInt(key, 10);
                    if ((key < 48 || key > 57) && (key < 96 || key > 105)) {
                        //Aca tenemos que reemplazar "Decimals" por "NoDecimals" si queremos que no se permitan decimales
                        if (!jsIsUserFriendlyChar(key, "Decimals")) {
                            return false;
                        }
                    }
                    else {
                        if (evt.shiftKey) {
                            return false;
                        }
                    }
                }
                return true;
            }
 
            // Función para las teclas especiales
            //------------------------------------------
            function jsIsUserFriendlyChar(val, step)
            {
                // Backspace, Tab, Enter, Insert, y Delete
                if (val == 8 || val == 9 || val == 13 || val == 45 || val == 46) {
                    return true;
                }
                // Ctrl, Alt, CapsLock, Home, End, y flechas
                if ((val > 16 && val < 21) || (val > 34 && val < 41)) {
                    return true;
                }
                if (step == "Decimals") {
                    if (val == 190 || val == 110) {  //Check dot key code should be allowed
                        return true;
                    }
                }
                // The rest
                return false;
            }           
        </script>
            <div class="row">               
                <asp:Label Text="Horario" runat="server"></asp:Label>
                <asp:DropDownList ID="ddl_horario" runat="server" CssClass="form-control">
                    <asp:ListItem Value="09:00:00" Text="09:00:00"></asp:ListItem>
                    <asp:ListItem Value="11:00:00" Text="11:00:00"></asp:ListItem>
                    <asp:ListItem Value="12:30:00" Text="12:30:00"></asp:ListItem>
                </asp:DropDownList>
                <br /> 
            </div>
            <div class="row">
                <asp:UpdatePanel ID="UpdatePanel1" runat="server">        
                    <ContentTemplate>
                    <asp:Label ID="Label2" runat="server" Text="Tipo"></asp:Label>
                    <asp:RadioButtonList ID="rb_tipo" runat="server" OnSelectedIndexChanged="rb_tipo_SelectedIndexChanged" AutoPostBack="True">
                        <asp:ListItem Text="Paletizado" Value="paletizado"></asp:ListItem>
                        <asp:ListItem Text="Granel" Value="granel"></asp:ListItem>
                    </asp:RadioButtonList>
                    <br />
                    <div id="capa_paletizado" runat="server" visible="false">
                        <asp:Label ID="Label3" runat="server" Text="Tarimas"></asp:Label>
                        <asp:TextBox ID="txt_tarimas" runat="server" TextMode="Number"></asp:TextBox>
                        <asp:CheckBox ID="chk_doblEstiba" runat="server" />
                    </div>
                    <div id="capa_granel" runat="server" visible="false">
                        <asp:Label ID="Label4" runat="server" Text="Cajas"></asp:Label>
                        <asp:TextBox ID="txt_cajas" runat="server" TextMode="Number"></asp:TextBox>
                    </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </div>
            <div class="row">
                <fieldset class="form-group">       
                    <legend class="col-form-label col-sm-4 pt-0">Material Medico: </legend>
                    <div class="col-sm-8">
                        <div class="form-check">
                            <asp:CheckBox ID="RefrigeradoCheckBoxE_modal_citaNueva" runat="server" class="form-check-input" />
                            <label class="form-check-label" for="RefrigeradoCheckBoxE_modal_citaNueva">
                            Refrigerado
                            </label>
                        </div>
                        <div class="form-check">
                            <asp:CheckBox ID="SecoCheckBoxE_modal_citaNueva" runat="server" class="form-check-input" />
                            <label class="form-check-label" for="SecoCheckBoxE_modal_citaNueva">
                            Medicamento
                            </label>
                        </div>
                        <div class="form-check">
                            <asp:CheckBox ID="MaterialDeCuracionCheckBoxE_modal_citaNueva" runat="server" class="form-check-input" />
                            <label class="form-check-label" for="MaterialDeCuracionCheckBoxE_modal_citaNueva">
                            Material de curacion
                            </label>
                        </div>
                        <div class="form-check">
                            <asp:CheckBox ID="ControladoCheckBoxE_modal_citaNueva" runat="server" class="form-check-input" />
                            <label class="form-check-label" for="ControladoCheckBoxE_modal_citaNueva">
                            Controlado
                            </label>
                        </div>
                    </div>              
                </fieldset> 
            </div>
            <div class="form-group row">
                <label class="col-sm-4 col-form-label" for="RemisionesTextBoxE_modal_citaNueva">
                Remisiones:</label>
                <div class="col-sm-3">
                    <asp:TextBox ID="RemisionesTextBoxE_modal_citaNueva" runat="server" class="form-control" onkeydown="return jsDecimals(event);"></asp:TextBox>
                                           
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-4 col-form-label" for="LotesTextBoxE_modal_citaNueva">
                Lotes:
                </label>
                <div class="col-sm-3">
                    <asp:TextBox ID="LotesTextBoxE_modal_citaNueva" runat="server" class="form-control" onkeydown="return jsDecimals(event);"></asp:TextBox>
                </div>
            </div>  
            <div class="row">
                <asp:TextBox TextMode="Number" runat="server" ID="txt_IdCita" Visible="false"></asp:TextBox>
                <asp:TextBox TextMode="Number" runat="server" ID="txt_IdCitaDetalle" Visible="false"></asp:TextBox>
                <asp:Button Text="Guardar" runat="server" ID="btn_Guardar" CssClass="btn btn-primary" OnClick="btn_Guardar_Click" />
            </div> 
       
</asp:Content>
