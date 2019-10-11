function  __cargarCitas()
{
    $.ajax({
        method: "POST",
        url: "CalendarioInfra.aspx/getAppoimnets",
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (info) {
        //Respuesta dle servidor
        for (var i = 0; i < info.d.data.length; i++) {
            info.d.data[i].resourceId = 1;
            info.d.data[i].start = new Date(Date.parse(info.d.data[i].start));
            info.d.data[i].end = new Date(Date.parse(info.d.data[i].end));
            appointments.push(info.d.data[i]);         
        }
        console.log(appointments);
    });
}