import{r as l,C as i,j as e,u,L as o}from"./index-DwIJQIG0.js";import"./swiper-react-JLgCCaLl.js";import{p as d}from"./price-BV3AvBE9.js";import{C as g}from"./CheckoutCard-C76pmJmp.js";import"./mastercard-CNpmxg7x.js";var h;function p(){return p=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var x=arguments[a];for(var r in x)({}).hasOwnProperty.call(x,r)&&(t[r]=x[r])}return t},p.apply(null,arguments)}var j=function(a){return l.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:20,height:24,fill:"none"},a),h||(h=l.createElement("path",{stroke:"#913752",strokeLinecap:"round",strokeWidth:1.5,d:"m16.25 5.5-.516 10.025c-.132 2.561-.198 3.842-.733 4.763a3.7 3.7 0 0 1-1 1.128C13.2 22 12.133 22 9.994 22c-2.141 0-3.212 0-4.011-.585a3.7 3.7 0 0 1-1-1.13c-.536-.922-.6-2.205-.73-4.77L3.75 5.5M2.5 5.5h15m-4.12 0-.57-1.408c-.377-.936-.566-1.403-.892-1.695a1.7 1.7 0 0 0-.229-.172C11.33 2 10.895 2 10.03 2c-.888 0-1.332 0-1.7.234a1.7 1.7 0 0 0-.231.18c-.33.303-.514.788-.882 1.757L6.71 5.5M7.917 16.5v-6M12.083 16.5v-6"})))};function v({item:t}){const{increaseQuantity:a,decreaseQuantity:x}=l.useContext(i);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>{x(t.id)},disabled:(t==null?void 0:t.quantity)<=1,className:`flex justify-center ${(t==null?void 0:t.quantity)<=1?"bg-primaryLight text-black":"bg-primary text-white"} items-center h-[20px] w-[20px] text-[15px]`,children:"-"}),e.jsx("div",{className:"flex justify-center items-center text-black text-[12px] h-[20px] w-[20px]",children:t==null?void 0:t.quantity}),e.jsx("button",{onClick:()=>{a(t.id)},className:"flex justify-center bg-primary text-white items-center h-[20px] w-[20px] text-[15px]",children:"+"})]})}function k(t){u(),l.useState();const a=l.useContext(i),{removeFromCart:x}=l.useContext(i),[r,m]=l.useState(a.cart);l.useEffect(()=>{m(a.cart)},[a]);function f(s){return s.reduce((n,c)=>n.concat(c),[])}return f(r.map(s=>s.current_price.map(n=>n.NGN[0])*(s==null?void 0:s.quantity))),e.jsx("div",{className:"pt-[80px] px-[30px] mb-[70px] sm:px-[90px] bg-white",children:e.jsx("div",{className:"py-[50px]",children:r.length===0?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-center items-center w-full h-[40vh] gap-[20px]",children:e.jsxs("div",{className:"flex flex-col gap-[20px] items-center",children:[e.jsx("p",{className:"",children:"Your cart is empty. Start shopping for furniture!"}),e.jsx(o,{to:"/",children:e.jsx("button",{onClick:()=>addToCart(product),className:"py-[12px] px-[40px] rounded-[6px] bg-primary text-white flex justify-center items-center text-[12px] cursor-pointer hover:bg-black duration-150",children:"Start Shopping"})})]})})}):e.jsxs("div",{className:"relative bg-white p-[5px] flex flex-col md:flex-col lg:flex-row gap-[40px]",children:[e.jsxs("div",{className:"flex-[6] flex flex-col gap-[20px]",children:[e.jsxs("p",{className:"",children:["Cart (",r.length,")"]}),e.jsx("hr",{className:"border-grey"}),e.jsx("div",{className:"flex flex-col gap-[40px] sm:gap-[20px]",children:r.map(s=>{var n;return e.jsxs("div",{className:"gap-[30px] sm:gap-[15px] flex flex-row w-full",children:[e.jsxs("div",{className:"flex flex-col gap-[10px]",children:[e.jsx(o,{to:`/product-view/${s.id}`,state:s,children:e.jsx("div",{className:"bg-cover bg-center bg-no-repeat h-[100px] w-[130px] sm:w-[100px]",style:{backgroundImage:`url(https://api.timbu.cloud/images/${s.photos[0].url})`}})}),e.jsxs("div",{className:"flex flex-row items-center gap-[5px] cursor-pointer",onClick:()=>x(s.id),children:[e.jsx(j,{className:" scale-[.90]"}),e.jsx("p",{className:"text-[12px]",children:"Remove"})]})]}),e.jsx("div",{className:"flex justify-end w-full",children:e.jsxs("div",{className:"flex flex-col sm:flex-row sm:justify-between w-full",children:[e.jsx("div",{className:"w-[80%]",children:e.jsx("p",{className:"text-[15px]",children:s.name})}),e.jsxs("div",{className:"flex flex-col gap-[10px]",children:[e.jsx("p",{className:"text-[14px]",children:d((n=s==null?void 0:s.current_price)==null?void 0:n.map(c=>c==null?void 0:c.NGN[0]))}),e.jsxs("div",{className:"flex flex-row gap-[5px]",children:[e.jsx("p",{className:"text-grey line-through text-[14px]",children:d(s.discounted_price)}),e.jsxs("div",{className:"p-[3px] bg-primaryLight text-[11px]",children:["-",s.percentage_off,"%"]})]}),e.jsx("div",{className:"flex flex-row items-center",children:e.jsx(v,{item:s})})]})]})})]},s.id)})})]}),e.jsx(g,{})]})})})}export{k as default};
