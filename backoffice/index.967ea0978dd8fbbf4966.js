"use strict";(self.webpackChunkporfolio_sysma1997=self.webpackChunkporfolio_sysma1997||[]).push([[150],{378:(e,t,n)=>{var a=n(540),r=n(338),o=n(107),c=n(784),i=n(188),l=n(875),s=function(e){var t=e.isLogin,n=e.drive;return a.createElement("div",{className:"modal is-active"},a.createElement("div",{className:"modal-background"}),a.createElement("div",{className:"modal-card"},a.createElement("header",{className:"modal-card-head",style:{backgroundColor:"var(--backgroundPrimary)"}},a.createElement("p",{className:"modal-card-title",style:{color:"white"}},"Login")),a.createElement("section",{className:"modal-card-body"},a.createElement("label",{className:"label"},"Login with Google to update page")),a.createElement("footer",{className:"modal-card-foot is-flex is-justify-content-flex-end",style:{padding:"1rem 2rem"}},a.createElement("button",{className:"button",style:{backgroundColor:"var(--backgroundPrimary)",color:"white"},onClick:function(){n.tokenClient.callback=function(e){return n=void 0,a=void 0,o=function(){return function(e,t){var n,a,r,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},c=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return c.next=i(0),c.throw=i(1),c.return=i(2),"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,i[0]&&(o=0)),o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(n){if(void 0!==e.error)throw e;return t(!0),[2]}))},new((r=void 0)||(r=Promise))((function(e,t){function c(e){try{l(o.next(e))}catch(e){t(e)}}function i(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,i)}l((o=o.apply(n,a||[])).next())}));var n,a,r,o},null===gapi.client.getToken()?n.tokenClient.requestAccessToken({prompt:"consent"}):n.tokenClient.requestAccessToken({prompt:""})}},"Login"))))},u=n(131);document.title="Backoffice";var d={client_id:"398749866662-nbko48dg2drdtmujmqr7nmn9lrcrjguo.apps.googleusercontent.com",api_key:"porfolio-sysma1997",discovery_doc:"https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",scopes:"https://www.googleapis.com/auth/drive.metadata.readonly",tokenClient:void 0,gapiInited:!1,googleInited:!1};gapi.load("client",(function(){return e=void 0,t=void 0,a=function(){return function(e,t){var n,a,r,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},c=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return c.next=i(0),c.throw=i(1),c.return=i(2),"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,i[0]&&(o=0)),o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(e){switch(e.label){case 0:return[4,gapi.client.init({apiKey:d.api_key,discoveryDocs:[d.discovery_doc]})];case 1:return e.sent(),d.gapiInited=!0,[2]}}))},new((n=void 0)||(n=Promise))((function(r,o){function c(e){try{l(a.next(e))}catch(e){o(e)}}function i(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}l((a=a.apply(e,t||[])).next())}));var e,t,n,a})),d.tokenClient=google.accounts.oauth2.initTokenClient({client_id:d.client_id,scope:d.scopes}),d.googleInited=!0,o.Yv.add(i.X7I,l.Cvc),r.createRoot(document.getElementById("root")).render(a.createElement((function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],r=(0,a.useState)(!1),o=r[0],i=r[1],l=(0,a.useState)(),f=(l[0],l[1],(0,a.useState)()),m=(f[0],f[1],(0,a.useState)()),p=(m[0],m[1],function(){return i(!o)});return(0,a.useEffect)((function(){t&&gapi.client.drive.files.list({fields:"files(id, name, mimeType)",q:"'1WGh4C4W0XVckkrp7GUwA9qiMVaHXV6xz' in parents"}).then((function(e){var t=e.result.files;t&&0!=t.length?(console.log(t),t.forEach((function(e){e.name,gapi.client.drive.files.download({fileId:e.id}).then((function(e){console.log(e.result)})).catch((function(e){console.error("Error:",e)}))}))):console.error("No files found.")})).catch((function(e){console.error("Error:",e)}))}),[t]),a.createElement(a.Fragment,null,!t&&a.createElement(s,{isLogin:n,drive:d}),t&&a.createElement(a.Fragment,null,a.createElement("nav",{id:"menu",className:"navbar",role:"navigation","aria-label":"main navigation"},a.createElement("div",{className:"navbar-brand"},a.createElement("a",{id:"title",className:"navbar-item",href:"#"},a.createElement("img",{src:u,alt:"SYSMA"})),a.createElement("a",{role:"button",className:"navbar-burger ".concat(o&&"is-active"),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:p},a.createElement("span",{"aria-hidden":"true"}),a.createElement("span",{"aria-hidden":"true"}),a.createElement("span",{"aria-hidden":"true"}),a.createElement("span",{"aria-hidden":"true"}))),a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu ".concat(o&&"is-active")},a.createElement("div",{className:"navbar-end"},a.createElement("a",{className:"navbar-item",href:"#contact",onClick:function(){screen.width>1024||p();var e=gapi.client.getToken();null!==e&&(google.accounts.oauth2.revoke(e.access_token),gapi.client.setToken(""),n(!1))}},a.createElement(c.g,{className:"navbarItemIcon",icon:["fas","right-from-bracket"]}),"Logout")))),a.createElement("div",{className:"content"},a.createElement("h1",{className:"title"},"Backoffice"))))}),null))},131:(e,t,n)=>{e.exports=n.p+"aa62110346028a099fdd.png"}},e=>{e.O(0,[96],(()=>(378,e(e.s=378)))),e.O()}]);