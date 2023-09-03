"use strict";(self.webpackChunkkulture_blog_be=self.webpackChunkkulture_blog_be||[]).push([[6394],{84409:(R,o,e)=>{e.d(o,{p:()=>d});var t=e(67294),u=e(57993),_=e(88767);const d=(P={})=>{const{get:E}=(0,u.kY)(),{data:a,isLoading:n}=(0,_.useQuery)(["ee","providers"],async()=>{const{data:m}=await E("/admin/providers");return m},P);return{providers:t.useMemo(()=>a??[],[a]),isLoading:n}}},76394:(R,o,e)=>{e.r(o),e.d(o,{LoginEE:()=>i});var t=e(67294),u=e(70004),_=e(41580),d=e(11047),P=e(75515),E=e(45697),a=e.n(E),n=e(86896),D=e(88972),m=e(50745),O=e(31640),M=e(84409),v=e(80090);const l=(0,D.ZP)(u.i)`
  flex: 1;
`,i=c=>{const{formatMessage:s}=(0,n.Z)(),{isLoading:g,providers:p}=(0,M.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!g&&p.length===0?t.createElement(m.ZP,null,t.createElement(O.Z,{...c})):t.createElement(m.ZP,null,t.createElement(O.Z,{...c},t.createElement(_.x,{paddingTop:7},t.createElement(d.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(d.k,null,t.createElement(l,null),t.createElement(_.x,{paddingLeft:3,paddingRight:3},t.createElement(P.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Auth.login.sso.divider"}))),t.createElement(l,null)),t.createElement(v.Z,{providers:p,displayAllProviders:!1})))))};i.defaultProps={onSubmit:c=>c.preventDefault(),requestError:null},i.propTypes={formErrors:a().object.isRequired,modifiedData:a().object.isRequired,onChange:a().func.isRequired,onSubmit:a().func,requestError:a().object}},80090:(R,o,e)=>{e.d(o,{Z:()=>c});var t=e(67294),u=e(11047),_=e(84495),d=e(75515),P=e(11276),E=e(67819),a=e(45697),n=e.n(a),D=e(86896),m=e(73727),O=e(88972);const M=O.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`,v=(0,O.ZP)(u.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,l=({provider:s})=>t.createElement(_.u,{label:s.displayName},t.createElement(M,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`},s.icon?t.createElement("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(d.Z,null,s.displayName)));l.propTypes={provider:n().shape({icon:n().string,displayName:n().string.isRequired,uid:n().string.isRequired}).isRequired};const i=({providers:s,displayAllProviders:g})=>{const{formatMessage:p}=(0,D.Z)();return g?t.createElement(P.r,{gap:4},s.map(r=>t.createElement(E.P,{key:r.uid,col:4},t.createElement(l,{provider:r})))):s.length>2&&!g?t.createElement(P.r,{gap:4},s.slice(0,2).map(r=>t.createElement(E.P,{key:r.uid,col:4},t.createElement(l,{provider:r}))),t.createElement(E.P,{col:4},t.createElement(_.u,{label:p({id:"global.see-more"})},t.createElement(M,{as:m.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(v,{justifyContent:"center"},s.map(r=>t.createElement(l,{key:r.uid,provider:r})))};i.defaultProps={displayAllProviders:!0},i.propTypes={providers:n().arrayOf(n().object).isRequired,displayAllProviders:n().bool};const c=i}}]);
