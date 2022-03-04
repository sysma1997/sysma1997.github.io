"use strict";(self.webpackChunkporfolio_sysma1997=self.webpackChunkporfolio_sysma1997||[]).push([[826],{424:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(81),a=r.n(t),l=r(645),i=r.n(l),s=r(344),o=i()(a());o.i(s.Z),o.push([e.id,"html {\n    scroll-behavior: smooth;\n    scroll-padding-top: 5rem;\n\n    overflow: scroll;\n    overflow-x: hidden;\n}\n::-webkit-scrollbar {\n    width: 0;\n    background: transparent;\n} \n\n.content {\n    padding: 1rem;\n}\n.content header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    height: 80vh;\n    padding: 0 5rem;\n}\n.content header .profile {\n    border-radius: 50%;\n\n    margin-top: 1rem;\n    max-width: 20rem;\n}\n.content header .description {\n    display: flex;\n    flex-direction: column;\n}\n.content header .description .hi {\n    font-size: 2rem;\n}\n.content header .description .myName {\n    font-size: 3rem;\n    font-family: 'Courier New', Courier, monospace;\n}\n.content header .description .interested {\n    font-size: 1.8rem;\n    font-family: sans-serif;\n}\n\n#up {\n    background-color: #444;\n    border-radius: 50%;\n    color: white;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 3rem;\n    height: 3rem;\n    margin: 2rem;\n\n    position: fixed;\n    right: 0;\n    bottom: 0;\n}\n\n@media screen and \n(max-width: 1024px) {\n    .content header {\n        flex-direction: column-reverse;\n        height: auto;\n        padding: 0;\n        margin: 1rem;\n    }\n\n    .content header .description .hi {\n        font-size: 2rem;\n\n        margin-top: 1rem;\n    }\n    .content header .description .myName {\n        font-size: 1.5rem;\n        font-family: 'Courier New', Courier, monospace;\n    }\n    .content header .description .interested {\n        font-size: 1.1rem;\n        font-family: sans-serif;\n    }\n\n    #up {\n        width: 4rem;\n        height: 4rem;\n        margin: 1rem;\n    }\n}",""]);const c=o},243:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),a=r.n(t),l=r(645),i=r.n(l)()(a());i.push([e.id,"#about {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#about .aboutContent {\r\n    background-color: #444;\r\n    border-radius: 1rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1rem;\r\n    width: 50%;\r\n}\r\n#about .title {\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n#about .description {\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n@media screen and \r\n(max-width: 1024px) {\r\n    #about .aboutContent {\r\n        width: 90%;\r\n        margin-top: 2rem;\r\n    }\r\n}",""]);const s=i},363:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),a=r.n(t),l=r(645),i=r.n(l)()(a());i.push([e.id,"#contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n}\r\n\r\n#contact .title {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n#contact .contactList {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#contact .contactList .contactItem {\r\n    text-align: center;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n#contact .contactList .contactItem .contactItemIcon {\r\n    font-size: 3rem;\r\n}",""]);const s=i},287:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),a=r.n(t),l=r(645),i=r.n(l)()(a());i.push([e.id,"footer {\r\n    background-color: whitesmoke;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem;\r\n}",""]);const s=i},655:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),a=r.n(t),l=r(645),i=r.n(l)()(a());i.push([e.id,"#navbar {\r\n    box-shadow: inset 1px 0 0 rgb(0, 0, 0, 10%);\r\n    backdrop-filter: saturate(180%) blur(8px);\r\n    -webkit-box-shadow: inset 1px 0 0 rgb(0, 0, 0, 10%);\r\n    -webkit-backdrop-filter: saturate(180%) blur(8px);\r\n    border-bottom: 2px solid #444;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n#navbar .navbarTitle .navbarTitleLink {\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n}\r\n#navbar .navbarTitle .navbarResponsive {\r\n    display: none;\r\n}\r\n#navbar .navbarItems {\r\n    display: flex;\r\n}\r\n#navbar .navbarItems .navbarItem {\r\n    font-weight: bold;\r\n    margin: 0 1rem;\r\n}\r\n#navbar .navbarItemIcon {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n@media screen and \r\n(max-width: 1024px) {\r\n    #navbar {\r\n        flex-direction: column;\r\n        padding: 0;\r\n    }\r\n    #navbar .navbarTitle {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        width: 100%;\r\n        padding: 0.5rem 1rem;\r\n    }\r\n    #navbar .navbarTitle .navbarTitleLink {\r\n        font-size: 1.3rem;\r\n    }\r\n    #navbar .navbarTitle .navbarResponsive {\r\n        background-color: transparent;\r\n        border-radius: 0.6rem;\r\n        border: 2px solid #444;\r\n        font-size: 2rem;\r\n\r\n        display: block;\r\n        width: 3.5rem;\r\n    }\r\n    #navbar .navbarItems {\r\n        border-top: 2px solid #444;\r\n\r\n        display: none;\r\n        flex-direction: column;\r\n        width: 100%;\r\n    }\r\n    #navbar .navbarItems .navbarItem {\r\n        font-size: 1.5rem;\r\n\r\n        margin: 0.3rem 1rem;\r\n    }\r\n    #navbar .navbarItems .navbarItem .navbarItemIcon {\r\n        margin-right: 1rem;\r\n    }\r\n}",""]);const s=i},337:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),a=r.n(t),l=r(645),i=r.n(l)()(a());i.push([e.id,"#projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 2rem\r\n}\r\n\r\n#projects .projectsContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n}\r\n\r\n#projects .projectsContent .title {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n#projects .projectsContent .projectsList {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n#projects .projectsContent .projectsList .project {\r\n    border: 1px solid #444;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.3rem 1rem darkgray;\r\n\r\n    display: flex;\r\n    margin: 0.5rem 0.5rem;\r\n    width: 30%;\r\n    height: 300px;\r\n\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n#projects .projectsContent .projectsList .project .content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0.3rem;\r\n    flex: 1;\r\n}\r\n#projects .projectsContent .projectsList .project .content .title {\r\n    font-size: 1.5rem;\r\n    text-align: start;\r\n    flex: 1;\r\n}\r\n#projects .projectsContent .projectsList .project .content .description {\r\n    flex: 3;\r\n}\r\n#projects .projectsContent .projectsList .project .content .tags {\r\n    margin-top: 1rem;\r\n    flex: 1;\r\n}\r\n#projects .projectsContent .projectsList .project .content .tags .tag {\r\n    background-color: #444;\r\n    border-radius: 1rem;\r\n    color: white;\r\n}\r\n\r\n@media screen and \r\n(max-width: 1024px) {\r\n    #projects .projectsContent {\r\n        width: 90%;\r\n    }\r\n    #projects .projectsContent .projectsList {\r\n        flex-direction: column;\r\n    }\r\n    #projects .projectsContent .projectsList .project {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n}",""]);const s=i},490:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),a=r.n(t),l=r(645),i=r.n(l)()(a());i.push([e.id,"#skills {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 2rem\r\n}\r\n\r\n#skills .skillsContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n}\r\n\r\n#skills .skillsContent .title {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n#skills .skillsContent .subtitle {\r\n    font-size: 1.7rem;\r\n    font-weight: bold;\r\n\r\n    margin-top: 1rem;\r\n}\r\n\r\n#skills .skillsContent .skillsList {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n}\r\n\r\n#skills .skillsContent .skillsList .skillItem {\r\n    background-color: #444;\r\n    border-radius: 10%;\r\n    box-shadow: 0 0.3rem 1rem darkgray;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    width: 8rem;\r\n}\r\n#skills .skillsContent .skillsList .skillItem .skillIcon {\r\n    color: white;\r\n    font-size: 2rem;\r\n}\r\n#skills .skillsContent .skillsList .skillItem .skillLanguage {\r\n    color: white;\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and \r\n(max-width: 1024px) {\r\n    #skills .skillsContent {\r\n        width: 100%;\r\n    }\r\n    #skills .skillsContent .skillsList {\r\n        justify-content: center;\r\n    }\r\n}",""]);const s=i},673:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),a=r.n(t),l=r(645),i=r.n(l)()(a());i.push([e.id,"#works {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 2rem\r\n}\r\n\r\n#works .worksContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n}\r\n\r\n#works .worksContent .title {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n#works .worksContent .worksList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#works .worksContent .worksList .work {\r\n    border: 1px solid #444;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.3rem 1rem darkgray;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: 1rem;\r\n    height: 300px;\r\n}\r\n#works .worksContent .worksList .work .content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0.3rem;\r\n    flex: 1;\r\n}\r\n#works .worksContent .worksList .work .content .title {\r\n    text-align: start;\r\n    flex: 1;\r\n}\r\n#works .worksContent .worksList .work .content .description {\r\n    flex: 3;\r\n}\r\n#works .worksContent .worksList .work .content .tags {\r\n    flex: 1;\r\n}\r\n#works .worksContent .worksList .work .content .tags .tag {\r\n    background-color: #444;\r\n    border-radius: 1rem;\r\n    color: white;\r\n}\r\n#works .worksContent .worksList .work .content .link {\r\n    border-top: 1px solid #444;\r\n\r\n    text-align: center;\r\n    padding: 1rem;\r\n    flex: 1;\r\n}\r\n#works .worksContent .worksList .work .contentDivition {\r\n    background-color: #444;\r\n\r\n    width: 1px;\r\n}\r\n#works .worksContent .worksList .work .contentImage {\r\n    padding: 0.3rem;\r\n    flex: 1;\r\n}\r\n#works .worksContent .worksList .work .contentImage .image {\r\n    border-radius: 1rem;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n@media screen and \r\n(max-width: 1024px) {\r\n    #works .worksContent {\r\n        width: 90%;\r\n    }\r\n    #works .worksContent .worksList .work {\r\n        flex-direction: column-reverse;\r\n        height: auto;\r\n    }\r\n    #works .worksContent .worksList .work .content .tags {\r\n        margin-top: 1rem;\r\n    }\r\n}",""]);const s=i},181:(e,n,r)=>{var t=r(294),a=r(935),l=r(379),i=r.n(l),s=r(795),o=r.n(s),c=r(569),m=r.n(c),d=r(565),p=r.n(d),g=r(216),u=r.n(g),k=r(589),b=r.n(k),f=r(424),v={};v.styleTagTransform=b(),v.setAttributes=p(),v.insert=m().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),i()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var h=r(655),w={};w.styleTagTransform=b(),w.setAttributes=p(),w.insert=m().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=u(),i()(h.Z,w),h.Z&&h.Z.locals&&h.Z.locals;var y=r(625),x=r(436),E=t.useState,I=(t.useEffect,function(){var e=E(!1),n=e[0],r=e[1],a=function(){return r(!n)},l=function(){if(!(screen.width>1024)){var e=document.getElementById("items");a(),e.style.display="none"}};return t.createElement("nav",{id:"navbar"},t.createElement("div",{className:"navbarTitle"},t.createElement("a",{className:"navbarTitleLink",href:"#"},"SYSMA"),t.createElement("button",{className:"navbarResponsive",onClick:function(){var e=document.getElementById("items");n?(a(),e.style.display="none"):(a(),e.style.display="flex")}},t.createElement(y.G,{icon:x.xiG}))),t.createElement("div",{id:"items",className:"navbarItems"},t.createElement("a",{className:"navbarItem",href:"#about",onClick:l},t.createElement(y.G,{className:"navbarItemIcon",icon:x.ILF}),"About"),t.createElement("a",{className:"navbarItem",href:"#skills",onClick:l},t.createElement(y.G,{className:"navbarItemIcon",icon:x.Tab}),"Skills"),t.createElement("a",{className:"navbarItem",href:"#works",onClick:l},t.createElement(y.G,{className:"navbarItemIcon",icon:x.HXv}),"Works"),t.createElement("a",{className:"navbarItem",href:"#projects",onClick:l},t.createElement(y.G,{className:"navbarItemIcon",icon:x.NkB}),"Projects"),t.createElement("a",{className:"navbarItem",href:"#contact",onClick:l},t.createElement(y.G,{className:"navbarItemIcon",icon:x.wK3}),"Contact")))}),N=r(243),j={};j.styleTagTransform=b(),j.setAttributes=p(),j.insert=m().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=u(),i()(N.Z,j),N.Z&&N.Z.locals&&N.Z.locals;var C=function(){return t.createElement("div",{id:"about"},t.createElement("div",{className:"aboutContent"},t.createElement("label",{className:"title"},"About me"),t.createElement("label",{className:"description"},"Hi! My name is Sebastian Moreno Acero, I'm from Colombia and I work as a software developer."),t.createElement("label",{className:"description"},"I have 5 years experence, I which I have developed skills mostly in web api in .Net Core and Node js, building static web pages and apps moviles."),t.createElement("br",null),t.createElement("label",{className:"description"},"I'm currently very interested in blockchain technology and cryptocurrencies and how they can positively change our lives."),t.createElement("label",{className:"description"},"Another of my interests is the development of video games.")))},L=r(490),S={};S.styleTagTransform=b(),S.setAttributes=p(),S.insert=m().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=u(),i()(L.Z,S),L.Z&&L.Z.locals&&L.Z.locals;var Z=t.useState,T=function(){var e=Z([{language:"Javascript",icon:"skillIcon devicon-javascript-plain"},{language:"Typescript",icon:"skillIcon devicon-typescript-plain"},{language:"C#",icon:"skillIcon devicon-csharp-plain"},{language:"Php",icon:"skillIcon devicon-php-plain"},{language:"Java",icon:"skillIcon devicon-java-plain"},{language:"Kotlin",icon:"skillIcon devicon-kotlin-plain"}]),n=e[0],r=(e[1],Z([{language:"MySQL",icon:"skillIcon devicon-mysql-plain"},{language:"Postgres SQL",icon:"skillIcon devicon-postgresql-plain"},{language:"Microsoft SQL Server",icon:"skillIcon devicon-microsoftsqlserver-plain"}])),a=r[0],l=(r[1],Z([{language:"Node JS",icon:"skillIcon devicon-nodejs-plain"},{language:"Webpack",icon:"skillIcon devicon-webpack-plain"},{language:"React",icon:"skillIcon devicon-react-plain"},{language:"Express JS",icon:"skillIcon devicon-express-original"},{language:"Jest",icon:"skillIcon devicon-jest-plain"},{language:"Composer",icon:"skillIcon devicon-composer-plain"},{language:".Net Core",icon:"skillIcon devicon-dotnetcore-plain"},{language:"Firebase",icon:"skillIcon devicon-firebase-plain"}])),i=l[0],s=(l[1],Z([{language:"Docker",icon:"skillIcon devicon-docker-plain"},{language:"Android",icon:"skillIcon devicon-android-plain"},{language:"React Native",icon:"skillIcon devicon-react-plain"},{language:"Git",icon:"skillIcon devicon-git-plain"},{language:"GitHub",icon:"skillIcon devicon-github-plain"},{language:"GitLab",icon:"skillIcon devicon-gitlab-plain"},{language:"Bash",icon:"skillIcon devicon-bash-plain"},{language:"linux",icon:"skillIcon devicon-linux-plain"}])),o=s[0],c=(s[1],Z([{language:"C++",icon:"skillIcon devicon-cplusplus-plain"},{language:"Godot",icon:"skillIcon devicon-godot-plain"},{language:"Haskell",icon:"skillIcon devicon-haskell-plain"},{language:"OpenGL",icon:"skillIcon devicon-opengl-plain"},{language:"electron",icon:"skillIcon devicon-electron-original"},{language:"Heroku",icon:"skillIcon devicon-heroku-original"}])),m=c[0];return c[1],t.createElement("div",{id:"skills"},t.createElement("div",{className:"skillsContent"},t.createElement("label",{className:"title"},"My skills"),t.createElement("label",{className:"subtitle"},"Languages"),t.createElement("div",{className:"skillsList"},n.map((function(e){return t.createElement("div",{key:e.language,className:"skillItem"},t.createElement("i",{className:e.icon}),t.createElement("label",{className:"skillLanguage"},e.language))}))),t.createElement("label",{className:"subtitle"},"Data bases"),t.createElement("div",{className:"skillsList"},a.map((function(e){return t.createElement("div",{key:e.language,className:"skillItem"},t.createElement("i",{className:e.icon}),t.createElement("label",{className:"skillLanguage"},e.language))}))),t.createElement("label",{className:"subtitle"},"Frameworks"),t.createElement("div",{className:"skillsList"},i.map((function(e){return t.createElement("div",{key:e.language,className:"skillItem"},t.createElement("i",{className:e.icon}),t.createElement("label",{className:"skillLanguage"},e.language))}))),t.createElement("label",{className:"subtitle"},"Others"),t.createElement("div",{className:"skillsList"},o.map((function(e){return t.createElement("div",{key:e.language,className:"skillItem"},t.createElement("i",{className:e.icon}),t.createElement("label",{className:"skillLanguage"},e.language))}))),t.createElement("label",{className:"subtitle"},"Interesting"),t.createElement("div",{className:"skillsList"},m.map((function(e){return t.createElement("div",{key:e.language,className:"skillItem"},t.createElement("i",{className:e.icon}),t.createElement("label",{className:"skillLanguage"},e.language))})))))},A=r(673),z={};z.styleTagTransform=b(),z.setAttributes=p(),z.insert=m().bind(null,"head"),z.domAPI=o(),z.insertStyleElement=u(),i()(A.Z,z),A.Z&&A.Z.locals&&A.Z.locals;var G=r(66),P=t.useState,M=function(){var e=P([{name:"FixMath",image:G,description:"Personal project for improve the way of organizing personal finances, is currently in development, but I plan add more functions and filters, also to track all cryptocurrencies.",tags:["React Native","Android","Redux","SQLite","Finances","Currencies","Cryptocurrencies"],link:{type:"Play Store",href:"https://play.google.com/store/apps/details?id=com.sysma&hl=es_CO&gl=US"}}]),n=e[0];return e[1],t.createElement("div",{id:"works"},t.createElement("div",{className:"worksContent"},t.createElement("label",{className:"title"},"Works"),t.createElement("div",{className:"worksList"},n.map((function(e){return t.createElement("div",{key:e.name,className:"work"},t.createElement("div",{className:"content"},t.createElement("label",{className:"title"},e.name),t.createElement("label",{className:"description"},e.description),t.createElement("div",{className:"tags"},e.tags.map((function(e){return t.createElement("span",{key:e,className:"tag"},e)}))),t.createElement("a",{className:"link",href:e.link.href,target:"_blank"},e.link.type)),t.createElement("div",{className:"contentDivition"}),t.createElement("div",{className:"contentImage"},t.createElement("img",{className:"image",src:e.image,alt:e.name})))})))))},J=r(337),R={};R.styleTagTransform=b(),R.setAttributes=p(),R.insert=m().bind(null,"head"),R.domAPI=o(),R.insertStyleElement=u(),i()(J.Z,R),J.Z&&J.Z.locals&&J.Z.locals;var H=t.useState,B=function(){var e=H([{name:"Template webpack react multiple page",description:"Simple template to use React with multiple page for servers only static files.",tags:["NodeJS","Webpack","Babel","React","Typescript"],github:"https://github.com/sysma1997/template-webpack-react-multiple-page"},{name:"Webpack react multiple page with Backend",description:"Example the frontend with me template and Backend in apache with php.",tags:["Docker","Php","NodeJS","Typescript","React","MySQL"],github:"https://github.com/sysma1997/webpack-react-multiple-pages"},{name:"Social network example",description:"Simple building for social network with Node and Express.",tags:["Docker","NodeJS","Typescript","ExpressJS","NextJS"],github:"https://github.com/sysma1997/social_network_example"}]),n=e[0];return e[1],t.createElement("div",{id:"projects"},t.createElement("div",{className:"projectsContent"},t.createElement("label",{className:"title"},"Projects"),t.createElement("div",{className:"projectsList"},n.map((function(e){return t.createElement("div",{key:e.name,className:"project"},t.createElement("div",{className:"content"},t.createElement("label",{className:"title"},e.name),t.createElement("label",{className:"description"},e.description),t.createElement("div",{className:"tags"},e.tags.map((function(e){return t.createElement("span",{key:e,className:"tag"},e)}))),t.createElement("a",{className:"link",href:e.github,target:"_blank"},t.createElement("i",{className:"devicon-github-original"})," ","GitHub")))})))))},D=r(363),F={};F.styleTagTransform=b(),F.setAttributes=p(),F.insert=m().bind(null,"head"),F.domAPI=o(),F.insertStyleElement=u(),i()(D.Z,F),D.Z&&D.Z.locals&&D.Z.locals;var _=r(417),O=t.useState,Q=function(){var e=O([{icon:_.zhw,name:"GitHub",link:"https://github.com/sysma1997"},{icon:_.D9H,name:"LinkedIn",link:"https://www.linkedin.com/in/sebastian-moreno-acero-0a3138187"},{icon:x.FU$,name:"Email",link:"mailto: sysma1997@gmail.com"}]),n=e[0];return e[1],t.createElement("div",{id:"contact"},t.createElement("label",{className:"title"},"Contact"),t.createElement("div",{className:"contactList"},n.map((function(e){return t.createElement("a",{key:e.name,className:"contactItem",href:e.link,target:"_blank"},t.createElement(y.G,{className:"contactItemIcon",icon:e.icon}),e.name)}))))},W=r(287),Y={};Y.styleTagTransform=b(),Y.setAttributes=p(),Y.insert=m().bind(null,"head"),Y.domAPI=o(),Y.insertStyleElement=u(),i()(W.Z,Y),W.Z&&W.Z.locals&&W.Z.locals;var q=function(){return t.createElement("footer",null,t.createElement("p",null,"Created by ",t.createElement("b",null,"SYSMA")))},K=r(536);document.title="SYSMA";var U=document.getElementById("root");a.render(t.createElement((function(){return t.createElement(t.Fragment,null,t.createElement(I,null),t.createElement("div",{className:"content"},t.createElement("header",null,t.createElement("div",{className:"description"},t.createElement("label",{className:"hi"},"Hello!"),t.createElement("label",{className:"myName"},"I'm ",t.createElement("b",null,"SYSMA")," a software development"),t.createElement("label",{className:"interested"},"Very interested in blockchain technology and game development")),t.createElement("img",{className:"profile",src:K,alt:"profile"})),t.createElement(C,null),t.createElement(T,null),t.createElement(M,null),t.createElement(B,null),t.createElement(Q,null)),t.createElement("a",{id:"up",href:"#"},t.createElement(y.G,{icon:x.FPD})),t.createElement(q,null))}),null),U)},536:(e,n,r)=>{e.exports=r.p+"90edc8003ebb92cc49f3.jpg"},66:(e,n,r)=>{e.exports=r.p+"6d5de0d34a0976194a78.jpg"}},e=>{e.O(0,[216],(()=>(181,e(e.s=181)))),e.O()}]);