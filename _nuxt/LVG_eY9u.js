const Y={direction:"forward",speed:2,startDelay:1e3,active:!0,breakpoints:{},playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,rootNode:null};function Z(c,o){const t=c.rootNode();return o&&o(t)||t}function P(c={}){let o,t,a,O,w=0,i=!1,u=!1,h;function T(e,n){t=e;const{mergeOptions:f,optionsAtMedia:d}=n,p=f(Y,P.globalOptions),I=f(p,c);if(o=d(I),t.scrollSnapList().length<=1)return;O=o.startDelay,a=!1,h=t.internalEngine().scrollBody;const{eventStore:s}=t.internalEngine(),g=!!t.internalEngine().options.watchDrag,S=Z(t,o.rootNode);g&&t.on("pointerDown",A),g&&!o.stopOnInteraction&&t.on("pointerUp",b),o.stopOnMouseEnter&&s.add(S,"mouseenter",R),o.stopOnMouseEnter&&!o.stopOnInteraction&&s.add(S,"mouseleave",W),o.stopOnFocusIn&&t.on("slideFocusStart",r),o.stopOnFocusIn&&!o.stopOnInteraction&&s.add(t.containerNode(),"focusout",l),o.playOnInit&&l()}function U(){t.off("pointerDown",A).off("pointerUp",b).off("slideFocusStart",r).off("settle",D),r(),a=!0,i=!1}function l(){if(a||i)return;t.emit("autoScroll:play");const e=t.internalEngine(),{ownerWindow:n}=e;w=n.setTimeout(()=>{e.scrollBody=k(e),e.animation.start()},O),i=!0}function r(){if(a||!i)return;t.emit("autoScroll:stop");const e=t.internalEngine(),{ownerWindow:n}=e;e.scrollBody=h,n.clearTimeout(w),w=0,i=!1}function k(e){const{location:n,previousLocation:f,offsetLocation:d,target:p,scrollTarget:I,index:s,indexPrevious:g,limit:{reachedMin:S,reachedMax:C,constrain:G},options:{loop:H}}=e,J=o.direction==="forward"?-1:1,m=()=>E;let y=0,F=0,v=n.get(),L=0,M=!1;function K(){let x=0;f.set(n),y=J*o.speed,v+=y,n.add(y),p.set(n),x=v-L,F=Math.sign(x),L=v;const N=I.byDistance(0,!1).index;s.get()!==N&&(g.set(s.get()),s.set(N),t.emit("select"));const Q=o.direction==="forward"?S(d.get()):C(d.get());if(!H&&Q){M=!0;const X=G(n.get());n.set(X),p.set(n),r()}return E}const E={direction:()=>F,duration:()=>-1,velocity:()=>y,settled:()=>M,seek:K,useBaseFriction:m,useBaseDuration:m,useFriction:m,useDuration:m};return E}function A(){u||r()}function b(){u||B()}function R(){u=!0,r()}function W(){u=!1,l()}function D(){t.off("settle",D),l()}function B(){t.on("settle",D)}function V(e){typeof e<"u"&&(O=e),l()}function j(){i&&r()}function q(){i&&(r(),B())}function z(){return i}return{name:"autoScroll",options:c,init:T,destroy:U,play:V,stop:j,reset:q,isPlaying:z}}P.globalOptions=void 0;export{P as default};