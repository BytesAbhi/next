(()=>{var e={};e.id=9018,e.ids=[9018],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27790:e=>{"use strict";e.exports=require("assert")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},56931:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c}),s(24781),s(71486),s(41888);var a=s(23191),i=s(88716),r=s(37922),l=s.n(r),o=s(95231),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);s.d(t,n);let c=["",{children:["activities",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,24781)),"D:\\Apkatrip\\Apkatripmain\\apkatrip\\app\\activities\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,64519))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,71486)),"D:\\Apkatrip\\Apkatripmain\\apkatrip\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,41888)),"D:\\Apkatrip\\Apkatripmain\\apkatrip\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,64519))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Apkatrip\\Apkatripmain\\apkatrip\\app\\activities\\page.js"],m="/activities/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/activities/page",pathname:"/activities",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},14382:(e,t,s)=>{Promise.resolve().then(s.bind(s,57031))},27840:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var a=s(10326),i=s(17577);s(90434);var r=s(25842),l=s(84511);s(25860);var o=s(99992),n=s(35047),c=s(23844);let d=()=>{let e=(0,c.useTranslations)("activities"),[t,s]=(0,i.useState)(),[d,m]=(0,i.useState)(),p=(0,i.useRef)(null),u=(0,r.v9)(e=>e.citysearch),[x,g]=(0,i.useState)(),h=(0,r.I0)(),[f,v]=(0,i.useState)(new Date(Date.now())),[w,b]=(0,i.useState)(new Date(Date.now())),[j,y]=(0,i.useState)(""),N=(0,n.useRouter)(),k=e=>{s(e),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{h((0,l.Q)(e))},400)};(0,i.useEffect)(()=>{g(u)},[u]);let S=e=>{s(e.Name),m(e)};return(0,a.jsxs)("div",{className:"relative pt-6 lg:pt-0",children:[(0,a.jsxs)("div",{className:"relative",children:[a.jsx("img",{src:"/Images/australia-banner-home.webp",alt:"Kashmir Tour Packages",layout:"fill",objectFit:"cover",className:"w-full h-[350px]"}),a.jsx("div",{className:"absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 text-white bg-[#a6a4a433] bg-opacity-20"}),a.jsx("h2",{className:"absolute left-0 right-0  flex items-center justify-center mx-auto z-10  text-white text-xl lg:text-2xl top-28 md:top-24 font-bold",children:"Kashmir Tour Packages"})]}),(0,a.jsxs)("div",{className:"absolute bottom-16 left-0 right-0 text-center pb-6",children:[a.jsx("h1",{className:"text-white text-2xl lg:text-4xl font-bold",children:e("experience")}),(0,a.jsxs)("div",{className:"flex justify-between mt-5 items-center border rounded-full  w-full md:w-[600px] bg-white mx-auto ",children:[(0,a.jsxs)("div",{className:"relative flex p-2 px-4 w-full items-center",children:[a.jsx("img",{src:"/Images/search.svg",alt:"Search Icon",width:24,height:24}),a.jsx("input",{type:"text",id:"txtDesCity",className:"ml-2 flex-grow border-none p-2 w-full rounded-lg placeholder-gray-500 focus:outline-none",placeholder:"Enter Your Dream Destination!",value:t,onChange:e=>k(e.target.value)}),t&&!d&&(0,a.jsxs)("div",{className:"bg-white absolute w-full  h-36 overflow-y-auto top-full",children:[x&&x.isLoading&&a.jsx("div",{children:"Loading..."}),x&&!x.isLoading&&x.info.map(e=>a.jsx("div",{className:" text-start m-4 cursor-pointer border-b-2 pb-1",onClick:()=>S(e),children:e.Name}))]})]}),(0,a.jsxs)("div",{className:"relative text-[10px]",children:[(0,a.jsxs)("div",{className:" cursor-pointer px-2 mx-1 h-full",onClick:()=>y("To"),children:[a.jsx("p",{className:"text-nowrap",children:"To Date"}),(0,a.jsxs)("span",{children:[" ",f.toLocaleDateString("en-US",{month:"short"}),"-",f.getDate()]}),a.jsx("p",{children:f.getFullYear()})]}),"To"==j&&a.jsx("div",{className:"absolute top-full bg-white z-20",children:a.jsx(o.t,{"aria-label":"Select a date",value:"",onChange:e=>{v(new Date(e.year,e.month-1,e.day)),y("from")}})})]}),(0,a.jsxs)("div",{className:"relative text-[10px]",children:[(0,a.jsxs)("div",{className:" cursor-pointer px-2 mx-1",onClick:()=>y("from"),children:[a.jsx("p",{className:"text-nowrap",children:"From Date"}),(0,a.jsxs)("span",{children:[" ",w.toLocaleDateString("en-US",{month:"short"}),"-",w.getDate()]}),a.jsx("p",{children:w.getFullYear()})]}),"from"==j&&a.jsx("div",{className:"absolute top-full bg-white z-20",children:a.jsx(o.t,{"aria-label":"Select a date",value:"",onChange:e=>{b(new Date(e.year,e.month-1,e.day)),y("")}})})]}),a.jsx("button",{className:"ml-2 primary-col text-white px-8 py-2 h-14  rounded-full hover:bg-[#ef6414ed]",type:"button",onClick:()=>{let e=new Date(f),t=new Date(w),s=new Date(e.getTime()+6e5),a=new Date(t.getTime()+6e5),i=s.toISOString().slice(0,19),r=a.toISOString().slice(0,19);N.push(`/activities/CityId=${d.Code}&FromDate=${i}&ToDate=${r}`)},children:"Search"})]})]})]})}},57031:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var a=s(10326);s(17577);var i=s(61006),r=s(16255);s(63754),s(23141);var l=s(27840),o=s(44046),n=s(90434),c=s(46226),d=s(23844);let m=()=>{let e=(0,d.useTranslations)("activities"),t=[{id:1,image:"/Images/1bike.webp",location:"Paris, France",title:e("title1"),rating:4.8,reviews:243,duration:"4 days",price:189.25,link:"/tour-single-1/1"},{id:2,image:"/Images/2.webp",location:"New York, USA",title:e("title2"),rating:4.8,reviews:243,duration:"4 days",price:225,link:"/tour-single-1/2"},{id:3,image:"/Images/3.webp",location:"London, UK",title:e("title3"),rating:4.8,reviews:243,duration:"4 days",price:943,link:"/tour-single-1/3"},{id:4,image:"/Images/4.webp",location:"New York, USA",title:e("title4"),rating:4.8,reviews:243,duration:"4 days",price:771,link:"/tour-single-1/4"},{id:5,image:"/Images/5.webp",location:"Paris, France",title:e("title5"),rating:4.8,reviews:243,duration:"4 days",price:189.25,link:"/tour-single-1/5"},{id:6,image:"/Images/6.webp",location:"New York, USA",title:e("title6"),rating:4.8,reviews:243,duration:"4 days",price:225,link:"/tour-single-1/6"},{id:7,image:"/Images/7.webp",location:"London, UK",title:e("title7"),rating:4.8,reviews:243,duration:"4 days",price:943,link:"/tour-single-1/7"},{id:8,image:"/Images/9.webp",location:"London, UK",title:e("title7"),rating:4.8,reviews:243,duration:"4 days",price:943,link:"/tour-single-1/7"}];return(0,a.jsxs)(a.Fragment,{children:[a.jsx(l.Z,{}),(0,a.jsxs)("div",{className:"px-5 md:px-20 py-12",children:[(0,a.jsxs)("div",{className:"flex justify-between mb-8 items-center",children:[a.jsx("div",{className:"col-auto",children:a.jsx("h2",{"data-aos":"fade-up",className:"text-xl md:text-[24px] font-semibold aos-init aos-animate",children:e("trending")})}),a.jsx("div",{"data-aos":"fade-up",className:"col-auto aos-init aos-animate",children:(0,a.jsxs)(n.default,{className:"buttonArrow gap-4 font-semibold flex items-center",href:"",children:[a.jsx("span",{children:"See all"}),a.jsx(o.Z1Y,{})]})})]}),a.jsx(i.tq,{spaceBetween:30,slidesPerView:8,pagination:{clickable:!0,el:".swiper-pagination",type:"bullets"},breakpoints:{0:{slidesPerView:2},640:{slidesPerView:2},768:{slidesPerView:4},1024:{slidesPerView:8}},modules:[r.tl],className:"mySwiper",children:[{src:"/Images/activity9.webp",title:"Paris",tours:"100+ Tours"},{src:"/Images/activity6.webp",title:"Singapore",tours:"300+ Tours"},{src:"/Images/activity7.webp",title:"Roma",tours:"400+ Tours"},{src:"/Images/activity8.webp",title:"Bangkok",tours:"100+ Tours"},{src:"/Images/activity1.webp",title:"Bali",tours:"600+ Tours"},{src:"/Images/activity2.webp",title:"Phuket",tours:"200+ Tours"},{src:"/Images/activity3.webp",title:"Tokyo",tours:"700+ Tours"},{src:"/Images/activity4.webp",title:"Cappadocia",tours:"900+ Tours"},{src:"/Images/activity5.webp",title:"Paris",tours:"100+ Tours"}].map((e,t)=>a.jsx(i.o5,{className:"w-32",children:(0,a.jsxs)(n.default,{href:"#",className:"block text-center",children:[a.jsx("div",{className:"mx-auto rounded-full",children:a.jsx("img",{alt:e.title,loading:"lazy",className:"w-32 h-32 mx-auto object-cover rounded-full",src:e.src})}),a.jsx("h3",{className:"text-lg font-semibold mt-4",children:e.title}),a.jsx("p",{className:"text-sm",children:e.tours})]})},t))}),a.jsx("div",{className:"swiper-pagination custom-pagination"})]}),(0,a.jsxs)("div",{className:"px-5 md:px-20 py-10",children:[(0,a.jsxs)("div",{className:"flex justify-between mb-8 items-center",children:[a.jsx("h2",{"data-aos":"fade-up",className:"text-xl lg:text-3xl md:text-[24px] font-semibold aos-init aos-animate",children:e("trending")}),a.jsx("div",{"data-aos":"fade-up",className:"col-auto aos-init aos-animate",children:(0,a.jsxs)(n.default,{className:"buttonArrow gap-4 font-semibold flex items-center",href:"",children:[a.jsx("span",{children:"See all"}),a.jsx(o.Z1Y,{})]})})]}),a.jsx("div",{className:"flex flex-wrap justify-between gap-6 ",children:t.map(e=>(0,a.jsxs)("div",{className:"max-w-full lg:max-w-80 rounded-lg border border-gray-200 shadow-lg overflow-hidden",children:[a.jsx("img",{src:e.image,alt:e.title,className:"w-full h-60 p-2 rounded-2xl object-cover"}),(0,a.jsxs)("div",{className:"px-4 py-2",children:[(0,a.jsxs)("p",{className:"text-gray-600 mb-2 flex gap-2 items-center",children:[a.jsx(o.ekl,{})," ",e.location]}),a.jsx(n.default,{href:"/ActivitiesComp/holidays",children:a.jsx("h3",{className:"text-lg font-medium mb-2",children:e.title})}),(0,a.jsxs)("div",{className:"flex items-center text-sm mb-2",children:[(0,a.jsxs)("span",{className:"text-yellow-500",children:[" ",e.rating]}),(0,a.jsxs)("span",{className:"ml-2",children:["(",e.reviews," reviews)"]})]})]}),(0,a.jsxs)("div",{className:"flex px-4 py-2  justify-between border-t ",children:[(0,a.jsxs)("p",{className:"text-gray-800 mb-2  pt flex gap-2 items-center",children:[a.jsx(o.qyc,{})," ",e.duration]}),(0,a.jsxs)("p",{className:"text-gray-800 mb-4",children:["From $",e.price]})]})]},e.id))})]}),(0,a.jsxs)("div",{className:" mx-auto px-5 md:px-20 pb-10",children:[(0,a.jsxs)("div",{className:"flex justify-between items-end gap-10",children:[a.jsx("h2",{className:"text-xl lg:text-3xl md:text-2xl font-bold",children:"Popular things to do"}),(0,a.jsxs)(n.default,{className:"buttonArrow gap-4 font-semibold flex items-center",href:"",children:[a.jsx("span",{children:"See all"}),a.jsx(o.Z1Y,{})]})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-10",children:[{title:"Cruises",imgSrc:"/Images/111.webp"},{title:"Beach Tours",imgSrc:"/Images/112.webp"},{title:"City Tours",imgSrc:"/Images/113.webp"},{title:"Museum Tour",imgSrc:"/Images/114.webp"},{title:"Food",imgSrc:"/Images/115.webp"},{title:"Hiking",imgSrc:"/Images/116.webp"}].map((e,t)=>(0,a.jsxs)("div",{className:"relative block overflow-hidden rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300",children:[a.jsx("div",{className:"w-full overflow-hidden featureCard__image h-60 relative",children:a.jsx(c.default,{src:e.imgSrc,alt:e.title,layout:"fill",objectFit:"cover",className:"rounded-t-lg h-60 w-60 "})}),a.jsx("div",{className:"p-4 absolute z-10 bottom-3 text-white text-center",children:a.jsx("h4",{className:"text-lg",children:e.title})})]},t))})]})]})}},46226:(e,t,s)=>{"use strict";s.d(t,{default:()=>i.a});var a=s(69029),i=s.n(a)},69029:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return n},getImageProps:function(){return o}});let a=s(98052),i=s(23078),r=s(92481),l=a._(s(86820));function o(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let n=r.Image},24781:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a=(0,s(68570).createProxy)(String.raw`D:\Apkatrip\Apkatripmain\apkatrip\app\activities\page.js#default`)},23141:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[8948,8136,8007,9992,5393,6255,3723],()=>s(56931));module.exports=a})();