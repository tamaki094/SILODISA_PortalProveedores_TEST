
//var eventos = [
//{
//    title: 'Cita nueva',
//    url: 'http://google.com/',
//    start: '2019-09-09',
//    color: '#6A9DE8',
//    id_cita: 1,
//    hora_cita: '07:00:00'
//}];

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function cargarCitas()
{
    document.addEventListener('DOMContentLoaded', function ()
    {
        $.ajax
        ({
            method: "POST",
            url: "CalendarioProveedores.aspx/getCitas",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function (info)
        {
            debugger;
            //Respuesta dle servidor
            for (var i = 0; i < info.d.data.length; i++)
            {
                var fecha_separada = info.d.data[i].start.split('-');            
                info.d.data[i].url = "Cita.aspx?anio=" + fecha_separada[0] + "&mes=" + fecha_separada[1] + "&dia=" + fecha_separada[2];
                eventos.push(info.d.data[i]);
                info.d.data[i].subject = "<p>ksksksks</p><br><p>sdfsdfs</p>";
            }
            var calendarEl = document.getElementById('calendar');

            var hoy = new Date();
            var dd = hoy.getDate();
            var mm = hoy.getMonth() + 1;
            var yyyy = hoy.getFullYear();

            if (dd < 10)
            {
                dd = '0' + dd;
            }

            if (mm < 10)
            {
                 mm = '0' + mm;
            }

            var calendar = new FullCalendar.Calendar(calendarEl,
            {
                schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
                plugins: ['interaction', 'dayGrid'],
                header:
                {
                    left: 'prevYear,prev,next,nextYear today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                },
                defaultDate: yyyy + "-" + mm + "-" + dd,
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                events: eventos

            });
            calendar.isDragging = true;
            calendar.render();

            calendar.on('dateClick', function (info)
            {
                console.log('clicked on ' + info.dateStr);
                var fecha_separada = info.dateStr.split('-');
                var url = "Cita.aspx?anio=" + fecha_separada[0] + "&mes=" + fecha_separada[1] + "&dia=" + fecha_separada[2];
                window.location.replace(url);
                //window.location.replace(url);
            });
        });
    });
}

