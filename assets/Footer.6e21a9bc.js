import{s as r,S as a,e as n,j as t}from"./index.d1731c2c.js";const i=r.div`
padding: 1rem;
margin-top: 50px;
/* height: 300px; */
width: 100%;
background-color: #a8a8a84c;;
border-top: 1px solid;
border-width: 2px;
border-color: rgba(255,255,255,.3);
box-shadow: 1px 1px 5px #555;
`,s=r.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100px;
/* background-image:url("./whitelogo.png"); */
`,c=r.img`

width: 100px;
height: auto;

`,d=r.p`
padding: 2rem;
font-size:1.1rem
`,e={Wraper:i,Txt:d,ImageWrpaer:s,Image:c};function g(){const{t:o}=a();return n(e.Wraper,{children:[t(e.Txt,{children:o("footerData")}),t(e.ImageWrpaer,{children:t(e.Image,{src:"whitelogo.png"})}),t(e.Txt,{children:o("contactInfo")}),"agency"]})}export{g as default};
