import{cd as I,ce as w,A as C,bi as z,k as O,al as $,be as _,m as A,bj as i,aF as p,as as B,x as a,a$ as l}from"./history-7dbe2ade.js";import{u as S,i as k}from"./action-282deb75.js";import{b as j,S as b}from"./index-4596abc8.js";import"./shim-03580cdb.js";import"./_commonjsHelpers-87174ba5.js";import"./index-25d7a505.js";import"./callBound-7203e6b7.js";import"./empty-9f795c74.js";import"./index-395898e3.js";function N(s){if(!I(s))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(s.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=e&255,r[4]=(e=parseInt(s.slice(9,13),16))>>>8,r[5]=e&255,r[6]=(e=parseInt(s.slice(14,18),16))>>>8,r[7]=e&255,r[8]=(e=parseInt(s.slice(19,23),16))>>>8,r[9]=e&255,r[10]=(e=parseInt(s.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=e&255,r}const H=N,R=w,K=C({__name:"Uuid",async setup(s){let e,r;const t=S(([e,r]=z(()=>k({amount:10,hyphens:!0,is_add_quote:!1,isUpper:!1,uint8_array:!1,outputOption:j("text"),result:[]})),e=await e,r(),e)),c=()=>{let n=[];for(let o=0,m=t.current.amount;o<m;o++)n.push(R());t.current.result=n},h=O(()=>t.current.result.length<1?b.empty():b.formObject(t.current.result.map(n=>(t.current.uint8_array&&(n="["+H(n).toString()+"]"),t.current.hyphens||(n=n.replace(/-/g,"")),t.current.isUpper?n.toUpperCase():n.toLowerCase()))));return $(()=>{t.current.result.length<1&&c()}),_(()=>t.current.amount,()=>{c()}),_(()=>t.current,n=>{n.result.length<1||t.save()},{deep:!0,immediate:!0}),(n,o)=>{const m=p("SerializeOutput"),x=p("HeightResize"),y=p("InputNumber"),f=p("Bool"),V=p("Icon"),U=p("Button"),d=p("Align"),g=p("Card");return B(),A(d,{direction:"vertical"},{default:i(()=>[a(x,{reduce:5,append:[".ctool-page-option"]},{default:i(({height:u})=>[a(m,{modelValue:l(t).current.outputOption,"onUpdate:modelValue":o[0]||(o[0]=v=>l(t).current.outputOption=v),allow:["json","xml","yaml","toml","properties","php_array","text"],height:u,content:h.value},null,8,["modelValue","height","content"])]),_:1},8,["append"]),a(g,{class:"ctool-page-option"},{default:i(()=>[a(d,{horizontal:"center"},{default:i(()=>[a(y,{modelValue:l(t).current.amount,"onUpdate:modelValue":o[1]||(o[1]=u=>l(t).current.amount=u),label:n.$t("uuid_amount"),width:110},null,8,["modelValue","label"]),a(f,{border:"",label:n.$t("uuid_hyphens"),modelValue:l(t).current.hyphens,"onUpdate:modelValue":o[2]||(o[2]=u=>l(t).current.hyphens=u)},null,8,["label","modelValue"]),a(f,{border:"",label:n.$t("uuid_is_upper"),modelValue:l(t).current.isUpper,"onUpdate:modelValue":o[3]||(o[3]=u=>l(t).current.isUpper=u)},null,8,["label","modelValue"]),a(f,{border:"",label:n.$t("uuid_uint8_array"),modelValue:l(t).current.uint8_array,"onUpdate:modelValue":o[4]||(o[4]=u=>l(t).current.uint8_array=u)},null,8,["label","modelValue"]),a(U,{onClick:c},{default:i(()=>[a(V,{name:"refresh"})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{K as default};
