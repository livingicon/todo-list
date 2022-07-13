(()=>{"use strict";const t=function(){let t=[];t=JSON.parse(localStorage.getItem("myProjects"));const e=function(e,o){const r=document.getElementById(o),d=document.createElement("div"),i=document.createElement("h6"),a=document.createElement("img");d.setAttribute("id","cardToDoList"),i.setAttribute("id","toDoItem"),i.innerHTML=`${e.title}: ${e.description}<br />\n    Goal Completion: ${e.date}`,a.setAttribute("id","deleteToDo"),a.setAttribute("src","./images/delete-alert.png"),a.setAttribute("alt","delete project icon"),a.setAttribute("title","delete todo item");let l=`${t[o].toDoArray.indexOf(e)}`;a.setAttribute("data-position",`${o}`),a.setAttribute("data-todo",`${l}`),r.appendChild(d),d.append(i),i.append(a),"urgent"===e.priority?i.style.backgroundColor="var(--urgent)":"soon"===e.priority?i.style.backgroundColor="var(--soon)":i.style.backgroundColor="var(--later)",a.addEventListener("dblclick",n.deleteToDo)};return{addAllProjects:function(){const o=document.getElementById("projects"),d=document.getElementById("projectList");o.innerHTML="",d.innerHTML="",t.forEach((o=>function(o){const d=document.getElementById("projectList"),i=document.getElementById("projects"),a=document.createElement("div"),l=document.createElement("div"),c=document.createElement("h2"),s=document.createElement("img"),u=document.createElement("h6"),p=document.createElement("h4"),m=document.createElement("button");a.setAttribute("class","card"),a.setAttribute("id",`${t.indexOf(o)}`),l.setAttribute("id","titleDiv"),c.setAttribute("id","projectTitle"),c.textContent=`Project: ${o.project}`,s.setAttribute("id","deletePrj"),s.setAttribute("src","./images/delete-alert.png"),s.setAttribute("alt","delete project icon"),s.setAttribute("title","delete project"),s.setAttribute("data-position",`${t.indexOf(o)}`),p.setAttribute("id","toDoListHeader"),p.textContent=`${o.project} To Do List:`,m.setAttribute("id","addToDoBtn"),m.setAttribute("type","submit"),m.setAttribute("data-position",`${t.indexOf(o)}`),m.textContent="+add todo item",u.textContent=`${o.project}`,u.setAttribute("id","projectTitleSidebar"),i.append(a),a.append(l),l.append(c),l.append(s),a.append(p);let b=`${t.indexOf(o)}`;t[`${t.indexOf(o)}`].toDoArray.forEach((t=>e(t,b))),a.append(m),s.addEventListener("dblclick",n.deleteProject),m.addEventListener("click",r.addToDoForm),d.append(u)}(o)))}}}(),e=t,o=function(){function t(t){this.project=t,this.toDoArray=[]}class e{constructor(t="unknown",e="unknown",o=0,n=0){this.title=t,this.description=e,this.date=o,this.priority=n}}return{addProject:function(e){let o=[];o=JSON.parse(localStorage.getItem("myProjects")),e.preventDefault();const n=document.getElementById("project").value;if(!n)return alert("Please enter a project name in the input."),!1;{let e=new t(n);o.push(e),localStorage.setItem("myProjects",JSON.stringify(o)),console.log("add project"),location.reload()}},addToDo:function(t){let o=[];o=JSON.parse(localStorage.getItem("myProjects")),t.preventDefault();const n=document.getElementById("title").value,r=document.getElementById("description").value,d=document.getElementById("due-date").value,i=document.getElementById("priority").value;if(!(n&&r&&d))return alert("All fields are required to add todo item."),!1;{let a=new e(n,r,d,i);o[`${t.target.getAttribute("data-position")}`].toDoArray.push(a),localStorage.setItem("myProjects",JSON.stringify(o)),console.log("add todo item"),location.reload()}}}}(),n={deleteProject:function(t){let e=[];e=JSON.parse(localStorage.getItem("myProjects")),e.splice(t.target.getAttribute("data-position"),1),localStorage.setItem("myProjects",JSON.stringify(e)),console.log("delete project"),location.reload()},deleteToDo:function(t){let e=[];e=JSON.parse(localStorage.getItem("myProjects")),e[t.target.getAttribute("data-position")].toDoArray.splice(t.target.getAttribute("data-todo"),1),localStorage.setItem("myProjects",JSON.stringify(e)),console.log("delete todo item"),location.reload()}},r={addProjectForm:function(t){const n=document.getElementById("projects"),r=document.createElement("form"),d=document.createElement("div"),i=document.createElement("label"),a=document.createElement("input"),l=document.createElement("button"),c=document.createElement("button");r.setAttribute("id","projectForm"),d.setAttribute("id","projectFormDiv"),i.setAttribute("for","project"),i.textContent="Project Name",a.setAttribute("type","text"),a.setAttribute("id","project"),a.setAttribute("placeholder","project name"),l.setAttribute("id","projectFormSaveBtn"),l.setAttribute("type","submit"),l.textContent="save",l.style.backgroundColor="var(--later)",c.setAttribute("id","projectCancelBtn"),c.setAttribute("type","button"),c.textContent="cancel",c.style.backgroundColor="var(--urgent)",n.innerHTML="",n.appendChild(r),r.appendChild(d),d.appendChild(i),d.appendChild(a),r.appendChild(l),r.appendChild(c),l.addEventListener("click",o.addProject),c.addEventListener("click",e.addAllProjects)},addToDoForm:function(t){const n=document.getElementById("projects"),r=document.createElement("form"),d=document.createElement("div");r.setAttribute("id","toDoForm");const i=document.createElement("div"),a=document.createElement("label"),l=document.createElement("input");a.setAttribute("for","title"),a.textContent="To Do Item Title",l.setAttribute("type","text"),l.setAttribute("id","title"),l.setAttribute("placeholder","title");const c=document.createElement("div"),s=document.createElement("label"),u=document.createElement("input");s.setAttribute("for","descripton"),s.textContent="To Do Item Description",u.setAttribute("type","text"),u.setAttribute("id","description"),u.setAttribute("placeholder","description");const p=document.createElement("div"),m=document.createElement("label"),b=document.createElement("input");m.setAttribute("for","due-date"),m.textContent="To Do Item Due Date",b.setAttribute("type","date"),b.setAttribute("id","due-date");const A=document.createElement("div"),g=document.createElement("label"),y=document.createElement("select"),E=document.createElement("option"),C=document.createElement("option"),j=document.createElement("option");g.setAttribute("for","priority"),g.textContent="To Do Item Priority",y.setAttribute("id","priority"),E.setAttribute("value","urgent"),E.setAttribute("id","priorityNow"),E.textContent="Urgent",E.style.backgroundColor="var(--urgent)",C.setAttribute("value","soon"),C.setAttribute("id","prioritySoon"),C.textContent="Soon",C.style.backgroundColor="var(--soon)",j.setAttribute("value","later"),j.setAttribute("id","priorityLater"),j.textContent="Later",j.style.backgroundColor="var(--later)";const h=document.createElement("button");h.setAttribute("id","toDoFormSaveBtn"),h.setAttribute("type","submit"),h.textContent="save",h.style.backgroundColor="var(--later)";let v=t.target.getAttribute("data-position");h.setAttribute("data-position",`${v}`);const f=document.createElement("button");f.setAttribute("id","toDoCancelBtn"),f.setAttribute("type","button"),f.textContent="cancel",f.style.backgroundColor="var(--urgent)",n.innerHTML="",n.appendChild(r),r.appendChild(d),d.appendChild(i),i.appendChild(a),i.appendChild(l),d.appendChild(c),c.appendChild(s),c.appendChild(u),d.appendChild(p),p.appendChild(m),p.appendChild(b),d.appendChild(A),A.appendChild(g),A.appendChild(y),y.appendChild(E),y.appendChild(C),y.appendChild(j),d.appendChild(h),d.appendChild(f),h.addEventListener("click",o.addToDo),f.addEventListener("click",e.addAllProjects)}};let d=[];window.onload=function(){d=JSON.parse(localStorage.getItem("myProjects")),null===d&&(d=[],console.log("reloaded")),e.addAllProjects()},document.getElementById("addProjectBtn").addEventListener("click",r.addProjectForm)})();