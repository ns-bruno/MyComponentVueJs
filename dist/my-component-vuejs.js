!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("my-component-vuejs",[],t):"object"==typeof exports?exports["my-component-vuejs"]=t():e["my-component-vuejs"]=t()}(window,(function(){return function(e){var t=window.webpackHotUpdatemy_component_vuejs;window.webpackHotUpdatemy_component_vuejs=function(e,n){!function(e,t){if(!_[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--y&&0===b&&C()}(e,n),t&&t(e,n)};var n,r=!0,o="4d7fa051b1174e16d3b3",a=1e4,i={},s=[],c=[];function d(e){var t=T[e];if(!t)return V;var r=function(r){return t.hot.active?(T[r]?-1===T[r].parents.indexOf(e)&&T[r].parents.push(e):(s=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),V(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return V[e]},set:function(t){V[e]=t}}};for(var a in V)Object.prototype.hasOwnProperty.call(V,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,o(a));return r.e=function(e){return"ready"===p&&f("prepare"),b++,V.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===p&&(g[e]||O(e),0===b&&0===y&&C())}},r.t=function(e,t){return 1&t&&(e=r(e)),V.t(e,-2&t)},r}function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:D,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:i[e]};return n=void 0,t}var l=[],p="idle";function f(e){p=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var v,h,m,y=0,b=0,g={},x={},_={};function w(e){return+e+""===e?+e:e}function E(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(t=a,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=V.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;x={},g={},_=e.c,m=e.h,f("prepare");var t=new Promise((function(e,t){v={resolve:e,reject:t}}));h={};return O(0),"prepare"===p&&0===b&&0===y&&C(),t}));var t}function O(e){_[e]?(x[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=V.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function C(){f("ready");var e=v;if(v=null,e)if(r)Promise.resolve().then((function(){return D(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function D(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,a,c,d;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((c=T[a])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var s=0;s<c.parents.length;s++){var d=c.parents[s],u=T[d];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([d]),moduleId:a,parentId:d};-1===t.indexOf(d)&&(u.hot._acceptedDependencies[a]?(n[d]||(n[d]=[]),l(n[d],[a])):(delete n[d],t.push(d),r.push({chain:i.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var v={},y=[],b={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var x in h)if(Object.prototype.hasOwnProperty.call(h,x)){var E;d=w(x);var O=!1,C=!1,D=!1,P="";switch((E=h[x]?u(d):{type:"disposed",moduleId:x}).chain&&(P="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(O=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(E),C=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),D=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return f("abort"),Promise.reject(O);if(C)for(d in b[d]=h[d],l(y,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,d)&&(v[d]||(v[d]=[]),l(v[d],E.outdatedDependencies[d]));D&&(l(y,[E.moduleId]),b[d]=g)}var j,R=[];for(r=0;r<y.length;r++)d=y[r],T[d]&&T[d].hot._selfAccepted&&b[d]!==g&&R.push({module:d,errorHandler:T[d].hot._selfAccepted});f("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete installedChunks[e]}(e)}));for(var S,k,M=y.slice();M.length>0;)if(d=M.pop(),c=T[d]){var A={},q=c.hot._disposeHandlers;for(a=0;a<q.length;a++)(n=q[a])(A);for(i[d]=A,c.hot.active=!1,delete T[d],delete v[d],a=0;a<c.children.length;a++){var F=T[c.children[a]];F&&((j=F.parents.indexOf(d))>=0&&F.parents.splice(j,1))}}for(d in v)if(Object.prototype.hasOwnProperty.call(v,d)&&(c=T[d]))for(k=v[d],a=0;a<k.length;a++)S=k[a],(j=c.children.indexOf(S))>=0&&c.children.splice(j,1);for(d in f("apply"),o=m,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var H=null;for(d in v)if(Object.prototype.hasOwnProperty.call(v,d)&&(c=T[d])){k=v[d];var U=[];for(r=0;r<k.length;r++)if(S=k[r],n=c.hot._acceptedDependencies[S]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(k)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:k[r],error:e}),t.ignoreErrored||H||(H=e)}}}for(r=0;r<R.length;r++){var $=R[r];d=$.module,s=[d];try{V(d)}catch(e){if("function"==typeof $.errorHandler)try{$.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||H||(H=n),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||H||(H=e)}}return H?(f("fail"),Promise.reject(H)):(f("idle"),new Promise((function(e){e(y)})))}var T={};function V(t){if(T[t])return T[t].exports;var n=T[t]={i:t,l:!1,exports:{},hot:u(t),parents:(c=s,s=[],c),children:[]};return e[t].call(n.exports,n,n.exports,d(t)),n.l=!0,n.exports}return V.m=e,V.c=T,V.d=function(e,t,n){V.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},V.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},V.t=function(e,t){if(1&t&&(e=V(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(V.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)V.d(n,r,function(t){return e[t]}.bind(null,r));return n},V.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return V.d(t,"a",t),t},V.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},V.p="",V.h=function(){return o},d(22)(V.s=22)}([function(e,t){e.exports=require("vuetify/lib/components/VCard")},function(e,t){e.exports=require("vuetify/lib/components/VExpansionPanel")},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[e._v("Autenticação de Usuário")]),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-card-text",[n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[e.withDevice?n("my-text-field",{attrs:{label:"Dispositivo","prepend-icon":"devices","append-icon":e.showDevice?"visibility_off":"visibility",maxlength:40,type:e.showDevice?"text":"password",rules:[e.rules.required,e.rules.noSpaceAllowed]},on:{"click:append":function(t){e.showDevice=!e.showDevice}},model:{value:e.device,callback:function(t){e.device=t},expression:"device"}}):e._e(),e._v(" "),n("my-text-field",{attrs:{label:"Usuário","prepend-icon":"person",maxlength:60,rules:[e.rules.required,e.rules.noSpaceAllowed]},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),e._v(" "),n("my-text-field",{attrs:{label:"Senha","prepend-icon":"lock","append-icon":e.showPassword?"visibility_off":"visibility",maxlength:20,type:e.showPassword?"text":"password",rules:[e.rules.required]},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",disabled:!e.valid,loading:e.myloading},on:{click:function(t){return e.emitClick()}}},[e._v("Entrar")])],1)],1)},o=[];r._withStripped=!0,n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return o}))},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:e.value,scrollable:"",persistent:""}},[n("v-card",[n("v-card-title",{class:e.classObject},[n("p",{staticClass:"font-weight-black"},[e._v("Código do Retorno: "+e._s(e.myDataDialog.idReturn))])]),e._v(" "),n("v-card-text",[n("p",{staticClass:"mt-5 mb-12 body-1 black--text"},[e._v(e._s(e.myDataDialog.msg))]),e._v(" "),n("v-expansion-panels",{attrs:{focusable:""}},[e.myDataDialog.msgExtra?n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"font-weight-black"},[e._v("Extra")]),e._v(" "),n("v-expansion-panel-content",{staticClass:"mt-5"},[e._v(e._s(e.myDataDialog.msgExtra))])],1):e._e()],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(t){return e.emitMyClickClose(!1)}}},[e._v("Fechar")])],1)],1)],1)},o=[];r._withStripped=!0,n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return o}))},function(e,t,n){"use strict";var r={name:"my-user-authentication",components:{MyTextField:n(6).a},mixins:[{data:function(){return{rules:{required:function(e){return!!e||"Campo é obrigatório!"},email:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"E-mail inválido!"},noSpaceAllowed:function(e){return(e||"").indexOf(" ")<0||"Não é permitido espaço!"}}}}}],data:function(){return{valid:!1,showPassword:!1,showDevice:!1,user:this.myuser,password:this.mypassword,device:this.mydevice}},props:{myuser:{type:String,default:void 0},mypassword:{type:String,default:void 0},mydevice:{type:String,default:void 0},withDevice:{type:Boolean,default:!1},myloading:{type:Boolean,default:!1}},methods:{emitClick:function(){this.$emit("input-my-user-authentication",this.user,this.password,this.device)}}};t.a=r},function(e,t,n){"use strict";var r={name:"my-dialog-message",data:function(){return{}},props:{value:{},myDataDialog:{type:Object,default:function(){return{idReturn:0,msg:"",msgExtra:""}}},type:{type:String,default:"dialog",validator:function(e){return-1!==["dialog","success","info","error"].indexOf(e)}}},watch:{},computed:{classObject:function(){var e="headline white--text ";return"success"===this.type?e+"success":"info"===this.type?e+"info":"error"===this.type?e+"error":e.replace("white--text","grey lighten-1")}},methods:{emitMyClickClose:function(e){this.$emit("click-close-my-dialog-message",e)}}};t.a=r},function(e,t,n){"use strict";var r=n(16);t.a={name:"my-text-field",extends:r.VTextField,data:function(){return{}},props:{counter:{type:Boolean|Number|String,default:!0},clearable:{type:Boolean,default:!0},uppercase:{type:Boolean,default:!0},required:{type:Boolean,default:!1},isemail:{type:Boolean,default:!1},allowspaces:{type:Boolean,default:!0}},computed:{},watch:{value:function(e,t){this.uppercase&&("text"===this.type||"password"===this.type||"email"===this.type)&&this.value&&this.$emit("input",""+this.value.toString().toUpperCase())},change:function(e,t){console.log("Value: "+e+" - Field: "+t)}}}},function(e,t,n){"use strict";function r(e,t,n,r,o,a,i,s){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(e,t){return c.call(t),u(e,t)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:d}}n.d(t,"a",(function(){return r}))},function(e,t){e.exports=function(e,t){var n="function"==typeof e.exports?e.exports.extendOptions:e.options;for(var r in"function"==typeof e.exports&&(n.components=e.exports.options.components),n.components=n.components||{},t)n.components[r]=n.components[r]||t[r]}},function(e,t){e.exports=require("vuetify/lib/components/VBtn")},function(e,t){e.exports=require("vuetify/lib/components/VGrid")},function(e,t){e.exports=require("vuetify/lib/components/VToolbar")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("axios")},function(e,t){var n,r,o=Object.create(null);"undefined"!=typeof window&&(window.__VUE_HOT_MAP__=o);var a=!1,i="beforeCreate";function s(e,t){if(t.functional){var n=t.render;t.render=function(t,r){var a=o[e].instances;return r&&a.indexOf(r.parent)<0&&a.push(r.parent),n(t,r)}}else c(t,i,(function(){var t=o[e];t.Ctor||(t.Ctor=this.constructor),t.instances.push(this)})),c(t,"beforeDestroy",(function(){var t=o[e].instances;t.splice(t.indexOf(this),1)}))}function c(e,t,n){var r=e[t];e[t]=r?Array.isArray(r)?r.concat(n):[r,n]:[n]}function d(e){return function(t,n){try{e(t,n)}catch(e){console.error(e),console.warn("Something went wrong during Vue component hot-reload. Full reload required.")}}}function u(e,t){for(var n in e)n in t||delete e[n];for(var r in t)e[r]=t[r]}t.install=function(e,o){a||(a=!0,n=e.__esModule?e.default:e,r=n.version.split(".").map(Number),o,n.config._lifecycleHooks.indexOf("init")>-1&&(i="init"),t.compatible=r[0]>=2,t.compatible||console.warn("[HMR] You are using a version of vue-hot-reload-api that is only compatible with Vue.js core ^2.0.0."))},t.createRecord=function(e,t){if(!o[e]){var n=null;"function"==typeof t&&(t=(n=t).options),s(e,t),o[e]={Ctor:n,options:t,instances:[]}}},t.isRecorded=function(e){return void 0!==o[e]},t.rerender=d((function(e,t){var n=o[e];if(t){if("function"==typeof t&&(t=t.options),n.Ctor)n.Ctor.options.render=t.render,n.Ctor.options.staticRenderFns=t.staticRenderFns,n.instances.slice().forEach((function(e){e.$options.render=t.render,e.$options.staticRenderFns=t.staticRenderFns,e._staticTrees&&(e._staticTrees=[]),Array.isArray(n.Ctor.options.cached)&&(n.Ctor.options.cached=[]),Array.isArray(e.$options.cached)&&(e.$options.cached=[]);var r=function(e){if(!e._u)return;var t=e._u;return e._u=function(e){try{return t(e,!0)}catch(n){return t(e,null,!0)}},function(){e._u=t}}(e);e.$forceUpdate(),e.$nextTick(r)}));else if(n.options.render=t.render,n.options.staticRenderFns=t.staticRenderFns,n.options.functional){if(Object.keys(t).length>2)u(n.options,t);else{var r=n.options._injectStyles;if(r){var a=t.render;n.options.render=function(e,t){return r.call(t),a(e,t)}}}n.options._Ctor=null,Array.isArray(n.options.cached)&&(n.options.cached=[]),n.instances.slice().forEach((function(e){e.$forceUpdate()}))}}else n.instances.slice().forEach((function(e){e.$forceUpdate()}))})),t.reload=d((function(e,t){var n=o[e];if(t)if("function"==typeof t&&(t=t.options),s(e,t),n.Ctor){r[1]<2&&(n.Ctor.extendOptions=t);var a=n.Ctor.super.extend(t);a.options._Ctor=n.options._Ctor,n.Ctor.options=a.options,n.Ctor.cid=a.cid,n.Ctor.prototype=a.prototype,a.release&&a.release()}else u(n.options,t);n.instances.slice().forEach((function(e){e.$vnode&&e.$vnode.context?e.$vnode.context.$forceUpdate():console.warn("Root or manually mounted instance modified. Full reload required.")}))}))},function(e,t){e.exports=require("vue")},function(e,t){e.exports=require("vuetify/lib")},function(e,t,n){"use strict";var r=n(2),o=n(4),a=n(7),i=n(8),s=n.n(i),c=n(9),d=n(0),u=n(18),l=n(10),p=n(11),f=Object(a.a)(o.a,r.render,r.staticRenderFns,!1,null,null,null);s()(f,{VBtn:c.VBtn,VCard:d.VCard,VCardActions:d.VCardActions,VCardText:d.VCardText,VForm:u.VForm,VSpacer:l.VSpacer,VToolbar:p.VToolbar,VToolbarTitle:p.VToolbarTitle});var v=n(14);v.install(n(15)),v.compatible&&(e.hot.accept(),v.isRecorded("314cc804")?v.reload("314cc804",f.options):v.createRecord("314cc804",f.options),e.hot.accept(2,function(e){r=n(2),v.rerender("314cc804",{render:r.render,staticRenderFns:r.staticRenderFns})}.bind(this))),f.options.__file="br/com/nsbruno/src/components/MyUserAuthentication/MyUserAuthentication.vue",t.a=f.exports},function(e,t){e.exports=require("vuetify/lib/components/VForm")},function(e,t,n){"use strict";var r=n(3),o=n(5),a=n(7),i=n(8),s=n.n(i),c=n(9),d=n(0),u=n(20),l=n(1),p=n(10),f=Object(a.a)(o.a,r.render,r.staticRenderFns,!1,null,null,null);s()(f,{VBtn:c.VBtn,VCard:d.VCard,VCardActions:d.VCardActions,VCardText:d.VCardText,VCardTitle:d.VCardTitle,VDialog:u.VDialog,VExpansionPanel:l.VExpansionPanel,VExpansionPanelContent:l.VExpansionPanelContent,VExpansionPanelHeader:l.VExpansionPanelHeader,VExpansionPanels:l.VExpansionPanels,VSpacer:p.VSpacer});var v=n(14);v.install(n(15)),v.compatible&&(e.hot.accept(),v.isRecorded("b18e59f4")?v.reload("b18e59f4",f.options):v.createRecord("b18e59f4",f.options),e.hot.accept(3,function(e){r=n(3),v.rerender("b18e59f4",{render:r.render,staticRenderFns:r.staticRenderFns})}.bind(this))),f.options.__file="br/com/nsbruno/src/components/MyDialogMessage/MyDialogMessage.vue",t.a=f.exports},function(e,t){e.exports=require("vuetify/lib/components/VDialog")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t,n){"use strict";n.r(t);var r,o=n(6),a=n(17),i=n(19),s=n(12),c=n.n(s),d=n(21),u=n.n(d),l=n(13),p=n.n(l),f=Object.freeze({METHOD_NOT_DEFINED:"O parâmetro methods(metodo) não foi definido ou não encontramos este method. Ou senha não sabe se é um GET, POST, PUT, etc."}),v={data:function(){return{GET:"GET",POST:"POST",DELETE:"DELETE",PUT:"PUT"}},methods:{returnWebserviceJsonPromise:function(e,t,n,r,o,a){o=o||{},a=a||null,n=n||null;var i={},s={headers:{}};if(Object.assign(s.headers,r),n){var c={auth:{username:n.username,password:n.password}};i=Object.assign({},s,c)}if(a){var d=0;for(var u in a){var l=a[u];(l||"number"==typeof l)&&(e+=0===d?"?":"&",e+=u+"="+l,d++)}}return e=encodeURI(e),new Promise((function(n,r){!t||"GET"!==t&&"get"!==t?!t||"POST"!==t.toUpperCase()&&"post"!==t?r({statusReturn:{idReturn:0,msg:f.METHOD_NOT_DEFINED,msgExtra:"O nome do method(metodo) que foi enviado é: "+t}}):p.a.post(e,o,i).then((function(e){200===e.status?n({idReturn:e.status,content:e.data.content?e.data.content:e.data,pageable:e.data.pageable,last:e.data.last,totalElements:e.data.totalElements,totalPages:e.data.totalPages,size:e.data.size,number:e.data.number,sort:e.data.sort,numberOfElements:e.data.numberOfElements,first:e.data.first,empty:e.data.empty}):r({statusReturn:{idReturn:e.status,msg:e.statusText+(e.data.path?" \n| Path: "+e.data.path:"")+(e.data.error?" \n(Error: "+e.data.error+") ":"")+(e.data.message?" |\n Message:"+e.data.message:""),msgExtra:e.data.trace?" |\n Trace:"+e.data.trace:JSON.stringify(e.data)}})})).catch((function(e){var t="",n="",o=0;e.response?(e.response.status?t=t+" Código: "+(o=e.response.status):o=0,e.response.statusText&&(t=t+" Status: "+e.response.statusText),n=(n=n+"\n response.data: "+JSON.stringify(e.response.data))+"\n response.headers: "+JSON.stringify(e.response.headers)):n=e.request?n+"\n request: "+e.request:n+"\n message: "+e.message,t=t+" | "+e.toString(),r({statusReturn:{idReturn:o,msg:t,msgExtra:n}})})):p.a.post(e,i).then((function(e){200===e.status?n({idReturn:e.status,content:e.data.content?e.data.content:e.data,pageable:e.data.pageable,last:e.data.last,totalElements:e.data.totalElements,totalPages:e.data.totalPages,size:e.data.size,number:e.data.number,sort:e.data.sort,numberOfElements:e.data.numberOfElements,first:e.data.first,empty:e.data.empty}):r({statusReturn:{idReturn:e.status,msg:e.statusText+(e.data.path?" \n| Path: "+e.data.path:"")+(e.data.error?" \n(Error: "+e.data.error+") ":"")+(e.data.message?" |\n Message:"+e.data.message:""),msgExtra:e.data.trace?" |\n Trace:"+e.data.trace:JSON.stringify(e.data)}})})).catch((function(e){var t="",n="",o=0;e.response?(e.response.status?t=t+" Código: "+(o=e.response.status):o=0,e.response.statusText&&(t=t+" Status: "+e.response.statusText),n=(n=n+"\n response.data: "+JSON.stringify(e.response.data))+"\n response.headers: "+JSON.stringify(e.response.headers)):n=e.request?n+"\n request: "+e.request:n+"\n message: "+e.message,t=t+" | "+e.toString(),r({statusReturn:{idReturn:o,msg:t,msgExtra:n}})}))}))},conectWebserviceJson:(r=u()(c.a.mark((function e(t,n,r,o,a,i){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.returnWebserviceJsonPromise(t,n,r,o,a,i);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(e,t,n,o,a,i){return r.apply(this,arguments)})}},h={MyTextField:o.a,MyUserAuthentication:a.a,MyDialogMessage:i.a},m={MyBaseMixins:{data:function(){return{dialogError:!1,returnWebserviceStatus:{idReturn:0,msg:"",msgExtra:""}}},methods:{closeDialogError:function(e){e||(this.dialogError=!1,this.returnWebserviceStatus={codigoRetorno:0,msg:"",msgExtra:""})}}},Webservices:v},y={install:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object.keys(h).forEach((function(t){e.component(t,h[t])})),Object.keys(m).forEach((function(t){e.mixin(m[t])}))}};t.default=y;"undefined"!=typeof window&&window.Vue&&window.Vue.use(y)}])}));