import{u as V,i as v}from"./action-dcd662bd.js";import{c as A}from"./index-4f369466.js";import{_ as $,U as w}from"./util-68339617.js";import{A as z,bi as S,k as T,m as U,bj as u,aF as o,as as B,x as r,a$ as n}from"./history-5e0c3cab.js";import"./_commonjsHelpers-87174ba5.js";import"./index-69be48ff.js";const j=z({__name:"Encoder",async setup(C){let a,s;const e=V(([a,s]=S(()=>v({input:A(),type:"unicode_point_default",ignore_ascii:!0})),a=await a,s(),a)),c=["unicode_point_wide","unicode_number","css_entity"],d=T(()=>{if(e.current.input.text.isEmpty())return"";if(e.save(),e.current.input.text.isError())return e.current.input.text.toString();try{return w.encode(e.current.input.text.toString(),e.current.type,c.includes(e.current.type)?!1:e.current.ignore_ascii)}catch(l){return $error(l)}});return(l,i)=>{const m=o("TextInput"),_=o("Select"),f=o("Bool"),p=o("Align"),g=o("Display"),y=o("Textarea"),x=o("HeightResize");return B(),U(x,{reduce:5},{default:u(({small:b,large:h})=>[r(p,{direction:"vertical"},{default:u(()=>[r(g,null,{extra:u(()=>[r(p,null,{default:u(()=>[r(_,{size:"small",modelValue:n(e).current.type,"onUpdate:modelValue":i[1]||(i[1]=t=>n(e).current.type=t),options:n($).map(t=>({value:t,label:l.$t(`unicode_mode_${t}`)}))},null,8,["modelValue","options"]),r(f,{border:"",size:"small",modelValue:n(e).current.ignore_ascii,"onUpdate:modelValue":i[2]||(i[2]=t=>n(e).current.ignore_ascii=t),label:l.$t("unicode_ignore_ascii"),disabled:c.includes(n(e).current.type)},null,8,["modelValue","label","disabled"])]),_:1})]),default:u(()=>[r(m,{allow:["text","base64","hex"],modelValue:n(e).current.input,"onUpdate:modelValue":i[0]||(i[0]=t=>n(e).current.input=t),height:b},null,8,["modelValue","height"])]),_:2},1024),r(y,{"model-value":d.value,placeholder:l.$t("main_ui_output"),height:h,copy:""},null,8,["model-value","placeholder","height"])]),_:2},1024)]),_:1})}}});export{j as default};
