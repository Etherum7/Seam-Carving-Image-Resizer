(this["webpackJsonpseam-carving-dp"]=this["webpackJsonpseam-carving-dp"]||[]).push([[0],{26:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var n,a,c=r(1),i=r.n(c),s=r(8),l=r.n(s),o=(r(26),r(3)),u=r.n(o),d=r(5),h=r(2),f=r(13),x=r(12),j=function(e,t){var r=t.x,n=t.y*e.width+r;return e.data.subarray(4*n,4*n+4)},b=function(e,t,r){var n=t.x,a=t.y*e.width+n;e.data.set(r,4*a)},v=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e,t,r){return new Array(t).fill(null).map((function(){return new Array(e).fill(r)}))},O=function(e,t,r){var n=Object(h.a)(t,4),a=n[0],c=n[1],i=n[2],s=n[3],l=0;if(e){var o=Object(h.a)(e,3),u=o[0],d=o[1],f=o[2];l=Math.pow(u-a,2)+Math.pow(d-c,2)+Math.pow(f-i,2)}var x=0;if(r){var j=Object(h.a)(r,3),b=j[0],v=j[1],m=j[2];x=Math.pow(b-a,2)+Math.pow(v-c,2)+Math.pow(m-i,2)}return s>244?l+x:-4*Math.max(1500,1500)*3*Math.pow(255,2)},g=function(e,t,r){var n=t.w,a=r.x,c=r.y,i=a-1>=0?j(e,{x:a-1,y:c}):null,s=j(e,{x:a,y:c}),l=a+1<n?j(e,{x:a+1,y:c}):null;return O(i,s,l)},p=function(e,t,r){var n=t.h,a=r.x,c=r.y,i=c-1>=0?j(e,{x:a,y:c-1}):null,s=j(e,{x:a,y:c}),l=c+1<n?j(e,{x:a,y:c+1}):null;return O(i,s,l)},w=function(e,t){for(var r=t.w,n=t.h,a=m(r,n,1/0),c=0;c<n;c+=1)for(var i=0;i<r;i+=1)a[c][i]=g(e,{w:r,h:n},{x:i,y:c});return a},y=function(e,t){for(var r=t.w,n=t.h,a=m(r,n,1/0),c=0;c<n;c+=1)for(var i=0;i<r;i+=1)a[c][i]=p(e,{w:r,h:n},{x:i,y:c});return a},N=function(e,t,r,n){var a=t.w,c=t.h;return n.forEach((function(t){for(var n=t.x,i=t.y,s=n;s<a-1;s+=1)r[i][s]=r[i][s+1];r[i][n]=g(e,{w:a,h:c},{x:n,y:i})})),r},k=function(e,t,r,n){var a=t.w,c=t.h;return n.forEach((function(t){for(var n=t.x,i=t.y,s=i;s<c-1;s+=1)r[s][n]=r[s+1][n];r[i][n]=p(e,{w:a,h:c},{x:n,y:i})})),r},E=function(e,t){for(var r=t.w,n=t.h,a=m(r,n,null),c=0;c<r;c+=1){a[0][c]={energy:e[0][c],coordinate:{x:c,y:0},previous:null}}for(var i=1;i<n;i+=1)for(var s=0;s<r;s+=1){for(var l=1/0,o=s,u=s-1;u<=s+1;u+=1)u>=0&&u<r&&a[i-1][u].energy<l&&(l=a[i-1][u].energy,o=u);a[i][s]={energy:l+e[i][s],coordinate:{x:s,y:i},previous:{x:o,y:i-1}}}for(var d=null,h=1/0,f=0;f<r;f+=1){var x=n-1;a[x][f].energy<h&&(h=a[x][f].energy,d={x:f,y:x})}var j=[];if(!d)return j;for(var b=d,v=b.x,O=a[b.y][v];O;){j.push(O.coordinate);var g=O.previous;if(g){var p=g.x;O=a[g.y][p]}else O=null}return j},C=function(e,t){for(var r=t.w,n=t.h,a=m(r,n,null),c=0;c<n;c+=1){a[c][0]={energy:e[c][0],coordinate:{x:0,y:c},previous:null}}for(var i=1;i<r;i+=1)for(var s=0;s<n;s+=1){for(var l=1/0,o=s,u=s-1;u<=s+1;u+=1)u>=0&&u<n&&a[u][i-1].energy<l&&(l=a[u][i-1].energy,o=u);a[s][i]={energy:l+e[s][i],coordinate:{x:i,y:s},previous:{x:i-1,y:o}}}for(var d=null,h=1/0,f=0;f<n;f+=1){var x=r-1;a[f][x].energy<h&&(h=a[f][x].energy,d={x:x,y:f})}var j=[];if(!d)return j;for(var b=d,v=b.x,O=a[b.y][v];O;){j.push(O.coordinate);var g=O.previous;if(g){var p=g.x;O=a[g.y][p]}else O=null}return j},S=function(e,t,r){var n=r.w;t.forEach((function(t){for(var r=t.x,a=t.y,c=r;c<n-1;c+=1){var i=j(e,{x:c+1,y:a});b(e,{x:c,y:a},i)}}))},M=function(e,t,r){var n=r.h;t.forEach((function(t){for(var r=t.x,a=t.y;a<n-1;a+=1){var c=j(e,{x:r,y:a+1});b(e,{x:r,y:a},c)}}))},z=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,n,a,c,i,s,l,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.img,n=t.toSize,a=t.onIteration,c=t.size,!((i=r.width-n)<0)){e.next=4;break}throw new Error("Upsizing is not supported");case 4:s=null,l=null,o=0;case 7:if(!(o<i)){e.next=20;break}if(s=s&&l?N(r,c,s,l):w(r,c),l=E(s,c),S(r,l,c),!a){e.next=14;break}return e.next=14,a({energyMap:s,seam:l,img:r,size:c,step:o,steps:i});case 14:return c.w-=1,e.next=17,v(1);case 17:o+=1,e.next=7;break;case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,n,a,c,i,s,l,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.img,n=t.toSize,a=t.onIteration,c=t.size,!((i=r.height-n)<0)){e.next=4;break}throw new Error("Upsizing is not supported");case 4:s=null,l=null,o=0;case 7:if(!(o<i)){e.next=20;break}if(s=s&&l?k(r,c,s,l):y(r,c),l=C(s,c),M(r,l,c),!a){e.next=14;break}return e.next=14,a({energyMap:s,seam:l,img:r,size:c,step:o,steps:i});case 14:return c.h-=1,e.next=17,v(1);case 17:o+=1,e.next=7;break;case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,n,a,c,i,s,l,o,h,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.img,n=t.toWidth,a=t.toHeight,c=t.onIteration,i=r.width-n,s=r.height-a,l={w:r.width,h:r.height},o=i+s,h=0,f=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,n,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.seam,n=t.img,a=t.size,i=t.energyMap,h+=1,c){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,c({seam:r,img:n,size:a,energyMap:i,step:h,steps:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.next=9,z({img:r,toSize:n,onIteration:f,size:l});case 9:return e.next=11,L({img:r,toSize:a,onIteration:f,size:l});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=r(0),W=function(e,t,r){return Math.floor(e/t*r)},D=function(e,t,r){for(var n=0,a=0;a<r;a+=1)for(var c=0;c<t;c+=1)n=Math.max(n,e[a][c]);return n},F=function(e){var t=e.energyMap,r=e.className,n=e.width,a=e.height,i=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(t&&t.length&&t[0].length){var e=i.current;if(e){var r=e.getContext("2d");if(r){e.width=n,e.height=a;for(var c=r.getImageData(0,0,n,a),s=function(e,t,r){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:255,a=D(e,t,r),c=new Array(r).fill(null).map((function(){return new Array(t).fill(1/0)})),i=0;i<r;i+=1)for(var s=0;s<t;s+=1)c[i][s]=W(e[i][s],a,n);return c}(t,n,a),l=0;l<a;l+=1)for(var o=0;o<n;o+=1){var u=s[l][o];b(c,{x:o,y:l},[u,u,u,255])}r.putImageData(c,0,0)}}}}),[t,n,a]),Object(I.jsx)("canvas",{ref:i,className:r})},H=function(e){var t=e.seams,r=e.width,n=e.height,a=e.className,i=void 0===a?"":a,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(t&&t.length&&t[0]){var e=s.current;if(e){var a=e.getContext("2d");a&&(e.width=r,e.height=n,a.fillStyle="rgba(255, 255, 255, 1)",t[0].forEach((function(e){var t=e.x,r=e.y;a.fillRect(t,r,1,1)})))}}}),[t,r,n]),Object(I.jsx)("canvas",{ref:s,className:i})},T=r.p+"static/media/seam_carving_example.df1ec6d0.jpg",U=r(4),A="primary",P="secondary",B=function(e){var t,r,n=e.children,a=e.className,c=void 0===a?"":a,i=e.onClick,s=void 0===i?function(){}:i,l=e.disabled,o=void 0!==l&&l,u=e.title,d=void 0===u?void 0:u,h=e.startEnhancer,f=void 0===h?null:h,x=e.style,j=void 0===x?{}:x,b=e.kind,v=void 0===b?A:b,m=(t={},Object(U.a)(t,A,"cursor-not-allowed bg-white text-gray-500 hover:bg-white hover:text-gray-500 border-gray-300"),Object(U.a)(t,P,"cursor-not-allowed bg-white text-gray-500 hover:bg-white hover:text-gray-500 border-gray-300"),t),O=(r={},Object(U.a)(r,A,"hover:bg-white hover:text-black py-2 px-3 rounded shadow-sm border border-solid border-white hover:border-gray-400 bg-black text-white"),Object(U.a)(r,P,"bg-white text-black py-2 px-3 rounded shadow-sm border border-solid hover:border-white border-gray-400 hover:bg-black hover:text-white"),r),g="".concat(" transition duration-200 ease-in-out flex flex-row items-center uppercase font-medium text-xs tracking-wider"," ").concat(O[v]," ").concat(o?m[v]:""," ").concat(c),p=f?Object(I.jsx)("span",{className:"w-2"}):null;return Object(I.jsxs)("button",{className:g,onClick:s,type:"button",disabled:o,title:d,style:j,children:[f,p,n]})},J=r(9),_=function(e){var t=e.onSelect,r=e.accept,n=e.capture,a=e.multiple,c=void 0!==a&&a,i=e.disabled,s=void 0!==i&&i,l=e.children,o=Object(I.jsx)("div",{className:"mr-2",children:Object(I.jsx)(J.FaFileImage,{size:14})}),u=s?"cursor-not-allowed":"";return Object(I.jsx)(B,{style:{padding:0},disabled:s,children:Object(I.jsxs)("label",{className:"cursor-pointer py-2 px-3 flex uppercase font-medium text-xs tracking-wider ".concat(u),children:[Object(I.jsx)("input",{type:"file",accept:r,capture:n,onChange:function(e){var r=e.target.files;t(r)},multiple:c,className:"hidden",disabled:s}),o,l]})})},q=function(e){var t=e.children,r=e.className,n=void 0===r?"":r,a=e.onChange,i=void 0===a?function(){}:a,s=e.disabled,l=void 0!==s&&s,o=Object(c.useRef)(null),u=l?"cursor-not-allowed text-gray-500":"",d="".concat("flex items-center cursor-pointer"," ").concat(u," ").concat(n);return Object(I.jsxs)("label",{className:d,children:[Object(I.jsx)("input",{type:"checkbox",disabled:l,onChange:function(){o.current&&i(o.current.checked)},ref:o}),Object(I.jsx)("div",{className:"ml-2",children:t})]})},X=function(e){var t=e.progress,r=Math.min(Math.ceil(100*t),100),n={width:"".concat(r,"%"),transition:"width 0.5s"};return Object(I.jsx)("div",{className:"bg-gray-100 h-0.5 overflow-hidden flex flex-row justify-start items-center rounded",children:Object(I.jsx)("div",{className:"bg-black w-36 h-full transition duration-500 ease-in-out rounded transition",style:n})})},Y=r(10),G=r(20),K=function(e){var t=e.disabled,r=void 0!==t&&t,n=e.className,a=void 0===n?"":n,c=e.onChange,i=void 0===c?function(){}:c,s=e.value,l=Object(G.a)(e,["disabled","className","onChange","value"]),o=r?"border-gray-300 text-gray-500 cursor-not-allowed":"",u="".concat("border border-solid border-black rounded px-2 py-1 text-sm"," ").concat(o," ").concat(a);return Object(I.jsx)("div",{className:"flex flex-row justify-center items-center",children:Object(I.jsx)("input",Object(Y.a)({disabled:r,onChange:function(e){i(e.target.value)},className:u,value:s},l))})},Q=(r(29),function(e){var t=e.children,r=e.className,n=void 0===r?"":r;return Object(I.jsx)("div",{className:"custom-fade-in-opacity ".concat(n),children:t})}),V=function(e){var t=e.disabled,r=void 0!==t&&t,n=e.width,a=void 0===n?200:n,i=e.height,s=void 0===i?200:i,l=e.lineColor,o=void 0===l?"rgba(255, 0, 0, 1)":l,u=e.lineWidth,d=void 0===u?16:u,f=e.lineJoin,x=void 0===f?"round":f,j=e.backgroundColor,b=void 0===j?"rgba(0, 0, 0, 0)":j,v=e.revision,m=void 0===v?0:v,O=e.onDrawEnd,g=Object(c.useRef)(null),p=Object(c.useState)(!1),w=Object(h.a)(p,2),y=w[0],N=w[1],k=Object(c.useState)(null),E=Object(h.a)(k,2),C=E[0],S=E[1],M=function(e){if(!g.current)return null;var t=g.current;return{x:e.pageX-t.offsetLeft,y:e.pageY-t.offsetTop}},z=Object(c.useCallback)((function(e){if(!r){var t=M(e);t&&(S(t),N(!0))}}),[r]),L=Object(c.useCallback)((function(e){if(y){var t=M(e);C&&t&&(!function(e,t){if(g.current&&!r){var n=g.current.getContext("2d");n&&(n.strokeStyle=o,n.lineJoin=x,n.lineWidth=d,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.closePath(),n.stroke())}}(C,t),S(t))}}),[y,C,o,x,d,r]),R=Object(c.useCallback)((function(){!function(){if(g.current&&!r){var e=g.current,t=e.getContext("2d");O&&t&&O(t.getImageData(0,0,e.width,e.height))}}(),N(!1),S(null)}),[O,r]);return Object(c.useEffect)((function(){if(!g.current)return function(){};var e=g.current;return e.addEventListener("mousedown",z),e.addEventListener("touchstart",z),function(){e.removeEventListener("mousedown",z),e.removeEventListener("touchstart",z)}}),[z]),Object(c.useEffect)((function(){if(!g.current)return function(){};var e=g.current;return e.addEventListener("mousemove",L),e.addEventListener("touchmove",L),function(){e.removeEventListener("mousemove",L),e.removeEventListener("touchmove",L)}}),[L]),Object(c.useEffect)((function(){if(!g.current)return function(){};var e=g.current;return e.addEventListener("mouseup",R),e.addEventListener("mouseleave",R),e.addEventListener("touchend",R),e.addEventListener("touchcancel",R),function(){e.removeEventListener("mouseup",R),e.removeEventListener("mouseleave",R),e.removeEventListener("touchend",R),e.removeEventListener("touchcancel",R)}}),[R]),Object(c.useEffect)((function(){if(g.current){var e=g.current,t=e.getContext("2d");t&&(t.fillStyle=b,t.fillRect(0,0,e.width,e.height))}}),[b]),Object(c.useEffect)((function(){if(g.current){var e=g.current,t=e.getContext("2d");t&&(t.fillStyle=b,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height))}}),[m,b]),Object(I.jsx)("canvas",{ref:g,width:a,height:s,style:{touchAction:"none"}})},Z=r(11),$=100,ee=function(e){var t=e.withSeam,r=void 0!==t&&t,n=e.withEnergyMap,a=void 0!==n&&n,i=Object(c.useState)("Mr. Reid"),s=Object(h.a)(i,2),l=s[0],o=s[1],v=Object(c.useState)("http://wordpress.mrreid.org/2010/10/18/seam-carving-for-content-aware-image-resizing/"),m=Object(h.a)(v,2),O=m[0],g=m[1],p=Object(c.useState)(!1),w=Object(h.a)(p,2),y=w[0],N=w[1],k=Object(c.useState)(T),E=Object(h.a)(k,2),C=E[0],S=E[1],M=Object(c.useState)(null),z=Object(h.a)(M,2),L=z[0],W=z[1],D=Object(c.useState)(null),U=Object(h.a)(D,2),A=U[0],J=U[1],Y=Object(c.useState)(null),G=Object(h.a)(Y,2),ee=G[0],te=G[1],re=Object(c.useState)(null),ne=Object(h.a)(re,2),ae=ne[0],ce=ne[1],ie=Object(c.useState)(null),se=Object(h.a)(ie,2),le=se[0],oe=se[1],ue=Object(c.useState)(null),de=Object(h.a)(ue,2),he=de[0],fe=de[1],xe=Object(c.useState)(!1),je=Object(h.a)(xe,2),be=je[0],ve=je[1],me=Object(c.useState)(0),Oe=Object(h.a)(me,2),ge=Oe[0],pe=Oe[1],we=Object(c.useState)(null),ye=Object(h.a)(we,2),Ne=ye[0],ke=ye[1],Ee=Object(c.useState)(0),Ce=Object(h.a)(Ee,2),Se=Ce[0],Me=Ce[1],ze=Object(c.useState)(50),Le=Object(h.a)(ze,2),Re=Le[0],Ie=Le[1],We=Object(c.useState)("".concat(50)),De=Object(h.a)(We,2),Fe=De[0],He=De[1],Te=Object(c.useState)(70),Ue=Object(h.a)(Te,2),Ae=Ue[0],Pe=Ue[1],Be=Object(c.useState)("".concat(70)),Je=Object(h.a)(Be,2),_e=Je[0],qe=Je[1],Xe=Object(c.useRef)(null),Ye=Object(c.useRef)(null),Ge=function(){W(null),fe(null),oe(null),J(null),pe(0),ce(null)},Ke=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,n,a,c,i,s,l,o,d,h;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.seam,n=t.img,a=t.energyMap,c=t.size,i=c.w,s=c.h,l=t.step,o=t.steps,d=Ye.current){e.next=4;break}return e.abrupt("return");case 4:if(d.width=i,d.height=s,h=d.getContext("2d")){e.next=9;break}return e.abrupt("return");case 9:h.putImageData(n,0,0,0,0,i,s),J(a),fe([r]),oe({w:i,h:s}),pe(l/o);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){var e=Xe.current;e&&e.addEventListener("load",(function(){Xe.current&&(te({w:Xe.current.naturalWidth,h:Xe.current.naturalHeight}),ce({w:Xe.current.width,h:Xe.current.height}))}))}),[]),Object(c.useEffect)((function(){function e(){Xe.current&&ce({w:Xe.current.width,h:Xe.current.height})}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var Qe=l&&O?Object(I.jsxs)("div",{className:"text-xs text-gray-500 mt-2 flex justify-center items-center font-light",children:[Object(I.jsx)("div",{className:"mr-1",children:"Photo by"}),Object(I.jsx)("a",{href:O,style:{color:"#aaa",fontWeight:400},target:"_blank",rel:"noreferrer",children:l})]}):null,Ve=r&&le&&he?Object(I.jsx)("div",{style:{marginTop:"-".concat(le.h,"px")},children:Object(I.jsx)(H,{seams:he,width:le.w,height:le.h})}):null,Ze=ee?Object(I.jsx)("sup",{className:"text-xs text-gray-500 whitespace-nowrap",children:"".concat(ee.w," x ").concat(ee.h," px")}):null,$e=Object(I.jsx)("div",{children:Object(I.jsx)(B,{onClick:function(){Me(Se+1)},disabled:be||!Ne,kind:P,title:"Clear mask",className:"rounded-full",style:{padding:"8px 8px",border:0,outline:"none"},children:Object(I.jsx)(Z.MdLayersClear,{size:16})})}),et=ae?Object(I.jsxs)("div",{className:"flex flex-col",style:{marginTop:"-".concat(ae.h,"px")},children:[Object(I.jsx)(V,{width:ae.w,height:ae.h,disabled:be,onDrawEnd:function(e){ke(e)},revision:Se}),Object(I.jsx)("div",{className:"flex flex-row justify-end",style:{marginTop:"-36px",zIndex:100},children:Object(I.jsx)("div",{className:"mr-1",children:$e})})]}):null,tt=Object(I.jsxs)(Q,{children:[Object(I.jsx)("div",{className:"flex flex-row justify-center items-center mb-1 sm:mb-0",children:Object(I.jsxs)("div",{className:"flex-1 sm:flex sm:flex-row sm:items-center",children:[Object(I.jsxs)("div",{className:"sm:flex-1",children:[Object(I.jsx)("b",{children:"Original image"})," ",Ze]}),Object(I.jsxs)("div",{className:"text-xs text-gray-500 flex flex-row items-center justify-self-end",children:[Object(I.jsx)("div",{className:"mr-1",children:Object(I.jsx)(x.FaRegHandPointer,{size:12})}),Object(I.jsx)("div",{children:"Mask to remove"})]})]})}),Object(I.jsx)("img",{src:C,alt:"Original",ref:Xe,style:{margin:0,fontWeight:500}}),et,Qe]}),rt=(null===le||void 0===le?void 0:le.w)&&(null===ae||void 0===ae?void 0:ae.w)&&le.w>ae.w?Object(I.jsx)("span",{className:"text-xs text-gray-500 ml-4",children:"\u2194\ufe0e scrollable"}):null,nt=le?Object(I.jsx)("sup",{className:"text-xs text-gray-500 whitespace-nowrap",children:"".concat(le.w," x ").concat(le.h," px")}):null,at=Object(I.jsxs)(Q,{className:"mb-6 ".concat(L||!A?"hidden":""),children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("b",{children:"Resized image"})," ",nt," ",rt]}),Object(I.jsxs)("div",{className:"overflow-scroll",children:[Object(I.jsx)("canvas",{ref:Ye}),Ve]})]}),ct=le?Object(I.jsx)("sup",{className:"text-xs text-gray-500 whitespace-nowrap",children:"".concat(le.w," x ").concat(le.h," px")}):null,it=le&&L?Object(I.jsxs)(Q,{className:"mb-6",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("b",{children:"Resized image"})," ",ct]}),Object(I.jsx)("img",{src:L,width:le.w,height:le.h,alt:"Resized",style:{margin:0}})]}):null,st=a&&le?Object(I.jsxs)(Q,{className:"mb-6",children:[Object(I.jsx)("div",{children:Object(I.jsx)("b",{children:"Energy map"})}),Object(I.jsx)(F,{energyMap:A,width:le.w,height:le.h}),Ve]}):null,lt=Object(I.jsxs)("div",{className:"flex flex-col justify-start items-start mb-1",children:[Object(I.jsxs)("div",{className:"mb-3 flex flex-row",children:[Object(I.jsx)("div",{className:"mr-2",children:Object(I.jsx)(_,{onSelect:function(e){if(e&&e.length){o(null),g(null),Ge();var t=URL.createObjectURL(e[0]);S(t)}},disabled:be,accept:"image/png,image/jpeg",children:"Choose image"})}),Object(I.jsx)("div",{children:Object(I.jsx)(B,{onClick:function(){var e=Xe.current;if(e){var t=Ye.current;if(t){Ge(),ve(!0);var r=y?e.naturalWidth:e.width,n=y?e.naturalHeight:e.height,a=r/n;ce({w:e.width,h:e.height}),r>1500&&(r=1500,n=Math.floor(r/a)),n>1500&&(n=1500,r=Math.floor(n*a)),t.width=r,t.height=n;var c=t.getContext("2d");if(c){c.drawImage(e,0,0,r,n);var i=c.getImageData(0,0,r,n);!function(e){if(Ne)for(var t=Ne.width/e.width,r=Ne.height/e.height,n=function(e){var n=e.x,a=e.y;return{x:Math.floor(n*t),y:Math.floor(a*r)}},a=0;a<e.height;a+=1)for(var c=0;c<e.width;c+=1){var i=j(Ne,n({x:c,y:a})),s=Object(h.a)(i,4),l=(s[0],s[1],s[2],s[3]),o=j(e,{x:c,y:a}),u=Object(h.a)(o,4),d=u[0],f=u[1],x=u[2];u[3],l&&b(e,{x:c,y:a},[d,f,x,244])}}(i);var s=Math.floor(Re*r/100),l=Math.floor(Ae*n/100);R({img:i,toWidth:s,toHeight:l,onIteration:Ke}).then((function(){Ye.current&&Ye.current.toBlob((function(e){if(e){var t=URL.createObjectURL(e);W(t),ve(!1)}}),"image/png")}))}}}},disabled:be||!Fe,startEnhancer:Object(I.jsx)(f.ImShrink2,{size:14}),children:"Resize"})})]}),Object(I.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[Object(I.jsxs)("div",{className:"mb-2 mr-6 flex flex-row items-center",children:[Object(I.jsx)("div",{className:"text-xs mr-1",children:"Width"}),Object(I.jsx)(K,{onChange:function(e){var t=Math.max(Math.min(parseInt(e||"0",10),$),1);He(e?"".concat(t):e),Ie(t)},disabled:be,type:"number",min:1,max:$,className:"w-14 text-center",value:Fe}),Object(I.jsx)("div",{className:"text-xs ml-1 mr-4",children:"%"}),Object(I.jsx)("div",{className:"text-xs mr-1",children:"Height"}),Object(I.jsx)(K,{onChange:function(e){var t=Math.max(Math.min(parseInt(e||"0",10),$),1);qe(e?"".concat(t):e),Pe(t)},disabled:be,type:"number",min:1,max:$,className:"w-14 text-center",value:_e}),Object(I.jsx)("div",{className:"text-xs ml-1",children:"%"})]}),Object(I.jsx)("div",{className:"mb-2",children:Object(I.jsx)(q,{disabled:be,onChange:function(e){N(e)},children:Object(I.jsxs)("span",{className:"text-xs",children:["Higher quality"," ",Object(I.jsx)("span",{className:"text-gray-500",children:"(takes longer)"})]})})})]})]}),ot=Object(I.jsx)("div",{className:"mb-6",children:Object(I.jsx)(X,{progress:ge})});return Object(I.jsxs)(I.Fragment,{children:[lt,ot,at,it,st,tt]})},te=function(e){var t=e.children;return Object(I.jsx)(I.Fragment,{children:t})},re=function(e){var t=e.children;return t?Object(I.jsx)("main",{className:"flex flex-col items-center",children:Object(I.jsx)("div",{className:"max-w-screen-xl self-stretch m-auto w-full",children:Object(I.jsx)("article",{className:"px-6 sm:px-12 pt-6 pb-12",children:t})})}):null},ne=r(14),ae=r(15),ce=r(21),ie=r(19),se=r(16),le=r(17),oe=function(e){var t=e.children,r=e.className,n=void 0===r?"":r,a=e.responsive,c=void 0!==a&&a,i=e.style,s=void 0===i?{}:i;if(!t)return null;var l=c?"flex flex-col sm:flex-row items-center":"flex flex-row items-center";return Object(I.jsx)("div",{style:s,className:"".concat(l," ").concat(n),children:t})},ue="info",de="error",he=(n={},Object(U.a)(n,ue,Object(I.jsx)(se.BsFillInfoCircleFill,{size:18})),Object(U.a)(n,de,Object(I.jsx)(le.BiErrorCircle,{size:18})),n),fe=(a={},Object(U.a)(a,ue,"text-blue-600 bg-blue-100"),Object(U.a)(a,de,"text-red-600 bg-red-100"),a),xe=function(e){var t=e.children,r=e.type;return t?Object(I.jsx)("div",{className:"py-3 px-4 rounded-md ".concat(fe[r]),children:Object(I.jsxs)(oe,{children:[Object(I.jsx)("div",{className:"mr-3",children:he[r]}),Object(I.jsx)("div",{className:"text-sm",children:t})]})}):null},je=function(e){Object(ce.a)(r,e);var t=Object(ie.a)(r);function r(e){var n;return Object(ne.a)(this,r),(n=t.call(this,e)).state={hasError:!1},n}return Object(ae.a)(r,[{key:"componentDidCatch",value:function(e,t){console.error(e,t),this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.props.children;return this.state.hasError?Object(I.jsx)(xe,{type:de,children:"Component has crashed"}):e}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),r}(i.a.Component),be=function(e){var t=e.children,r=e.title,n=e.className,a=void 0===n?"":n;if(!t)return null;var c=r?Object(I.jsx)("div",{className:"text-xs font-light",children:r}):null;return Object(I.jsxs)(je,{children:[c,Object(I.jsx)("div",{className:"p-6 border border-dashed border-gray-300 rounded-md overflow-hidden ".concat(a),children:t})]})},ve=function(e){var t=e.link,r=e.children,n=e.className,a=void 0===n?"":n,c=e.hoverClassName,i=void 0===c?null:c,s=e.startEnhancer,l=void 0===s?null:s,o=e.formatted,u=void 0===o||o,d=e.onClick,h=void 0===d?function(){}:d;if(!(null===t||void 0===t?void 0:t.url))return null;var f=u?"transition duration-200 ease-in-out whitespace-nowrap flex flex-row items-center ".concat(i||"hover:text-red-600"):"",x=(null===t||void 0===t?void 0:t.caption)||void 0,j=l?Object(I.jsx)("span",{className:"w-1"}):null;return Object(I.jsxs)("a",{href:t.url,className:"".concat(f," ").concat(a),onClick:h,title:x,style:{fontWeight:400},children:[u&&l,u&&j,r]})},me=r(18);var Oe=function(){var e=Object(I.jsx)(ve,{className:"inline-flex ml-1",link:{url:"https://perso.crans.org/frenoy/matlab2012/seamcarving.pdf"},startEnhancer:Object(I.jsx)(me.RiFileList2Line,{size:14}),children:"Seam carving paper"});return Object(I.jsx)(te,{children:Object(I.jsx)(re,{children:Object(I.jsx)("div",{className:"flex flex-col items-center",children:Object(I.jsxs)("article",{className:"w-full prose prose-sm sm:prose overflow-hidden",style:{maxWidth:"860px"},children:[Object(I.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center mb-6",children:[Object(I.jsx)("h1",{className:"uppercase",style:{margin:"0 20px 0 0"},children:"Seam Carving Demo"}),Object(I.jsx)("h4",{className:"uppercase",style:{margin:0},children:"Content-aware image resizer"})]}),Object(I.jsx)("div",{className:"text-xs text-gray-500 mb-4 font-light flex items-center flex-row flex-wrap",children:Object(I.jsx)("div",{className:"flex flex-row justify-center mb-3",children:e})}),Object(I.jsx)(be,{children:Object(I.jsx)(ee,{withSeam:!0})})]})})})})};l.a.render(Object(I.jsx)(i.a.StrictMode,{children:Object(I.jsx)(Oe,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.2117fd40.chunk.js.map