<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CalendarioInfra.aspx.cs" Inherits="SILODISA_PortalProveedores_TEST.CalendarioInfra" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

	<!--<meta http-equiv="x-ua-compatible" content="IE=9">-->
    <link href="Content/Infragistics/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
    <link href="Content/Infragistics/css/structure/infragistics.css" rel="stylesheet" />

    <script src="Scripts/modernizr-2.8.3.js"></script>
    <script src="Scripts/jquery-3.4.1.min.js"></script>
    <script src="Scripts/jquery-ui-1.12.0.min.js"></script>

	<!-- Ignite UI Required Combined JavaScript Files -->
    <script src="Scripts/Infragistics/js/infragistics.loader.js"></script>
    <script src="Scripts/Infragistics/js/infragistics.core.js"></script>
    <script src="Scripts/Infragistics/js/infragistics.lob.js"></script>
    <script src="Scripts/Infragistics/js/infragistics.scheduler-bundled.js"></script>
    <script src="Scripts/global.js"></script>
    <script src="data-files/scheduler-data.js"></script>

    <script>
        $.ig.loader({
            scriptPath: "../../Scripts/Infragistics/js/",
            cssPath: "../../Content/Infragistics/css/",
            resources: "igScheduler"      
        });

        $.ig.loader(function () {
            var scheduleListDataSource = new $.ig.scheduler.ScheduleListDataSource(),
            appointmentsDS = new $.ig.DataSource({
            primaryKey: "id",
            dataSource: appointments
        });

        //----------------------opcion 1
        //appointmentsDS.dataBind();
 
        //scheduleListDataSource.resourceItemsSource(resources);
        //scheduleListDataSource.appointmentItemsSource(appointmentsDS);

        //$("#scheduler").igScheduler({
        //    height: "550px",
        //    width: "100%",
        //    agendaViewSettings: {
        //        dateRangeInterval: 10
        //    },
        //    views: ["monthView", "agendaView"],
        //    selectedDate: today,
        //    dataSource: scheduleListDataSource
        //    });
            //});

         //----------------------opcion 2
        //$("#scheduler").igScheduler({
        //    height: "650px",
        //    width: "100%",
        //    selectedDate: today,
        //    views: ["monthView", "agendaView"],
        //    dataSource: appointments,
        //    resources: resources
        //    });
        //});

        //----------------------opcion 3
           
            var resources = [
                { id: 1, displayName: "" },
                { id: 2, displayName: "" },
                { id: 3, displayName: "" },
                { id: 4, displayName: "" },
                { id: 5, displayName: "" },
                { id: 6, displayName: "" },
                { id: 7, displayName: "" },
                { id: 8, displayName: "" },
                { id: 9, displayName: "" },
                { id: 10, displayName: "" },
                { id: 11, displayName: "" }
            ];                           

            $("#scheduler").igScheduler({
            height: "650px",
            width: "100%",
            dataSource: appointments,
            resources: resources
            });

            $("#scheduler").igScheduler({
                daySelected: function (evt, ui) {
                    alert("selecciono: " + ui.date);
                }
            });
            var resultado = $("#scheduler").igScheduler("getCalendar");
            var inputId = $(resultado).attr("id");
            $("#display").append(resultado);
        });


        //Bind after initialization    
        $(document).on("igschedulerappointmentcreating", "#scheduler", function (evt, ui) {
            debugger;
            // returns a reference to the scheduler
            console.log(ui.owner);

            // returns a reference to the appointment which is going to be created
            console.log(ui.appointment);
            obj_appoiment = ui.appointment;
            //window.location.href = "https://www.google.es";
        });


        //Bind after initialization
        $(document).on("igschedulerappointmentcreated", "#scheduler", function (evt, ui) {
            debugger;
            // returns a reference to the scheduler
            ui.owner;
            // returns a reference to the created appointment
            ui.appointment;
        });


        //Bind after initialization
        $(document).on("igschedulerdayselected", "#scheduler", function (evt, ui) {
            debugger;
            //return reference to the scheduler.
            ui.owner;
            //return reference to the selected date.
            ui.date;
        });


        //Bind after initialization
        $(document).on("igschedulerdaychanged", "#scheduler", function (evt, ui) {
            //return reference to the scheduler.
            console.log (ui.owner);
            //return reference to the selected date.
            alert(ui.newSelectedDate);
        });


        //Bind after initialization
        $(document).on("igschedulerviewchanged", "#scheduler", function (evt, ui) {
            //return reference to the scheduler.
            ui.owner;
            //return reference to the newly selected view.
            ui.newSelectedView;
        });

    </script>
 
