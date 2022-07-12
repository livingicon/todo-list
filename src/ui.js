import { loadProjectsModule } from "./index";
// import addForms from "./addProjectForm";


const addElements = (function() {
  // convert constructor functions to factory?
  // PROJECT CONSTRUCTOR
  function Project(project) {
    this.project = project;
    this.toDoArray = [];
  };

  // TODO CLASS
  class ToDo {
    constructor(
      title = "unknown",
      description = "unknown",
      date = 0,
      priority = 0
    ) {
      this.title = title;
      this.description = description;
      this.date = date;
      this.priority = priority;
    }
  };

  // ADD PROJECT
  const addProject = function(e){
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    e.preventDefault();
    const project = document.getElementById('project').value;
    if (!project) {
      alert("Please enter a project name in the input.");
      return false;
    } else {
      let newProject = new Project(project);
      myProjects.push(newProject);
      localStorage.setItem('myProjects', JSON.stringify(myProjects));
      // loadProjectsModule.addAllProjects(newProject); 
      window.onload();
    }
  };
  // ADD TODO ITEM
  const addToDo = function(e){
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    if (!title || !description || !date) {
      alert("All fields are required to add todo item.");
      return false;
    } else {
      let newToDo = new ToDo(title, description, date, priority);
      myProjects[`${e.target.getAttribute('data-position')}`]
      .toDoArray.push(newToDo);
      localStorage.setItem('myProjects', JSON.stringify(myProjects));
      // loadProjectsModule.addAllProjects();
      window.onload();
    }
  };
  return { addProject, addToDo };
})(); 




const deleteElements = (function() {
  // DELETE PROJECT
  const deleteProject = function(e) {
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    console.log(e.target.getAttribute("data-position")); // null (not working)
    myProjects.splice(e.target.getAttribute("data-position"), 1);
    localStorage.setItem('myProjects', JSON.stringify(myProjects)); 
    window.onload();
  };
  // DELETE TODO
  const deleteToDo = function(e) { // this one seems to be accurate in delete
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    console.log(e.target.getAttribute("data-todo"));
    myProjects[e.target.getAttribute("data-position")].toDoArray.splice(e.target.getAttribute("data-todo"), 1);
    localStorage.setItem('myProjects', JSON.stringify(myProjects)); 
    window.onload();
  };
  return { deleteProject, deleteToDo };
})();  


export { 
  addElements, 
  deleteElements 
};