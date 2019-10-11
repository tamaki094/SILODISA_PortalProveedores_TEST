/*!@license
* Infragistics.Web.ClientUI Editors localization resources 19.1.31
*
* Copyright (c) 2011-2019 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.Editor=$.ig.Editor||{};$.ig.locale=$.ig.locale||{};$.ig.locale.es=$.ig.locale.es||{};$.ig.locale.es.Editor={spinUpperTitle:"Incrementar",spinLowerTitle:"Reducir",buttonTitle:"Mostrar lista",clearTitle:"Borrar valor",ariaTextEditorFieldLabel:"Editor de texto",ariaNumericEditorFieldLabel:"Editor num\xe9rico",ariaCurrencyEditorFieldLabel:"Editor de moneda",ariaPercentEditorFieldLabel:"Editor de porcentaje",ariaMaskEditorFieldLabel:"Editor de m\xe1scara",ariaDateEditorFieldLabel:"Editor de fecha",ariaDatePickerFieldLabel:"Selector de fecha",ariaTimePickerFieldLabel:"Selector de hora",ariaSpinUpButton:"Incrementar",ariaSpinDownButton:"Reducir",ariaDropDownButton:"Desplegar",ariaClearButton:"Borrar",ariaCalendarButton:"Calendario",datePickerButtonTitle:"Mostrar calendario",updateModeUnsupportedValue:'La opci\xf3n updateMode admite dos valores posibles: "onChange" e "immediate"',updateModeNotSupported:'La propiedad updateMode solo es compatible con el modo "onchange" para las extensiones igMaskEditor, igDateEditor y igDatePicker',renderErrMsg:"No se puede instalar un editor de base directamente. Int\xe9ntelo con un editor de texto, num\xe9rico, de fecha u otro editor.",multilineErrMsg:'textArea requiere una configuraci\xf3n diferente. textMode deber\xeda ajustarse a "multiline".',targetNotSupported:"Este elemento de origen no se admite.",placeHolderNotSupported:"Su navegador no admite el atributo de campo de comod\xedn.",allowedValuesMsg:"Elija un valor de la lista desplegable.",maxLengthErrMsg:"La entrada es demasiado larga y se ha acortado en {0} s\xedmbolos.",maxLengthWarningMsg:"La entrada ha llegado a la longitud m\xe1xima de {0} para este campo",minLengthErrMsg:"Deben introducirse al menos {0} caracteres.",maxValErrMsg:"La entrada ha alcanzado el valor m\xe1ximo de {0} para este campo.",minValErrMsg:"La entrada ha alcanzado el valor m\xednimo de {0} para este campo.",maxValExceedRevertErrMsg:"La entrada ha superado el valor m\xe1ximo de {0} y se ha vuelto a la anterior.",minValExceedRevertErrMsg:"La entrada es inferior al valor m\xednimo de {0} y ha vuelto al valor anterior",maxValExceedSetErrMsg:"La entrada ha superado el valor m\xe1ximo de {0} y se ha ajustado al valor m\xe1ximo.",minValExceedSetErrMsg:"La entrada es inferior al valor m\xednimo de {0} y se ha ajustado al valor m\xednimo.",maxValExceededWrappedAroundErrMsg:"La entrada ha superado el valor m\xe1ximo de {0} y se ha ajustado al m\xednimo permitido.",minValExceededWrappedAroundErrMsg:"La entrada es inferior al valor m\xednimo de {0} y se ha ajustado en el valor m\xe1ximo permitido",btnValueNotSupported:'Se requiere un valor de bot\xf3n diferente. Elija un valor entre "dropdown", "clear" y "spin".',scientificFormatErrMsg:'Se requiere un scientificFormat diferente. Elija un valor entre "E", "e", "E+" y "e+".',spinDeltaIsOfTypeNumber:"Se requiere un tipo de spinDelta diferente. Debe introducirse un n\xfamero positivo.",spinDeltaIsOfTypeNumberForPeriod:"Se requiere un tipo de spinDelta diferente para {0}. Debe introducirse un n\xfamero positivo entre {1} y {2}.",spinDeltaIsOfTypeNumberOrObject:"Se requiere un tipo de spinDelta diferente. Debe introducirse un n\xfamero positivo o un objeto que defina unos deltas de tiempo diferentes.",spinDeltaShouldBeInRange:"La opci\xf3n spinDelta para {0} debe estar entre {1} y {2}",spinDeltaCouldntBeNegative:"La opci\xf3n spinDelta no puede ser negativa. Debe introducirse un n\xfamero positivo.",spinDeltaContainsExceedsMaxDecimals:"El n\xfamero de fracciones m\xe1ximo permitido para spinDelta est\xe1 establecido en {0}. Cambie MaxDecimals o bien intente reducir su valor.",spinDeltaIncorrectFloatingPoint:'Un punto flotante spinDelta requiere una configuraci\xf3n diferente. Configure dataMode del editor a "double" o "float" o configure spinDelta a un valor entero.',notEditableOptionByInit:"Esta opci\xf3n no puede editarse tras la inicializaci\xf3n. Su valor debe establecerse durante la inicializaci\xf3n.",numericEditorNoSuchMethod:"El editor num\xe9rico no admite este m\xe9todo.",numericEditorNoSuchOption:"El editor num\xe9rico no es compatible con esta opci\xf3n.",displayFactorIsOfTypeNumber:"displayFactor requiere un valor diferente. Su valor debe establecerse con un n\xfamero entre 1 o 100.",displayFactorAllowedValue:"displayFactor requiere un valor diferente. Su valor debe establecerse con un n\xfamero entre 1 o 100.",instantiateCheckBoxErrMsg:"igCheckboxEditor requiere un elemento diferente. Utilice los elementos INPUT, SPAN o DIV.",cannotParseNonBoolValue:"igCheckboxEditor requiere un valor diferente. Debe proporcionarse un valor booleano.",cannotSetNonBoolValue:"igCheckboxEditor requiere un valor diferente. Debe proporcionarse un valor booleano.",maskEditorNoSuchMethod:"El editor de m\xe1scaras no admite este m\xe9todo.",datePickerEditorNoSuchMethod:"El editor de fechas no admite este m\xe9todo.",datePickerNoSuchMethodDropDownContainer:"El editor de fechas no admite este m\xe9todo. En su lugar, utilice 'getCalendar' uno.",buttonTypeIsDropDownOnly:"Datepicker s\xf3lo admite valores de desplegar men\xfa y de borrar para la opci\xf3n buttonType.",dateEditorOffsetRange:"La opci\xf3n displayTimeOffset debe estar entre -720 y 840, lo que representa el intervalo en minutos, seg\xfan el UTC, de todas las zonas horarias desde el extremo oeste (-12:00) hasta el extremo este (+14:00).",cannotSetRuntime:"Esta opci\xf3n no puede establecer un tiempo de ejecuci\xf3n",invalidDate:"Fecha no v\xe1lida",maskMessage:"Deben rellenarse todas las posiciones requeridas.",maskRevertMessage:"Deben rellenarse todas las posiciones requeridas. Por eso el valor ha vuelto al \xfaltimo valor v\xe1lido.",dateMessage:"Debe introducirse una fecha v\xe1lida",centuryThresholdValidValues:"La propiedad centuryThreshold deber\xeda estar entre 0 y 99.",noListItemsNoButton:"No se representa ning\xfan bot\xf3n desplegable o de control de n\xfamero porque no hay elementos de lista.",decimalNumber:"Cuando dataMode es '{0}', la opci\xf3n {1} puede aceptar valores num\xe9ricos entre 0 y {2}.",decimalSeparatorErrorMsg:"La opci\xf3n decimalSeparator requiere un valor diferente. Su valor debe ser un car\xe1cter individual.",decimalSeparatorEqualsGroupSeparatorErrorMsg:"Las opciones groupSeparator y decimalSeparator no pueden tener valores iguales.",timePickerNoSuchMethod:"El selector de hora no admite este m\xe9todo."};$.ig.Editor.locale=$.ig.Editor.locale||$.ig.locale.es.Editor;return $.ig.locale.es.Editor});