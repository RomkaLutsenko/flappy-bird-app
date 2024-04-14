(this["webpackJsonpflappy-bird"]=this["webpackJsonpflappy-bird"]||[]).push([[0],{93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var o=a(60),r=a(41),s=a(54),n=a(5),c=a(63),i=a(0);const l=300,d=450,u=new Image;u.src="./images/clouds.png";const g=new Image;g.src="./images/bird.png";const b=new Image;b.src="./images/ground.png";const h=40,j=116;var p=a(136),x=a(128),y=a(129),m=a(133),v=a(130),f=a(134);const O=()=>Object(r.b)(),w=r.c;var k=a(132);const S="http://localhost:5000/api",C=k.a.create({withCredentials:!0,baseURL:S});C.interceptors.request.use((e=>(e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e))),C.interceptors.request.use((e=>(e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e))),C.interceptors.response.use((e=>e),(async e=>{const t=e.config;if(401==e.response.status&&e.config&&!e.config._isRetry){t._isRetry=!0;try{const e=await k.a.get("".concat(S,"/refresh"),{withCredentials:!0});return localStorage.setItem("token",e.data.accessToken),C.request(t)}catch(a){console.log("\u041d\u0415 \u0410\u0412\u0422\u041e\u0420\u0418\u0417\u041e\u0412\u0410\u041d")}}throw e}));var I=C;class A{static async login(e,t){return I.post("/login",{name:e,password:t})}static async registration(e,t){return I.post("/registration",{name:e,password:t})}static async logout(){return I.post("/logout")}static async refresh(){return I.get("/refresh")}}class U{static async fetchUsers(){return I.get("/users")}static async postUserMoney(e,t){return I.post("/money",{name:e,money:t})}static async postUserData(e,t){return I.post("/data",{name:e,data:t})}static async setBonusFlag(e,t){return I.post("/flag",{name:e,flag:t})}}var E=a(33);const D=Object(E.b)({name:"action",initialState:{isGame:!1,isLoading:!1,isAuth:!1},reducers:{setAuth(e,t){e.isAuth=t.payload},setGame(e,t){e.isGame=t.payload},setLoading(e,t){e.isLoading=t.payload}}});var W=D.reducer;const R=Object(E.b)({name:"user",initialState:{user:null},reducers:{setUser(e,t){e.user=t.payload},setUserMoney(e,t){e.user&&(e.user.money=t.payload)}}});var B=R.reducer;const{setUser:M}=R.actions,{setAuth:T}=D.actions,F=(e,t)=>async a=>{try{await U.postUserMoney(e,t)}catch(s){var o,r;if(k.a.isAxiosError(s))console.log(null===(o=s.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.message);else console.log("Unknown error occurred")}};var L=a(7);const G={fontWeight:"900",height:"50px",margin:"0 15px",backgroundColor:"rgba(0, 0, 255, 0.2)",color:"black"};var q=function(e){const t=["\u042d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b","\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447","\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0431\u043e\u0442\u044b","\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u0446\u0435\u043b\u0435\u0439","\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0430\u0446\u0438\u0438","\u0421\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u0441\u0440\u043e\u043a\u043e\u0432","\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c\u0438"],[a,o]=Object(i.useState)(Array.from({length:t.length},((e,a)=>({label:"".concat(t[a]),value:""})))),r=O(),s=w((e=>e.userSlice.user));return Object(L.jsxs)(p.a,{open:e.showDialog,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(L.jsxs)(x.a,{children:[Object(L.jsx)(y.a,{id:"alert-dialog-description",children:"\u0423\u043f\u0441, \u043f\u043e\u0445\u043e\u0436\u0435 \u0442\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b, \u043d\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438 \u044d\u0442\u0443 \u0444\u043e\u0440\u043c\u0443 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u0437 10 \u043e\u0447\u043a\u043e\u0432 ;)"}),a.map(((e,t)=>Object(L.jsx)(m.a,{autoFocus:0===t,margin:"dense",id:"input".concat(t+1),label:e.label,type:"text",fullWidth:!0,value:e.value,onChange:e=>((e,t)=>{const r=[...a];r[t].value=e.target.value,o(r)})(e,t)},t)))]}),Object(L.jsx)(v.a,{children:Object(L.jsx)(f.a,{style:G,onClick:()=>{var e,t;console.log(a),r(F(s.name,10)),r((e=s.name,t=a,async a=>{try{await U.postUserData(e,t)}catch(s){var o,r;k.a.isAxiosError(s)?console.log(null===(o=s.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.message):console.log("Unknown error occurred")}})),r(((e,t)=>async a=>{try{await U.setBonusFlag(e,t)}catch(s){var o,r;k.a.isAxiosError(s)?console.log(null===(o=s.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.message):console.log("Unknown error occurred")}})(s.name,!1)),window.location.href="/flappy-bird-app"},color:"primary",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})})]})};const z={fontWeight:"900",height:"50px",margin:"0 15px",backgroundColor:"rgba(0, 0, 255, 0.2)",color:"black"};var K=function(e){const t=O(),a=w((e=>e.userSlice.user));return Object(L.jsxs)(p.a,{open:e.showDialog,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(L.jsx)(x.a,{children:Object(L.jsxs)(y.a,{id:"alert-dialog-description",children:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ",e.score," \xa0\xa0\xa0\xa0\xa0\xa0 \u041b\u0443\u0447\u0448\u0438\u0439:"," ",e.bestScore]})}),Object(L.jsxs)(v.a,{children:[Object(L.jsx)(f.a,{style:z,onClick:()=>{t(F(null===a||void 0===a?void 0:a.name,e.score)),window.location.href="/flappy-bird-app/menu"},color:"primary",children:"\u0412 \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e"}),Object(L.jsx)(f.a,{style:z,onClick:()=>{t(F(null===a||void 0===a?void 0:a.name,e.score)),window.location.reload()},color:"primary",children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0451"})]})]})};var J=function(e){let{showModal:t,score:a,bestScore:o}=e;const r=w((e=>e.userSlice.user));return Object(L.jsx)("div",{children:null!==r&&void 0!==r&&r.bonusFlag?Object(L.jsx)(q,{showDialog:t,score:a,bestScore:o}):Object(L.jsx)(K,{showDialog:t,score:a,bestScore:o})})};let _=0,P=120,H=0,N=225,Q=l,V=0,X=parseInt(localStorage.getItem("bestScore")||"0");const Y=(e,t)=>e.x+e.radius>=t.x&&e.x-e.radius<=t.x+t.width&&e.y+e.radius>=t.y&&e.y-e.radius<=t.y+t.height;let Z=!1,$=!1,ee=!0;var te=function(){const[e,t]=Object(i.useState)(!1),a=Object(i.useRef)(null),o=()=>{$||(Z||(Z=!0),H=-200)};return Object(c.a)("keypress",(e=>{$||"Space"===e.code&&(Z||(Z=!0),o())})),Object(i.useEffect)((()=>{if(a.current){const e=a.current.getContext("2d");e&&setInterval((()=>{((()=>{const e={x:85,y:P+25+5,radius:20},t={x:Q,y:N+j,width:h,height:391-(N+j)};return Y(e,{x:Q,y:0,width:h,height:N})||Y(e,t)})()||P+50>391)&&(V>X&&(X=V,localStorage.setItem("bestScore",V.toString())),t(!0),Z=!1,$=!0),ee&&60>Q+h&&(ee=!1,V++),(e=>{e.fillStyle="#abfcff",e.fillRect(0,0,l,d),e.drawImage(u,0,0,300,280),e.drawImage(b,_,250,300,200),e.drawImage(b,_+l,250,300,200),e.drawImage(g,60,P,50,50),e.fillStyle="#a6a6a6",e.fillRect(Q,0,h,N),e.fillRect(Q,N+j,h,391-(N+j))})(e),Z&&(Q<-40&&(Q=l,N=j*Math.random(),ee=!0),_<=-300&&(_=0),e.fillStyle="black",e.font="26px Roboto",e.fillText(V.toString(),135,50),Q-=2,_-=2,P+=.02*H,H-=-16)}),20)}}),[]),Object(L.jsx)("div",{children:Object(L.jsxs)("div",{onClick:o,onKeyPress:o,children:[Object(L.jsx)("canvas",{ref:a,width:l,height:d}),Object(L.jsx)(J,{showModal:e,score:V,bestScore:X})]})})};var ae=()=>{const[e,t]=Object(i.useState)(""),[a,o]=Object(i.useState)(""),r=Object(n.o)(),s=O();return Object(L.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(L.jsx)(m.a,{label:"\u0418\u043c\u044f",type:"text",variant:"outlined",value:e,onChange:e=>t(e.target.value),style:{backgroundColor:"rgba(0, 0, 255, 0.2)",width:"300px",margin:"20px"}}),Object(L.jsx)(m.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",variant:"outlined",value:a,onChange:e=>o(e.target.value),style:{backgroundColor:"rgba(0, 0, 255, 0.2)",width:"300px"}}),Object(L.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",marginBottom:"10px",justifyContent:"space-around",marginTop:"30px"},children:[Object(L.jsx)(f.a,{variant:"contained",onClick:()=>{r("/menu"),s(((e,t)=>async a=>{try{const o=await A.login(e,t);localStorage.setItem("token",o.data.accessToken),a(T(!0)),a(M(o.data.user))}catch(s){var o,r;k.a.isAxiosError(s)?console.log(null===(o=s.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.message):console.log("Unknown error occurred")}})(e,a))},style:{backgroundColor:"rgba(0, 0, 255, 0.2)"},children:"\u041b\u043e\u0433\u0438\u043d"}),Object(L.jsx)(f.a,{variant:"contained",onClick:()=>{r("/menu"),s(((e,t)=>async a=>{try{const o=await A.registration(e,t);localStorage.setItem("token",o.data.accessToken),a(T(!0)),a(M(o.data.user))}catch(s){var o,r;k.a.isAxiosError(s)?console.log(null===(o=s.response)||void 0===o||null===(r=o.data)||void 0===r?void 0:r.message):console.log("Unknown error occurred")}})(e,a))},style:{backgroundColor:"rgba(0, 0, 255, 0.2)"},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})},oe=a(95),re=a(131);const se={fontWeight:"900",height:"100px",backgroundColor:"rgba(0, 0, 255, 0.2)",color:"black"},{setGame:ne}=D.actions;var ce=()=>{const e=w((e=>e.userSlice.user)),{isAuth:t}=w((e=>e.actionSlice)),a=O();Object(i.useEffect)((()=>{localStorage.getItem("token")&&a((async e=>{try{const t=await k.a.get("".concat(S,"/refresh"),{withCredentials:!0});localStorage.setItem("token",t.data.accessToken),e(T(!0)),e(M(t.data.user))}catch(o){var t,a;k.a.isAxiosError(o)?console.log(null===(t=o.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message):console.log("Unknown error occurred")}}))}),[]);return Object(L.jsx)(L.Fragment,{children:t?Object(L.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"300px"},children:[Object(L.jsxs)("div",{style:{padding:"40px 0"},children:[Object(L.jsxs)(oe.a,{variant:"h5",style:{fontWeight:"900"},children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ",e.name?e.name:"asd"]}),Object(L.jsxs)(oe.a,{style:{fontSize:"18px",fontWeight:"400",textAlign:"center"},children:["\u0423 \u0432\u0430\u0441 ",e.money?e.money:"\u043f\u043e\u043a\u0430 \u0447\u0442\u043e 0"," \u043c\u043e\u043d\u0435\u0442"]})]}),Object(L.jsxs)(re.a,{container:!0,spacing:6,children:[Object(L.jsx)(re.a,{item:!0,xs:6,children:Object(L.jsx)(f.a,{variant:"contained",fullWidth:!0,style:se,children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d (\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435)"})}),Object(L.jsx)(re.a,{item:!0,xs:6,children:Object(L.jsx)(f.a,{onClick:()=>{a(ne(!0)),window.location.href="/flappy-bird-app/game"},variant:"contained",fullWidth:!0,style:se,children:"\u0418\u0433\u0440\u0430\u0442\u044c"})}),Object(L.jsx)(re.a,{item:!0,xs:6,children:Object(L.jsx)(f.a,{variant:"contained",fullWidth:!0,style:se,children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f (\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435)"})}),Object(L.jsx)(re.a,{item:!0,xs:6,children:Object(L.jsx)(f.a,{onClick:()=>{a((async e=>{try{A.logout(),localStorage.removeItem("token"),e(T(!1)),e(M({})),window.location.href="/flappy-bird-app/login"}catch(o){var t,a;k.a.isAxiosError(o)?console.log(null===(t=o.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message):console.log("Unknown error occurred")}})),window.location.href="/flappy-bird-app/"},variant:"contained",fullWidth:!0,style:se,children:"\u0412\u044b\u0439\u0442\u0438"})})]})]}):"LOADER"})};var ie=function(){return Object(L.jsx)(s.a,{basename:"/flappy-bird-app",children:Object(L.jsxs)(n.c,{children:[Object(L.jsx)(n.a,{path:"/",element:Object(L.jsx)(ae,{})}),Object(L.jsx)(n.a,{path:"/game",element:Object(L.jsx)(te,{})}),Object(L.jsx)(n.a,{path:"/menu",element:Object(L.jsx)(ce,{})})]})})},le=(a(93),a(15));const de=Object(le.b)({userSlice:B,actionSlice:W}),ue=Object(E.a)({reducer:de}),ge=document.getElementById("root");Object(o.createRoot)(ge).render(Object(L.jsx)(r.a,{store:ue,children:Object(L.jsx)(ie,{})}))}},[[94,1,2]]]);
//# sourceMappingURL=main.7b722b7f.chunk.js.map