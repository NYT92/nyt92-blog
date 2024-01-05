import{r as g,an as F,L,ao as V,ap as B,am as N,o as M,O as W,H as A,aa as S}from"./entry.HgV1vu57.js";var E;const w=typeof window<"u",$=e=>typeof e<"u",D=e=>typeof e=="function",H=e=>typeof e=="string",J=()=>{};w&&((E=window==null?void 0:window.navigator)!=null&&E.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function I(e){return typeof e=="function"?e():L(e)}function R(e){return e}function Q(e){return V()?(B(e),!0):!1}function U(e,t=!0){N()?M(e):t?e():W(e)}function j(e,t,n={}){const{immediate:i=!0}=n,s=g(!1);let r=null;function f(){r&&(clearTimeout(r),r=null)}function c(){s.value=!1,f()}function p(...d){f(),s.value=!0,r=setTimeout(()=>{s.value=!1,r=null,e(...d)},I(t))}return i&&(s.value=!0,w&&p()),Q(c),{isPending:F(s),start:p,stop:c}}function G(e){var t;const n=I(e);return(t=n==null?void 0:n.$el)!=null?t:n}const K=w?window:void 0,q=w?window.navigator:void 0;function z(...e){let t,n,i,s;if(H(e[0])||Array.isArray(e[0])?([n,i,s]=e,t=K):[t,n,i,s]=e,!t)return J;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],f=()=>{r.forEach(l=>l()),r.length=0},c=(l,m,u,v)=>(l.addEventListener(m,u,v),()=>l.removeEventListener(m,u,v)),p=S(()=>[G(t),I(s)],([l,m])=>{f(),l&&r.push(...n.flatMap(u=>i.map(v=>c(l,u,v,m))))},{immediate:!0,flush:"post"}),d=()=>{p(),f()};return Q(d),d}function X(e,t=!1){const n=g(),i=()=>n.value=!!e();return i(),U(i,t),n}function ae(e={}){const{navigator:t=q,read:n=!1,source:i,copiedDuring:s=1500,legacy:r=!1}=e,f=["copy","cut"],c=X(()=>t&&"clipboard"in t),p=A(()=>c.value||r),d=g(""),l=g(!1),m=j(()=>l.value=!1,s);function u(){c.value?t.clipboard.readText().then(o=>{d.value=o}):d.value=_()}if(p.value&&n)for(const o of f)z(o,u);async function v(o=I(i)){p.value&&o!=null&&(c.value?await t.clipboard.writeText(o):y(o),d.value=o,l.value=!0,m.start())}function y(o){const a=document.createElement("textarea");a.value=o??"",a.style.position="absolute",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove()}function _(){var o,a,O;return(O=(a=(o=document==null?void 0:document.getSelection)==null?void 0:o.call(document))==null?void 0:a.toString())!=null?O:""}return{isSupported:p,text:d,copied:l,copy:v}}function Y(e){return JSON.parse(JSON.stringify(e))}const h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x="__vueuse_ssr_handlers__";h[x]=h[x]||{};var C;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(C||(C={}));var Z=Object.defineProperty,T=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&P(e,n,t[n]);if(T)for(var n of T(t))ee.call(t,n)&&P(e,n,t[n]);return e};const ne={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};te({linear:R},ne);function ue(e,t,n,i={}){var s,r,f;const{clone:c=!1,passive:p=!1,eventName:d,deep:l=!1,defaultValue:m}=i,u=N(),v=n||(u==null?void 0:u.emit)||((s=u==null?void 0:u.$emit)==null?void 0:s.bind(u))||((f=(r=u==null?void 0:u.proxy)==null?void 0:r.$emit)==null?void 0:f.bind(u==null?void 0:u.proxy));let y=d;t||(t="modelValue"),y=d||y||`update:${t.toString()}`;const _=a=>c?D(c)?c(a):Y(a):a,o=()=>$(e[t])?_(e[t]):m;if(p){const a=o(),O=g(a);return S(()=>e[t],b=>O.value=_(b)),S(O,b=>{(b!==e[t]||l)&&v(y,b)},{deep:l}),O}else return A({get(){return o()},set(a){v(y,a)}})}export{ue as a,ae as u};
