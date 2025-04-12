(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),i=n(1),a=n(0),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://zer0-sh.github.io/",j="Zer0sh",h="Johann M",b="Backend Dev - SysAdmin - Geek",d="Hey everyone! I'm a systems engineering student on a quest to become the ultimate code ninja, a gaming fanatic, and a Linux lover rolled into one! I live for tech and never back down from a challenge. I'm embarking on a covert mission to tap into my inner Diogenes and fully adopt the philosophy of cynicism in today's digital era, all while championing the cause of open-source software. Because in a world of proprietary solutions, I believe in the power of freedom, transparency, and community-driven innovation that comes with embracing the ethos of free software.",u="https://www.linkedin.com/in/steven-munozl/",m={linkedin:"https://www.linkedin.com/in/steven-munozl/",github:"https://github.com/zer0-sh/"},O=[{name:"Cooming soon!",description:"In this section, I will showcase my projects. Stay tuned for updates!",stack:["HTML","CSS","Web Design"],sourceCode:"https://github.com",livePreview:"https://github.com"}],x=["Java","Python","PostgreSQL","Gnu/Linux","Docker","HTML","CSS","JavaScript","TypeScript","React","Git","CI/CD"],f="steven.jm357@gmail.com",p=n(16),v=n.n(p),k=n(14),g=n.n(k),N=n(18),_=n.n(N),w=n(17),y=n.n(w),C=(n(28),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],h=o[1],b=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,x.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,f?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(g.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(y.a,{}):Object(a.jsx)(_.a,{})})]})}),S=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(C,{})]})}),I=n(11),E=n.n(I),L=n(19),P=n.n(L),z=(n(33),function(){var e=h,t=b,n=d,c=u,s=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(P.a,{})})]})]})]})}),D=n(7),J=n.n(D),T=n(20),H=n.n(T),M=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(H.a,{})})]})}),B=(n(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(M,{project:e},J()())}))})]}):null}),G=(n(37),function(){return x.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),Q=n(21),A=n.n(Q),R=(n(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top","aria-label":"top",children:Object(a.jsx)(A.a,{fontSize:"large"})})}):null}),W=(n(39),function(){return f?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(f),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),q=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",className:"link footer__link",children:"... el amor es la certeza de la vida. Es la sensaci\xf3n de la inmortalidad. \ud83e\udd40"})})}),F=(n(41),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(S,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(z,{}),Object(a.jsx)(B,{}),Object(a.jsx)(G,{}),Object(a.jsx)(W,{})]}),Object(a.jsx)(R,{}),Object(a.jsx)(q,{})]})});n(42);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e2347518.chunk.js.map