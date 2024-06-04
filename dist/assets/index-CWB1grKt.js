(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const x=()=>{const s=document.querySelector("footer"),o=document.createElement("div");s.append(o);const n=document.createElement("p");n.innerText="©️ Created by Ariadna Lopez",o.append(n),n.className="pFooter"},P=async()=>{const s=document.querySelector("main");s.innerHTML=" ",document.createElement("h2");const o=document.createElement("section");o.className="sectionAnterioresViajes",s.append(o);const t=await(await fetch("https://project10back.vercel.app/api/v1/eventosPasados")).json();S(t,o)},S=(s,o)=>{for(const n of s){const t=document.createElement("article");t.className="articleEventoPasado",o.append(t);const e=document.createElement("img");e.className="imgEventoPasado",e.src=n.imagen,t.append(e);const a=document.createElement("h3");a.className="tituloEventoPasado",a.innerText=n.titulo,t.append(a)}},A=["https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716892443/Proyecto%2010/paris.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893665/Proyecto%2010/tokio.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893966/Proyecto%2010/newyork.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894061/Proyecto%2010/sidney.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894092/Proyecto%2010/elcairo.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894159/Proyecto%2010/roma.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894193/Proyecto%2010/londres.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894234/Proyecto%2010/barcelona.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894266/Proyecto%2010/bali.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894308/Proyecto%2010/cancun.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894356/Proyecto%2010/ciudaddelcabo.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894389/Proyecto%2010/honolulu.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894468/Proyecto%2010/estambul.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894494/Proyecto%2010/atenas.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894557/Proyecto%2010/venecia.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893116/Proyecto%2010/berlin.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893163/Proyecto%2010/riodejaneiro.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893287/Proyecto%2010/bangkok.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893371/Proyecto%2010/moscu.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893467/Proyecto%2010/sanfrancisco.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893503/Proyecto%2010/toronto.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893541/Proyecto%2010/dubai.jpg","https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893595/Proyecto%2010/buenosaires.jpg"],b=()=>{const s=document.querySelector("main");s.innerHTML="";const o=document.createElement("section");o.className="sectionImages",s.append(o);for(const n of A){const t=document.createElement("article");t.className="articleImage",o.append(t);const e=document.createElement("img");e.className="imgHome",e.src=n,t.append(e)}};let j;const h=()=>{const s=document.querySelector("main");if(s.innerHTML=" ",localStorage.getItem("token")){s.innerHTML="";let n=localStorage.getItem("userName").replace('"'," ");n=n.replace('"'," ");const t=document.createElement("div");s.append(t),t.className="divLogeado";const e=document.createElement("p");e.innerText=`Hola ${n}!!
        Estás logead@ correctamente`,t.append(e);const a=document.createElement("button");a.innerText="Logout",a.className="buttonLogout",t.append(a),a.addEventListener("click",()=>{localStorage.clear(),h()})}else{const o=document.createElement("section");o.className="sectionButtonsLogin",s.append(o);const n=document.createElement("button");n.className="buttonLogin",n.innerText="Login",o.append(n),n.addEventListener("click",()=>{s.innerHTML="",L(s)});const t=document.createElement("button");t.innerText="Registro",t.className="buttonLogin",o.append(t),t.addEventListener("click",()=>{s.innerHTML="",H(s)})}},L=s=>{const o=document.querySelector("main");o.innerHTML="";const n=document.createElement("form");n.className="formLogin";const t=document.createElement("input");t.placeholder="Usuario";const e=document.createElement("input");e.placeholder="Contraseña";const a=document.createElement("button");if(a.className="buttonLogin",a.textContent="Login",e.type="password",s.append(n),n.append(t),n.append(e),n.append(a),n.addEventListener("submit",()=>{j=t.value,k(t.value,e.value,n)}),localStorage.getItem("token")){o.innerHTML="";const c=document.createElement("div");o.append(c),c.className="divLogeado";const i=document.createElement("p");i.innerText="Estás logeado correctamente",c.append(i);const r=document.createElement("button");r.innerText="Logout",r.className="buttonLogout",c.append(r),r.addEventListener("click",()=>{localStorage.clear(),h()})}},k=async(s,o,n)=>{const t=document.querySelector("main"),e=JSON.stringify({userName:s,password:o});console.log(s,o);const a=await fetch("https://project10back.vercel.app/api/v1/users/login",{method:"POST",body:e,headers:{"Content-Type":"application/json"}});if(a.status===400){const r=document.createElement("p");r.innerText="Usuario o contraseña incorrectos",r.className="pError",n.append(r);return}const c=document.querySelector(".error");c&&c.remove();const i=await a.json();if(console.log(i),localStorage.setItem("token",i.token),localStorage.setItem("user",JSON.stringify(i.user)),localStorage.setItem("email",JSON.stringify(i.user.email)),localStorage.setItem("userName",JSON.stringify(i.user.userName)),localStorage.getItem("token")){t.innerHTML="";let d=localStorage.getItem("userName").replace('"'," ");d=d.replace('"'," ");const u=document.createElement("div");t.append(u),u.className="divLogeado";const g=document.createElement("p");g.innerText=`Hola ${d}!!
        Estás logead@ correctamente`,u.append(g);const E=document.createElement("button");E.className="buttonLogout",E.innerText="Logout",u.append(E),E.addEventListener("click",()=>{localStorage.clear(),h()})}},H=async s=>{const o=document.createElement("form");o.className="formLogin";const n=document.createElement("input");n.placeholder="Nombre completo";const t=document.createElement("input");t.placeholder="Usuario";const e=document.createElement("input");e.placeholder="Contraseña";const a=document.createElement("input");a.placeholder="Email",a.type="email";const c=document.createElement("input");c.placeholder="Teléfono";const i=document.createElement("button");i.className="buttonLogin",i.textContent="Registrarse",e.type="password",s.append(o),o.append(n),o.append(t),o.append(e),o.append(a),o.append(c),o.append(i),o.addEventListener("submit",async()=>{j=t.value;const r=a.value;n.value,c.value;const u=await(await fetch("https://project10back.vercel.app/api/v1/users")).json(),g=[],E=[];for(const l of u)g.push(l.userName),E.push(l.email);if(g.includes(j)){const l=document.createElement("p");l.className="pError",l.innerText="Este usuario ya existe",o.append(l)}else if(E.includes(r)){const l=document.createElement("p");l.className="pError",l.innerText="Este email ya existe",o.append(l)}else{w(t.value,e.value,a.value,n.value,c.value);const l=document.querySelector("main");l.innerHTML=" ";const v=document.createElement("div");v.className="divRegistro",l.append(v);const p=document.createElement("h2");p.innerText="Te has registrado correctamente",v.append(p);const m=document.createElement("button");m.innerText="Login",m.className="buttonLogin",v.append(m),m.addEventListener("click",()=>{L(l)})}})},w=async(s,o,n,t,e,a)=>{const c=JSON.stringify({userName:s,password:o,email:n}),i=await fetch("https://project10back.vercel.app/api/v1/users/register",{method:"POST",body:c,headers:{"Content-Type":"application/json"}}),r=JSON.stringify({nombre:t,email:n,telefono:e}),d=await fetch("https://project10back.vercel.app/api/v1/asistentes/",{method:"POST",body:r,headers:{"Content-Type":"application/json"}}),u=await i.json(),g=await d.json();console.log(g,u)},I=async(s,o,n)=>{const t=document.querySelector("main");t.innerHTML="";const e=document.createElement("section");e.className="sectionNuevoAsistente",t.append(e);const a=document.createElement("h2");a.innerText=o,a.className="tituloNuevoAsistente",e.append(a);const c=document.createElement("article");if(e.append(c),c.className="articleAsistentes",n.length===0){const r=document.createElement("p");r.innerText=`Todavía no hay asistentes
  Apúntate el primero!`,c.append(r),r.className="pNombre"}else for(const r of n){const d=document.createElement("p");d.innerText=`🛩️ Nombre: ${r.nombre} 
     Email: ${r.email} `,c.append(d),d.className="pNombre"}const i=document.createElement("button");i.className="buttonAsistente",i.innerText="Volver",e.append(i),i.addEventListener("click",f)},M=async(s,o,n)=>{const t=document.querySelector("main");t.innerHTML="";const e=document.createElement("section");e.className="sectionNuevoAsistente",t.append(e);const a=document.createElement("h2");a.innerText=o,a.className="tituloNuevoAsistente",e.append(a);const c=document.createElement("article");e.append(c);let i=localStorage.getItem("email"),r;const u=await(await fetch("https://project10back.vercel.app/api/v1/asistentes")).json();for(const p of u)`"${p.email}"`==i&&(r=p._id);const l=(await(await fetch(`https://project10back.vercel.app/api/v1/eventos/${s}/`)).json()).asistentes;let v=[];for(const p of l)v.push(p._id);if(console.log(r,v),v.includes(r)){const p=document.createElement("p");p.innerText="Ya estás inscrito en este evento",p.className="pError",e.append(p);const m=document.createElement("button");m.className="buttonAsistente",m.innerText="Volver",e.append(m),m.addEventListener("click",f)}else{const p={method:"PUT",headers:{"Content-Type":"aplication/json",Authorization:`Bearer ${localStorage.getItem("token")}`}};await fetch(`https://project10back.vercel.app/api/v1/eventos/${s}/${r}`,p);const m=document.createElement("p");m.className="pAceptado",m.innerText="Te has registrado correctamente",e.append(m);const y=document.createElement("button");y.className="buttonAsistente",y.innerText="Volver",e.append(y),y.addEventListener("click",f)}},f=async()=>{const s=document.querySelector("main");s.innerHTML=" ";const n=await(await fetch("https://project10back.vercel.app/api/v1/eventos")).json(),t=document.createElement("section");t.className="sectionProximosViajes",s.append(t),O(n,t)},O=(s,o)=>{for(const n of s){const t=document.createElement("article");t.className="articleEvento",o.append(t);const e=document.createElement("img");e.className="imgEventoProximo",e.src=n.imagen,t.append(e);const a=document.createElement("div");a.className="divTitulo",t.append(a);const c=document.createElement("h3");c.className="tituloEvento",c.innerText=n.titulo,a.append(c);const i=document.createElement("p");i.className="precio",i.innerText=`Precio: ${n.precio}€`,t.append(i);const r=document.createElement("div");r.className="divDescripcion",t.append(r);const d=document.createElement("p");if(d.className="descripcion",d.innerText=n.descripcion,r.append(d),localStorage.getItem("token")){const u=document.createElement("div");u.className="divButtonAsistente",t.append(u);const g=document.createElement("button");g.className="buttonAsistente",g.innerText="Apúntate!",u.append(g),g.addEventListener("click",()=>{const v=n._id,p=n.titulo;n.asistentes,M(v,p)});const E=document.createElement("div");t.append(E);const l=document.createElement("p");l.className="pAsistentes",l.innerText="Ver asistentes",E.append(l),l.addEventListener("click",()=>{const v=n._id,p=n.titulo,m=n.asistentes;I(v,p,m)})}}},q=[{texto:"Home",funcion:b},{texto:"Login/Registro",funcion:h},{texto:"Próximos Viajes",funcion:f},{texto:"Anteriores Viajes",funcion:P}],T=()=>{const s=document.querySelector("header");s.innerHTML="";const o=document.createElement("h1");o.textContent="Viajando por el mundo 🌍✈️";const n=document.createElement("div");n.className="divHeader";const t=document.createElement("nav");for(const e of q){const a=document.createElement("a");a.href="#",e.texto==="Login"&&localStorage.getItem("token")?(a.textContent="Logout",a.addEventListener("click",()=>{localStorage.removeItem("token"),T()})):(a.textContent=e.texto,a.addEventListener("click",e.funcion)),t.append(a)}s.append(o),s.append(n),n.append(t),b()},N=document.querySelector("#app"),R=document.createElement("header"),F=document.createElement("main"),C=document.createElement("footer");N.append(R);N.append(F);N.append(C);T();x();
