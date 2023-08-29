import{u as C,i as k}from"./action-282deb75.js";import{b as x,S as m}from"./index-4596abc8.js";import{A as O,bi as A,k as I,m as U,bj as d,aF as s,as as E,x as p,a$ as i}from"./history-7dbe2ade.js";import"./index-25d7a505.js";import"./callBound-7203e6b7.js";import"./_commonjsHelpers-87174ba5.js";import"./shim-03580cdb.js";import"./empty-9f795c74.js";import"./index-395898e3.js";function f(n){this.message=n}f.prototype=new Error,f.prototype.name="InvalidCharacterError";var w=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(n){var t=String(n).replace(/=+$/,"");if(t.length%4==1)throw new f("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,e,u=0,r=0,o="";e=t.charAt(r++);~e&&(a=u%4?64*a+e:e,u++%4)?o+=String.fromCharCode(255&a>>(-2*u&6)):0)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e);return o};function j(n){var t=n.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(a){return decodeURIComponent(w(a).replace(/(.)/g,function(e,u){var r=u.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}(t)}catch{return w(t)}}function c(n){this.message=n}function y(n,t){if(typeof n!="string")throw new c("Invalid token specified");var a=(t=t||{}).header===!0?0:1;try{return JSON.parse(j(n.split(".")[a]))}catch(e){throw new c("Invalid token specified: "+e.message)}}c.prototype=new Error,c.prototype.name="InvalidTokenError";const F=O({__name:"Jwt",async setup(n){let t,a;const e=C(([t,a]=A(()=>k({input:"",header:!1,payload:!0,outputOption:x("json")},{paste:!1})),t=await t,a(),t)),u=I(()=>{if(!e.current.input.trim())return m.empty();try{let r={};return e.current.header&&(r.header=y(e.current.input,{header:!0})),e.current.payload&&(r.payload=y(e.current.input)),m.formObject(r)}catch(r){return m.fromError($error(r))}});return(r,o)=>{const _=s("Textarea"),h=s("Bool"),g=s("Align"),b=s("Display"),v=s("SerializeOutput"),V=s("HeightResize");return E(),U(V,{reduce:5},{default:d(({small:S,large:z})=>[p(g,{direction:"vertical"},{default:d(()=>[p(b,null,{extra:d(()=>[p(g,null,{default:d(()=>[p(h,{border:"",size:"small",modelValue:i(e).current.header,"onUpdate:modelValue":o[1]||(o[1]=l=>i(e).current.header=l),label:"header"},null,8,["modelValue"]),p(h,{border:"",size:"small",modelValue:i(e).current.payload,"onUpdate:modelValue":o[2]||(o[2]=l=>i(e).current.payload=l),label:"payload"},null,8,["modelValue"])]),_:1})]),default:d(()=>[p(_,{modelValue:i(e).current.input,"onUpdate:modelValue":o[0]||(o[0]=l=>i(e).current.input=l),height:S,placeholder:r.$t("main_ui_input")},null,8,["modelValue","height","placeholder"])]),_:2},1024),p(v,{"switch-position":"bottom-right",allow:["json","xml","yaml","toml","php_array","properties","http_query_string"],content:u.value,height:z,modelValue:i(e).current.outputOption,"onUpdate:modelValue":o[3]||(o[3]=l=>i(e).current.outputOption=l),onSuccess:o[4]||(o[4]=l=>i(e).save())},null,8,["content","height","modelValue"])]),_:2},1024)]),_:1})}}});export{F as default};
