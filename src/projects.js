import {
  addElements,
  deleteElements,
  editElements,
  interfaceElements,
} from "./ui";
import addForms from "./forms";

const loadProjects = (function () {
  let myProjects = [];
  // ADD ALL PROJECTS
  const addAllProjects = function () {
    myProjects = JSON.parse(localStorage.getItem("myProjects"));
    if (myProjects === null) {
      myProjects = [];
    }
    const projects = document.getElementById("projects");
    const projectList = document.getElementById("projectList");
    projects.innerHTML = "";
    projectList.innerHTML = "";
    const showAllProjectsBtn = document.createElement("button");
    showAllProjectsBtn.innerHTML = "Show All Projects";
    showAllProjectsBtn.setAttribute("id", "showAllProjectsBtn");
    showAllProjectsBtn.style.display = "none";
    projectsSidebar();
    myProjects.forEach((element) => generateProjectCards(element));
    projects.append(showAllProjectsBtn);
  };
  // GENERATE PROJECT CARDS
  const generateProjectCards = function (stuff) {
    const projects = document.getElementById("projects");
    const card = document.createElement("div");
    const cardProject = document.createElement("div");
    const projectTitle = document.createElement("h2");
    const projectTitleIcons = document.createElement("div");
    const minimizeIcon = document.createElement("img");
    const projectDeleteIcon = document.createElement("img");
    const toDoListHeader = document.createElement("h4");
    const addToDoBtn = document.createElement("button");
    // attributes
    card.setAttribute("class", "card");
    card.setAttribute("id", `${myProjects.indexOf(stuff)}`);
    cardProject.setAttribute("id", "titleDiv");
    projectTitle.setAttribute("id", "projectTitle");
    projectTitle.textContent = `Project: ${stuff.project}`;
    projectTitleIcons.setAttribute("id", "projectTitleIcons");
    minimizeIcon.setAttribute("id", "minimize");
    minimizeIcon.setAttribute("src", "./images/window-minimize.png");
    minimizeIcon.setAttribute("alt", "minimize todo list");
    minimizeIcon.setAttribute("title", "hide or show todo list");
    minimizeIcon.setAttribute("data-position", `${myProjects.indexOf(stuff)}`);
    projectDeleteIcon.setAttribute("id", "deletePrj");
    projectDeleteIcon.setAttribute("src", "./images/delete-alert.png");
    projectDeleteIcon.setAttribute("alt", "delete project icon");
    projectDeleteIcon.setAttribute("title", "delete project");
    projectDeleteIcon.setAttribute(
      "data-position",
      `${myProjects.indexOf(stuff)}`
    );
    toDoListHeader.setAttribute("id", "toDoListHeader");
    toDoListHeader.textContent = `${stuff.project} task list:`;
    addToDoBtn.setAttribute("id", "addToDoBtn");
    addToDoBtn.setAttribute("type", "submit");
    addToDoBtn.setAttribute("data-position", `${myProjects.indexOf(stuff)}`);
    addToDoBtn.textContent = "add task";
    // append
    projects.append(card);
    card.append(cardProject);
    cardProject.append(projectTitle);
    cardProject.append(projectTitleIcons);
    projectTitleIcons.append(minimizeIcon);
    projectTitleIcons.append(projectDeleteIcon);
    card.append(toDoListHeader);
    // --append todos
    let projIndex = `${myProjects.indexOf(stuff)}`;
    myProjects[`${myProjects.indexOf(stuff)}`].toDoArray.forEach((toDo) =>
      addAllToDos(toDo, projIndex)
    );
    // --append addToDoBtn
    card.append(addToDoBtn);
    // event listeners
    projectTitle.addEventListener("click", focusTitles);
    projectDeleteIcon.addEventListener(
      "dblclick",
      deleteElements.deleteProject
    );
    addToDoBtn.addEventListener("click", addForms.addToDoForm);
    minimizeIcon.addEventListener("click", interfaceElements.toggle);
  };

  // ADD ALL TODOS
  const addAllToDos = function (toDo, projIndex) {
    const card = document.getElementById(projIndex);
    const toDoItem = document.createElement("h6");
    const toDoIcons = document.createElement("div");
    const toDoCompletedIcon = document.createElement("img");
    const toDoEditIcon = document.createElement("img");
    const toDoDeleteIcon = document.createElement("img");
    //attributes
    toDoItem.setAttribute("id", "toDoItem");
    toDoItem.innerHTML = `&nbsp;&nbsp;${toDo.title}: ${toDo.description}<br />
    &nbsp;&nbsp;Goal Completion: ${toDo.date}`;
    toDoItem.style.border = "2px solid var(--todo-light)";
    toDoIcons.setAttribute("id", "toDoIcons");
    toDoCompletedIcon.setAttribute("id", "completedToDo");
    toDoCompletedIcon.setAttribute("src", "./images/check-bold.png");
    toDoCompletedIcon.setAttribute("alt", "mark as completed icon");
    toDoCompletedIcon.setAttribute("title", "mark complete or incomplete");
    let todoIndex = `${myProjects[projIndex].toDoArray.indexOf(toDo)}`;
    toDoCompletedIcon.setAttribute("data-position", `${projIndex}`);
    toDoCompletedIcon.setAttribute("data-todo", `${todoIndex}`);
    toDoEditIcon.setAttribute("id", "editToDo");
    toDoEditIcon.setAttribute("src", "./images/pencil.png");
    toDoEditIcon.setAttribute("alt", "edit project icon");
    toDoEditIcon.setAttribute("title", "edit todo item");
    toDoEditIcon.setAttribute("data-position", `${projIndex}`);
    toDoEditIcon.setAttribute("data-todo", `${todoIndex}`);
    toDoDeleteIcon.setAttribute("id", "deleteToDo");
    toDoDeleteIcon.setAttribute("src", "./images/delete-alert.png");
    toDoDeleteIcon.setAttribute("alt", "delete project icon");
    toDoDeleteIcon.setAttribute("title", "delete todo item");
    toDoDeleteIcon.setAttribute("data-position", `${projIndex}`);
    toDoDeleteIcon.setAttribute("data-todo", `${todoIndex}`);
    // append
    card.appendChild(toDoItem);
    toDoItem.append(toDoIcons);
    toDoIcons.append(toDoDeleteIcon);
    toDoIcons.append(toDoEditIcon);
    toDoIcons.append(toDoCompletedIcon);
    // priority color (make separate function?)
    if (toDo.priority === "urgent") {
      toDoItem.style.backgroundColor = "var(--urgent)";
    } else if (toDo.priority === "soon") {
      toDoItem.style.backgroundColor = "var(--soon)";
    } else if (toDo.priority === "later") {
      toDoItem.style.backgroundColor = "var(--later)";
    } else {
      toDoItem.style.backgroundColor = "var(--project-light)";
      toDoItem.style.setProperty("text-decoration", "line-through");
      toDoCompletedIcon.remove();
    }
    // event listeners
    toDoCompletedIcon.addEventListener("click", editElements.toDoCompleted);
    toDoEditIcon.addEventListener("click", addForms.addToDoForm);
    toDoDeleteIcon.addEventListener("dblclick", deleteElements.deleteToDo);
  };

  const projectsSidebar = function () {
    projectList.innerHTML = "";
    myProjects.forEach((element) => generateSidebar(element));
  };

  const generateSidebar = function (title) {
    const projectList = document.getElementById("projectList");
    const projectTitleSidebar = document.createElement("h6");
    projectTitleSidebar.textContent = `${title.project}`;
    projectTitleSidebar.setAttribute("class", "projectTitleSidebar");
    projectTitleSidebar.setAttribute("id", `${title.project}`);
    projectList.append(projectTitleSidebar);
    projectTitleSidebar.addEventListener("click", focusSidebar);
  };

  const focusSidebar = function (e) {
    for (let i = 0; i < myProjects.length; i++) {
      if (myProjects[i].project === e.target.id) {
        let nonHidden = document.getElementById(`${i}`);
        nonHidden.style.display = "block";
      } else {
        let hidden = document.getElementById(`${i}`);
        hidden.style.display = "none";
      }
    }
    const showAllProjectsBtn = document.getElementById("showAllProjectsBtn");
    showAllProjectsBtn.style.display = "block";
    showAllProjectsBtn.addEventListener("click", addAllProjects);
  };

  const focusEdits = function (e) {
    addAllProjects();
    for (let i = 0; i < myProjects.length; i++) {
      if (
        myProjects[i].project ===
        myProjects[e.target.getAttribute("data-position")].project
      ) {
        let nonHidden = document.getElementById(`${i}`);
        nonHidden.style.display = "block";
      } else {
        let hidden = document.getElementById(`${i}`);
        hidden.style.display = "none";
      }
    }
    const showAllProjectsBtn = document.getElementById("showAllProjectsBtn");
    showAllProjectsBtn.style.display = "block";
    showAllProjectsBtn.addEventListener("click", addAllProjects);
  };

  const focusTitles = function (e) {
    const string = e.target.innerHTML;
    addAllProjects();
    for (let i = 0; i < myProjects.length; i++) {
      if (myProjects[i].project === removeFirstWord(string)) {
        let nonHidden = document.getElementById(`${i}`);
        nonHidden.style.display = "block";
      } else {
        let hidden = document.getElementById(`${i}`);
        hidden.style.display = "none";
      }
    }
    const showAllProjectsBtn = document.getElementById("showAllProjectsBtn");
    showAllProjectsBtn.style.display = "block";
    showAllProjectsBtn.addEventListener("click", addAllProjects);
  };

  function removeFirstWord(str) {
    const indexOfSpace = str.indexOf(" ");
    if (indexOfSpace === -1) {
      return "";
    }
    return str.substring(indexOfSpace + 1);
  }

  return { addAllProjects, projectsSidebar, focusEdits };
})();

export default loadProjects;
