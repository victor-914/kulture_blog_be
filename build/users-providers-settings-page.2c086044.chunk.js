"use strict";(self.webpackChunkkulture_blog_be=self.webpackChunkkulture_blog_be||[]).push([[2282],{1431:(W,y,t)=>{t.r(y),t.d(y,{ProvidersPage:()=>de,default:()=>Te});var e=t(67294),o=t(17034),E=t(185),x=t(53979),T=t(49066),L=t(38939),l=t(8060),p=t(79031),m=t(37909),P=t(75515),I=t(63237),j=t(15234),i=t(12028),a=t(57993),g=t(4585),u=t(11700),h=t.n(u),f=t(86896),C=t(88767),$=t(42866),w=t(24969),X=t(59946),ge=t(11047),he=t(11276),pe=t(67819),fe=t(36856),ae=t(29728),be=t(63321),ye=t(36773),Ee=t(41054),xe=t(45697),n=t.n(xe),Pe=t(93127),Me=t(16364);const Q=({description:c,disabled:A,intlLabel:U,error:B,name:O,onChange:F,placeholder:d,providerToEditName:S,type:Z,value:M})=>{const{formatMessage:b}=(0,f.Z)(),D=O==="noName"?`${window.strapi.backendURL}/api/connect/${S}/callback`:M,z=b({id:U.id,defaultMessage:U.defaultMessage},{provider:S,...U.values}),R=c?b({id:c.id,defaultMessage:c.defaultMessage},{provider:S,...c.values}):"";if(Z==="bool")return e.createElement(Pe.s,{"aria-label":O,checked:M,disabled:A,hint:R,label:z,name:O,offLabel:b({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:b({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:K=>{F({target:{name:O,value:K.target.checked}})}});const q=d?b({id:d.id,defaultMessage:d.defaultMessage},{...d.values}):"",_=B?b({id:B,defaultMessage:B}):"";return e.createElement(Me.o,{"aria-label":O,disabled:A,error:_,label:z,name:O,onChange:F,placeholder:q,type:Z,value:D})};Q.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},Q.propTypes={description:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),providerToEditName:n().string.isRequired,type:n().string.isRequired,value:n().oneOfType([n().bool,n().string])};const Le=Q,V=({headerBreadcrumbs:c,initialData:A,isSubmiting:U,layout:B,isOpen:O,onSubmit:F,onToggle:d,providerToEditName:S})=>{const{formatMessage:Z}=(0,f.Z)();return O?e.createElement($.P,{onClose:d,labelledBy:"title"},e.createElement(w.x,null,e.createElement(be.O,{label:c.join(", ")},c.map((M,b,D)=>e.createElement(ye.$,{isCurrent:b===D.length-1,key:M},M)))),e.createElement(Ee.J9,{onSubmit:M=>F(M),initialValues:A,validationSchema:B.schema,validateOnChange:!1},({errors:M,handleChange:b,values:D})=>e.createElement(a.l0,null,e.createElement(X.f,null,e.createElement(ge.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(he.r,{gap:5},B.form.map(z=>z.map(R=>e.createElement(pe.P,{key:R.name,col:R.size,xs:12},e.createElement(Le,{...R,error:M[R.name],onChange:b,value:D[R.name],providerToEditName:S}))))))),e.createElement(fe.m,{startActions:e.createElement(ae.z,{variant:"tertiary",onClick:d,type:"button"},Z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(ae.z,{type:"submit",loading:U},Z({id:"global.save",defaultMessage:"Save"}))})))):null};V.defaultProps={initialData:null,providerToEditName:null},V.propTypes={headerBreadcrumbs:n().arrayOf(n().string).isRequired,initialData:n().object,layout:n().shape({form:n().arrayOf(n().array),schema:n().object}).isRequired,isOpen:n().bool.isRequired,isSubmiting:n().bool.isRequired,onSubmit:n().func.isRequired,onToggle:n().func.isRequired,providerToEditName:n().string};const Oe=V;var ne=t(84419),v=t(99688),s=t(87561);const se={id:(0,v.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},re={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},G={id:(0,v.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,v.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ie={id:(0,v.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},le={id:(0,v.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},N={id:(0,v.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},oe={id:(0,v.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6}]],schema:s.Ry().shape({enabled:s.Xg().required(a.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:oe,name:"secret",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:le,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:s.Ry().shape({enabled:s.Xg().required(a.I0.required),key:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()}),secret:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()}),callback:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:oe,name:"secret",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,v.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:N,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,v.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,v.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:le,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:s.Ry().shape({enabled:s.Xg().required(a.I0.required),key:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()}),secret:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()}),subdomain:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()}),callback:s.Z_().when("enabled",{is:!0,then:s.Z_().required(a.I0.required),otherwise:s.Z_()})})}},de=()=>{const{formatMessage:c,locale:A}=(0,f.Z)(),U=(0,C.useQueryClient)(),{trackUsage:B}=(0,a.rS)(),[O,F]=e.useState(!1),[d,S]=e.useState(null),Z=(0,a.lm)(),{lockApp:M,unlockApp:b}=(0,a.o1)(),{get:D,put:z}=(0,a.kY)(),{formatAPIError:R}=(0,a.So)(),q=(0,a.Xe)(A,{sensitivity:"base"});(0,a.go)();const{isLoading:_,allowedActions:{canUpdate:K}}=(0,a.ss)({update:ne._.updateProviders}),{isLoading:Be,data:ee}=(0,C.useQuery)(["users-permissions","get-providers"],async()=>{const{data:r}=await D("/users-permissions/providers");return r},{initialData:{}}),ue=(0,C.useMutation)(r=>z("/users-permissions/providers",r),{async onSuccess(){await U.invalidateQueries(["users-permissions","providers"]),Z({type:"success",message:{id:(0,v.OB)("notification.success.submit")}}),B("didEditAuthenticationProvider"),te(),b()},onError(r){Z({type:"warning",message:R(r)}),b()},refetchActive:!1}),k=Object.entries(ee).reduce((r,[H,Ze])=>{const{icon:ve,enabled:Ie,subdomain:Ue}=Ze;return r.push({name:H,icon:ve==="envelope"?["fas","envelope"]:["fab",ve],enabled:Ie,subdomain:Ue}),r},[]).sort((r,H)=>q.compare(r.name,H.name)),Re=Be||_,ce=e.useMemo(()=>d?!!k.find(H=>H.name===d)?.subdomain:!1,[k,d]),je=e.useMemo(()=>d==="email"?Y.email:ce?Y.providersWithSubdomain:Y.providers,[d,ce]),te=()=>{F(r=>!r)},me=r=>{K&&(S(r.name),te())},Ce=async r=>{M(),B("willEditAuthenticationProvider"),ue.mutate({providers:{...ee,[d]:r}})};return e.createElement(o.A,null,e.createElement(a.SL,{name:c({id:(0,v.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),e.createElement(E.o,null,e.createElement(x.T,{title:c({id:(0,v.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Re?e.createElement(a.dO,null):e.createElement(T.D,null,e.createElement(L.i,{colCount:3,rowCount:k.length+1},e.createElement(l.h,null,e.createElement(p.Tr,null,e.createElement(m.Th,null,e.createElement(P.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(m.Th,null,e.createElement(P.Z,{variant:"sigma",textColor:"neutral600"},c({id:(0,v.OB)("Providers.status"),defaultMessage:"Status"}))),e.createElement(m.Th,null,e.createElement(P.Z,{variant:"sigma"},e.createElement(I.T,null,c({id:"global.settings",defaultMessage:"Settings"})))))),e.createElement(j.p,null,k.map(r=>e.createElement(p.Tr,{key:r.name,...(0,a.X7)({fn:()=>me(r),condition:K})},e.createElement(m.Td,{width:"45%"},e.createElement(P.Z,{fontWeight:"semiBold",textColor:"neutral800"},r.name)),e.createElement(m.Td,{width:"65%"},e.createElement(P.Z,{textColor:r.enabled?"success600":"danger600","data-testid":`enable-${r.name}`},r.enabled?c({id:"global.enabled",defaultMessage:"Enabled"}):c({id:"global.disabled",defaultMessage:"Disabled"}))),e.createElement(m.Td,{...a.UW},K&&e.createElement(i.h,{onClick:()=>me(r),noBorder:!0,icon:e.createElement(g.Z,null),label:"Edit"})))))))),e.createElement(Oe,{initialData:ee[d],isOpen:O,isSubmiting:ue.isLoading,layout:je,headerBreadcrumbs:[c({id:(0,v.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),h()(d)],onToggle:te,onSubmit:Ce,providerToEditName:d}))},Te=()=>e.createElement(a.O4,{permissions:ne._.readProviders},e.createElement(de,null))},99688:(W,y,t)=>{t.d(y,{YX:()=>x,OB:()=>T.Z});var e=t(41609),o=t.n(e);const x=L=>Object.keys(L).reduce((l,p)=>{const m=L[p].controllers,P=Object.keys(m).reduce((I,j)=>(o()(m[j])||(I[j]=m[j]),I),{});return o()(P)||(l[p]={controllers:P}),l},{});var T=t(58655)},49066:(W,y,t)=>{t.d(y,{D:()=>E});var e=t(85893),o=t(41580);const E=({children:x})=>(0,e.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:x})},53979:(W,y,t)=>{t.d(y,{T:()=>P});var e=t(85893),o=t(67294),E=t(88972);const x=i=>{const a=(0,o.useRef)(null),[g,u]=(0,o.useState)(!0),h=([f])=>{u(f.isIntersecting)};return(0,o.useEffect)(()=>{const f=a.current,C=new IntersectionObserver(h,i);return f&&C.observe(a.current),()=>{f&&C.disconnect()}},[a,i]),[a,g]};var T=t(79698);const L=(i,a)=>{const g=(0,T.W)(a);(0,o.useLayoutEffect)(()=>{const u=new ResizeObserver(g);return Array.isArray(i)?i.forEach(h=>{h.current&&u.observe(h.current)}):i.current&&u.observe(i.current),()=>{u.disconnect()}},[i,g])};var l=t(41580),p=t(11047),m=t(75515);const P=i=>{const a=(0,o.useRef)(null),[g,u]=(0,o.useState)(null),[h,f]=x({root:null,rootMargin:"0px",threshold:0});return L(h,()=>{h.current&&u(h.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{a.current&&u(a.current.getBoundingClientRect())},[a]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:g?.height},ref:h,children:f&&(0,e.jsx)(j,{ref:a,...i})}),!f&&(0,e.jsx)(j,{...i,sticky:!0,width:g?.width})]})};P.displayName="HeaderLayout";const I=(0,E.ZP)(l.x)`
  width: ${({width:i})=>i?`${i/16}rem`:void 0};
  z-index: ${({theme:i})=>i.zIndices[1]};
`,j=o.forwardRef(({navigationAction:i,primaryAction:a,secondaryAction:g,subtitle:u,title:h,sticky:f,width:C,...$},w)=>{const X=typeof u=="string";return f?(0,e.jsx)(I,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:C,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{children:[i&&(0,e.jsx)(l.x,{paddingRight:3,children:i}),(0,e.jsxs)(l.x,{children:[(0,e.jsx)(m.Z,{variant:"beta",as:"h1",...$,children:h}),X?(0,e.jsx)(m.Z,{variant:"pi",textColor:"neutral600",children:u}):u]}),g?(0,e.jsx)(l.x,{paddingLeft:4,children:g}):null]}),(0,e.jsx)(p.k,{children:a?(0,e.jsx)(l.x,{paddingLeft:2,children:a}):void 0})]})}):(0,e.jsxs)(l.x,{ref:w,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:i?6:8,background:"neutral100","data-strapi-header":!0,children:[i?(0,e.jsx)(l.x,{paddingBottom:2,children:i}):null,(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{minWidth:0,children:[(0,e.jsx)(m.Z,{as:"h1",variant:"alpha",...$,children:h}),g?(0,e.jsx)(l.x,{paddingLeft:4,children:g}):null]}),a]}),X?(0,e.jsx)(m.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:u}):u]})})},17034:(W,y,t)=>{t.d(y,{A:()=>L});var e=t(85893),o=t(88972),E=t(41580);const x=(0,o.ZP)(E.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,T=(0,o.ZP)(E.x)`
  overflow-x: hidden;
`,L=({sideNav:l,children:p})=>(0,e.jsxs)(x,{hasSideNav:!!l,children:[l,(0,e.jsx)(T,{paddingBottom:10,children:p})]})},185:(W,y,t)=>{t.d(y,{o:()=>T});var e=t(85893),o=t(88972),E=t(41580);const x=(0,o.ZP)(E.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,T=({labelledBy:L="main-content-title",...l})=>(0,e.jsx)(x,{"aria-labelledby":L,as:"main",id:"main-content",tabIndex:-1,...l})}}]);
