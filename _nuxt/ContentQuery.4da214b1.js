import{d as g,at as C,J as S,l as b,aa as O,q as m,au as _,ad as k,O as A}from"./entry.b9d31b8c.js";import{u as N}from"./asyncData.a1b923b1.js";const Q=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:t,only:r,without:o,where:u,sort:l,limit:d,skip:f,locale:s,find:h}=C(i),y=S(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),p=!b().public.content.experimental.advanceQuery;O(()=>i,()=>n(),{deep:!0});const a=e=>p?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:v,refresh:n}=await N(`content-query-${_(i)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),o.value&&(e=e.without(o.value)),u.value&&(e=e.where(u.value)),l.value&&(e=e.sort(l.value)),d.value&&(e=e.limit(d.value)),f.value&&(e=e.skip(f.value)),s.value&&(e=e.where({_locale:s.value})),h.value==="one"?e.findOne().then(a):h.value==="surround"?t.value?p?e.findSurround(t.value):e.withSurround(t.value).findOne().then(a):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(a)):e.find().then(a)});return{isPartial:y,data:v,refresh:n}},render(i){var c;const t=k(),{data:r,refresh:o,isPartial:u,path:l,only:d,without:f,where:s,sort:h,limit:y,skip:p,locale:a,find:v}=i,n={path:l,only:d,without:f,where:s,sort:h,limit:y,skip:p,locale:a,find:v};if(n.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:n,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((c=r==null?void 0:r.body)!=null&&c.children.length))return t.empty({props:n,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:n,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:o,isPartial:u,props:n,...this.$attrs}):((w,q)=>A("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:r,props:n,isPartial:u})}}),j=Q;export{j as default};
