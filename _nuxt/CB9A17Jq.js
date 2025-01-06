import{a4 as Qe,a5 as Xe,W as ct,a6 as jt,k as Ae,L as Le,M as lt,g as ut,a7 as Pt,a8 as Et,a9 as It,aa as Dt,j as Se,ab as At,V as we,o as G,s as ft,w as dt,a as Je,v as H,c as Z,F as Ze,E as Ye,y as Oe,b as We,a3 as et,K as tt,x as te,D as ue,P as pt,z as le,O as Mt}from"./B0H9JM6P.js";function kt(e){return Object.prototype.toString.call(e)==="[object Object]"}function nt(e){return kt(e)||Array.isArray(e)}function zt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ze(e,n){const t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),r=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==r?!1:t.every(o=>{const l=e[o],a=n[o];return typeof l=="function"?`${l}`==`${a}`:!nt(l)||!nt(a)?l===a:ze(l,a)})}function ot(e){return e.concat().sort((n,t)=>n.name>t.name?1:-1).map(n=>n.options)}function Bt(e,n){if(e.length!==n.length)return!1;const t=ot(e),s=ot(n);return t.every((i,r)=>{const o=s[r];return ze(i,o)})}function Be(e){return typeof e=="number"}function Me(e){return typeof e=="string"}function Te(e){return typeof e=="boolean"}function rt(e){return Object.prototype.toString.call(e)==="[object Object]"}function D(e){return Math.abs(e)}function Ce(e){return Math.sign(e)}function ge(e,n){return D(e-n)}function Ct(e,n){if(e===0||n===0||D(e)<=D(n))return 0;const t=ge(D(e),D(n));return D(t/e)}function Rt(e){return Math.round(e*100)/100}function ve(e){return be(e).map(Number)}function Q(e){return e[he(e)]}function he(e){return Math.max(0,e.length-1)}function Re(e,n){return n===he(e)}function st(e,n=0){return Array.from(Array(e),(t,s)=>n+s)}function be(e){return Object.keys(e)}function mt(e,n){return[e,n].reduce((t,s)=>(be(s).forEach(i=>{const r=t[i],o=s[i],l=rt(r)&&rt(o);t[i]=l?mt(r,o):o}),t),{})}function ke(e,n){return typeof n.MouseEvent<"u"&&e instanceof n.MouseEvent}function Ft(e,n){const t={start:s,center:i,end:r};function s(){return 0}function i(a){return r(a)/2}function r(a){return n-a}function o(a,c){return Me(e)?t[e](a):e(n,a,c)}return{measure:o}}function _e(){let e=[];function n(i,r,o,l={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(r,o,l),a=()=>i.removeEventListener(r,o,l);else{const c=i;c.addListener(o),a=()=>c.removeListener(o)}return e.push(a),s}function t(){e=e.filter(i=>i())}const s={add:n,clear:t};return s}function Vt(e,n,t,s){const i=_e(),r=1e3/60;let o=null,l=0,a=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&d()})}function v(){h(),i.clear()}function p(b){if(!a)return;o||(o=b);const u=b-o;for(o=b,l+=u;l>=r;)t(),l-=r;const _=l/r;s(_),a&&(a=n.requestAnimationFrame(p))}function m(){a||(a=n.requestAnimationFrame(p))}function h(){n.cancelAnimationFrame(a),o=null,l=0,a=0}function d(){o=null,l=0}return{init:c,destroy:v,start:m,stop:h,update:t,render:s}}function Nt(e,n){const t=n==="rtl",s=e==="y",i=s?"y":"x",r=s?"x":"y",o=!s&&t?-1:1,l=v(),a=p();function c(d){const{height:g,width:b}=d;return s?g:b}function v(){return s?"top":t?"right":"left"}function p(){return s?"bottom":t?"left":"right"}function m(d){return d*o}return{scroll:i,cross:r,startEdge:l,endEdge:a,measureSize:c,direction:m}}function se(e=0,n=0){const t=D(e-n);function s(c){return c<e}function i(c){return c>n}function r(c){return s(c)||i(c)}function o(c){return r(c)?s(c)?e:n:c}function l(c){return t?c-t*Math.ceil((c-n)/t):c}return{length:t,max:n,min:e,constrain:o,reachedAny:r,reachedMax:i,reachedMin:s,removeOffset:l}}function gt(e,n,t){const{constrain:s}=se(0,e),i=e+1;let r=o(n);function o(m){return t?D((i+m)%i):s(m)}function l(){return r}function a(m){return r=o(m),p}function c(m){return v().set(l()+m)}function v(){return gt(e,l(),t)}const p={get:l,set:a,add:c,clone:v};return p}function Ut(e,n,t,s,i,r,o,l,a,c,v,p,m,h,d,g,b,u,_){const{cross:S,direction:x}=e,P=["INPUT","SELECT","TEXTAREA"],T={passive:!1},O=_e(),f=_e(),w=se(50,225).constrain(h.measure(20)),L={mouse:300,touch:400},j={mouse:500,touch:600},A=d?43:25;let C=!1,R=0,F=0,X=!1,$=!1,N=!1,k=!1;function q(y){if(!_)return;function E(B){(Te(_)||_(y,B))&&de(B)}const M=n;O.add(M,"dragstart",B=>B.preventDefault(),T).add(M,"touchmove",()=>{},T).add(M,"touchend",()=>{}).add(M,"touchstart",E).add(M,"mousedown",E).add(M,"touchcancel",z).add(M,"contextmenu",z).add(M,"click",W,!0)}function K(){O.clear(),f.clear()}function ie(){const y=k?t:n;f.add(y,"touchmove",V,T).add(y,"touchend",z).add(y,"mousemove",V,T).add(y,"mouseup",z)}function ae(y){const E=y.nodeName||"";return P.includes(E)}function Y(){return(d?j:L)[k?"mouse":"touch"]}function fe(y,E){const M=p.add(Ce(y)*-1),B=v.byDistance(y,!d).distance;return d||D(y)<w?B:b&&E?B*.5:v.byIndex(M.get(),0).distance}function de(y){const E=ke(y,s);k=E,N=d&&E&&!y.buttons&&C,C=ge(i.get(),o.get())>=2,!(E&&y.button!==0)&&(ae(y.target)||(X=!0,r.pointerDown(y),c.useFriction(0).useDuration(0),i.set(o),ie(),R=r.readPoint(y),F=r.readPoint(y,S),m.emit("pointerDown")))}function V(y){if(!ke(y,s)&&y.touches.length>=2)return z(y);const M=r.readPoint(y),B=r.readPoint(y,S),J=ge(M,R),ee=ge(B,F);if(!$&&!k&&(!y.cancelable||($=J>ee,!$)))return z(y);const oe=r.pointerMove(y);J>g&&(N=!0),c.useFriction(.3).useDuration(.75),l.start(),i.add(x(oe)),y.preventDefault()}function z(y){const M=v.byDistance(0,!1).index!==p.get(),B=r.pointerUp(y)*Y(),J=fe(x(B),M),ee=Ct(B,J),oe=A-10*ee,ne=u+ee/50;$=!1,X=!1,f.clear(),c.useDuration(oe).useFriction(ne),a.distance(J,!d),k=!1,m.emit("pointerUp")}function W(y){N&&(y.stopPropagation(),y.preventDefault(),N=!1)}function U(){return X}return{init:q,destroy:K,pointerDown:U}}function Gt(e,n){let s,i;function r(p){return p.timeStamp}function o(p,m){const d=`client${(m||e.scroll)==="x"?"X":"Y"}`;return(ke(p,n)?p:p.touches[0])[d]}function l(p){return s=p,i=p,o(p)}function a(p){const m=o(p)-o(i),h=r(p)-r(s)>170;return i=p,h&&(s=p),m}function c(p){if(!s||!i)return 0;const m=o(i)-o(s),h=r(p)-r(s),d=r(p)-r(i)>170,g=m/h;return h&&!d&&D(g)>.1?g:0}return{pointerDown:l,pointerMove:a,pointerUp:c,readPoint:o}}function Ht(){function e(t){const{offsetTop:s,offsetLeft:i,offsetWidth:r,offsetHeight:o}=t;return{top:s,right:i+r,bottom:s+o,left:i,width:r,height:o}}return{measure:e}}function $t(e){function n(s){return e*(s/100)}return{measure:n}}function qt(e,n,t,s,i,r,o){const l=[e].concat(s);let a,c,v=[],p=!1;function m(b){return i.measureSize(o.measure(b))}function h(b){if(!r)return;c=m(e),v=s.map(m);function u(_){for(const S of _){if(p)return;const x=S.target===e,P=s.indexOf(S.target),T=x?c:v[P],O=m(x?e:s[P]);if(D(O-T)>=.5){b.reInit(),n.emit("resize");break}}}a=new ResizeObserver(_=>{(Te(r)||r(b,_))&&u(_)}),t.requestAnimationFrame(()=>{l.forEach(_=>a.observe(_))})}function d(){p=!0,a&&a.disconnect()}return{init:h,destroy:d}}function Kt(e,n,t,s,i,r){let o=0,l=0,a=i,c=r,v=e.get(),p=0;function m(){const T=s.get()-e.get(),O=!a;let f=0;return O?(o=0,t.set(s),e.set(s),f=T):(t.set(e),o+=T/a,o*=c,v+=o,e.add(o),f=v-p),l=Ce(f),p=v,P}function h(){const T=s.get()-n.get();return D(T)<.001}function d(){return a}function g(){return l}function b(){return o}function u(){return S(i)}function _(){return x(r)}function S(T){return a=T,P}function x(T){return c=T,P}const P={direction:g,duration:d,velocity:b,seek:m,settled:h,useBaseFriction:_,useBaseDuration:u,useFriction:x,useDuration:S};return P}function Qt(e,n,t,s,i){const r=i.measure(10),o=i.measure(50),l=se(.1,.99);let a=!1;function c(){return!(a||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function v(h){if(!c())return;const d=e.reachedMin(n.get())?"min":"max",g=D(e[d]-n.get()),b=t.get()-n.get(),u=l.constrain(g/o);t.subtract(b*u),!h&&D(b)<r&&(t.set(e.constrain(t.get())),s.useDuration(25).useBaseFriction())}function p(h){a=!h}return{shouldConstrain:c,constrain:v,toggleActive:p}}function Xt(e,n,t,s,i){const r=se(-n+e,0),o=p(),l=v(),a=m();function c(d,g){return ge(d,g)<1}function v(){const d=o[0],g=Q(o),b=o.lastIndexOf(d),u=o.indexOf(g)+1;return se(b,u)}function p(){return t.map((d,g)=>{const{min:b,max:u}=r,_=r.constrain(d),S=!g,x=Re(t,g);return S?u:x||c(b,_)?b:c(u,_)?u:_}).map(d=>parseFloat(d.toFixed(3)))}function m(){if(n<=e+i)return[r.max];if(s==="keepSnaps")return o;const{min:d,max:g}=l;return o.slice(d,g)}return{snapsContained:a,scrollContainLimit:l}}function Jt(e,n,t){const s=n[0],i=t?s-e:Q(n);return{limit:se(i,s)}}function Zt(e,n,t,s){const r=n.min+.1,o=n.max+.1,{reachedMin:l,reachedMax:a}=se(r,o);function c(m){return m===1?a(t.get()):m===-1?l(t.get()):!1}function v(m){if(!c(m))return;const h=e*(m*-1);s.forEach(d=>d.add(h))}return{loop:v}}function Yt(e){const{max:n,length:t}=e;function s(r){const o=r-n;return t?o/-t:0}return{get:s}}function Wt(e,n,t,s,i){const{startEdge:r,endEdge:o}=e,{groupSlides:l}=i,a=p().map(n.measure),c=m(),v=h();function p(){return l(s).map(g=>Q(g)[o]-g[0][r]).map(D)}function m(){return s.map(g=>t[r]-g[r]).map(g=>-D(g))}function h(){return l(c).map(g=>g[0]).map((g,b)=>g+a[b])}return{snaps:c,snapsAligned:v}}function en(e,n,t,s,i,r){const{groupSlides:o}=i,{min:l,max:a}=s,c=v();function v(){const m=o(r),h=!e||n==="keepSnaps";return t.length===1?[r]:h?m:m.slice(l,a).map((d,g,b)=>{const u=!g,_=Re(b,g);if(u){const S=Q(b[0])+1;return st(S)}if(_){const S=he(r)-Q(b)[0]+1;return st(S,Q(b)[0])}return d})}return{slideRegistry:c}}function tn(e,n,t,s,i){const{reachedAny:r,removeOffset:o,constrain:l}=s;function a(d){return d.concat().sort((g,b)=>D(g)-D(b))[0]}function c(d){const g=e?o(d):l(d),b=n.map((_,S)=>({diff:v(_-g,0),index:S})).sort((_,S)=>D(_.diff)-D(S.diff)),{index:u}=b[0];return{index:u,distance:g}}function v(d,g){const b=[d,d+t,d-t];if(!e)return d;if(!g)return a(b);const u=b.filter(_=>Ce(_)===g);return u.length?a(u):Q(b)-t}function p(d,g){const b=n[d]-i.get(),u=v(b,g);return{index:d,distance:u}}function m(d,g){const b=i.get()+d,{index:u,distance:_}=c(b),S=!e&&r(b);if(!g||S)return{index:u,distance:d};const x=n[u]-_,P=d+v(x,0);return{index:u,distance:P}}return{byDistance:m,byIndex:p,shortcut:v}}function nn(e,n,t,s,i,r,o){function l(p){const m=p.distance,h=p.index!==n.get();r.add(m),m&&(s.duration()?e.start():(e.update(),e.render(1),e.update())),h&&(t.set(n.get()),n.set(p.index),o.emit("select"))}function a(p,m){const h=i.byDistance(p,m);l(h)}function c(p,m){const h=n.clone().set(p),d=i.byIndex(h.get(),m);l(d)}return{distance:a,index:c}}function on(e,n,t,s,i,r,o,l){const a={passive:!0,capture:!0};let c=0;function v(h){if(!l)return;function d(g){if(new Date().getTime()-c>10)return;o.emit("slideFocusStart"),e.scrollLeft=0;const _=t.findIndex(S=>S.includes(g));Be(_)&&(i.useDuration(0),s.index(_,0),o.emit("slideFocus"))}r.add(document,"keydown",p,!1),n.forEach((g,b)=>{r.add(g,"focus",u=>{(Te(l)||l(h,u))&&d(b)},a)})}function p(h){h.code==="Tab"&&(c=new Date().getTime())}return{init:v}}function me(e){let n=e;function t(){return n}function s(a){n=o(a)}function i(a){n+=o(a)}function r(a){n-=o(a)}function o(a){return Be(a)?a:a.get()}return{get:t,set:s,add:i,subtract:r}}function vt(e,n){const t=e.scroll==="x"?o:l,s=n.style;let i=null,r=!1;function o(m){return`translate3d(${m}px,0px,0px)`}function l(m){return`translate3d(0px,${m}px,0px)`}function a(m){if(r)return;const h=Rt(e.direction(m));h!==i&&(s.transform=t(h),i=h)}function c(m){r=!m}function v(){r||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:v,to:a,toggleActive:c}}function rn(e,n,t,s,i,r,o,l,a){const v=ve(i),p=ve(i).reverse(),m=u().concat(_());function h(O,f){return O.reduce((w,L)=>w-i[L],f)}function d(O,f){return O.reduce((w,L)=>h(w,f)>0?w.concat([L]):w,[])}function g(O){return r.map((f,w)=>({start:f-s[w]+.5+O,end:f+n-.5+O}))}function b(O,f,w){const L=g(f);return O.map(j=>{const A=w?0:-t,C=w?t:0,R=w?"end":"start",F=L[j][R];return{index:j,loopPoint:F,slideLocation:me(-1),translate:vt(e,a[j]),target:()=>l.get()>F?A:C}})}function u(){const O=o[0],f=d(p,O);return b(f,t,!1)}function _(){const O=n-o[0]-1,f=d(v,O);return b(f,-t,!0)}function S(){return m.every(({index:O})=>{const f=v.filter(w=>w!==O);return h(f,n)<=.1})}function x(){m.forEach(O=>{const{target:f,translate:w,slideLocation:L}=O,j=f();j!==L.get()&&(w.to(j),L.set(j))})}function P(){m.forEach(O=>O.translate.clear())}return{canLoop:S,clear:P,loop:x,loopPoints:m}}function sn(e,n,t){let s,i=!1;function r(a){if(!t)return;function c(v){for(const p of v)if(p.type==="childList"){a.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(v=>{i||(Te(t)||t(a,v))&&c(v)}),s.observe(e,{childList:!0})}function o(){s&&s.disconnect(),i=!0}return{init:r,destroy:o}}function an(e,n,t,s){const i={};let r=null,o=null,l,a=!1;function c(){l=new IntersectionObserver(d=>{a||(d.forEach(g=>{const b=n.indexOf(g.target);i[b]=g}),r=null,o=null,t.emit("slidesInView"))},{root:e.parentElement,threshold:s}),n.forEach(d=>l.observe(d))}function v(){l&&l.disconnect(),a=!0}function p(d){return be(i).reduce((g,b)=>{const u=parseInt(b),{isIntersecting:_}=i[u];return(d&&_||!d&&!_)&&g.push(u),g},[])}function m(d=!0){if(d&&r)return r;if(!d&&o)return o;const g=p(d);return d&&(r=g),d||(o=g),g}return{init:c,destroy:v,get:m}}function cn(e,n,t,s,i,r){const{measureSize:o,startEdge:l,endEdge:a}=e,c=t[0]&&i,v=d(),p=g(),m=t.map(o),h=b();function d(){if(!c)return 0;const _=t[0];return D(n[l]-_[l])}function g(){if(!c)return 0;const _=r.getComputedStyle(Q(s));return parseFloat(_.getPropertyValue(`margin-${a}`))}function b(){return t.map((_,S,x)=>{const P=!S,T=Re(x,S);return P?m[S]+v:T?m[S]+p:x[S+1][l]-_[l]}).map(D)}return{slideSizes:m,slideSizesWithGaps:h,startGap:v,endGap:p}}function ln(e,n,t,s,i,r,o,l,a){const{startEdge:c,endEdge:v,direction:p}=e,m=Be(t);function h(u,_){return ve(u).filter(S=>S%_===0).map(S=>u.slice(S,S+_))}function d(u){return u.length?ve(u).reduce((_,S,x)=>{const P=Q(_)||0,T=P===0,O=S===he(u),f=i[c]-r[P][c],w=i[c]-r[S][v],L=!s&&T?p(o):0,j=!s&&O?p(l):0,A=D(w-j-(f+L));return x&&A>n+a&&_.push(S),O&&_.push(u.length),_},[]).map((_,S,x)=>{const P=Math.max(x[S-1]||0);return u.slice(P,_)}):[]}function g(u){return m?h(u,t):d(u)}return{groupSlides:g}}function un(e,n,t,s,i,r,o){const{align:l,axis:a,direction:c,startIndex:v,loop:p,duration:m,dragFree:h,dragThreshold:d,inViewThreshold:g,slidesToScroll:b,skipSnaps:u,containScroll:_,watchResize:S,watchSlides:x,watchDrag:P,watchFocus:T}=r,O=2,f=Ht(),w=f.measure(n),L=t.map(f.measure),j=Nt(a,c),A=j.measureSize(w),C=$t(A),R=Ft(l,A),F=!p&&!!_,X=p||!!_,{slideSizes:$,slideSizesWithGaps:N,startGap:k,endGap:q}=cn(j,w,L,t,X,i),K=ln(j,A,b,p,w,L,k,q,O),{snaps:ie,snapsAligned:ae}=Wt(j,R,w,L,K),Y=-Q(ie)+Q(N),{snapsContained:fe,scrollContainLimit:de}=Xt(A,Y,ae,_,O),V=F?fe:ae,{limit:z}=Jt(Y,V,p),W=gt(he(V),v,p),U=W.clone(),I=ve(t),y=({dragHandler:ce,scrollBody:Ie,scrollBounds:De,options:{loop:ye}})=>{ye||De.constrain(ce.pointerDown()),Ie.seek()},E=({scrollBody:ce,translate:Ie,location:De,offsetLocation:ye,previousLocation:ht,scrollLooper:yt,slideLooper:St,dragHandler:wt,animation:Ot,eventHandler:Ge,scrollBounds:Lt,options:{loop:He}},$e)=>{const qe=ce.settled(),xt=!Lt.shouldConstrain(),Ke=He?qe:qe&&xt;Ke&&!wt.pointerDown()&&(Ot.stop(),Ge.emit("settle")),Ke||Ge.emit("scroll");const Tt=De.get()*$e+ht.get()*(1-$e);ye.set(Tt),He&&(yt.loop(ce.direction()),St.loop()),Ie.to(ye.get())},M=Vt(s,i,()=>y(Ee),ce=>E(Ee,ce)),B=.68,J=V[W.get()],ee=me(J),oe=me(J),ne=me(J),re=me(J),pe=Kt(ee,ne,oe,re,m,B),je=tn(p,V,Y,z,re),Pe=nn(M,W,U,pe,je,re,o),Ve=Yt(z),Ne=_e(),bt=an(n,t,o,g),{slideRegistry:Ue}=en(F,_,V,de,K,I),_t=on(e,t,Ue,Pe,pe,Ne,o,T),Ee={ownerDocument:s,ownerWindow:i,eventHandler:o,containerRect:w,slideRects:L,animation:M,axis:j,dragHandler:Ut(j,e,s,i,re,Gt(j,i),ee,M,Pe,pe,je,W,o,C,h,d,u,B,P),eventStore:Ne,percentOfView:C,index:W,indexPrevious:U,limit:z,location:ee,offsetLocation:ne,previousLocation:oe,options:r,resizeHandler:qt(n,o,i,t,j,S,f),scrollBody:pe,scrollBounds:Qt(z,ne,re,pe,C),scrollLooper:Zt(Y,z,ne,[ee,ne,oe,re]),scrollProgress:Ve,scrollSnapList:V.map(Ve.get),scrollSnaps:V,scrollTarget:je,scrollTo:Pe,slideLooper:rn(j,A,Y,$,N,ie,V,ne,t),slideFocus:_t,slidesHandler:sn(n,o,x),slidesInView:bt,slideIndexes:I,slideRegistry:Ue,slidesToScroll:K,target:re,translate:vt(j,n)};return Ee}function fn(){let e={},n;function t(c){n=c}function s(c){return e[c]||[]}function i(c){return s(c).forEach(v=>v(n,c)),a}function r(c,v){return e[c]=s(c).concat([v]),a}function o(c,v){return e[c]=s(c).filter(p=>p!==v),a}function l(){e={}}const a={init:t,emit:i,off:o,on:r,clear:l};return a}const dn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function pn(e){function n(r,o){return mt(r,o||{})}function t(r){const o=r.breakpoints||{},l=be(o).filter(a=>e.matchMedia(a).matches).map(a=>o[a]).reduce((a,c)=>n(a,c),{});return n(r,l)}function s(r){return r.map(o=>be(o.breakpoints||{})).reduce((o,l)=>o.concat(l),[]).map(e.matchMedia)}return{mergeOptions:n,optionsAtMedia:t,optionsMediaQueries:s}}function mn(e){let n=[];function t(r,o){return n=o.filter(({options:l})=>e.optionsAtMedia(l).active!==!1),n.forEach(l=>l.init(r,e)),o.reduce((l,a)=>Object.assign(l,{[a.name]:a}),{})}function s(){n=n.filter(r=>r.destroy())}return{init:t,destroy:s}}function xe(e,n,t){const s=e.ownerDocument,i=s.defaultView,r=pn(i),o=mn(r),l=_e(),a=fn(),{mergeOptions:c,optionsAtMedia:v,optionsMediaQueries:p}=r,{on:m,off:h,emit:d}=a,g=j;let b=!1,u,_=c(dn,xe.globalOptions),S=c(_),x=[],P,T,O;function f(){const{container:I,slides:y}=S;T=(Me(I)?e.querySelector(I):I)||e.children[0];const M=Me(y)?T.querySelectorAll(y):y;O=[].slice.call(M||T.children)}function w(I){const y=un(e,T,O,s,i,I,a);if(I.loop&&!y.slideLooper.canLoop()){const E=Object.assign({},I,{loop:!1});return w(E)}return y}function L(I,y){b||(_=c(_,I),S=v(_),x=y||x,f(),u=w(S),p([_,...x.map(({options:E})=>E)]).forEach(E=>l.add(E,"change",j)),S.active&&(u.translate.to(u.location.get()),u.animation.init(),u.slidesInView.init(),u.slideFocus.init(U),u.eventHandler.init(U),u.resizeHandler.init(U),u.slidesHandler.init(U),u.options.loop&&u.slideLooper.loop(),T.offsetParent&&O.length&&u.dragHandler.init(U),P=o.init(U,x)))}function j(I,y){const E=K();A(),L(c({startIndex:E},I),y),a.emit("reInit")}function A(){u.dragHandler.destroy(),u.eventStore.clear(),u.translate.clear(),u.slideLooper.clear(),u.resizeHandler.destroy(),u.slidesHandler.destroy(),u.slidesInView.destroy(),u.animation.destroy(),o.destroy(),l.clear()}function C(){b||(b=!0,l.clear(),A(),a.emit("destroy"),a.clear())}function R(I,y,E){!S.active||b||(u.scrollBody.useBaseFriction().useDuration(y===!0?0:S.duration),u.scrollTo.index(I,E||0))}function F(I){const y=u.index.add(1).get();R(y,I,-1)}function X(I){const y=u.index.add(-1).get();R(y,I,1)}function $(){return u.index.add(1).get()!==K()}function N(){return u.index.add(-1).get()!==K()}function k(){return u.scrollSnapList}function q(){return u.scrollProgress.get(u.location.get())}function K(){return u.index.get()}function ie(){return u.indexPrevious.get()}function ae(){return u.slidesInView.get()}function Y(){return u.slidesInView.get(!1)}function fe(){return P}function de(){return u}function V(){return e}function z(){return T}function W(){return O}const U={canScrollNext:$,canScrollPrev:N,containerNode:z,internalEngine:de,destroy:C,off:h,on:m,emit:d,plugins:fe,previousScrollSnap:ie,reInit:g,rootNode:V,scrollNext:F,scrollPrev:X,scrollProgress:q,scrollSnapList:k,scrollTo:R,selectedScrollSnap:K,slideNodes:W,slidesInView:ae,slidesNotInView:Y};return L(n,t),setTimeout(()=>a.emit("init"),0),U}xe.globalOptions=void 0;function Fe(e={},n=[]){const t=Qe(e),s=Qe(n);let i=t?e.value:e,r=s?n.value:n;const o=Xe(),l=Xe();function a(){l.value&&l.value.reInit(i,r)}return ct(()=>{!zt()||!o.value||(xe.globalOptions=Fe.globalOptions,l.value=xe(o.value,i,r))}),jt(()=>{l.value&&l.value.destroy()}),t&&Ae(e,c=>{ze(i,c)||(i=c,a())}),s&&Ae(n,c=>{Bt(r,c)||(r=c,a())}),[o,l]}Fe.globalOptions=void 0;const gn={slots:{root:"relative focus:outline-none",viewport:"overflow-hidden",container:"flex items-start",item:"min-w-0 shrink-0 basis-full",controls:"",arrows:"",prev:"absolute rounded-full",next:"absolute rounded-full",dots:"absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",dot:["cursor-pointer size-3 bg-[var(--ui-border-accented)] rounded-full","transition"]},variants:{orientation:{vertical:{container:"flex-col -mt-4",item:"pt-4",prev:"-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",next:"-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"},horizontal:{container:"flex-row -ms-4",item:"ps-4",prev:"-start-12 top-1/2 -translate-y-1/2",next:"-end-12 top-1/2 -translate-y-1/2"}},active:{true:{dot:"bg-[var(--ui-border-inverted)]"}}},defaultVariants:{orientation:"horizontal"}},vn=["aria-label","onClick"],bn=lt;var it;const _n=Le({extend:Le(gn),...((it=bn.ui)==null?void 0:it.carousel)||{}}),Nn=ut({__name:"Carousel",props:{as:{},prev:{},prevIcon:{},next:{},nextIcon:{},arrows:{type:Boolean,default:!1},dots:{type:Boolean,default:!1},orientation:{default:"horizontal"},items:{},autoplay:{type:[Boolean,Object],default:!1},autoScroll:{type:[Boolean,Object],default:!1},autoHeight:{type:[Boolean,Object],default:!1},classNames:{type:[Boolean,Object],default:!1},fade:{type:[Boolean,Object],default:!1},wheelGestures:{type:Boolean,default:!1},class:{},ui:{},align:{type:[String,Function],default:"center"},containScroll:{type:[Boolean,String],default:"trimSnaps"},slidesToScroll:{default:1},dragFree:{type:Boolean,default:!1},dragThreshold:{default:10},inViewThreshold:{default:0},loop:{type:Boolean,default:!1},skipSnaps:{type:Boolean,default:!1},duration:{default:25},startIndex:{default:0},watchDrag:{type:[Boolean,Function],default:!0},watchResize:{type:[Boolean,Function],default:!0},watchSlides:{type:[Boolean,Function],default:!0},watchFocus:{type:[Boolean,Function],default:!0},active:{type:Boolean,default:!0},breakpoints:{default:()=>({})}},setup(e,{expose:n}){const t=e,s=Pt(),{dir:i,t:r}=Et(),o=It(Dt(t,"active","align","breakpoints","containScroll","dragFree","dragThreshold","duration","inViewThreshold","loop","skipSnaps","slidesToScroll","startIndex","watchDrag","watchResize","watchSlides","watchFocus")),l=Se(()=>t.prevIcon||(i.value==="rtl"?s.ui.icons.arrowRight:s.ui.icons.arrowLeft)),a=Se(()=>t.nextIcon||(i.value==="rtl"?s.ui.icons.arrowLeft:s.ui.icons.arrowRight)),c=Se(()=>_n({orientation:t.orientation})),v=Se(()=>({...t.fade?{align:"center",containScroll:!1}:{},...o.value,axis:t.orientation==="horizontal"?"x":"y",direction:i.value==="rtl"?"rtl":"ltr"})),p=At(async()=>{const f=[];if(t.autoplay){const w=await le(()=>import("./D5UtXt1P.js"),[],import.meta.url).then(L=>L.default);f.push(w(typeof t.autoplay=="boolean"?{}:t.autoplay))}if(t.autoScroll){const w=await le(()=>import("./LVG_eY9u.js"),[],import.meta.url).then(L=>L.default);f.push(w(typeof t.autoScroll=="boolean"?{}:t.autoScroll))}if(t.autoHeight){const w=await le(()=>import("./Ddyvc1_j.js"),[],import.meta.url).then(L=>L.default);f.push(w(typeof t.autoHeight=="boolean"?{}:t.autoHeight))}if(t.classNames){const w=await le(()=>import("./mhJ-osCf.js"),[],import.meta.url).then(L=>L.default);f.push(w(typeof t.classNames=="boolean"?{}:t.classNames))}if(t.fade){const w=await le(()=>import("./wrqBHFeW.js"),[],import.meta.url).then(L=>L.default);f.push(w(typeof t.fade=="boolean"?{}:t.fade))}if(t.wheelGestures){const{WheelGesturesPlugin:w}=await le(async()=>{const{WheelGesturesPlugin:L}=await import("./fa6USE6u.js");return{WheelGesturesPlugin:L}},[],import.meta.url);f.push(w(typeof t.wheelGestures=="boolean"?{}:t.wheelGestures))}return f}),[m,h]=Fe(v.value,p.value);Ae([v,p],()=>{var f;(f=h.value)==null||f.reInit(v.value,p.value)});function d(){var f;(f=h.value)==null||f.scrollPrev()}function g(){var f;(f=h.value)==null||f.scrollNext()}function b(f){var w;(w=h.value)==null||w.scrollTo(f)}function u(f){const w=t.orientation==="vertical"?"ArrowUp":"ArrowLeft",L=t.orientation==="vertical"?"ArrowDown":"ArrowRight";if(f.key===w){f.preventDefault(),d();return}f.key===L&&(f.preventDefault(),g())}const _=we(!1),S=we(!1),x=we(0),P=we([]);function T(f){P.value=(f==null?void 0:f.scrollSnapList())||[]}function O(f){_.value=(f==null?void 0:f.canScrollNext())||!1,S.value=(f==null?void 0:f.canScrollPrev())||!1,x.value=(f==null?void 0:f.selectedScrollSnap())||0}return ct(()=>{var f,w,L,j,A;h.value&&((f=h.value)==null||f.on("init",T),(w=h.value)==null||w.on("init",O),(L=h.value)==null||L.on("reInit",T),(j=h.value)==null||j.on("reInit",O),(A=h.value)==null||A.on("select",O))}),n({emblaRef:m,emblaApi:h}),(f,w)=>{var L;return G(),ft(te(pt),{as:f.as,role:"region","aria-roledescription":"carousel",tabindex:"0",class:H(c.value.root({class:[t.class,(L=t.ui)==null?void 0:L.root]})),onKeydown:u},{default:dt(()=>{var j,A,C,R,F,X,$;return[Je("div",{ref_key:"emblaRef",ref:m,class:H(c.value.viewport({class:(j=t.ui)==null?void 0:j.viewport}))},[Je("div",{class:H(c.value.container({class:(A=t.ui)==null?void 0:A.container}))},[(G(!0),Z(Ze,null,Ye(f.items,(N,k)=>{var q;return G(),Z("div",{key:k,role:"group","aria-roledescription":"slide",class:H(c.value.item({class:(q=t.ui)==null?void 0:q.item}))},[Oe(f.$slots,"default",{item:N,index:k})],2)}),128))],2)],2),f.arrows||f.dots?(G(),Z("div",{key:0,class:H(c.value.controls({class:(C=t.ui)==null?void 0:C.controls}))},[f.arrows?(G(),Z("div",{key:0,class:H(c.value.arrows({class:(R=t.ui)==null?void 0:R.arrows}))},[We(et,tt({disabled:!S.value,icon:l.value,size:"md",color:"neutral",variant:"outline","aria-label":te(r)("carousel.prev")},typeof f.prev=="object"?f.prev:void 0,{class:c.value.prev({class:(F=t.ui)==null?void 0:F.prev}),onClick:d}),null,16,["disabled","icon","aria-label","class"]),We(et,tt({disabled:!_.value,icon:a.value,size:"md",color:"neutral",variant:"outline","aria-label":te(r)("carousel.next")},typeof f.next=="object"?f.next:void 0,{class:c.value.next({class:(X=t.ui)==null?void 0:X.next}),onClick:g}),null,16,["disabled","icon","aria-label","class"])],2)):ue("",!0),f.dots?(G(),Z("div",{key:1,class:H(c.value.dots({class:($=t.ui)==null?void 0:$.dots}))},[(G(!0),Z(Ze,null,Ye(P.value,(N,k)=>{var q;return G(),Z("button",{key:k,"aria-label":te(r)("carousel.goto",{slide:k+1}),class:H(c.value.dot({class:(q=t.ui)==null?void 0:q.dot,active:x.value===k})),onClick:K=>b(k)},null,10,vn)}),128))],2)):ue("",!0)],2)):ue("",!0)]}),_:3},8,["as","class"])}}}),hn={slots:{root:"bg-[var(--ui-bg)] ring ring-[var(--ui-border)] divide-y divide-[var(--ui-border)] rounded-[calc(var(--ui-radius)*2)] shadow-sm",header:"p-4 sm:px-6",body:"p-4 sm:p-6",footer:"p-4 sm:px-6"}},yn=lt;var at;const Sn=Le({extend:Le(hn),...((at=yn.ui)==null?void 0:at.card)||{}}),Un=ut({__name:"Card",props:{as:{},class:{},ui:{}},setup(e){const n=e,t=Mt(),s=Sn();return(i,r)=>{var o;return G(),ft(te(pt),{as:i.as,class:H(te(s).root({class:[n.class,(o=n.ui)==null?void 0:o.root]}))},{default:dt(()=>{var l,a,c;return[t.header?(G(),Z("div",{key:0,class:H(te(s).header({class:(l=n.ui)==null?void 0:l.header}))},[Oe(i.$slots,"header")],2)):ue("",!0),t.default?(G(),Z("div",{key:1,class:H(te(s).body({class:(a=n.ui)==null?void 0:a.body}))},[Oe(i.$slots,"default")],2)):ue("",!0),t.footer?(G(),Z("div",{key:2,class:H(te(s).footer({class:(c=n.ui)==null?void 0:c.footer}))},[Oe(i.$slots,"footer")],2)):ue("",!0)]}),_:3},8,["as","class"])}}}),wn=""+new URL("olivia-1.Kfr_71L1.jpg",import.meta.url).href,Gn=Object.freeze(Object.defineProperty({__proto__:null,default:wn},Symbol.toStringTag,{value:"Module"})),On=""+new URL("olivia-10.Dfu75pyJ.jpg",import.meta.url).href,Hn=Object.freeze(Object.defineProperty({__proto__:null,default:On},Symbol.toStringTag,{value:"Module"})),Ln=""+new URL("olivia-11.D5qyh4Xt.jpg",import.meta.url).href,$n=Object.freeze(Object.defineProperty({__proto__:null,default:Ln},Symbol.toStringTag,{value:"Module"})),xn=""+new URL("olivia-12.BRkZ1EHE.jpg",import.meta.url).href,qn=Object.freeze(Object.defineProperty({__proto__:null,default:xn},Symbol.toStringTag,{value:"Module"})),Tn=""+new URL("olivia-13.C9bOCSvl.jpg",import.meta.url).href,Kn=Object.freeze(Object.defineProperty({__proto__:null,default:Tn},Symbol.toStringTag,{value:"Module"})),jn=""+new URL("olivia-14.mukgrpZ6.jpg",import.meta.url).href,Qn=Object.freeze(Object.defineProperty({__proto__:null,default:jn},Symbol.toStringTag,{value:"Module"})),Pn=""+new URL("olivia-15.DUs3ZQC1.jpg",import.meta.url).href,Xn=Object.freeze(Object.defineProperty({__proto__:null,default:Pn},Symbol.toStringTag,{value:"Module"})),En=""+new URL("olivia-16.Bo0ZhLFq.jpg",import.meta.url).href,Jn=Object.freeze(Object.defineProperty({__proto__:null,default:En},Symbol.toStringTag,{value:"Module"})),In=""+new URL("olivia-17.Dc5fJ2LV.jpg",import.meta.url).href,Zn=Object.freeze(Object.defineProperty({__proto__:null,default:In},Symbol.toStringTag,{value:"Module"})),Dn=""+new URL("olivia-18.DAbBDXK4.jpg",import.meta.url).href,Yn=Object.freeze(Object.defineProperty({__proto__:null,default:Dn},Symbol.toStringTag,{value:"Module"})),An=""+new URL("olivia-2.D6ucoABh.jpg",import.meta.url).href,Wn=Object.freeze(Object.defineProperty({__proto__:null,default:An},Symbol.toStringTag,{value:"Module"})),Mn=""+new URL("olivia-3.Dzfqw48S.jpg",import.meta.url).href,eo=Object.freeze(Object.defineProperty({__proto__:null,default:Mn},Symbol.toStringTag,{value:"Module"})),kn=""+new URL("olivia-4.Deziuzbl.jpg",import.meta.url).href,to=Object.freeze(Object.defineProperty({__proto__:null,default:kn},Symbol.toStringTag,{value:"Module"})),zn=""+new URL("olivia-5.2E2R17Y1.jpg",import.meta.url).href,no=Object.freeze(Object.defineProperty({__proto__:null,default:zn},Symbol.toStringTag,{value:"Module"})),Bn=""+new URL("olivia-6.B_2y8xyQ.jpg",import.meta.url).href,oo=Object.freeze(Object.defineProperty({__proto__:null,default:Bn},Symbol.toStringTag,{value:"Module"})),Cn=""+new URL("olivia-7.ChC2caB8.jpg",import.meta.url).href,ro=Object.freeze(Object.defineProperty({__proto__:null,default:Cn},Symbol.toStringTag,{value:"Module"})),Rn=""+new URL("olivia-8.BwXnnqBx.jpg",import.meta.url).href,so=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"})),Fn=""+new URL("olivia-9.C1VwIuw0.jpg",import.meta.url).href,io=Object.freeze(Object.defineProperty({__proto__:null,default:Fn},Symbol.toStringTag,{value:"Module"}));export{Gn as _,Hn as a,$n as b,qn as c,Kn as d,Qn as e,Xn as f,Jn as g,Zn as h,Yn as i,Wn as j,eo as k,to as l,no as m,oo as n,ro as o,so as p,io as q,Nn as r,Un as s};