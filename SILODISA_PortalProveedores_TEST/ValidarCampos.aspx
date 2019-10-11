<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ValidarCampos.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST.ValidarCampos" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Validar Campos</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="Scripts/jquery-validation-1.19.1/dist/jquery.validate.js"></script>
    <script src="Scripts/jquery-validation-1.19.1/dist/additional-methods.min.js"></script>
    <script src="Scripts/MensajesValidate.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $("#form1").validate({
                rules: {
                    <%=txt_1.UniqueID %>: {
                        minlength: 2,
                        required: true
                    },
                     <%=txt_2.UniqueID %>: {                       
                        required: true,
                        email:true
                    }
                }, messages: {}
            });
        });
    </script>
   
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:TextBox ID="txt_1" runat="server"></asp:TextBox>
        <asp:TextBox ID="txt_2" runat="server"></asp:TextBox>
        <asp:Button ID="Button1" runat="server" Text="Button" />
    </div>
    </form>
</body>
</html>
