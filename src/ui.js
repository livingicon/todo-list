import loadProjects from "./projects";
import addForms from "./forms";




// ADD ELEMENTS MODULE
const addElements = (function() {
  // CONSTRUCTORS
  // project
  function Project(project) { //change
    this.project = project;
    this.toDoArray = [];
  };
  // todo
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
      location.reload();

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
      if (e.target.getAttribute('data-todo') === null) {
        myProjects[`${e.target.getAttribute('data-position')}`]
        .toDoArray.push(newToDo); 
      } else {
        myProjects[e.target.getAttribute("data-position")]
        .toDoArray.splice(e.target.getAttribute("data-todo"), 1, newToDo);
      }
      localStorage.setItem('myProjects', JSON.stringify(myProjects));
      location.reload();
    }
  };

  return { addProject, addToDo };
})(); 



// DELETE ELEMENTS MODULE
const deleteElements = (function() {
  // delete project
  const deleteProject = function(e) {
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    myProjects.splice(e.target.getAttribute("data-position"), 1);
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    location.reload();
  };
  // delete todo
  const deleteToDo = function(e) { 
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    myProjects[e.target.getAttribute("data-position")]
    .toDoArray.splice(e.target.getAttribute("data-todo"), 1);
    localStorage.setItem('myProjects', JSON.stringify(myProjects)); 
    location.reload();
  };

  return { deleteProject, deleteToDo };
})();  




// EDIT MODULE
const editElements = (function() {
  
  // toDo completed
  const toDoCompleted = function(e) {
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    myProjects[e.target.getAttribute("data-position")]
    .toDoArray[e.target.getAttribute("data-todo")].priority = "completed";
    localStorage.setItem('myProjects', JSON.stringify(myProjects)); 
    location.reload();
  };

  return { toDoCompleted };
})(); 




// EXPAND AND MINIMIZE MODULE
const interfaceElements = (function(e) {

  // minimize
  const minimize = function(e) {
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    
    const card = document.getElementById(e.target.getAttribute("data-position"));
    const cardToDoList = card.getElementsByTagName('h4')[0];
    //display
    cardToDoList.style.display = "none";
    for(let i = 0; i < myProjects[e.target.getAttribute("data-position")]
    .toDoArray.length; i++){
      let toDoItem = card.getElementsByTagName('h6')[i];
      toDoItem.style.display = "none";
    }
  }

  return { minimize };
})(); 



export { 
  addElements, 
  deleteElements,
  editElements,
  interfaceElements
};