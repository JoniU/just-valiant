const B={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function C(l,n){const t=l.scrollSnapList();return typeof n=="number"?t.map(()=>n):n(t,l)}function H(l,n){const t=l.rootNode();return n&&n(t)||t}function E(l={}){let n,t,r,y,u=null,c=0,o=!1,f=!1,O=!1,p=!1;function x(e,a){t=e;const{mergeOptions:d,optionsAtMedia:g}=a,R=d(B,E.globalOptions),W=d(R,l);if(n=g(W),t.scrollSnapList().length<=1)return;p=n.jump,r=!1,y=C(t,n.delay);const{eventStore:m,ownerDocument:z}=t.internalEngine(),D=!!t.internalEngine().options.watchDrag,b=H(t,n.rootNode);m.add(z,"visibilitychange",h),D&&t.on("pointerDown",I),D&&!n.stopOnInteraction&&t.on("pointerUp",w),n.stopOnMouseEnter&&m.add(b,"mouseenter",A),n.stopOnMouseEnter&&!n.stopOnInteraction&&m.add(b,"mouseleave",L),n.stopOnFocusIn&&t.on("slideFocusStart",s),n.stopOnFocusIn&&!n.stopOnInteraction&&m.add(t.containerNode(),"focusout",i),n.playOnInit&&!S()&&i()}function T(){t.off("pointerDown",I).off("pointerUp",w).off("slideFocusStart",s),s(),r=!0,o=!1}function v(){const{ownerWindow:e}=t.internalEngine();e.clearTimeout(c),c=e.setTimeout(k,y[t.selectedScrollSnap()]),u=new Date().getTime(),t.emit("autoplay:timerset")}function N(){const{ownerWindow:e}=t.internalEngine();e.clearTimeout(c),c=0,u=null,t.emit("autoplay:timerstopped")}function i(){r||(o||t.emit("autoplay:play"),v(),o=!0)}function s(){r||(o&&t.emit("autoplay:stop"),N(),o=!1)}function h(){if(S())return O=o,s();O&&i()}function S(){const{ownerDocument:e}=t.internalEngine();return e.visibilityState==="hidden"}function I(){f||s()}function w(){f||i()}function A(){f=!0,s()}function L(){f=!1,i()}function F(e){typeof e<"u"&&(p=e),i()}function M(){o&&s()}function U(){o&&i()}function j(){return o}function k(){const{index:e}=t.internalEngine(),a=e.clone().add(1).get(),d=t.scrollSnapList().length-1,g=n.stopOnLastSnap&&a===d;if(t.canScrollNext()?t.scrollNext(p):t.scrollTo(0,p),t.emit("autoplay:select"),g)return s();i()}function P(){if(!u)return null;const e=y[t.selectedScrollSnap()],a=new Date().getTime()-u;return e-a}return{name:"autoplay",options:l,init:x,destroy:T,play:F,stop:M,reset:U,isPlaying:j,timeUntilNext:P}}E.globalOptions=void 0;export{E as default};
