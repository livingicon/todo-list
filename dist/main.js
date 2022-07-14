(()=>{"use strict";const t=function(){let t=[];t=JSON.parse(localStorage.getItem("myProjects"));const e=function(e,o){const d=document.getElementById(o),a=document.createElement("div"),l=document.createElement("h6"),c=document.createElement("div"),s=document.createElement("img"),u=document.createElement("img"),p=document.createElement("img");a.setAttribute("id","cardToDoList"),l.setAttribute("id","toDoItem"),l.innerHTML=`${e.title}: ${e.description}<br />\n    Goal Completion: ${e.date}`,s.setAttribute("id","completedToDo"),s.setAttribute("src","./images/check-bold.png"),s.setAttribute("alt","mark as completed icon"),s.setAttribute("title","mark completed");let m=`${t[o].toDoArray.indexOf(e)}`;s.setAttribute("data-position",`${o}`),s.setAttribute("data-todo",`${m}`),u.setAttribute("id","editToDo"),u.setAttribute("src","./images/pencil.png"),u.setAttribute("alt","edit project icon"),u.setAttribute("title","edit todo item"),u.setAttribute("data-position",`${o}`),u.setAttribute("data-todo",`${m}`),p.setAttribute("id","deleteToDo"),p.setAttribute("src","./images/delete-alert.png"),p.setAttribute("alt","delete project icon"),p.setAttribute("title","delete todo item"),p.setAttribute("data-position",`${o}`),p.setAttribute("data-todo",`${m}`),d.appendChild(a),a.append(l),l.append(c),c.append(s),c.append(u),c.append(p),"urgent"===e.priority?l.style.backgroundColor="var(--urgent)":"soon"===e.priority?l.style.backgroundColor="var(--soon)":"later"===e.priority?l.style.backgroundColor="var(--later)":(l.style.backgroundColor="var(--project-light)",l.style.setProperty("text-decoration","line-through"),l.style.border="2px solid var(--todo-light)",s.remove()),s.addEventListener("dblclick",i.toDoCompleted),u.addEventListener("dblclick",n.addToDoForm),p.addEventListener("dblclick",r.deleteToDo)};return{addAllProjects:function(){const o=document.getElementById("projects"),i=document.getElementById("projectList");o.innerHTML="",i.innerHTML="",t.forEach((o=>function(o){const i=document.getElementById("projectList"),d=document.getElementById("projects"),a=document.createElement("div"),l=document.createElement("div"),c=document.createElement("h2"),s=document.createElement("img"),u=document.createElement("h6"),p=document.createElement("h4"),m=document.createElement("button");a.setAttribute("class","card"),a.setAttribute("id",`${t.indexOf(o)}`),l.setAttribute("id","titleDiv"),c.setAttribute("id","projectTitle"),c.textContent=`Project: ${o.project}`,s.setAttribute("id","deletePrj"),s.setAttribute("src","./images/delete-alert.png"),s.setAttribute("alt","delete project icon"),s.setAttribute("title","delete project"),s.setAttribute("data-position",`${t.indexOf(o)}`),p.setAttribute("id","toDoListHeader"),p.textContent=`${o.project} To Do List:`,m.setAttribute("id","addToDoBtn"),m.setAttribute("type","submit"),m.setAttribute("data-position",`${t.indexOf(o)}`),m.textContent="+add todo item",u.textContent=`${o.project}`,u.setAttribute("id","projectTitleSidebar"),d.append(a),a.append(l),l.append(c),l.append(s),a.append(p);let b=`${t.indexOf(o)}`;t[`${t.indexOf(o)}`].toDoArray.forEach((t=>e(t,b))),a.append(m),s.addEventListener("dblclick",r.deleteProject),m.addEventListener("click",n.addToDoForm),i.append(u)}(o)))}}}(),e=t,o=function(){function t(t){this.project=t,this.toDoArray=[]}class e{constructor(t="unknown",e="unknown",o=0,r=0){this.title=t,this.description=e,this.date=o,this.priority=r}}return{addProject:function(e){let o=[];o=JSON.parse(localStorage.getItem("myProjects")),e.preventDefault();const r=document.getElementById("project").value;if(!r)return alert("Please enter a project name in the input."),!1;{let e=new t(r);o.push(e),localStorage.setItem("myProjects",JSON.stringify(o)),location.reload()}},addToDo:function(t){let o=[];o=JSON.parse(localStorage.getItem("myProjects")),t.preventDefault();const r=document.getElementById("title").value,i=document.getElementById("description").value,d=document.getElementById("due-date").value,n=document.getElementById("priority").value;if(!(r&&i&&d))return alert("All fields are required to add todo item."),!1;{let a=new e(r,i,d,n);console.log(t.target.getAttribute("data-todo")),null===t.target.getAttribute("data-todo")?o[`${t.target.getAttribute("data-position")}`].toDoArray.push(a):o[t.target.getAttribute("data-position")].toDoArray.splice(t.target.getAttribute("data-todo"),1,a),localStorage.setItem("myProjects",JSON.stringify(o)),location.reload()}}}}(),r={deleteProject:function(t){let e=[];e=JSON.parse(localStorage.getItem("myProjects")),e.splice(t.target.getAttribute("data-position"),1),localStorage.setItem("myProjects",JSON.stringify(e)),location.reload()},deleteToDo:function(t){let e=[];e=JSON.parse(localStorage.getItem("myProjects")),e[t.target.getAttribute("data-position")].toDoArray.splice(t.target.getAttribute("data-todo"),1),localStorage.setItem("myProjects",JSON.stringify(e)),location.reload()}},i={toDoCompleted:function(t){let e=[];e=JSON.parse(localStorage.getItem("myProjects")),e[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].priority="completed",localStorage.setItem("myProjects",JSON.stringify(e)),location.reload()}},d={addProjectForm:function(t){const r=document.getElementById("projects"),i=document.createElement("form"),d=document.createElement("div"),n=document.createElement("label"),a=document.createElement("input"),l=document.createElement("button"),c=document.createElement("button");i.setAttribute("id","projectForm"),d.setAttribute("id","projectFormDiv"),n.setAttribute("for","project"),n.textContent="Project Name",a.setAttribute("type","text"),a.setAttribute("id","project"),a.setAttribute("placeholder","project name"),l.setAttribute("id","projectFormSaveBtn"),l.setAttribute("type","submit"),l.textContent="save",l.style.backgroundColor="var(--later)",c.setAttribute("id","projectCancelBtn"),c.setAttribute("type","button"),c.textContent="cancel",c.style.backgroundColor="var(--urgent)",r.innerHTML="",r.appendChild(i),i.appendChild(d),d.appendChild(n),d.appendChild(a),i.appendChild(l),i.appendChild(c),l.addEventListener("click",o.addProject),c.addEventListener("click",e.addAllProjects)},addToDoForm:function(t){let r=[];r=JSON.parse(localStorage.getItem("myProjects"));const i=document.getElementById("projects"),d=document.createElement("form"),n=document.createElement("div");d.setAttribute("id","toDoForm");const a=document.createElement("div"),l=document.createElement("label"),c=document.createElement("input");l.setAttribute("for","title"),l.textContent="To Do Item Title",c.setAttribute("type","text"),c.setAttribute("id","title"),"editToDo"===t.target.id?c.setAttribute("value",`${r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].title}`):c.setAttribute("placeholder","title");const s=document.createElement("div"),u=document.createElement("label"),p=document.createElement("input");u.setAttribute("for","descripton"),u.textContent="To Do Item Description",p.setAttribute("type","text"),p.setAttribute("id","description"),"editToDo"===t.target.id?p.setAttribute("value",`${r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].description}`):p.setAttribute("placeholder","description");const m=document.createElement("div"),b=document.createElement("label"),g=document.createElement("input");b.setAttribute("for","due-date"),b.textContent="To Do Item Due Date",g.setAttribute("type","date"),g.setAttribute("id","due-date"),"editToDo"===t.target.id&&g.setAttribute("value",`${r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].date}`);const A=document.createElement("div"),y=document.createElement("label"),E=document.createElement("select"),C=document.createElement("option"),j=document.createElement("option"),v=document.createElement("option"),D=document.createElement("option");y.setAttribute("for","priority"),y.textContent="To Do Item Priority",E.setAttribute("id","priority"),C.setAttribute("value","urgent"),C.setAttribute("id","priorityNow"),C.textContent="Urgent",C.style.backgroundColor="var(--urgent)",j.setAttribute("value","soon"),j.setAttribute("id","prioritySoon"),j.textContent="Soon",j.style.backgroundColor="var(--soon)",v.setAttribute("value","later"),v.setAttribute("id","priorityLater"),v.textContent="Later",v.style.backgroundColor="var(--later)",D.setAttribute("value","completed"),D.setAttribute("id","priorityCompleted"),D.textContent="Completed",D.style.backgroundColor="var(--project-light)","editToDo"===t.target.id&&"urgent"===r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].priority?C.setAttribute("selected","selected"):"editToDo"===t.target.id&&"soon"===r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].priority?j.setAttribute("selected","selected"):"editToDo"===t.target.id&&"later"===r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].priority?v.setAttribute("selected","selected"):"editToDo"===t.target.id&&"completed"===r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].priority?D.setAttribute("selected","selected"):C.setAttribute("selected","selected");const h=document.createElement("button");h.setAttribute("id","toDoFormSaveBtn"),h.setAttribute("type","submit"),h.textContent="save",h.style.backgroundColor="var(--later)";let f=t.target.getAttribute("data-position");h.setAttribute("data-position",`${f}`),"editToDo"===t.target.id&&h.setAttribute("data-todo",`${t.target.getAttribute("data-todo")}`);const T=document.createElement("button");T.setAttribute("id","toDoCancelBtn"),T.setAttribute("type","button"),T.textContent="cancel",T.style.backgroundColor="var(--urgent)",i.innerHTML="",i.appendChild(d),d.appendChild(n),n.appendChild(a),a.appendChild(l),a.appendChild(c),n.appendChild(s),s.appendChild(u),s.appendChild(p),n.appendChild(m),m.appendChild(b),m.appendChild(g),n.appendChild(A),A.appendChild(y),A.appendChild(E),E.appendChild(C),E.appendChild(j),E.appendChild(v),E.appendChild(D),n.appendChild(h),n.appendChild(T),T.addEventListener("click",e.addAllProjects),h.addEventListener("click",o.addToDo)}},n=d;let a=[];window.onload=function(){a=JSON.parse(localStorage.getItem("myProjects")),null===a&&(a=[],console.log("reloaded")),e.addAllProjects()},document.getElementById("addProjectBtn").addEventListener("click",n.addProjectForm)})();