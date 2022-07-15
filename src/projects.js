import { addElements, deleteElements, editElements, interfaceElements } from "./ui";
import addForms from "./forms";

const loadProjects = (function() {

  let myProjects = [];
  myProjects = JSON.parse(localStorage.getItem('myProjects'));

  // ADD ALL PROJECTS
  const addAllProjects = function(){
    const projects = document.getElementById('projects');
    const projectList = document.getElementById('projectList');
    projects.innerHTML = "";
    projectList.innerHTML = "";
    projectsSidebar();
    myProjects.forEach(element => generateProjectCards(element));
  };
  // GENERATE PROJECT CARDS
  const generateProjectCards = function(stuff){
    const projects = document.getElementById('projects');
    const card = document.createElement('div');
    const cardProject = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const projectTitleIcons = document.createElement('div');
    const expandIcon = document.createElement('img');
    const projectDeleteIcon = document.createElement('img');
    const toDoListHeader = document.createElement('h4')
    const addToDoBtn = document.createElement('button');
    // attributes
    card.setAttribute('class', 'card');
    card.setAttribute('id', `${myProjects.indexOf(stuff)}`);
    cardProject.setAttribute('id', 'titleDiv');
    projectTitle.setAttribute('id', 'projectTitle');
    projectTitle.textContent = `Project: ${stuff.project}`;
    projectTitleIcons.setAttribute('id', 'projectTitleIcons');
    expandIcon.setAttribute('id', 'expand');
    expandIcon.setAttribute('src', './images/format-list-bulleted-square.png');
    expandIcon.setAttribute('alt', 'expand project');
    expandIcon.setAttribute('title', 'minimize');
    expandIcon.setAttribute('data-position', `${myProjects.indexOf(stuff)}`);
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
    // append 
    projects.append(card);
    card.append(cardProject);
    cardProject.append(projectTitle);
    cardProject.append(projectTitleIcons);
    projectTitleIcons.append(expandIcon);
    projectTitleIcons.append(projectDeleteIcon);
    card.append(toDoListHeader);
    // --append todos
    let projIndex = `${myProjects.indexOf(stuff)}`;
    myProjects[`${myProjects.indexOf(stuff)}`].toDoArray.forEach(toDo =>
      addAllToDos(toDo, projIndex));
    // --append addToDoBtn
    card.append(addToDoBtn);
    // event listeners
    projectDeleteIcon.addEventListener('dblclick', deleteElements.deleteProject);
    addToDoBtn.addEventListener('click', addForms.addToDoForm);
    expandIcon.addEventListener('dblclick', interfaceElements.minimize);
  };

  // const minimize = function(e) {
  //   let myProjects = [];
  //   myProjects = JSON.parse(localStorage.getItem('myProjects'));
  //   const card = document.getElementById(e.target.getAttribute("data-position"));
  //   const cardToDoList = card.getElementsByTagName('h4')[0];
  //   //display
  //   cardToDoList.style.display = "none";
  //   for(let i = 0; i < myProjects[e.target.getAttribute("data-position")]
  //   .toDoArray.length; i++){
  //     let toDoItem = card.getElementsByTagName('h6')[i];
  //     toDoItem.style.display = "none";
  //   }
  // };

  // ADD ALL TODOS
  const addAllToDos = function(toDo, projIndex){
    const card = document.getElementById(projIndex);
    const toDoItem = document.createElement('h6');
    const toDoIcons = document.createElement('div');
    const toDoCompletedIcon = document.createElement('img');
    const toDoEditIcon = document.createElement('img');
    const toDoDeleteIcon = document.createElement('img');
    //attributes
    toDoItem.setAttribute('id', 'toDoItem');
    toDoItem.innerHTML = `${toDo.title}: ${toDo.description}<br />
    Goal Completion: ${toDo.date}`;
    toDoItem.style.border = "2px solid var(--todo-light)";
    toDoIcons.setAttribute('id', 'toDoIcons');
    toDoCompletedIcon.setAttribute('id', 'completedToDo');
    toDoCompletedIcon.setAttribute('src', './images/check-bold.png');
    toDoCompletedIcon.setAttribute('alt', 'mark as completed icon');
    toDoCompletedIcon.setAttribute('title', 'mark completed');
    let todoIndex = `${myProjects[projIndex].toDoArray.indexOf(toDo)}`;
    toDoCompletedIcon.setAttribute('data-position', `${projIndex}`)
    toDoCompletedIcon.setAttribute('data-todo', `${todoIndex}`);
    toDoEditIcon.setAttribute('id', 'editToDo');
    toDoEditIcon.setAttribute('src', './images/pencil.png');
    toDoEditIcon.setAttribute('alt', 'edit project icon');
    toDoEditIcon.setAttribute('title', 'edit todo item');
    toDoEditIcon.setAttribute('data-position', `${projIndex}`)
    toDoEditIcon.setAttribute('data-todo', `${todoIndex}`);
    toDoDeleteIcon.setAttribute('id', 'deleteToDo');
    toDoDeleteIcon.setAttribute('src', './images/delete-alert.png');
    toDoDeleteIcon.setAttribute('alt', 'delete project icon');
    toDoDeleteIcon.setAttribute('title', 'delete todo item');
    toDoDeleteIcon.setAttribute('data-position', `${projIndex}`)
    toDoDeleteIcon.setAttribute('data-todo', `${todoIndex}`);
    // append
    card.appendChild(toDoItem);
    toDoItem.append(toDoIcons);
    toDoIcons.append(toDoCompletedIcon);
    toDoIcons.append(toDoEditIcon);
    toDoIcons.append(toDoDeleteIcon);
    // priority color (make separate function?)
    if (toDo.priority === "urgent") {
      toDoItem.style.backgroundColor = 'var(--urgent)';
    } else if (toDo.priority === "soon") {
      toDoItem.style.backgroundColor = 'var(--soon)';
    } else if (toDo.priority === "later") {
      toDoItem.style.backgroundColor = 'var(--later)';
    } else {                                          
      toDoItem.style.backgroundColor = 'var(--project-light)' 
      toDoItem.style.setProperty('text-decoration', "line-through");
      toDoCompletedIcon.remove();
    }
    // event listeners
    toDoCompletedIcon.addEventListener('dblclick', editElements.toDoCompleted);
    toDoEditIcon.addEventListener('dblclick', addForms.addToDoForm);
    toDoDeleteIcon.addEventListener('dblclick', deleteElements.deleteToDo);
  };

  const projectsSidebar = function(stuff) {
    const projects = document.getElementById('projects');
    projectList.innerHTML = "";
    myProjects.forEach(element => generateSidebar(element));
  };

  const generateSidebar = function(title) {
    const projectList = document.getElementById('projectList');
    const projectTitleSidebar = document.createElement('h6');
    projectTitleSidebar.textContent = `${title.project}`;
    projectTitleSidebar.setAttribute('id', 'projectTitleSidebar');
    projectList.append(projectTitleSidebar); 
  };

  return { addAllProjects, projectsSidebar };
})(); 

export default loadProjects;