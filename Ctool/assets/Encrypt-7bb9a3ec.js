import{u as V,i as k}from"./action-dcd662bd.js";import{c as w,a as A,T as i}from"./index-4f369466.js";import{b as E}from"./cryptoJS-be19baa2.js";import{A as I,bi as v,k as B,m as C,bj as a,aF as o,as as H,x as u,a$ as n}from"./history-5e0c3cab.js";import"./_commonjsHelpers-87174ba5.js";import"./index-69be48ff.js";import"./index-dde10004.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-d2112d3c.js";const D=I({__name:"Encrypt",async setup(z){let p,s;const l={key:""},t=V(([p,s]=v(()=>k({input:w("text"),option:l,output:A("base64")})),p=await p,s(),p)),m=B(()=>{if(t.current.input.text.isEmpty()||t.current.option.key==="")return i.empty();if(t.current.input.text.isError())return t.current.input.text;try{if(!t.current.input.text.isText())throw new Error("input content must text / text file");return i.fromBase64(E.encrypt(t.current.input.text.toBase64(),t.current.option))}catch(c){return i.fromError($error(c))}}),d=()=>{t.save()};return(c,e)=>{const x=o("TextInput"),_=o("HelpTip"),f=o("Input"),g=o("TextOutput"),y=o("Align"),h=o("HeightResize");return H(),C(h,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:a(({small:T,large:b})=>[u(y,{direction:"vertical"},{default:a(()=>[u(x,{modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=r=>n(t).current.input=r),height:T,upload:"file",encoding:""},null,8,["modelValue","height"]),u(f,{class:"ctool-page-option",modelValue:n(t).current.option.key,"onUpdate:modelValue":e[1]||(e[1]=r=>n(t).current.option.key=r),label:"key"},{suffix:a(()=>[u(_,{link:"https://github.com/brix/crypto-js"})]),_:1},8,["modelValue"]),u(g,{modelValue:n(t).current.output,"onUpdate:modelValue":e[2]||(e[2]=r=>n(t).current.output=r),allow:["base64","hex"],content:m.value,height:b,onSuccess:d},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{D as default};
