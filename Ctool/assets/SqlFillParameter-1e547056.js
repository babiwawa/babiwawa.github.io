import{u as S,i as E}from"./action-dcd662bd.js";import{A as w,bi as y,k as T,m as $,bj as _,aF as d,aG as b,as as g,x as m,bl as q,o as A,a$ as c}from"./history-5e0c3cab.js";import"./_commonjsHelpers-87174ba5.js";const V=w({__name:"SqlFillParameter",async setup(F){let u,h;const p=["String","Integer","Long","Timestamp"],r=S(([u,h]=y(()=>E({input:"",params:""},{paste:!1})),u=await u,h(),u)),v=t=>t?t.split(",",-1).map(e=>{let a=e.lastIndexOf("(");if(a<0)throw new Error($t("sqlFillParameter_invalid_param",[e]));let l=e.substring(0,a),s=e.length,i=e.substring(a+1,s-1);return{value:l,type:i}}):[],f=T(()=>{try{if(!r.current.input||!r.current.params)return"";let t=v(r.current.params),o=r.current.input,e="",a=0,l="";for(let s=0;s<o.length;s++){let i=o.charAt(s);if(i==="?"){if(t.length<=a)throw new Error($t("sqlFillParameter_parameter_too_little"));let n=t[a];switch(n.type){case p[0]:l="'"+n.value+"'";break;case p[1]:case p[2]:l=n.value;break;case p[3]:l="timestamp"+n.value;break;default:l=n.value}e+=l,a++}else e+=i}return r.save(),e}catch(t){return $error(t)}});return(t,o)=>{const e=d("Textarea"),a=d("Align"),l=d("HeightResize"),s=b("row");return g(),$(l,{ignore:"",reduce:5},{default:_(({height:i})=>[m(a,{direction:"vertical"},{default:_(()=>[q((g(),A("div",null,[m(e,{modelValue:c(r).current.input,"onUpdate:modelValue":o[0]||(o[0]=n=>c(r).current.input=n),height:i/2,placeholder:"Sql:SELECT * FROM T WHERE id=? AND name = ?",copy:"Sql"},null,8,["modelValue","height"]),m(e,{modelValue:c(r).current.params,"onUpdate:modelValue":o[1]||(o[1]=n=>c(r).current.params=n),height:i/2,placeholder:`${t.$t("sqlFillParameter_parameter")}:1(Integer),zhangshan(String)`,copy:t.$t("sqlFillParameter_parameter")},null,8,["modelValue","height","placeholder","copy"])])),[[s,"1-1"]]),m(e,{"model-value":f.value,copy:"",height:i/2,placeholder:`${t.$t("main_ui_output")}:SELECT * FROM T WHERE id=1 AND name='zhangshan'`},null,8,["model-value","height","placeholder"])]),_:2},1024)]),_:1})}}});export{V as default};
