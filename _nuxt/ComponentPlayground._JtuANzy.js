import{L as m,H as p,d as c,ac as i,r as u,M as e,k as l}from"./entry.HgV1vu57.js";import{u as d}from"./asyncData.Y0z9BzoG.js";import f from"./Ellipsis.3idJKBMr.js";import y from"./ComponentPlaygroundData.QwsbV_WQ.js";import"./TabsHeader._z2U8ri9.js";import"./ComponentPlaygroundProps.H3XIYuO9.js";import"./ProseH4.I3m-aeDX.js";import"./ProseCodeInline.8Wa7IUxD.js";import"./Badge.iu-cV5Qb.js";import"./MDCSlot.BBMqQAWi.js";import"./slot.5HcCMNow.js";import"./ProseP.WUIbXLHA.js";import"./index.07LZwhhr.js";import"./ComponentPlaygroundSlots.vue.UAPm5USw.js";import"./ComponentPlaygroundTokens.vue.2KrlyTy6.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=l(h,[["__scopeId","data-v-5a2c1be7"]]);export{E as default};