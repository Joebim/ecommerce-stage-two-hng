import{u as d,r as x,j as e,L as f}from"./index-DRJTOXUk.js";import{S as u}from"./mastercard-LRHUdKMf.js";import{a as m,S as h}from"./tick-BGIt7OTp.js";import{p as j}from"./price-BV3AvBE9.js";function w(){const r=d(),[a,p]=x.useState(),n=5e4;x.useEffect(()=>{p(r==null?void 0:r.state)},[]);function o(s){return s==null?void 0:s.reduce((t,c)=>t+c,0)}function i(s){return s==null?void 0:s.reduce((t,c)=>t.concat(c),[])}const l=i(a==null?void 0:a.map(s=>s.current_price.map(t=>t.NGN[0])*(s==null?void 0:s.quantity)));return e.jsx("div",{className:"pt-[80px] px-[30px] mb-[70px] sm:px-[90px]",children:e.jsxs("div",{className:"flex flex-col gap-[20px] pt-[50px] text-[12px]",children:[e.jsxs("div",{className:"flex flex-row gap-[10px] items-center",children:[e.jsx("div",{className:"h-[40px] w-[40px] bg-[#007200] rounded-full flex justify-center items-center",children:e.jsx(m,{})}),e.jsx("p",{className:"font-bold",children:"Thank you for placing an order on FurniFlex! Order N 13133872"})]}),e.jsxs("div",{className:"flex flex-row gap-[10px] p-[5px] py-[20px] bg-white",children:[e.jsx(u,{}),e.jsxs("p",{className:"",children:["Mastercard Payment: Amount of ",j(o(l)+n)," was made to our account and it has been confirmed by us "]})]}),e.jsxs("div",{className:"flex flex-row gap-[10px] p-[5px] py-[20px] bg-white",children:[e.jsx(h,{}),e.jsx("p",{className:"",children:"Door Delivery"})]}),e.jsx(f,{to:"/",children:e.jsx("div",{className:"py-[12px] w-[250px] self-start rounded-[6px] bg-primary text-white flex justify-center items-center text-[11px] cursor-pointer hover:bg-black duration-150",children:"Return to Home"})})]})})}export{w as default};