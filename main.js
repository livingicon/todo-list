(()=>{"use strict";const t=function(){let t=[];t=JSON.parse(localStorage.getItem("myProjects"));const e=function(e,o){const n=document.getElementById(o),d=document.createElement("h6"),l=document.createElement("div"),c=document.createElement("img"),s=document.createElement("img"),u=document.createElement("img");d.setAttribute("id","toDoItem"),d.innerHTML=`${e.title}: ${e.description}<br />\n    Goal Completion: ${e.date}`,d.style.border="2px solid var(--todo-light)",l.setAttribute("id","toDoIcons"),c.setAttribute("id","completedToDo"),c.setAttribute("src","./images/check-bold.png"),c.setAttribute("alt","mark as completed icon"),c.setAttribute("title","mark completed");let p=`${t[o].toDoArray.indexOf(e)}`;c.setAttribute("data-position",`${o}`),c.setAttribute("data-todo",`${p}`),s.setAttribute("id","editToDo"),s.setAttribute("src","./images/pencil.png"),s.setAttribute("alt","edit project icon"),s.setAttribute("title","edit todo item"),s.setAttribute("data-position",`${o}`),s.setAttribute("data-todo",`${p}`),u.setAttribute("id","deleteToDo"),u.setAttribute("src","./images/delete-alert.png"),u.setAttribute("alt","delete project icon"),u.setAttribute("title","delete todo item"),u.setAttribute("data-position",`${o}`),u.setAttribute("data-todo",`${p}`),n.appendChild(d),d.append(l),l.append(c),l.append(s),l.append(u),"urgent"===e.priority?d.style.backgroundColor="var(--urgent)":"soon"===e.priority?d.style.backgroundColor="var(--soon)":"later"===e.priority?d.style.backgroundColor="var(--later)":(d.style.backgroundColor="var(--project-light)",d.style.setProperty("text-decoration","line-through"),c.remove()),c.addEventListener("dblclick",i.toDoCompleted),s.addEventListener("dblclick",a.addToDoForm),u.addEventListener("dblclick",r.deleteToDo)},o=function(e){document.getElementById("projects"),projectList.innerHTML="",t.forEach((t=>d(t)))},d=function(t){const e=document.getElementById("projectList"),o=document.createElement("h6");o.textContent=`${t.project}`,o.setAttribute("id","projectTitleSidebar"),e.append(o)};return{addAllProjects:function(){const i=document.getElementById("projects"),d=document.getElementById("projectList");i.innerHTML="",d.innerHTML="",o(),t.forEach((o=>function(o){const i=document.getElementById("projects"),d=document.createElement("div"),l=document.createElement("div"),c=document.createElement("h2"),s=document.createElement("div"),u=document.createElement("img"),p=document.createElement("img"),m=document.createElement("h4"),b=document.createElement("button");d.setAttribute("class","card"),d.setAttribute("id",`${t.indexOf(o)}`),l.setAttribute("id","titleDiv"),c.setAttribute("id","projectTitle"),c.textContent=`Project: ${o.project}`,s.setAttribute("id","projectTitleIcons"),u.setAttribute("id","expand"),u.setAttribute("src","./images/format-list-bulleted-square.png"),u.setAttribute("alt","expand project"),u.setAttribute("title","minimize"),u.setAttribute("data-position",`${t.indexOf(o)}`),p.setAttribute("id","deletePrj"),p.setAttribute("src","./images/delete-alert.png"),p.setAttribute("alt","delete project icon"),p.setAttribute("title","delete project"),p.setAttribute("data-position",`${t.indexOf(o)}`),m.setAttribute("id","toDoListHeader"),m.textContent=`${o.project} To Do List:`,b.setAttribute("id","addToDoBtn"),b.setAttribute("type","submit"),b.setAttribute("data-position",`${t.indexOf(o)}`),b.textContent="+add todo item",i.append(d),d.append(l),l.append(c),l.append(s),s.append(u),s.append(p),d.append(m);let g=`${t.indexOf(o)}`;t[`${t.indexOf(o)}`].toDoArray.forEach((t=>e(t,g))),d.append(b),p.addEventListener("dblclick",r.deleteProject),b.addEventListener("click",a.addToDoForm),u.addEventListener("dblclick",n.minimize)}(o)))},projectsSidebar:o}}(),e=t,o=function(){function t(t){this.project=t,this.toDoArray=[]}class e{constructor(t="unknown",e="unknown",o=0,r=0){this.title=t,this.description=e,this.date=o,this.priority=r}}return{addProject:function(e){let o=[];o=JSON.parse(localStorage.getItem("myProjects")),e.preventDefault();const r=document.getElementById("project").value;if(!r)return alert("Please enter a project name in the input."),!1;{let e=new t(r);o.push(e),localStorage.setItem("myProjects",JSON.stringify(o)),location.reload()}},addToDo:function(t){let o=[];o=JSON.parse(localStorage.getItem("myProjects")),t.preventDefault();const r=document.getElementById("title").value,i=document.getElementById("description").value,n=document.getElementById("due-date").value,d=document.getElementById("priority").value;if(!(r&&i&&n))return alert("All fields are required to add todo item."),!1;{let a=new e(r,i,n,d);null===t.target.getAttribute("data-todo")?o[`${t.target.getAttribute("data-position")}`].toDoArray.push(a):o[t.target.getAttribute("data-position")].toDoArray.splice(t.target.getAttribute("data-todo"),1,a),localStorage.setItem("myProjects",JSON.stringify(o)),location.reload()}}}}(),r={deleteProject:function(t){let e=[];e=JSON.parse(localStorage.getItem("myProjects")),e.splice(t.target.getAttribute("data-position"),1),localStorage.setItem("myProjects",JSON.stringify(e)),location.reload()},deleteToDo:function(t){let e=[];e=JSON.parse(localStorage.getItem("myProjects")),e[t.target.getAttribute("data-position")].toDoArray.splice(t.target.getAttribute("data-todo"),1),localStorage.setItem("myProjects",JSON.stringify(e)),location.reload()}},i={toDoCompleted:function(t){let e=[];e=JSON.parse(localStorage.getItem("myProjects")),e[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].priority="completed",localStorage.setItem("myProjects",JSON.stringify(e)),location.reload()}},n={minimize:function(t){let e=[];e=JSON.parse(localStorage.getItem("myProjects"));const o=document.getElementById(t.target.getAttribute("data-position"));o.getElementsByTagName("h4")[0].style.display="none";for(let r=0;r<e[t.target.getAttribute("data-position")].toDoArray.length;r++)o.getElementsByTagName("h6")[r].style.display="none"}},d={addProjectForm:function(t){const r=document.getElementById("projects"),i=document.createElement("form"),n=document.createElement("div"),d=document.createElement("label"),a=document.createElement("input"),l=document.createElement("button"),c=document.createElement("button");i.setAttribute("id","projectForm"),n.setAttribute("id","projectFormDiv"),d.setAttribute("for","project"),d.textContent="Project Name",a.setAttribute("type","text"),a.setAttribute("id","project"),a.setAttribute("placeholder","project name"),l.setAttribute("id","projectFormSaveBtn"),l.setAttribute("type","submit"),l.textContent="save",l.style.backgroundColor="var(--later)",c.setAttribute("id","projectCancelBtn"),c.setAttribute("type","button"),c.textContent="cancel",c.style.backgroundColor="var(--urgent)",r.innerHTML="",r.appendChild(i),i.appendChild(n),n.appendChild(d),n.appendChild(a),i.appendChild(l),i.appendChild(c),l.addEventListener("click",o.addProject),c.addEventListener("click",e.addAllProjects)},addToDoForm:function(t){let r=[];r=JSON.parse(localStorage.getItem("myProjects"));const i=document.getElementById("projects"),n=document.createElement("form"),d=document.createElement("div");n.setAttribute("id","toDoForm");const a=document.createElement("div"),l=document.createElement("label"),c=document.createElement("input");l.setAttribute("for","title"),l.textContent="To Do Item Title",c.setAttribute("type","text"),c.setAttribute("id","title"),"editToDo"===t.target.id?c.setAttribute("value",`${r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].title}`):c.setAttribute("placeholder","title");const s=document.createElement("div"),u=document.createElement("label"),p=document.createElement("input");u.setAttribute("for","descripton"),u.textContent="To Do Item Description",p.setAttribute("type","text"),p.setAttribute("id","description"),"editToDo"===t.target.id?p.setAttribute("value",`${r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].description}`):p.setAttribute("placeholder","description");const m=document.createElement("div"),b=document.createElement("label"),g=document.createElement("input");b.setAttribute("for","due-date"),b.textContent="To Do Item Due Date",g.setAttribute("type","date"),g.setAttribute("id","due-date"),"editToDo"===t.target.id&&g.setAttribute("value",`${r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].date}`);const A=document.createElement("div"),y=document.createElement("label"),E=document.createElement("select"),C=document.createElement("option"),j=document.createElement("option"),h=document.createElement("option"),v=document.createElement("option");y.setAttribute("for","priority"),y.textContent="To Do Item Priority",E.setAttribute("id","priority"),C.setAttribute("value","urgent"),C.setAttribute("id","priorityNow"),C.textContent="Urgent",C.style.backgroundColor="var(--urgent)",j.setAttribute("value","soon"),j.setAttribute("id","prioritySoon"),j.textContent="Soon",j.style.backgroundColor="var(--soon)",h.setAttribute("value","later"),h.setAttribute("id","priorityLater"),h.textContent="Later",h.style.backgroundColor="var(--later)",v.setAttribute("value","completed"),v.setAttribute("id","priorityCompleted"),v.textContent="Completed",v.style.backgroundColor="var(--project-light)","editToDo"===t.target.id&&"urgent"===r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].priority?C.setAttribute("selected","selected"):"editToDo"===t.target.id&&"soon"===r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].priority?j.setAttribute("selected","selected"):"editToDo"===t.target.id&&"later"===r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].priority?h.setAttribute("selected","selected"):"editToDo"===t.target.id&&"completed"===r[t.target.getAttribute("data-position")].toDoArray[t.target.getAttribute("data-todo")].priority?v.setAttribute("selected","selected"):C.setAttribute("selected","selected");const D=document.createElement("button");D.setAttribute("id","toDoFormSaveBtn"),D.setAttribute("type","submit"),D.textContent="save",D.style.backgroundColor="var(--later)";let f=t.target.getAttribute("data-position");D.setAttribute("data-position",`${f}`),"editToDo"===t.target.id&&D.setAttribute("data-todo",`${t.target.getAttribute("data-todo")}`);const I=document.createElement("button");I.setAttribute("id","toDoCancelBtn"),I.setAttribute("type","button"),I.textContent="cancel",I.style.backgroundColor="var(--urgent)",i.innerHTML="",i.appendChild(n),n.appendChild(d),d.appendChild(a),a.appendChild(l),a.appendChild(c),d.appendChild(s),s.appendChild(u),s.appendChild(p),d.appendChild(m),m.appendChild(b),m.appendChild(g),d.appendChild(A),A.appendChild(y),A.appendChild(E),E.appendChild(C),E.appendChild(j),E.appendChild(h),E.appendChild(v),d.appendChild(D),d.appendChild(I),I.addEventListener("click",e.addAllProjects),D.addEventListener("click",o.addToDo)}},a=d;let l=[];window.onload=function(){l=JSON.parse(localStorage.getItem("myProjects")),null===l&&(l=[]),e.addAllProjects()},document.getElementById("addProjectBtn").addEventListener("click",a.addProjectForm)})();