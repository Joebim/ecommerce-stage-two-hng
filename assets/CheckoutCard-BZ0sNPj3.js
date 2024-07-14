import{r as t,C as v,j as e,L as w}from"./index-CovLq_Sk.js";import{p as o}from"./price-BV3AvBE9.js";import{S as N}from"./mastercard-Vr-h3ybs.js";var u,m;function x(){return x=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var a in n)({}).hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},x.apply(null,arguments)}var b=function(s){return t.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:24,height:20,fill:"none"},s),u||(u=t.createElement("g",{clipPath:"url(#visa_svg__a)"},t.createElement("path",{fill:"url(#visa_svg__b)",d:"M12.412 6.368c-.014 2.775.962 4.323 1.697 5.244.756.945 1.01 1.55 1.006 2.395-.005 1.293-.602 1.864-1.16 1.886-.975.039-1.541-.676-1.992-1.217l-.35 4.222c.451.535 1.288 1.001 2.156 1.022 2.036 0 3.369-2.584 3.376-6.59.008-5.085-2.736-5.367-2.718-7.64.007-.689.263-1.424.823-1.611.278-.095 1.044-.167 1.912.86l.341-4.083C17.036.418 16.436 0 15.688 0c-1.917 0-3.265 2.62-3.276 6.368M20.78.352c-.372 0-.686.557-.826 1.413L17.044 19.62h2.035l.405-2.877h2.487l.235 2.877H24L22.435.352zm.284 5.205.588 7.235h-1.609zM9.945.352 8.34 19.62h1.94L11.883.35zm-2.87 0L5.058 13.466 4.24 2.316C4.145 1.07 3.766.351 3.346.351h-3.3L0 .912c.677.377 1.447.986 1.913 1.639.286.398.367.746.46 1.693L3.922 19.62H5.97L9.112.352z"}))),m||(m=t.createElement("defs",null,t.createElement("linearGradient",{id:"visa_svg__b",x1:1103.38,x2:1250.92,y1:59.879,y2:-1976.87,gradientUnits:"userSpaceOnUse"},t.createElement("stop",{stopColor:"#222357"}),t.createElement("stop",{offset:1,stopColor:"#254AA5"})),t.createElement("clipPath",{id:"visa_svg__a"},t.createElement("path",{fill:"#fff",d:"M0 0h24v20H0z"})))))},f,g;function p(){return p=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var a in n)({}).hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},p.apply(null,arguments)}var y=function(s){return t.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},s),f||(f=t.createElement("path",{stroke:"#913752",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M5 8.333V6.667c0-2.759.833-5 5-5s5 2.241 5 5v1.666M10 15.417a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167"})),g||(g=t.createElement("path",{stroke:"#913752",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M14.167 18.334H5.834c-3.334 0-4.167-.834-4.167-4.167V12.5c0-3.333.833-4.166 4.167-4.166h8.333c3.333 0 4.167.833 4.167 4.166v1.667c0 3.333-.834 4.167-4.167 4.167"})))};function L(){const r=t.useContext(v),[s,n]=t.useState(r.cart),a=5e4;t.useEffect(()=>{n(r.cart)},[r]);function d(l){return l.reduce((c,i)=>c+i,0)}function j(l){return l.reduce((c,i)=>c.concat(i),[])}const h=j(s.map(l=>l.current_price.map(c=>c.NGN[0])*(l==null?void 0:l.quantity)));return e.jsxs("div",{className:"flex-[3] gap-[15px] self-start flex flex-col py-[12px] rounded-[6px] bg-white shadow-md w-[100%] sm:w-[400px] p-[20px]",children:[e.jsxs("div",{className:"flex flex-row justify-between gap-[10px] text-[13px]",children:[e.jsx("p",{className:"",children:"Order Summary"}),e.jsxs("p",{className:"",children:[s.length," items"]})]}),e.jsx("hr",{className:"border-grey"}),e.jsxs("div",{className:"flex flex-row justify-between gap-[10px] text-[13px]",children:[e.jsx("p",{className:"",children:"Delivery Charges"}),e.jsx("p",{className:"",children:o(a)})]}),e.jsx("hr",{className:"border-grey"}),e.jsxs("div",{className:"flex flex-row justify-between gap-[10px] text-[13px]",children:[e.jsx("p",{className:"",children:"Subtotal"}),e.jsx("p",{className:"",children:o(d(h))})]}),e.jsx("hr",{className:"border-grey"}),e.jsxs("div",{className:"flex flex-col justify-between gap-[6px] text-[13px]",children:[e.jsxs("div",{className:"flex flex-row justify-between gap-[10px]",children:[e.jsx("p",{className:"font-bold",children:"Total"}),e.jsx("p",{className:"",children:o(d(h)+a)})]}),e.jsx("p",{className:"self-end text-[11px]",children:"Delivery charges included"})]}),e.jsx(w,{to:"/checkout",state:s,className:"w-full",children:e.jsx("button",{className:"py-[12px] w-full rounded-[6px] bg-primary text-white flex justify-center items-center text-[11px] cursor-pointer hover:bg-black duration-150",children:"Continue to Checkout"})}),e.jsx("hr",{className:"border-grey"}),e.jsxs("div",{className:"flex flex-row gap-[5px]",children:[e.jsx("p",{className:"text-[11px]",children:"We accept"}),e.jsx(N,{}),e.jsx(b,{})]}),e.jsxs("div",{className:"flex flex-row gap-[5px]",children:[e.jsx(y,{}),e.jsx("p",{className:"text-[11px]",children:"Transaction are 100% secure"})]})]})}export{L as C,b as S};
