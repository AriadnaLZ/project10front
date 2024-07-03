(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const L=()=>{const c=document.querySelector("footer"),t=document.createElement("div");c.append(t),t.className="divFooter";const o=document.createElement("p");o.innerText="©️ Created by Ariadna Lopez",t.append(o),o.className="pFooter"},P=async()=>{const c=document.querySelector("main");c.innerHTML=" ",document.createElement("h2");const t=document.createElement("section");t.className="sectionAnterioresViajes",c.append(t);const a=await(await fetch("https://project10back.vercel.app/api/v1/eventosPasados")).json();A(a,t)},A=(c,t)=>{for(const o of c){const a=document.createElement("article");a.className="articleEventoPasado",t.append(a);const e=document.createElement("img");e.className="imgEventoPasado",e.src=o.imagen,a.append(e);const n=document.createElement("h3");n.className="tituloEventoPasado",n.innerText=o.titulo,a.append(n)}},S=["https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716892443/Proyecto%2010/paris.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893665/Proyecto%2010/tokio.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893966/Proyecto%2010/newyork.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894061/Proyecto%2010/sidney.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894092/Proyecto%2010/elcairo.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894159/Proyecto%2010/roma.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894193/Proyecto%2010/londres.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894234/Proyecto%2010/barcelona.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894266/Proyecto%2010/bali.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894308/Proyecto%2010/cancun.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894356/Proyecto%2010/ciudaddelcabo.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894389/Proyecto%2010/honolulu.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894468/Proyecto%2010/estambul.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894494/Proyecto%2010/atenas.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894557/Proyecto%2010/venecia.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893116/Proyecto%2010/berlin.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893163/Proyecto%2010/riodejaneiro.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893287/Proyecto%2010/bangkok.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893371/Proyecto%2010/moscu.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893467/Proyecto%2010/sanfrancisco.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893503/Proyecto%2010/toronto.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893541/Proyecto%2010/dubai.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893595/Proyecto%2010/buenosaires.jpg"],b=()=>{const c=document.querySelector("main");c.innerHTML="";const t=document.createElement("section");t.className="sectionImages",c.append(t);for(const o of S){const a=document.createElement("article");a.className="articleImage",t.append(a);const e=document.createElement("img");e.className="imgHome",e.src=o,a.append(e)}};let h;const j=()=>{const c=document.querySelector("main");if(c.innerHTML=" ",!localStorage.getItem("token"))k();else{c.innerHTML="";const t=document.createElement("div");t.className="divLogeado",c.append(t);const o=document.createElement("p");let e=localStorage.getItem("userName").replace('"'," ");e=e.replace('"'," "),o.innerText=` Hola ${e}
    Estás logead@ correctamente`,t.append(o);const n=document.createElement("button");n.innerText="Logout",n.className="buttonLogout",t.append(n),n.addEventListener("click",()=>{localStorage.clear(),j()})}},k=()=>{const c=document.querySelector("main");c.innerHTML=" ";const t=document.createElement("section");t.className="sectionLogin",c.append(t);const o=document.createElement("form");o.className="formLogin",t.append(o);const a=document.createElement("input");a.placeholder="Usuario",o.append(a);const e=document.createElement("input");e.type="password",e.placeholder="Contraseña",o.append(e);const n=document.createElement("div");n.className="divError",o.append(n);const r=document.createElement("p");r.className="pError",n.append(r),r.style.display="none";const l=document.createElement("button");l.className="buttonLogin",l.textContent="Login",o.append(l),o.addEventListener("submit",()=>{T(a.value,e.value)});const s=document.createElement("div");s.className="sectionRegisterLogin",t.append(s);const i=document.createElement("p");i.innerText="Todavia no estás registrad@?",s.append(i);const d=document.createElement("p");d.innerText="Regístrate!!!",d.className="pRegistroEnlace",d.addEventListener("click",H),s.append(d)},T=async(c,t)=>{const o=document.querySelector("main"),a=JSON.stringify({userName:c,password:t});console.log(c,t);const e=await fetch("https://project10back2.vercel.app/api/v1/users/login",{method:"POST",body:a,headers:{"Content-Type":"application/json"}}),n=document.querySelector(".pError");if(console.log(n),e.status===400)n.style.display=="none"&&(n.innerText="Usuario o contraseña incorrectos",n.style.display="flex");else{const r=await e.json();if(console.log(r),localStorage.setItem("token",r.token),localStorage.setItem("user",JSON.stringify(r.user)),localStorage.setItem("email",JSON.stringify(r.user.email)),localStorage.setItem("userName",JSON.stringify(r.user.userName)),localStorage.getItem("token")){o.innerHTML="";let s=localStorage.getItem("userName").replace('"'," ");s=s.replace('"'," ");const i=document.createElement("div");o.append(i),i.className="divLogeado";const d=document.createElement("p");d.innerText=`Hola ${s}!!
      Estás logead@ correctamente`,i.append(d);const m=document.createElement("button");m.className="buttonLogout",m.innerText="Logout",i.append(m),m.addEventListener("click",()=>{localStorage.clear(),j()})}}},H=async()=>{const c=document.querySelector("main");c.innerHTML=" ";const t=document.createElement("form");t.className="formLogin",c.append(t);const o=document.createElement("input");o.placeholder="Nombre completo";const a=document.createElement("input");a.placeholder="Usuario";const e=document.createElement("input");e.placeholder="Contraseña";const n=document.createElement("input");n.placeholder="Email",n.type="email";const r=document.createElement("input");r.placeholder="Teléfono";const l=document.createElement("div");l.className="divError";const s=document.createElement("p");s.className="pError",s.style.display="none",l.append(s);const i=document.createElement("button");i.className="buttonLogin",i.textContent="Registrarse",e.type="password",t.append(o),t.append(a),t.append(e),t.append(n),t.append(r),t.append(l),t.append(i),t.addEventListener("submit",async()=>{console.log("submit"),h=a.value;const d=n.value;o.value,r.value;const y=await(await fetch("https://project10back2.vercel.app/api/v1/users")).json(),v=[],u=[];for(const p of y)v.push(p.userName),u.push(p.email);if(console.log(v),console.log(u),console.log(h),o.value.length===0||a.value.length===0||e.value.length===0||n.value.length===0||r.value.length===0)s.style.display=="none"?(s.innerText="Rellena todos los datos",s.style.display="flex"):s.innerText="Rellena todos los datos";else if(e.value.length<6||e.value.length>10)s.style.display=="none"?(s.innerText="La contraseña debe tener entre 6 y 10 caracteres",s.style.display="flex"):s.innerText="La contraseña debe tener entre 6 y 10 caracteres";else if(v.includes(h))console.log("el usuario ya existe"),s.style.display=="none"?(s.innerText="Este usuario ya existe",s.style.display="flex"):s.innerText="Este usuario ya existe";else if(u.includes(d))s.style.display=="none"?(s.innerText="Este email ya existe",s.style.display="flex"):s.innerText="Este email ya existe ";else{c.innerHTML=" ";const p=document.createElement("h2");p.innerText=" Cargando...",c.append(p),w(a.value,e.value,n.value,o.value,r.value)}})},w=async(c,t,o,a,e)=>{const n=JSON.stringify({userName:c,password:t,email:o}),r=await fetch("https://project10back2.vercel.app/api/v1/users/register",{method:"POST",body:n,headers:{"Content-Type":"application/json"}}),l=JSON.stringify({nombre:a,email:o,telefono:e}),s=await fetch("https://project10back2.vercel.app/api/v1/asistentes/",{method:"POST",body:l,headers:{"Content-Type":"application/json"}}),i=await r.json(),d=await s.json();console.log(d,i),T(c,t)},I=async(c,t,o)=>{const a=document.querySelector("main");a.innerHTML="";const e=document.createElement("section");e.className="sectionNuevoAsistente",a.append(e);const n=document.createElement("h2");n.innerText=t,n.className="tituloNuevoAsistente",e.append(n);const r=document.createElement("article");if(e.append(r),r.className="articleAsistentes",o.length===0){const s=document.createElement("p");s.innerText=`Todavía no hay asistentes
  Apúntate el primero!`,r.append(s),s.className="pNombre"}else for(const s of o){const i=document.createElement("p");i.innerText=`🛩️ Nombre: ${s.nombre} 
     Email: ${s.email} `,r.append(i),i.className="pNombre"}const l=document.createElement("button");l.className="buttonAsistente",l.innerText="Volver",e.append(l),l.addEventListener("click",f)},R=async(c,t,o)=>{const a=document.querySelector("main");a.innerHTML="";const e=document.createElement("section");e.className="sectionNuevoAsistente",a.append(e);const n=document.createElement("h2");n.innerText=t,n.className="tituloNuevoAsistente",e.append(n);const r=document.createElement("article");e.append(r);let l=localStorage.getItem("email"),s;const d=await(await fetch("https://project10back.vercel.app/api/v1/asistentes")).json();for(const p of d)`"${p.email}"`==l&&(s=p._id);const v=(await(await fetch(`https://project10back.vercel.app/api/v1/eventos/${c}/`)).json()).asistentes;let u=[];for(const p of v)u.push(p._id);if(console.log(s,u),u.includes(s)){const p=document.createElement("p");p.innerText="Ya estás inscrito en este evento",p.className="pError",e.append(p);const g=document.createElement("button");g.className="buttonAsistente",g.innerText="Volver",e.append(g),g.addEventListener("click",f)}else{const p={method:"PUT",headers:{"Content-Type":"aplication/json",Authorization:`Bearer ${localStorage.getItem("token")}`}};await fetch(`https://project10back.vercel.app/api/v1/eventos/${c}/${s}`,p);const g=document.createElement("p");g.className="pAceptado",g.innerText="Te has registrado correctamente",e.append(g);const E=document.createElement("button");E.className="buttonAsistente",E.innerText="Volver",e.append(E),E.addEventListener("click",f)}},f=async()=>{const c=document.querySelector("main");c.innerHTML=" ";const t=document.createElement("section");t.className="sectionProximosViajes",c.append(t);const o=document.createElement("h2");o.innerText=" Cargando...",t.append(o);const e=await(await fetch("https://project10back.vercel.app/api/v1/eventos")).json();M(e,t)},M=(c,t)=>{t.innerHTML=" ";for(const o of c){const a=document.createElement("article");a.className="articleEvento",t.append(a);const e=document.createElement("img");e.className="imgEventoProximo",e.src=o.imagen,a.append(e);const n=document.createElement("div");n.className="divTitulo",a.append(n);const r=document.createElement("h3");r.className="tituloEvento",r.innerText=o.titulo,n.append(r);const l=document.createElement("p");l.className="precio",l.innerText=`Precio: ${o.precio}€`,a.append(l);const s=document.createElement("div");s.className="divDescripcion",a.append(s);const i=document.createElement("p");if(i.className="descripcion",i.innerText=o.descripcion,s.append(i),localStorage.getItem("token")){const d=document.createElement("div");d.className="divButtonAsistente",a.append(d);const m=document.createElement("button");m.className="buttonAsistente",m.innerText="Apúntate!",d.append(m),m.addEventListener("click",()=>{const u=o._id,p=o.titulo;o.asistentes,R(u,p)});const y=document.createElement("div");a.append(y);const v=document.createElement("p");v.className="pAsistentes",v.innerText="Ver asistentes",y.append(v),v.addEventListener("click",()=>{const u=o._id,p=o.titulo,g=o.asistentes;I(u,p,g)})}}},O=[{texto:"Home",funcion:b},{texto:"Login/Registro",funcion:j},{texto:"Próximos Viajes",funcion:f},{texto:"Anteriores Viajes",funcion:P}],x=()=>{const c=document.querySelector("header");c.innerHTML="";const t=document.createElement("h1");t.textContent="Viajando por el mundo 🌍✈️";const o=document.createElement("div");o.className="divHeader";const a=document.createElement("nav");for(const e of O){const n=document.createElement("a");n.href="#",e.texto==="Login"&&localStorage.getItem("token")?(n.textContent="Logout",n.addEventListener("click",()=>{localStorage.removeItem("token"),x()})):(n.textContent=e.texto,n.addEventListener("click",e.funcion)),a.append(n)}c.append(t),c.append(o),o.append(a),b()},N=document.querySelector("#app"),q=document.createElement("header"),C=document.createElement("main"),F=document.createElement("footer");N.append(q);N.append(C);N.append(F);x();L();
