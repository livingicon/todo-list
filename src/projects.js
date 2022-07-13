import { addElements, deleteElements, toDoCompleted } from "./ui";
import addForms from "./forms";

const loadProjects = (function() {

  let myProjects = [];
  myProjects = JSON.parse(localStorage.getItem('myProjects'));

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
    let projIndex = `${myProjects.indexOf(stuff)}`;
    myProjects[`${myProjects.indexOf(stuff)}`].toDoArray.forEach(toDo => 
      addAllToDos(toDo, projIndex));
    // --append addToDoBtn  
    card.append(addToDoBtn);
    // event listeners
    projectDeleteIcon.addEventListener('dblclick', deleteElements.deleteProject);
    addToDoBtn.addEventListener('click', addForms.addToDoForm); // Here !!
    // --append projects to sidebar
    projectList.append(projectTitleSidebar);
  };

  // ADD ALL TODOS
  const addAllToDos = function(toDo, projIndex){
    const card = document.getElementById(projIndex);
    const cardToDoList = document.createElement('div');
    const toDoItem = document.createElement('h6');
    const toDoIcons = document.createElement('div');
    const toDoCompletedIcon = document.createElement('img');
        // const toDoEditIcon = document.createElement('img');
    const toDoDeleteIcon = document.createElement('img');
    //attributes
    cardToDoList.setAttribute('id', 'cardToDoList')
    toDoItem.setAttribute('id', 'toDoItem');
    toDoItem.innerHTML = `${toDo.title}: ${toDo.description}<br />
    Goal Completion: ${toDo.date}`;
    // toDoIcons.setAttribute('id', 'toDoIcons');

    toDoCompletedIcon.setAttribute('id', 'completedToDo');
    toDoCompletedIcon.setAttribute('src', './images/check-bold.png');
    toDoCompletedIcon.setAttribute('alt', 'mark as completed icon');
    toDoCompletedIcon.setAttribute('title', 'mark completed');
    let todoIndex = `${myProjects[projIndex].toDoArray.indexOf(toDo)}`;
    toDoCompletedIcon.setAttribute('data-position', `${projIndex}`)
    toDoCompletedIcon.setAttribute('data-todo', `${todoIndex}`);
    // toDoEditIcon
    toDoDeleteIcon.setAttribute('id', 'deleteToDo');
    toDoDeleteIcon.setAttribute('src', './images/delete-alert.png');
    toDoDeleteIcon.setAttribute('alt', 'delete project icon');
    toDoDeleteIcon.setAttribute('title', 'delete todo item');
    toDoDeleteIcon.setAttribute('data-position', `${projIndex}`)
    toDoDeleteIcon.setAttribute('data-todo', `${todoIndex}`);
    // append
    card.appendChild(cardToDoList);
    cardToDoList.append(toDoItem);
    toDoItem.append(toDoIcons)
    toDoIcons.append(toDoCompletedIcon);
    toDoIcons.append(toDoDeleteIcon);
    // priority color
    if (toDo.priority === "urgent") {
      toDoItem.style.backgroundColor = 'var(--urgent)';
    } else if (toDo.priority === "soon") {
      toDoItem.style.backgroundColor = 'var(--soon)';
    } else {
      toDoItem.style.backgroundColor = 'var(--later)';
    }
    // event listeners
    toDoCompletedIcon.addEventListener('dblclick', toDoCompleted);
    toDoDeleteIcon.addEventListener('dblclick', deleteElements.deleteToDo);
  };

  return { addAllProjects };
})(); 

export default loadProjects;