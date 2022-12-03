import{s as t,S as n,e as d,j as i}from"./index.d92a82f1.js";const o=t.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin-top: 50px;

  width: 100%;
  background-color: #a8a8a84c;
  border-top: 1px solid;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 1px 1px 5px #555;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`,a=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  /* background-image:url("./whitelogo.png"); */
`,s=t.img`
  width: 100px;
  height: auto;
`,c=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: green;
  border-radius: 8px;
  border: 1px solid white;
  @media (max-width: 500px) {
   font-size: .8rem;
  }
`,x=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #6d7457;
  border-radius: 8px;
  border: 1px solid white;
  @media (max-width: 500px) {
   font-size: .8rem;
  }
`,p=t.div`
  width: 60%;
  border-radius: 8px;
  padding: .5rem;
  border: 1px solid rgba(255,255,255,.4);

  @media (max-width: 500px) {
    width: 100%;
  }
`,h=t.hr`
  margin: 5px 0px;
  border: 0.5px solid ${({theme:r})=>r.soft};
`,g=t.div`
  width: 38%;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,.4);
  padding: .5rem;
  @media (max-width: 500px) {
    width: 100%;
  }
`,m=t.p`
  padding: 1rem;
  font-size: 1.1rem;
  @media (max-width: 500px) {
   font-size: .8rem;
  }
`,e={Wraper:o,Txt:m,ImageWrpaer:a,Image:s,Linemsg1:c,Linemsg2:x,Agncy:p,SubAgncy:g,Hr:h};function b(){const{t:r}=n();return d(e.Wraper,{children:[d(e.Agncy,{children:[i(e.Linemsg1,{children:r("agent")}),i(e.Txt,{children:r("footerData")}),i(e.ImageWrpaer,{children:i(e.Image,{src:"whitelogo.png"})}),i(e.Txt,{children:r("contactInfo")})]}),d(e.SubAgncy,{children:[i(e.Linemsg2,{children:r("subagent")}),d(e.Txt,{children:[r("qasem")," "]}),i(e.Txt,{children:r("qasemAdr")}),i("hr",{}),i(e.Hr,{}),d(e.Txt,{children:[" ",r("ryd")," "]}),d(e.Txt,{children:[" ",r("rydAdr")]})]})]})}export{b as default};
