(this["webpackJsonpui-assignment"]=this["webpackJsonpui-assignment"]||[]).push([[0],{248:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(66),s=a.n(n),l=a(29),i=a(12),r=a(252),j=a(17),o="USER_INPUT";var b={client:[{firstName:"",email:"",contact:""}]};var d=a(119),m=Object(i.combineReducers)({form:r.a,client:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(j.a)(Object(j.a)({},e),{},{client:t.client});default:return e}}}),u=a(42),O=a(18),p=a(250),x=a(249),h=(a(50),a.p+"static/media/Logo.bb3ce42d.PNG"),v=a(10),g=a(44),N=a(251),f=a(1),y=Object(x.a)({form:"signUp"})((function(){var e=Object(v.f)(),t=Object(c.useState)({uname:"",pwd:"",cpwd:"",id:Object(N.a)()}),a=Object(O.a)(t,2),n=a[0],s=a[1],l=n.uname,i=n.pwd,r=n.cpwd;Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n))}),[n]);var o=function(e){var t=e.target.name,a=e.target.value;s(Object(j.a)(Object(j.a)({},n),{},Object(u.a)({},t,a)))};return Object(f.jsxs)("div",{className:"body",children:[Object(f.jsx)("h1",{children:" "}),Object(f.jsxs)("div",{className:"formBox",children:[Object(f.jsx)("button",{type:"button",id:"signUpButton",children:"SIGN UP"}),Object(f.jsx)(g.b,{to:"/signIn",children:Object(f.jsx)("button",{type:"button",id:"signInButton",children:"SIGN IN"})}),Object(f.jsx)("img",{className:"logo",src:h,alt:"Opcito"}),Object(f.jsxs)("form",{id:"sign",className:"input-group1",onSubmit:function(t){t.preventDefault(),console.log(n),s({uname:"",pwd:"",cpwd:""}),e.push("/signIn")},children:[Object(f.jsx)(p.a,{type:"text",className:"InputField",placeholder:"Username*",name:"uname",component:"input",value:l,onChange:o,required:!0}),Object(f.jsx)(p.a,{type:"password",className:"InputField",placeholder:"Password*",name:"pwd",component:"input",value:i,onChange:o,required:!0}),Object(f.jsx)(p.a,{type:"password",className:"InputField",placeholder:"Confirm Password*",name:"cpwd",component:"input",value:r,onChange:o,required:!0}),Object(f.jsx)("button",{type:"button",id:"cancelButton",children:"Cancel"}),Object(f.jsx)("button",{type:"submit",id:"submitButton",children:"Submit"})]})]})]})})),S=a(13),w=Object(x.a)({form:"signIn"})((function(e){var t=Object(v.f)(),a=Object(c.useState)({uname:"",pwd:"",id:Object(N.a)()}),n=Object(O.a)(a,2),s=n[0],l=n[1],i=Object(c.useState)([]),r=Object(O.a)(i,2),o=r[0],b=r[1];Object(c.useEffect)((function(){localStorage.setItem("userInfo",JSON.stringify(s))}),[s]);var d=function(e){var t=e.target.name,a=e.target.value;l(Object(j.a)(Object(j.a)({},s),{},Object(u.a)({},t,a)))};return Object(f.jsxs)("div",{className:"body",children:[Object(f.jsx)("h1",{children:" "}),Object(f.jsxs)("div",{className:"formBox",children:[Object(f.jsx)(g.b,{to:"/signUp",children:Object(f.jsx)("button",{type:"button",id:"signUpButton",children:"SIGN UP"})}),Object(f.jsx)("button",{type:"button",id:"signInButton",children:"SIGN IN"}),Object(f.jsx)("img",{className:"logo",src:h,alt:"Opcito"}),Object(f.jsxs)("form",{id:"sign",className:"input-group1",onSubmit:function(e){e.preventDefault();var a=Object(j.a)(Object(j.a)({},s),{},{id:(new Date).getTime().toString()});b([].concat(Object(S.a)(o),[a])),console.log(a),l({uname:"",pwd:""}),t.push("/addClient")},children:[Object(f.jsx)(p.a,{type:"text",className:"InputField",placeholder:"Username*",name:"uname",component:"input",value:s.uname,onChange:d,required:!0}),Object(f.jsx)(p.a,{type:"password",className:"InputField",placeholder:"Password*",name:"pwd",component:"input",value:s.pwd,onChange:d,required:!0}),Object(f.jsx)("button",{type:"button",id:"cancelButton",children:"Cancel"}),Object(f.jsx)("button",{type:"submit",id:"submitButton",children:"Submit"})]})]})]})})),I=a(26),C=function(e){var t=Object(I.d)(e.name),a=Object(O.a)(t,2),c=a[0],n=a[1];return Object(f.jsxs)("div",{className:"form-group row no-gutters",children:[e.label&&Object(f.jsx)("label",{htmlFor:e.name,className:"label col-lg-3",children:e.label}),Object(f.jsx)("input",Object(j.a)(Object(j.a)(Object(j.a)({},c),e),{},{className:" inputField col-lg-9"})),n.error&&n.touched&&Object(f.jsx)("p",{className:"error",children:n.error})]})},B=a(57),F=function(){return Object(f.jsxs)("nav",{className:"navbar bg-light navbar-light navbar-expand-sm",children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("img",{src:h,alt:"Opcito"})}),Object(f.jsxs)("div",{className:"navbar-nav",children:[Object(f.jsx)("a",{className:"nav-item nav-link text",href:"#",children:"Preview Clients"}),Object(f.jsx)("a",{className:"nav-item nav-link active text",href:"#",children:"Add Clients"}),Object(f.jsx)("a",{className:"nav-item nav-link text",href:"#",children:"Log Out"})]})]})},P=a(93),U=Object(l.b)((function(e){return{client:e.client}}),(function(e){return{saveForm:function(t){e(function(e){return console.log("data in action file",e),{type:"USER_INPUT",client:{data:e}}}(t))}}}))((function(e){e.client;var t=e.saveForm,a=Object(v.f)(),n=Object(c.useState)([{partners:""}]),s=Object(O.a)(n,2),l=s[0],i=s[1],r=function(){i([].concat(Object(S.a)(l),[{partners:""}]))};return Object(f.jsxs)("div",{className:"body",children:[Object(f.jsx)(F,{}),Object(f.jsx)("h1",{children:"Add Client"}),Object(f.jsx)("div",{className:"outline",children:Object(f.jsx)(I.c,{initialValues:{firstName:"",middleName:"",lastName:"",email:"",contact:"",address:"",dob:"",age:"",gender:"",occupation:"",bName:"",bType:"",partners:"",avgIncome:""},validationSchema:B.b().shape({firstName:B.c().min(2,"Too Short!").max(15,"Too Long!").required("Required"),email:B.c().email("Invalid email").required("Required"),contact:B.a().required("Required Field")}),onSubmit:function(e,c){var n=c.setSubmitting;setTimeout((function(){n(!1)}),400);var s={firstName:e.firstName,email:e.email,contact:e.contact};t(s),localStorage.setItem("client",JSON.stringify(e)),a.push("/clientDetails")},children:function(e){var t=e.handleSubmit;return Object(f.jsxs)(I.b,{className:"form-group",onSubmit:t,children:[Object(f.jsx)("div",{className:"container-fluid",children:Object(f.jsxs)("div",{className:"row no-gutters",children:[Object(f.jsx)("div",{className:"col-lg-4",children:Object(f.jsx)("div",{className:"PPBox",children:Object(f.jsxs)("div",{className:"circle",children:[Object(f.jsx)(I.a,{id:"profile",name:"profilePicture",type:"file",accept:"image/png,image/jpeg",style:{display:"none"}}),Object(f.jsx)("label",{htmlFor:"profile",children:Object(f.jsx)("span",{className:"material-icons add",children:"add_circle"})})]})})}),Object(f.jsxs)("div",{className:"col-lg-8",children:[Object(f.jsx)(C,{type:"text",name:"firstName",label:"First Name*"}),Object(f.jsx)(C,{type:"text",name:"middleName",label:"Middle Name"}),Object(f.jsx)(C,{type:"text",name:"lastName",label:"Last Name"})]})]})}),Object(f.jsxs)("div",{className:"container-fluid row",children:[Object(f.jsx)("div",{className:"col-lg-6",children:Object(f.jsx)(C,{type:"email",label:"Email Id*",name:"email"})}),Object(f.jsx)("div",{className:"col-lg-6",children:Object(f.jsx)(C,{type:"tel",label:"Phone*",name:"contact"})})]}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(C,{type:"text",label:"Address",name:"address"})}),Object(f.jsxs)("div",{className:"container-fluid row",children:[Object(f.jsx)("div",{class:"col-lg-6",children:Object(f.jsx)(C,{type:"date",label:"DOB",name:"dob"})}),Object(f.jsx)("div",{className:"col-lg-6",children:Object(f.jsx)(C,{type:"number",label:"Age",name:"age"})})]}),Object(f.jsxs)("div",{className:"container-fluid row",children:[Object(f.jsx)("div",{className:"col-lg-6",children:Object(f.jsx)(C,{type:"text",label:"Business Name",name:"bName"})}),Object(f.jsx)("div",{className:"col-lg-6",children:Object(f.jsx)(C,{type:"text",label:"Business Type",name:"btype"})})]}),Object(f.jsx)("div",{className:"container-fluid ",children:Object(f.jsxs)("div",{className:"row ",children:[Object(f.jsxs)("div",{className:"col-lg-6",children:[Object(f.jsx)("p",{className:"label",children:"Gender"}),Object(f.jsxs)("label",{className:"label",children:[Object(f.jsx)(I.a,{type:"radio",name:"gender",value:"female"}),"Female"]}),Object(f.jsxs)("label",{className:"label",children:[Object(f.jsx)(I.a,{type:"radio",name:"gender",value:"male"}),"Male"]})]}),Object(f.jsxs)("div",{className:"col-lg-6",children:[Object(f.jsx)("p",{className:"label ",children:"Occupation"}),Object(f.jsxs)("label",{className:"label",children:[Object(f.jsx)(I.a,{type:"checkbox",name:"occupation",value:"Bussiness"}),"Business"]}),Object(f.jsxs)("label",{label:!0,className:"label",children:[Object(f.jsx)(I.a,{type:"checkbox",name:"occupation",value:"Service"}),"Service"]})]})]})}),Object(f.jsxs)("div",{className:"container-fluid row",children:[Object(f.jsxs)("div",{className:"col-lg-6",children:[Object(f.jsx)("label",{className:"label",htmlFor:"partners",children:"Partners if any"}),l.map((function(e,t){return Object(f.jsxs)("div",{children:[1!==l.length&&Object(f.jsx)("button",{className:"button",onClick:function(){return function(e){var t=Object(S.a)(l);t.splice(e,1),i(t)}(t)},children:Object(f.jsx)(P.a,{})}),Object(f.jsx)(I.a,{type:"text",className:" inputField",name:"partners",value:e.partners,onChange:function(e){return function(e,t){var a=e.target,c=a.name,n=a.value,s=Object(S.a)(l);s[t][c]=n,i(s)}(e,t)}}),l.length-1===t&&Object(f.jsx)("button",{className:"button",onClick:r,children:Object(f.jsx)(P.b,{})})]})}))]}),Object(f.jsxs)("div",{className:"col-lg-6",children:[Object(f.jsx)("label",{htmlFor:"annualS",style:{marginTop:"20px"},className:"col-lg-5 label",children:"Average Annual Income:"}),Object(f.jsxs)("select",{name:"annualS",style:{height:"40px",marginTop:"50px"},children:[Object(f.jsx)("option",{value:"",label:"Salary Range"}),Object(f.jsx)("option",{value:"30K",label:"29K"}),Object(f.jsx)("option",{value:"60K",label:"30K-59K"}),Object(f.jsx)("option",{value:"90K",label:"60K-90K"})]})]})]}),Object(f.jsx)("button",{type:"button",className:"btn",style:{marginLeft:"320px"},children:"Cancel"}),Object(f.jsx)("button",{type:"reset",className:"btn",children:"Reset"}),Object(f.jsx)("button",{type:"submit",className:"btn",children:" Submit"})]})}})})]})})),q=a(7),T=a(8),k=a(14),K=a(15),R=function(e){Object(k.a)(a,e);var t=Object(K.a)(a);function a(){return Object(q.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){var e=this.props.client;return console.log(e),Object(f.jsx)("div",{children:e})}}]),a}(c.Component),D=Object(l.b)((function(e){return{client:e.client}}))(R),A=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(g.a,{children:Object(f.jsxs)(v.c,{children:[Object(f.jsx)(v.a,{path:"/",exact:!0,component:y}),Object(f.jsx)(v.a,{path:"/signUp",component:y}),Object(f.jsx)(v.a,{path:"/signIn",component:w}),Object(f.jsx)(v.a,{path:"/addClient",component:U}),Object(f.jsx)(v.a,{path:"/clientDetails",component:D})]})})})};s.a.render(Object(f.jsx)(l.a,{store:Object(i.createStore)(m,Object(d.composeWithDevTools)()),children:Object(f.jsx)(A,{})}),document.getElementById("root"))},50:function(e,t,a){}},[[248,1,2]]]);
//# sourceMappingURL=main.baea8f24.chunk.js.map