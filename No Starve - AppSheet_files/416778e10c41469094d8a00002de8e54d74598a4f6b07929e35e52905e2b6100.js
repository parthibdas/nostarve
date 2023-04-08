(self.webpackChunkappsheet_app=self.webpackChunkappsheet_app||[]).push([["src_common_app_editor_link_index_ts"],{160647:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setReadyToBroadcast=t.setPathToBroadcast=t.setIdToBroadcast=t.setHoveredElement=t.setEmulatorMode=t.setCurrentAppComponent=t.getHoveredElement=t.editingEmulatorReducer=t.INITIAL_EDITING_EMULATOR_STATE=void 0;var a=n(829829),o={emulatorMode:n(780146).DEFAULT_EMULATOR_MODE,hoveredElement:null,currentAppComponent:null,broadcasting:{pathToBroadcast:null,componentIdToBroadcast:null,readyToBroadcast:!0}};t.INITIAL_EDITING_EMULATOR_STATE=o;var r=(0,a.createSlice)({name:"editingEmulator",initialState:o,reducers:{setEmulatorMode:function(e,t){e.emulatorMode=t.payload.mode},setHoveredElement:function(e,t){e.hoveredElement=t.payload},setCurrentAppComponent:function(e,t){e.currentAppComponent=t.payload.component},setPathToBroadcast:function(e,t){e.broadcasting.pathToBroadcast=t.payload},setIdToBroadcast:function(e,t){e.broadcasting.componentIdToBroadcast=t.payload},setReadyToBroadcast:function(e,t){e.broadcasting.readyToBroadcast=t.payload}}});t.getHoveredElement=function(e){return e.editingEmulator.hoveredElement};var i=r.reducer;t.editingEmulatorReducer=i;var u=r.actions,c=u.setEmulatorMode,s=u.setHoveredElement,l=u.setCurrentAppComponent,d=u.setPathToBroadcast,p=u.setIdToBroadcast,f=u.setReadyToBroadcast;t.setReadyToBroadcast=f,t.setIdToBroadcast=p,t.setPathToBroadcast=d,t.setCurrentAppComponent=l,t.setHoveredElement=s,t.setEmulatorMode=c},780146:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_EMULATOR_MODE=void 0;t.DEFAULT_EMULATOR_MODE="preview"},851353:(e,t,n)=>{"use strict";var a=n(564836);Object.defineProperty(t,"__esModule",{value:!0}),t.contentHovered=function(e){return v(this,void 0,void 0,o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.default.maybeLog("App Editor Link - From App","emulator-interaction-event","hover",e),t.next=3,m().postMessage({name:"emulator-interaction-event",event:"hover",data:e});case 3:case"end":return t.stop()}}),t)})))},t.disconnectBroadcastChannel=function(){return v(this,void 0,void 0,o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=4;break}return e.next=3,h.close();case 3:h=null;case 4:case"end":return e.stop()}}),e)})))},t.handleReflectChangeEvent=E,t.isDesktopEmulator=t.isAnyEmulator=void 0,t.listenForEditorEvents=function(e){y()&&(t=new URL(l.WindowWrapper.location.toString()),(n=new URLSearchParams(t.search)).delete("preview"),t.search=n.toString(),l.WindowWrapper.history.replaceState({},"",t.toString()));var t,n;m(e).addEventListener("message",(function(e){var t,n,a,o,r,i;switch(e.name){case"reflect-change":f.default.maybeLog("App Editor Link - From Editor",e.name,{Id:null===(n=null===(t=e.data)||void 0===t?void 0:t.appTemplate)||void 0===n?void 0:n.Id,Version:null===(o=null===(a=e.data)||void 0===a?void 0:a.appTemplate)||void 0===o?void 0:o.Version,LastModified:null===(i=null===(r=e.data)||void 0===r?void 0:r.appTemplate)||void 0===i?void 0:i.LastModified}),E(e);break;case"sync-requested":f.default.maybeLog("App Editor Link - From Editor",e.name),window.StateReflector.RefreshAppData({initiatedBy:"Editor"});break;case"reload-emulator":f.default.maybeLog("App Editor Link - From Editor",e.name),function(e){var t=e.data.version,n=location.href,a=new URL(n);a.searchParams.set("preview","2"),t&&(a.searchParams.set("version",t),n=a.toString());n===location.href?l.WindowWrapper.location.reload():l.WindowWrapper.location.href=n}(e);break;case"toggle-edit":f.default.maybeLog("App Editor Link - From Editor",e.name,e.data),function(e){e.data.enable?p.default.attach():p.default.detach()}(e);break;case"highlight-item":f.default.maybeLog("App Editor Link - From Editor",e.name,e.data),p.default.highlightItem(e.data.id)}}))};var o=a(n(364687)),r=n(938437),i=a(n(819433)),u=n(692479),c=n(557310),s=n(759265),l=n(892148),d=n(276891),p=a(n(777194)),f=a(n(890468)),v=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function u(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((a=a.apply(e,t||[])).next())}))},h=null;function m(e){var t="app-editor-".concat(e);return null!=h?h:h=new r.BroadcastChannel(t)}var b=function(){return new URLSearchParams(l.WindowWrapper.location.search).get("preview")===d.PreviewType.Authenticated};t.isAnyEmulator=b;var y=function(){return b()&&window===window.top};function E(e){var t=e.data,n=t.appTemplate,a=t.deepLink,o=t.dataByName;if(c.ReactRootUIConfig.isReactRoot()){if(window.StateReflector.UpdateAppTemplate(n,null,o),a){var r=(0,s.hashStringToUIState)(a);(0,i.default)().dispatch((0,u.newViewStack)({Identifier:{Type:"Control",Name:r.ControlName}}))}}else window.StateReflector.UpdateAppTemplate(n,a,o)}t.isDesktopEmulator=y},161822:(e,t,n)=>{"use strict";var a=n(564836);Object.defineProperty(t,"__esModule",{value:!0}),t.broadcastChangeToApp=function(e,t,n){return u(this,void 0,void 0,o.default.mark((function a(){var r;return o.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=s(),a.next=3,r.postMessage({name:"reflect-change",data:{appTemplate:e,deepLink:t,dataByName:n}});case 3:case"end":return a.stop()}}),a)})))},t.broadcastEmulatorEditMode=function(e){return u(this,void 0,void 0,o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().postMessage({name:"toggle-edit",data:{enable:"edit"===e}});case 2:case"end":return t.stop()}}),t)})))},t.broadcastHighlightItem=function(e){return u(this,void 0,void 0,o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().postMessage({name:"highlight-item",data:{id:e}});case 2:case"end":return t.stop()}}),t)})))},t.broadcastReloadEmulator=function(e){return u(this,void 0,void 0,o.default.mark((function t(){var n;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s(),t.next=3,n.postMessage({name:"reload-emulator",data:{version:e}});case 3:case"end":return t.stop()}}),t)})))},t.broadcastSyncEmulator=function(){return u(this,void 0,void 0,o.default.mark((function e(){var t;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s(),e.next=3,t.postMessage({name:"sync-requested",data:null});case 3:case"end":return e.stop()}}),e)})))},t.disconnectBroadcastChannel=function(){return u(this,void 0,void 0,o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=4;break}return e.next=3,c.close();case 3:c=null;case 4:case"end":return e.stop()}}),e)})))},t.listenForAppEvents=function(e){return u(this,void 0,void 0,o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s().addEventListener("message",(function(t){if("emulator-interaction-event"===t.name)if("hover"===t.event)e.dispatch((0,i.setHoveredElement)(t.data))}));case 1:case"end":return t.stop()}}),t)})))};var o=a(n(364687)),r=n(938437),i=n(160647),u=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function u(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((a=a.apply(e,t||[])).next())}))},c=null;function s(){var e="app-editor-".concat(window.APP_ID);return null!=c?c:c=new r.BroadcastChannel(e)}},917808:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreviewType",{enumerable:!0,get:function(){return r.PreviewType}}),Object.defineProperty(t,"broadcastChangeToApp",{enumerable:!0,get:function(){return a.broadcastChangeToApp}}),Object.defineProperty(t,"broadcastReloadEmulator",{enumerable:!0,get:function(){return a.broadcastReloadEmulator}}),Object.defineProperty(t,"broadcastSyncEmulator",{enumerable:!0,get:function(){return a.broadcastSyncEmulator}}),Object.defineProperty(t,"isAnyEmulator",{enumerable:!0,get:function(){return o.isAnyEmulator}}),Object.defineProperty(t,"isDesktopEmulator",{enumerable:!0,get:function(){return o.isDesktopEmulator}}),Object.defineProperty(t,"listenForEditorEvents",{enumerable:!0,get:function(){return o.listenForEditorEvents}});var a=n(161822),o=n(851353),r=n(276891)},777194:(e,t,n)=>{"use strict";var a=n(564836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(856690)),r=a(n(689728)),i=a(n(364687)),u=n(166089),c=n(44617),s=n(851353),l=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function u(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((a=a.apply(e,t||[])).next())}))},d="\n  [data-vfe-active]::after {\n    background-color: rgba(41, 98, 255);\n    opacity: 0;\n    animation-duration: ".concat(1e3,"ms;\n    animation-name: highlight;\n    display: block;\n  }\n  @keyframes highlight {\n  from {\n    opacity: 0;\n  }\n  15% {\n    opacity: 0.2;\n  }\n  85% {\n    opacity: 0.2;\n  }\n  to {\n    opacity: 0;\n  }\n"),p=function(e){return new Promise((function(t){return setTimeout(t,e)}))},f=function(e,t){return l(void 0,void 0,void 0,i.default.mark((function n(){var a,o;return i.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=Date.now();case 1:if(!(Date.now()-a<t)){n.next=9;break}return n.next=4,p(50);case 4:if(null,!(o=e())){n.next=7;break}return n.abrupt("return",o);case 7:n.next=1;break;case 9:return n.abrupt("return",null);case 10:case"end":return n.stop()}}),n)})))},v=function(e){return l(void 0,void 0,void 0,i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){var n=Object.assign(Object.assign({},u.AppGlobals.AppState.CurrentUIState),{FormUIState:Object.assign(Object.assign({},u.AppGlobals.AppState.CurrentUIState.FormUIState),{vfeFocusColumn:null!=e?e:void 0,vfeTimestamp:Date.now()})});u.AppGlobals.AppState.ReplaceState(n),t(null)}))})));case 1:case"end":return t.stop()}}),t)})))},h=new(function(){function e(){var t=this;(0,o.default)(this,e),this.isAttached=!1,this.stylesheetEle=null,this.lastHoveredEle=null,this.focusFn=null,this.onMouseOver=function(e){for(var n=e.target;null!=n&&!n.hasAttribute("data-vfe-column");)n=n.parentElement;if(n!==t.lastHoveredEle){var a=n?t.generateContext(n):null;(0,s.contentHovered)(a),t.lastHoveredEle=n}},this.onScroll=function(e){null!=t.lastHoveredEle&&((0,s.contentHovered)(null),t.lastHoveredEle=null)},this.highlightItem=function(e){return l(t,void 0,void 0,i.default.mark((function t(){var n,a,o,r,c;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isAttached){t.next=2;break}return t.abrupt("return",!1);case 2:if(e.control?u.AppGlobals.AppState.CurrentUIState.ControlName!==e.control&&(a="#control=".concat(encodeURIComponent(e.control)),u.AppGlobals.StateChangeHandler.SwitchApp(a)):e.root&&e.table&&(u.AppGlobals.AppState.CurrentUIState.Root===e.root&&(null===(n=u.AppGlobals.AppState.CurrentUIState.FormUIState)||void 0===n?void 0:n.TableName)===e.table||(o="#table=".concat(encodeURIComponent(e.table))+"&page=".concat(encodeURIComponent(e.root)),u.AppGlobals.StateChangeHandler.SwitchApp(o))),c=null,c=(r=function(){return e.column?document.querySelector('[data-vfe-column="'.concat(e.column,'"]')):e.control?document.querySelector('[data-vfe-control="'.concat(e.control,'"]')):null})()){t.next=11;break}return t.next=8,v(e.column);case 8:return t.next=10,f(r,1e3);case 10:c=t.sent;case 11:if(c){t.next=13;break}return t.abrupt("return",!1);case 13:return void 0!==c.scrollIntoViewIfNeeded?c.scrollIntoViewIfNeeded():c.scrollIntoView(),c.setAttribute("data-vfe-active","1"),t.next=17,p(1e3);case 17:return c.removeAttribute("data-vfe-active"),t.abrupt("return",!0);case 19:case"end":return t.stop()}}),t,this)})))}}return(0,r.default)(e,[{key:"generateContext",value:function(e){for(var t=e,n=null,a=null,o=null,r=null,i=null;t;)t.hasAttribute("data-vfe-column")&&(n=t,a=t.getAttribute("data-vfe-column")),t.hasAttribute("data-vfe-table")&&(o=t.getAttribute("data-vfe-table")),t.hasAttribute("data-vfe-control")&&(r=t.getAttribute("data-vfe-control")),t.hasAttribute("data-vfe-root")&&(i=t.getAttribute("data-vfe-root")),t=t.parentElement;if(null==n)return null;var u=$(n);return{id:{column:a,table:o,control:r,root:i},loc:Object.assign(Object.assign({},u.offset()),{width:u.width(),height:u.height()})}}},{key:"attachStylesheet",value:function(){if(!this.stylesheetEle){this.stylesheetEle=document.createElement("style");var e='\n  [data-vfe-interactive]::after {\n    content: "";\n    position: absolute;\n    right: -10px;\n    top: 0;\n    left: -10px;\n    bottom: 0;\n    border: 1px dashed #42A5F5;\n    border-radius: 3px;\n    opacity: 0.0;\n    z-index: 1000;\n    transition: opacity 0.1s ease-out;\n    pointer-events: none;\n    display: none;\n  }\n';c.dynamicRollouts.includeByUserId("ShowVFEEmulatorOverlay")&&(e+="\n  [data-vfe-interactive]:hover::after {\n    display: block;\n    opacity: 1;\n  }\n"),e+=d,this.stylesheetEle.textContent=e,document.head.appendChild(this.stylesheetEle)}}},{key:"detachStylesheet",value:function(){this.stylesheetEle&&(document.head.removeChild(this.stylesheetEle),this.stylesheetEle=null)}},{key:"attach",value:function(){if(!this.isAttached&&c.dynamicRollouts.includeByUserId("ConversationEnable")){this.isAttached=!0,document.addEventListener("mouseover",this.onMouseOver,!0),document.addEventListener("scroll",this.onScroll,!0),this.attachStylesheet();var e=this.focusFn=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(t){window.document.activeElement!==window.document.body&&e.call(this,t)}}}},{key:"detach",value:function(){this.isAttached&&(this.isAttached=!1,document.removeEventListener("mouseover",this.onMouseOver,!0),document.removeEventListener("scroll",this.onScroll,!0),this.detachStylesheet(),this.focusFn&&(HTMLElement.prototype.focus=this.focusFn,this.focusFn=null))}}]),e}());t.default=h},276891:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewType=void 0,t.PreviewType=n,function(e){e.Anonymous="1",e.Authenticated="2"}(n||(t.PreviewType=n={}))},200199:()=>{}}]);
//# sourceMappingURL=/cloud-sources/prod/e6194384faeec4eabdde961881ba5e21d014a3f3724e69bff079eee29a6a7032.map/