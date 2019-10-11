var recurrence = new $.ig.scheduler.DateRecurrence();
recurrence.frequency($.ig.scheduler.DateRecurrenceFrequency.daily);
recurrence.count(3);

var today = new Date(),
    currentYear = today.getFullYear(),
    currentMonth = today.getMonth();

var appointments =
[
    {
        "resourceId": 1,
        "id": 1,
        "start": new Date(currentYear, currentMonth, 1, 6, 45),
        "end": new Date(currentYear, currentMonth, 1, 6, 45),
        "subject": "Ir al tianguis"
    }
];


__cargarCitas();