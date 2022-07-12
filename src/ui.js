// import { loadProjectsModule, addProject, addToDo } from "./index";
// import addForms from "./addProjectForm";

const deleteElements = (function() {

  // DELETE PROJECT
  const deleteProject = function(e) {
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    myProjects.splice(e.target.getAttribute("data-position"), 1);
    localStorage.setItem('myProjects', JSON.stringify(myProjects)); 
    window.onload();
  };

  // DELETE TODO
  const deleteToDo = function(e) {
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    myProjects[e.target.getAttribute("data-position")].toDoArray.splice(e.target.getAttribute("data-todo"), 1);
    localStorage.setItem('myProjects', JSON.stringify(myProjects)); 
    window.onload();
  };

  return { deleteProject, deleteToDo };
})();  

export { 
  deleteElements 
};