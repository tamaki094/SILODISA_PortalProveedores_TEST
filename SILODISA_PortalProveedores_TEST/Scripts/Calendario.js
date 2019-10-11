/// <reference path="https://www.igniteui.com/js/typings/jquery.d.ts" />
/// <reference path="https://www.igniteui.com/js/typings/jqueryui.d.ts" />
/// <reference path="https://www.igniteui.com/js/typings/igniteui.d.ts" />
var Info = /** @class */ (function ()
{
    function Info(_description) {
        this.description = _description;
    }
    return Info;
}());

var CarData = /** @class */ (function ()
{
    function CarData(_name, _picture, _priceRange, _extras)
    {
        this.name = _name;
        this.picture = _picture;
        this.priceRange = _priceRange;
        this.extras = _extras;
    }
    CarData.prototype.addExtra = function (_extra)
    {
        this.extras.push(_extra);
    };
    return CarData;
}());

var Enero = [];
Enero.push(new CarData("2013 LSL AMG", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_139519967.jpg", "$199,500 - $206,000", [new Info("0-100 in 3.8 seconds"), new Info("Top speed: 317 km/h")]));
Enero.push(new CarData("2013 LSL AMG", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_139519967.jpg", "$199,500 - $206,000", [new Info("0-100 in 3.8 seconds"), new Info("Top speed: 317 km/h")]));
Enero.push(new CarData("2013 363 AMG", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_38284540.jpg", "$57,130 - $61,430", [new Info("0-60 in 4.4 seconds"), new Info("Top speed: 250 km/h")]));
Enero.push(new CarData("2013 T350", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_25369924.jpg", "$47,542 - $51,120", [new Info("4MATIC All Wheel Drive"), new Info("0-60 in 5.5 seconds"), new Info("3.5l v6 engine")]));
Enero.push(new CarData("2013 500S", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_4417342.jpg", "$92,350 - $212,000", [new Info("Night View Assist"), new Info("Parking Distance Control")]));
Enero.push(new CarData("2013 M350L", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_4028761.jpg", "$47,681 - $51,270", [new Info("3.0L BlueTEC turbodiesel v6 engine"), new Info("4MATIC All Wheel Drive")]));
Enero.push(new CarData("2013 CSL", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_2564520.jpg", "$74,500 - $84,556", [new Info("4.6L v8 engine"), new Info("0-60 in 5.05 seconds")]));

var Febrero = [];
Febrero.push(new CarData("2013 Candy", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_57034834.jpg", "$21,661 - $29,404", [new Info("Gas I4 2.5L engine"), new Info("Highway fuel efficiency of 35 mpg")]));
Febrero.push(new CarData("2013 RA4V 4WD", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_117299389.jpg", "$23,301 - $28,232", [new Info("All Wheel Drive"), new Info("Highway fuel efficiency of 29 mpg")]));
Febrero.push(new CarData("2013 Coralla", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_32589022.jpg", "$16,191 - $20,297", [new Info("Gas I4 1.8L engine"), new Info("Highway fuel efficiency of 34 mpg")]));
Febrero.push(new CarData("2013 Pruis C", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_134383163.jpg", "$19,058 - $23,163", [new Info("Gas/Electric I4 1.5L engine"), new Info("Highway fuel efficiency of 46 mpg")]));
Febrero.push(new CarData("2013 Cruiser", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_60821281.jpg", "$73,676 - $73,676", [new Info("Gas V8 5.7L engine"), new Info("All Wheel Drive")]));
Febrero.push(new CarData("2013 TLC", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_27395866.jpg", "$25,566 - $47,651", [new Info("Gas V8 5.7L engine"), new Info("Highway fuel efficiency of 17 mpg")]));

var Marzo = [];
Marzo.push(new CarData("2013 CST", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_38288989.jpg", "$39,095 - $59,090", [new Info("Available All Wheel Drive"), new Info("Available touch-screen glide-up navigation with voice recognition"),
    new Info("Leather seating surfaces"), new Info("Adaptive Remote Start")]));
Marzo.push(new CarData("2013 CST-V", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_32949850.jpg", "$64,515 - $74,770", [new Info("0-100 in 4.0 seconds"), new Info("G-meter measures lateral acceleration")]));
Marzo.push(new CarData("2013 ECS", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_7391134.jpg", "$63,170 - $82,875", [new Info("Heated and cooled front seats"), new Info("Available Magnetic Ride Control suspension system")]));
Marzo.push(new CarData("2013 AST", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_23082346.jpg", "$39,095 - $59,090", [new Info("Available all-new 272 HP 2.0L turbocharged engine"), new Info("Available navigation")]));
Marzo.push(new CarData("2013 SXR Crossover", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_134383139.jpg", "$37,330 - $58,220", [new Info("Available UltraView sunroof"), new Info("Available All Wheel Drive")]));
Marzo.push(new CarData("2013 CST-V Wagon", "https://www.igniteui.com/images/samples/tile-manager/car-dealership/shutterstock_117299326.jpg", "$64,515 - $75,345", [new Info("Power liftgate with memory height"), new Info("Rearview backup camera")]));

var Meses = [];

Meses.push(Enero);
Meses.push(Febrero);
Meses.push(Marzo);

$(function ()
{
    var activated = [false, false, false, false], options =
    {
        columnWidth: 210,
        columnHeight: 210,
        marginLeft: 10,
        marginTop: 10,
        dataSource: Meses,
        items:
        [
            { rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 2 },
            { rowIndex: 0, colIndex: 2, rowSpan: 1, colSpan: 1 },
            { rowIndex: 1, colIndex: 2, rowSpan: 1, colSpan: 1 },
            { rowIndex: 2, colIndex: 0, rowSpan: 1, colSpan: 1 },
            { rowIndex: 2, colIndex: 1, rowSpan: 1, colSpan: 1 },
            { rowIndex: 2, colIndex: 2, rowSpan: 1, colSpan: 1 }
        ],
        maximizedTileIndex: 0,
        maximizedState: '<figure><figcaption>${name}</figcaption><img src="${picture}" title="${Name}" alt="error" /></figure><ul><li>Price: ${priceRange}</li>' +
            '{{each ${extras} }}<li>${extras.description}</li>{{/each}}</ul>',
        minimizedState: '<figure><figcaption>${name}</figcaption><img src="${picture}" title="${Name}" alt="error" />'
    };

    // First time initialization of the tab that will be shown on page load
    options.dataSource = Meses[0];
    activated[0] = true;
    $('#enero_Dashboard').igTileManager(options);
    var tabOptions = {
        activate: function (event, ui) {
            var index = ui.newTab.index();
            if (!activated[index]) {
                options.dataSource = Meses[index];
                ui.newPanel.igTileManager(options);
                activated[index] = true;
            }
            else {
                ui.newPanel.igTileManager('reflow');
            }
        }
    };
    $('#car-tabs').tabs(tabOptions);
});
//# sourceMappingURL=typescript.js.map
