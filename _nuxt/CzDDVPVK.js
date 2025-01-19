import{f as S,a0 as Ie,a1 as $e,a2 as Q,o as c,j as B,w as b,G as z,i as t,P as M,a3 as Ce,a4 as Be,a5 as be,C as O,A as T,p as he,a6 as xe,m as E,a7 as qe,b as p,I as K,k as $,a8 as Ae,q as N,r as Z,a9 as W,aa as ne,ab as ye,ac as ke,ad as Fe,ae as Se,a as g,c as k,D as w,N as te,af as Ve,ag as _e,ah as Oe,ai as ge,aj as Te,ak as Ne,d as C,t as _,F as ie,E as se,H as we,al as Pe,z as je,h as Me,M as De}from"./BQ4X9Uqh.js";import{u as Re,q as Ke}from"./Dig5bm3C.js";const[ze,He]=Ce("CollapsibleRoot"),Ge=S({__name:"CollapsibleRoot",props:{defaultOpen:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:open"],setup(h,{expose:s,emit:r}){const e=h,a=Ie(e,"open",r,{defaultValue:e.defaultOpen,passive:e.open===void 0}),{disabled:u,unmountOnHide:i}=$e(e);return He({contentId:"",disabled:u,open:a,unmountOnHide:i,onOpenToggle:()=>{a.value=!a.value}}),s({open:a}),Q(),(m,y)=>(c(),B(t(M),{as:m.as,"as-child":e.asChild,"data-state":t(a)?"open":"closed","data-disabled":t(u)?"":void 0},{default:b(()=>[z(m.$slots,"default",{open:t(a)})]),_:3},8,["as","as-child","data-state","data-disabled"]))}});function Le(h,s="reka"){return Be({useId:void 0}),`${s}-${be()}`}const Ue=S({inheritAttrs:!1,__name:"CollapsibleContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["contentFound"],setup(h,{emit:s}){const r=h,e=s,n=ze();n.contentId||(n.contentId=Le(void 0,"reka-collapsible-content"));const a=O(),{forwardRef:u,currentElement:i}=Q(),m=O(0),y=O(0),I=T(()=>n.open.value),d=O(I.value),f=O();he(()=>{var v;return[I.value,(v=a.value)==null?void 0:v.present]},async()=>{await xe();const v=i.value;if(!v)return;f.value=f.value||{transitionDuration:v.style.transitionDuration,animationName:v.style.animationName},v.style.transitionDuration="0s",v.style.animationName="none";const A=v.getBoundingClientRect();y.value=A.height,m.value=A.width,d.value||(v.style.transitionDuration=f.value.transitionDuration,v.style.animationName=f.value.animationName)},{immediate:!0});const V=T(()=>d.value&&n.open.value);return E(()=>{requestAnimationFrame(()=>{d.value=!1})}),qe(i,"beforematch",v=>{requestAnimationFrame(()=>{n.onOpenToggle(),e("contentFound")})}),(v,A)=>(c(),B(t(Ae),{ref_key:"presentRef",ref:a,present:v.forceMount||t(n).open.value,"force-mount":!0},{default:b(({present:F})=>{var x;return[p(t(M),K(v.$attrs,{id:t(n).contentId,ref:t(u),"as-child":r.asChild,as:v.as,hidden:F?void 0:t(n).unmountOnHide.value?"":"until-found","data-state":V.value?void 0:t(n).open.value?"open":"closed","data-disabled":(x=t(n).disabled)!=null&&x.value?"":void 0,style:{"--reka-collapsible-content-height":`${y.value}px`,"--reka-collapsible-content-width":`${m.value}px`}}),{default:b(()=>[!t(n).unmountOnHide.value||F?z(v.$slots,"default",{key:0}):$("",!0)]),_:2},1040,["id","as-child","as","hidden","data-state","data-disabled","style"])]}),_:3},8,["present"]))}}),Ee=S({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(h){const s=h;Q();const r=ze();return(e,n)=>{var a,u;return c(),B(t(M),{type:e.as==="button"?"button":void 0,as:e.as,"as-child":s.asChild,"aria-controls":t(r).contentId,"aria-expanded":t(r).open.value,"data-state":t(r).open.value?"open":"closed","data-disabled":(a=t(r).disabled)!=null&&a.value?"":void 0,disabled:(u=t(r).disabled)==null?void 0:u.value,onClick:t(r).onOpenToggle},{default:b(()=>[z(e.$slots,"default")]),_:3},8,["type","as","as-child","aria-controls","aria-expanded","data-state","data-disabled","disabled","onClick"])}}}),We=S({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{default:"label"}},setup(h){const s=h;return Q(),(r,e)=>(c(),B(t(M),K(s,{onMousedown:e[0]||(e[0]=n=>{!n.defaultPrevented&&n.detail>1&&n.preventDefault()})}),{default:b(()=>[z(r.$slots,"default")]),_:3},16))}}),Qe={slots:{root:"relative inline-flex items-center",base:["w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-[var(--ui-text-dimmed)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-75","transition-colors"],leading:"absolute inset-y-0 start-0 flex items-center",leadingIcon:"shrink-0 text-[var(--ui-text-dimmed)]",leadingAvatar:"shrink-0",leadingAvatarSize:"",trailing:"absolute inset-y-0 end-0 flex items-center",trailingIcon:"shrink-0 text-[var(--ui-text-dimmed)]"},variants:{buttonGroup:{horizontal:{root:"group",base:"group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"},vertical:{root:"group",base:"group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"}},size:{xs:{base:"px-2 py-1 text-xs gap-1",leading:"ps-2",trailing:"pe-2",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},sm:{base:"px-2.5 py-1.5 text-xs gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},md:{base:"px-2.5 py-1.5 text-sm gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},lg:{base:"px-3 py-2 text-sm gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},xl:{base:"px-3 py-2 text-base gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-6",leadingAvatarSize:"xs",trailingIcon:"size-6"}},variant:{outline:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg)] ring ring-inset ring-[var(--ui-border-accented)]",soft:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)]/50 hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-[var(--ui-bg-elevated)]/50",subtle:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)] ring ring-inset ring-[var(--ui-border-accented)]",ghost:"text-[var(--ui-text-highlighted)] bg-transparent hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-transparent dark:disabled:bg-transparent",none:"text-[var(--ui-text-highlighted)] bg-transparent"},color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},leading:{true:""},trailing:{true:""},loading:{true:""},highlight:{true:""},type:{file:"file:me-1.5 file:font-medium file:text-[var(--ui-text-muted)] file:outline-none"}},compoundVariants:[{color:"primary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]"},{color:"secondary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-secondary)]"},{color:"success",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-success)]"},{color:"info",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-info)]"},{color:"warning",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-warning)]"},{color:"error",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-error)]"},{color:"primary",highlight:!0,class:"ring ring-inset ring-[var(--ui-primary)]"},{color:"secondary",highlight:!0,class:"ring ring-inset ring-[var(--ui-secondary)]"},{color:"success",highlight:!0,class:"ring ring-inset ring-[var(--ui-success)]"},{color:"info",highlight:!0,class:"ring ring-inset ring-[var(--ui-info)]"},{color:"warning",highlight:!0,class:"ring ring-inset ring-[var(--ui-warning)]"},{color:"error",highlight:!0,class:"ring ring-inset ring-[var(--ui-error)]"},{color:"neutral",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-border-inverted)]"},{color:"neutral",highlight:!0,class:"ring ring-inset ring-[var(--ui-border-inverted)]"},{leading:!0,size:"xs",class:"ps-7"},{leading:!0,size:"sm",class:"ps-8"},{leading:!0,size:"md",class:"ps-9"},{leading:!0,size:"lg",class:"ps-10"},{leading:!0,size:"xl",class:"ps-11"},{trailing:!0,size:"xs",class:"pe-7"},{trailing:!0,size:"sm",class:"pe-8"},{trailing:!0,size:"md",class:"pe-9"},{trailing:!0,size:"lg",class:"pe-10"},{trailing:!0,size:"xl",class:"pe-11"},{loading:!0,leading:!0,class:{leadingIcon:"animate-spin"}},{loading:!0,leading:!1,trailing:!0,class:{trailingIcon:"animate-spin"}}],defaultVariants:{size:"md",color:"primary",variant:"outline"}},Ze=["id","type","value","name","placeholder","disabled","required","autocomplete"],Je=Z;var pe;const Xe=N({extend:N(Qe),...((pe=Je.ui)==null?void 0:pe.input)||{}}),Ye=S({inheritAttrs:!1,__name:"Input",props:W({as:{},id:{},name:{},type:{default:"text"},placeholder:{},color:{},variant:{},size:{},required:{type:Boolean},autocomplete:{default:"off"},autofocus:{type:Boolean},autofocusDelay:{default:0},disabled:{type:Boolean},highlight:{type:Boolean},class:{},ui:{},icon:{},avatar:{},leading:{type:Boolean},leadingIcon:{},trailing:{type:Boolean},trailingIcon:{},loading:{type:Boolean},loadingIcon:{}},{modelValue:{},modelModifiers:{}}),emits:W(["update:modelValue","blur","change"],["update:modelValue"]),setup(h,{expose:s,emit:r}){const e=h,n=r,a=ne(),[u,i]=ye(h,"modelValue"),{emitFormBlur:m,emitFormInput:y,emitFormChange:I,size:d,color:f,id:V,name:v,highlight:A,disabled:F}=ke(e,{deferInputValidation:!0}),{orientation:x,size:J}=Fe(e),{isLeading:D,isTrailing:G,leadingIconName:L,trailingIconName:U}=Se(e),P=T(()=>J.value||d.value),l=T(()=>Xe({type:e.type,color:f.value,variant:e.variant,size:P==null?void 0:P.value,loading:e.loading,highlight:A.value,leading:D.value||!!e.avatar||!!a.leading,trailing:G.value||!!a.trailing,buttonGroup:x.value})),q=O(null);function R(){var o;e.autofocus&&((o=q.value)==null||o.focus())}function j(o){i.trim&&(o=o.trim()),(i.number||e.type==="number")&&(o=_e(o)),u.value=o,y()}function X(o){i.lazy||j(o.target.value)}function Y(o){const ae=o.target.value;i.lazy&&j(ae),i.trim&&(o.target.value=ae.trim()),I(),n("change",o)}function ee(o){m(),n("blur",o)}return s({inputRef:q}),E(()=>{setTimeout(()=>{R()},e.autofocusDelay)}),(o,ae)=>{var le;return c(),B(t(M),{as:o.as,class:w(l.value.root({class:[e.class,(le=e.ui)==null?void 0:le.root]}))},{default:b(()=>{var re,oe,ue;return[g("input",K({id:t(V),ref_key:"inputRef",ref:q,type:o.type,value:t(u),name:t(v),placeholder:o.placeholder,class:l.value.base({class:(re=e.ui)==null?void 0:re.base}),disabled:t(F),required:o.required,autocomplete:o.autocomplete},o.$attrs,{onInput:X,onBlur:ee,onChange:Y}),null,16,Ze),z(o.$slots,"default"),t(D)||o.avatar||a.leading?(c(),k("span",{key:0,class:w(l.value.leading({class:(oe=e.ui)==null?void 0:oe.leading}))},[z(o.$slots,"leading",{},()=>{var H,de,ce;return[t(D)&&t(L)?(c(),B(te,{key:0,name:t(L),class:w(l.value.leadingIcon({class:(H=e.ui)==null?void 0:H.leadingIcon}))},null,8,["name","class"])):o.avatar?(c(),B(Ve,K({key:1,size:((de=e.ui)==null?void 0:de.leadingAvatarSize)||l.value.leadingAvatarSize()},o.avatar,{class:l.value.leadingAvatar({class:(ce=e.ui)==null?void 0:ce.leadingAvatar})}),null,16,["size","class"])):$("",!0)]})],2)):$("",!0),t(G)||a.trailing?(c(),k("span",{key:1,class:w(l.value.trailing({class:(ue=e.ui)==null?void 0:ue.trailing}))},[z(o.$slots,"trailing",{},()=>{var H;return[t(U)?(c(),B(te,{key:0,name:t(U),class:w(l.value.trailingIcon({class:(H=e.ui)==null?void 0:H.trailingIcon}))},null,8,["name","class"])):$("",!0)]})],2)):$("",!0)]}),_:3},8,["as","class"])}}}),ea={slots:{root:"",wrapper:"",labelWrapper:"flex content-center items-center justify-between",label:"block font-medium text-[var(--ui-text)]",container:"mt-1 relative",description:"text-[var(--ui-text-muted)]",error:"mt-2 text-[var(--ui-error)]",hint:"text-[var(--ui-text-muted)]",help:"mt-2 text-[var(--ui-text-muted)]"},variants:{size:{xs:{root:"text-xs"},sm:{root:"text-xs"},md:{root:"text-sm"},lg:{root:"text-sm"},xl:{root:"text-base"}},required:{true:{label:"after:content-['*'] after:ms-0.5 after:text-[var(--ui-error)]"}}},defaultVariants:{size:"md"}},aa=Z;var me;const ta=N({extend:N(ea),...((me=aa.ui)==null?void 0:me.formField)||{}}),ia=S({__name:"FormField",props:{as:{},name:{},errorPattern:{},label:{},description:{},help:{},error:{type:[String,Boolean]},hint:{},size:{},required:{type:Boolean},eagerValidation:{type:Boolean},validateOnInputDelay:{},class:{},ui:{}},setup(h){const s=h,r=ne(),e=T(()=>ta({size:s.size,required:s.required})),n=Oe("form-errors",null),a=T(()=>{var i,m;return s.error||((m=(i=n==null?void 0:n.value)==null?void 0:i.find(y=>y.name===s.name||s.errorPattern&&y.name.match(s.errorPattern)))==null?void 0:m.message)}),u=O(be());return ge(Te,u),ge(Ne,T(()=>({error:a.value,name:s.name,size:s.size,eagerValidation:s.eagerValidation,validateOnInputDelay:s.validateOnInputDelay,errorPattern:s.errorPattern}))),(i,m)=>{var y;return c(),B(t(M),{as:i.as,class:w(e.value.root({class:[s.class,(y=s.ui)==null?void 0:y.root]}))},{default:b(()=>{var I,d,f,V,v,A,F,x;return[g("div",{class:w(e.value.wrapper({class:(I=s.ui)==null?void 0:I.wrapper}))},[i.label||r.label?(c(),k("div",{key:0,class:w(e.value.labelWrapper({class:(d=s.ui)==null?void 0:d.labelWrapper}))},[p(t(We),{for:u.value,class:w(e.value.label({class:(f=s.ui)==null?void 0:f.label}))},{default:b(()=>[z(i.$slots,"label",{label:i.label},()=>[C(_(i.label),1)])]),_:3},8,["for","class"]),i.hint||r.hint?(c(),k("span",{key:0,class:w(e.value.hint({class:(V=s.ui)==null?void 0:V.hint}))},[z(i.$slots,"hint",{hint:i.hint},()=>[C(_(i.hint),1)])],2)):$("",!0)],2)):$("",!0),i.description||r.description?(c(),k("p",{key:1,class:w(e.value.description({class:(v=s.ui)==null?void 0:v.description}))},[z(i.$slots,"description",{description:i.description},()=>[C(_(i.description),1)])],2)):$("",!0)],2),g("div",{class:w([(i.label||!!r.label||i.description||!!r.description)&&e.value.container({class:(A=s.ui)==null?void 0:A.container})])},[z(i.$slots,"default",{error:a.value}),typeof a.value=="string"&&a.value||r.error?(c(),k("p",{key:0,class:w(e.value.error({class:(F=s.ui)==null?void 0:F.error}))},[z(i.$slots,"error",{error:a.value},()=>[C(_(a.value),1)])],2)):i.help||r.help?(c(),k("p",{key:1,class:w(e.value.help({class:(x=s.ui)==null?void 0:x.help}))},[z(i.$slots,"help",{help:i.help},()=>[C(_(i.help),1)])],2)):$("",!0)],2)]}),_:3},8,["as","class"])}}}),sa={slots:{root:"relative inline-flex items-center",base:["w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-[var(--ui-text-dimmed)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-75","transition-colors"],leading:"absolute inset-y-0 start-0 flex items-center",leadingIcon:"shrink-0 text-[var(--ui-text-dimmed)]",leadingAvatar:"shrink-0",leadingAvatarSize:"",trailing:"absolute inset-y-0 end-0 flex items-center",trailingIcon:"shrink-0 text-[var(--ui-text-dimmed)]"},variants:{buttonGroup:{horizontal:{root:"group",base:"group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"},vertical:{root:"group",base:"group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"}},size:{xs:{base:"px-2 py-1 text-xs gap-1",leading:"ps-2",trailing:"pe-2",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},sm:{base:"px-2.5 py-1.5 text-xs gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},md:{base:"px-2.5 py-1.5 text-sm gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},lg:{base:"px-3 py-2 text-sm gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},xl:{base:"px-3 py-2 text-base gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-6",leadingAvatarSize:"xs",trailingIcon:"size-6"}},variant:{outline:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg)] ring ring-inset ring-[var(--ui-border-accented)]",soft:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)]/50 hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-[var(--ui-bg-elevated)]/50",subtle:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)] ring ring-inset ring-[var(--ui-border-accented)]",ghost:"text-[var(--ui-text-highlighted)] bg-transparent hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-transparent dark:disabled:bg-transparent",none:"text-[var(--ui-text-highlighted)] bg-transparent"},color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},leading:{true:""},trailing:{true:""},loading:{true:""},highlight:{true:""},type:{file:"file:me-1.5 file:font-medium file:text-[var(--ui-text-muted)] file:outline-none"}},compoundVariants:[{color:"primary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]"},{color:"secondary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-secondary)]"},{color:"success",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-success)]"},{color:"info",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-info)]"},{color:"warning",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-warning)]"},{color:"error",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-error)]"},{color:"primary",highlight:!0,class:"ring ring-inset ring-[var(--ui-primary)]"},{color:"secondary",highlight:!0,class:"ring ring-inset ring-[var(--ui-secondary)]"},{color:"success",highlight:!0,class:"ring ring-inset ring-[var(--ui-success)]"},{color:"info",highlight:!0,class:"ring ring-inset ring-[var(--ui-info)]"},{color:"warning",highlight:!0,class:"ring ring-inset ring-[var(--ui-warning)]"},{color:"error",highlight:!0,class:"ring ring-inset ring-[var(--ui-error)]"},{color:"neutral",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-border-inverted)]"},{color:"neutral",highlight:!0,class:"ring ring-inset ring-[var(--ui-border-inverted)]"},{leading:!0,size:"xs",class:"ps-7"},{leading:!0,size:"sm",class:"ps-8"},{leading:!0,size:"md",class:"ps-9"},{leading:!0,size:"lg",class:"ps-10"},{leading:!0,size:"xl",class:"ps-11"},{trailing:!0,size:"xs",class:"pe-7"},{trailing:!0,size:"sm",class:"pe-8"},{trailing:!0,size:"md",class:"pe-9"},{trailing:!0,size:"lg",class:"pe-10"},{trailing:!0,size:"xl",class:"pe-11"},{loading:!0,leading:!0,class:{leadingIcon:"animate-spin"}},{loading:!0,leading:!1,trailing:!0,class:{trailingIcon:"animate-spin"}}],defaultVariants:{size:"md",color:"primary",variant:"outline"}},na=["id","value","name","rows","placeholder","disabled","required"],la=Z;var ve;const ra=N({extend:N(sa),...((ve=la.ui)==null?void 0:ve.textarea)||{}}),oa=S({inheritAttrs:!1,__name:"Textarea",props:W({as:{},id:{},name:{},placeholder:{},color:{},variant:{},size:{},required:{type:Boolean},autofocus:{type:Boolean},autofocusDelay:{default:0},disabled:{type:Boolean},class:{},rows:{default:3},maxrows:{default:0},autoresize:{type:Boolean},highlight:{type:Boolean},ui:{}},{modelValue:{},modelModifiers:{}}),emits:W(["update:modelValue","blur","change"],["update:modelValue"]),setup(h,{expose:s,emit:r}){const e=h,n=r,[a,u]=ye(h,"modelValue"),{emitFormBlur:i,emitFormInput:m,emitFormChange:y,size:I,color:d,id:f,name:V,highlight:v,disabled:A}=ke(e,{deferInputValidation:!0}),F=T(()=>ra({color:d.value,variant:e.variant,size:I==null?void 0:I.value,highlight:v.value})),x=O(null);function J(){var l;e.autofocus&&((l=x.value)==null||l.focus())}function D(l){u.trim&&(l=l.trim()),u.number&&(l=_e(l)),a.value=l,m()}function G(l){P(),u.lazy||D(l.target.value)}function L(l){const q=l.target.value;u.lazy&&D(q),u.trim&&(l.target.value=q.trim()),y(),n("change",l)}function U(l){i(),n("blur",l)}E(()=>{setTimeout(()=>{J()},e.autofocusDelay)});function P(){if(e.autoresize){if(!x.value)return;x.value.rows=e.rows;const l=x.value.style.overflow;x.value.style.overflow="hidden";const q=window.getComputedStyle(x.value),R=Number.parseInt(q.paddingTop),j=Number.parseInt(q.paddingBottom),X=R+j,Y=Number.parseInt(q.lineHeight),{scrollHeight:ee}=x.value,o=(ee-X)/Y;o>e.rows&&(x.value.rows=e.maxrows?Math.min(o,e.maxrows):o),x.value.style.overflow=l}}return he(a,()=>{xe(P)}),s({textareaRef:x}),E(()=>{setTimeout(()=>{P()},100)}),(l,q)=>{var R;return c(),B(t(M),{as:l.as,class:w(F.value.root({class:[e.class,(R=e.ui)==null?void 0:R.root]}))},{default:b(()=>{var j;return[g("textarea",K({id:t(f),ref_key:"textareaRef",ref:x,value:t(a),name:t(V),rows:l.rows,placeholder:l.placeholder,class:F.value.base({class:(j=e.ui)==null?void 0:j.base}),disabled:t(A),required:l.required},l.$attrs,{onInput:G,onBlur:U,onChange:L}),null,16,na),z(l.$slots,"default")]}),_:3},8,["as","class"])}}}),ua={class:"w-full"},da={action:"https://api.staticforms.xyz/submit",method:"POST",class:"flex flex-col gap-4 w-full"},ca=S({__name:"ContactForm",setup(h){const s=[{id:"family",name:"family",label:"Ketä perheeseesi kuuluu?",placeholder:"Kerro, ketä perheeseesi kuuluu",required:!0,rows:3},{id:"age",name:"age",label:"Minkä ikäisiä olet/olette?",placeholder:"Kirjoita ikäsi/ikänne",required:!0,rows:3},{id:"purpose",name:"purpose",label:"Onko koiran kanssa tarkoitus harrastaa vai tuleeko koirasta kotikoira?",placeholder:"Kerro, mitä suunnitelmia sinulla/teillä on koiran kanssa",required:!0,rows:3},{id:"living",name:"living",label:"Missä ja miten asutte?",placeholder:"Kuvaile asuinpaikkasi ja asumistapasi",required:!0,rows:3},{id:"pets",name:"pets",label:"Onko teillä muita lemmikkieläimiä?",placeholder:"Kerro muista mahdollisista lemmikkieläimistä",required:!0,rows:3},{id:"experience",name:"experience",label:"Onko sinulla/teillä aikaisempaa koirakokemusta?",placeholder:"Kerro mahdollisesta aikaisemmasta koirakokemuksestasi",required:!0,rows:3},{id:"preferences",name:"preferences",label:"Toivomuksia koiran suhteen?",placeholder:"Kerro, jos sinulla/teillä on erityisiä toiveita koiran suhteen",required:!1,rows:3},{id:"other",name:"other",label:"Muuta",placeholder:"Lisää muuta, mitä haluaisit kertoa",required:!1,rows:3}];return(r,e)=>{const n=Ye,a=ia,u=oa,i=we;return c(),k("div",ua,[g("form",da,[e[1]||(e[1]=g("input",{type:"hidden",name:"accessKey",value:"7ed3cdf4-1dea-4837-ab06-02ed5d28a660"},null,-1)),e[2]||(e[2]=g("input",{type:"hidden",name:"redirectTo",value:"https://justvaliant.fi/thank-you"},null,-1)),e[3]||(e[3]=g("input",{type:"hidden",name:"replyTo",value:"$email"},null,-1)),p(a,{label:"Nimi",required:""},{default:b(()=>[p(n,{name:"name",color:"neutral",variant:"subtle",placeholder:"Kirjoita nimesi",class:"w-full rounded-lg",size:"xl"})]),_:1}),p(a,{label:"Puhelinnumero",required:""},{default:b(()=>[p(n,{name:"phone",type:"tel",color:"neutral",variant:"subtle",placeholder:"Kirjoita puhelinnumerosi",class:"w-full rounded-lg",size:"xl"})]),_:1}),p(a,{label:"Sähköposti",required:""},{default:b(()=>[p(n,{name:"email",type:"email",color:"neutral",variant:"subtle",placeholder:"Kirjoita sähköpostiosoitteesi",class:"w-full rounded-lg",size:"xl"})]),_:1}),(c(),k(ie,null,se(s,m=>p(a,{key:m.id,label:m.label,required:m.required},{default:b(()=>[p(u,{name:`$${m.name}`,placeholder:m.placeholder,color:"neutral",variant:"subtle",class:"w-full rounded-lg",rows:m.rows},null,8,["name","placeholder","rows"])]),_:2},1032,["label","required"])),64)),p(i,{type:"submit",value:"Submit",class:"w-full bg-[rgb(35,22,81)] text-white px-4 py-3 rounded-lg font-bold hover:bg-[rgb(29,30,44)] transition duration-200"},{default:b(()=>e[0]||(e[0]=[C(" Lähetä ")])),_:1})])])}}}),ga={slots:{root:"",content:"data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"}},pa=Z;var fe;const ma=N({extend:N(ga),...((fe=pa.ui)==null?void 0:fe.collapsible)||{}}),va=S({__name:"Collapsible",props:{as:{},class:{},ui:{},defaultOpen:{type:Boolean},open:{type:Boolean},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0}},emits:["update:open"],setup(h,{emit:s}){const r=h,e=s,n=ne(),a=Pe(je(r,"as","defaultOpen","open","disabled","unmountOnHide"),e),u=ma();return(i,m)=>{var y;return c(),B(t(Ge),K(t(a),{class:t(u).root({class:[r.class,(y=r.ui)==null?void 0:y.root]})}),{default:b(({open:I})=>{var d;return[n.default?(c(),B(t(Ee),{key:0,"as-child":""},{default:b(()=>[z(i.$slots,"default",{open:I})]),_:2},1024)):$("",!0),p(t(Ue),{class:w(t(u).content({class:(d=r.ui)==null?void 0:d.content}))},{default:b(()=>[z(i.$slots,"content")]),_:3},8,["class"])]}),_:3},16,["class"])}}}),fa={key:0},ba={class:"bg-bg-muted pt-4 pb-4"},ha={class:"text-2xl font-bold mb-8 text-center"},xa={class:"grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3"},ya={class:"flex flex-col items-center bg-white shadow-lg rounded-md p-4 border border-gray-200"},ka={class:"text-center text-sm mb-1"},_a={class:"flex items-center gap-2 text-lg font-semibold text-center"},wa={class:"flex flex-col items-center bg-white shadow-lg rounded-md p-4 border border-gray-200"},za={class:"text-center text-sm mb-1"},Ia={class:"flex items-center gap-2 text-lg font-semibold text-center"},$a={class:"bg-white p-4 rounded-md shadow-sm border border-gray-200 mb-2"},Ca={class:"flex items-center gap-2 mb-2"},Ba={class:"flex items-center gap-2"},qa={key:0,class:"mb-2"},Aa={class:"space-y-2"},Fa=["href"],Sa=["src","alt"],Ta=S({__name:"LitterList",async setup(h){let s,r;const{data:e}=([s,r]=Me(()=>Re(()=>Ke("litter").all(),"$ZQTGmNNfPT")),s=await s,r(),s);return(n,a)=>{const u=te,i=De,m=we,y=ca,I=va;return t(e)&&t(e).length>0?(c(),k("div",fa,[g("div",ba,[(c(!0),k(ie,null,se(t(e),d=>(c(),k("div",{key:d.path,class:"container mx-auto max-w-3xl px-4 py-3 grow"},[g("h1",ha,_(d.name),1),g("div",xa,[g("div",ya,[g("p",ka,"Äiti - "+_(d.parents.mother_calling_name),1),g("p",_a,[p(u,{name:"i-mingcute-female-line",class:"text-error text-2xl"}),C(" "+_(d.parents.mother),1)]),p(i,{provider:"imagekit",src:d.parents.mother_image,height:"128",width:"128",modifiers:{fit:"contain"},class:"w-32 h-32 rounded-full border-4 border-error mt-3 object-cover"},null,8,["src"]),p(m,{href:d.parents.mother_pedigree_link,color:"error",target:"_blank",class:"mt-4 flex items-center gap-2 px-4 py-2 rounded-md"},{default:b(()=>[p(u,{name:"i-mdi-link",class:"text-lg"}),a[0]||(a[0]=C(" Sukutaulu "))]),_:2},1032,["href"])]),g("div",wa,[g("p",za,"Isä - "+_(d.parents.father_calling_name),1),g("p",Ia,[p(u,{name:"i-mingcute-male-line",class:"text-info text-2xl"}),C(" "+_(d.parents.father),1)]),p(i,{provider:"imagekit",src:d.parents.father_image,height:"128",width:"128",modifiers:{fit:"contain"},class:"w-32 h-32 rounded-full border-4 border-info mt-3 object-cover"},null,8,["src"]),p(m,{href:d.parents.father_pedigree_link,color:"info",target:"_blank",class:"mt-4 flex items-center gap-2 px-4 py-2 rounded-md"},{default:b(()=>[p(u,{name:"i-mdi-link",class:"text-lg"}),a[1]||(a[1]=C(" Sukutaulu "))]),_:2},1032,["href"])])]),g("div",$a,[g("p",Ca,[p(u,{name:"i-mdi-calendar-outline",class:"text-gray-600 text-xl"}),a[2]||(a[2]=g("strong",null,"Syntyy:",-1)),C(" "+_(d.born_date),1)]),g("p",Ba,[p(u,{name:"i-mdi-dog",class:"text-gray-600 text-xl"}),a[3]||(a[3]=g("strong",null,"Rotu:",-1)),C(" "+_(d.breed),1)])]),d.puppies&&d.puppies.length>0?(c(),k("div",qa,[a[4]||(a[4]=g("h2",{class:"text-xl font-semibold mb-2"},"Pentuja",-1)),g("ul",Aa,[(c(!0),k(ie,null,se(d.puppies,f=>(c(),k("li",{key:f.name,class:"flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200"},[p(u,{name:"i-mdi-paw",class:"text-gray-600 text-xl"}),g("span",null,[C(_(f.name)+" ("+_(f.sex)+") - "+_(f.color)+" - "+_(f.status)+" ",1),f.pedigree_link?(c(),k("a",{key:0,href:f.pedigree_link,target:"_blank",class:"text-blue-500 underline hover:text-blue-700 ml-2"}," Pedigree ",8,Fa)):$("",!0),f.image?(c(),k("img",{key:1,src:f.image,alt:`Image of ${f.name}`,class:"w-10 h-10 rounded-full ml-4 border"},null,8,Sa)):$("",!0)])]))),128))])])):$("",!0),a[5]||(a[5]=g("h2",{class:"text-2xl font-bold mt-8 mb-6 text-center"},"Oletko kiinnostunut pennuista?",-1)),a[6]||(a[6]=g("p",{class:"mb-6 text-center"}," Täytä alla oleva lomake huolellisesti, niin otamme sinuun yhteyttä mahdollisimman pian. ",-1)),p(I,{class:"flex flex-col gap-2 w-full max-w-xl mx-auto bg-white rounded-md shadow-sm border border-gray-200 mb-2"},{content:b(()=>[p(y,{class:"p-4"})]),default:b(()=>[p(m,{label:"Avaa lomake",color:"primary",variant:"solid","trailing-icon":"i-lucide-chevron-down",size:"xl",block:"",class:""})]),_:1})]))),128))])])):$("",!0)}}});export{Ta as _};