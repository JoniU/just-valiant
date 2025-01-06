import{u as Rn,f as Ln,g as G,h as An,i as tn,j as A,r as _n,k as En,l as nn,m as on,n as N,T as z,C as Bn,p as Un,q as jn,o as W,s as rn,v as In,x as H,y as zn,z as Hn,A as Fn,B as qn,c as Vn}from"./DgnSvpJr.js";import{u as Nn,q as Wn}from"./BuKNK0ok.js";function Kn(n,e){const{title:l,titleTemplate:t,...r}=n;return Rn({title:l,titleTemplate:t,_flatMeta:r},{...e,transform(a){const i=Ln({...a._flatMeta});return delete a._flatMeta,{...a,meta:i}}})}const Xn=/\d/,$n=["-","_","/","."];function Yn(n=""){if(!Xn.test(n))return n!==n.toLowerCase()}function an(n,e){const l=$n,t=[];if(!n||typeof n!="string")return t;let r="",a,i;for(const p of n){const d=l.includes(p);if(d===!0){t.push(r),r="",a=void 0;continue}const c=Yn(p);if(i===!1){if(a===!1&&c===!0){t.push(r),r=p,a=c;continue}if(a===!0&&c===!1&&r.length>1){const f=r.at(-1);t.push(r.slice(0,Math.max(0,r.length-1))),r=f+p,a=c;continue}}r+=p,a=c,i=d}return t.push(r),t}function Zn(n){return n?n[0].toUpperCase()+n.slice(1):""}function _(n,e){return n?(Array.isArray(n)?n:an(n)).map(l=>Zn(l)).join(""):""}function un(n,e){return n?(Array.isArray(n)?n:an(n)).map(l=>l.toLowerCase()).join("-"):""}const j=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class I{constructor(e,l,t){this.property=e,this.normal=l,t&&(this.space=t)}}I.prototype.property={};I.prototype.normal={};I.prototype.space=null;function sn(n,e){const l={},t={};let r=-1;for(;++r<n.length;)Object.assign(l,n[r].property),Object.assign(t,n[r].normal);return new I(l,t,e)}function K(n){return n.toLowerCase()}class k{constructor(e,l){this.property=e,this.attribute=l}}k.prototype.space=null;k.prototype.boolean=!1;k.prototype.booleanish=!1;k.prototype.overloadedBoolean=!1;k.prototype.number=!1;k.prototype.commaSeparated=!1;k.prototype.spaceSeparated=!1;k.prototype.commaOrSpaceSeparated=!1;k.prototype.mustUseProperty=!1;k.prototype.defined=!1;let Gn=0;const u=R(),y=R(),cn=R(),o=R(),h=R(),E=R(),S=R();function R(){return 2**++Gn}const X=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:y,commaOrSpaceSeparated:S,commaSeparated:E,number:o,overloadedBoolean:cn,spaceSeparated:h},Symbol.toStringTag,{value:"Module"})),V=Object.keys(X);class J extends k{constructor(e,l,t,r){let a=-1;if(super(e,l),en(this,"space",r),typeof t=="number")for(;++a<V.length;){const i=V[a];en(this,V[a],(t&X[i])===X[i])}}}J.prototype.defined=!0;function en(n,e,l){l&&(n[e]=l)}const Jn={}.hasOwnProperty;function B(n){const e={},l={};let t;for(t in n.properties)if(Jn.call(n.properties,t)){const r=n.properties[t],a=new J(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),e[t]=a,l[K(t)]=t,l[K(a.attribute)]=t}return new I(e,l,n.space)}const pn=B({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),dn=B({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function fn(n,e){return e in n?n[e]:e}function gn(n,e){return fn(n,e.toLowerCase())}const hn=B({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:gn,properties:{xmlns:null,xmlnsXLink:null}}),mn=B({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:y,ariaAutoComplete:null,ariaBusy:y,ariaChecked:y,ariaColCount:o,ariaColIndex:o,ariaColSpan:o,ariaControls:h,ariaCurrent:null,ariaDescribedBy:h,ariaDetails:null,ariaDisabled:y,ariaDropEffect:h,ariaErrorMessage:null,ariaExpanded:y,ariaFlowTo:h,ariaGrabbed:y,ariaHasPopup:null,ariaHidden:y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:h,ariaLevel:o,ariaLive:null,ariaModal:y,ariaMultiLine:y,ariaMultiSelectable:y,ariaOrientation:null,ariaOwns:h,ariaPlaceholder:null,ariaPosInSet:o,ariaPressed:y,ariaReadOnly:y,ariaRelevant:null,ariaRequired:y,ariaRoleDescription:h,ariaRowCount:o,ariaRowIndex:o,ariaRowSpan:o,ariaSelected:y,ariaSetSize:o,ariaSort:null,ariaValueMax:o,ariaValueMin:o,ariaValueNow:o,ariaValueText:null,role:null}}),Qn=B({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:gn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:E,acceptCharset:h,accessKey:h,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:h,autoFocus:u,autoPlay:u,blocking:h,capture:null,charSet:null,checked:u,cite:null,className:h,cols:o,colSpan:null,content:null,contentEditable:y,controls:u,controlsList:h,coords:o|E,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:cn,draggable:y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:h,height:o,hidden:u,high:o,href:null,hrefLang:null,htmlFor:h,httpEquiv:h,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:h,itemRef:h,itemScope:u,itemType:h,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:o,manifest:null,max:null,maxLength:o,media:null,method:null,min:null,minLength:o,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:o,pattern:null,ping:h,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:h,required:u,reversed:u,rows:o,rowSpan:o,sandbox:h,scope:null,scoped:u,seamless:u,selected:u,shadowRootClonable:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:o,sizes:null,slot:null,span:o,spellCheck:y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:o,step:null,style:null,tabIndex:o,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:y,width:o,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:h,axis:null,background:null,bgColor:null,border:o,borderColor:null,bottomMargin:o,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:o,leftMargin:o,link:null,longDesc:null,lowSrc:null,marginHeight:o,marginWidth:o,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:o,rules:null,scheme:null,scrolling:y,standby:null,summary:null,text:null,topMargin:o,valueType:null,version:null,vAlign:null,vLink:null,vSpace:o,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:o,security:null,unselectable:null}}),ne=B({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:fn,properties:{about:S,accentHeight:o,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:o,amplitude:o,arabicForm:null,ascent:o,attributeName:null,attributeType:null,azimuth:o,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:o,by:null,calcMode:null,capHeight:o,className:h,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:o,diffuseConstant:o,direction:null,display:null,dur:null,divisor:o,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:o,enableBackground:null,end:null,event:null,exponent:o,externalResourcesRequired:null,fill:null,fillOpacity:o,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:E,g2:E,glyphName:E,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:o,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:o,horizOriginX:o,horizOriginY:o,id:null,ideographic:o,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:o,k:o,k1:o,k2:o,k3:o,k4:o,kernelMatrix:S,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:o,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:o,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:o,overlineThickness:o,paintOrder:null,panose1:null,path:null,pathLength:o,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:h,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:o,pointsAtY:o,pointsAtZ:o,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:S,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:S,rev:S,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:S,requiredFeatures:S,requiredFonts:S,requiredFormats:S,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:o,specularExponent:o,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:o,strikethroughThickness:o,string:null,stroke:null,strokeDashArray:S,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:o,strokeOpacity:o,strokeWidth:null,style:null,surfaceScale:o,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:S,tabIndex:o,tableValues:null,target:null,targetX:o,targetY:o,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:S,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:o,underlineThickness:o,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:o,values:null,vAlphabetic:o,vMathematical:o,vectorEffect:null,vHanging:o,vIdeographic:o,version:null,vertAdvY:o,vertOriginX:o,vertOriginY:o,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:o,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),ee=/^data[-\w.:]+$/i,ln=/-[a-z]/g,le=/[A-Z]/g;function te(n,e){const l=K(e);let t=e,r=k;if(l in n.normal)return n.property[n.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&ee.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(ln,re);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!ln.test(a)){let i=a.replace(le,oe);i.charAt(0)!=="-"&&(i="-"+i),e="data"+i}}r=J}return new r(t,e)}function oe(n){return"-"+n.toLowerCase()}function re(n){return n.charAt(1).toUpperCase()}const ae=sn([dn,pn,hn,mn,Qn],"html");sn([dn,pn,hn,mn,ne],"svg");const ue=["p","h1","h2","h3","h4","h5","h6","li"];function F(n,e){return n.type===e||typeof n.type=="object"&&n.type.tag===e||n.tag===e}function Q(n){return F(n,"text")||F(n,Symbol.for("v-txt"))}function yn(n){var e;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((e=n.children)==null?void 0:e.default)=="function"?n.children.default():[]}function $(n){if(!n)return"";if(Array.isArray(n))return n.map($).join("");if(Q(n))return n.value||n.children||"";const e=yn(n);return Array.isArray(e)?e.map($).filter(Boolean).join(""):""}function vn(n,e=[]){if(Array.isArray(n))return n.flatMap(t=>vn(t,e));let l=n;return e.some(t=>t==="*"||F(n,t))&&(l=yn(n)||n,!Array.isArray(l)&&ue.some(t=>F(n,t))&&(l=[l])),l}function bn(n,e=[]){return n=Array.isArray(n)?n:[n],e.length?n.flatMap(l=>bn(vn(l,[e[0]]),e.slice(1))).filter(l=>!(Q(l)&&$(l).trim()==="")):n}function Cn(n,e=[]){return typeof e=="string"&&(e=e.split(/[,\s]/).map(l=>l.trim()).filter(Boolean)),e.length?bn(n,e).reduce((l,t)=>(Q(t)?typeof l[l.length-1]=="string"?l[l.length-1]+=t.children:l.push(t.children):l.push(t),l),[]):n}function ie(n,e){return e.reduce((l,t)=>{const r=se(n,t);return r!==void 0&&(l[t]=r),l},{})}function se(n,e){return e.split(".").reduce((l,t)=>l&&l[t],n)}const Y="default",Sn=/^@|^v-on:/,kn=/^:|^v-bind:/,ce=/^v-model/,pe=["select","textarea","input"],de=["math","svg"],fe=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),ge=G({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var d,c,f,g,b,O,w,C;const e=(f=(c=(d=An())==null?void 0:d.appContext)==null?void 0:c.app)==null?void 0:f.$nuxt,l=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:t}=((g=e==null?void 0:e.$config)==null?void 0:g.public)||{},r={...(b=t==null?void 0:t.components)!=null&&b.prose&&n.prose!==!1?fe:{},...((O=t==null?void 0:t.components)==null?void 0:O.map)||{},...tn(((C=(w=n.data)==null?void 0:w.mdc)==null?void 0:C.components)||{}),...n.components},a=A(()=>{var D;const P=(((D=n.body)==null?void 0:D.children)||[]).map(T=>T.tag||T.type).filter(T=>!j.includes(T));return Array.from(new Set(P)).sort().join(".")}),i=_n({...n.data});En(()=>n.data,P=>{Object.assign(i,P)}),await we(n.body,{tags:r});function p(P,D){const T=P.split(".").length-1;return P.split(".").reduce((M,s,m)=>m==T&&M?(M[s]=D,M[s]):typeof M=="object"?M[s]:void 0,i)}return{tags:r,contentKey:a,route:l,runtimeData:i,updateRuntimeData:p}},render(n){var O,w;const{tags:e,tag:l,body:t,data:r,contentKey:a,route:i,unwrap:p,runtimeData:d,updateRuntimeData:c}=n;if(!t)return null;const f={...r,tags:e,$route:i,runtimeData:d,updateRuntimeData:c},g=l!==!1?Z(l||((O=f.component)==null?void 0:O.name)||f.component||"div"):void 0;return g?nn(g,{...(w=f.component)==null?void 0:w.props,class:n.class,...this.$attrs,key:a},{default:b}):b==null?void 0:b();function b(){const C=Pn(t,nn,{documentMeta:f,parentScope:f,resolveComponent:Z});return C!=null&&C.default?p?Cn(C.default(),typeof p=="string"?p.split(" "):["*"]):C.default():null}}});function he(n,e,l){const{documentMeta:t,parentScope:r,resolveComponent:a}=l;if(n.type==="text")return e(z,n.value);if(n.type==="comment")return e(Bn,null,n.value);const i=n.tag,p=wn(n,t.tags);if(n.tag==="binding")return me(n,e,t,r);const d=xn(p)?g=>g:a,c=d(p);typeof c=="object"&&(c.tag=i);const f=ye(n,t);return e(c,f,Pn(n,e,{documentMeta:t,parentScope:{...r,...f},resolveComponent:d}))}function Pn(n,e,l){const{documentMeta:t,parentScope:r,resolveComponent:a}=l,p=(n.children||[]).reduce((c,f)=>{if(!Pe(f))return c[Y].children.push(f),c;const g=ke(f);return c[g]=c[g]||{props:{},children:[]},f.type==="element"&&(c[g].props=f.props,c[g].children.push(...f.children||[])),c},{[Y]:{props:{},children:[]}});return Object.entries(p).reduce((c,[f,{props:g,children:b}])=>(b.length&&(c[f]=(O={})=>{const w=ie(O,Object.keys(g||{}));let C=b.map(P=>he(P,e,{documentMeta:t,parentScope:{...r,...w},resolveComponent:a}));return g!=null&&g.unwrap&&(C=Cn(C,g.unwrap)),xe(C)}),c),{})}function me(n,e,l,t={}){var c,f;const r={...l.runtimeData,...t,$document:l,$doc:l},a=/\.|\[(\d+)\]/,p=((c=n.props)==null?void 0:c.value.trim().split(a).filter(Boolean)).reduce((g,b)=>{if(g&&b in g)return typeof g[b]=="function"?g[b]():g[b]},r),d=(f=n.props)==null?void 0:f.defaultValue;return e(z,p??d??"")}function ye(n,e){const{tag:l="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const i=t[a];if(ce.test(a))return ve(a,i,r,e,{native:pe.includes(l)});if(a==="v-bind")return be(a,i,r,e);if(Sn.test(a))return Ce(a,i,r,e);if(kn.test(a))return Se(a,i,r,e);const{attribute:p}=te(ae,a);return Array.isArray(i)&&i.every(d=>typeof d=="string")?(r[p]=i.join(" "),r):(r[p]=i,r)},{})}function ve(n,e,l,t,{native:r}){var d;const a=((d=n.match(/^v-model:([^=]+)/))==null?void 0:d[1])||"modelValue",i=r?"value":a,p=r?"onInput":`onUpdate:${a}`;return l[i]=q(e,t.runtimeData),l[p]=c=>{var f;t.updateRuntimeData(e,r?(f=c.target)==null?void 0:f.value:c)},l}function be(n,e,l,t){const r=q(e,t);return l=Object.assign(l,r),l}function Ce(n,e,l,t){return n=n.replace(Sn,""),l.on=l.on||{},l.on[n]=()=>q(e,t),l}function Se(n,e,l,t){return n=n.replace(kn,""),l[n]=q(e,t),l}const Z=n=>{if(typeof n=="string"){if(j.includes(n))return n;const e=on(_(n),!1);return!n||(e==null?void 0:e.name)==="AsyncComponentWrapper"||typeof e=="string"?e:"setup"in e?N(()=>new Promise(l=>l(e))):e}return n};function q(n,e){const l=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,e);return typeof l>"u"?Un(n):l}function ke(n){let e="";for(const l of Object.keys(n.props||{}))if(!(!l.startsWith("#")&&!l.startsWith("v-slot:"))){e=l.split(/[:#]/,2)[1];break}return e||Y}function Pe(n){return n.tag==="template"}function xn(n){return de.includes(n)}function xe(n){const e=[];for(const l of n){const t=e[e.length-1];l.type===z&&(t==null?void 0:t.type)===z?t.children=t.children+l.children:e.push(l)}return e}async function we(n,e){if(!n)return;const l=Array.from(new Set(t(n,e)));await Promise.all(l.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const a=Z(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){const i=r.tag;if(r.type==="text"||i==="binding"||r.type==="comment")return[];const p=wn(r,a.tags);if(xn(p))return[];const d=[];r.type!=="root"&&!j.includes(p)&&d.push(p);for(const c of r.children||[])d.push(...t(c,a));return d}}function wn(n,e){var t;const l=n.tag;return!l||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?l:e[l]||e[_(l)]||e[un(n.tag)]||l}function Oe(n){return{type:"root",children:n.value.map(On)}}function On(n){if(typeof n=="string")return{type:"text",value:n};const[e,l,...t]=n;return{type:"element",tag:e,props:l,children:t.map(On)}}const Tn=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","Icon"],Mn=[],Te=Object.freeze(Object.defineProperty({__proto__:null,globalComponents:Tn,localComponents:Mn},Symbol.toStringTag,{value:"Module"})),Me=G({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var P,D,T,M;const e=["render","ssrRender","__ssrInlineRender"],l=n,t=!1,r=A(()=>{let s=l.value.body||l.value;return l.excerpt&&l.value.excerpt&&(s=l.value.excerpt),s.type==="minimal"?Oe(s):s}),a=A(()=>{var s,m;return!((m=(s=r.value)==null?void 0:s.children)!=null&&m.length)}),i=A(()=>{const{body:s,excerpt:m,...v}=l.value;return{...v,...l.data}}),p=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(s=>[s,`prose-${s}`])),{mdc:d}=jn().public||{},c={...(P=d==null?void 0:d.components)!=null&&P.prose&&l.prose!==!1?p:{},...((D=d==null?void 0:d.components)==null?void 0:D.map)||{},...tn(((M=(T=l.data)==null?void 0:T.mdc)==null?void 0:M.components)||{}),...l.components},f=A(()=>{}),g=A(()=>r.value?O(r.value,{tags:c}):{});function b(s){let m=s;if(typeof s=="string"){if(j.includes(s))return s;if(Tn.includes(_(s))?m=on(s,!1):Mn.includes(_(s))&&(m=N(()=>Hn(()=>Promise.resolve().then(()=>Te),void 0,import.meta.url).then(x=>x[_(s)]()))),typeof m=="string")return m}if(!m)return m;const v=m;return"__asyncLoader"in v?v:"setup"in v?N(()=>Promise.resolve(v)):v}function O(s,m){if(!s)return;const v=Array.from(new Set(w(s,m))),x={};for(const[L,U]of v)typeof U=="object"&&e.some(Dn=>Object.hasOwnProperty.call(U,Dn))||x[L]||(x[L]=b(U));return x}function w(s,m){const v=s.tag;if(s.type==="text"||v==="binding"||s.type==="comment")return[];const x=C(s,m.tags),L=[];s.type!=="root"&&!j.includes(x)&&L.push([v,x]);for(const U of s.children||[])L.push(...w(U,m));return L}function C(s,m){var x;const v=s.tag;return!v||typeof((x=s.props)==null?void 0:x.__ignoreMap)<"u"?v:m[v]||m[_(v)]||m[un(s.tag)]||v}return(s,m)=>a.value?zn(s.$slots,"empty",{key:1,body:r.value,data:i.value,dataContentId:H(t)?n.value.id:void 0}):(W(),rn(ge,{key:f.value,body:r.value,data:i.value,class:In(l.class),tag:l.tag,prose:l.prose,unwrap:l.unwrap,components:g.value,"data-content-id":H(t)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),De={key:1},Ae=G({__name:"[...slug]",async setup(n){var a,i;let e,l;const t=Fn(),{data:r}=([e,l]=qn(()=>Nn(t.path,()=>Wn("content").path(t.path).first(),"$aROEKgqrzL")),e=await e,l(),e);return Kn({title:(a=r.value)==null?void 0:a.title,description:(i=r.value)==null?void 0:i.description}),(p,d)=>{const c=Me;return H(r)?(W(),rn(c,{key:0,value:H(r),class:"prose"},null,8,["value"])):(W(),Vn("div",De,"Content not found"))}}});export{Ae as default};