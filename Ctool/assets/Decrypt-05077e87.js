import{u as V,i as k}from"./action-dcd662bd.js";import{c as w,a as A,T as i}from"./index-4f369466.js";import{b as I}from"./cryptoJS-be19baa2.js";import{A as v,bi as B,k as C,m as H,bj as a,aF as o,as as z,x as p,a$ as n}from"./history-5e0c3cab.js";import"./_commonjsHelpers-87174ba5.js";import"./index-69be48ff.js";import"./index-dde10004.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-d2112d3c.js";const q=v({__name:"Decrypt",async setup(E){let u,s;const l={key:""},t=V(([u,s]=B(()=>k({input:w("base64"),option:l,output:A("text")})),u=await u,s(),u)),m=C(()=>{if(t.current.input.text.isEmpty()||t.current.option.key==="")return i.empty();if(t.current.input.text.isError())return t.current.input.text;try{return i.fromBase64(I.decrypt(t.current.input.text.toBase64(),t.current.option))}catch(c){return i.fromError($error(c))}}),d=()=>{t.save()};return(c,e)=>{const x=o("TextInput"),_=o("HelpTip"),f=o("Input"),g=o("TextOutput"),y=o("Align"),h=o("HeightResize");return z(),H(h,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:a(({small:b,large:T})=>[p(y,{direction:"vertical"},{default:a(()=>[p(x,{modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=r=>n(t).current.input=r),allow:["base64","hex"],height:b},null,8,["modelValue","height"]),p(f,{class:"ctool-page-option",modelValue:n(t).current.option.key,"onUpdate:modelValue":e[1]||(e[1]=r=>n(t).current.option.key=r),label:"key"},{suffix:a(()=>[p(_,{link:"https://github.com/brix/crypto-js"})]),_:1},8,["modelValue"]),p(g,{modelValue:n(t).current.output,"onUpdate:modelValue":e[2]||(e[2]=r=>n(t).current.output=r),allow:["text"],content:m.value,height:T,onSuccess:d,encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{q as default};
