import addProjectToDoForm from "./addProjectForm";




const addProjectBtn = document.getElementById('addProjectBtn');
// -----loadApp File-----
// LOCAL STORAGE
let myProjects = [];
window.onload = function() {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
  if (myProjects === null) {
    myProjects = [];
  }
  addAllProjects();
};




// -----addProject File-----
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
    alert("All fields are required to add a project and project todo list item.");
    return false;
  } else {
    let newProject = new Project(project, title, description, date, priority);
    myProjects.push(newProject);
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    addAllProjects(newProject); 
  }
};





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

  card.setAttribute('id', 'card');
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

  addToDoBtn.addEventListener('click', addProjectToDoForm.addForm);
};




// -----loadApp File-----
addProjectBtn.addEventListener('click', addProjectToDoForm.addForm);


export {
  addProject,
  addAllProjects
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