import{u as R,i as C}from"./action-dcd662bd.js";import{r as T,h as f}from"./util-3025348f.js";import{A as H,bi as M,aA as k,k as D,o as E,x as t,bj as u,a$ as a,p as U,bl as F,m as N,F as $,aF as n,aG as z,as as x}from"./history-5e0c3cab.js";import"./index-01831826.js";import"./_commonjsHelpers-87174ba5.js";import"./index-97821989.js";const Q=H({__name:"ArmToHex",async setup(I){let s,h;const e=R(([s,h]=M(()=>C({input:"",offset:"",prefix_0x:!1,swap_endian:!1,response:""})),s=await s,h(),s));let c=k(!1);const v=async()=>{if(c.value=!0,e.current.input.trim()===""){e.current.response="";return}e.current.response=(await T({asm:e.current.input,offset:e.current.offset,arch:["arm64","arm","thumb"]})).data,c.value=!1,e.success()},i=D(()=>({arm64:f("hex","arm64",e.current),arm:f("hex","arm",e.current),thumb:f("hex","thumb",e.current)})),g=`Input Assembly code:
NOP
RET
B #0x1018DE444
MOV X0, #0x11FE00000000
BEQ #0x10020C
CBNZ R0, #0x682C4
`,r=m=>`${m}${e.current.swap_endian?" Big Endian":""}`;return(m,l)=>{const _=n("Bool"),B=n("HelpTip"),d=n("Align"),V=n("Input"),p=n("Textarea"),b=n("Button"),y=n("HeightResize"),A=z("row");return x(),E($,null,[t(V,{class:"ctool-page-option",label:"Offset (hex) 0x",modelValue:a(e).current.offset,"onUpdate:modelValue":l[2]||(l[2]=o=>a(e).current.offset=o),placeholder:"0 - for branch and LDR put hex value here",style:{"margin-bottom":"5px"}},{append:u(()=>[t(d,null,{default:u(()=>[t(_,{modelValue:a(e).current.prefix_0x,"onUpdate:modelValue":l[0]||(l[0]=o=>a(e).current.prefix_0x=o),label:"0x"},null,8,["modelValue"]),t(_,{modelValue:a(e).current.swap_endian,"onUpdate:modelValue":l[1]||(l[1]=o=>a(e).current.swap_endian=o),label:"GDB/LLDB"},null,8,["modelValue"]),t(B,{link:"https://armconverter.com/"})]),_:1})]),_:1},8,["modelValue"]),U("div",null,[F((x(),N(y,{append:[".ctool-page-option"]},{default:u(({height:o})=>[t(d,{direction:"vertical"},{default:u(()=>[t(p,{modelValue:a(e).current.input,"onUpdate:modelValue":l[3]||(l[3]=w=>a(e).current.input=w),height:o-37,placeholder:g},null,8,["modelValue","height"]),t(b,{type:"primary",loading:c.value,onClick:v,long:"",text:m.$t("arm_convert")},null,8,["loading","text"])]),_:2},1024),t(d,{direction:"vertical"},{default:u(()=>[t(p,{"model-value":i.value.arm64,placeholder:r("ARM64"),height:(o-10)/3,copy:r("ARM64")},null,8,["model-value","placeholder","height","copy"]),t(p,{"model-value":i.value.arm,placeholder:r("ARM"),height:(o-10)/3,copy:r("ARM")},null,8,["model-value","placeholder","height","copy"]),t(p,{"model-value":i.value.thumb,placeholder:r("THUMB"),height:(o-10)/3,copy:r("THUMB")},null,8,["model-value","placeholder","height","copy"])]),_:2},1024)]),_:1},8,["append"])),[[A,"10-14"]])])],64)}}});export{Q as default};
