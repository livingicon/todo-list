(()=>{const t=function(){function t(t){const n=document.createElement("div"),d=document.createElement("label"),o=document.createElement("input");n.setAttribute("id","projectTitleForm"),d.setAttribute("id","projectTitleLabel"),o.addEventListener("keypress",e),d.setAttribute("for","projectTitleInput"),d.textContent="Project Name:",o.setAttribute("id","projectTitleInput"),o.setAttribute("type","text"),o.setAttribute("placeholder","Project Name"),null===defaultProject.firstChild?(defaultProject.appendChild(n),n.appendChild(d),n.appendChild(o)):null!==defaultProject.firstChild&&(console.log(t),o.removeAttribute("placeholder"),o.setAttribute("value",`${projectTitle.innerHTML}`),defaultProject.replaceChild(n,projectTitle),n.appendChild(d),n.appendChild(o))}const e=function(e){if("Enter"===e.key){const d=document.createElement("h3");projectTitleLabel.remove(),d.setAttribute("id","projectTitle"),d.innerHTML=`${e.target.value}`,defaultProject.replaceChild(d,projectTitleForm),d.addEventListener("dblclick",t),n()}},n=function(){if(null===document.getElementById("addToDoBtn")){const t=document.createElement("button");t.addEventListener("click",d),t.setAttribute("id","addToDoBtn"),t.textContent="+ add to-do item",defaultProject.appendChild(t)}},d=function(){const t=document.getElementById("addToDoBtn"),e=document.createElement("form");e.setAttribute("id","toDoForm");const n=document.createElement("div"),d=document.createElement("label"),o=document.createElement("input");d.setAttribute("for","title"),d.textContent="Title",o.setAttribute("type","text"),o.setAttribute("id","title"),o.setAttribute("placeholder","title");const i=document.createElement("div"),r=document.createElement("label"),l=document.createElement("input");r.setAttribute("for","descripton"),r.textContent="Description",l.setAttribute("type","text"),l.setAttribute("id","descripton"),l.setAttribute("placeholder","description");const c=document.createElement("div"),a=document.createElement("label"),u=document.createElement("input");a.setAttribute("for","due-date"),a.textContent="Due Date",u.setAttribute("type","date"),u.setAttribute("id","due-date");const p=document.createElement("div"),m=document.createElement("label"),s=document.createElement("select"),b=document.createElement("option"),C=document.createElement("option"),h=document.createElement("option");m.setAttribute("for","priority"),m.textContent="Priority",s.setAttribute("id","priority"),b.setAttribute("value","urgent"),b.setAttribute("id","priorityNow"),b.textContent="Urgent",b.style.backgroundColor="red",C.setAttribute("value","soon"),C.setAttribute("id","prioritySoon"),C.textContent="Soon",C.style.backgroundColor="yellow",h.setAttribute("value","later"),h.setAttribute("id","priorityLater"),h.textContent="Later",h.style.backgroundColor="green";const A=document.createElement("button");A.setAttribute("id","toDoSaveBtn"),A.setAttribute("type","submit"),A.textContent="save",t.remove(),defaultProject.appendChild(e),e.appendChild(n),n.appendChild(d),n.appendChild(o),e.appendChild(i),i.appendChild(r),i.appendChild(l),e.appendChild(c),c.appendChild(a),c.appendChild(u),e.appendChild(p),p.appendChild(m),p.appendChild(s),s.appendChild(b),s.appendChild(C),s.appendChild(h),defaultProject.appendChild(A)};return{addDefaultProject:function(e){const n=document.getElementById("projects"),d=document.createElement("div");d.setAttribute("id","defaultProject"),n.appendChild(d),t()}}}();document.getElementById("addProjectBtn").addEventListener("click",t.addDefaultProject)})();