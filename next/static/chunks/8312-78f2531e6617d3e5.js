(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8312],{55076:function(e,s,l){"use strict";var t=l(57437),a=l(2265),i=l(33145),r=l(49089),n=l(61371);l(19590);var c=l(68575),d=l(99376),o=l(25559),x=l(24737),m=l(83464);s.default=()=>{let e=(0,x.iT)(),s=(0,x.Lg)(e),[l,h]=(0,a.useState)("oneWay"),[f,p]=(0,a.useState)(new Date),[u,b]=(0,a.useState)(null),[g,j]=(0,a.useState)(1),[N,v]=(0,a.useState)(1),[y,w]=(0,a.useState)(1),[k,C]=(0,a.useState)(0),[S,F]=(0,a.useState)(0),[I,E]=(0,a.useState)(1);(0,c.I0)(),(0,c.v9)(e=>e.ipslice);let U=(0,d.useRouter)(),T=(0,c.v9)(e=>e.Allairport);(0,c.v9)(e=>e.topPortsSlice);let O=["All","Economy","Premium Economy","Business","PremiumBusiness","First Class"],[D,L]=(0,a.useState)(),[P,_]=(0,a.useState)(""),[A,B]=(0,a.useState)(0),[z,G]=(0,a.useState)({municipality:"New Delhi",name:"Indira Gandhi International Airport",iata:"DEL"}),[M,H]=(0,a.useState)({municipality:"Mumbai",name:"Chhatrapati Shivaji International Airport",iata:"BOM"}),[W,R]=(0,a.useState)({info:[],isLoading:!1}),Y=e=>{j(s=>Math.max(s+e,1))},q=e=>{v(s=>Math.max(s+e,1))},J=e=>{b(e)},V=()=>{b(!1)},Z=e=>{e.target.value},K=(e,s)=>{"adult"===e?w(s):"child"===e?C(s):"infant"===e&&F(s)},Q=e=>{e.preventDefault(),_(e.target.value)};(0,a.useEffect)(()=>{L(T)},[T]);let[X,$]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=async()=>{P&&(R({...W,isLoading:!0}),R({info:(await m.Z.get("https://port-api.com/airport/search/".concat(P))).data.features,isLoading:!1}))},s=setTimeout(()=>{e()},1e3);return()=>clearTimeout(s)},[P]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"block md:hidden p-3 ",children:[(0,t.jsxs)("div",{className:"flex space-x-4",children:[(0,t.jsx)("button",{className:"h-8 font-semibold text-sm px-4 rounded ".concat("oneWay"===l?"bg-blue-500 text-white":"bg-gray-200"),onClick:()=>h("oneWay"),children:"One Way"}),(0,t.jsx)("button",{className:"h-8 font-semibold text-sm px-4 rounded ".concat("roundTrip"===l?"bg-blue-500 text-white":"bg-gray-200"),onClick:()=>h("roundTrip"),children:"Round Trip"})]}),"oneWay"===l&&(0,t.jsxs)("div",{className:"my-4",children:[(0,t.jsxs)("div",{className:"flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 my-3",children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/location.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{className:"flex-1 w-5/6 relative cursor-pointer",onClick:()=>J("from"),children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"From"}),(0,t.jsx)("span",{className:"text-xl py-1 text-black font-bold",children:z.municipality}),(0,t.jsx)("p",{id:"fromCity",className:"text-sm",children:z.name})]}),"from"===u&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-[9999]",children:(0,t.jsxs)("div",{className:"bg-white w-full h-full ",children:[(0,t.jsxs)("div",{className:" bg-blue-500 p-4",children:[(0,t.jsxs)("div",{className:"flex  items-center ",children:[(0,t.jsx)("button",{className:" py-2 pr-2  text-white rounded",onClick:V,children:(0,t.jsx)(r.x_l,{})}),(0,t.jsx)("h2",{className:"text-xl text-white leading-none font-bold",children:"Select Origin City"})]}),(0,t.jsxs)("div",{className:" relative",children:[(0,t.jsx)("input",{type:"text",className:" h-10 mt-3 pl-8 rounded w-full",placeholder:"Search your city",value:P,onChange:Q}),(0,t.jsx)(r.U41,{className:"absolute top-6 left-2  text-gray-400"})]})]}),(0,t.jsxs)("ul",{className:"h-[85vh] overflow-hidden overflow-y-auto pb-10",children:[D&&D.isLoading&&(0,t.jsx)("div",{children:"loading...."}),(0,t.jsx)("li",{className:"bg-[#ecf5fe] py-2 px-5 text-gray-600 text-sm uppercase",children:"Popular Cities"}),W.isLoading&&(0,t.jsx)("div",{children:"Loading.."}),!W.isLoading&&W.info&&W.info.map(e=>(0,t.jsxs)("div",{className:"flex justify-between my-4 shadow-sm w-full px-2 items-center",onClick:()=>{G({municipality:e.properties.municipality,name:e.properties.name,iata:e.properties.iata}),b(""),R({info:[],isLoading:!1})},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:e.properties.municipality}),(0,t.jsx)("p",{className:"text-sm text-gray-600",children:e.properties.name})]}),e.properties.iata&&(0,t.jsx)("div",{className:"bg-black text-white  p-1 px-3 rounded-md",children:e.properties.iata})]}))]})]})})]}),(0,t.jsxs)("div",{className:"flex items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 my-3",children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/apka-takeoff.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{className:"flex-1 w-5/6 relative cursor-pointer",onClick:()=>J("to"),children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"To"}),(0,t.jsx)("span",{className:"text-xl py-1 text-black font-bold",children:M.municipality}),(0,t.jsx)("p",{id:"toCity",className:"text-sm",children:M.name})]}),"to"===u&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-[9999]",children:(0,t.jsxs)("div",{className:"bg-white w-full h-full ",children:[(0,t.jsxs)("div",{className:" bg-blue-500 p-4",children:[(0,t.jsxs)("div",{className:"flex  items-center ",children:[(0,t.jsx)("button",{className:" py-2 pr-2  text-white rounded",onClick:V,children:(0,t.jsx)(r.x_l,{})}),(0,t.jsx)("h2",{className:"text-xl text-white leading-none font-bold",children:"Select Destination City"})]}),(0,t.jsxs)("div",{className:" relative",children:[(0,t.jsx)("input",{type:"text",className:" h-10 mt-3 pl-8 rounded w-full",placeholder:"Search your city",value:P,onChange:Q}),(0,t.jsx)(r.U41,{className:"absolute top-6 left-2  text-gray-400"})]})]}),(0,t.jsxs)("ul",{className:"h-[85vh] overflow-hidden overflow-y-auto",children:[D&&D.isLoading&&(0,t.jsx)("div",{children:"loading...."}),(0,t.jsx)("li",{className:"bg-[#ecf5fe] py-2 px-5 text-gray-600 text-sm uppercase",children:"Popular Cities"}),W.isLoading&&(0,t.jsx)("div",{children:"Loading.."}),!W.isLoading&&W.info&&W.info.map(e=>(0,t.jsxs)("div",{className:"flex justify-between my-4 shadow-sm w-full px-2 items-center",onClick:()=>{H({municipality:e.properties.municipality,name:e.properties.name,iata:e.properties.iata}),b(""),R({info:[],isLoading:!1})},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:e.properties.municipality}),(0,t.jsx)("p",{className:"text-sm text-gray-600",children:e.properties.name})]}),e.properties.iata&&(0,t.jsx)("div",{className:"bg-black text-white  p-1 px-3 rounded-md",children:e.properties.iata})]}))]})]})})]}),(0,t.jsx)("div",{className:"flex gap-2 my-3 ",children:(0,t.jsxs)("div",{className:"relative flex items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 w-full",onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/calender.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"Travel Date"}),(0,t.jsx)("span",{className:"text-sm py-1 text-black font-bold",children:f?f.toLocaleDateString():"29/11/2003"})]}),X&&(0,t.jsx)("div",{className:"bg-white p-5 shadow-2xl absolute top-full left-0 mt-2 z-10",children:(0,t.jsx)(o.t,{"aria-label":"Select a date",value:"",onChange:e=>{p(new Date(e.year,e.month-1,e.day)),$(!1)},minValue:s})})]})}),(0,t.jsxs)("div",{className:"flex gap-2 my-3 ",children:[(0,t.jsxs)("div",{className:"flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 w-1/2 relative cursor-pointer",onClick:()=>J("passenger"),children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/user.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"Passenger"}),(0,t.jsx)("div",{className:"font-semibold",children:"1 Traveller"})]})]}),"passenger"===u&&(0,t.jsx)("div",{className:"fixed flex justify-end inset-0 bg-[#0009] bottom-0   z-[9999]",children:(0,t.jsxs)("div",{className:" w-full  absolute bottom-0 ",children:[(0,t.jsx)("div",{className:"border-b bg-white p-4",children:(0,t.jsxs)("div",{className:"flex justify-between items-center ",children:[(0,t.jsx)("h2",{className:"text-xl  leading-none font-bold",children:"No. of Travellers"}),(0,t.jsx)("button",{className:" text-xl text-blue-600 leading-none font-normal",onClick:V,children:"Done"})]})}),(0,t.jsxs)("div",{className:"p-4  bg-white",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"font-semibold",children:"Adults (12+ yrs)"}),(0,t.jsx)("ul",{className:"flex justify-between gap-1 mt-2",children:[...Array(9).keys()].map(e=>(0,t.jsx)("li",{className:"cursor-pointer font-semibold py-2 px-3 ".concat(y===e+1?"bg-blue-500 text-white":"border bg-white"," "),onClick:()=>K("adult",e+1),children:e+1},e+1))})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"font-semibold",children:"Children (2-12 yrs)"}),(0,t.jsx)("ul",{className:"flex justify-between gap-1 mt-2",children:[...Array(9).keys()].map(e=>(0,t.jsx)("li",{className:"cursor-pointer font-semibold py-2 px-3 ".concat(k===e?"bg-blue-500 text-white":"border bg-white"," "),onClick:()=>K("child",e),children:e},e))})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"font-semibold",children:"Infant (0-2 yrs)"}),(0,t.jsx)("ul",{className:"flex  gap-2 mt-2",children:[...[,,,,,].keys()].map(e=>(0,t.jsx)("li",{className:"cursor-pointer font-semibold py-2 px-3 ".concat(S===e?"bg-blue-500 text-white":"border bg-white"," "),onClick:()=>K("infant",e),children:e},e))})]}),(0,t.jsxs)("div",{id:"errorfrm",className:"mt-4",children:[(0,t.jsx)("div",{id:"alertdiv_maxTraveler",className:"hidden bg-red-500 text-white p-2 rounded",children:"Currently, booking can only be made for up to 9 travellers. You can make multiple bookings to accommodate your entire party."}),(0,t.jsx)("div",{id:"alertdiv_maxInfant",className:"hidden bg-red-500 text-white p-2 rounded",children:"Infant cannot travel more than the adult."})]})]})]})}),(0,t.jsxs)("div",{className:"flex  items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 w-1/2 relative cursor-pointer",onClick:()=>J("seat"),children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/seat.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"Seat Class"}),(0,t.jsx)("div",{className:"font-semibold",children:O.filter((e,s)=>I===s+1)})]})]}),"seat"===u&&(0,t.jsx)("div",{className:"fixed inset-0 bg-[#0009] bottom-0   z-[9999]",children:(0,t.jsxs)("div",{className:" w-full  absolute bottom-0 ",children:[(0,t.jsx)("div",{className:" bg-white p-4",children:(0,t.jsxs)("div",{className:"flex justify-between items-center ",children:[(0,t.jsx)("h2",{className:"text-xl  leading-none font-bold",children:"Select Class"}),(0,t.jsx)("button",{className:" text-2xl  rounded",onClick:V,children:(0,t.jsx)(r.aHS,{})})]})}),(0,t.jsxs)("div",{className:"bg-white p-4",children:[O.map((e,s)=>(0,t.jsxs)("label",{className:"flex items-center mb-2",onChange:()=>E(s+1),children:[(0,t.jsx)("input",{type:"radio",name:"class",value:"Economy",checked:I===s+1,className:"mr-2"}),(0,t.jsx)("span",{className:"text-gray-700",children:e})]})),(0,t.jsx)("button",{onClick:()=>J(""),className:"bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600",children:"Done"})]})]})})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)("button",{onClick:()=>{let e=new Date(new Date(f).getTime()+198e5).toISOString().slice(0,19),s="/flightto=".concat(z.iata,"&from=").concat(M.iata,"&date=").concat(e,"&prfdate=").concat(e,"&JourneyType=").concat(A,"&adultcount=").concat(y,"&childCount=").concat(k,"&infantCount=").concat(S,"&selectedClass=").concat(I);U.push(s)},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full",children:"Search"})})]}),"roundTrip"===l&&(0,t.jsxs)("div",{className:"my-4",children:[(0,t.jsxs)("div",{className:"flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 my-3",children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/location.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{className:"flex-1 w-5/6 relative cursor-pointer",onClick:()=>J("from"),children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"From"}),(0,t.jsx)("span",{className:"text-xl py-1 text-black font-bold",children:"Delhi"}),(0,t.jsx)("p",{id:"fromCity",className:"text-sm",children:"[DEL] Indira Gandhi International Airport"})]}),"from"===u&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-[9999]",children:(0,t.jsxs)("div",{className:"bg-white w-full h-full ",children:[(0,t.jsxs)("div",{className:" bg-blue-500 p-4",children:[(0,t.jsxs)("div",{className:"flex  items-center ",children:[(0,t.jsx)("button",{className:" py-2 pr-2  text-white rounded",onClick:V,children:(0,t.jsx)(r.x_l,{})}),(0,t.jsx)("h2",{className:"text-xl text-white leading-none font-bold",children:"Select Origin City"})]}),(0,t.jsxs)("div",{className:" relative",children:[(0,t.jsx)("input",{type:"text",className:" h-10 mt-3 pl-8 rounded w-full",placeholder:"Search your city"}),(0,t.jsx)(r.U41,{className:"absolute top-6 left-2  text-gray-400"})]})]}),(0,t.jsx)("ul",{className:"h-[85vh] overflow-hidden overflow-y-auto",children:(0,t.jsx)("li",{className:"bg-[#ecf5fe] py-2 px-5 text-gray-600 text-sm uppercase",children:"Popular Cities"})})]})})]}),(0,t.jsxs)("div",{className:"flex items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 my-3",children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/apka-takeoff.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{className:"flex-1 w-5/6 relative cursor-pointer",onClick:()=>J("to"),children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"To"}),(0,t.jsx)("span",{className:"text-xl py-1 text-black font-bold",children:"Delhi"}),(0,t.jsx)("p",{id:"toCity",className:"text-sm",children:"[BOM] Chhatrapati Shivaji International Airport"})]}),"to"===u&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-[9999]",children:(0,t.jsxs)("div",{className:"bg-white w-full h-full ",children:[(0,t.jsxs)("div",{className:" bg-blue-500 p-4",children:[(0,t.jsxs)("div",{className:"flex  items-center ",children:[(0,t.jsx)("button",{className:" py-2 pr-2  text-white rounded",onClick:V,children:(0,t.jsx)(r.x_l,{})}),(0,t.jsx)("h2",{className:"text-xl text-white leading-none font-bold",children:"Select Destination City"})]}),(0,t.jsxs)("div",{className:" relative",children:[(0,t.jsx)("input",{type:"text",className:" h-10 mt-3 pl-8 rounded w-full",placeholder:"Search your city"}),(0,t.jsx)(r.U41,{className:"absolute top-6 left-2  text-gray-400"})]})]}),(0,t.jsxs)("ul",{className:"h-[85vh] overflow-hidden overflow-y-auto",children:[(0,t.jsx)("li",{className:"bg-[#ecf5fe] py-2 px-5 text-gray-600 text-sm uppercase",children:"Popular Cities"}),airports.map((e,s)=>(0,t.jsxs)("li",{className:"flex justify-between items-center py-2 px-5",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{className:"font-bold",children:[e.city,", ",e.country]}),(0,t.jsx)("p",{className:"text-sm",children:e.name})]}),(0,t.jsx)("span",{className:"bg-[#737579] py-1 text-white font-bold rounded w-16 text-center px-3 uppercase",children:e.code})]},s))]})]})})]}),(0,t.jsxs)("div",{className:"flex gap-2 my-3 ",children:[(0,t.jsxs)("div",{className:"relative flex items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 w-1/2",onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/calender.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"Travel Date"}),(0,t.jsx)("span",{className:"text-sm py-1 text-black font-bold",children:f?f.toLocaleDateString():"29/11/2003"})]}),X&&(0,t.jsx)("div",{className:"bg-white p-5 shadow-2xl absolute top-full left-0 mt-2 z-10",children:(0,t.jsx)(n._W,{mode:"single",selected:f,onSelect:p})})]}),(0,t.jsxs)("div",{className:"flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 w-1/2",children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/evening.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{onClick:()=>J("room"),children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"Room & Night"}),(0,t.jsx)("span",{className:"text-sm py-1 text-black font-bold",children:"1 Room, 1 Night(s)"})]}),"room"===u&&(0,t.jsx)("div",{className:"fixed inset-0 bg-[#0009] bottom-0   z-[9999]",children:(0,t.jsxs)("div",{className:" w-full  absolute bottom-0 ",children:[(0,t.jsx)("div",{className:" bg-white p-4",children:(0,t.jsxs)("div",{className:"flex justify-between items-center ",children:[(0,t.jsx)("h2",{className:"text-xl  leading-none font-bold",children:"Select Nights"}),(0,t.jsx)("button",{className:" text-2xl  rounded",onClick:V,children:(0,t.jsx)(r.aHS,{})})]})}),(0,t.jsx)("div",{className:"bg-white p-4",children:(0,t.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-lg font-semibold",children:"No of Rooms"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("button",{type:"button",onClick:()=>Y(-1),className:"text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl",children:"-"}),(0,t.jsx)("span",{className:"px-3 py-1 text-center border text-black bg-[#fffbf3] border-[fffbf3] ",children:g}),(0,t.jsx)("button",{type:"button",onClick:()=>Y(1),className:" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br",children:"+"})]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-lg font-semibold",children:"No of Nights"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("button",{type:"button",onClick:()=>q(-1),className:"text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl",children:"-"}),(0,t.jsx)("span",{className:"px-3 py-1 text-center border text-black bg-[#fffbf3] border-[fffbf3] ",children:N}),(0,t.jsx)("button",{type:"button",onClick:()=>q(1),className:" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br",children:"+"})]})]})]})})]})})]})]}),(0,t.jsxs)("div",{className:"flex gap-2 my-3 ",children:[(0,t.jsxs)("div",{className:"flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 w-1/2 relative cursor-pointer",onClick:()=>J("passenger"),children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/user.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"Passenger"}),(0,t.jsx)("div",{className:"font-semibold",children:"1 Traveller"})]})]}),"passenger"===u&&(0,t.jsx)("div",{className:"fixed flex justify-end inset-0 bg-[#0009] bottom-0   z-[9999]",children:(0,t.jsxs)("div",{className:" w-full  absolute bottom-0 ",children:[(0,t.jsx)("div",{className:"border-b bg-white p-4",children:(0,t.jsxs)("div",{className:"flex justify-between items-center ",children:[(0,t.jsx)("h2",{className:"text-xl  leading-none font-bold",children:"No. of Travellers"}),(0,t.jsx)("button",{className:" text-xl text-blue-600 leading-none font-normal",onClick:V,children:"Done"})]})}),(0,t.jsxs)("div",{className:"p-4  bg-white",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"font-semibold",children:"Adults (12+ yrs)"}),(0,t.jsx)("ul",{className:"flex justify-between gap-1 mt-2",children:[...Array(9).keys()].map(e=>(0,t.jsx)("li",{className:"cursor-pointer font-semibold py-2 px-3 ".concat(y===e+1?"bg-blue-500 text-white":"border bg-white"," "),onClick:()=>K("adult",e+1),children:e+1},e+1))})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"font-semibold",children:"Children (2-12 yrs)"}),(0,t.jsx)("ul",{className:"flex justify-between gap-1 mt-2",children:[...Array(9).keys()].map(e=>(0,t.jsx)("li",{className:"cursor-pointer font-semibold py-2 px-3 ".concat(k===e?"bg-blue-500 text-white":"border bg-white"," "),onClick:()=>K("child",e),children:e},e))})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("div",{className:"font-semibold",children:"Infant (0-2 yrs)"}),(0,t.jsx)("ul",{className:"flex  gap-2 mt-2",children:[...[,,,,,].keys()].map(e=>(0,t.jsx)("li",{className:"cursor-pointer font-semibold py-2 px-3 ".concat(S===e?"bg-blue-500 text-white":"border bg-white"," "),onClick:()=>K("infant",e),children:e},e))})]}),(0,t.jsxs)("div",{id:"errorfrm",className:"mt-4",children:[(0,t.jsx)("div",{id:"alertdiv_maxTraveler",className:"hidden bg-red-500 text-white p-2 rounded",children:"Currently, booking can only be made for up to 9 travellers. You can make multiple bookings to accommodate your entire party."}),(0,t.jsx)("div",{id:"alertdiv_maxInfant",className:"hidden bg-red-500 text-white p-2 rounded",children:"Infant cannot travel more than the adult."})]})]})]})}),(0,t.jsxs)("div",{className:"flex  items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 w-1/2 relative cursor-pointer",onClick:()=>J("seat"),children:[(0,t.jsx)("div",{className:"mr-3",children:(0,t.jsx)(i.default,{src:"/Images/seat.svg",width:24,height:24,alt:""})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-sm font-light",children:"Seat Class"}),(0,t.jsx)("div",{className:"font-semibold",children:"Economy"})]})]}),"seat"===u&&(0,t.jsx)("div",{className:"fixed inset-0 bg-[#0009] bottom-0   z-[9999]",children:(0,t.jsxs)("div",{className:" w-full  absolute bottom-0 ",children:[(0,t.jsx)("div",{className:" bg-white p-4",children:(0,t.jsxs)("div",{className:"flex justify-between items-center ",children:[(0,t.jsx)("h2",{className:"text-xl  leading-none font-bold",children:"Select Class"}),(0,t.jsx)("button",{className:" text-2xl  rounded",onClick:V,children:(0,t.jsx)(r.aHS,{})})]})}),(0,t.jsxs)("div",{className:"bg-white p-4",children:[(0,t.jsxs)("label",{className:"flex items-center mb-2",children:[(0,t.jsx)("input",{type:"radio",name:"class",value:"Economy",checked:"Economy"===I,onChange:Z,className:"mr-2"}),(0,t.jsx)("span",{className:"text-gray-700",children:"Economy"})]}),(0,t.jsxs)("label",{className:"flex items-center mb-2",children:[(0,t.jsx)("input",{type:"radio",name:"class",value:"Premium Economy",checked:"Premium Economy"===I,onChange:Z,className:"mr-2"}),(0,t.jsx)("span",{className:"text-gray-700",children:"Premium Economy"})]}),(0,t.jsxs)("label",{className:"flex items-center mb-2",children:[(0,t.jsx)("input",{type:"radio",name:"class",value:"Business",checked:"Business"===I,onChange:Z,className:"mr-2"}),(0,t.jsx)("span",{className:"text-gray-700",children:"Business"})]}),(0,t.jsxs)("label",{className:"flex items-center mb-4",children:[(0,t.jsx)("input",{type:"radio",name:"class",value:"First Class",checked:"First Class"===I,onChange:Z,className:"mr-2"}),(0,t.jsx)("span",{className:"text-gray-700",children:"First Class"})]}),(0,t.jsx)("button",{onClick:()=>{document.getElementById("popup").style.display="none"},className:"bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600",children:"Done"})]})]})})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)("input",{type:"submit",value:"Search",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full"})})]})]})})}},34657:function(e,s,l){"use strict";var t=l(57437),a=l(2265),i=l(19764);l(7354),l(76889),l(27648),l(92119);var r=l(73377),n=l(42586);let c=[{title:"Exclusive Offer",subtitle:"New User",offer:"First Flight",code:"apkatrip",imageUrl:"/Images/apka trip6 (1).webp",description:"Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",category:"TopOffer",bg:"#ECF5FE",link:"/holidayspackage"},{title:"Flights Offer",subtitle:"New User",offer:"First Flight",code:"apkatrip",imageUrl:"/Images/apka trip1.webp",description:"Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",category:"FlightsOffer",bg:"#ECF5FE",link:"/holidayspackage"},{title:"Hotel Offer",subtitle:"New User",offer:"First Flight",code:"apkatrip",imageUrl:"/Images/apka trip2.webp",description:"Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",category:"HotelsOffer",bg:"#ECF5FE",link:"/holidayspackage"},{title:"Holiday Offer",subtitle:"New User",offer:"First Flight",code:"apkatrip",imageUrl:"/Images/apka trip3.webp",description:"Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",category:"HolidayOffer",bg:"#ECF5FE",link:"/holidayspackage"},{title:"Bank Offers",subtitle:"New User",offer:"First Flight",code:"apkatrip",imageUrl:"/Images/apka trip4.webp",description:"Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",category:"BankOffer",bg:"#ECF5FE",link:"/holidayspackage"},{title:"Bus Offers",subtitle:"New User",offer:"First Flight",code:"apkatrip",imageUrl:"/Images/apka trip7.webp",description:"Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",category:"BusOffer",bg:"#ECF5FE",link:"/holidayspackage"},{title:"Cabs",subtitle:"New User",offer:"First Flight",code:"apkatrip",imageUrl:"/Images/apka trip8.webp",description:"Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",category:"CabOffer",bg:"#ECF5FE",link:"/holidayspackage"}];s.default=e=>{let{isLoading:s,children:l}=e,d=(0,n.useTranslations)("HomePage"),[o,x]=(0,a.useState)(!0),[m,h]=(0,a.useState)("TopOffer"),f="TopOffer"===m?c:c.filter(e=>e.category===m);return(0,a.useEffect)(()=>{let e=setTimeout(()=>{x(!1)},2e3);return()=>clearTimeout(e)},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"my-6",children:[(0,t.jsx)("div",{className:"relative  pt-0 lg:pt-10 text-lg md:text-xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center gap-2 my-5",children:d("title")}),(0,t.jsxs)("div",{className:" flex  flex-col lg:flex-row px-4 lg:px-36 justify-end gap-4 w-full ",children:[(0,t.jsx)(i.tq,{className:" w-full  lg:w-3/6 h-[200px] lg:h-[300px] ",autoplay:{delay:2e3,disableOnInteraction:!1},modules:[r.pt],children:["/Images/flight-slide2.png","/Images/flight-slide1.png","/Images/flight-slide3.png"].map((e,s)=>(0,t.jsx)(i.o5,{className:"flex flex-col   rounded-2xl overflow-hidden  bg-white-900",children:(0,t.jsx)("img",{src:e,alt:"",className:"w-full  h-full"})},s))}),(0,t.jsx)("div",{className:"flex  lg:gap-4  lg:w-3/6 justify-around",children:f.slice(0,3).map(e=>(0,t.jsx)("div",{className:"rounded-2xl overflow-hidden   h-[100px]   md:h-[250px]  lg:h-full",children:(0,t.jsx)("img",{src:e.imageUrl,alt:"",className:"h-full w-full"})}))})]})]})})}},92119:function(){},76889:function(){}}]);