"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9703],{9703:(Z,l,e)=>{e.r(l),e.d(l,{ProfilePageModule:()=>m});var f=e(6895),h=e(433),n=e(4556),p=e(1407),c=e(5861),d=e(4948),t=e(8256),u=e(6568),g=e(5860);const v=[{path:"",children:[{path:"",component:(()=>{const i=class{constructor(r,o){this.profile=r,this.fidjService=o,this.appVersion=d.i,this.errors=[],this.results=[],this.apiVersion="NA",this.apiUrl="NA"}get defaultEndpointUrl(){return this.profile.defaultUrlForAPI}get endpointUrl(){return this._endpoints&&this._endpoints.length>0?this._endpoints[0]:null}ngOnInit(){this.refresh()}refresh(){var r=this;return(0,c.Z)(function*(){r._endpoints=yield r.fidjService.getEndpoints()})()}};let s=i;return i.\u0275fac=function(o){return new(o||i)(t.Y36(u.H),t.Y36(g.DR))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-profile"]],decls:18,vars:5,consts:[["slot","start"],["src","assets/icon/favicon.ico",2,"height","30px","padding-left","20px"],["slot","fixed",3,"ionRefresh"],[2,"float","right","font-size","10px"]],template:function(o,a){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-menu-button")(4,"ion-img",1),t.qZA(),t.TgZ(5,"ion-title"),t._uU(6," Profile "),t.qZA()()(),t.TgZ(7,"ion-content")(8,"ion-refresher",2),t.NdJ("ionRefresh",function(){return a.refresh()}),t._UZ(9,"ion-refresher-content"),t.qZA(),t.TgZ(10,"ion-card")(11,"ion-card-header")(12,"ion-card-title"),t._uU(13,"Profile"),t.qZA()(),t.TgZ(14,"ion-card-content"),t._uU(15),t.qZA()(),t.TgZ(16,"span",3),t._uU(17),t.qZA()()),2&o&&(t.xp6(15),t.AsE(" ",a.defaultEndpointUrl," / ",a.endpointUrl," "),t.xp6(2),t.lnq("version: ",a.appVersion," : ",a.apiVersion," (",a.apiUrl,")"))},dependencies:[n.Sm,n.PM,n.FN,n.Zi,n.Dq,n.W2,n.Gu,n.Xz,n.fG,n.nJ,n.Wo,n.wd,n.sr]}),s})()}]}];let m=(()=>{const i=class{};let s=i;return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[f.ez,h.u5,n.Pc,p.Bz.forChild(v)]}),s})()}}]);