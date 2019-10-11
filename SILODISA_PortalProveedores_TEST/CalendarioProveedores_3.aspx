<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CalendarioProveedores_3.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST.CalendarioProveedores_3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Calendario Proveedores</title>
    <link href="packages/core/main.css" rel="stylesheet" />
    <link href="packages/daygrid/main.css" rel="stylesheet" />
    <link href="Content/Calendario_FullCalendar.css" rel="stylesheet" />
    <script type="text/javascript">
        var eventos = new Array();     
    </script>
    <script src="Scripts/modernizr-2.8.3.js"></script>
    <script src="Scripts/jquery-3.4.1.min.js"></script>
    <script src="Scripts/jquery-ui-1.12.0.min.js"></script>
    <script src="packages/core/main.js"></script>
    <script src="packages/interaction/main.js"></script>
    <script src="packages/daygrid/main.js"></script>
    <script src="Scripts/Calendario_FullCalendar.js"></script>
    <script type="text/javascript">
        cargarCitas();
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div id='calendar' draggable="false">

        </div>
        <div id="funciones">
            <script>

            </script>
        </div>
    </form>
</body>
</html>
