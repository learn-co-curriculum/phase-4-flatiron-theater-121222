(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,n){"use strict";n.r(t);var c,r=n(1),i=n(24),o=n.n(i),a=n(6),s=n(21),j=n(2),u=n(3),l=n(7),b=n(5),d=n(0);var h,O,p=function(e){var t=e.production,n=t.title,c=t.budget,r=t.genre,i=t.image,o=t.id;return console.log(t),Object(d.jsxs)(x,{children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)(b.b,{to:"/productions/".concat(o),children:[" ",Object(d.jsx)("h2",{children:n})]}),Object(d.jsx)("p",{children:r}),Object(d.jsxs)("p",{children:["$ ",c]})]}),Object(d.jsx)("img",{src:i})]})},x=l.b.li(c||(c=Object(a.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content:start;\n    font-family:Arial, sans-serif;\n    margin:10px;\n    &:hover {\n      transform: scale(1.15);\n      transform-origin: top left;\n    }\n    a{\n      text-decoration:none;\n      color:white;\n    }\n    img{\n      width: 180px;\n      margin-left:20%;\n      mask-image: linear-gradient(to left, rgba(0, 0, 0, .9) 80%, transparent 100%);\n    }\n    position:relative;\n    div{\n     position:absolute;\n    \n    }\n  "])));var f,m=function(e){var t=e.productions;return Object(d.jsxs)("div",{children:[Object(d.jsxs)(g,{children:[Object(d.jsx)("span",{children:"F"}),"latIron Theater ",Object(d.jsx)("span",{children:"C"}),"ompany"]}),Object(d.jsx)(v,{children:t.map((function(e){return Object(d.jsx)(p,{production:e},e.id)}))})]})},g=l.b.h1(h||(h=Object(a.a)(["\n    text-transform: uppercase;\n    font-family:Arial, sans-serif;\n    width:70px;\n    font-size: 70px;\n    line-height: .8;\n   \n    transform: scale(.7, 1.4);\n    \n    span{\n        color:#42ddf5;\n    }\n"]))),v=l.b.ul(O||(O=Object(a.a)(["\n    display:flex;\n    flex-direction:column;\n\n"])));var y,w=function(e){var t=e.productions;return Object(d.jsxs)("div",{children:[Object(d.jsx)(S,{}),Object(d.jsx)(m,{productions:t})]})},S=l.b.img.attrs((function(){return{src:"https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"}}))(f||(f=Object(a.a)(["\n    position: absolute;\n    z-index:-1;\n  "]))),C=n(12),k=n(8),P=l.b.form(y||(y=Object(a.a)(["\ndisplay:flex;\nflex-direction:column;\nwidth: 400px;\nmargin:auto;\nfont-family:Arial;\nfont-size:30px;\ninput[type=submit]{\n  background-color:#42ddf5;\n  color: white;\n  height:40px;\n  font-family:Arial;\n  font-size:30px;\n  margin-top:10px;\n  margin-bottom:10px;\n}\n"])));var T=function(e){var t=e.addProduction,n=Object(r.useState)({title:"",genre:"",budget:"",image:"",director:"",description:""}),c=Object(j.a)(n,2),i=c[0],o=c[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),u=s[0],l=s[1],b=function(e){var t=e.target,n=t.name,c=t.value;o(Object(k.a)(Object(k.a)({},i),{},Object(C.a)({},n,c)))};return Object(d.jsxs)("div",{className:"App",children:[u?u.map((function(e){return Object(d.jsx)("div",{children:e})})):null,Object(d.jsxs)(P,{onSubmit:function(e){e.preventDefault(),fetch("/productions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(k.a)(Object(k.a)({},i),{},{ongoing:!0}))}).then((function(e){e.ok?e.json().then(t):e.json().then((function(e){return l(Object.entries(e.errors).map((function(e){return"".concat(e[0]," ").concat(e[1])})))}))}))},children:[Object(d.jsx)("label",{children:"Title "}),Object(d.jsx)("input",{type:"text",name:"title",value:i.title,onChange:b}),Object(d.jsx)("label",{children:" Genre"}),Object(d.jsx)("input",{type:"text",name:"genre",value:i.genre,onChange:b}),Object(d.jsx)("label",{children:"Budget"}),Object(d.jsx)("input",{type:"number",name:"budget",value:i.budget,onChange:b}),Object(d.jsx)("label",{children:"Image"}),Object(d.jsx)("input",{type:"text",name:"image",value:i.image,onChange:b}),Object(d.jsx)("label",{children:"Director"}),Object(d.jsx)("input",{type:"text",name:"director",value:i.director,onChange:b}),Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("textarea",{type:"text",rows:"4",cols:"50",name:"description",value:i.description,onChange:b}),Object(d.jsx)("input",{type:"submit",value:"Update Production"})]}),u?u.map((function(e){return Object(d.jsx)("h2",{style:{color:"red"},children:e.toUpperCase()})})):null]})};var U,D,E,A=function(e){var t=e.updateProduction,n=Object(r.useState)({title:"",genre:"",budget:"",image:"",director:"",description:""}),c=Object(j.a)(n,2),i=c[0],o=c[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),l=s[0],b=s[1],h=Object(u.g)().id;Object(r.useEffect)((function(){fetch("/productions/".concat(h)).then((function(e){return e.json()})).then(o)}),[]);var O=function(e){var t=e.target,n=t.name,c=t.value;o(Object(k.a)(Object(k.a)({},i),{},Object(C.a)({},n,c)))};return Object(d.jsxs)("div",{className:"App",children:[l?l.map((function(e){return Object(d.jsx)("div",{children:e})})):null,Object(d.jsxs)(P,{onSubmit:function(e){e.preventDefault(),fetch("/productions/".concat(h),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){e.ok?e.json().then(t):e.json().then((function(e){return b(Object.entries(e.errors).map((function(e){return"".concat(e[0]," ").concat(e[1])})))}))}))},children:[Object(d.jsx)("label",{children:"Title "}),Object(d.jsx)("input",{type:"text",name:"title",value:i.title,onChange:O}),Object(d.jsx)("label",{children:" Genre"}),Object(d.jsx)("input",{type:"text",name:"genre",value:i.genre,onChange:O}),Object(d.jsx)("label",{children:"Budget"}),Object(d.jsx)("input",{type:"number",name:"budget",value:i.budget,onChange:O}),Object(d.jsx)("label",{children:"Image"}),Object(d.jsx)("input",{type:"text",name:"image",value:i.image,onChange:O}),Object(d.jsx)("label",{children:"Director"}),Object(d.jsx)("input",{type:"text",name:"director",value:i.director,onChange:O}),Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("textarea",{type:"text",rows:"4",cols:"50",name:"description",value:i.description,onChange:O}),Object(d.jsx)("input",{type:"submit",value:"Update Production"})]}),l?l.map((function(e){return Object(d.jsx)("h2",{style:{color:"red"},children:e.toUpperCase()})})):null]})},N=n(28);var z,F=function(e){var t=e.updateUser,n=Object(r.useState)(!1),c=Object(j.a)(n,2),i=c[0],o=c[1],a=Object(u.f)();return Object(d.jsxs)(L,{children:[Object(d.jsx)(J,{children:"Flatiron Theater Company"}),Object(d.jsx)(B,{children:i?Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:function(){return o(!i)},children:"x"}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/users/1",children:"User Page"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/users/new",children:"Sign Up"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/login",children:"Login"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/productions/new",children:"New Production"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",children:" Home"})}),Object(d.jsx)("button",{onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&(t(null),a.push("/login"))}))},children:"Logout"})]}):Object(d.jsx)("div",{onClick:function(){return o(!i)},children:Object(d.jsx)(N.a,{size:30})})})]})},J=l.b.h1(U||(U=Object(a.a)(["\nfont-family: 'Splash', cursive;\n"]))),L=l.b.div(D||(D=Object(a.a)(["\n  display: flex;\n  justify-content:space-between;\n  \n"]))),B=l.b.div(E||(E=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  a{\n    text-decoration: none;\n    color:white;\n    font-family:Arial;\n  }\n  a:hover{\n    color:pink\n  }\n  ul{\n    list-style:none;\n  }\n  \n"])));var G=function(e){var t=e.deleteProduction,n=Object(r.useState)({}),c=Object(j.a)(n,2),i=c[0],o=c[1],a=Object(r.useState)(!0),s=Object(j.a)(a,2),l=s[0],h=s[1],O=Object(r.useState)(!1),p=Object(j.a)(O,2),x=p[0],f=p[1],m=Object(u.g)(),g=Object(u.f)();if(Object(r.useEffect)((function(){fetch("/productions/".concat(m.id)).then((function(e){e.ok?e.json().then((function(e){o(e),h(!1)})):(console.log("error"),e.json().then((function(e){return f(e.error)})))}))}),[]),l)return Object(d.jsx)("h1",{children:"Loading"});if(x)return Object(d.jsx)("h1",{children:x});var v=i.id,y=i.title,w=(i.budget,i.genre),S=i.image,C=i.description,k=i.cast_members;return console.log(k),Object(d.jsxs)(H,{children:[Object(d.jsx)("h1",{children:y}),Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Genre:"}),Object(d.jsx)("p",{children:w}),Object(d.jsx)("h3",{children:"Description:"}),Object(d.jsx)("p",{children:C}),Object(d.jsx)("h2",{children:"Crew Memebers"}),Object(d.jsx)("ul",{children:k.map((function(e){return Object(d.jsxs)("li",{children:[e.role," : ",e.name]})}))})]}),Object(d.jsx)("img",{src:S})]}),Object(d.jsx)("button",{children:Object(d.jsx)(b.b,{to:"/productions/".concat(v,"/edit"),children:"Edit Production"})}),Object(d.jsx)("button",{onClick:function(){fetch("/productions/".concat(m.id),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){e.ok?(t(v),g.push("/")):e.json().then((function(e){return f(Object.entries(e.errors).map((function(e){return"".concat(e[0]," ").concat(e[1])})))}))}))},children:"Delete Production"}),Object(d.jsx)("button",{onClick:function(){fetch("/tickets",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({production_id:v,user_id:1,price:30.5})}).then((function(e){e.ok?g.push("/users/1"):e.json().then((function(e){return f(Object.entries(e.errors).map((function(e){return"".concat(e[0]," ").concat(e[1])})))}))}))},children:"Buy Ticket"})]})},H=l.b.li(z||(z=Object(a.a)(["\n    display:flex;\n    flex-direction:column;\n    justify-content:start;\n    font-family:Arial, sans-serif;\n    margin:5px;\n    h1{\n      font-size:60px;\n      border-bottom:solid;\n      border-color:#42ddf5;\n    }\n    .wrapper{\n      display:flex;\n      div{\n        margin:10px;\n      }\n    }\n    img{\n      width: 300px;\n    }\n    button{\n      background-color:#42ddf5;\n      color: white;\n      height:40px;\n      font-family:Arial;\n      font-size:30px;\n      margin-top:10px;\n    }\n  "])));var I=function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!0),o=Object(j.a)(i,2),a=o[0],s=o[1],l=Object(r.useState)(!1),b=Object(j.a)(l,2),h=b[0],O=b[1],p=Object(u.g)().id;return Object(r.useEffect)((function(){fetch("/users/".concat(p)).then((function(e){e.ok?e.json().then((function(e){c(e),s(!1)})):e.json().then((function(e){return O(e.error)}))}))}),[]),a?Object(d.jsx)("h1",{children:"Loading"}):h?Object(d.jsx)("h1",{children:h}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:n.name}),Object(d.jsx)("h3",{children:"Tickets"}),Object(d.jsx)("ul",{children:n.tickets.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("h2",{children:e.production.title}),Object(d.jsxs)("p",{children:["Price: ",e.price]})]})}))})]})};var M=function(e){var t=e.updateUser,n=Object(r.useState)({name:"",email:"",password:""}),c=Object(j.a)(n,2),i=c[0],o=c[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),l=s[0],b=s[1],h=Object(u.f)(),O=i.name,p=i.email,x=i.password,f=function(e){var t=e.target,n=t.name,c=t.value;o(Object(k.a)(Object(k.a)({},i),{},Object(C.a)({},n,c)))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(P,{onSubmit:function(e){e.preventDefault();var n={name:O,email:p,password:x};fetch("/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){e.ok?e.json().then((function(e){t(e),h.push("/users/".concat(e.id))})):e.json().then((function(e){return b(Object.entries(e.errors))}))}))},children:[Object(d.jsx)("label",{children:"Username"}),Object(d.jsx)("input",{type:"text",name:"name",value:O,onChange:f}),Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{type:"text",name:"email",value:p,onChange:f}),Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",value:x,onChange:f}),Object(d.jsx)("input",{type:"submit",value:"Sign up!"})]}),l?l.map((function(e){return Object(d.jsx)("div",{children:e[0]+": "+e[1]})})):null]})};var _=function(e){var t=e.updateUser,n=Object(r.useState)({name:"",password:""}),c=Object(j.a)(n,2),i=c[0],o=c[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),l=s[0],b=s[1],h=Object(u.f)(),O=i.name,p=i.email,x=i.password,f=function(e){var t=e.target,n=t.name,c=t.value;o(Object(k.a)(Object(k.a)({},i),{},Object(C.a)({},n,c)))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(P,{onSubmit:function(e){e.preventDefault();var n={name:O,password:x};fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){e.ok?e.json().then((function(e){t(e),h.push("/users/".concat(e.id))})):e.json().then((function(e){return b(e.error)}))}))},children:[Object(d.jsx)("label",{children:"Username"}),Object(d.jsx)("input",{type:"text",name:"name",value:O,onChange:f}),Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",value:p,onChange:f}),Object(d.jsx)("input",{type:"submit",value:"Log in!"})]}),l?Object(d.jsx)("h2",{children:l}):null]})};var W,q=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Sorry We can't find the Page you're looking for!"}),Object(d.jsx)("h1",{children:"404 Not Found"})]})};var V=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!1),o=Object(j.a)(i,2),a=o[0],l=o[1],b=Object(r.useState)([]),h=Object(j.a)(b,2),O=h[0],p=h[1],x=Object(r.useState)(null),f=Object(j.a)(x,2),m=f[0],g=f[1];Object(r.useEffect)((function(){fetch("/authorized").then((function(e){e.ok?e.json().then((function(e){g(e),v()})):g(null)}))}),[]);var v=function(){fetch("/productions").then((function(e){e.ok?e.json().then(c):e.json().then((function(e){return l(e.error)}))}))},y=function(e){return g(e)};return a?Object(d.jsx)("h1",{children:a}):m?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Y,{}),Object(d.jsx)(F,{cart:O,updateUser:y}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/productions/new",children:Object(d.jsx)(T,{addProduction:function(e){return c((function(t){return[].concat(Object(s.a)(t),[e])}))}})}),Object(d.jsx)(u.a,{path:"/productions/:id/edit",children:Object(d.jsx)(A,{updateProduction:function(e){return c((function(t){return t.map((function(t){return t.id===e.id?e:t}))}))}})}),Object(d.jsx)(u.a,{path:"/productions/:id",children:Object(d.jsx)(G,{addToCart:function(e){return p((function(t){return[].concat(Object(s.a)(t),[e])}))},deleteProduction:function(e){return c((function(t){return t.filter((function(t){return t.id!==e}))}))}})}),Object(d.jsx)(u.a,{path:"/users/new",children:Object(d.jsx)(M,{updateUser:y})}),Object(d.jsx)(u.a,{path:"/users/:id",children:Object(d.jsx)(I,{})}),Object(d.jsx)(u.a,{path:"/login",children:Object(d.jsx)(_,{updateUser:y})}),Object(d.jsx)(u.a,{exact:!0,path:"/",children:Object(d.jsx)(w,{productions:n})}),Object(d.jsx)(u.a,{children:Object(d.jsx)(q,{})})]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Y,{}),Object(d.jsx)(F,{cart:O,updateUser:y}),Object(d.jsx)(_,{updateUser:y})]})},Y=Object(l.a)(W||(W=Object(a.a)(["\n    body{\n      background-color: black; \n      color:white;\n    }\n    "])));o.a.render(Object(d.jsx)(b.a,{children:Object(d.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4d243c3c.chunk.js.map