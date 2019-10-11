<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Cita.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST.WebForm3" %>

<%@ Register Assembly="Infragistics4.Web.v19.1, Version=19.1.20191.112, Culture=neutral, PublicKeyToken=7dd5c3163f2cd0cb" Namespace="Infragistics.Web.UI.GridControls" TagPrefix="ig" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <script runat="server">
        void rb_tipo_SelectedIndexChanged(object sender, EventArgs e)
        {
            if(rb_tipo.SelectedValue == "paletizado")
            {
                capa_paletizado.Visible = true;
                capa_granel.Visible = false;
            }
            else if(rb_tipo.SelectedValue == "granel")
            {
                capa_paletizado.Visible = false;
                capa_granel.Visible = true;
            }
        }
    </script>
    <script type="text/javascript">
        function checkCampos(obj) {
            debugger;
            var camposRellenados = true;
            obj.find("input").each(function () {
                var $this = $(this);
                if ($this.val().length <= 0) {
                    camposRellenados = false;
                    return false;
                }
            });
            if (camposRellenados == false) {
                return false;
            }
            else {
                return true;
            }
        }

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
        function jsIsUserFriendlyChar(val, step) {
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
    <asp:Button ID="btn_CrearCita" runat="server" Text="Crear Cita" data-toggle="modal" data-target="#modal_CitaNueva"/>
    <br />
    <asp:GridView ID="dtg_CitasDetalle" runat="server" CssClass="table table-striped table-light gridView" AutoGenerateColumns="false">
        <Columns>           
            <asp:BoundField DataField="Hora Cita" HeaderText="Hora Cita" />
            <asp:BoundField DataField="Transporte" HeaderText="Transporte" />
            <asp:BoundField DataField="Tipo" HeaderText="Tipo" />
            <asp:BoundField DataField="Tarimas" HeaderText="Tarimas" />
            <asp:CheckBoxField DataField="Doble Estiba" HeaderText="Doble Estiba" />
            <asp:BoundField DataField="Cajas" HeaderText="Cajas" />
            <asp:CheckBoxField DataField="Refrigerado" HeaderText="Refrigerado" />
            <asp:CheckBoxField DataField="Medicamento Seco" HeaderText="Medicamento Seco" />
            <asp:CheckBoxField DataField="Material de curacion" HeaderText="Material de curacion" />
            <asp:CheckBoxField DataField="Medicamento Controlado" HeaderText="Medicamento Controlado" />
            <asp:BoundField DataField="Remisiones" HeaderText="Remisiones" />
            <asp:BoundField DataField="Lotes" HeaderText="Lotes" />
            <asp:BoundField DataField="Total claves" HeaderText="Total claves" />
            <asp:BoundField DataField="Claves" HeaderText="Claves" />
            <asp:HyperLinkField Text="Editar" HeaderText="Editar" DataNavigateUrlFields="IdCitaDetalle" DataNavigateUrlFormatString="~/EditarCita.aspx?IDCitaDetalle={0}" ControlStyle-CssClass="btn btn-primary"/>
            <asp:HyperLinkField Text="Borrar" HeaderText="Borrar" DataNavigateUrlFields="IdCitaDetalle" DataNavigateUrlFormatString="~/BorrarCita.aspx?IDCitaDetalle={0}" ControlStyle-CssClass="btn btn-danger"/>
        </Columns>
        
    </asp:GridView>
    <!-- Modal: CitaNueva -->
        <div class="modal fade" id="modal_CitaNueva" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">                     
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                        <ContentTemplate>
                        <asp:Label Text="Horario" runat="server"></asp:Label>
                        <asp:DropDownList ID="ddl_horario" runat="server">
                            <asp:ListItem Value="09:00:00" Text="09:00:00"></asp:ListItem>
                            <asp:ListItem Value="11:00:00" Text="11:00:00"></asp:ListItem>
                            <asp:ListItem Value="12:30:00" Text="12:30:00"></asp:ListItem>
                        </asp:DropDownList>
                        <br /> 
                        <asp:Label ID="Label1" runat="server" Text="Transporte"></asp:Label>
                        <asp:DropDownList ID="ddl_transportes" runat="server"></asp:DropDownList>   
                        <br />
                        <asp:Label ID="Label2" runat="server" Text="Tipo"></asp:Label>
                        <asp:RadioButtonList ID="rb_tipo" runat="server" OnSelectedIndexChanged="rb_tipo_SelectedIndexChanged" AutoPostBack="true">
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

                        <fieldset class="form-group">
                            <div class="row">
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
                            </div>
                        </fieldset> 
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
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="ClavesTextBoxE_modal_citaNueva">
                            Claves:</label>
                            <div class="col-sm-3">
                                <asp:TextBox ID="ClavesTextBoxE_modal_citaNueva" runat="server" class="form-control" onkeydown="return jsDecimals(event);" onclick="habilitar();"></asp:TextBox>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="ClavesAddTextBoxE_modal_citaNueva">
                            Claves que surte:
                            </label>
                            <div class="col-sm-5">
                                <asp:TextBox ID="ClavesAddTextBoxE_modal_citaNueva" runat="server" class="form-control" onkeydown="return jsDecimals(event);" onclick="deshabilitar();"></asp:TextBox>
                                <script type="text/javascript">
                                    document.getElementById('MainContent_ClavesAddTextBoxE_modal_citaNueva').disabled = true;
                                </script>
                            </div>
                            <div class="col-sm-1">
                                <button id="btn_addclaves" class="btn btn-dark" data-placement="top" data-toggle="tooltip" onclick="addElemento()" style=" 
                                width: 30px;
                                height: 30px;
                                padding: 6px 0px;
                                border-radius: 15px;
                                text-align: center;
                                font-size: 12px;
                                line-height: 1.42857;
                                margin-left: -20px;" title="Agregar clave" type="button" type="button">
                                    <i class="fas fa-plus" style="color: white;"></i>
                                </button>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div id="claves_agregadas" class="col-sm-12" style="float: left; margin-left: 30px; margin-right: 30px; padding: 20px;">
                                <script type="text/javascript">
                                    var claves_array = new Array();
                                </script>
                                <asp:TextBox ID="claves_input" runat="server" hidden="true"></asp:TextBox>
                            </div>
                            <br />
                            <div id="alertas_claves">

                            </div>
                        </div>
                        </ContentTemplate>
                        </asp:UpdatePanel>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <asp:Button runat="server" CssClass="btn btn-primary" Text="Guardar Cita" ID="btn_GuardarCita" OnClick="btn_GuardarCita_Click"/>
                    </div>
                </div>
            </div>
        </div>
    <script type="text/javascript">
        var contador_clicks = 0;
        var id_ClavesAddTextBoxE_modal_citaNueva = "MainContent_ClavesAddTextBoxE_modal_citaNueva";
        var id_ClavesTextBoxE_modal_citaNueva = "MainContent_ClavesTextBoxE_modal_citaNueva";

        function deshabilitar() {

            document.getElementById(id_ClavesTextBoxE_modal_citaNueva).disabled = true;
        }

        function habilitar() {

            document.getElementById(id_ClavesAddTextBoxE_modal_citaNueva).disabled = false;
        }
        function addElemento() {
            if (parseInt(document.getElementById(id_ClavesTextBoxE_modal_citaNueva).value) == claves_array.length) {
                document.getElementById(id_ClavesAddTextBoxE_modal_citaNueva).disabled = true;
            }
            else {


                var contenido_caja = document.getElementById(id_ClavesAddTextBoxE_modal_citaNueva).value;

                if (claves_array.length >= 1) {
                    var pos = claves_array.indexOf(contenido_caja);
                    if (pos != -1) {
                        var alerta_nueva = '<div class="alert alert-warning alert-dismissible fade show" role="alert">' +
                            '<strong> Ya existe la clave!</strong> Intenta con otra.' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                            '<span aria-hidden="true">&times;</span>' +
                            '</button >' +
                            '</div>';
                        document.getElementById('alertas_claves').innerHTML = alerta_nueva;

                        return;
                    }
                }

                var elemento = document.getElementById('alertas_claves');
                while (elemento.firstChild) {
                    elemento.removeChild(elemento.firstChild);
                }




                if (contenido_caja.length >= 1) {
                    contador_clicks = contador_clicks + 1;
                    var input = document.createElement("span");
                    input.setAttribute("class", "badge badge-warning");
                    input.setAttribute("id", "contenedor_clave_" + contenido_caja);
                    input.style.marginLeft = "10px";
                    input.style.marginBottom = "10px";
                    input.innerHTML = contenido_caja + "&nbsp; <span id='clave_" + contenido_caja + "' onclick='BorrarCita(this.id)'>&times;</span>";


                    document.getElementById('claves_agregadas').appendChild(input);

                    if (contador_clicks == 4) {
                        var espacio = document.createElement("br");
                        document.getElementById('claves_agregadas').appendChild(espacio);
                        contador_clicks = 0;
                    }

                    claves_array.push(contenido_caja);


                    document.getElementById(id_ClavesAddTextBoxE_modal_citaNueva).value = "";
                }

                var resp = recorrerArray();

                document.getElementById(id_ClavesAddTextBoxE_modal_citaNueva).focus();
                var claves_especificadas = parseInt(document.getElementById(id_ClavesAddTextBoxE_modal_citaNueva).value);

                if (claves_array.length >= claves_especificadas) {
                    document.getElementById("btn_addclaves").style.display = "none";
                }
            }
        }

        function BorrarCita(identificador) {
            document.getElementById(id_ClavesTextBoxE_modal_citaNueva).disabled = false;
            var clave_borrar = identificador.split("_");
            for (var i = 0; i < claves_array.length; i++) {
                console.log(claves_array[i]);
                if (claves_array[i] == clave_borrar[1]) {                   
                    var removed = claves_array.splice(i, 1);
                    console.log("Se borro: " + removed);
                    var identificado_contenedor = "#contenedor_" + identificador;
                    $(identificado_contenedor).replaceWith(""); //aqui corregir error
                }
            }

            document.getElementById("claves_agregadas").style.cssFloat = "left";
        }

        function recorrerArray() {
            var claves = "";
            claves_array.forEach(function (element) {
                claves = claves + element + ",";
            });
            document.getElementById("MainContent_claves_input").value = claves;
            return claves;
        }
    </script>
    <script src="Scripts/Validaciones.js"></script>
</asp:Content>
