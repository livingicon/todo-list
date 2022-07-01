import addForms from "./addProjectForm";




const addProjectBtn = document.getElementById('addProjectBtn');
// -----loadApp File-----
// LOCAL STORAGE
window.onload = function() {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
  if (myProjects === null) {
    myProjects = [];
  }
  addAllProjects();
};

let myProjects = [];
let toDoArray = []; //will this help?

// -----addProject File-----
// convert constructor function to class or factory?
function Project(project) {
  this.project = project;
  this.toDoArray = [];
};

const addProject = function(e){
  e.preventDefault();
  const project = document.getElementById('project').value;
  if (!project) {
    alert("Please enter a project name in the input.");
    return false;
  } else {
    let newProject = new Project(project);
    myProjects.push(newProject);
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    addAllProjects(newProject); 
  }
};

// function ToDo(title, description, date, priority) {
//   this.title = title;
//   this.description = description;
//   this.date = date;
//   this.priority = priority;
// };

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

const addToDo = function(e){ // objects can't have duplicate keys
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
    addAllProjects(newToDo); //should it have newToDo parameter?
    }
  };

// -----loadApp File-----
const addAllProjects = function(){ // newToDo parameter?
  const projects = document.getElementById('projects');
  const projectList = document.getElementById('projectList');
  projects.innerHTML = ""; //clears existing projects to avoid doubles
  projectList.innerHTML = "";
  myProjects.forEach(element => generateProjectCards(element));
};

const generateProjectCards = function(stuff){
  const projectList = document.getElementById('projectList'); // sidebar list
  const projects = document.getElementById('projects'); // projects
  const card = document.createElement('div');
  const cardProject = document.createElement('div');
  const projectTitle = document.createElement('h2');
  const projectTitleSidebar = document.createElement('h6');
  const toDoListHeader = document.createElement('h4')
  const addToDoBtn = document.createElement('button');
  // attributes
  card.setAttribute('class', 'card');
  card.setAttribute('id', `${myProjects.indexOf(stuff)}`); //works
  projectTitle.setAttribute('id', 'projectTitle');
  projectTitle.textContent = `Project: ${stuff.project}`;
  toDoListHeader.setAttribute('id', 'toDoListHeader');
  toDoListHeader.textContent = `${stuff.project} To Do List:`;
  addToDoBtn.setAttribute('id', 'addToDoBtn');
  addToDoBtn.setAttribute('type', 'submit');
  addToDoBtn.setAttribute('data-position', `${myProjects.indexOf(stuff)}`);
  addToDoBtn.textContent = "+add todo item";
  projectTitleSidebar.textContent = `${stuff.project}`;
  projectTitleSidebar.setAttribute('id', 'projectTitleSidebar');
  // append 
  projects.append(card);
  card.append(cardProject);
  cardProject.append(projectTitle);
  card.append(toDoListHeader);

  // --append todos
  let index = `${myProjects.indexOf(stuff)}`;
  myProjects[`${myProjects.indexOf(stuff)}`].toDoArray.forEach(toDo => 
    addAllToDos(toDo, index));


  // --append addToDoBtn  
  card.append(addToDoBtn);
  // event listeners
  addToDoBtn.addEventListener('click', addForms.addToDoForm);
  // --append projects to sidebar
  projectList.append(projectTitleSidebar); //make event listeners?
};

const addAllToDos = function(toDo, index){
  const card = document.getElementById(index);
  const cardToDoList = document.createElement('div');
  const toDoItem = document.createElement('h6');

  cardToDoList.setAttribute('id', 'cardToDoList')
  toDoItem.setAttribute('id', 'toDoItem');
  toDoItem.innerHTML = `${toDo.title}: ${toDo.description}<br />
  Goal Completion: ${toDo.date}`;

  card.appendChild(cardToDoList);
  cardToDoList.append(toDoItem);

  if (toDo.priority === "urgent") {
    toDoItem.style.backgroundColor = 'var(--urgent)';
  } else if (toDo.priority === "soon") {
    toDoItem.style.backgroundColor = 'var(--soon)';
  } else {
    toDoItem.style.backgroundColor = 'var(--later)';
  }
};




// -----loadApp File-----
addProjectBtn.addEventListener('click', addForms.addProjectForm);

export {
  addProject,
  addAllProjects,
  addToDo
};

// TO DO
// - factory function?
// - if project already exist alert
// - add title on sidebar
// - make sidebar title clickable
// - add button below toDoItem to add another to do item
// - add form cancel button
// - editing todos and editing project title
// - marking todo item as complete (mark line through)
// - deleting projects and/or todo items
// - expand and minimize?
// - add priority key (sidebar)
// - break into modules (loadPage, addProject, editProject, addToDoItem);
// - add projects header (All Projects)
// - change "All Projects" to "show all projects"