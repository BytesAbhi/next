"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9107],{49107:function(e,t,s){s.r(t);var l=s(57437),a=s(2265),c=s(49089),n=s(71920),r=s(53182),i=s(27648);s(19590);var o=s(68575),d=s(4067),x=s(99376),m=s(25559),h=s(24737),p=s(92796),f=s(14861),u=s(42586);t.default=()=>{let e=(0,h.iT)(),[t,s]=(0,a.useState)({}),b=(0,h.Lg)(e),[j,g]=(0,a.useState)({}),[N,v]=(0,a.useState)(new Date),y=["January","February","March","April","May","June","July","August","September","October","November","December"],[k,C]=(0,a.useState)(),[w,E]=(0,a.useState)(1),[F,S]=(0,a.useState)(0),[_,D]=(0,a.useState)(0),[I,Z]=(0,a.useState)(!1),[L,T]=(0,a.useState)(1),[A,R]=(0,a.useState)(1),O=(0,o.I0)();(0,o.v9)(e=>e.ipslice);let V=(0,x.useRouter)(),[J,M]=(0,a.useState)({id:26555,ident:"VIDP",type:"large_airport",name:"Indira Gandhi International Airport",latitude_deg:"28.55563",longitude_deg:"77.09519",elevation_ft:"777",continent:"AS",iso_country:"IN",iso_region:"IN-DL",municipality:"New Delhi",scheduled_service:"yes",gps_code:"VIDP",iata:"DEL",local_code:"",home_link:"http://www.newdelhiairport.in/",wikipedia_link:"https://en.wikipedia.org/wiki/Indira_Gandhi_International_Airport",keywords:"Palam Air Force Station"}),[B,W]=(0,a.useState)({id:26434,ident:"VABB",type:"large_airport",name:"Chhatrapati Shivaji International Airport",latitude_deg:"19.0886993408",longitude_deg:"72.8678970337",elevation_ft:"39",continent:"AS",iso_country:"IN",iso_region:"IN-MM",municipality:"Mumbai",scheduled_service:"yes",gps_code:"VABB",iata:"BOM",local_code:"",home_link:"http://www.csia.in/",wikipedia_link:"https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_International_Airport",keywords:"Bombay, Sahar International Airport"}),[G,P]=(0,a.useState)(1),[Y,z]=(0,a.useState)(!1),[H,X]=(0,a.useState)(""),q=e=>{P(e)},K=e=>{};(0,a.useEffect)(()=>{let e=new Date;e.setDate(e.getDate()+30),g({day:e.getDate(),month:e.getMonth(),year:e.getFullYear()})},[]),(0,a.useEffect)(()=>{let e=new Date;s({day:e.getDate(),month:e.toLocaleString("default",{month:"long"}),year:e.getFullYear()})},[]),(0,a.useEffect)(()=>{{let e=localStorage.getItem("defaultflight");if(e)try{let t=JSON.parse(e).timeDate,s=JSON.parse(e).retuntime,l=new Date(t),a=new Date(s);isNaN(l)||(v(l),isNaN(a)||C(a))}catch(e){}}},[]),(0,a.useEffect)(()=>{{let e=localStorage.getItem("defaultflight");if(e)try{let t=JSON.parse(e);(null==t?void 0:t.from)&&M(t.from),(null==t?void 0:t.to)&&W(t.to),(null==t?void 0:t.journytype)&&P(t.journytype)}catch(e){}}},[]);let Q=e=>{"from"===H?M(e.properties):"to"===H&&W(e.properties),z(!1)},U=e=>{z(e)};(0,a.useEffect)(()=>(document.addEventListener("mousedown",et),()=>{document.removeEventListener("mousedown",et)}),[]),(0,a.useEffect)(()=>{O((0,d.e)()),O((0,p.r)())},[]);let $=e=>{X(e),z(!0)},ee=(0,a.useRef)(null),et=e=>{ee.current&&!ee.current.contains(e.target)&&z(!1)};(0,a.useEffect)(()=>(document.addEventListener("mousedown",et),()=>{document.removeEventListener("mousedown",et)}),[]);let es=(0,u.useTranslations)("Navbar2");return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"flex flex-col hidden lg:block custom-color text-white md:px-10 lg:px-52  py-10",children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"tabs flex gap-2 pb-2",children:[(0,l.jsx)("button",{className:"px-4 py-1 text-xs font-bold rounded-3xl ".concat(1===G?"bg-white text-[#1853a2]":""," transition-colors duration-300 ease-in-out"),onClick:()=>q(1),children:es("oneway")}),(0,l.jsx)("button",{className:"px-4 py-1 text-xs font-bold rounded-3xl ".concat(2===G?"bg-white text-[#1853a2]":""," transition-colors duration-300 ease-in-out"),onClick:()=>q(2),children:es("roundtrip")}),(0,l.jsx)("button",{className:"px-4 py-1 text-xs font-bold rounded-3xl ".concat(3===G?"bg-white text-[#1853a2]":""," transition-colors duration-300 ease-in-out"),onClick:()=>q(3),children:es("multicity")})]}),(0,l.jsx)("div",{className:"tab-content",children:1===A&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"bg-white custom-shadow grid grid-cols-6 gap-0 border-gray-300",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{onClick:()=>$("from"),className:"flex flex-col bg-white  h-full px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer",children:[(0,l.jsx)("p",{className:"text-sm text-[#7E7979] font-medium",children:es("From")}),(0,l.jsx)("span",{className:"text-3xl py-1 text-black font-bold",children:J.municipality}),(0,l.jsxs)("p",{className:"text-black text-xs truncate",children:["[",J.name,"] ",J.iata]})]}),Y&&"from"===H&&(0,l.jsx)("div",{children:(0,l.jsx)(n.Z,{value:"From",Click:z,handleClosed:U,onSelect:Q})})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{onClick:()=>$("to"),className:"flex flex-col px-4 py-2 h-full  bg-white border-r hover:bg-[#ECF5FE]",children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("To")}),(0,l.jsx)("span",{className:"text-3xl py-1 text-black font-bold",children:B.municipality}),(0,l.jsxs)("p",{className:"text-black text-xs truncate",children:["[",B.name,"] ",B.iata]})]}),Y&&"to"===H&&(0,l.jsx)("div",{children:(0,l.jsx)(n.Z,{value:"To",fromCity:J,Click:z,handleClosed:U,onSelect:Q})})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{onClick:()=>$("date"),className:"flex h-full flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]",children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("Departure Date")}),!N&&(0,l.jsx)("div",{className:"text-black font-bold",children:"Select a Date"}),N&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex  items-baseline text-black",children:[(0,l.jsxs)("span",{className:"text-3xl py-1 pr-1 text-black font-bold",children:[" ",N.getDate()]}),(0,l.jsxs)("span",{className:"text-sm font-semibold",children:[N.toLocaleString("default",{month:"short"}),"'"]}),(0,l.jsxs)("span",{className:"text-sm font-semibold",children:[" ",N.getFullYear()]}),(0,l.jsx)(c.RVZ,{className:"text-[#d3cfcf] ml-5 text-xl"})]}),(0,l.jsx)("p",{className:"text-black text-xs",children:N.toLocaleDateString()})]})]}),Y&&"date"===H&&(0,l.jsx)("div",{className:"bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10",children:(0,l.jsx)(m.t,{"aria-label":"Select a date",value:"",onChange:e=>{v(new Date(e.year,e.month-1,e.day)),$("")},minValue:b})})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{className:"flex h-full flex-col   px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]",onClick:()=>$("return"),children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("Return Date")}),!k&&(0,l.jsx)("div",{className:"text-black font-bold h-full align-bottom",children:"Select Return Flight"}),k&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex items-baseline text-black",children:[(0,l.jsxs)("span",{className:"text-3xl py-1 pr-1 text-black font-bold",children:[" ",k.getDate()]}),(0,l.jsxs)("span",{className:"text-sm font-semibold",children:[" ",k.toLocaleString("default",{month:"short"}),"'"]}),(0,l.jsx)("span",{className:"text-sm font-semibold",children:k.toLocaleDateString()}),(0,l.jsx)(c.RVZ,{className:"text-[#d3cfcf] ml-5 text-xl"})]}),(0,l.jsx)("p",{className:"text-black text-xs",children:k.getFullYear()})]})]}),Y&&"return"===H&&(0,l.jsx)("div",{className:"bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10",children:(0,l.jsx)(m.t,{"aria-label":"Select a date",value:"",onChange:e=>{C(new Date(e.year,e.month-1,e.day)),$("")},minValue:b,disabledDatesClassName:" opacity-50"})})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{className:"flex flex-col   px-4 py-2 bg-white border-r hover:bg-[#ECF5FE]",onClick:()=>$("traveller"),children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("Travelers")}),(0,l.jsxs)("div",{className:"flex items-center text-black",children:[(0,l.jsx)("span",{className:"text-3xl py-1 pr-1 text-black font-bold",children:"1"}),(0,l.jsxs)("span",{className:"text-sm font-semibold flex items-center gap-1",children:["Traveller(s) ",(0,l.jsx)(c.RiI,{})]})]}),(0,l.jsx)("p",{className:"text-black text-xs",children:"Economy"})]}),Y&&"traveller"===H&&(0,l.jsx)("div",{ref:ee,children:(0,l.jsx)(r.Z,{setIsGroup:Z,adultCount:w,setAdultCount:E,childCount:F,setChildCount:S,infantCount:_,setInfantCount:D,isGroup:I,setSelectedClass:T,selectedClass:L,handleClick:$,value:"From"})})]}),(0,l.jsx)("button",{onClick:()=>{let e;localStorage.setItem("defaultflight",JSON.stringify({from:J,to:B,timeDate:N,retuntime:k,journytype:G}));let t=new Date(new Date(N).getTime()+198e5).toISOString().slice(0,19);if(1==G)e="/flightto=".concat(J.iata,"&from=").concat(B.iata,"&date=").concat(t,"&prfdate=").concat(t,"&JourneyType=").concat(G,"&adultcount=").concat(w,"&childCount=").concat(F,"&infantCount=").concat(_,"&selectedClass=").concat(L);else if(2==G){if(k){let s=new Date(new Date(k).getTime()+198e5).toISOString().slice(0,19);e="/flightto=".concat(J.iata,"&from=").concat(B.iata,"&date=").concat(t,"&prfdate=").concat(t,"&JourneyType=").concat(G,"&adultcount=").concat(w,"&childCount=").concat(F,"&infantCount=").concat(_,"&selectedClass=").concat(L,"&returndate=").concat(s)}else f.Am.warn("Select Return Date",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:f.sm})}V.push(e)},className:"text-white flex items-center justify-center text-2xl font-bold p-4 primary-col rounded-br-lg rounded-tr-lg",children:"Search"})]})})}),(0,l.jsx)("div",{className:"tab-content",children:2===A&&(0,l.jsxs)("div",{className:"bg-white custom-shadow grid grid-cols-6 gap-0 border-gray-300",children:[(0,l.jsxs)("div",{className:"flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer",onClick:()=>$("from"),children:[(0,l.jsx)("p",{className:"text-sm text-[#7E7979] font-medium",children:es("From")}),(0,l.jsx)("span",{className:"text-3xl py-1 text-black font-bold",children:J.name}),(0,l.jsxs)("p",{className:"text-black text-xs truncate",children:["[",J.code,"] ",J.airport]}),Y&&"from"===H&&(0,l.jsx)("div",{ref:ee,children:(0,l.jsx)(n.Z,{Click:z,value:"From",handleClosed:U,onSelect:Q})})]}),(0,l.jsxs)("div",{className:"flex flex-col px-4 py-2 relative bg-white border-r hover:bg-[#ECF5FE]",onClick:()=>$("to"),children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("To")}),(0,l.jsx)("span",{className:"text-3xl py-1 text-black font-bold",children:B.name}),(0,l.jsxs)("p",{className:"text-black text-xs truncate",children:["[",B.code,"] ",B.airport]}),Y&&"to"===H&&(0,l.jsx)("div",{ref:ee,children:(0,l.jsx)(n.Z,{Click:z,value:"To",handleClosed:U,onSelect:Q})})]}),(0,l.jsxs)("div",{className:"flex flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]",children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("Departure Date")}),(0,l.jsxs)("div",{className:"flex items-baseline text-black",children:[(0,l.jsxs)("span",{className:"text-3xl py-1 pr-1 text-black font-bold",children:[" ",t.day]}),(0,l.jsxs)("span",{className:"text-sm font-semibold",children:[y[t.month],"'"]}),(0,l.jsxs)("span",{className:"text-sm font-semibold",children:[" ",t.year]}),(0,l.jsx)(c.RVZ,{className:"text-[#d3cfcf] ml-5 text-xl"})]}),(0,l.jsx)("p",{className:"text-black text-xs",children:t.dayOfWeek})]}),(0,l.jsxs)("div",{className:"flex flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]",children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("Return Date")}),(0,l.jsxs)("div",{className:"flex items-baseline text-black",children:[(0,l.jsxs)("span",{className:"text-3xl py-1 pr-1 text-black font-bold",children:[" ",j.day]}),(0,l.jsxs)("span",{className:"text-sm font-semibold",children:[" ",y[j.month],"'"]}),(0,l.jsx)("span",{className:"text-sm font-semibold",children:j.year}),(0,l.jsx)(c.RVZ,{className:"text-[#d3cfcf] ml-5 text-xl"})]}),(0,l.jsx)("p",{className:"text-black text-xs",children:j.dayOfWeek})]}),(0,l.jsxs)("div",{className:"flex flex-col relative  px-4 py-2 bg-white border-r hover:bg-[#ECF5FE]",onClick:()=>$("traveller"),children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("Travelers")}),(0,l.jsxs)("div",{className:"flex items-center text-black",children:[(0,l.jsx)("span",{className:"text-3xl py-1 pr-1 text-black font-bold",children:"1"}),(0,l.jsxs)("span",{className:"text-sm font-semibold flex items-center gap-1",children:["Traveller(s) ",(0,l.jsx)(c.RiI,{})]})]}),(0,l.jsx)("p",{className:"text-black text-xs",children:"Economy"}),Y&&"traveller"===H&&(0,l.jsx)("div",{ref:ee,children:(0,l.jsx)(r.Z,{value:"From"})})]}),(0,l.jsx)(i.default,{href:"",className:"text-white flex items-center justify-center text-2xl font-bold p-4 primary-col  rounded-br-lg rounded-tr-lg",children:"Search"})]})}),(0,l.jsx)("div",{className:"tab-content",children:3===A&&(0,l.jsxs)("div",{className:"bg-white custom-shadow grid grid-cols-4 gap-0 border-gray-300",children:[(0,l.jsxs)("div",{className:"flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r border-b hover:bg-[#ECF5FE] cursor-pointer",onClick:()=>$("from"),children:[(0,l.jsx)("p",{className:"text-sm text-[#7E7979] font-medium",children:es("From")}),(0,l.jsx)("span",{className:"text-3xl py-1 text-black font-bold",children:J.municipality}),(0,l.jsxs)("p",{className:"text-black text-xs truncate",children:["[",J.name,"] ",J.airport]}),Y&&"from"===H&&(0,l.jsx)("div",{ref:ee,children:(0,l.jsx)(n.Z,{Click:z,value:"From",handleClosed:U,onSelect:Q})})]}),(0,l.jsxs)("div",{className:"flex flex-col px-4 py-2 border-b relative bg-white border-r hover:bg-[#ECF5FE]",onClick:()=>$("to"),children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("To")}),(0,l.jsx)("span",{className:"text-3xl py-1 text-black font-bold",children:B.municipality}),(0,l.jsxs)("p",{className:"text-black text-xs truncate",children:["[",B.name,"] ",B.airport]}),Y&&"to"===H&&(0,l.jsx)("div",{ref:ee,children:(0,l.jsx)(n.Z,{Click:z,value:"To",handleClosed:U,onSelect:Q})})]}),(0,l.jsxs)("div",{className:"flex flex-col  px-4 py-2 bg-white  border-r border-b hover:bg-[#ECF5FE]",children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("Departure Date")}),(0,l.jsxs)("div",{className:"flex items-baseline text-black",children:[(0,l.jsxs)("span",{className:"text-3xl py-1 pr-1 text-black font-bold",children:[" ",t.day]}),(0,l.jsxs)("span",{className:"text-sm font-semibold",children:[y[t.month],"'"]}),(0,l.jsxs)("span",{className:"text-sm font-semibold",children:[" ",t.year]}),(0,l.jsx)(c.RVZ,{className:"text-[#d3cfcf] ml-5 text-xl"})]}),(0,l.jsx)("p",{className:"text-black text-xs",children:t.dayOfWeek})]}),(0,l.jsxs)("div",{className:"flex flex-col  px-4 py-2 bg-white border-b rounded-tr-lg hover:bg-[#ECF5FE]",children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("Travelers")}),(0,l.jsxs)("div",{className:"flex items-center text-black",children:[(0,l.jsx)("span",{className:"text-3xl py-1 pr-1 text-black font-bold",children:"1"}),(0,l.jsxs)("span",{className:"text-sm font-semibold flex items-center gap-1",children:["Traveller(s) ",(0,l.jsx)(c.RiI,{})]})]}),(0,l.jsx)("p",{className:"text-black text-xs",children:"Economy"})]}),(0,l.jsxs)("div",{className:"flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer",onClick:()=>$("from"),children:[(0,l.jsx)("p",{className:"text-sm text-[#7E7979] font-medium",children:es("From")}),(0,l.jsx)("span",{className:"text-3xl py-1 text-black font-bold",children:J.name}),(0,l.jsxs)("p",{className:"text-black text-xs truncate",children:["[",J.code,"] ",J.airport]}),Y&&"from"===H&&(0,l.jsx)("div",{ref:ee,children:(0,l.jsx)(n.Z,{Click:z,value:"From",handleClosed:U,onSelect:Q})})]}),(0,l.jsxs)("div",{className:"flex flex-col px-4 py-2 relative bg-white border-r hover:bg-[#ECF5FE]",onClick:()=>$("to"),children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("To")}),(0,l.jsx)("span",{className:"text-3xl py-1 text-black font-bold",children:B.name}),(0,l.jsxs)("p",{className:"text-black text-xs truncate",children:["[",B.code,"] ",B.airport]}),Y&&"to"===H&&(0,l.jsx)("div",{ref:ee,children:(0,l.jsx)(n.Z,{Click:z,value:"To",handleClosed:U,onSelect:Q})})]}),(0,l.jsxs)("div",{className:"flex flex-col  px-4 py-2 bg-white  border-r border-b hover:bg-[#ECF5FE]",children:[(0,l.jsx)("label",{className:"text-sm text-[#7E7979] font-medium",children:es("Departure Date")}),(0,l.jsxs)("div",{className:"flex items-baseline text-black",children:[(0,l.jsxs)("span",{className:"text-3xl py-1 pr-1 text-black font-bold",children:[" ",t.day]}),(0,l.jsxs)("span",{className:"text-sm font-semibold",children:[y[t.month],"'"]}),(0,l.jsxs)("span",{className:"text-sm font-semibold",children:[" ",t.year]}),(0,l.jsx)(c.RVZ,{className:"text-[#d3cfcf] ml-5 text-xl"})]}),(0,l.jsx)("p",{className:"text-black text-xs",children:t.dayOfWeek})]}),(0,l.jsx)("div",{className:"flex items-center justify-center p-4 bg-white rounded-lg",children:(0,l.jsxs)("div",{className:"flex items-center justify-center  bg-white rounded-lg col-span-4 gap-3",children:[(0,l.jsx)("button",{className:"primary-col border border-[#ef6614] p-3 rounded-full text-white font-semibold",children:"Search"}),(0,l.jsx)("button",{className:"bg-white p-3  border rounded-full border-blue-500 text-blue-500 font-semibold",children:"+ Add City"})]})})]})}),(0,l.jsxs)("div",{className:"flex  mt-3 justify-between items-center",children:[(0,l.jsx)("nav",{className:"defenceColm",id:"divFamilyFare",children:(0,l.jsxs)("ul",{className:"flex list-none p-0 m-0",children:[(0,l.jsx)("li",{className:"mr-5",children:(0,l.jsxs)("label",{className:"container_df corp-hidden cscshw flex items-center",children:[es("defenceforces"),(0,l.jsx)("input",{name:"FF",id:"chkArmy",type:"checkbox",value:"",onChange:K,className:"ml-2"}),(0,l.jsx)("span",{className:"checkmark_df"})]})}),(0,l.jsx)("li",{className:"mr-5",children:(0,l.jsxs)("label",{className:"container_df corp-hidden cscshw flex items-center",children:[es("students"),(0,l.jsx)("input",{name:"FF",id:"chkArmy",type:"checkbox",value:"",onChange:K,className:"ml-2"}),(0,l.jsx)("span",{className:"checkmark_df"})]})}),(0,l.jsx)("li",{className:"mr-5",children:(0,l.jsxs)("label",{className:"container_df corp-hidden cscshw flex items-center",children:[es("seniorcitizens"),(0,l.jsx)("input",{name:"FF",id:"chkArmy",type:"checkbox",value:"",onChange:K,className:"ml-2"}),(0,l.jsx)("span",{className:"checkmark_df"})]})}),(0,l.jsx)("li",{className:"mr-5",children:(0,l.jsxs)("label",{className:"container_df corp-hidden cscshw flex items-center",children:[es("doctorsnurses"),(0,l.jsx)("input",{name:"FF",id:"chkArmy",type:"checkbox",value:"",onChange:K,className:"ml-2"}),(0,l.jsx)("span",{className:"checkmark_df"})]})})]})}),(0,l.jsxs)(i.default,{href:"/web-check",rel:"noopener noreferrer",className:"flex items-center space-x-2 p-2 border border-white bg-[blue-500] text-white rounded hover:bg-[#49b2f0] transition",children:[(0,l.jsx)("img",{src:"/Images/Routes/web-checkin-icon-v1.svg",className:"w-5",alt:"Copy Code"}),(0,l.jsx)("span",{className:"text-sm font-bold",children:"Web Check-In"})]})]})]})})})}},92796:function(e,t,s){s.d(t,{r:function(){return c}});var l=s(1455),a=s(83464);let c=(0,l.hg)("/ip",async()=>{let e=await a.Z.get("https://api.ipify.org/?format=json"),t=await e.data.ip;return(await a.Z.get("http://ip-api.com/json/".concat(t))).data}),n=(0,l.oM)({name:"ip",initialState:{info:[],isLoading:!1,isError:!1},extraReducers:e=>{e.addCase(c.pending,e=>{e.isLoading=!0}),e.addCase(c.fulfilled,(e,t)=>{e.info=t.payload,e.isLoading=!1}),e.addCase(c.rejected,e=>{e.isError=!0,e.isLoading=!1})}});t.Z=n.reducer},4067:function(e,t,s){s.d(t,{e:function(){return n}});var l=s(1455),a=s(83464),c=s(57198);let n=(0,l.hg)("/airports",async()=>(await a.Z.get("".concat(c._X,"/airports"))).data),r=(0,l.oM)({name:"airports",initialState:{info:[],isLoading:!1,isError:!1},extraReducers:e=>{e.addCase(n.pending,e=>{e.isLoading=!0}),e.addCase(n.fulfilled,(e,t)=>{e.info=t.payload,e.isLoading=!1}),e.addCase(n.rejected,e=>{e.isError=!0,e.isLoading=!1})}});t.Z=r.reducer}}]);