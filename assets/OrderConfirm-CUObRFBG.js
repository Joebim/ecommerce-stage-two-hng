import{u as c,r as i,j as e}from"./index-BOyKORoN.js";import{S as o}from"./mastercard-BQf73kQB.js";import{a as l,S as n}from"./tick-D_i7K3G4.js";import{p as d}from"./price-BV3AvBE9.js";function g(){const r=c(),[t,m]=i.useState(r.state);function a(s){return s==null?void 0:s.reduce((x,p)=>x+p,0)}return e.jsx("div",{className:"pt-[80px] px-[30px] mb-[70px] sm:px-[90px]",children:e.jsxs("div",{className:"flex flex-col gap-[20px] pt-[50px] text-[12px]",children:[e.jsxs("div",{className:"flex flex-row gap-[10px] items-center",children:[e.jsx("div",{className:"h-[40px] w-[40px] bg-[#007200] rounded-full flex justify-center items-center",children:e.jsx(l,{})}),e.jsx("p",{className:"font-bold",children:"Thank you for placing an order on FurniFlex! Order N 13133872"})]}),e.jsxs("div",{className:"flex flex-row gap-[10px] p-[5px] py-[20px] bg-white",children:[e.jsx(o,{}),e.jsxs("p",{className:"",children:["Mastercard Payment: Amount of ",d(a(t.map(s=>s.price))+5e4)," was made to our account and it has been confirmed by us "]})]}),e.jsxs("div",{className:"flex flex-row gap-[10px] p-[5px] py-[20px] bg-white",children:[e.jsx(n,{}),e.jsx("p",{className:"",children:"Door Delivery"})]}),e.jsx("button",{className:"py-[12px] w-[250px] self-start rounded-[6px] bg-primary text-white flex justify-center items-center text-[11px] cursor-pointer hover:bg-black duration-150",children:"Save Order Details"})]})})}export{g as default};