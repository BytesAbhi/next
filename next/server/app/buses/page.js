(()=>{var e={};e.id=4994,e.ids=[4994],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27790:e=>{"use strict";e.exports=require("assert")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},61035:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c}),t(98928),t(71486),t(41888);var a=t(23191),r=t(88716),i=t(37922),l=t.n(i),o=t(95231),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);t.d(s,n);let c=["",{children:["buses",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,98928)),"D:\\Apkatrip\\Apkatripmain\\apkatrip\\app\\buses\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,64519))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,71486)),"D:\\Apkatrip\\Apkatripmain\\apkatrip\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,41888)),"D:\\Apkatrip\\Apkatripmain\\apkatrip\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,64519))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\Apkatrip\\Apkatripmain\\apkatrip\\app\\buses\\page.js"],d="/buses/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/buses/page",pathname:"/buses",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},54691:(e,s,t)=>{Promise.resolve().then(t.bind(t,93951))},28690:(e,s,t)=>{"use strict";t.d(s,{Z:()=>o});var a=t(10326),r=t(23844),i=t(17577),l=t(44046);let o=()=>{let e=(0,r.useTranslations)("flight"),s=[{question:e("questions1"),answer:e("ans1")},{question:e("questions2"),answer:e("ans2")},{question:e("questions3"),answer:e("ans3")},{question:e("questions4"),answer:e("ans4")},{question:e("questions5"),answer:e("ans5")}],[t,o]=(0,i.useState)(0),n=e=>{o(t===e?null:e)};return(0,a.jsxs)("div",{className:"block lg:flex gap-12 items-center px-5 lg:px-20",children:[(0,a.jsxs)("div",{className:"flex-1 max-w-full lg:max-w-6xl py-10",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Frequently Asked Questions"}),a.jsx("div",{className:"",children:s.map((e,s)=>(0,a.jsxs)("div",{className:"border-b py-3 border-gray-300",children:[(0,a.jsxs)("button",{onClick:()=>n(s),className:"w-full py-2 text-left flex items-center justify-between focus:outline-none focus:ring-0 rounded-t-lg",children:[a.jsx("h3",{className:"text-lg font-semibold",children:e.question}),t===s?a.jsx(l.s$2,{className:"h-3 w-3 text-gray-500"}):a.jsx(l.RiI,{className:"h-3 w-3 text-gray-500"})]}),t===s&&a.jsx("div",{className:" py-2 bg-white ",children:a.jsx("p",{children:e.answer})})]},s))})]}),a.jsx("img",{src:"/Images/faq.webp",alt:"",className:"flex-1 w-full lg:w-1/2 h-auto"})]})}},26196:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var a=t(10326),r=t(17577),i=t(44046);t(90434);var l=t(25842),o=t(33642),n=t(99992),c=t(60019);t(85859);var u=t(35047);let d=()=>{let[e,s]=(0,r.useState)(""),t=JSON.parse(localStorage.getItem("busSearch")),[d,p]=(0,r.useState)(t&&t.fromCity||{CityId:1354,CityName:"Delhi"}),[m,x]=(0,r.useState)(t&&t.toCity||{CityId:3534,CityName:"Mumbai"}),h=(0,c.iT)(),b=(0,c.Lg)(h),[g,f]=(0,r.useState)(t&&new Date(t.pickupdate)||new Date(Date.now())),v=(0,u.useRouter)();(0,r.useEffect)(()=>(document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}),[]);let[y,j]=(0,r.useState)(!1),[k,N]=(0,r.useState)(""),w=(0,l.I0)(),C=(0,l.v9)(e=>e.busCityslice),q=(0,r.useRef)(null),S=e=>{q.current&&!q.current.contains(e.target)&&j(!1)};(0,r.useEffect)(()=>(document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}),[]);let[A,T]=(0,r.useState)(""),I=e=>{T(e.target.value)};return(0,r.useEffect)(()=>{let e=setTimeout(()=>{w((0,o.J)(A))},500);return()=>clearTimeout(e)},[A]),a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-col  lg:block custom-color text-white md:px-10 lg:px-52  py-10",children:[a.jsx("span",{className:" text-lg mb-2 mr-2 font-bold  rounded-full ",children:"Online Bus Tickets"}),(0,a.jsxs)("div",{className:"bg-white custom-shadow grid grid-cols-4 gap-0 border-gray-300",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"flex flex-col bg-white relative px-4 py-3 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer",onClick:()=>s("from"),children:[a.jsx("p",{className:"text-sm text-[#7E7979] font-medium",children:"From"}),a.jsx("span",{className:"text-3xl py-1 text-black font-bold",children:d.CityName})]}),"from"==e&&(0,a.jsxs)("div",{className:"absolute top-full bg-white w-full z-30",children:[a.jsx("input",{type:"text",value:A,className:"w-full text-black",placeholder:"Search city...",onChange:e=>I(e)}),a.jsx("div",{className:"h-32 overflow-hidden overflow-y-scroll",children:C&&!C.isLoading&&C.info&&C.info.BusCities&&C.info.BusCities.map(e=>a.jsx("p",{className:" border-b-2 p-1 cursor-pointer",onClick:()=>{p({CityId:e.CityId,CityName:e.CityName}),s("to"),T("")},children:e.CityName}))})]})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"flex flex-col px-4 py-3 relative bg-white border-r hover:bg-[#ECF5FE]",onClick:()=>s("to"),children:[a.jsx("label",{className:"text-sm text-[#7E7979] font-medium",children:"To"}),a.jsx("span",{className:"text-3xl py-1 text-black font-bold",children:m.CityName})]}),"to"==e&&(0,a.jsxs)("div",{className:"absolute top-full bg-white w-full z-30",children:[a.jsx("input",{type:"text",value:A,className:"w-full text-black",placeholder:"Search city...",onChange:e=>I(e)}),a.jsx("div",{className:"h-32 overflow-hidden overflow-y-scroll",children:C&&!C.isLoading&&C.info&&C.info.BusCities&&C.info.BusCities.map(e=>a.jsx("p",{className:" border-b-2 p-1 cursor-pointer",onClick:()=>{x({CityId:e.CityId,CityName:e.CityName}),s("date"),T("")},children:e.CityName}))})]})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"flex flex-col  px-4 py-3 bg-white  border-r hover:bg-[#ECF5FE]",onClick:()=>s("date"),children:[a.jsx("label",{className:"text-sm text-[#7E7979] font-medium",children:"Departure Date"}),(0,a.jsxs)("div",{className:"flex items-baseline text-black",children:[(0,a.jsxs)("span",{className:"text-3xl py-1 pr-1 text-black font-bold",children:[" ",g.getDate()-1]}),(0,a.jsxs)("span",{className:"text-sm font-semibold",children:[g.toLocaleString("en-US",{month:"short"}),"'"]}),(0,a.jsxs)("span",{className:"text-sm font-semibold",children:[" ",g.getFullYear()]}),a.jsx(i.RVZ,{className:"text-[#d3cfcf] ml-5 text-xl"})]})]}),"date"===e&&a.jsx("div",{className:"bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10",children:a.jsx(n.t,{"aria-label":"Select a date",value:"",onChange:e=>{f(new Date(e.year,e.month-1,e.day+1)),s("")},minValue:b})})]}),a.jsx("button",{onClick:()=>{localStorage.setItem("busSearch",JSON.stringify({fromCity:d,toCity:m,pickupdate:g}));let e=g.toISOString().split("T")[0];v.push(`/buses/DateOfJourney=${e}&OriginId=${d.CityId}&DestinationId=${m.CityId}`)},className:"text-white flex items-center justify-center text-2xl font-bold p-4 primary-col rounded-br-lg rounded-tr-lg",children:"Search"})]})]})})}},93951:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var a=t(10326);t(17577),t(58854);var r=t(7580),i=t(28690);t(90434);var l=t(63708),o=t(26196);let n=()=>(0,a.jsxs)(a.Fragment,{children:[a.jsx(o.Z,{}),a.jsx(l.default,{}),a.jsx(r.default,{}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"block md:flex items-center justify-between gap-4 px-5 lg:px-20",children:[(0,a.jsxs)("div",{className:"max-w-2xl",children:[a.jsx("h2",{className:"text-2xl lg:text-3xl font-bold text-black",children:"Why Choose Apka Trip for Bus Ticket Booking?"}),(0,a.jsxs)("p",{className:"text-lg mt-4 text-justify",children:["Apka Trip is a wonderful platform for all bus travelers. Whether you are planning to travel to Manali or Jaipur, you can discover your favorite place through luxury and budgeted buses including sleeper, AC/NON-AC, Volvo, semi-sleeper, and room.",a.jsx("br",{}),"Our easy-to-use platform provides a hassle-free booking experience, and you too can opt for bus booking online at Apka Trip and ditch long queues for bus tickets. Booking bus tickets online has never been this easy, but with Apka Trip's simple user interface, you can book bus tickets within a few clicks. Choose from 3999+ bus operators and book bus tickets online from the comfort of your home. Download the Apka Trip app to book flight tickets, train tickets, and bus tickets at the lowest prices seamlessly."]})]}),(0,a.jsxs)("div",{className:"block md:flex gap-5",children:[a.jsx("div",{className:"",children:a.jsx("img",{src:"/Images/bus-img1.webp",alt:"Bus img 1",className:"w-full lg:w-80 h-[500px] object-cover mt-4 lg:mt-0 rounded-lg"})}),a.jsx("div",{className:"",children:a.jsx("img",{src:"/Images/bus-img2.webp",alt:"Bus img 2",className:"w-full lg:w-80 h-[500px] object-cover mt-2 lg:mt-0 rounded-lg"})})]})]}),(0,a.jsxs)("div",{className:"mt-8 px-5 lg:px-20",children:[a.jsx("h2",{className:"text-3xl font-bold ",children:"Book Your Bus Ticket with Us"}),(0,a.jsxs)("div",{className:"mt-4",children:[a.jsx("p",{className:"text-lg text-justify",children:"Who doesn’t love exploring places by road? The captivating landscapes that are seen on both sides of the bus are the sites to behold. Travelers who love to explore places by road can choose online bus booking at Apka Trip and also save huge money. Why would you go out and look for a travel agency to book a tour bus when you can do it by yourself? It takes less than a minute to book a bus ticket at Apka Trip. The simple interface, easy navigation, and fast speed of the portal allow you to book a bus to your favorite destination within a few seconds."}),a.jsx("br",{}),a.jsx("p",{className:"text-lg text-justify",children:"Whether you want to travel via AC/Non-AC bus, semi-sleeper bus, smart bus, deluxe bus, luxury bus, budgeted bus, or Volvo bus booking Apka Trip has got everything covered for you. Enjoy a hassle-free booking experience at Apka Trip and discover your favorite place. There are around 3999+ bus operators for online bus ticket booking at this portal, choose the best one that suits your bus ticket booking demand and enjoy your bus journey like never before!"})]}),(0,a.jsxs)("div",{className:"my-12",children:[a.jsx("h2",{className:"text-3xl font-bold mb-5",children:"Why book with us?"}),a.jsx("div",{className:"flex flex-wrap lg:flex-nowrap justify-center gap-10 mt-6",children:[{imageSrc:"/Images/ticket-charges.svg",title:"Lowest Ticket Charges",description:"Grab huge discounts and cashbacks on your bus booking with Apka Trip."},{imageSrc:"/Images/operators.svg",title:"3999+ Bus Operators",description:"Leverage our partnerships with over 3999 bus operators for a hassle-free journey."},{imageSrc:"/Images/Seamless.svg",title:"Seamless Booking",description:"Our user-friendly platform makes it easy for customers to book their bus tickets."},{imageSrc:"/Images/Users.svg",title:"Trusted by 20K+ Users",description:"20K+ users have trusted and enjoyed our seamless bus booking service."}].map((e,s)=>(0,a.jsxs)("div",{className:"",children:[a.jsx("img",{src:e.imageSrc,alt:e.title,className:"mx-auto "}),(0,a.jsxs)("div",{className:"text-center mt-5",children:[a.jsx("h3",{className:"text-xl font-semibold",children:e.title}),a.jsx("p",{className:"text-lg",children:e.description})]})]},s))})]})]})]}),a.jsx("div",{className:"pb-3",children:a.jsx(i.Z,{})})]})},98928:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});let a=(0,t(68570).createProxy)(String.raw`D:\Apkatrip\Apkatripmain\apkatrip\app\buses\page.js#default`)}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[8948,8136,8007,9992,5393,6255,9041,7094,3723,6420,8854,602],()=>t(61035));module.exports=a})();