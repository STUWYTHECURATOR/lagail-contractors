const img={name:'image',title:'Photo',type:'image',options:{hotspot:true}}
export const schemaTypes=[
{name:'project',title:'Projects (Gallery)',type:'document',fields:[{name:'title',type:'string',validation:r=>r.required()},{name:'description',type:'text',rows:3},
 {name:'category',type:'string',description:'Keep spelling consistent, e.g. Building, Electrical, Welding, Plumbing'},{...img,validation:r=>r.required()}]},
{name:'service',title:'Services',type:'document',fields:[{name:'title',type:'string',validation:r=>r.required()},{name:'description',type:'text',rows:3},{...img},{name:'order',type:'number',description:'Smaller number shows first'}]},
{name:'siteSettings',title:'Website Settings',type:'document',fields:['company','tagline','phone1','phone2','email','address','whatsapp','specialisations'].map(n=>({name:n,type:'string'}))}]
