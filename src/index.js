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
  // console.log(myProjects);
};

let myProjects = []; //does this need to be here?

// -----addProject File-----
// convert constructor function to class?
function Project(project, title, description, date, priority) {
  this.project = project;
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
};

const addProject = function(e){
  e.preventDefault();
  const project = document.getElementById('project').value;
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  if (!project || !title || !description || !date) {
    alert("All fields are required to add a project and project todo item.");
    return false;
  } else {
    let newProject = new Project(project, title, description, date, priority);
    myProjects.push(newProject);
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    addAllProjects(newProject); 
  }
};

function ToDo(title, description, date, priority) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
};

const addToDoItem = function(e){
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  if (!title || !description || !date) {
    alert("All fields are required to add todo item.");
    return false;
  } else {
    // replaces existing todo item (because title.this, etc? Need new form.)
    const targetObj = myProjects[`${e.target.getAttribute('data-position')}`];
    let newToDo = new ToDo(title, description, date, priority);
    const newObj = Object.assign(targetObj, newToDo);
    console.log(targetObj);
    addAllProjects();
    // myProjects.push(newToDo); // push where?
    // addNewTodo(newToDo); //change this to addNewTodo function? 
    // localStorage.setItem('myProjects', JSON.stringify(myProjects));
    // console.log(myProjects[`${location}`].date); //working
    // let location = `${e.target.getAttribute('data-position')}`;
  }
};

// const addNewToDo = function(newToDo){

// };

// -----loadApp File-----
const addAllProjects = function(newProject){
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
  const cardToDoList = document.createElement('div');
  const projectTitle = document.createElement('h2');
  const projectTitleSidebar = document.createElement('h6');
  const toDoListHeader = document.createElement('h4')
  const toDoItem = document.createElement('h6');
  const addToDoBtn = document.createElement('button');

  card.setAttribute('class', 'card');
  card.setAttribute('id', `${myProjects.indexOf(stuff)}`); //works
  projectTitle.setAttribute('id', 'projectTitle');
  projectTitle.textContent = `Project: ${stuff.project}`;
  cardToDoList.setAttribute('id', 'cardToDoList')
  toDoListHeader.setAttribute('id', 'toDoListHeader');
  toDoListHeader.textContent = `${stuff.project} To Do List:`;
  toDoItem.setAttribute('id', 'toDoItem');
  toDoItem.innerHTML = `${stuff.title}: ${stuff.description}<br />
  Goal Completion: ${stuff.date}`;
  addToDoBtn.setAttribute('id', 'addToDoBtn');
  addToDoBtn.setAttribute('type', 'submit');
  addToDoBtn.setAttribute('data-position', `${myProjects.indexOf(stuff)}`); // added data-position here
  addToDoBtn.textContent = "+add todo item";
  projectTitleSidebar.textContent = `${stuff.project}`;
  projectTitleSidebar.setAttribute('id', 'projectTitleSidebar');

  projects.append(card);
  card.append(cardProject);
  cardProject.append(projectTitle);
  card.append(cardToDoList);
  cardToDoList.append(toDoListHeader);
  cardToDoList.append(toDoItem);
  cardToDoList.append(addToDoBtn);
  //sidebar
  projectList.append(projectTitleSidebar); //make event listeners

  if (stuff.priority === "urgent") {
    toDoItem.style.backgroundColor = 'var(--urgent)';
  } else if (stuff.priority === "soon") {
    toDoItem.style.backgroundColor = 'var(--soon)';
  } else {
    toDoItem.style.backgroundColor = 'var(--later)';
  }

  addToDoBtn.addEventListener('click', addForms.addProjectForm);
};




// -----loadApp File-----
addProjectBtn.addEventListener('click', addForms.addProjectForm);


export {
  addProject,
  addAllProjects,
  addToDoItem
};

// TO DO
// 4. make form update todo on specific project (not what originally designed for)

// - factory function?
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