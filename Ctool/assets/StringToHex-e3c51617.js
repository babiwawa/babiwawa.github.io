import{u as _,i as f}from"./action-282deb75.js";import{c as g,a as h}from"./index-f90c7143.js";import{A as T,bi as V,m as w,bj as l,aF as a,as as A,x as i,a$ as n}from"./history-7dbe2ade.js";import"./_commonjsHelpers-87174ba5.js";import"./index-b1ff2442.js";import"./shim-03580cdb.js";const y=T({__name:"StringToHex",async setup(v){let o,r;const t=_(([o,r]=V(()=>f({input:g("text"),output:h("hex")})),o=await o,r(),o));return(C,e)=>{const p=a("TextInput"),s=a("TextOutput"),c=a("Align"),m=a("HeightResize");return A(),w(m,{reduce:5},{default:l(({small:d,large:x})=>[i(c,{direction:"vertical"},{default:l(()=>[i(p,{allow:["text","base64","url","upload"],modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=u=>n(t).current.input=u),height:d,upload:"file",encoding:""},null,8,["modelValue","height"]),i(s,{modelValue:n(t).current.output,"onUpdate:modelValue":e[1]||(e[1]=u=>n(t).current.output=u),allow:["hex"],content:n(t).current.input.text,height:x,onSuccess:e[2]||(e[2]=u=>n(t).save())},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1})}}});export{y as default};