</head>
<body>
    <button type="button" value="Accion" id="btn1">getCalendar</button>
    <button type="button" value="Accion" id="btn2">createAppointment</button>
    <button type="button" value="Accion" id="btn3">getAppointmentsInRange</button>
    <button type="button" value="Accion" id="btn4">nextButton</button>
    <button type="button" value="Accion" id="btn5">deleteAppointment</button>
    <button type="button" value="Accion" id="btn6">editAppointment</button>
    <button type="button" value="Accion" id="btn7">isPreviousMonthShown</button>
    <button type="button" value="Accion" id="btn8">Regional</button>
    <button type="button" value="Accion" id="btn9">agendaViewSettings</button>
    <button type="button" value="Accion" id="btn10"></button>

    <div id="display">

    </div>

    <div id="scheduler"></div>
    <script>               
        var obj_appoiment;

        //$(function () {
        //    $("#scheduler").igScheduler({
        //        height: "850px",
        //        width: "100%",
        //        selectedDate: today,
        //        dataSource: appointments,
        //        resources: resources,
        //        appointmentDialogSuppress: false //quitar ventanas emergentes y cuadros de dialogo,
        //    });           
          
        //});
      
                 

        $("#btn1").click(function () {
            //Obtener calendario
            $("#display").append($("#scheduler").igScheduler("getCalendar"));                
        });


        $("#btn2").click(function () {                
            var appointment = {
                "resourceId": 1,
                "id": 2,
                "start": new Date(currentYear, currentMonth, 2, 6, 45),
                "end": new Date(currentYear, currentMonth, 2, 6, 45),
                "subject": "Ir al super"
            };
            $("#scheduler").igScheduler("createAppointment", appointment);
            console.log(appointments);    
        });


        $("#btn3").click(function () {
            var array_appoiment = $("#scheduler").igScheduler("getAppointmentsInRange", new Date(currentYear, 01, 1, 6, 45), new Date(currentYear, 12, 31, 6, 45));
            console.log(array_appoiment);
        });

        $("#btn4").click(function () {
            var control = $("#scheduler").igScheduler("nextButton");
            console.log(control);
            $("#display").append(control);
        });


        $("#btn5").click(function () {
            var appointment = {
                "resourceId": 1,
                "id": 2,
                "start": new Date(currentYear, currentMonth, 2, 6, 45),
                "end": new Date(currentYear, currentMonth, 2, 6, 45),
                "subject": "Ir al super"
            };
            $("#scheduler").igScheduler("deleteAppointment", obj_appoiment);
        });


        $("#btn6").click(function () {
            var appointment = {
                "resourceId": 1,
                "id": 2,
                "start": new Date(currentYear, currentMonth, 2, 6, 45),
                "end": new Date(currentYear, currentMonth, 2, 6, 45),
                "subject": "Ir al super"
            };
            $("#scheduler").igScheduler("editAppointment", appointment, {
                subject: "Some subject",
                location: "Somewhere",
                start: new Date(2017, 04, 05, 12, 30),
                end: new Date(2017, 04, 05, 12, 30),
                resourceId: 4,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            });
        });

        $("#btn7").click(function () {

            //Get
            var isVisible = $("#scheduler").igScheduler("option", "monthViewSettings").isPreviousMonthShown;

            if (isVisible == true)
            {
                //Set
                var settings = $("#scheduler").igScheduler("option", "monthViewSettings");
                settings.isPreviousMonthShown = false;
                $("#scheduler").igScheduler("option", "monthViewSettings", settings);
            }
            else
            {
                //Set
                var settings = $("#scheduler").igScheduler("option", "monthViewSettings");
                settings.isPreviousMonthShown = true;
                $("#scheduler").igScheduler("option", "monthViewSettings", settings);
            }

            isVisible = $("#scheduler").igScheduler("option", "monthViewSettings").isPreviousMonthShown;
            alert("isPreviousMonthShown: " + isVisible);
        });

        $("#btn8").click(function () {
            // Get
            var regional = $("#scheduler").igScheduler("option", "regional");          
            alert("regional: " + regional);


            $("#scheduler").igScheduler("option", "regional", "ja");
            regional = $("#scheduler").igScheduler("option", "regional");
            alert("regional: " + regional);



        });

        $("#btn9").click(function () {
            //Get
            var setting = $("#scheduler").igScheduler("option", "agendaViewSettings");
            console.log(setting);
        });

        $("#btn10").click(function () {

        });  
    </script>
    
    <script>
       
    </script>

</body>
</html>
