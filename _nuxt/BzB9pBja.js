import{l as ot,s as rt,m as pt,n as It,p as Ve,q as Pe,r as mt,f as De,v as Et,x as kt,y as Dt,z as At,A as Oe,B as Mt,C as Le,o as k,j as Ae,w as be,a as B,D as J,c as z,F as Ie,E as Ee,G as Te,b as K,H as st,I as it,i as I,k as Q,P as gt,J as de,K as Ct,t as pe,d as Ne,L as zt,M as Bt,N as Rt,h as Ft}from"./BcCQ2W42.js";import{u as Nt,q as Vt}from"./Uop-7cYy.js";function Ut(t){return Object.prototype.toString.call(t)==="[object Object]"}function lt(t){return Ut(t)||Array.isArray(t)}function $t(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function He(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;const l=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(n.breakpoints||{}));return l!==s?!1:e.every(o=>{const i=t[o],a=n[o];return typeof i=="function"?`${i}`==`${a}`:!lt(i)||!lt(a)?i===a:He(i,a)})}function at(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function Ht(t,n){if(t.length!==n.length)return!1;const e=at(t),r=at(n);return e.every((l,s)=>{const o=r[s];return He(l,o)})}function Ge(t){return typeof t=="number"}function Ue(t){return typeof t=="string"}function Me(t){return typeof t=="boolean"}function ct(t){return Object.prototype.toString.call(t)==="[object Object]"}function A(t){return Math.abs(t)}function qe(t){return Math.sign(t)}function ye(t,n){return A(t-n)}function Gt(t,n){if(t===0||n===0||A(t)<=A(n))return 0;const e=ye(A(t),A(n));return A(e/t)}function qt(t){return Math.round(t*100)/100}function he(t){return Se(t).map(Number)}function W(t){return t[we(t)]}function we(t){return Math.max(0,t.length-1)}function Ke(t,n){return n===we(t)}function ut(t,n=0){return Array.from(Array(t),(e,r)=>n+r)}function Se(t){return Object.keys(t)}function _t(t,n){return[t,n].reduce((e,r)=>(Se(r).forEach(l=>{const s=e[l],o=r[l],i=ct(s)&&ct(o);e[l]=i?_t(s,o):o}),e),{})}function $e(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Kt(t,n){const e={start:r,center:l,end:s};function r(){return 0}function l(a){return s(a)/2}function s(a){return n-a}function o(a,c){return Ue(t)?e[t](a):t(n,a,c)}return{measure:o}}function xe(){let t=[];function n(l,s,o,i={passive:!0}){let a;if("addEventListener"in l)l.addEventListener(s,o,i),a=()=>l.removeEventListener(s,o,i);else{const c=l;c.addListener(o),a=()=>c.removeListener(o)}return t.push(a),r}function e(){t=t.filter(l=>l())}const r={add:n,clear:e};return r}function Jt(t,n,e,r){const l=xe(),s=1e3/60;let o=null,i=0,a=0;function c(){l.add(t,"visibilitychange",()=>{t.hidden&&f()})}function _(){v(),l.clear()}function u(b){if(!a)return;o||(o=b,e(),e());const d=b-o;for(o=b,i+=d;i>=s;)e(),i-=s;const y=i/s;r(y),a&&(a=n.requestAnimationFrame(u))}function m(){a||(a=n.requestAnimationFrame(u))}function v(){n.cancelAnimationFrame(a),o=null,i=0,a=0}function f(){o=null,i=0}return{init:c,destroy:_,start:m,stop:v,update:e,render:r}}function Qt(t,n){const e=n==="rtl",r=t==="y",l=r?"y":"x",s=r?"x":"y",o=!r&&e?-1:1,i=_(),a=u();function c(f){const{height:g,width:b}=f;return r?g:b}function _(){return r?"top":e?"right":"left"}function u(){return r?"bottom":e?"left":"right"}function m(f){return f*o}return{scroll:l,cross:s,startEdge:i,endEdge:a,measureSize:c,direction:m}}function ae(t=0,n=0){const e=A(t-n);function r(c){return c<t}function l(c){return c>n}function s(c){return r(c)||l(c)}function o(c){return s(c)?r(c)?t:n:c}function i(c){return e?c-e*Math.ceil((c-n)/e):c}return{length:e,max:n,min:t,constrain:o,reachedAny:s,reachedMax:l,reachedMin:r,removeOffset:i}}function vt(t,n,e){const{constrain:r}=ae(0,t),l=t+1;let s=o(n);function o(m){return e?A((l+m)%l):r(m)}function i(){return s}function a(m){return s=o(m),u}function c(m){return _().set(i()+m)}function _(){return vt(t,i(),e)}const u={get:i,set:a,add:c,clone:_};return u}function Xt(t,n,e,r,l,s,o,i,a,c,_,u,m,v,f,g,b,d,y){const{cross:S,direction:O}=t,P=["INPUT","SELECT","TEXTAREA"],L={passive:!1},w=xe(),p=xe(),x=ae(50,225).constrain(v.measure(20)),j={mouse:300,touch:400},T={mouse:500,touch:600},M=f?43:25;let V=!1,U=0,$=0,ee=!1,X=!1,G=!1,R=!1;function Z(h){if(!y)return;function E(N){(Me(y)||y(h,N))&&ge(N)}const C=n;w.add(C,"dragstart",N=>N.preventDefault(),L).add(C,"touchmove",()=>{},L).add(C,"touchend",()=>{}).add(C,"touchstart",E).add(C,"mousedown",E).add(C,"touchcancel",F).add(C,"contextmenu",F).add(C,"click",oe,!0)}function Y(){w.clear(),p.clear()}function ce(){const h=R?e:n;p.add(h,"touchmove",H,L).add(h,"touchend",F).add(h,"mousemove",H,L).add(h,"mouseup",F)}function ue(h){const E=h.nodeName||"";return P.includes(E)}function ne(){return(f?T:j)[R?"mouse":"touch"]}function me(h,E){const C=u.add(qe(h)*-1),N=_.byDistance(h,!f).distance;return f||A(h)<x?N:b&&E?N*.5:_.byIndex(C.get(),0).distance}function ge(h){const E=$e(h,r);R=E,G=f&&E&&!h.buttons&&V,V=ye(l.get(),o.get())>=2,!(E&&h.button!==0)&&(ue(h.target)||(ee=!0,s.pointerDown(h),c.useFriction(0).useDuration(0),l.set(o),ce(),U=s.readPoint(h),$=s.readPoint(h,S),m.emit("pointerDown")))}function H(h){if(!$e(h,r)&&h.touches.length>=2)return F(h);const C=s.readPoint(h),N=s.readPoint(h,S),te=ye(C,U),re=ye(N,$);if(!X&&!R&&(!h.cancelable||(X=te>re,!X)))return F(h);const ie=s.pointerMove(h);te>g&&(G=!0),c.useFriction(.3).useDuration(.75),i.start(),l.add(O(ie)),h.preventDefault()}function F(h){const C=_.byDistance(0,!1).index!==u.get(),N=s.pointerUp(h)*ne(),te=me(O(N),C),re=Gt(N,te),ie=M-10*re,se=d+re/50;X=!1,ee=!1,p.clear(),c.useDuration(ie).useFriction(se),a.distance(te,!f),R=!1,m.emit("pointerUp")}function oe(h){G&&(h.stopPropagation(),h.preventDefault(),G=!1)}function q(){return ee}return{init:Z,destroy:Y,pointerDown:q}}function Zt(t,n){let r,l;function s(u){return u.timeStamp}function o(u,m){const f=`client${(m||t.scroll)==="x"?"X":"Y"}`;return($e(u,n)?u:u.touches[0])[f]}function i(u){return r=u,l=u,o(u)}function a(u){const m=o(u)-o(l),v=s(u)-s(r)>170;return l=u,v&&(r=u),m}function c(u){if(!r||!l)return 0;const m=o(l)-o(r),v=s(u)-s(r),f=s(u)-s(l)>170,g=m/v;return v&&!f&&A(g)>.1?g:0}return{pointerDown:i,pointerMove:a,pointerUp:c,readPoint:o}}function Yt(){function t(e){const{offsetTop:r,offsetLeft:l,offsetWidth:s,offsetHeight:o}=e;return{top:r,right:l+s,bottom:r+o,left:l,width:s,height:o}}return{measure:t}}function Wt(t){function n(r){return t*(r/100)}return{measure:n}}function en(t,n,e,r,l,s,o){const i=[t].concat(r);let a,c,_=[],u=!1;function m(b){return l.measureSize(o.measure(b))}function v(b){if(!s)return;c=m(t),_=r.map(m);function d(y){for(const S of y){if(u)return;const O=S.target===t,P=r.indexOf(S.target),L=O?c:_[P],w=m(O?t:r[P]);if(A(w-L)>=.5){b.reInit(),n.emit("resize");break}}}a=new ResizeObserver(y=>{(Me(s)||s(b,y))&&d(y)}),e.requestAnimationFrame(()=>{i.forEach(y=>a.observe(y))})}function f(){u=!0,a&&a.disconnect()}return{init:v,destroy:f}}function tn(t,n,e,r,l,s){let o=0,i=0,a=l,c=s,_=t.get(),u=0;function m(){const L=r.get()-t.get(),w=!a;let p=0;return w?(o=0,e.set(r),t.set(r),p=L):(e.set(t),o+=L/a,o*=c,_+=o,t.add(o),p=_-u),i=qe(p),u=_,P}function v(){const L=r.get()-n.get();return A(L)<.001}function f(){return a}function g(){return i}function b(){return o}function d(){return S(l)}function y(){return O(s)}function S(L){return a=L,P}function O(L){return c=L,P}const P={direction:g,duration:f,velocity:b,seek:m,settled:v,useBaseFriction:y,useBaseDuration:d,useFriction:O,useDuration:S};return P}function nn(t,n,e,r,l){const s=l.measure(10),o=l.measure(50),i=ae(.1,.99);let a=!1;function c(){return!(a||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function _(v){if(!c())return;const f=t.reachedMin(n.get())?"min":"max",g=A(t[f]-n.get()),b=e.get()-n.get(),d=i.constrain(g/o);e.subtract(b*d),!v&&A(b)<s&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())}function u(v){a=!v}return{shouldConstrain:c,constrain:_,toggleActive:u}}function on(t,n,e,r,l){const s=ae(-n+t,0),o=u(),i=_(),a=m();function c(f,g){return ye(f,g)<=1}function _(){const f=o[0],g=W(o),b=o.lastIndexOf(f),d=o.indexOf(g)+1;return ae(b,d)}function u(){return e.map((f,g)=>{const{min:b,max:d}=s,y=s.constrain(f),S=!g,O=Ke(e,g);return S?d:O||c(b,y)?b:c(d,y)?d:y}).map(f=>parseFloat(f.toFixed(3)))}function m(){if(n<=t+l)return[s.max];if(r==="keepSnaps")return o;const{min:f,max:g}=i;return o.slice(f,g)}return{snapsContained:a,scrollContainLimit:i}}function rn(t,n,e){const r=n[0],l=e?r-t:W(n);return{limit:ae(l,r)}}function sn(t,n,e,r){const s=n.min+.1,o=n.max+.1,{reachedMin:i,reachedMax:a}=ae(s,o);function c(m){return m===1?a(e.get()):m===-1?i(e.get()):!1}function _(m){if(!c(m))return;const v=t*(m*-1);r.forEach(f=>f.add(v))}return{loop:_}}function ln(t){const{max:n,length:e}=t;function r(s){const o=s-n;return e?o/-e:0}return{get:r}}function an(t,n,e,r,l){const{startEdge:s,endEdge:o}=t,{groupSlides:i}=l,a=u().map(n.measure),c=m(),_=v();function u(){return i(r).map(g=>W(g)[o]-g[0][s]).map(A)}function m(){return r.map(g=>e[s]-g[s]).map(g=>-A(g))}function v(){return i(c).map(g=>g[0]).map((g,b)=>g+a[b])}return{snaps:c,snapsAligned:_}}function cn(t,n,e,r,l,s){const{groupSlides:o}=l,{min:i,max:a}=r,c=_();function _(){const m=o(s),v=!t||n==="keepSnaps";return e.length===1?[s]:v?m:m.slice(i,a).map((f,g,b)=>{const d=!g,y=Ke(b,g);if(d){const S=W(b[0])+1;return ut(S)}if(y){const S=we(s)-W(b)[0]+1;return ut(S,W(b)[0])}return f})}return{slideRegistry:c}}function un(t,n,e,r,l){const{reachedAny:s,removeOffset:o,constrain:i}=r;function a(f){return f.concat().sort((g,b)=>A(g)-A(b))[0]}function c(f){const g=t?o(f):i(f),b=n.map((y,S)=>({diff:_(y-g,0),index:S})).sort((y,S)=>A(y.diff)-A(S.diff)),{index:d}=b[0];return{index:d,distance:g}}function _(f,g){const b=[f,f+e,f-e];if(!t)return f;if(!g)return a(b);const d=b.filter(y=>qe(y)===g);return d.length?a(d):W(b)-e}function u(f,g){const b=n[f]-l.get(),d=_(b,g);return{index:f,distance:d}}function m(f,g){const b=l.get()+f,{index:d,distance:y}=c(b),S=!t&&s(b);if(!g||S)return{index:d,distance:f};const O=n[d]-y,P=f+_(O,0);return{index:d,distance:P}}return{byDistance:m,byIndex:u,shortcut:_}}function fn(t,n,e,r,l,s,o){function i(u){const m=u.distance,v=u.index!==n.get();s.add(m),m&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),v&&(e.set(n.get()),n.set(u.index),o.emit("select"))}function a(u,m){const v=l.byDistance(u,m);i(v)}function c(u,m){const v=n.clone().set(u),f=l.byIndex(v.get(),m);i(f)}return{distance:a,index:c}}function dn(t,n,e,r,l,s,o,i){const a={passive:!0,capture:!0};let c=0;function _(v){if(!i)return;function f(g){if(new Date().getTime()-c>10)return;o.emit("slideFocusStart"),t.scrollLeft=0;const y=e.findIndex(S=>S.includes(g));Ge(y)&&(l.useDuration(0),r.index(y,0),o.emit("slideFocus"))}s.add(document,"keydown",u,!1),n.forEach((g,b)=>{s.add(g,"focus",d=>{(Me(i)||i(v,d))&&f(b)},a)})}function u(v){v.code==="Tab"&&(c=new Date().getTime())}return{init:_}}function ve(t){let n=t;function e(){return n}function r(a){n=o(a)}function l(a){n+=o(a)}function s(a){n-=o(a)}function o(a){return Ge(a)?a:a.get()}return{get:e,set:r,add:l,subtract:s}}function bt(t,n){const e=t.scroll==="x"?o:i,r=n.style;let l=null,s=!1;function o(m){return`translate3d(${m}px,0px,0px)`}function i(m){return`translate3d(0px,${m}px,0px)`}function a(m){if(s)return;const v=qt(t.direction(m));v!==l&&(r.transform=e(v),l=v)}function c(m){s=!m}function _(){s||(r.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:_,to:a,toggleActive:c}}function pn(t,n,e,r,l,s,o,i,a){const _=he(l),u=he(l).reverse(),m=d().concat(y());function v(w,p){return w.reduce((x,j)=>x-l[j],p)}function f(w,p){return w.reduce((x,j)=>v(x,p)>0?x.concat([j]):x,[])}function g(w){return s.map((p,x)=>({start:p-r[x]+.5+w,end:p+n-.5+w}))}function b(w,p,x){const j=g(p);return w.map(T=>{const M=x?0:-e,V=x?e:0,U=x?"end":"start",$=j[T][U];return{index:T,loopPoint:$,slideLocation:ve(-1),translate:bt(t,a[T]),target:()=>i.get()>$?M:V}})}function d(){const w=o[0],p=f(u,w);return b(p,e,!1)}function y(){const w=n-o[0]-1,p=f(_,w);return b(p,-e,!0)}function S(){return m.every(({index:w})=>{const p=_.filter(x=>x!==w);return v(p,n)<=.1})}function O(){m.forEach(w=>{const{target:p,translate:x,slideLocation:j}=w,T=p();T!==j.get()&&(x.to(T),j.set(T))})}function P(){m.forEach(w=>w.translate.clear())}return{canLoop:S,clear:P,loop:O,loopPoints:m}}function mn(t,n,e){let r,l=!1;function s(a){if(!e)return;function c(_){for(const u of _)if(u.type==="childList"){a.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(_=>{l||(Me(e)||e(a,_))&&c(_)}),r.observe(t,{childList:!0})}function o(){r&&r.disconnect(),l=!0}return{init:s,destroy:o}}function gn(t,n,e,r){const l={};let s=null,o=null,i,a=!1;function c(){i=new IntersectionObserver(f=>{a||(f.forEach(g=>{const b=n.indexOf(g.target);l[b]=g}),s=null,o=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(f=>i.observe(f))}function _(){i&&i.disconnect(),a=!0}function u(f){return Se(l).reduce((g,b)=>{const d=parseInt(b),{isIntersecting:y}=l[d];return(f&&y||!f&&!y)&&g.push(d),g},[])}function m(f=!0){if(f&&s)return s;if(!f&&o)return o;const g=u(f);return f&&(s=g),f||(o=g),g}return{init:c,destroy:_,get:m}}function _n(t,n,e,r,l,s){const{measureSize:o,startEdge:i,endEdge:a}=t,c=e[0]&&l,_=f(),u=g(),m=e.map(o),v=b();function f(){if(!c)return 0;const y=e[0];return A(n[i]-y[i])}function g(){if(!c)return 0;const y=s.getComputedStyle(W(r));return parseFloat(y.getPropertyValue(`margin-${a}`))}function b(){return e.map((y,S,O)=>{const P=!S,L=Ke(O,S);return P?m[S]+_:L?m[S]+u:O[S+1][i]-y[i]}).map(A)}return{slideSizes:m,slideSizesWithGaps:v,startGap:_,endGap:u}}function vn(t,n,e,r,l,s,o,i,a){const{startEdge:c,endEdge:_,direction:u}=t,m=Ge(e);function v(d,y){return he(d).filter(S=>S%y===0).map(S=>d.slice(S,S+y))}function f(d){return d.length?he(d).reduce((y,S,O)=>{const P=W(y)||0,L=P===0,w=S===we(d),p=l[c]-s[P][c],x=l[c]-s[S][_],j=!r&&L?u(o):0,T=!r&&w?u(i):0,M=A(x-T-(p+j));return O&&M>n+a&&y.push(S),w&&y.push(d.length),y},[]).map((y,S,O)=>{const P=Math.max(O[S-1]||0);return d.slice(P,y)}):[]}function g(d){return m?v(d,e):f(d)}return{groupSlides:g}}function bn(t,n,e,r,l,s,o){const{align:i,axis:a,direction:c,startIndex:_,loop:u,duration:m,dragFree:v,dragThreshold:f,inViewThreshold:g,slidesToScroll:b,skipSnaps:d,containScroll:y,watchResize:S,watchSlides:O,watchDrag:P,watchFocus:L}=s,w=2,p=Yt(),x=p.measure(n),j=e.map(p.measure),T=Qt(a,c),M=T.measureSize(x),V=Wt(M),U=Kt(i,M),$=!u&&!!y,ee=u||!!y,{slideSizes:X,slideSizesWithGaps:G,startGap:R,endGap:Z}=_n(T,x,j,e,ee,l),Y=vn(T,M,b,u,x,j,R,Z,w),{snaps:ce,snapsAligned:ue}=an(T,U,x,j,Y),ne=-W(ce)+W(G),{snapsContained:me,scrollContainLimit:ge}=on(M,ne,ue,y,w),H=$?me:ue,{limit:F}=rn(ne,H,u),oe=vt(we(H),_,u),q=oe.clone(),D=he(e),h=({dragHandler:fe,scrollBody:Re,scrollBounds:Fe,options:{loop:je}})=>{je||Fe.constrain(fe.pointerDown()),Re.seek()},E=({scrollBody:fe,translate:Re,location:Fe,offsetLocation:je,previousLocation:St,scrollLooper:xt,slideLooper:wt,dragHandler:jt,animation:Ot,eventHandler:Ye,scrollBounds:Lt,options:{loop:We}},et)=>{const tt=fe.settled(),Tt=!Lt.shouldConstrain(),nt=We?tt:tt&&Tt;nt&&!jt.pointerDown()&&(Ot.stop(),Ye.emit("settle")),nt||Ye.emit("scroll");const Pt=Fe.get()*et+St.get()*(1-et);je.set(Pt),We&&(xt.loop(fe.direction()),wt.loop()),Re.to(je.get())},C=Jt(r,l,()=>h(Be),fe=>E(Be,fe)),N=.68,te=H[oe.get()],re=ve(te),ie=ve(te),se=ve(te),le=ve(te),_e=tn(re,se,ie,le,m,N),Ce=un(u,H,ne,F,le),ze=fn(C,oe,q,_e,Ce,le,o),Qe=ln(F),Xe=xe(),yt=gn(n,e,o,g),{slideRegistry:Ze}=cn($,y,H,ge,Y,D),ht=dn(t,e,Ze,ze,_e,Xe,o,L),Be={ownerDocument:r,ownerWindow:l,eventHandler:o,containerRect:x,slideRects:j,animation:C,axis:T,dragHandler:Xt(T,t,r,l,le,Zt(T,l),re,C,ze,_e,Ce,oe,o,V,v,f,d,N,P),eventStore:Xe,percentOfView:V,index:oe,indexPrevious:q,limit:F,location:re,offsetLocation:se,previousLocation:ie,options:s,resizeHandler:en(n,o,l,e,T,S,p),scrollBody:_e,scrollBounds:nn(F,se,le,_e,V),scrollLooper:sn(ne,F,se,[re,se,ie,le]),scrollProgress:Qe,scrollSnapList:H.map(Qe.get),scrollSnaps:H,scrollTarget:Ce,scrollTo:ze,slideLooper:pn(T,M,ne,X,G,ce,H,se,e),slideFocus:ht,slidesHandler:mn(n,o,O),slidesInView:yt,slideIndexes:D,slideRegistry:Ze,slidesToScroll:Y,target:le,translate:bt(T,n)};return Be}function yn(){let t={},n;function e(c){n=c}function r(c){return t[c]||[]}function l(c){return r(c).forEach(_=>_(n,c)),a}function s(c,_){return t[c]=r(c).concat([_]),a}function o(c,_){return t[c]=r(c).filter(u=>u!==_),a}function i(){t={}}const a={init:e,emit:l,off:o,on:s,clear:i};return a}const hn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Sn(t){function n(s,o){return _t(s,o||{})}function e(s){const o=s.breakpoints||{},i=Se(o).filter(a=>t.matchMedia(a).matches).map(a=>o[a]).reduce((a,c)=>n(a,c),{});return n(s,i)}function r(s){return s.map(o=>Se(o.breakpoints||{})).reduce((o,i)=>o.concat(i),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:r}}function xn(t){let n=[];function e(s,o){return n=o.filter(({options:i})=>t.optionsAtMedia(i).active!==!1),n.forEach(i=>i.init(s,t)),o.reduce((i,a)=>Object.assign(i,{[a.name]:a}),{})}function r(){n=n.filter(s=>s.destroy())}return{init:e,destroy:r}}function ke(t,n,e){const r=t.ownerDocument,l=r.defaultView,s=Sn(l),o=xn(s),i=xe(),a=yn(),{mergeOptions:c,optionsAtMedia:_,optionsMediaQueries:u}=s,{on:m,off:v,emit:f}=a,g=T;let b=!1,d,y=c(hn,ke.globalOptions),S=c(y),O=[],P,L,w;function p(){const{container:D,slides:h}=S;L=(Ue(D)?t.querySelector(D):D)||t.children[0];const C=Ue(h)?L.querySelectorAll(h):h;w=[].slice.call(C||L.children)}function x(D){const h=bn(t,L,w,r,l,D,a);if(D.loop&&!h.slideLooper.canLoop()){const E=Object.assign({},D,{loop:!1});return x(E)}return h}function j(D,h){b||(y=c(y,D),S=_(y),O=h||O,p(),d=x(S),u([y,...O.map(({options:E})=>E)]).forEach(E=>i.add(E,"change",T)),S.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(q),d.eventHandler.init(q),d.resizeHandler.init(q),d.slidesHandler.init(q),d.options.loop&&d.slideLooper.loop(),L.offsetParent&&w.length&&d.dragHandler.init(q),P=o.init(q,O)))}function T(D,h){const E=Y();M(),j(c({startIndex:E},D),h),a.emit("reInit")}function M(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),o.destroy(),i.clear()}function V(){b||(b=!0,i.clear(),M(),a.emit("destroy"),a.clear())}function U(D,h,E){!S.active||b||(d.scrollBody.useBaseFriction().useDuration(h===!0?0:S.duration),d.scrollTo.index(D,E||0))}function $(D){const h=d.index.add(1).get();U(h,D,-1)}function ee(D){const h=d.index.add(-1).get();U(h,D,1)}function X(){return d.index.add(1).get()!==Y()}function G(){return d.index.add(-1).get()!==Y()}function R(){return d.scrollSnapList}function Z(){return d.scrollProgress.get(d.location.get())}function Y(){return d.index.get()}function ce(){return d.indexPrevious.get()}function ue(){return d.slidesInView.get()}function ne(){return d.slidesInView.get(!1)}function me(){return P}function ge(){return d}function H(){return t}function F(){return L}function oe(){return w}const q={canScrollNext:X,canScrollPrev:G,containerNode:F,internalEngine:ge,destroy:V,off:v,on:m,emit:f,plugins:me,previousScrollSnap:ce,reInit:g,rootNode:H,scrollNext:$,scrollPrev:ee,scrollProgress:Z,scrollSnapList:R,scrollTo:U,selectedScrollSnap:Y,slideNodes:oe,slidesInView:ue,slidesNotInView:ne};return j(n,e),setTimeout(()=>a.emit("init"),0),q}ke.globalOptions=void 0;function Je(t={},n=[]){const e=ot(t),r=ot(n);let l=e?t.value:t,s=r?n.value:n;const o=rt(),i=rt();function a(){i.value&&i.value.reInit(l,s)}return pt(()=>{!$t()||!o.value||(ke.globalOptions=Je.globalOptions,i.value=ke(o.value,l,s))}),It(()=>{i.value&&i.value.destroy()}),e&&Ve(t,c=>{He(l,c)||(l=c,a())}),r&&Ve(n,c=>{Ht(s,c)||(s=c,a())}),[o,i]}Je.globalOptions=void 0;const wn={slots:{root:"relative focus:outline-none",viewport:"overflow-hidden",container:"flex items-start",item:"min-w-0 shrink-0 basis-full",controls:"",arrows:"",prev:"absolute rounded-full",next:"absolute rounded-full",dots:"absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",dot:["cursor-pointer size-3 bg-[var(--ui-border-accented)] rounded-full","transition"]},variants:{orientation:{vertical:{container:"flex-col -mt-4",item:"pt-4",prev:"-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",next:"-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"},horizontal:{container:"flex-row -ms-4",item:"ps-4",prev:"-start-12 top-1/2 -translate-y-1/2",next:"-end-12 top-1/2 -translate-y-1/2"}},active:{true:{dot:"bg-[var(--ui-border-inverted)]"}}}},jn=["aria-label","onClick"],On=mt;var ft;const Ln=Pe({extend:Pe(wn),...((ft=On.ui)==null?void 0:ft.carousel)||{}}),Tn=De({__name:"Carousel",props:{as:{},prev:{},prevIcon:{},next:{},nextIcon:{},arrows:{type:Boolean,default:!1},dots:{type:Boolean,default:!1},orientation:{default:"horizontal"},items:{},autoplay:{type:[Boolean,Object],default:!1},autoScroll:{type:[Boolean,Object],default:!1},autoHeight:{type:[Boolean,Object],default:!1},classNames:{type:[Boolean,Object],default:!1},fade:{type:[Boolean,Object],default:!1},wheelGestures:{type:Boolean,default:!1},class:{},ui:{},align:{type:[String,Function],default:"center"},containScroll:{type:[Boolean,String],default:"trimSnaps"},slidesToScroll:{default:1},dragFree:{type:Boolean,default:!1},dragThreshold:{default:10},inViewThreshold:{default:0},loop:{type:Boolean,default:!1},skipSnaps:{type:Boolean,default:!1},duration:{default:25},startIndex:{default:0},watchDrag:{type:[Boolean,Function],default:!0},watchResize:{type:[Boolean,Function],default:!0},watchSlides:{type:[Boolean,Function],default:!0},watchFocus:{type:[Boolean,Function],default:!0},active:{type:Boolean,default:!0},breakpoints:{default:()=>({})}},setup(t,{expose:n}){const e=t,r=Et(),{dir:l,t:s}=kt(),o=Dt(At(e,"active","align","breakpoints","containScroll","dragFree","dragThreshold","duration","inViewThreshold","loop","skipSnaps","slidesToScroll","startIndex","watchDrag","watchResize","watchSlides","watchFocus")),i=Oe(()=>e.prevIcon||(l.value==="rtl"?r.ui.icons.arrowRight:r.ui.icons.arrowLeft)),a=Oe(()=>e.nextIcon||(l.value==="rtl"?r.ui.icons.arrowLeft:r.ui.icons.arrowRight)),c=Oe(()=>Ln({orientation:e.orientation})),_=Oe(()=>({...e.fade?{align:"center",containScroll:!1}:{},...o.value,axis:e.orientation==="horizontal"?"x":"y",direction:l.value==="rtl"?"rtl":"ltr"})),u=Mt(async()=>{const p=[];if(e.autoplay){const x=await de(()=>import("./Dtrtw0zj.js"),[],import.meta.url).then(j=>j.default);p.push(x(typeof e.autoplay=="boolean"?{}:e.autoplay))}if(e.autoScroll){const x=await de(()=>import("./LVG_eY9u.js"),[],import.meta.url).then(j=>j.default);p.push(x(typeof e.autoScroll=="boolean"?{}:e.autoScroll))}if(e.autoHeight){const x=await de(()=>import("./Ddyvc1_j.js"),[],import.meta.url).then(j=>j.default);p.push(x(typeof e.autoHeight=="boolean"?{}:e.autoHeight))}if(e.classNames){const x=await de(()=>import("./mhJ-osCf.js"),[],import.meta.url).then(j=>j.default);p.push(x(typeof e.classNames=="boolean"?{}:e.classNames))}if(e.fade){const x=await de(()=>import("./wrqBHFeW.js"),[],import.meta.url).then(j=>j.default);p.push(x(typeof e.fade=="boolean"?{}:e.fade))}if(e.wheelGestures){const{WheelGesturesPlugin:x}=await de(async()=>{const{WheelGesturesPlugin:j}=await import("./fa6USE6u.js");return{WheelGesturesPlugin:j}},[],import.meta.url);p.push(x(typeof e.wheelGestures=="boolean"?{}:e.wheelGestures))}return p}),[m,v]=Je(_.value,u.value);Ve([_,u],()=>{var p;(p=v.value)==null||p.reInit(_.value,u.value)});function f(){var p;(p=v.value)==null||p.scrollPrev()}function g(){var p;(p=v.value)==null||p.scrollNext()}function b(p){var x;(x=v.value)==null||x.scrollTo(p)}function d(p){const x=e.orientation==="vertical"?"ArrowUp":"ArrowLeft",j=e.orientation==="vertical"?"ArrowDown":"ArrowRight";if(p.key===x){p.preventDefault(),f();return}p.key===j&&(p.preventDefault(),g())}const y=Le(!1),S=Le(!1),O=Le(0),P=Le([]);function L(p){P.value=(p==null?void 0:p.scrollSnapList())||[]}function w(p){y.value=(p==null?void 0:p.canScrollNext())||!1,S.value=(p==null?void 0:p.canScrollPrev())||!1,O.value=(p==null?void 0:p.selectedScrollSnap())||0}return pt(()=>{var p,x,j,T,M;v.value&&((p=v.value)==null||p.on("init",L),(x=v.value)==null||x.on("init",w),(j=v.value)==null||j.on("reInit",L),(T=v.value)==null||T.on("reInit",w),(M=v.value)==null||M.on("select",w))}),n({emblaRef:m,emblaApi:v}),(p,x)=>{var j;return k(),Ae(I(gt),{as:p.as,role:"region","aria-roledescription":"carousel",tabindex:"0",class:J(c.value.root({class:[e.class,(j=e.ui)==null?void 0:j.root]})),onKeydown:d},{default:be(()=>{var T,M,V,U,$,ee,X;return[B("div",{ref_key:"emblaRef",ref:m,class:J(c.value.viewport({class:(T=e.ui)==null?void 0:T.viewport}))},[B("div",{class:J(c.value.container({class:(M=e.ui)==null?void 0:M.container}))},[(k(!0),z(Ie,null,Ee(p.items,(G,R)=>{var Z;return k(),z("div",{key:R,role:"group","aria-roledescription":"slide",class:J(c.value.item({class:(Z=e.ui)==null?void 0:Z.item}))},[Te(p.$slots,"default",{item:G,index:R})],2)}),128))],2)],2),p.arrows||p.dots?(k(),z("div",{key:0,class:J(c.value.controls({class:(V=e.ui)==null?void 0:V.controls}))},[p.arrows?(k(),z("div",{key:0,class:J(c.value.arrows({class:(U=e.ui)==null?void 0:U.arrows}))},[K(st,it({disabled:!S.value,icon:i.value,size:"md",color:"neutral",variant:"outline","aria-label":I(s)("carousel.prev")},typeof p.prev=="object"?p.prev:void 0,{class:c.value.prev({class:($=e.ui)==null?void 0:$.prev}),onClick:f}),null,16,["disabled","icon","aria-label","class"]),K(st,it({disabled:!y.value,icon:a.value,size:"md",color:"neutral",variant:"outline","aria-label":I(s)("carousel.next")},typeof p.next=="object"?p.next:void 0,{class:c.value.next({class:(ee=e.ui)==null?void 0:ee.next}),onClick:g}),null,16,["disabled","icon","aria-label","class"])],2)):Q("",!0),p.dots?(k(),z("div",{key:1,class:J(c.value.dots({class:(X=e.ui)==null?void 0:X.dots}))},[(k(!0),z(Ie,null,Ee(P.value,(G,R)=>{var Z;return k(),z("button",{key:R,"aria-label":I(s)("carousel.goto",{slide:R+1}),class:J(c.value.dot({class:(Z=e.ui)==null?void 0:Z.dot,active:O.value===R})),onClick:Y=>b(R)},null,10,jn)}),128))],2)):Q("",!0)],2)):Q("",!0)]}),_:3},8,["as","class"])}}}),Pn={slots:{root:"bg-[var(--ui-bg)] ring ring-[var(--ui-border)] divide-y divide-[var(--ui-border)] rounded-[calc(var(--ui-radius)*2)] shadow-sm",header:"p-4 sm:px-6",body:"p-4 sm:p-6",footer:"p-4 sm:px-6"}},In=mt;var dt;const En=Pe({extend:Pe(Pn),...((dt=In.ui)==null?void 0:dt.card)||{}}),kn=De({__name:"Card",props:{as:{},class:{},ui:{}},setup(t){const n=t,e=Ct(),r=En();return(l,s)=>{var o;return k(),Ae(I(gt),{as:l.as,class:J(I(r).root({class:[n.class,(o=n.ui)==null?void 0:o.root]}))},{default:be(()=>{var i,a,c;return[e.header?(k(),z("div",{key:0,class:J(I(r).header({class:(i=n.ui)==null?void 0:i.header}))},[Te(l.$slots,"header")],2)):Q("",!0),e.default?(k(),z("div",{key:1,class:J(I(r).body({class:(a=n.ui)==null?void 0:a.body}))},[Te(l.$slots,"default")],2)):Q("",!0),e.footer?(k(),z("div",{key:2,class:J(I(r).footer({class:(c=n.ui)==null?void 0:c.footer}))},[Te(l.$slots,"footer")],2)):Q("",!0)]}),_:3},8,["as","class"])}}}),Dn=""+new URL("olivia-header.DOOnxQvJ.jpg",import.meta.url).href,An=Object.freeze(Object.defineProperty({__proto__:null,default:Dn},Symbol.toStringTag,{value:"Module"})),Mn=""+new URL("olivia-1.Kfr_71L1.jpg",import.meta.url).href,Cn=Object.freeze(Object.defineProperty({__proto__:null,default:Mn},Symbol.toStringTag,{value:"Module"})),zn=""+new URL("olivia-10.Dfu75pyJ.jpg",import.meta.url).href,Bn=Object.freeze(Object.defineProperty({__proto__:null,default:zn},Symbol.toStringTag,{value:"Module"})),Rn=""+new URL("olivia-11.D5qyh4Xt.jpg",import.meta.url).href,Fn=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"})),Nn=""+new URL("olivia-12.BRkZ1EHE.jpg",import.meta.url).href,Vn=Object.freeze(Object.defineProperty({__proto__:null,default:Nn},Symbol.toStringTag,{value:"Module"})),Un=""+new URL("olivia-13.C9bOCSvl.jpg",import.meta.url).href,$n=Object.freeze(Object.defineProperty({__proto__:null,default:Un},Symbol.toStringTag,{value:"Module"})),Hn=""+new URL("olivia-14.mukgrpZ6.jpg",import.meta.url).href,Gn=Object.freeze(Object.defineProperty({__proto__:null,default:Hn},Symbol.toStringTag,{value:"Module"})),qn=""+new URL("olivia-15.DUs3ZQC1.jpg",import.meta.url).href,Kn=Object.freeze(Object.defineProperty({__proto__:null,default:qn},Symbol.toStringTag,{value:"Module"})),Jn=""+new URL("olivia-16.Bo0ZhLFq.jpg",import.meta.url).href,Qn=Object.freeze(Object.defineProperty({__proto__:null,default:Jn},Symbol.toStringTag,{value:"Module"})),Xn=""+new URL("olivia-17.Dc5fJ2LV.jpg",import.meta.url).href,Zn=Object.freeze(Object.defineProperty({__proto__:null,default:Xn},Symbol.toStringTag,{value:"Module"})),Yn=""+new URL("olivia-18.DAbBDXK4.jpg",import.meta.url).href,Wn=Object.freeze(Object.defineProperty({__proto__:null,default:Yn},Symbol.toStringTag,{value:"Module"})),eo=""+new URL("olivia-2.D6ucoABh.jpg",import.meta.url).href,to=Object.freeze(Object.defineProperty({__proto__:null,default:eo},Symbol.toStringTag,{value:"Module"})),no=""+new URL("olivia-3.Dzfqw48S.jpg",import.meta.url).href,oo=Object.freeze(Object.defineProperty({__proto__:null,default:no},Symbol.toStringTag,{value:"Module"})),ro=""+new URL("olivia-4.Deziuzbl.jpg",import.meta.url).href,so=Object.freeze(Object.defineProperty({__proto__:null,default:ro},Symbol.toStringTag,{value:"Module"})),io=""+new URL("olivia-5.2E2R17Y1.jpg",import.meta.url).href,lo=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"})),ao=""+new URL("olivia-6.B_2y8xyQ.jpg",import.meta.url).href,co=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"})),uo=""+new URL("olivia-7.ChC2caB8.jpg",import.meta.url).href,fo=Object.freeze(Object.defineProperty({__proto__:null,default:uo},Symbol.toStringTag,{value:"Module"})),po=""+new URL("olivia-8.BwXnnqBx.jpg",import.meta.url).href,mo=Object.freeze(Object.defineProperty({__proto__:null,default:po},Symbol.toStringTag,{value:"Module"})),go=""+new URL("olivia-9.C1VwIuw0.jpg",import.meta.url).href,_o=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"})),vo={class:"flex items-center space-x-4"},bo={class:"text-lg font-bold"},yo={class:"text-sm text-gray-500"},ho={key:0,class:"my-4"},So={class:"px-4"},xo={class:"flex items-center space-x-2"},wo={class:"flex items-center space-x-2"},jo={class:"flex items-center space-x-2"},Oo={key:1,class:"px-4 mt-4"},Lo={key:0,class:"flex items-center space-x-2"},To=["href"],Po={key:1,class:"flex items-center space-x-2"},Io=["href"],Eo={key:2,class:"px-4 mt-4"},ko={class:"list-disc list-inside"},Do=De({__name:"DogCard",props:{dog:{type:Object,required:!0}},setup(t){const n=t,{dog:e}=n,r=Object.assign({"/public/images/olivia-header.jpg":An,"/public/images/olivia/olivia-1.jpg":Cn,"/public/images/olivia/olivia-10.jpg":Bn,"/public/images/olivia/olivia-11.jpg":Fn,"/public/images/olivia/olivia-12.jpg":Vn,"/public/images/olivia/olivia-13.jpg":$n,"/public/images/olivia/olivia-14.jpg":Gn,"/public/images/olivia/olivia-15.jpg":Kn,"/public/images/olivia/olivia-16.jpg":Qn,"/public/images/olivia/olivia-17.jpg":Zn,"/public/images/olivia/olivia-18.jpg":Wn,"/public/images/olivia/olivia-2.jpg":to,"/public/images/olivia/olivia-3.jpg":oo,"/public/images/olivia/olivia-4.jpg":so,"/public/images/olivia/olivia-5.jpg":lo,"/public/images/olivia/olivia-6.jpg":co,"/public/images/olivia/olivia-7.jpg":fo,"/public/images/olivia/olivia-8.jpg":mo,"/public/images/olivia/olivia-9.jpg":_o}),l=`/public/${e.gallery_folder.replace(/^\/|\/$/g,"")}/`,s=e.gallery_folder?Object.keys(r).filter(o=>o.startsWith(l)).map(o=>o.replace("/public","")):[];return(o,i)=>{const a=zt,c=Bt,_=Tn,u=Rt,m=kn;return k(),Ae(m,null,{header:be(()=>[B("div",vo,[K(a,{src:I(e).avatar_url,class:"rounded-full border-2 border-ui-primary"},null,8,["src"]),B("div",null,[B("h2",bo,pe(I(e).name),1),B("p",yo,pe(I(e).calling_name),1)])])]),default:be(()=>{var v;return[I(s).length?(k(),z("div",ho,[K(_,{dots:"",items:I(s),ui:{item:"basis-1/3"},class:"mb-12"},{default:be(({item:f})=>[K(c,{src:f,sizes:"(max-width: 500px) 33vw, 200px",width:"500",height:"500",fit:"cover",class:"rounded-md",format:"webp",loading:"lazy"},null,8,["src"])]),_:1},8,["items"])])):Q("",!0),B("div",So,[B("p",xo,[K(u,{name:"i-mingcute-dog-line",class:"text-ui-primary"}),i[0]||(i[0]=B("strong",null,"Rotu:",-1)),Ne(" "+pe(I(e).breed),1)]),B("p",wo,[K(u,{name:I(e).sex==="uros"?"i-mingcute-male-line":"i-mingcute-female-line",class:"text-ui-primary"},null,8,["name"]),i[1]||(i[1]=B("strong",null,"Sukupuoli:",-1)),Ne(" "+pe(I(e).sex),1)]),B("p",jo,[K(u,{name:"i-mingcute-calendar-line",class:"text-ui-primary"}),i[2]||(i[2]=B("strong",null,"Syntynyt:",-1)),Ne(" "+pe(I(e).born_date),1)])]),I(e).registry_link||I(e).instagram_link?(k(),z("div",Oo,[I(e).registry_link?(k(),z("p",Lo,[K(u,{name:"i-mingcute-book-line",class:"text-ui-primary"}),B("a",{href:I(e).registry_link,target:"_blank",class:"text-ui-primary underline flex items-center space-x-1"},[i[3]||(i[3]=B("strong",null,"Sukutaulu",-1)),K(u,{name:"i-mingcute-link-line",class:"text-ui-primary"})],8,To)])):Q("",!0),I(e).instagram_link?(k(),z("p",Po,[K(u,{name:"i-mingcute-instagram-line",class:"text-ui-primary"}),B("a",{href:I(e).instagram_link,target:"_blank",class:"text-ui-primary underline flex items-center space-x-1"},[i[4]||(i[4]=B("strong",null,"Instagram",-1)),K(u,{name:"i-mingcute-link-line",class:"text-ui-primary"})],8,Io)])):Q("",!0)])):Q("",!0),(v=I(e).titles)!=null&&v.length?(k(),z("div",Eo,[i[5]||(i[5]=B("h3",{class:"text-lg font-semibold"},"Tittelit:",-1)),B("ul",ko,[(k(!0),z(Ie,null,Ee(I(e).titles,f=>(k(),z("li",{key:f},pe(f),1))),128))])])):Q("",!0)]}),_:1})}}}),Ao={class:"prose container mx-auto max-w-3xl px-4 py-3 grow"},Mo={key:0,class:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4"},Bo=De({__name:"index",async setup(t){let n,e;const{data:r}=([n,e]=Ft(()=>Nt(()=>Vt("dogs").all(),"$pqdjdF5c1Y")),n=await n,e(),n);return(l,s)=>{const o=Do;return k(),z("div",Ao,[I(r)?(k(),z("div",Mo,[(k(!0),z(Ie,null,Ee(I(r),i=>(k(),Ae(o,{key:i.path,dog:i},null,8,["dog"]))),128))])):Q("",!0)])}}});export{Bo as default};
