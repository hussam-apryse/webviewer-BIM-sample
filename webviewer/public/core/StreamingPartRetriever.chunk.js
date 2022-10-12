/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[12],{465:function(Ba,va,r){r.r(va);var oa=r(0),na=r(1);r.n(na);var ma=r(2),fa=r(157);Ba=r(48);var da=r(99),aa=r(261),y=r(74),x=r(260);r=r(393);var h=window,b=function(){function f(n,z,w){var ea=-1===n.indexOf("?")?"?":"&";switch(z){case y.a.NEVER_CACHE:this.url=n+ea+"_="+Object(na.uniqueId)();break;default:this.url=n}this.mf=w;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=x.a.NOT_STARTED}f.prototype.start=function(n,z){var w=this,ea=this,ka=this.request,ca;ea.Wx=0;n&&Object.keys(n).forEach(function(ba){w.request.setRequestHeader(ba,n[ba])});z&&(this.request.withCredentials=z);this.VE=setInterval(function(){var ba=0===window.document.URL.indexOf("file:///");ba=200===ka.status||
ba&&0===ka.status;if(ka.readyState!==x.b.DONE||ba){try{ka.responseText}catch(ia){return}ea.Wx<ka.responseText.length&&(ca=ea.kka())&&ea.trigger(f.Events.DATA,[ca]);0===ka.readyState&&(clearInterval(ea.VE),ea.trigger(f.Events.DONE))}else clearInterval(ea.VE),ea.trigger(f.Events.DONE,["Error received return status "+ka.status])},1E3);this.request.send(null);this.status=x.a.STARTED};f.prototype.kka=function(){var n=this.request,z=n.responseText;if(0!==z.length)if(this.Wx===z.length)clearInterval(this.VE),
this.trigger(f.Events.DONE);else return z=Math.min(this.Wx+3E6,z.length),n=h.LV(n,this.Wx,!0,z),this.Wx=z,n};f.prototype.abort=function(){clearInterval(this.VE);var n=this;this.request.onreadystatechange=function(){Object(ma.j)("StreamingRequest aborted");n.status=x.a.ABORTED;return n.trigger(f.Events.ABORTED)};this.request.abort()};f.prototype.finish=function(){var n=this;this.request.onreadystatechange=function(){n.status=x.a.SUCCESS;return n.trigger(f.Events.DONE)};this.request.abort()};f.Events=
{DONE:"done",DATA:"data",ABORTED:"aborted"};return f}();Object(Ba.a)(b);var e;(function(f){f[f.LOCAL_HEADER=0]="LOCAL_HEADER";f[f.FILE=1]="FILE";f[f.CENTRAL_DIR=2]="CENTRAL_DIR"})(e||(e={}));var a=function(f){function n(){var z=f.call(this)||this;z.buffer="";z.state=e.LOCAL_HEADER;z.hO=4;z.xm=null;z.$t=fa.c;z.Yn={};return z}Object(oa.c)(n,f);n.prototype.dka=function(z){var w;for(z=this.buffer+z;z.length>=this.$t;)switch(this.state){case e.LOCAL_HEADER:this.xm=w=this.oka(z.slice(0,this.$t));if(w.Hu!==
fa.g)throw Error("Wrong signature in local header: "+w.Hu);z=z.slice(this.$t);this.state=e.FILE;this.$t=w.yI+w.Qq+w.Ow+this.hO;this.trigger(n.Events.HEADER,[w]);break;case e.FILE:this.xm.name=z.slice(0,this.xm.Qq);this.Yn[this.xm.name]=this.xm;w=this.$t-this.hO;var ea=z.slice(this.xm.Qq+this.xm.Ow,w);this.trigger(n.Events.FILE,[this.xm.name,ea,this.xm.QI]);z=z.slice(w);if(z.slice(0,this.hO)===fa.h)this.state=e.LOCAL_HEADER,this.$t=fa.c;else return this.state=e.CENTRAL_DIR,!0}this.buffer=z;return!1};
n.Events={HEADER:"header",FILE:"file"};return n}(aa.a);Object(Ba.a)(a);Ba=function(f){function n(z,w,ea,ka,ca){ea=f.call(this,z,ea,ka)||this;ea.url=z;ea.stream=new b(z,w);ea.Ad=new a;ea.WY=window.createPromiseCapability();ea.xZ={};ea.mf=ca;return ea}Object(oa.c)(n,f);n.prototype.Ry=function(z){var w=this;this.request([this.Fj,this.fl,this.Ej]);this.stream.addEventListener(b.Events.DATA,function(ea){try{if(w.Ad.dka(ea))return w.stream.finish()}catch(ka){throw w.stream.abort(),w.iq(ka),z(ka),ka;}});
this.stream.addEventListener(b.Events.DONE,function(ea){w.Hja=!0;w.WY.resolve();ea&&(w.iq(ea),z(ea))});this.Ad.addEventListener(a.Events.HEADER,Object(na.bind)(this.wZ,this));this.Ad.addEventListener(a.Events.FILE,Object(na.bind)(this.Eka,this));return this.stream.start(this.mf,this.withCredentials)};n.prototype.IV=function(z){var w=this;this.WY.promise.then(function(){z(Object.keys(w.Ad.Yn))})};n.prototype.Ko=function(){return!0};n.prototype.request=function(z){var w=this;this.Hja&&z.forEach(function(ea){w.xZ[ea]||
w.Hpa(ea)})};n.prototype.wZ=function(){};n.prototype.abort=function(){this.stream&&this.stream.abort()};n.prototype.Hpa=function(z){this.trigger(da.a.Events.PART_READY,[{fb:z,error:"Requested part not found",Qi:!1,rg:!1}])};n.prototype.Eka=function(z,w,ea){this.xZ[z]=!0;this.trigger(da.a.Events.PART_READY,[{fb:z,data:w,Qi:!1,rg:!1,error:null,fd:ea}])};return n}(da.a);Object(r.a)(Ba);Object(r.b)(Ba);va["default"]=Ba}}]);}).call(this || window)
