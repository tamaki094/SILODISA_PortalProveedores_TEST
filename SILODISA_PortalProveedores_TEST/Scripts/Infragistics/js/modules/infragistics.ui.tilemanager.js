/*!@license
 * Infragistics.Web.ClientUI Tile Manager 19.1.31
 *
 * Copyright (c) 2011-2019 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *  jquery-1.9.1.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.templating.js
 *	infragistics.dataSource.js
 *	infragistics.util.js
 *  infragistics.util.jquery.js
 *  infragistics.ui.widget.js
 *  infragistics.ui.splitter.js
 *	infragistics.ui.layoutmanager.js
 *	infragistics.ui.tilemanager-en.js
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.ui.widget","./infragistics.datasource","./infragistics.templating","./infragistics.ui.layoutmanager","./infragistics.ui.splitter"],factory)}else{return factory(jQuery)}})(function($){/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 19.1.31
*
* Copyright (c) 2011-2019 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};$.ig.TileManager=$.ig.TileManager||{};$.ig.locale=$.ig.locale||{};$.ig.locale.en=$.ig.locale.en||{};$.ig.locale.en.TileManager={renderDataError:"Data was not successfully retrieved or parsed.",setOptionItemsLengthError:"The length of the items configurations does not match the number of the tiles.",setOptionError:"Runtime changes are not allowed for this option."};$.ig.TileManager.locale=$.ig.TileManager.locale||$.ig.locale.en.TileManager;return $.ig.locale.en.TileManager})($);$.widget("ui.igTileManager",$.ui.igWidget,{css:{container:"ui-widget ui-igtilemanager ui-widget-content",leftPanel:"ui-igtilemanager-left",rightPanel:"ui-igtilemanager-right",header:"ui-widget-header ui-igtile-header",content:"ui-widget-content ui-igtile",innerContainer:"ui-igtile-inner-container",minimized:"ui-igtile-minimized",maximized:"ui-igtile-maximized",minimizeButton:"ig-button ig-tile-minimize-button",minimizeIcon:"ig-tile-minimize-icon",hoverClass:"ui-state-hover",hidden:"ui-helper-hidden",overflowHidden:"ui-helper-overflow-hidden",overflowVisible:"ui-helper-overflow-visible",visibilityHidden:"ui-helper-visibility-hidden",splitterNoScroll:"ui-igsplitter-no-scroll"},options:{width:null,height:null,columnWidth:null,columnHeight:null,cols:null,rows:null,marginLeft:0,marginTop:0,rearrangeItems:true,items:null,dataSource:null,minimizedState:null,maximizedState:null,maximizedTileIndex:null,rightPanelCols:1,rightPanelTilesWidth:null,rightPanelTilesHeight:null,showRightPanelScroll:true,splitterOptions:{enabled:true,collapsible:false,collapsed:false,events:{collapsed:null,expanded:null}},preventMaximizingSelector:"a, input",animationDuration:500,dataSourceUrl:null,responseDataKey:null,responseDataType:null,dataSourceType:null,requestType:"GET",responseContentType:null},events:{dataBinding:"dataBinding",dataBound:"dataBound",rendering:"rendering",rendered:"rendered",tileRendering:"tileRendering",tileRendered:"tileRendered",tileMaximizing:"tileMaximizing",tileMaximized:"tileMaximized",tileMinimizing:"tileMinimizing",tileMinimized:"tileMinimized"},_selectors:{tileSelector:".ui-igtile",minimizedTileSelector:".ui-igtile-minimized",minimizeBtnSelector:".ig-tile-minimize-button",minimizeIconSelector:".ig-tile-minimize-icon",leftPanelSelector:".ui-igtilemanager-left",rightPanelSelector:".ui-igtilemanager-right",splitbarSelector:".ui-igsplitter-splitbar-vertical",innerContainerSelector:".ui-igtile-inner-container"},_create:function(){var opt=this.options;this._options={$tiles:null,$maximizedTile:null,$leftPanel:null,$rightPanel:null,$layoutManagerElement:null,fromMarkup:false,animating:false,useMaximizedTileIndex:false,rightPanelWidth:0,gridLayout:null,elementHandlers:{},windowHandlers:{},splitterFirstExpandEventFired:false};this.element.addClass(this.css.container);if(opt.width){this.element.css("width",opt.width)}if(opt.height){this.element.css("height",opt.height)}this.options.tileSelector=this.options.tileSelector||this._selectors.tileSelector;if(opt.dataSource!==null){this.dataBind()}else{this._options.fromMarkup=true;this._initFromMarkup()}if(this.options.disabled){this.options.disabled=false;this._setOption("disabled",true)}this._attachEvents()},_setOption:function(option,value){if(this.options[option]===value){return}var i,len,itemsMerged,items,glOption,self=this,_opt=this._options;this._super(option,value);switch(option){case"dataSource":this.dataBind();break;case"dataSourceUrl":this.dataBind();break;case"width":if(!_opt.useMaximizedTileIndex){this.minimize(0)}this.element.width(this.options.width);this.reflow(true,0);break;case"height":if(!_opt.useMaximizedTileIndex){this.minimize(0)}this.element.height(this.options.height);this.reflow(true,0);break;case"columnWidth":case"columnHeight":case"cols":case"rows":case"marginLeft":case"marginTop":case"rearrangeItems":if(!_opt.useMaximizedTileIndex){this.minimize(0)}glOption={};glOption[option]=value;_opt.$layoutManagerElement.igLayoutManager("option","gridLayout",glOption);_opt.gridLayout=this.layoutManager()._opt.gridLayout;break;case"items":if(value.length!==_opt.$tiles.length){throw new Error(this._getLocaleValue("setOptionItemsLengthError"))}if(_opt.useMaximizedTileIndex){itemsMerged=$.extend(true,[],this._options.$layoutManagerElement.igLayoutManager("option","items"),value)}else{this.minimize(0)}_opt.$layoutManagerElement.igLayoutManager("option","items",value);_opt.gridLayout=this.layoutManager()._opt.gridLayout;if(_opt.useMaximizedTileIndex){items=this._options.$layoutManagerElement.igLayoutManager("option","items");len=items.length;for(i=0;i<len;i++){$.extend(true,items[i],itemsMerged[i])}this.layoutManager()._glSortItemsByPositionOrder();_opt.gridLayout.initialItems=$.extend(true,[],this._options.$layoutManagerElement.igLayoutManager("option","items"))}this.reflow(true,0);break;case"minimizedState":_opt.$tiles.not(_opt.$maximizedTile).each(function(){self._toMinimizedState($(this))});break;case"maximizedState":if(_opt.$maximizedTile){this._toMaximizedState(_opt.$maximizedTile)}break;case"maximizedTileIndex":this._toMinimizedState(_opt.$maximizedTile);_opt.$maximizedTile=_opt.$tiles.filter("[data-index="+this.options.maximizedTileIndex+"]");this._toMaximizedState(_opt.$maximizedTile);break;case"rightPanelCols":if(_opt.$maximizedTile&&!_opt.useMaximizedTileIndex){this._setRightPanelSize();this._positionRightPanelTiles(_opt.$tiles.not(_opt.$maximizedTile),parseInt(_opt.$maximizedTile.attr("data-index"),10),false,false)}break;case"rightPanelTilesWidth":if(_opt.$maximizedTile&&!_opt.useMaximizedTileIndex){this._setRightPanelSize();this._positionRightPanelTiles(_opt.$tiles.not(_opt.$maximizedTile),parseInt(_opt.$maximizedTile.attr("data-index"),10),false,true)}break;case"rightPanelTilesHeight":if(_opt.$maximizedTile&&!_opt.useMaximizedTileIndex){this._setRightPanelSize();this._positionRightPanelTiles(_opt.$tiles.not(_opt.$maximizedTile),parseInt(_opt.$maximizedTile.attr("data-index"),10),false,true)}break;case"showRightPanelScroll":if(!_opt.useMaximizedTileIndex){if(value){_opt.$rightPanel.removeClass(this.css.overflowHidden)}else{_opt.$rightPanel.addClass(this.css.overflowHidden)}if(_opt.$maximizedTile){this._setRightPanelSize()}}break;case"splitterOptions":if(value.hasOwnProperty("collapsed")||value.hasOwnProperty("collapsible")){throw new Error(this._getLocaleValue("errorSettingOption"))}if(value.enabled===true){this.element.children(this._selectors.splitbarSelector).removeClass(this.css.visibilityHidden)}else if(value.enabled===false){this.element.children(this._selectors.splitbarSelector).addClass(this.css.visibilityHidden)}if(value.events&&value.events.collapsed){this.element.igSplitter({collapsed:value.events.collapsed})}if(value.events&&value.events.expanded){this.element.igSplitter({expanded:value.events.expanded})}value=$.extend(true,{},this.layoutManager().options.splitterOptions,value);break;case"animationDuration":this.layoutManager().options.gridLayout.animationDuration=value;break;case"disabled":this._toggleDisabled(value);break;default:break}},_initFromMarkup:function(){var $tiles,$children=this.element.children(),$filtered=$children.filter(this.options.tileSelector);if($filtered.length){$tiles=$filtered;$children.not($tiles).addClass(this.css.hidden)}else{$tiles=this.element.children()}$tiles.wrap("<div>");this._initLayoutManager($tiles)},_renderData:function(success,msg,data){var _opt=this._options;this._triggerDataBound(success,msg,data._data);if(success){if(_opt.$layoutManagerElement){_opt.$layoutManagerElement.igLayoutManager("destroy");if(!_opt.useMaximizedTileIndex){this.element.igSplitter("destroy")}this._resetInternalOptions()}this.element.empty();this._initLayoutManager(data._data)}else{throw new Error(this._getLocaleValue("renderDataError"))}},_resetInternalOptions:function(){var _opt=this._options;_opt.gridLayout=null;_opt.$layoutManagerElement=null;_opt.$leftPanel=null;_opt.$rightPanel=null;_opt.$maximizedTile=null;_opt.$tiles=null;_opt.animating=false},_initDataSource:function(){var opt=this.options,dataOpt;if(!opt.dataSource&&opt.dataSourceUrl){opt.dataSource=opt.dataSourceUrl}if(!(opt.dataSource instanceof $.ig.DataSource)){dataOpt={callback:this._renderData,callee:this,dataSource:opt.dataSource,requestType:opt.requestType,responseContentType:opt.responseContentType,responseDataType:opt.responseDataType,localSchemaTransform:false};if(opt.responseDataKey){dataOpt.responseDataKey=opt.responseDataKey}if(opt.dataSourceType){dataOpt.dataSourceType=opt.dataSourceType}opt.dataSource=new $.ig.DataSource(dataOpt)}},_tileRendered:function(event,ui){var _opt=this._options,$tile=ui.item,renderMaximizedState=_opt.useMaximizedTileIndex&&this.options.maximizedTileIndex===ui.index,$innerContainer;if(_opt.fromMarkup){$innerContainer=$tile.children();if(!_opt.useMaximizedTileIndex){$innerContainer.prepend(this._renderMinimizeButton())}if(renderMaximizedState){if(this.options.maximizedState){$innerContainer.children().not(this.options.maximizedState).addClass(this.css.hidden)}}else if(this.options.minimizedState){$innerContainer.children().not(this.options.minimizedState).addClass(this.css.hidden)}}else{$innerContainer=$("<div/>").appendTo($tile);if(renderMaximizedState){$innerContainer.html(this._renderMaximizedState(ui.index))}else{$innerContainer.html(this._renderMinimizedState(ui.index))}}$innerContainer.addClass(this.css.innerContainer);$tile.addClass(this.css.content).addClass(renderMaximizedState?this.css.maximized:this.css.minimized);this._triggerTileRendered(event,ui)},_initLayoutManager:function($tiles){var self=this,opt=this.options,_opt=this._options,items=[],lengthDiff,noCancel,i;if(opt.items){$.extend(items,opt.items)}if($tiles.length>items.length){lengthDiff=$tiles.length-items.length;for(i=0;i<lengthDiff;i++){items.push({})}}else{items.splice($tiles.length)}noCancel=this._triggerRendering($tiles,items);if(noCancel){if(!(typeof opt.maximizedTileIndex==="number"&&$tiles.length>=opt.maximizedTileIndex)){this._addPanels();_opt.$leftPanel.addClass(this.css.overflowHidden);this._renderSplitter();_opt.$layoutManagerElement=_opt.$leftPanel;_opt.$leftPanel.igLayoutManager($.extend(true,{},{layoutMode:"grid",items:items,gridLayout:{columnWidth:opt.columnWidth,columnHeight:opt.columnHeight,cols:opt.cols,rows:opt.rows,marginLeft:opt.marginLeft,marginTop:opt.marginTop,rearrangeItems:opt.rearrangeItems,animationDuration:opt.animationDuration,overrideConfigOnSetOption:false,useOffset:false},itemRendered:function(event,ui){noCancel=self._triggerTileRendering(event,ui);if(noCancel){self._tileRendered(event,ui)}},rendered:function(){_opt.gridLayout=self.layoutManager()._opt.gridLayout;_opt.$leftPanel.removeClass(self.css.overflowHidden);_opt.$tiles=$(this).data("igLayoutManager")._opt.gridLayout.elements;self._triggerRendered()},internalResizing:function(){if(_opt.$maximizedTile){return false}},internalResized:function(event){self.options.items=self.layoutManager().options.items;if(_opt.$maximizedTile){_opt.animating=false;if(event){self._triggerTileMinimized(event,_opt.$maximizedTile)}_opt.$maximizedTile=null}}}))}else{_opt.useMaximizedTileIndex=true;this.element.addClass(this.css.overflowHidden);_opt.$layoutManagerElement=this.element;this.element.igLayoutManager($.extend(true,{},{layoutMode:"grid",items:items,gridLayout:{columnWidth:opt.columnWidth,columnHeight:opt.columnHeight,cols:opt.cols,rows:opt.rows,marginLeft:opt.marginLeft,marginTop:opt.marginTop,rearrangeItems:opt.rearrangeItems,animationDuration:opt.animationDuration,overrideConfigOnSetOption:false,useOffset:false},itemRendered:function(event,ui){noCancel=self._triggerTileRendering(event,ui);if(noCancel){self._tileRendered(event,ui)}},rendered:function(){_opt.gridLayout=self.layoutManager()._opt.gridLayout;self.element.removeClass(self.css.overflowHidden);_opt.$tiles=$(this).data("igLayoutManager")._opt.gridLayout.elements;self._triggerRendered()},internalResized:function(){self.options.items=self.layoutManager().options.items}}));_opt.$maximizedTile=_opt.$tiles.filter("[data-index="+opt.maximizedTileIndex+"]")}this.options.items=this.layoutManager().options.items}},_toMaximizedState:function($tile){var $innerContChildren,$innerContainer=$tile.children(this._selectors.innerContainerSelector);$tile.removeClass(this.css.minimized).addClass(this.css.maximized);if(!this._options.fromMarkup){$innerContainer.html((this._options.useMaximizedTileIndex?"":this._renderMinimizeButton())+this._renderMaximizedState($tile.attr("data-index")))}else{$innerContChildren=$innerContainer.children();if(this.options.maximizedState){$innerContChildren.not(this.options.maximizedState).addClass(this.css.hidden);$innerContChildren.filter(this.options.maximizedState+", "+this._selectors.minimizeBtnSelector).removeClass(this.css.hidden)}else{$innerContChildren.removeClass(this.css.hidden)}}},_toMinimizedState:function($tile){var $innerContainer=$tile.children(this._selectors.innerContainerSelector),$minimizedState,$children;$tile.removeClass(this.css.maximized).addClass(this.css.minimized);if(!this._options.fromMarkup){$innerContainer.html(this._renderMinimizedState($tile.attr("data-index")))}else{$children=$innerContainer.children();if(this.options.minimizedState){$minimizedState=$children.filter(this.options.minimizedState);$children.not($minimizedState).addClass(this.css.hidden);$minimizedState.removeClass(this.css.hidden)}else{$children.removeClass(this.css.hidden)}}},_renderMaximizedState:function(index){return this.options.maximizedState?$.ig.tmpl(this.options.maximizedState,this.options.dataSource.data()[index]):this._renderMinimizedState(index)},_renderMinimizedState:function(index){return this.options.minimizedState?$.ig.tmpl(this.options.minimizedState,this.options.dataSource.data()[index]):""},_renderMinimizeButton:function(){return'<span class="'+this.css.minimizeButton+'">'+'<span class="'+this.css.minimizeIcon+'"></span></span>'},_addPanels:function(){var _opt=this._options,markup=this.element.children(),$leftPanel=$("<div/>").addClass(this.css.leftPanel),$rightPanel=$("<div/>").addClass(this.css.rightPanel+" "+this.css.hidden);$leftPanel.appendTo(this.element);$rightPanel.appendTo(this.element);_opt.$leftPanel=$leftPanel;_opt.$rightPanel=$rightPanel;if(!this.options.showRightPanelScroll){_opt.$rightPanel.addClass(this.css.overflowHidden)}markup.appendTo(_opt.$leftPanel)},_removePanels:function(){this.element.children(this._selectors.leftPanelSelector).children().appendTo(this.element);this.element.children(this._selectors.leftPanelSelector+", "+this._selectors.rightPanelSelector).remove();this._options.$leftPanel=null;this._options.$rightPanel=null},_renderSplitter:function(){var self=this,opt=this.options,_opt=this._options;this.element.igSplitter({panels:[{},{collapsible:opt.splitterOptions.collapsible,collapsed:opt.splitterOptions.collapsed}],resizeOtherSplitters:false,layoutRefreshing:function(){return false},resizeStarted:function(){_opt.rightPanelWidth=_opt.$rightPanel.width()},resizeEnded:function(){var gl=_opt.gridLayout,rightPanelWidth=_opt.$rightPanel.width(),rightPanelTilesWidth=self._getRightPanelTilesWidth(),rightPanelTilesHeight=self._getRightPanelTilesHeight(),$tiles=_opt.$tiles.not(_opt.$maximizedTile),rightPanelCols,oldRightPanelCols,rightPanelHasScroll;if(_opt.rightPanelWidth>rightPanelWidth){rightPanelCols=Math.floor(rightPanelWidth/(rightPanelTilesWidth+gl.marginLeft))}else{rightPanelCols=Math.ceil(rightPanelWidth/(rightPanelTilesWidth+gl.marginLeft))}rightPanelHasScroll=self.options.showRightPanelScroll&&Math.ceil($tiles.length/rightPanelCols)*(rightPanelTilesHeight+gl.marginTop)>_opt.$rightPanel.height();if(rightPanelHasScroll){if(_opt.rightPanelWidth>rightPanelWidth){rightPanelCols=Math.floor((rightPanelWidth-$.ig.util.getScrollWidth())/(rightPanelTilesWidth+gl.marginLeft))}else{rightPanelCols=Math.ceil((rightPanelWidth-$.ig.util.getScrollWidth())/(rightPanelTilesWidth+gl.marginLeft))}}oldRightPanelCols=self.options.rightPanelCols;self.options.rightPanelCols=rightPanelCols;self._setRightPanelSize();if(oldRightPanelCols!==self.options.rightPanelCols){self._positionRightPanelTiles($tiles,parseInt(_opt.$maximizedTile.attr("data-index"),10),false,false)}_opt.rightPanelWidth=rightPanelWidth},collapsed:opt.splitterOptions.events.collapsed,expanded:function(evt,ui){if(!_opt.splitterFirstExpandEventFired){_opt.splitterFirstExpandEventFired=true;self._setRightPanelSize()}if(opt.splitterOptions.events.expanded){opt.splitterOptions.events.expanded(evt,ui)}}});this._hideSplitterElements()},_attachEvents:function(){var self=this,_opt=this._options,minimizeBtnSelector=this._selectors.minimizeBtnSelector,minimizedTileSelector=this._selectors.minimizedTileSelector,splitter=this.splitter(),elHandlers=_opt.elementHandlers,noCancel;elHandlers.minimizedTileClick=function(event){var $target=$(event.target),$tileToMaximize=$(this);self._stopEventPropagation(event);if(self.options.disabled){return}if($target.is(self.options.preventMaximizingSelector)){return}if(!_opt.animating){_opt.animating=true;$tileToMaximize.removeClass(self.css.hoverClass);noCancel=self._triggerTileMaximizing(event,$tileToMaximize);if(_opt.$maximizedTile){self._triggerTileMinimizing(event,_opt.$maximizedTile,$tileToMaximize)}if(noCancel){self.maximize($tileToMaximize,self.options.animationDuration,event)}else{_opt.animating=false}}};elHandlers.miminimizedTileMouseOver=function(event){self._stopEventPropagation(event);if(self.options.disabled){return}if(!(_opt.animating||splitter&&splitter._isDrag)){$(this).addClass(self.css.hoverClass)}};elHandlers.minimizedTileMouseOut=function(event){self._stopEventPropagation(event);if(self.options.disabled){return}$(this).removeClass(self.css.hoverClass)};elHandlers.minimizeBtnClick=function(event){self._stopEventPropagation(event);if(self.options.disabled){return}if(!_opt.animating){_opt.animating=true;noCancel=self._triggerTileMinimizing(event,_opt.$maximizedTile);if(noCancel){self.minimize(null,event)}else{_opt.animating=false}}};elHandlers.minimizeBtnMouseOver=function(event){self._stopEventPropagation(event);if(self.options.disabled){return}if(!(_opt.animating||splitter&&splitter._isDrag)){$(this).children(self._selectors.minimizeIconSelector).addClass(self.css.hoverClass)}};elHandlers.minimizeBtnMouseOut=function(event){self._stopEventPropagation(event);if(self.options.disabled){return}$(this).children(self._selectors.minimizeIconSelector).removeClass(self.css.hoverClass)};this.element.on("click",minimizedTileSelector,elHandlers.minimizedTileClick).on("mouseover",minimizedTileSelector,elHandlers.miminimizedTileMouseOver).on("mouseout",minimizedTileSelector,elHandlers.minimizedTileMouseOut).on("click",minimizeBtnSelector,elHandlers.minimizeBtnClick).on("mouseover",minimizeBtnSelector,elHandlers.minimizeBtnMouseOver).on("mouseout",minimizeBtnSelector,elHandlers.minimizeBtnMouseOut);_opt.windowHandlers.resize=function(){if(_opt.$maximizedTile&&!_opt.useMaximizedTileIndex){self._setRightPanelSize()}};$(window).on("resize",_opt.windowHandlers.resize)},_stopEventPropagation:function(event){if(event.stopPropagation){event.stopPropagation()}if(event.cancelBubble!==null||event.cancelBubble!==undefined){event.cancelBubble=true}},_getRightPanelTilesWidth:function(){var gl=this._options.gridLayout,rightPanelTilesWidth=parseInt(this.options.rightPanelTilesWidth,10);if(rightPanelTilesWidth){return rightPanelTilesWidth}else if($.isArray(gl.columnWidth)){return gl.columnWidth[gl.columnWidth.length-1]}else{return gl.columnWidth}},_getRightPanelTilesHeight:function(){var gl=this._options.gridLayout,rightPanelTilesHeight=parseInt(this.options.rightPanelTilesHeight,10);if(rightPanelTilesHeight){return rightPanelTilesHeight}else if($.isArray(gl.columnHeight)){return gl.columnHeight[gl.columnHeight.length-1]}else{return gl.columnHeight}},_setRightPanelSize:function(){var self=this,opt=this.options,_opt=this._options,gl=_opt.gridLayout,minMaximizedTileWidth=this._getMinMaximizedTileWidth()+2*gl.marginLeft,rightTilesTotalWidth=this._getRightPanelTilesWidth()+gl.marginLeft,rightTilesTotalHeight=this._getRightPanelTilesHeight()+gl.marginTop,rightPanelHeight=_opt.$rightPanel.height(),splitterWidth=this.element.children(this._selectors.splitbarSelector).outerWidth(true),scrollWidth=$.ig.util.getScrollWidth(),maxCols,minWidth,rightPanelWidth,leftPanelWidth,rightPanelHasScroll=function(){return self.options.showRightPanelScroll&&Math.ceil((_opt.$tiles.length-1)/self.options.rightPanelCols)*rightTilesTotalHeight>rightPanelHeight};if(opt.rightPanelCols<1){opt.rightPanelCols=1}maxCols=Math.max(Math.floor((this.element.width()-minMaximizedTileWidth-splitterWidth-(rightPanelHasScroll()?scrollWidth:0))/rightTilesTotalWidth),1);if(opt.rightPanelCols>maxCols){opt.rightPanelCols=maxCols}rightPanelWidth=opt.rightPanelCols*rightTilesTotalWidth+(rightPanelHasScroll()?scrollWidth:0);minWidth=rightPanelWidth+minMaximizedTileWidth+splitterWidth;this.element.css("min-width",minWidth);leftPanelWidth=this.element.width()-rightPanelWidth-2*gl.marginLeft-splitterWidth;this.element.igSplitter("setFirstPanelSize",leftPanelWidth)},_getMinMaximizedTileWidth:function(){var gl=this._options.gridLayout,minWidth,i;if($.isArray(gl.columnWidth)){minWidth=gl.columnWidth[0];for(i=0;i<gl.columnWidth.length;i++){if(minWidth>gl.columnWidth[i]){minWidth=gl.columnWidth[i]}}return minWidth}else{return gl.columnWidth}},_positionRightPanelTiles:function($tiles,maximizingTileIndex,containerSwap,animateSize,animDuration,callback){var opt=this.options,_opt=this._options,gl=_opt.gridLayout,rightPanelTilesWidth=this._getRightPanelTilesWidth(),rightPanelTilesHeight=this._getRightPanelTilesHeight(),leftAdjustment=containerSwap?_opt.$rightPanel.igPosition().left-gl.marginLeft:0,topAdjustment=containerSwap?_opt.$rightPanel.scrollTop():0,rightPanelCols=opt.rightPanelCols;animDuration=typeof animDuration==="number"?animDuration:this.options.animationDuration;$tiles.each(function(){var $tile=$(this),tileIndex=parseInt($tile.attr("data-index"),10),tileLeft,tileTop,newDim;if(tileIndex>maximizingTileIndex){tileTop=Math.floor((tileIndex-1)/rightPanelCols)*(rightPanelTilesHeight+gl.marginTop)+gl.marginTop;tileLeft=(tileIndex-1)%rightPanelCols*(rightPanelTilesWidth+gl.marginLeft)+gl.marginLeft/2}else{tileTop=Math.floor(tileIndex/rightPanelCols)*(rightPanelTilesHeight+gl.marginTop)+gl.marginTop;tileLeft=tileIndex%rightPanelCols*(rightPanelTilesWidth+gl.marginLeft)+gl.marginLeft/2}newDim={top:tileTop-topAdjustment,left:tileLeft+leftAdjustment};if(animateSize){newDim.width=rightPanelTilesWidth;newDim.height=rightPanelTilesHeight}$tile.animate(newDim,animDuration,function(){if(containerSwap){$tile.css({left:tileLeft,top:tileTop}).appendTo(_opt.$rightPanel)}if(callback){callback.apply(this)}})})},_hideSplitterElements:function(){var _opt=this._options,$splitBar=this.element.children(this._selectors.splitbarSelector);_opt.$rightPanel.addClass(this.css.hidden).addClass(this.css.splitterNoScroll);$splitBar.addClass(this.css.hidden);_opt.$leftPanel.width("100%");if(!this.options.splitterOptions.enabled){$splitBar.addClass(this.css.visibilityHidden)}},_showSplitterElements:function(){this._options.$rightPanel.removeClass(this.css.hidden);if(!this.splitter()._panels[1].options.collapsed){this._options.$rightPanel.removeClass(this.css.splitterNoScroll)}this.element.children(this._selectors.splitbarSelector).removeClass(this.css.hidden)},_toMaximizedView:function($tileToMaximize,animDuration,event){var _opt=this._options,marginLeft=_opt.gridLayout.marginLeft;_opt.$tiles.css({left:"-="+marginLeft});_opt.$leftPanel.css({marginLeft:marginLeft,marginRight:marginLeft});this._setRightPanelSize();this._showSplitterElements();this._positionRightPanelTiles(_opt.$tiles.not($tileToMaximize),parseInt($tileToMaximize.attr("data-index"),10),true,true,animDuration);this._maximizeTile($tileToMaximize,animDuration,event)},_maximizedTileSwap:function($tileToMaximize,animDuration,event){var self=this,_opt=this._options,gl=_opt.gridLayout,minimizedTiles=_opt.$tiles.not(_opt.$maximizedTile),$tileToMinimize=_opt.$maximizedTile,tileToMinimizeIndex=parseInt($tileToMinimize.attr("data-index"),10),tileToMaximizeIndex=parseInt($tileToMaximize.attr("data-index"),10),rightPanelOffset=_opt.$rightPanel.igPosition().left-gl.marginLeft;this._toMinimizedState($tileToMinimize);this._positionRightPanelTiles($tileToMinimize,tileToMaximizeIndex,true,true,animDuration,function(){var prevIndex=tileToMinimizeIndex-1,prevTile;if(prevIndex===tileToMaximizeIndex){prevIndex-=1}prevTile=_opt.$tiles.filter("[data-index="+prevIndex+"]");if(prevTile.length>0){$tileToMinimize.insertAfter(prevTile)}else{$tileToMinimize.prependTo(_opt.$rightPanel)}if(event){self._triggerTileMinimized(event,$tileToMinimize)}});this._positionRightPanelTiles(minimizedTiles.not($tileToMaximize),tileToMaximizeIndex,false,false,animDuration);$tileToMaximize.css({left:"+="+rightPanelOffset,top:"-="+_opt.$rightPanel.scrollTop()}).appendTo(_opt.$leftPanel);this._maximizeTile($tileToMaximize,animDuration,event)},_maximizeTile:function($tileToMaximize,animDuration,event){var self=this,_opt=this._options,mt=_opt.gridLayout.marginTop,innerContainer=$tileToMaximize.children(this._selectors.innerContainerSelector);animDuration=typeof animDuration==="number"?animDuration:this.options.animationDuration;this._toMaximizedState($tileToMaximize);innerContainer.addClass(this.css.overflowHidden);$tileToMaximize.animate({width:"100%",height:this.element.height()-2*mt,top:mt,left:0},animDuration,function(){_opt.$leftPanel.removeClass(self.css.overflowVisible);innerContainer.removeClass(self.css.overflowHidden);_opt.$maximizedTile=$tileToMaximize;_opt.animating=false;if(event){self._triggerTileMaximized(event,$tileToMaximize)}})},_maximizeTileWithCustomIndex:function($tileToMaximize,animDuration,event){var itemData,i,self=this,_opt=this._options,$tileToMinimize=_opt.$maximizedTile,tileToMinimizeNewDim={width:$tileToMaximize.outerWidth(),height:$tileToMaximize.outerHeight(),top:$tileToMaximize.css("top"),left:$tileToMaximize.css("left")},tileToMaximizeNewDim={width:$tileToMinimize.outerWidth(),height:$tileToMinimize.outerHeight(),top:$tileToMinimize.css("top"),left:$tileToMinimize.css("left")},swapTilesInConfig=function(itemsConfig){for(i=0;i<itemsConfig.length;i++){itemData=itemsConfig[i];if(itemData.item.is($tileToMinimize)){itemData.item=$tileToMaximize}else if(itemData.item.is($tileToMaximize)){itemData.item=$tileToMinimize}}};this._toMaximizedState($tileToMaximize);this._toMinimizedState($tileToMinimize);$tileToMinimize.animate(tileToMinimizeNewDim,animDuration,function(){if(event){self._triggerTileMinimized(event,$tileToMinimize)}});$tileToMaximize.animate(tileToMaximizeNewDim,animDuration,function(){swapTilesInConfig(self._options.$layoutManagerElement.igLayoutManager("option","items"));swapTilesInConfig(_opt.gridLayout.initialItems);_opt.$maximizedTile=$tileToMaximize;_opt.animating=false;if(event){self._triggerTileMaximized(event,$tileToMaximize)}})},maximize:function($tileToMaximize,animDuration,event){var _opt=this._options;animDuration=typeof animDuration==="number"?animDuration:this.options.animationDuration;if(!$tileToMaximize){return}if(_opt.$maximizedTile&&_opt.$maximizedTile.attr("data-index")===$tileToMaximize.attr("data-index")){return}if(!_opt.useMaximizedTileIndex){_opt.$leftPanel.addClass(this.css.overflowVisible).removeClass(this.css.overflowHidden);if(!_opt.$maximizedTile){this._toMaximizedView($tileToMaximize,animDuration,event)}else{this._maximizedTileSwap($tileToMaximize,animDuration,event)}}else{this._maximizeTileWithCustomIndex($tileToMaximize,animDuration,event)}},minimize:function(animDuration,event){var _opt=this._options,$tileToMinimize=_opt.$maximizedTile,gl=_opt.gridLayout,rightTilesOffset=_opt.$rightPanel.igPosition().left,tileToMinimizeIndex;if(!$tileToMinimize){return}this.element.css("min-width",0);tileToMinimizeIndex=parseInt($tileToMinimize.attr("data-index"),10);_opt.$leftPanel.width(_opt.$leftPanel.outerWidth(true)).height(_opt.$leftPanel.outerHeight(true)).css({margin:0});this._toMinimizedState($tileToMinimize);$tileToMinimize.css({width:$tileToMinimize.outerWidth(),height:$tileToMinimize.outerHeight(),top:gl.marginTop,left:gl.marginLeft});_opt.$tiles.not($tileToMinimize).each(function(){var $tile=$(this);$tile.css({left:"+="+rightTilesOffset,top:"-="+_opt.$rightPanel.scrollTop()});if(parseInt($tile.attr("data-index"),10)>tileToMinimizeIndex){$tile.appendTo(_opt.$leftPanel)}else{$tile.insertBefore($tileToMinimize)}});this._hideSplitterElements();this.reflow(true,animDuration,event)},maximizedTile:function(){return this._options.$maximizedTile||null},minimizedTiles:function(){var minimizedTiles=this._options.$tiles.not(this._options.$maximizedTile);return minimizedTiles.length>0?minimizedTiles:null},splitter:function(){return this._options.useMaximizedTileIndex?null:this.element.data("igSplitter")},layoutManager:function(){return this._options.$layoutManagerElement.data("igLayoutManager")},reflow:function(forceReflow,animationDuration,event){this.layoutManager().reflow(forceReflow,animationDuration,event)},widget:function(){return this.element},_triggerDataBinding:function(){var args={owner:this,dataSource:this.options.dataSource};return this._trigger(this.events.dataBinding,null,args)},_triggerDataBound:function(success,msg,dataView){var args={owner:this,success:success,errorMessage:msg,dataView:dataView};this._trigger(this.events.dataBound,null,args)},_triggerRendering:function(tiles,items){var args={owner:this,tiles:tiles,items:items};return this._trigger(this.events.rendering,null,args)},_triggerRendered:function(){this._trigger(this.events.rendered,null,{owner:this})},_triggerTileRendering:function(event,ui){var args={owner:this,tile:ui.item};return this._trigger(this.events.tileRendering,event,args)},_triggerTileRendered:function(event,ui){var args={owner:this,tile:ui.item};return this._trigger(this.events.tileRendered,event,args)},_triggerTileMaximizing:function(event,tile){var args={owner:this,tile:tile,minimizingTile:this._options.$maximizedTile||null};return this._trigger(this.events.tileMaximizing,event,args)},_triggerTileMaximized:function(event,tile){var args={owner:this,tile:tile};this._trigger(this.events.tileMaximized,event,args)},_triggerTileMinimizing:function(event,tile,maximizingTile){var args={owner:this,tile:tile,maximizingTile:maximizingTile||null};return this._trigger(this.events.tileMinimizing,event,args)},_triggerTileMinimized:function(event,tile){var args={owner:this,tile:tile};this._trigger(this.events.tileMinimized,event,args)},dataBind:function(){var noCancel;this._initDataSource();noCancel=this._triggerDataBinding();if(noCancel){this.options.dataSource.dataBind(this._renderData,this)}},_destroyTiles:function(){var self=this,_opt=this._options;_opt.$layoutManagerElement.igLayoutManager("destroy");if(!_opt.useMaximizedTileIndex){this.element.igSplitter("destroy")}if(_opt.fromMarkup){if(_opt.useMaximizedTileIndex){_opt.$tiles.each(function(){var $tile=$(this);$tile.children().removeClass(self.css.innerContainer).appendTo(self.element).children("."+self.css.hidden).removeClass(self.css.hidden);$tile.remove()})}else{this._removePanels();this.element.children().children().unwrap()}}else{this.element.empty()}},_removeEventHandlers:function(){var _opt=this._options,elHandlers=_opt.elementHandlers,minimizeBtnSelector=this._selectors.minimizeBtnSelector,minimizedTileSelector=this._selectors.minimizedTileSelector;this.element.off("click",minimizedTileSelector,elHandlers.minimizedTileClick).off("mouseover",minimizedTileSelector,elHandlers.miminimizedTileMouseOver).off("mouseout",minimizedTileSelector,elHandlers.minimizedTileMouseOut).off("click",minimizeBtnSelector,elHandlers.minimizeBtnClick).off("mouseover",minimizeBtnSelector,elHandlers.minimizeBtnMouseOver).off("mouseout",minimizeBtnSelector,elHandlers.minimizeBtnMouseOut);$(window).off("resize",_opt.windowHandlers.resize)},_toggleDisabled:function(value){
var splitter=this.splitter(),layoutManager=this._options.$layoutManagerElement.data().igLayoutManager;if(splitter){splitter.options.disabled=value}if(layoutManager){layoutManager.options.disabled=value}},destroy:function(){this.element.removeClass(this.css.container);this._destroyTiles();this._removeEventHandlers();this._superApply(arguments);return this}});$.extend($.ui.igTileManager,{version:"19.1.31"});return $});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});