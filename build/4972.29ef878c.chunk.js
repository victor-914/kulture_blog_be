(self.webpackChunkkulture_blog_be=self.webpackChunkkulture_blog_be||[]).push([[4972],{14972:(E,m,u)=>{"use strict";u.r(m),u.d(m,{ROUTES_EE:()=>p});var i=u(67294),a=u(57993),l=u(36808),d=u.n(l),C=u(86896),t=u(16550);const o=()=>{const{params:{authResponse:n}}=(0,t.$B)("/auth/login/:authResponse"),{formatMessage:r}=(0,C.Z)(),{push:e}=(0,t.k6)(),g=(0,i.useRef)(r);let c=(0,i.useCallback)(()=>{e(`/auth/oops?info=${encodeURIComponent(g.current({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`)},[e]);const{get:f}=(0,a.kY)(),s=(0,i.useCallback)(async()=>{try{const h=d().get("jwtToken");if(a.I8.clearAppStorage(),h){a.I8.setToken(h,!0);const R="/admin/users/me",{data:{data:I}}=await f(R);a.I8.setUserInfo(I,!0),d().remove("jwtToken"),e("/auth/login")}}catch{c()}},[f,e,c]);return(0,i.useEffect)(()=>{n==="error"&&c(),n==="success"&&s()},[n,s,c]),i.createElement(a.dO,null)},v=null,p=[{Component:()=>({default:o}),to:"/auth/login/:authResponse",exact:!0}]},36808:(E,m,u)=>{var i,a;/*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/(function(l){var d;if(i=l,a=typeof i=="function"?i.call(m,u,m,E):i,a!==void 0&&(E.exports=a),d=!0,E.exports=l(),d=!0,!d){var C=window.Cookies,t=window.Cookies=l();t.noConflict=function(){return window.Cookies=C,t}}})(function(){function l(){for(var t=0,o={};t<arguments.length;t++){var v=arguments[t];for(var p in v)o[p]=v[p]}return o}function d(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function C(t){function o(){}function v(n,r,e){if(!(typeof document>"u")){e=l({path:"/"},o.defaults,e),typeof e.expires=="number"&&(e.expires=new Date(new Date*1+e.expires*864e5)),e.expires=e.expires?e.expires.toUTCString():"";try{var g=JSON.stringify(r);/^[\{\[]/.test(g)&&(r=g)}catch{}r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var f in e)e[f]&&(c+="; "+f,e[f]!==!0&&(c+="="+e[f].split(";")[0]));return document.cookie=n+"="+r+c}}function p(n,r){if(!(typeof document>"u")){for(var e={},g=document.cookie?document.cookie.split("; "):[],c=0;c<g.length;c++){var f=g[c].split("="),s=f.slice(1).join("=");!r&&s.charAt(0)==='"'&&(s=s.slice(1,-1));try{var h=d(f[0]);if(s=(t.read||t)(s,h)||d(s),r)try{s=JSON.parse(s)}catch{}if(e[h]=s,n===h)break}catch{}}return n?e[n]:e}}return o.set=v,o.get=function(n){return p(n,!1)},o.getJSON=function(n){return p(n,!0)},o.remove=function(n,r){v(n,"",l(r,{expires:-1}))},o.defaults={},o.withConverter=C,o}return C(function(){})})}}]);
