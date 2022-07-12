import addForms from "./addProjectForm";
import { addElements, deleteElements } from "./ui";



// LOCAL STORAGE
window.onload = function() {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
  if (myProjects === null) {
    myProjects = [];
  }
  loadProjectsModule.addAllProjects();
};

const addProjectBtn = document.getElementById('addProjectBtn');
let myProjects = [];
// let toDoArray = [];


const loadProjectsModule = (function() {
  // ADD ALL PROJECTS
  const addAllProjects = function(){
    const projects = document.getElementById('projects');
    const projectList = document.getElementById('projectList');
    projects.innerHTML = ""; //clears existing projects
    projectList.innerHTML = "";
    myProjects.forEach(element => generateProjectCards(element));
  };
  // GENERATE PROJECT CARDS
  const generateProjectCards = function(stuff){
    const projectList = document.getElementById('projectList');
    const projects = document.getElementById('projects');
    const card = document.createElement('div');
    const cardProject = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const projectDeleteIcon = document.createElement('img');
    const projectTitleSidebar = document.createElement('h6');
    const toDoListHeader = document.createElement('h4')
    const addToDoBtn = document.createElement('button');
    // attributes
    card.setAttribute('class', 'card');
    card.setAttribute('id', `${myProjects.indexOf(stuff)}`);
    cardProject.setAttribute('id', 'titleDiv');
    projectTitle.setAttribute('id', 'projectTitle');
    projectTitle.textContent = `Project: ${stuff.project}`;
    projectDeleteIcon.setAttribute('id', 'deletePrj');
    projectDeleteIcon.setAttribute('src', './images/delete-alert.png');
    projectDeleteIcon.setAttribute('alt', 'delete project icon');
    projectDeleteIcon.setAttribute('title', 'delete project');
    projectDeleteIcon.setAttribute('data-position', `${myProjects.indexOf(stuff)}`);
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
    cardProject.append(projectDeleteIcon);
    card.append(toDoListHeader);
    // --append todos
    let projIndex = `${myProjects.indexOf(stuff)}`;                           // HERE!!
    myProjects[`${myProjects.indexOf(stuff)}`].toDoArray.forEach(toDo => 
      addAllToDos(toDo, projIndex));
    // --append addToDoBtn  
    card.append(addToDoBtn);
    // event listeners
    projectDeleteIcon.addEventListener('dblclick', deleteElements.deleteProject);
    addToDoBtn.addEventListener('click', addForms.addToDoForm);
    // --append projects to sidebar
    projectList.append(projectTitleSidebar);
  };
  // ADD ALL TODOS
  const addAllToDos = function(toDo, projIndex){
    const card = document.getElementById(projIndex);
    const cardToDoList = document.createElement('div');
    const toDoItem = document.createElement('h6');
    // const toDoCompleteIcon = document.createElement('img');
    // const toDoEditIcon = document.createElement('img');
    const toDoDeleteIcon = document.createElement('img');
    //attributes
    cardToDoList.setAttribute('id', 'cardToDoList')
    toDoItem.setAttribute('id', 'toDoItem');
    toDoItem.innerHTML = `${toDo.title}: ${toDo.description}<br />
    Goal Completion: ${toDo.date}`;
    // toDoCompleteIcon
    // toDoEditIcon
    toDoDeleteIcon.setAttribute('id', 'deleteToDo');
    toDoDeleteIcon.setAttribute('src', './images/delete-alert.png');
    toDoDeleteIcon.setAttribute('alt', 'delete project icon');
    toDoDeleteIcon.setAttribute('title', 'delete todo item');
    let todoIndex = `${myProjects[projIndex].toDoArray.indexOf(toDo)}`;      // HERE!!!
    toDoDeleteIcon.setAttribute('data-position', `${projIndex}`)
    toDoDeleteIcon.setAttribute('data-todo', `${todoIndex}`);
    // append
    card.appendChild(cardToDoList);
    cardToDoList.append(toDoItem);
    toDoItem.append(toDoDeleteIcon);
    // priority color
    if (toDo.priority === "urgent") {
      toDoItem.style.backgroundColor = 'var(--urgent)';
    } else if (toDo.priority === "soon") {
      toDoItem.style.backgroundColor = 'var(--soon)';
    } else {
      toDoItem.style.backgroundColor = 'var(--later)';
    }
    // event listeners
    toDoDeleteIcon.addEventListener('dblclick', deleteElements.deleteToDo);
  };

  return { addAllProjects, generateProjectCards, addAllToDos };
})();  




addProjectBtn.addEventListener('click', addForms.addProjectForm);

export {
  addElements,
  loadProjectsModule
};

// TO DO
// - make sidebar title clickable
// - marking todo item as complete (mark line through)
// - add priority key (sidebar)
// - add projects header (All Projects)
// - "show all projects" button (each minimized)
// - break into modules (loadPage, addProject, editProject, addToDoItem);

// - factory function??
// - expand and minimize??
// - if project already exists alert??
// - editing todos and editing project title??