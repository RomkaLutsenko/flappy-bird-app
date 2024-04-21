(this["webpackJsonpflappy-bird"]=this["webpackJsonpflappy-bird"]||[]).push([[0],{93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var o=a(60),s=a(42),r=a(32),n=a(5),c=a(133),l=a(134),i=a(0);const d=()=>Object(s.b)(),u=s.c;var g=a(132);const b=g.a.create({withCredentials:!0,baseURL:"http://localhost:5000/api"});b.interceptors.request.use((e=>(e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e))),b.interceptors.response.use((e=>e),(async e=>{const t=e.config;if(401==e.response.status&&e.config&&!e.config._isRetry){t._isRetry=!0;try{const e=await h.refresh();return localStorage.setItem("token",e.data.accessToken),b.request(t)}catch(a){console.log("\u041d\u0415 \u0410\u0412\u0422\u041e\u0420\u0418\u0417\u041e\u0412\u0410\u041d")}}throw e}));var j=b;class h{static async login(e,t){return j.post("/login",{name:e,password:t})}static async registration(e,t){return j.post("/registration",{name:e,password:t})}static async logout(){return j.post("/logout")}static async refresh(){return j.get("/refresh")}}class x{static async fetchUsers(){return j.get("/users")}static async postUserMoney(e,t){return j.post("/money",{name:e,money:t})}static async postUserData(e,t){return j.post("/data",{name:e,data:t})}static async setBonusFlag(e,t){return j.post("/flag",{name:e,flag:t})}}var p=a(34);const m=Object(p.b)({name:"action",initialState:{isGame:!1,isLoading:!1,isAuth:!1},reducers:{setAuth(e,t){e.isAuth=t.payload},setGame(e,t){e.isGame=t.payload},setLoading(e,t){e.isLoading=t.payload}}});var y=m.reducer;const v=Object(p.b)({name:"user",initialState:{user:null},reducers:{setUser(e,t){e.user=t.payload},setUserMoney(e,t){e.user&&(e.user.money=t.payload)}}});var O=v.reducer;const{setUser:f}=v.actions,{setAuth:w}=m.actions,k=()=>async e=>{try{const t=await h.refresh();localStorage.setItem("token",t.data.accessToken),e(w(!0)),e(f(t.data.user))}catch(o){var t,a;if(g.a.isAxiosError(o))console.log(null===(t=o.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message);else console.log("Unknown error occurred")}},S=(e,t)=>async a=>{try{await x.postUserMoney(e,t)}catch(r){var o,s;if(g.a.isAxiosError(r))console.log(null===(o=r.response)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.message);else console.log("Unknown error occurred")}};var I=a(7);var C=()=>{const[e,t]=Object(i.useState)(""),[a,o]=Object(i.useState)(""),s=Object(n.o)(),r=d();return Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(I.jsx)(c.a,{label:"\u0418\u043c\u044f",type:"text",variant:"outlined",value:e,onChange:e=>t(e.target.value),style:{backgroundColor:"rgba(0, 0, 255, 0.2)",width:"300px",margin:"20px"}}),Object(I.jsx)(c.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",variant:"outlined",value:a,onChange:e=>o(e.target.value),style:{backgroundColor:"rgba(0, 0, 255, 0.2)",width:"300px"}}),Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",marginBottom:"10px",justifyContent:"space-around",marginTop:"30px"},children:[Object(I.jsx)(l.a,{variant:"contained",onClick:()=>{s("/menu"),r(((e,t)=>async a=>{try{const o=await h.login(e,t);localStorage.setItem("token",o.data.accessToken),a(w(!0)),a(f(o.data.user))}catch(r){var o,s;g.a.isAxiosError(r)?console.log(null===(o=r.response)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.message):console.log("Unknown error occurred")}})(e,a))},style:{backgroundColor:"rgba(0, 0, 255, 0.2)"},children:"\u041b\u043e\u0433\u0438\u043d"}),Object(I.jsx)(l.a,{variant:"contained",onClick:()=>{s("/menu"),r(((e,t)=>async a=>{try{const o=await h.registration(e,t);localStorage.setItem("token",o.data.accessToken),a(w(!0)),a(f(o.data.user))}catch(r){var o,s;g.a.isAxiosError(r)?console.log(null===(o=r.response)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.message):console.log("Unknown error occurred")}})(e,a))},style:{backgroundColor:"rgba(0, 0, 255, 0.2)"},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})},A=a(95),U=a(128);const E={fontWeight:"900",height:"100px",backgroundColor:"rgba(0, 0, 255, 0.2)",color:"black"},{setGame:D}=m.actions;var W=()=>{const e=u((e=>e.userSlice.user)),{isAuth:t}=u((e=>e.actionSlice)),a=d(),o=Object(n.o)();Object(i.useEffect)((()=>{localStorage.getItem("token")&&a(k())}),[]);return Object(I.jsx)(I.Fragment,{children:t?Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"300px"},children:[Object(I.jsxs)("div",{style:{padding:"40px 0"},children:[Object(I.jsxs)(A.a,{variant:"h5",style:{fontWeight:"900"},children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ",e.name?e.name:"asd"]}),Object(I.jsxs)(A.a,{style:{fontSize:"18px",fontWeight:"400",textAlign:"center"},children:["\u0423 \u0432\u0430\u0441 ",e.money?e.money:"\u043f\u043e\u043a\u0430 \u0447\u0442\u043e 0"," \u043c\u043e\u043d\u0435\u0442"]})]}),Object(I.jsxs)(U.a,{container:!0,spacing:6,children:[Object(I.jsx)(U.a,{item:!0,xs:6,children:Object(I.jsx)(l.a,{variant:"contained",fullWidth:!0,style:E,children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d (\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435)"})}),Object(I.jsx)(U.a,{item:!0,xs:6,children:Object(I.jsx)(l.a,{onClick:()=>{o("/game")},variant:"contained",fullWidth:!0,style:E,children:"\u0418\u0433\u0440\u0430\u0442\u044c"})}),Object(I.jsx)(U.a,{item:!0,xs:6,children:Object(I.jsx)(l.a,{variant:"contained",fullWidth:!0,style:E,children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f (\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435)"})}),Object(I.jsx)(U.a,{item:!0,xs:6,children:Object(I.jsx)(l.a,{onClick:()=>{a((async e=>{try{h.logout(),localStorage.removeItem("token"),e(w(!1)),e(f({}))}catch(o){var t,a;g.a.isAxiosError(o)?console.log(null===(t=o.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message):console.log("Unknown error occurred")}})),o("/")},variant:"contained",fullWidth:!0,style:E,children:"\u0412\u044b\u0439\u0442\u0438"})})]})]}):"LOADER"})},R=a(67);const G=300,M=450,T=new Image;T.src="./images/clouds.png";const B=new Image;B.src="./images/bird.png";const F=new Image;F.src="./images/ground.png";const L=40,K=116;var q=a(136),z=a(129),J=a(130),_=a(131);const P={fontWeight:"900",height:"50px",margin:"0 15px",backgroundColor:"rgba(0, 0, 255, 0.2)",color:"black"};var H=function(e){const t=["\u042d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b","\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447","\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0431\u043e\u0442\u044b","\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u0446\u0435\u043b\u0435\u0439","\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0430\u0446\u0438\u0438","\u0421\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u0441\u0440\u043e\u043a\u043e\u0432","\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c\u0438"],[a,o]=Object(i.useState)(Array.from({length:t.length},((e,a)=>({label:"".concat(t[a]),value:""})))),s=d(),r=u((e=>e.userSlice.user)),b=Object(n.o)();return Object(I.jsxs)(q.a,{open:e.showDialog,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(I.jsxs)(z.a,{children:[Object(I.jsx)(J.a,{id:"alert-dialog-description",children:"\u0423\u043f\u0441, \u043f\u043e\u0445\u043e\u0436\u0435 \u0442\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b, \u043d\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438 \u044d\u0442\u0443 \u0444\u043e\u0440\u043c\u0443 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u0437 10 \u043e\u0447\u043a\u043e\u0432 ;)"}),a.map(((e,t)=>Object(I.jsx)(c.a,{autoFocus:0===t,margin:"dense",id:"input".concat(t+1),label:e.label,type:"text",fullWidth:!0,value:e.value,onChange:e=>((e,t)=>{const s=[...a];s[t].value=e.target.value,o(s)})(e,t)},t)))]}),Object(I.jsx)(_.a,{children:Object(I.jsx)(l.a,{style:P,onClick:()=>{var e,t;console.log(a),s(S(r.name,10)),s((e=r.name,t=a,async a=>{try{await x.postUserData(e,t)}catch(r){var o,s;g.a.isAxiosError(r)?console.log(null===(o=r.response)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.message):console.log("Unknown error occurred")}})),s(((e,t)=>async a=>{try{await x.setBonusFlag(e,t)}catch(r){var o,s;g.a.isAxiosError(r)?console.log(null===(o=r.response)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.message):console.log("Unknown error occurred")}})(r.name,!1)),b("/menu")},color:"primary",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})})]})};const N={fontWeight:"900",height:"50px",margin:"0 15px",backgroundColor:"rgba(0, 0, 255, 0.2)",color:"black"},{setGame:Q}=m.actions;var V=function(e){const t=d(),a=u((e=>e.userSlice.user)),o=Object(n.o)();return Object(I.jsxs)(q.a,{open:e.showDialog,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(I.jsx)(z.a,{children:Object(I.jsxs)(J.a,{id:"alert-dialog-description",children:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ",e.score," \xa0\xa0\xa0\xa0\xa0\xa0 \u041b\u0443\u0447\u0448\u0438\u0439:"," ",e.bestScore]})}),Object(I.jsxs)(_.a,{children:[Object(I.jsx)(l.a,{style:N,onClick:()=>{t(S(a.name,e.score)),o("/menu"),t(Q(!1)),window.location.reload(),t(k())},color:"primary",children:"\u0412 \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e"}),Object(I.jsx)(l.a,{style:N,onClick:()=>{t(S(a.name,e.score)),window.location.reload(),t(k())},color:"primary",children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0451"})]})]})};var X=function(e){let{showModal:t,score:a,bestScore:o}=e;const s=u((e=>e.userSlice.user));return Object(I.jsx)("div",{children:null!==s&&void 0!==s&&s.bonusFlag?Object(I.jsx)(H,{showDialog:t,score:a,bestScore:o}):Object(I.jsx)(V,{showDialog:t,score:a,bestScore:o})})};let Y=0,Z=120,$=0,ee=225,te=G,ae=0,oe=parseInt(localStorage.getItem("bestScore")||"0");const se=(e,t)=>e.x+e.radius>=t.x&&e.x-e.radius<=t.x+t.width&&e.y+e.radius>=t.y&&e.y-e.radius<=t.y+t.height;let re=!1,ne=!1,ce=!0;const{setGame:le}=m.actions;var ie=()=>{const[e,t]=Object(i.useState)(!1),a=Object(i.useRef)(null),{isGame:o}=u((e=>e.actionSlice)),s=d(),r=()=>{ne||(re||(re=!0),$=-200)};Object(R.a)("keypress",(e=>{ne||"Space"===e.code&&(re||(re=!0),r())}));return Object(i.useEffect)((()=>{if(localStorage.getItem("token")&&s(k()),a.current){const e=a.current.getContext("2d");e&&setInterval((()=>{((()=>{const e={x:85,y:Z+25+5,radius:20},t={x:te,y:ee+K,width:L,height:391-(ee+K)};return se(e,{x:te,y:0,width:L,height:ee})||se(e,t)})()||Z+50>391)&&(ae>oe&&(oe=ae,localStorage.setItem("bestScore",ae.toString())),t(!0),re=!1,ne=!0),ce&&60>te+L&&(ce=!1,ae++),(e=>{e.fillStyle="#abfcff",e.fillRect(0,0,G,M),e.drawImage(T,0,0,300,280),e.drawImage(F,Y,250,300,200),e.drawImage(F,Y+G,250,300,200),e.drawImage(B,60,Z,50,50),e.fillStyle="#a6a6a6",e.fillRect(te,0,L,ee),e.fillRect(te,ee+K,L,391-(ee+K))})(e),re&&(te<-40&&(te=G,ee=K*Math.random(),ce=!0),Y<=-300&&(Y=0),e.fillStyle="black",e.font="26px Roboto",e.fillText(ae.toString(),135,50),te-=2,Y-=2,Z+=.02*$,$-=-16)}),20)}}),[s,o]),Object(I.jsx)("div",{children:Object(I.jsxs)("div",{onClick:r,onKeyPress:r,children:[Object(I.jsx)("canvas",{ref:a,width:G,height:M}),Object(I.jsx)(X,{showModal:e,score:ae,bestScore:oe})]})})};var de=function(){return Object(I.jsxs)(n.c,{children:[Object(I.jsx)(n.a,{path:"/",element:Object(I.jsx)(C,{})}),Object(I.jsx)(n.a,{path:"/game",element:Object(I.jsx)(ie,{})}),Object(I.jsx)(n.a,{path:"/menu",element:Object(I.jsx)(W,{})})]})},ue=(a(93),a(15));const ge=Object(ue.b)({userSlice:O,actionSlice:y}),be=Object(p.a)({reducer:ge}),je=document.getElementById("root");Object(o.createRoot)(je).render(Object(I.jsx)(s.a,{store:be,children:Object(I.jsx)(r.a,{basename:"/flappy-bird-app",children:Object(I.jsx)(de,{})})}))}},[[94,1,2]]]);
//# sourceMappingURL=main.26996b37.chunk.js.map