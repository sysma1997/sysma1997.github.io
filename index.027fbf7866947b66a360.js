"use strict";(self.webpackChunkporfolio_sysma1997=self.webpackChunkporfolio_sysma1997||[]).push([[826],{424:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),i=t(645),l=t.n(i),o=t(344),s=l()(a());s.i(o.Z),s.push([e.id,"html {\n    scroll-behavior: smooth;\n    scroll-padding-top: 5rem;\n\n    overflow: scroll;\n    overflow-x: hidden;\n}\nbody {\n    padding: 0;\n    margin: 0;\n}\n::-webkit-scrollbar {\n    width: 0;\n    background: transparent;\n} \n\n/* .content {\n    padding: 1rem;\n} */\n.content header {\n    padding: 0 5rem;\n    margin: 5rem 0;\n    \n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n.content header .profile {\n    border-radius: 50%;\n\n    margin-top: 1rem;\n    max-width: 20rem;\n}\n.content header .description {\n    display: flex;\n    flex-direction: column;\n}\n.content header .description .hi {\n    font-size: 2rem;\n}\n.content header .description .myName {\n    font-size: 3rem;\n    font-family: 'Courier New', Courier, monospace;\n}\n.content header .description .interested {\n    font-size: 1.8rem;\n    font-family: sans-serif;\n}\n\n#up {\n    background-color: #444;\n    border-radius: 50%;\n    color: white;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 3rem;\n    height: 3rem;\n    margin: 2rem;\n\n    position: fixed;\n    right: 0;\n    bottom: 0;\n}\n\n@media screen and \n(max-width: 1024px) {\n    .content header {\n        flex-direction: column-reverse;\n        height: auto;\n        padding: 0;\n        margin: 1rem;\n    }\n\n    .content header .description .hi {\n        font-size: 2rem;\n\n        margin-top: 1rem;\n    }\n    .content header .description .myName {\n        font-size: 1.5rem;\n        font-family: 'Courier New', Courier, monospace;\n    }\n    .content header .description .interested {\n        font-size: 1.1rem;\n        font-family: sans-serif;\n    }\n\n    #up {\n        width: 4rem;\n        height: 4rem;\n        margin: 1rem;\n    }\n}",""]);const c=s},243:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(81),a=t.n(r),i=t(645),l=t.n(i)()(a());l.push([e.id,"#about {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#about .aboutContent {\r\n    background-color: #444;\r\n    border-radius: 1rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1rem;\r\n    width: 50%;\r\n}\r\n#about .title {\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n#about .description {\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n@media screen and \r\n(max-width: 1024px) {\r\n    #about .aboutContent {\r\n        width: 90%;\r\n        margin-top: 2rem;\r\n    }\r\n}",""]);const o=l},363:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(81),a=t.n(r),i=t(645),l=t.n(i)()(a());l.push([e.id,"#contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n}\r\n\r\n#contact .title {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n#contact .contactList {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#contact .contactList .contactItem {\r\n    text-align: center;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n#contact .contactList .contactItem .contactItemIcon {\r\n    font-size: 3rem;\r\n}",""]);const o=l},287:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(81),a=t.n(r),i=t(645),l=t.n(i)()(a());l.push([e.id,"footer {\r\n    background-color: whitesmoke;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem;\r\n}",""]);const o=l},655:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(81),a=t.n(r),i=t(645),l=t.n(i)()(a());l.push([e.id,"#navbar {\r\n    box-shadow: inset 1px 0 0 rgb(0, 0, 0, 10%);\r\n    backdrop-filter: saturate(180%) blur(8px);\r\n    -webkit-box-shadow: inset 1px 0 0 rgb(0, 0, 0, 10%);\r\n    -webkit-backdrop-filter: saturate(180%) blur(8px);\r\n    border-bottom: 2px solid #444;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n#navbar .navbarTitle .navbarTitleLink {\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n}\r\n#navbar .navbarTitle .navbarResponsive {\r\n    display: none;\r\n}\r\n#navbar .navbarItems {\r\n    display: flex;\r\n}\r\n#navbar .navbarItems .navbarItem {\r\n    font-weight: bold;\r\n    margin: 0 1rem;\r\n}\r\n#navbar .navbarItemIcon {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n@media screen and \r\n(max-width: 1024px) {\r\n    #navbar {\r\n        flex-direction: column;\r\n        padding: 0;\r\n    }\r\n    #navbar .navbarTitle {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        width: 100%;\r\n        padding: 0.5rem 1rem;\r\n    }\r\n    #navbar .navbarTitle .navbarTitleLink {\r\n        font-size: 1.3rem;\r\n    }\r\n    #navbar .navbarTitle .navbarResponsive {\r\n        background-color: transparent;\r\n        border-radius: 0.6rem;\r\n        border: 2px solid #444;\r\n        font-size: 2rem;\r\n\r\n        display: block;\r\n        width: 3.5rem;\r\n    }\r\n    #navbar .navbarItems {\r\n        border-top: 2px solid #444;\r\n\r\n        display: none;\r\n        flex-direction: column;\r\n        width: 100%;\r\n    }\r\n    #navbar .navbarItems .navbarItem {\r\n        font-size: 1.5rem;\r\n\r\n        margin: 0.3rem 1rem;\r\n    }\r\n    #navbar .navbarItems .navbarItem .navbarItemIcon {\r\n        margin-right: 1rem;\r\n    }\r\n}",""]);const o=l},337:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(81),a=t.n(r),i=t(645),l=t.n(i)()(a());l.push([e.id,"#projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 2rem\r\n}\r\n\r\n#projects .projectsContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n}\r\n\r\n#projects .projectsContent .title {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n#projects .projectsContent .projectsList {\r\n    display: grid;\r\n    grid-auto-flow: dense;\r\n    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));\r\n    gap: 1rem;\r\n}\r\n#projects .projectsContent .projectsList .project {\r\n    border: 1px solid #444;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.3rem 1rem darkgray;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    display: flex;\r\n}\r\n#projects .projectsContent .projectsList .project .content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    gap: 0.5rem;\r\n}\r\n#projects .projectsContent .projectsList .project .content .information {\r\n    padding: 1rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.3rem;\r\n\r\n    flex: 1;\r\n}\r\n#projects .projectsContent .projectsList .project .content .information label {\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n#projects .projectsContent .projectsList .project .content .information .title {\r\n    font-size: 1.2rem;\r\n}\r\n#projects .projectsContent .projectsList .project .content .tags {\r\n    width: 100%;\r\n    height: 3rem;\r\n    padding: 1rem;\r\n    margin: 0;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    overflow: scroll;\r\n    white-space: nowrap;\r\n    gap: 0.3rem;\r\n\r\n    /* HIDDE SCROLL FIREFOX, EDGE */\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n}\r\n#projects .projectsContent .projectsList .project .content .tags::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n#projects .projectsContent .projectsList .project .content .tags .tag {\r\n    background-color: #444;\r\n    border-radius: 1rem;\r\n    color: white;\r\n    padding: 1rem;\r\n}\r\n#projects .projectsContent .projectsList .project .content .links {\r\n    margin-bottom: 0.5rem;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n@media screen and \r\n(max-width: 1024px) {\r\n    #projects .projectsContent {\r\n        width: 90%;\r\n    }\r\n    #projects .projectsContent .projectsList {\r\n        flex-direction: column;\r\n    }\r\n    #projects .projectsContent .projectsList .project {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n}",""]);const o=l},490:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(81),a=t.n(r),i=t(645),l=t.n(i)()(a());l.push([e.id,"#skills {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 2rem\r\n}\r\n\r\n#skills .skillsContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n}\r\n\r\n#skills .skillsContent .title {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n#skills .skillsContent .subtitle {\r\n    font-size: 1.7rem;\r\n    font-weight: bold;\r\n\r\n    margin-top: 1rem;\r\n}\r\n\r\n#skills .skillsContent .skillsList {\r\n    display: grid;\r\n    grid-auto-flow: dense;\r\n    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));\r\n    gap: 1rem;\r\n}\r\n\r\n#skills .skillsContent .skillsList .skillItem {\r\n    background-color: #444;\r\n    border-radius: 10%;\r\n    box-shadow: 0 0.3rem 1rem darkgray;\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    height: 7rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#skills .skillsContent .skillsList .skillItem .skillIcon {\r\n    color: white;\r\n    font-size: 2rem;\r\n}\r\n#skills .skillsContent .skillsList .skillItem .skillLanguage {\r\n    color: white;\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and \r\n(max-width: 1024px) {\r\n    #skills .skillsContent {\r\n        width: 100%;\r\n    }\r\n\r\n    #skills .skillsContent .subtitle {\r\n        margin: 0.5rem 1rem;\r\n    }\r\n    #skills .skillsContent .skillsList {\r\n        gap: 0;\r\n    }\r\n}",""]);const o=l},673:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(81),a=t.n(r),i=t(645),l=t.n(i)()(a());l.push([e.id,"#works {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 2rem\r\n}\r\n\r\n#works .worksContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80%;\r\n}\r\n\r\n#works .worksContent .title {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n#works .worksContent .worksList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n#works .worksContent .worksList .work {\r\n    border: 1px solid #444;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.3rem 1rem darkgray;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#works .worksContent .worksList .work .content {\r\n    margin: 0;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    flex: 1;\r\n}\r\n#works .worksContent .worksList .work .content .information {\r\n    padding: 1rem;\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n\r\n    flex: 1;\r\n}\r\n#works .worksContent .worksList .work .content .information .title {\r\n    text-align: start;\r\n    margin-bottom: 0.5rem;\r\n}\r\n#works .worksContent .worksList .work .content .tags {\r\n    width: 100%;\r\n    height: 3rem;\r\n    padding: 1rem;\r\n    margin: 0;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    overflow: scroll;\r\n    white-space: nowrap;\r\n    gap: 0.3rem;\r\n\r\n    /* HIDDE SCROLL FIREFOX, EDGE */\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n}\r\n/* HIDDE SCROLL CHROME, SAFARI, OPERA */\r\n#works .worksContent .worksList .work .content .tags::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n#works .worksContent .worksList .work .content .tags .tag {\r\n    background-color: #444;\r\n    border-radius: 1rem;\r\n    color: white;\r\n    padding: 1rem;\r\n}\r\n#works .worksContent .worksList .work .content .link {\r\n    width: 100%;\r\n\r\n    text-align: center;\r\n    padding: 1rem;\r\n}\r\n#works .worksContent .worksList .work .contentDivition {\r\n    background-color: #444;\r\n\r\n    width: 1px;\r\n}\r\n#works .worksContent .worksList .work .contentImage {\r\n    padding: 0.3rem;\r\n    flex: 1;\r\n}\r\n#works .worksContent .worksList .work .contentImage .image {\r\n    border-radius: 1rem;\r\n    object-fit: cover;\r\n\r\n    width: 100%;\r\n}\r\n\r\n@media screen and \r\n(max-width: 1024px) {\r\n    #works .worksContent {\r\n        width: 90%;\r\n    }\r\n    #works .worksContent .worksList .work {\r\n        flex-direction: column-reverse;\r\n    }\r\n}",""]);const o=l},181:(e,n,t)=>{var r=t(294),a=t(935),i=t(379),l=t.n(i),o=t(795),s=t.n(o),c=t(569),m=t.n(c),d=t(565),p=t.n(d),k=t(216),u=t.n(k),g=t(589),f=t.n(g),b=t(424),h={};h.styleTagTransform=f(),h.setAttributes=p(),h.insert=m().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=u(),l()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var w=t(655),v={};v.styleTagTransform=f(),v.setAttributes=p(),v.insert=m().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=u(),l()(w.Z,v),w.Z&&w.Z.locals&&w.Z.locals;var x=t(625),y=t(436),E=r.useState,I=(r.useEffect,function(){var e=E(!1),n=e[0],t=e[1],a=function(){return t(!n)},i=function(){if(!(screen.width>1024)){var e=document.getElementById("items");a(),e.style.display="none"}};return r.createElement("nav",{id:"navbar"},r.createElement("div",{className:"navbarTitle"},r.createElement("a",{className:"navbarTitleLink",href:"#"},"SYSMA"),r.createElement("button",{className:"navbarResponsive",onClick:function(){var e=document.getElementById("items");n?(a(),e.style.display="none"):(a(),e.style.display="flex")}},r.createElement(x.G,{icon:y.xiG}))),r.createElement("div",{id:"items",className:"navbarItems"},r.createElement("a",{className:"navbarItem",href:"#about",onClick:i},r.createElement(x.G,{className:"navbarItemIcon",icon:y.ILF}),"About"),r.createElement("a",{className:"navbarItem",href:"#skills",onClick:i},r.createElement(x.G,{className:"navbarItemIcon",icon:y.Tab}),"Skills"),r.createElement("a",{className:"navbarItem",href:"#works",onClick:i},r.createElement(x.G,{className:"navbarItemIcon",icon:y.HXv}),"Works"),r.createElement("a",{className:"navbarItem",href:"#projects",onClick:i},r.createElement(x.G,{className:"navbarItemIcon",icon:y.NkB}),"Projects"),r.createElement("a",{className:"navbarItem",href:"#contact",onClick:i},r.createElement(x.G,{className:"navbarItemIcon",icon:y.wK3}),"Contact")))}),N=t(243),j={};j.styleTagTransform=f(),j.setAttributes=p(),j.insert=m().bind(null,"head"),j.domAPI=s(),j.insertStyleElement=u(),l()(N.Z,j),N.Z&&N.Z.locals&&N.Z.locals;var C=function(){return r.createElement("div",{id:"about"},r.createElement("div",{className:"aboutContent"},r.createElement("label",{className:"title"},"About me"),r.createElement("label",{className:"description"},"Hi! My name is Sebastian Moreno Acero, I'm from Colombia and I work as a software developer."),r.createElement("label",{className:"description"},"I have 4 years experience, I which I have developed skills mostly in Web API in .Net Core and Node js, building static web pages and mobile apps."),r.createElement("br",null),r.createElement("label",{className:"description"},"I'm currently very interested in development of video games and blockchain technology.")))},L=t(490),S={};S.styleTagTransform=f(),S.setAttributes=p(),S.insert=m().bind(null,"head"),S.domAPI=s(),S.insertStyleElement=u(),l()(L.Z,S),L.Z&&L.Z.locals&&L.Z.locals;var Z=r.useState,T=function(){var e=Z([{icon:"skillIcon devicon-javascript-plain",text:"Javascript"},{icon:"skillIcon devicon-typescript-plain",text:"Typescript"},{icon:"skillIcon devicon-godot-plain",text:"GDScript"},{icon:"skillIcon devicon-csharp-plain",text:"C#"},{icon:"skillIcon devicon-php-plain",text:"Php"},{icon:"skillIcon devicon-java-plain",text:"Java"},{icon:"skillIcon devicon-kotlin-plain",text:"Kotlin"}])[0],n=Z([{icon:"skillIcon devicon-postgresql-plain",text:"Postgres SQL"},{icon:"skillIcon devicon-sqlite-plain",text:"SQLite"},{icon:"skillIcon devicon-mysql-plain",text:"MySQL"},{icon:"skillIcon devicon-microsoftsqlserver-plain",text:"Microsoft SQL Server"}])[0],t=Z([{icon:"skillIcon devicon-nodejs-plain",text:"Node JS"},{icon:"skillIcon devicon-webpack-plain",text:"Webpack"},{icon:"skillIcon devicon-react-plain",text:"React"},{icon:"skillIcon devicon-express-original",text:"Express JS"},{icon:"skillIcon devicon-jest-plain",text:"Jest"},{icon:"skillIcon devicon-dotnetcore-plain",text:".Net Core"},{icon:"skillIcon devicon-denojs-original",text:"Deno js"}])[0],a=Z([{icon:"skillIcon devicon-godot-plain",text:"Godot"},{icon:"skillIcon devicon-docker-plain",text:"Docker"},{icon:"skillIcon devicon-android-plain",text:"Android"},{icon:"skillIcon devicon-react-plain",text:"React Native"},{icon:"skillIcon devicon-git-plain",text:"Git"},{icon:"skillIcon devicon-bash-plain",text:"Bash"},{icon:"skillIcon devicon-linux-plain",text:"linux"}])[0],i=Z([{icon:"skillIcon devicon-cplusplus-plain",text:"C++"},{icon:"skillIcon devicon-cmake-plain",text:"CMake"},{icon:"skillIcon devicon-opengl-plain",text:"OpenGL"},{icon:"skillIcon",text:"ImGUI"},{icon:"skillIcon devicon-solidity-plain",text:"Solidity"},{icon:"skillIcon devicon-electron-original",text:"electron"},{icon:"skillIcon devicon-rust-plain",text:"Rust"}])[0];return r.createElement("div",{id:"skills"},r.createElement("div",{className:"skillsContent"},r.createElement("label",{className:"title"},"My skills"),r.createElement("label",{className:"subtitle"},"Languages"),r.createElement("div",{className:"skillsList"},e.map((function(e,n){return r.createElement("div",{key:n.toString(),className:"skillItem"},r.createElement("i",{className:e.icon}),r.createElement("label",{className:"skillLanguage"},e.text))}))),r.createElement("label",{className:"subtitle"},"Data bases"),r.createElement("div",{className:"skillsList"},n.map((function(e,n){return r.createElement("div",{key:n.toString(),className:"skillItem"},r.createElement("i",{className:e.icon}),r.createElement("label",{className:"skillLanguage"},e.text))}))),r.createElement("label",{className:"subtitle"},"Frameworks"),r.createElement("div",{className:"skillsList"},t.map((function(e,n){return r.createElement("div",{key:n.toString(),className:"skillItem"},r.createElement("i",{className:e.icon}),r.createElement("label",{className:"skillLanguage"},e.text))}))),r.createElement("label",{className:"subtitle"},"Others"),r.createElement("div",{className:"skillsList"},a.map((function(e,n){return r.createElement("div",{key:n.toString(),className:"skillItem"},r.createElement("i",{className:e.icon}),r.createElement("label",{className:"skillLanguage"},e.text))}))),r.createElement("label",{className:"subtitle"},"Interesting"),r.createElement("div",{className:"skillsList"},i.map((function(e,n){return r.createElement("div",{key:n.toString(),className:"skillItem"},r.createElement("i",{className:e.icon}),r.createElement("label",{className:"skillLanguage"},e.text))})))))},z=t(673),A={};A.styleTagTransform=f(),A.setAttributes=p(),A.insert=m().bind(null,"head"),A.domAPI=s(),A.insertStyleElement=u(),l()(z.Z,A),z.Z&&z.Z.locals&&z.Z.locals;var G=t(66),P=r.useState,D=function(){var e=P([{name:"FixMath",image:G,description:"It is an application that seeks to improve the way of organizing personal finances, in order to keep track of the budget. Registering daily the management of your income and thus optimize your savings and spending habits.",tags:["Deno js","Postgres SQL","React js","Finances","Currencies"],links:[{type:"Page",href:"https://fixmath.deno.dev/"}]}]),n=e[0];return e[1],r.createElement("div",{id:"works"},r.createElement("div",{className:"worksContent"},r.createElement("label",{className:"title"},"Works"),r.createElement("div",{className:"worksList"},n.map((function(e){return r.createElement("div",{key:e.name,className:"work"},r.createElement("div",{className:"content"},r.createElement("div",{className:"information"},r.createElement("label",{className:"title"},e.name),r.createElement("label",{className:"description"},e.description)),r.createElement("div",{className:"tags"},e.tags.map((function(e,n){return r.createElement("span",{key:n.toString(),className:"tag"},e)}))),e.links.map((function(e){return r.createElement("a",{key:e.type,className:"link",href:e.href,target:"_blank"},e.type)}))),r.createElement("div",{className:"contentImage"},r.createElement("img",{className:"image",src:e.image,alt:e.name})))})))))},R=t(417),M=t(337),F={};F.styleTagTransform=f(),F.setAttributes=p(),F.insert=m().bind(null,"head"),F.domAPI=s(),F.insertStyleElement=u(),l()(M.Z,F),M.Z&&M.Z.locals&&M.Z.locals;var O=r.useState,J=function(){var e=O([{name:"Template webpack react multiple page",description:"Simple template to use React with multiple page for servers only static files.",tags:["NodeJS","Webpack","Babel","React","Typescript"],links:[{icon:R.zhw,text:"Github",href:"https://github.com/sysma1997/template-webpack-react-multiple-page"}]},{name:"Webpack react multiple page with Backend",description:"Example the frontend with me template and Backend in apache with php.",tags:["Docker","Php","NodeJS","Typescript","React","MySQL"],links:[{icon:R.zhw,text:"Github",href:"https://github.com/sysma1997/webpack-react-multiple-pages"}]},{name:"Social network example",description:"Simple building for social network with Node and Express.",tags:["Docker","NodeJS","Typescript","ExpressJS","NextJS"],links:[{icon:R.zhw,text:"Github",href:"https://github.com/sysma1997/social_network_example"}]},{name:"Pong",description:"Pong is a table tennis–themed twitch arcade sports video game, featuring simple two-dimensional graphics, manufactured by Atari and originally released in 1972.",tags:["GDScript","Godot engine"],links:[{icon:R.zhw,text:"Github",href:"https://github.com/sysma1997/Pong"},{icon:R.ydb,text:"Itch.io",href:"https://sysma51.itch.io/pong"}]},{name:"PacMan",description:"PacMan is an arcade video game created by video game designer Toru Iwatani of the Namco company, and distributed by Midway Games to the American market in the early 1980s.",tags:["GDScript","Godot engine"],links:[{icon:R.zhw,text:"Github",href:"https://github.com/sysma1997/PacMan"},{icon:R.ydb,text:"Itch.io",href:"https://sysma51.itch.io/pacman"}]}]),n=e[0];return e[1],r.createElement("div",{id:"projects"},r.createElement("div",{className:"projectsContent"},r.createElement("label",{className:"title"},"Projects"),r.createElement("div",{className:"projectsList"},n.map((function(e){return r.createElement("div",{key:e.name,className:"project"},r.createElement("div",{className:"content"},r.createElement("div",{className:"information"},r.createElement("label",{className:"title"},e.name),r.createElement("label",{className:"description"},e.description)),r.createElement("div",{className:"tags"},e.tags.map((function(e){return r.createElement("span",{key:e,className:"tag"},e)}))),e.links&&r.createElement("div",{className:"links"},e.links.map((function(e){return r.createElement("a",{className:"link",href:e.href,target:"_blank"},r.createElement(x.G,{icon:e.icon})," ",e.text)})))))})))))},H=t(363),B={};B.styleTagTransform=f(),B.setAttributes=p(),B.insert=m().bind(null,"head"),B.domAPI=s(),B.insertStyleElement=u(),l()(H.Z,B),H.Z&&H.Z.locals&&H.Z.locals;var _=r.useState,Q=function(){var e=_([{icon:R.zhw,name:"GitHub",link:"https://github.com/sysma1997"},{icon:R.D9H,name:"LinkedIn",link:"https://www.linkedin.com/in/sebastian-moreno-acero-0a3138187"},{icon:y.FU$,name:"Email",link:"mailto: sysma1997@gmail.com"}]),n=e[0];return e[1],r.createElement("div",{id:"contact"},r.createElement("label",{className:"title"},"Contact"),r.createElement("div",{className:"contactList"},n.map((function(e){return r.createElement("a",{key:e.name,className:"contactItem",href:e.link,target:"_blank"},r.createElement(x.G,{className:"contactItemIcon",icon:e.icon}),e.name)}))))},W=t(287),q={};q.styleTagTransform=f(),q.setAttributes=p(),q.insert=m().bind(null,"head"),q.domAPI=s(),q.insertStyleElement=u(),l()(W.Z,q),W.Z&&W.Z.locals&&W.Z.locals;var Y=function(){return r.createElement("footer",null,r.createElement("p",null,"Created by ",r.createElement("b",null,"SYSMA")))},X=t(536);document.title="SYSMA";var K=document.getElementById("root");a.render(r.createElement((function(){return r.createElement(r.Fragment,null,r.createElement(I,null),r.createElement("div",{className:"content"},r.createElement("header",null,r.createElement("div",{className:"description"},r.createElement("label",{className:"hi"},"Hello!"),r.createElement("label",{className:"myName"},"I'm ",r.createElement("b",null,"SYSMA")," a software development"),r.createElement("label",{className:"interested"},"Very interested in game development and blockchain technology.")),r.createElement("img",{className:"profile",src:X,alt:"profile"})),r.createElement(C,null),r.createElement(T,null),r.createElement(D,null),r.createElement(J,null),r.createElement(Q,null)),r.createElement("a",{id:"up",href:"#"},r.createElement(x.G,{icon:y.FPD})),r.createElement(Y,null))}),null),K)},536:(e,n,t)=>{e.exports=t.p+"90edc8003ebb92cc49f3.jpg"},66:(e,n,t)=>{e.exports=t.p+"6d5de0d34a0976194a78.jpg"}},e=>{e.O(0,[216],(()=>(181,e(e.s=181)))),e.O()}]);