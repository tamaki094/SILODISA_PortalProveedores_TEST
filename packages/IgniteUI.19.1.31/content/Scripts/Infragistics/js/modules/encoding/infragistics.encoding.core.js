/*!@license
* Infragistics.Web.ClientUI infragistics.encoding.core.js 19.1.20191.293
*
* Copyright (c) 2011-2019 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*     infragistics.ext_text.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.ext_text"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$ar=$$t;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["DoubleByteEncoding:a","Encoding:b","Object:c","Type:d","Boolean:e","ValueType:f","Void:g","IConvertible:h","IFormatProvider:i","Number:j","String:k","IComparable:l","Number:m","IComparable$1:n","IEquatable$1:o","Number:p","Number:q","Number:r","NumberStyles:s","Enum:t","Array:u","IList:v","ICollection:w","IEnumerable:x","IEnumerator:y","Error:z","Error:aa","Number:ab","String:ac","StringComparison:ad","RegExp:ae","CultureInfo:af","DateTimeFormat:ag","Calendar:ah","Date:ai","Number:aj","DayOfWeek:ak","DateTimeKind:al","CalendarWeekRule:am","NumberFormatInfo:an","CompareInfo:ao","CompareOptions:ap","IEnumerable$1:aq","IEnumerator$1:ar","IDisposable:as","StringSplitOptions:at","Number:au","Number:av","Number:aw","Number:ax","Number:ay","Number:az","Assembly:a0","Stream:a1","SeekOrigin:a2","RuntimeTypeHandle:a3","MethodInfo:a4","MethodBase:a5","MemberInfo:a6","ParameterInfo:a7","TypeCode:a8","ConstructorInfo:a9","PropertyInfo:ba","UTF8Encoding:bb","InvalidOperationException:bc","NotImplementedException:bd","Script:be","Decoder:bf","UnicodeEncoding:bg","Math:bh","AsciiEncoding:bi","ArgumentNullException:bj","DefaultDecoder:bk","ArgumentException:bl","IEncoding:bm","Dictionary$2:bn","IDictionary$2:bo","ICollection$1:bp","KeyValuePair$2:bq","IDictionary:br","IEqualityComparer$1:bs","EqualityComparer$1:bt","IEqualityComparer:bu","DefaultEqualityComparer$1:bv","Thread:bw","ThreadStart:bx","MulticastDelegate:by","IntPtr:bz","StringBuilder:b0","Environment:b1","SingleByteEncoding:b2","AbstractEnumerable:b3","Func$1:b4","AbstractEnumerator:b5","GenericEnumerable$1:b6","GenericEnumerator$1:b7"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t;$c("IEncoding:bm","Object",{$type:new $.ig.Type("IEncoding",null)},true);$c("DoubleByteEncoding:a","Encoding",{ah:0,ai:null,ac:null,ad:null,ae:function(){},init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$b.init.call(this);this.aj(b)},init1:function(a,b,c){$$t.$b.init.call(this);this.aj(b);this.ai=c},aj:function(a){this.ah=a;this.ac=this.ae();if(this.ac==null){return}if(this.ad!=null){return}this.ad=new $$t.bn($$t.$ac.$type,Array,0);var c=this.ac.keys().getEnumerator();while(c.moveNext()){var b=c.current();var d=this.ac.item(b);for(var e=0;e<d.length;e++){var f=d[e];if(f!="\uffff"&&!this.ad.containsKey(f)){this.ad.add(f,[b,e])}}}},fallbackCharacter:function(){return"?"},codePage:function(){return this.ah},name:function(){return this.ai},af:function(){return this.ac},ag:function(){return this.ad},getByteCount:function(a,b,c){var d=0;var e=this.ad;for(var f=b;f<b+c;f++){if(e.containsKey(a[f])){if(e.item(a[f])[0]==0){d++}else{d+=2}}else{d++}}return d},getBytes2:function(a,b,c,d,e){var f=this.ad;var g=0;var h=e;for(var i=b;i<b+c;i++){if(f.containsKey(a[i])){if(f.item(a[i])[0]==0){if(d.length>h){d[h]=f.item(a[i])[1];g++;h++}}else{if(d.length>h+1){d[h]=f.item(a[i])[0];d[h+1]=f.item(a[i])[1];g+=2;h+=2}}}else{if(f.containsKey(this.fallbackCharacter())){d[h]=this.getBytes1(this.fallbackCharacter().toString())[0]}else{d[h]=this.fallbackCharacter().charCodeAt(0)}g++;h++}}return g},getString1:function(a,b,c){var d=new $$t.b0(0);for(var e=b;e<b+c;){if(this.ac.containsKey(a[e])&&a[e]!=0&&a.length>e+1){var f=this.ac.item(a[e]);var g=f[a[e+1]];if(g=="\uffff"){d.h(this.fallbackCharacter())}else{if(f[a[e+1]]!="\uffff"){d.h(f[a[e+1]])}}e+=2}else{var h=this.ac.item(0);var i=h[a[e]];if(i=="\uffff"){d.h(this.fallbackCharacter())}else{if(i!="\uffff"){d.h(i)}}e++}}return d.toString()},$type:new $.ig.Type("DoubleByteEncoding",$$t.$b.$type,[$$t.$bm.$type])},true);$c("SingleByteEncoding:b2","Encoding",{ae:null,ab:null,af:0,ag:null,ac:function(){},init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$b.init.call(this);this.ah(b)},init1:function(a,b,c){$$t.$b.init.call(this);this.ah(b);this.ag=c},ah:function(a){this.af=a;this.ab=this.ac();if(this.ab==null){return}this.ae=new $$t.bn($$t.$ac.$type,$$t.$j.$type,0);for(var b=0;b<this.ab.length;b++){var c=this.ab[b];if(c!="\uffff"){this.ae.add(c,b)}}},fallbackCharacter:function(){return"?"},codePage:function(){return this.af},name:function(){return this.ag},getByteCount:function(a,b,c){return c},getBytes2:function(a,b,c,d,e){for(var f=b;f<b+c;f++){if(this.ae.containsKey(a[f])){d[e+f-b]=this.ae.item(a[f])}else{d[e+f-b]=this.getBytes1(this.fallbackCharacter().toString())[0]}}return c},getString1:function(a,b,c){var d=this.ab;var e=new $$t.b0(0);for(var f=b;f<b+c;f++){if(d[a[f]]!="\uffff"){e.h(d[a[f]])}}return e.toString()},$type:new $.ig.Type("SingleByteEncoding",$$t.$b.$type,[$$t.$bm.$type])},true)});