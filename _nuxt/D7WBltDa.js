import{g as A,J as he,o as g,s as j,w as b,y as k,K as R,x as l,P as W,L as P,M as Z,N as U,O as ve,Q as me,R as be,S as ye,U as _e,j as N,V as ee,W as Y,a as n,c as f,v,I as ue,G as xe,D as I,X as fe,Y as ze,Z as ke,$ as ge,a0 as we,a1 as Ie,b as y,d as $,t as _,k as $e,a2 as je,F as ie,E as ae,a3 as qe,H as Be,B as Se}from"./FLIyioWA.js";import{_ as Ce,a as Fe,b as Ae,c as Ve,d as Te,e as Ke,f as Me,g as Ne,h as Pe,i as Oe,j as De,k as Le,l as Ge,m as Re,n as Ue,o as We,p as He,q as Ee,r as Je,s as Qe}from"./DLytPf88.js";import{u as Xe,q as Ye}from"./B1Rlen7W.js";const Ze=A({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{default:"label"}},setup(h){const a=h;return he(),(r,e)=>(g(),j(l(W),R(a,{onMousedown:e[0]||(e[0]=c=>{!c.defaultPrevented&&c.detail>1&&c.preventDefault()})}),{default:b(()=>[k(r.$slots,"default")]),_:3},16))}}),ei={slots:{root:"relative inline-flex items-center",base:["w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-[var(--ui-text-dimmed)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-75","transition-colors"],leading:"absolute inset-y-0 start-0 flex items-center",leadingIcon:"shrink-0 text-[var(--ui-text-dimmed)]",leadingAvatar:"shrink-0",leadingAvatarSize:"",trailing:"absolute inset-y-0 end-0 flex items-center",trailingIcon:"shrink-0 text-[var(--ui-text-dimmed)]"},variants:{buttonGroup:{horizontal:{root:"group",base:"group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"},vertical:{root:"group",base:"group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"}},size:{xs:{base:"px-2 py-1 text-xs gap-1",leading:"ps-2",trailing:"pe-2",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},sm:{base:"px-2.5 py-1.5 text-xs gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},md:{base:"px-2.5 py-1.5 text-sm gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},lg:{base:"px-3 py-2 text-sm gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},xl:{base:"px-3 py-2 text-base gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-6",leadingAvatarSize:"xs",trailingIcon:"size-6"}},variant:{outline:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg)] ring ring-inset ring-[var(--ui-border-accented)]",soft:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)]/50 hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-[var(--ui-bg-elevated)]/50",subtle:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)] ring ring-inset ring-[var(--ui-border-accented)]",ghost:"text-[var(--ui-text-highlighted)] bg-transparent hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-transparent dark:disabled:bg-transparent",none:"text-[var(--ui-text-highlighted)] bg-transparent"},color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},leading:{true:""},trailing:{true:""},loading:{true:""},highlight:{true:""},type:{file:"file:me-1.5 file:font-medium file:text-[var(--ui-text-muted)] file:outline-none"}},compoundVariants:[{color:"primary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]"},{color:"secondary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-secondary)]"},{color:"success",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-success)]"},{color:"info",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-info)]"},{color:"warning",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-warning)]"},{color:"error",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-error)]"},{color:"primary",highlight:!0,class:"ring ring-inset ring-[var(--ui-primary)]"},{color:"secondary",highlight:!0,class:"ring ring-inset ring-[var(--ui-secondary)]"},{color:"success",highlight:!0,class:"ring ring-inset ring-[var(--ui-success)]"},{color:"info",highlight:!0,class:"ring ring-inset ring-[var(--ui-info)]"},{color:"warning",highlight:!0,class:"ring ring-inset ring-[var(--ui-warning)]"},{color:"error",highlight:!0,class:"ring ring-inset ring-[var(--ui-error)]"},{color:"neutral",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-border-inverted)]"},{color:"neutral",highlight:!0,class:"ring ring-inset ring-[var(--ui-border-inverted)]"},{leading:!0,size:"xs",class:"ps-7"},{leading:!0,size:"sm",class:"ps-8"},{leading:!0,size:"md",class:"ps-9"},{leading:!0,size:"lg",class:"ps-10"},{leading:!0,size:"xl",class:"ps-11"},{trailing:!0,size:"xs",class:"pe-7"},{trailing:!0,size:"sm",class:"pe-8"},{trailing:!0,size:"md",class:"pe-9"},{trailing:!0,size:"lg",class:"pe-10"},{trailing:!0,size:"xl",class:"pe-11"},{loading:!0,leading:!0,class:{leadingIcon:"animate-spin"}},{loading:!0,leading:!1,trailing:!0,class:{trailingIcon:"animate-spin"}}],defaultVariants:{size:"md",color:"primary",variant:"outline"}},ii=["id","type","value","name","placeholder","disabled","required","autocomplete"],ai=Z;var ce;const ti=P({extend:P(ei),...((ce=ai.ui)==null?void 0:ce.input)||{}}),si=A({inheritAttrs:!1,__name:"Input",props:U({as:{},id:{},name:{},type:{default:"text"},placeholder:{},color:{},variant:{},size:{},required:{type:Boolean},autocomplete:{default:"off"},autofocus:{type:Boolean},autofocusDelay:{default:0},disabled:{type:Boolean},highlight:{type:Boolean},class:{},ui:{},icon:{},avatar:{},leading:{type:Boolean},leadingIcon:{},trailing:{type:Boolean},trailingIcon:{},loading:{type:Boolean},loadingIcon:{}},{modelValue:{},modelModifiers:{}}),emits:U(["update:modelValue","blur","change"],["update:modelValue"]),setup(h,{expose:a,emit:r}){const e=h,c=r,o=ve(),[d,i]=me(h,"modelValue"),{emitFormBlur:u,emitFormInput:x,emitFormChange:w,size:q,color:B,id:m,name:V,highlight:T,disabled:S}=be(e),{orientation:p,size:H}=ye(e),{isLeading:K,isTrailing:D,leadingIconName:L,trailingIconName:G}=_e(e),C=N(()=>H.value||q.value),t=N(()=>ti({type:e.type,color:B.value,variant:e.variant,size:C==null?void 0:C.value,loading:e.loading,highlight:T.value,leading:K.value||!!e.avatar||!!o.leading,trailing:D.value||!!o.trailing,buttonGroup:p.value})),z=ee(null);function M(){var s;e.autofocus&&((s=z.value)==null||s.focus())}function F(s){i.trim&&(s=s.trim()),(i.number||e.type==="number")&&(s=fe(s)),d.value=s,x()}function E(s){i.lazy||F(s.target.value)}function J(s){const X=s.target.value;i.lazy&&F(X),i.trim&&(s.target.value=X.trim()),w(),c("change",s)}function Q(s){u(),c("blur",s)}return a({inputRef:z}),Y(()=>{setTimeout(()=>{M()},e.autofocusDelay)}),(s,X)=>{var te;return g(),j(l(W),{as:s.as,class:v(t.value.root({class:[e.class,(te=e.ui)==null?void 0:te.root]}))},{default:b(()=>{var se,le,re;return[n("input",R({id:l(m),ref_key:"inputRef",ref:z,type:s.type,value:l(d),name:l(V),placeholder:s.placeholder,class:t.value.base({class:(se=e.ui)==null?void 0:se.base}),disabled:l(S),required:s.required,autocomplete:s.autocomplete},s.$attrs,{onInput:E,onBlur:Q,onChange:J}),null,16,ii),k(s.$slots,"default"),l(K)||s.avatar||o.leading?(g(),f("span",{key:0,class:v(t.value.leading({class:(le=e.ui)==null?void 0:le.leading}))},[k(s.$slots,"leading",{},()=>{var O,ne,oe;return[l(K)&&l(L)?(g(),j(ue,{key:0,name:l(L),class:v(t.value.leadingIcon({class:(O=e.ui)==null?void 0:O.leadingIcon}))},null,8,["name","class"])):s.avatar?(g(),j(xe,R({key:1,size:((ne=e.ui)==null?void 0:ne.leadingAvatarSize)||t.value.leadingAvatarSize()},s.avatar,{class:t.value.leadingAvatar({class:(oe=e.ui)==null?void 0:oe.leadingAvatar})}),null,16,["size","class"])):I("",!0)]})],2)):I("",!0),l(D)||o.trailing?(g(),f("span",{key:1,class:v(t.value.trailing({class:(re=e.ui)==null?void 0:re.trailing}))},[k(s.$slots,"trailing",{},()=>{var O;return[l(G)?(g(),j(ue,{key:0,name:l(G),class:v(t.value.trailingIcon({class:(O=e.ui)==null?void 0:O.trailingIcon}))},null,8,["name","class"])):I("",!0)]})],2)):I("",!0)]}),_:3},8,["as","class"])}}}),li={slots:{root:"",wrapper:"",labelWrapper:"flex content-center items-center justify-between",label:"block font-medium text-[var(--ui-text)]",container:"mt-1 relative",description:"text-[var(--ui-text-muted)]",error:"mt-2 text-[var(--ui-error)]",hint:"text-[var(--ui-text-muted)]",help:"mt-2 text-[var(--ui-text-muted)]"},variants:{size:{xs:{root:"text-xs"},sm:{root:"text-xs"},md:{root:"text-sm"},lg:{root:"text-sm"},xl:{root:"text-base"}},required:{true:{label:"after:content-['*'] after:ms-0.5 after:text-[var(--ui-error)]"}}},defaultVariants:{size:"md"}},ri=Z;var de;const ni=P({extend:P(li),...((de=ri.ui)==null?void 0:de.formField)||{}}),oi=A({__name:"FormField",props:{as:{},name:{},errorPattern:{},label:{},description:{},help:{},error:{type:[String,Boolean]},hint:{},size:{},required:{type:Boolean},eagerValidation:{type:Boolean},validateOnInputDelay:{},class:{},ui:{}},setup(h){const a=h,r=ve(),e=N(()=>ni({size:a.size,required:a.required})),c=ze("form-errors",null),o=N(()=>{var i,u;return a.error||((u=(i=c==null?void 0:c.value)==null?void 0:i.find(x=>x.name===a.name||a.errorPattern&&x.name.match(a.errorPattern)))==null?void 0:u.message)}),d=ee(ke());return ge(we,d),ge(Ie,N(()=>({error:o.value,name:a.name,size:a.size,eagerValidation:a.eagerValidation,validateOnInputDelay:a.validateOnInputDelay,errorPattern:a.errorPattern}))),(i,u)=>{var x;return g(),j(l(W),{as:i.as,class:v(e.value.root({class:[a.class,(x=a.ui)==null?void 0:x.root]}))},{default:b(()=>{var w,q,B,m,V,T,S,p;return[n("div",{class:v(e.value.wrapper({class:(w=a.ui)==null?void 0:w.wrapper}))},[i.label||r.label?(g(),f("div",{key:0,class:v(e.value.labelWrapper({class:(q=a.ui)==null?void 0:q.labelWrapper}))},[y(l(Ze),{for:d.value,class:v(e.value.label({class:(B=a.ui)==null?void 0:B.label}))},{default:b(()=>[k(i.$slots,"label",{label:i.label},()=>[$(_(i.label),1)])]),_:3},8,["for","class"]),i.hint||r.hint?(g(),f("span",{key:0,class:v(e.value.hint({class:(m=a.ui)==null?void 0:m.hint}))},[k(i.$slots,"hint",{hint:i.hint},()=>[$(_(i.hint),1)])],2)):I("",!0)],2)):I("",!0),i.description||r.description?(g(),f("p",{key:1,class:v(e.value.description({class:(V=a.ui)==null?void 0:V.description}))},[k(i.$slots,"description",{description:i.description},()=>[$(_(i.description),1)])],2)):I("",!0)],2),n("div",{class:v([(i.label||!!r.label||i.description||!!r.description)&&e.value.container({class:(T=a.ui)==null?void 0:T.container})])},[k(i.$slots,"default",{error:o.value}),typeof o.value=="string"&&o.value||r.error?(g(),f("p",{key:0,class:v(e.value.error({class:(S=a.ui)==null?void 0:S.error}))},[k(i.$slots,"error",{error:o.value},()=>[$(_(o.value),1)])],2)):i.help||r.help?(g(),f("p",{key:1,class:v(e.value.help({class:(p=a.ui)==null?void 0:p.help}))},[k(i.$slots,"help",{help:i.help},()=>[$(_(i.help),1)])],2)):I("",!0)],2)]}),_:3},8,["as","class"])}}}),ui={slots:{root:"relative inline-flex items-center",base:["w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-[var(--ui-text-dimmed)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-75","transition-colors"],leading:"absolute inset-y-0 start-0 flex items-center",leadingIcon:"shrink-0 text-[var(--ui-text-dimmed)]",leadingAvatar:"shrink-0",leadingAvatarSize:"",trailing:"absolute inset-y-0 end-0 flex items-center",trailingIcon:"shrink-0 text-[var(--ui-text-dimmed)]"},variants:{buttonGroup:{horizontal:{root:"group",base:"group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"},vertical:{root:"group",base:"group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"}},size:{xs:{base:"px-2 py-1 text-xs gap-1",leading:"ps-2",trailing:"pe-2",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},sm:{base:"px-2.5 py-1.5 text-xs gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},md:{base:"px-2.5 py-1.5 text-sm gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},lg:{base:"px-3 py-2 text-sm gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},xl:{base:"px-3 py-2 text-base gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-6",leadingAvatarSize:"xs",trailingIcon:"size-6"}},variant:{outline:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg)] ring ring-inset ring-[var(--ui-border-accented)]",soft:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)]/50 hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-[var(--ui-bg-elevated)]/50",subtle:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)] ring ring-inset ring-[var(--ui-border-accented)]",ghost:"text-[var(--ui-text-highlighted)] bg-transparent hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-transparent dark:disabled:bg-transparent",none:"text-[var(--ui-text-highlighted)] bg-transparent"},color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},leading:{true:""},trailing:{true:""},loading:{true:""},highlight:{true:""},type:{file:"file:me-1.5 file:font-medium file:text-[var(--ui-text-muted)] file:outline-none"}},compoundVariants:[{color:"primary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]"},{color:"secondary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-secondary)]"},{color:"success",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-success)]"},{color:"info",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-info)]"},{color:"warning",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-warning)]"},{color:"error",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-error)]"},{color:"primary",highlight:!0,class:"ring ring-inset ring-[var(--ui-primary)]"},{color:"secondary",highlight:!0,class:"ring ring-inset ring-[var(--ui-secondary)]"},{color:"success",highlight:!0,class:"ring ring-inset ring-[var(--ui-success)]"},{color:"info",highlight:!0,class:"ring ring-inset ring-[var(--ui-info)]"},{color:"warning",highlight:!0,class:"ring ring-inset ring-[var(--ui-warning)]"},{color:"error",highlight:!0,class:"ring ring-inset ring-[var(--ui-error)]"},{color:"neutral",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-border-inverted)]"},{color:"neutral",highlight:!0,class:"ring ring-inset ring-[var(--ui-border-inverted)]"},{leading:!0,size:"xs",class:"ps-7"},{leading:!0,size:"sm",class:"ps-8"},{leading:!0,size:"md",class:"ps-9"},{leading:!0,size:"lg",class:"ps-10"},{leading:!0,size:"xl",class:"ps-11"},{trailing:!0,size:"xs",class:"pe-7"},{trailing:!0,size:"sm",class:"pe-8"},{trailing:!0,size:"md",class:"pe-9"},{trailing:!0,size:"lg",class:"pe-10"},{trailing:!0,size:"xl",class:"pe-11"},{loading:!0,leading:!0,class:{leadingIcon:"animate-spin"}},{loading:!0,leading:!1,trailing:!0,class:{trailingIcon:"animate-spin"}}],defaultVariants:{size:"md",color:"primary",variant:"outline"}},gi=["id","value","name","rows","placeholder","disabled","required"],ci=Z;var pe;const di=P({extend:P(ui),...((pe=ci.ui)==null?void 0:pe.textarea)||{}}),pi=A({inheritAttrs:!1,__name:"Textarea",props:U({as:{},id:{},name:{},placeholder:{},color:{},variant:{},size:{},required:{type:Boolean},autofocus:{type:Boolean},autofocusDelay:{default:0},disabled:{type:Boolean},class:{},rows:{default:3},maxrows:{default:0},autoresize:{type:Boolean},highlight:{type:Boolean},ui:{}},{modelValue:{},modelModifiers:{}}),emits:U(["update:modelValue","blur","change"],["update:modelValue"]),setup(h,{expose:a,emit:r}){const e=h,c=r,[o,d]=me(h,"modelValue"),{emitFormBlur:i,emitFormInput:u,emitFormChange:x,size:w,color:q,id:B,name:m,highlight:V,disabled:T}=be(e),S=N(()=>di({color:q.value,variant:e.variant,size:w==null?void 0:w.value,highlight:V.value})),p=ee(null);function H(){var t;e.autofocus&&((t=p.value)==null||t.focus())}function K(t){d.trim&&(t=t.trim()),d.number&&(t=fe(t)),o.value=t,u()}function D(t){C(),d.lazy||K(t.target.value)}function L(t){const z=t.target.value;d.lazy&&K(z),d.trim&&(t.target.value=z.trim()),x(),c("change",t)}function G(t){i(),c("blur",t)}Y(()=>{setTimeout(()=>{H()},e.autofocusDelay)});function C(){if(e.autoresize){if(!p.value)return;p.value.rows=e.rows;const t=p.value.style.overflow;p.value.style.overflow="hidden";const z=window.getComputedStyle(p.value),M=Number.parseInt(z.paddingTop),F=Number.parseInt(z.paddingBottom),E=M+F,J=Number.parseInt(z.lineHeight),{scrollHeight:Q}=p.value,s=(Q-E)/J;s>e.rows&&(p.value.rows=e.maxrows?Math.min(s,e.maxrows):s),p.value.style.overflow=t}}return $e(o,()=>{je(C)}),a({textareaRef:p}),Y(()=>{setTimeout(()=>{C()},100)}),(t,z)=>{var M;return g(),j(l(W),{as:t.as,class:v(S.value.root({class:[e.class,(M=e.ui)==null?void 0:M.root]}))},{default:b(()=>{var F;return[n("textarea",R({id:l(B),ref_key:"textareaRef",ref:p,value:l(o),name:l(m),rows:t.rows,placeholder:t.placeholder,class:S.value.base({class:(F=e.ui)==null?void 0:F.base}),disabled:l(T),required:t.required},t.$attrs,{onInput:D,onBlur:G,onChange:L}),null,16,gi),k(t.$slots,"default")]}),_:3},8,["as","class"])}}}),vi={action:"https://api.staticforms.xyz/submit",method:"POST",class:"space-y-4"},mi=A({__name:"ContactForm",setup(h){const a=[{id:"family",name:"family",label:"Ketä perheeseesi kuuluu?",placeholder:"Kerro, ketä perheeseesi kuuluu",required:!0,rows:3},{id:"age",name:"age",label:"Minkä ikäisiä olet/olette?",placeholder:"Kirjoita ikäsi/ikänne",required:!0,rows:3},{id:"purpose",name:"purpose",label:"Onko koiran kanssa tarkoitus harrastaa vai tuleeko koirasta kotikoira?",placeholder:"Kerro, mitä suunnitelmia sinulla/teillä on koiran kanssa",required:!0,rows:3},{id:"living",name:"living",label:"Missä ja miten asutte?",placeholder:"Kuvaile asuinpaikkasi ja asumistapasi",required:!0,rows:3},{id:"pets",name:"pets",label:"Onko teillä muita lemmikkieläimiä?",placeholder:"Kerro muista mahdollisista lemmikkieläimistä",required:!0,rows:3},{id:"experience",name:"experience",label:"Onko sinulla/teillä aikaisempaa koirakokemusta?",placeholder:"Kerro mahdollisesta aikaisemmasta koirakokemuksestasi",required:!0,rows:3},{id:"preferences",name:"preferences",label:"Toivomuksia koiran suhteen?",placeholder:"Kerro, jos sinulla/teillä on erityisiä toiveita koiran suhteen",required:!1,rows:3},{id:"other",name:"other",label:"Muuta",placeholder:"Lisää muuta, mitä haluaisit kertoa",required:!1,rows:3}];return(r,e)=>{const c=si,o=oi,d=pi,i=qe;return g(),f("div",null,[e[4]||(e[4]=n("h2",{class:"text-2xl font-bold mb-4"},"Oletko kiinnostunut pennuista?",-1)),e[5]||(e[5]=n("p",{class:"mb-6"}," Täytä alla oleva lomake huolellisesti, niin otamme sinuun yhteyttä mahdollisimman pian. ",-1)),n("form",vi,[e[1]||(e[1]=n("input",{type:"hidden",name:"accessKey",value:"7ed3cdf4-1dea-4837-ab06-02ed5d28a660"},null,-1)),e[2]||(e[2]=n("input",{type:"hidden",name:"redirectTo",value:"/thank-you"},null,-1)),e[3]||(e[3]=n("input",{type:"hidden",name:"replyTo",value:"$email"},null,-1)),y(o,{label:"Nimi",required:""},{default:b(()=>[y(c,{name:"name",placeholder:"Kirjoita nimesi",class:"w-full"})]),_:1}),y(o,{label:"Puhelinnumero",required:""},{default:b(()=>[y(c,{name:"phone",type:"tel",placeholder:"Kirjoita puhelinnumerosi",class:"w-full"})]),_:1}),y(o,{label:"Sähköposti",required:""},{default:b(()=>[y(c,{name:"email",type:"email",placeholder:"Kirjoita sähköpostiosoitteesi",class:"w-full"})]),_:1}),(g(),f(ie,null,ae(a,u=>y(o,{key:u.id,label:u.label,required:u.required},{default:b(()=>[y(d,{name:`$${u.name}`,placeholder:u.placeholder,class:"w-full",rows:u.rows},null,8,["name","placeholder","rows"])]),_:2},1032,["label","required"])),64)),y(i,{type:"submit",value:"Submit",class:"w-full",color:"primary"},{default:b(()=>e[0]||(e[0]=[$(" Lähetä ")])),_:1})])])}}}),bi={class:"text-xl font-bold"},fi={class:"text-sm text-gray-600"},hi={class:"my-4"},yi={class:"my-4"},_i={key:0,class:"my-4"},xi=A({__name:"LitterCard",props:{litter:{type:Object,required:!0}},setup(h){const a=h,{litter:r}=a,e=i=>{switch(i.toLowerCase()){case"available":return"text-green-600 font-bold";case"reserved":return"text-yellow-600 font-bold";case"sold":return"text-red-600 font-bold";default:return""}},c=Object.assign({"/public/images/olivia/olivia-1.jpg":Ce,"/public/images/olivia/olivia-10.jpg":Fe,"/public/images/olivia/olivia-11.jpg":Ae,"/public/images/olivia/olivia-12.jpg":Ve,"/public/images/olivia/olivia-13.jpg":Te,"/public/images/olivia/olivia-14.jpg":Ke,"/public/images/olivia/olivia-15.jpg":Me,"/public/images/olivia/olivia-16.jpg":Ne,"/public/images/olivia/olivia-17.jpg":Pe,"/public/images/olivia/olivia-18.jpg":Oe,"/public/images/olivia/olivia-2.jpg":De,"/public/images/olivia/olivia-3.jpg":Le,"/public/images/olivia/olivia-4.jpg":Ge,"/public/images/olivia/olivia-5.jpg":Re,"/public/images/olivia/olivia-6.jpg":Ue,"/public/images/olivia/olivia-7.jpg":We,"/public/images/olivia/olivia-8.jpg":He,"/public/images/olivia/olivia-9.jpg":Ee}),o=`/public/${r.gallery_folder.replace(/^\/|\/$/g,"")}/`,d=r.gallery_folder?Object.keys(c).filter(i=>i.startsWith(o)).map(i=>i.replace("/public","")):[];return(i,u)=>{const x=Be,w=Je,q=mi,B=Qe;return g(),j(B,{class:"mb-6"},{header:b(()=>[n("div",null,[n("h2",bi,_(l(r).name),1),n("p",fi,"Syntynyt: "+_(l(r).born_date),1)])]),footer:b(()=>[y(q)]),default:b(()=>[n("div",hi,[n("p",null,[u[0]||(u[0]=n("strong",null,"Äiti:",-1)),$(" "+_(l(r).parents.mother),1)]),n("p",null,[u[1]||(u[1]=n("strong",null,"Isä:",-1)),$(" "+_(l(r).parents.father),1)])]),n("div",yi,[u[2]||(u[2]=n("h3",{class:"font-semibold"},"Pennut:",-1)),n("ul",null,[(g(!0),f(ie,null,ae(l(r).puppies,m=>(g(),f("li",{key:m.name,class:"my-1"},[n("strong",null,_(m.name),1),$(" ("+_(m.sex)+") - "+_(m.color)+" - ",1),n("span",{class:v(e(m.status))},_(m.status),3)]))),128))])]),l(d).length?(g(),f("div",_i,[u[3]||(u[3]=n("h3",{class:"font-semibold mb-2"},"Gallery:",-1)),y(w,{arrows:"",dots:"",items:l(d),ui:{item:"basis-1/3"}},{default:b(({item:m})=>[y(x,{src:m,width:"320",height:"320",fit:"cover",class:"rounded-md"},null,8,["src"])]),_:1},8,["items"])])):I("",!0)]),_:1})}}}),zi={key:0,class:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4"},$i=A({__name:"index",async setup(h){let a,r;const{data:e}=([a,r]=Se(()=>Xe(()=>Ye("litter").all(),"$4gANvhaSWJ")),a=await a,r(),a);return(c,o)=>{const d=xi;return l(e)?(g(),f("div",zi,[(g(!0),f(ie,null,ae(l(e),i=>(g(),j(d,{key:i.path,litter:i},null,8,["litter"]))),128))])):I("",!0)}}});export{$i as default};
