(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{HF:()=>l,B:()=>d,bb:()=>a});const e=function(t){const e=document.getElementById("projects"),n=document.createElement("form"),o=document.createElement("div"),r=document.createElement("label"),i=document.createElement("input"),c=document.createElement("button"),a=document.createElement("button");n.setAttribute("id","projectForm"),o.setAttribute("id","projectFormDiv"),r.setAttribute("for","project"),r.textContent="Project Name",i.setAttribute("type","text"),i.setAttribute("id","project"),i.setAttribute("placeholder","project name"),c.setAttribute("id","projectFormSaveBtn"),c.setAttribute("type","submit"),c.textContent="save",c.style.backgroundColor="var(--later)",a.setAttribute("id","projectCancelBtn"),a.setAttribute("type","button"),a.textContent="cancel",a.style.backgroundColor="var(--urgent)",e.innerHTML="",e.appendChild(n),n.appendChild(o),o.appendChild(r),o.appendChild(i),n.appendChild(c),n.appendChild(a),c.addEventListener("click",d),a.addEventListener("click",l)},n=function(t){const e=document.getElementById("projects"),n=document.createElement("form"),o=document.createElement("div");n.setAttribute("id","toDoForm");const r=document.createElement("div"),i=document.createElement("label"),d=document.createElement("input");i.setAttribute("for","title"),i.textContent="To Do Item Title",d.setAttribute("type","text"),d.setAttribute("id","title"),d.setAttribute("placeholder","title");const c=document.createElement("div"),u=document.createElement("label"),p=document.createElement("input");u.setAttribute("for","descripton"),u.textContent="To Do Item Description",p.setAttribute("type","text"),p.setAttribute("id","description"),p.setAttribute("placeholder","description");const s=document.createElement("div"),m=document.createElement("label"),b=document.createElement("input");m.setAttribute("for","due-date"),m.textContent="To Do Item Due Date",b.setAttribute("type","date"),b.setAttribute("id","due-date");const y=document.createElement("div"),E=document.createElement("label"),C=document.createElement("select"),A=document.createElement("option"),h=document.createElement("option"),v=document.createElement("option");E.setAttribute("for","priority"),E.textContent="To Do Item Priority",C.setAttribute("id","priority"),A.setAttribute("value","urgent"),A.setAttribute("id","priorityNow"),A.textContent="Urgent",A.style.backgroundColor="var(--urgent)",h.setAttribute("value","soon"),h.setAttribute("id","prioritySoon"),h.textContent="Soon",h.style.backgroundColor="var(--soon)",v.setAttribute("value","later"),v.setAttribute("id","priorityLater"),v.textContent="Later",v.style.backgroundColor="var(--later)";const g=document.createElement("button");g.setAttribute("id","toDoFormSaveBtn"),g.setAttribute("type","submit"),g.textContent="save",g.style.backgroundColor="var(--later)";let f=t.target.getAttribute("data-position");g.setAttribute("data-position",`${f}`);const j=document.createElement("button");j.setAttribute("id","toDoCancelBtn"),j.setAttribute("type","button"),j.textContent="cancel",j.style.backgroundColor="var(--urgent)",e.innerHTML="",e.appendChild(n),n.appendChild(o),o.appendChild(r),r.appendChild(i),r.appendChild(d),o.appendChild(c),c.appendChild(u),c.appendChild(p),o.appendChild(s),s.appendChild(m),s.appendChild(b),o.appendChild(y),y.appendChild(E),y.appendChild(C),C.appendChild(A),C.appendChild(h),C.appendChild(v),o.appendChild(g),o.appendChild(j),g.addEventListener("click",a),j.addEventListener("click",l)},o=document.getElementById("addProjectBtn");window.onload=function(){r=JSON.parse(localStorage.getItem("myProjects")),null===r&&(r=[]),l()};let r=[];function i(t){this.project=t,this.toDoArray=[]}const d=function(t){t.preventDefault();const e=document.getElementById("project").value;if(!e)return alert("Please enter a project name in the input."),!1;{let t=new i(e);r.push(t),localStorage.setItem("myProjects",JSON.stringify(r)),l(t)}};class c{constructor(t="unknown",e="unknown",n=0,o=0){this.title=t,this.description=e,this.date=n,this.priority=o}}const a=function(t){t.preventDefault();const e=document.getElementById("title").value,n=document.getElementById("description").value,o=document.getElementById("due-date").value,i=document.getElementById("priority").value;if(!(e&&n&&o))return alert("All fields are required to add todo item."),!1;{let d=new c(e,n,o,i);r[`${t.target.getAttribute("data-position")}`].toDoArray.push(d),localStorage.setItem("myProjects",JSON.stringify(r)),l()}},l=function(t,e){const n=document.getElementById("projects"),o=document.getElementById("projectList");n.innerHTML="",o.innerHTML="",r.forEach((t=>u(t)))},u=function(t){const e=document.getElementById("projectList"),o=document.getElementById("projects"),i=document.createElement("div"),d=document.createElement("div"),c=document.createElement("h2"),a=document.createElement("h6"),l=document.createElement("button");i.setAttribute("class","card"),i.setAttribute("id",`${r.indexOf(t)}`),c.setAttribute("id","projectTitle"),c.textContent=`Project: ${t.project}`,l.setAttribute("id","addToDoBtn"),l.setAttribute("type","submit"),l.setAttribute("data-position",`${r.indexOf(t)}`),l.textContent="+add todo item",a.textContent=`${t.project}`,a.setAttribute("id","projectTitleSidebar"),o.append(i),i.append(d),d.append(c),i.append(l),e.append(a),l.addEventListener("click",n),r[`${r.indexOf(t)}`].toDoArray.forEach((t=>p(t)))},p=function(t){const e=document.getElementById(`${r.indexOf(element)}`),n=document.createElement("div"),o=document.createElement("h4"),i=document.createElement("h6");n.setAttribute("id","cardToDoList"),o.setAttribute("id","toDoListHeader"),o.textContent="Poopy",i.setAttribute("id","toDoItem"),i.innerHTML="poop",e.append(n),n.append(o),n.append(i),"urgent"===stuff.priority?i.style.backgroundColor="var(--urgent)":"soon"===stuff.priority?i.style.backgroundColor="var(--soon)":i.style.backgroundColor="var(--later)"};o.addEventListener("click",e)})();