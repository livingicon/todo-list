(()=>{const t=function(){const t=function(t){if("Enter"===t.key){const n=document.createElement("h3");n.setAttribute("id","projectTitle"),n.innerHTML=`${t.target.value}`,defaultProject.replaceChild(n,projectTitleInput),e()}},e=function(){const t=document.createElement("button");t.addEventListener("click",n),t.setAttribute("id","addToDoBtn"),t.textContent="+ add project to-do list item",defaultProject.appendChild(t)},n=function(){document.createElement("input"),console.log("add a todo item")};return{addDefaultProject:function(e){const n=document.getElementById("projects"),d=document.createElement("div"),c=document.createElement("input");c.addEventListener("keypress",t),d.setAttribute("id","defaultProject"),c.setAttribute("id","projectTitleInput"),c.setAttribute("type","text"),c.setAttribute("placeholder","Project Name"),n.appendChild(d),d.appendChild(c)}}}();document.getElementById("addProjectBtn").addEventListener("click",t.addDefaultProject)})();